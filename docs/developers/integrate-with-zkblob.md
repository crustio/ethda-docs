---
id: integrate-with-zkblob
title: ''
hide_table_of_contents: false
---

Rollups can use zkBlob for DA by posting their data to EthDA and then proving that it was posted on Ethereum. This turtorial will define a demo rollup which will outline a very simple zkBlob rollup to illustrate at a high level what this could look like.

## Define a rollup

The first step to starting a new rollup is to define the structure of the commitments that each block consists of.

```go
type Sequence struct {
  // Rollup block number
  BatchNumber uint64
  // Data store to DA 
  BatchL2Data []byte
  // Prev block hash
  PrevBlockHash [32]byte
}

```

Note the EthDA-specific structure called the `dataAvailabilityMessage`, which is used to locate the data in the EthDA batch so that we can prove that data's inclusion via zkBlob if needed. `dataAvailabilityMessage` defined as []byte


## Rollup sequencer

The rollup sequence sender is responsible for creating blocks and writing block transaction data to EthDA and Ethereum. The rollup synchronizer node is responsible for reading that transaction data from EthDA and verify it. 

We can start by first defining the interfaces of EthDA and Ethereum networks that rollup nodes need to use.

```go
// DABackender is an interface for components that store and retrieve batch data
type DABackender interface {
	SequenceRetriever
	SequenceSender
	// Init initializes the DABackend
	Init() error
}

type dataAbilitier interface {
	PostSequence(ctx context.Context, sequences []ethmanTypes.Sequence) ([]byte, error)
}

// SequenceSender is used to send provided sequence of batches
type SequenceSender interface {
	// PostSequence sends the sequence data to the data availability backend, and returns the dataAvailabilityMessage
	// as expected by the contract
	PostSequence(ctx context.Context, batchesData [][]byte) ([]byte, error)
}

// SequenceRetriever is used to retrieve batch data
type SequenceRetriever interface {
	// GetSequence retrieves the sequence data from the data availability backend
	GetSequence(ctx context.Context, batchHashes []common.Hash, dataAvailabilityMessage []byte) ([][]byte, error)
}
```

Here we are waiting for the blob tx to be rollup to Ethereum, however, it would likely be better to simply download that blobs from EthDA instead.

A rollup synchronizer node will just consist of some representation of a blockchain along with clients to read from with EthDA and Ethereum.


### Committing to data

Typical blockchains commit to the transactions included in each block using a Merkle root. Rollups that use zkBlob for DA need to use the commitments that are relayed to the zkBlob contracts. For optimistic rollups, this could be as simple as referencing the data in the EthDA batch. For zk rollups, this would involve creating an inclusion proof to the blob span in the zkBlob contracts and then verifying that proof in the zk proof used to verify state.

### Creating blocks

The first step in creating a block is to post the block data to EthDA. Upon confirmation of the blob tx, This `dataAvailabilityMessage` can be used by contracts on Ethereum that use the zkBlob contracts to prove some specific data was included.

```go
func (d *EthdaBackend) PostSequence(ctx context.Context, batchesData [][]byte) ([]byte, error) {
	var hashes []byte
	for _, batch := range batchesData {
		hash, err := d.ethdaClient.PostBlob(ctx, batch)
		if err != nil {
			return nil, fmt.Errorf("post batch to ethda: %w", err)
		}
		hashes = append(hashes, hash.Bytes()...)
		log.Infof("Post da to ethda: %s", hash.Hex())
	}

	currentHash := common.Hash{}.Bytes()
	for _, batchData := range batchesData {
		types := []string{
			"bytes32",
			"bytes32",
		}
		values := []interface{}{
			currentHash,
			crypto.Keccak256(batchData),
		}
		currentHash = solsha3.SoliditySHA3(types, values)
	}

	sig, err := d.ethdaClient.SignBatchHash(common.BytesToHash(currentHash))
	if err != nil {
		return nil, err
	}

	return append(sig, hashes...), nil
}
```

Note that the sequence sender here is not yet posting sequences to Ethereum. This is because the sequencer is waiting for the EthDA batches to be relayed to the contracts. Once the contracts are updated, the sequencer can post the header to Ethereum.

## Rollup Synchronizer node

### Downloading the block

There are a few different mechanisms that could be used to download blocks. The simplest solution and what is outlined above is for rollup synchronizer node to wait until the dataAvailabilityMessages are posted to the respective chains, and then download each as they are posted. It would also be possible to gossip the headers ahead of time and download the rollup data from EthDA instead of waiting for the headers to be posted to Ethereum.

```go
func (d *EthdaBackend) GetSequence(ctx context.Context, batchHashes []common.Hash, dataAvailabilityMessage []byte) ([][]byte, error) {
	msgLen := len(dataAvailabilityMessage)

	if msgLen < crypto.SignatureLength || (msgLen-crypto.SignatureLength)%common.HashLength != 0 {
		return nil, fmt.Errorf("wrong da message length: %d", msgLen)
	}

	var data [][]byte
	for i := 0; i < (msgLen-crypto.SignatureLength)/common.HashLength; i++ {
		start := common.HashLength*i + crypto.SignatureLength
		hash := common.BytesToHash(dataAvailabilityMessage[start : start+common.HashLength])

		r, err := d.ethdaClient.GetBlob(hash)
		if err != nil {
			return nil, fmt.Errorf("get blob from ethda: %w", err)
		}
		data = append(data, r)
	}
	return data, nil
}

func (cli *Client) GetBlob(hash common.Hash) ([]byte, error) {
	rj, err := json.Marshal(map[string]interface{}{
		"method":  "eth_getTransactionByHash",
		"id":      "1",
		"jsonrpc": "2.0",
		"params":  []string{hash.Hex()},
	})
	if err != nil {
		return nil, err
	}

	resp, err := http.Post(cli.rpcUrl, "application/json", bytes.NewBuffer(rj))
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	var rpcTx *rpcTransaction
	if err := json.NewDecoder(resp.Body).Decode(&rpcTx); err != nil {
		return nil, fmt.Errorf("decode response, %w", err)
	}
	blobs := rpcTx.Result.Sidecar.Blobs

	var r []byte
	for _, blob := range blobs {
		b := DecodeBlob(common.Hex2Bytes(strings.TrimPrefix(blob, "0x")))
		r = append(r, b...)
	}

	return r, nil
}
```

This outline of a zkBlob rollup isn't doing execution or state transitions induced by the transactions, however, that step would occur here. If fraud is detected, the fraud proof process will begin. The only difference between the fraud proof process of a normal optimistic rollup and a rollup that uses zkBlob for DA is that the full node would first prove the fraudulent transaction was committed to by the Sequencer using the Span in the header and before proceeding with the normal process.
