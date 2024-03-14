---
id: integrate-with-zkblob
title: ''
hide_table_of_contents: false
---

:::warning
This is for the upcoming devnet-2, and does **NOT** work with current devnet-1 yet. We are actively working to deliver it ASAP.
:::

Rollups can use zkBlob for DA by posting their data to EthDA and then proving that it was posted on Ethereum. This turtorial will define a demo rollup which will outline a very simple zkBlob rollup to illustrate at a high level what this could look like.

## Define a rollup

The first step to starting a new rollup is to define the structure of the commitments that each block consists of.

```go
type Block struct {
  // Rollup tx data  that is submitted to EthDA.
  Txs []json.RawMessage `json:"txs"`
  // The set of commitments over a block that is submitted to Ethereum.
  Header `json:"Header"`
}

type Header struct {
  Height             uint64         `json:"height"`
  PreviousHash       []byte         `json:"previous_hash"`
  SequencerSignature Signature      `json:"sequencer_signature"`
  BlobSpan           BlobSpan       `json:"blob_span"`
}
```

Note the EthDA-specific structure called the `BlobSpan`, which is used to locate the data in the EthDA batch so that we can prove that data's inclusion via zkBlob if needed. `BlobSpan` could be defined like below:

```go
type BlobSpan struct {
  EthDABatch uint64 `json:"ethda_batch"`  // EthDA batch number
  BlobTxHash []byte  `json:"blob_tx_hash"`  // EthDA blob tx hash
}
```

## Rollup sequencer

The rollup sequencer is responsible for creating blocks and writing block transaction data to EthDA and Ethereum. The rollup full node is responsible for reading that transaction data from EthDA and verify it. 

We can start by first defining the interfaces of EthDA and Ethereum networks that rollup nodes need to use.

```go
type EthDAClient interface {
  // To call RPC methods of EthDA sequencer
  send(method, params)
}

type EthClient interface {
  // GetLatestRollupHeight returns the height of the latest rollup block by querying the appropriate contract on Ethereum.
  LatestRollupHeight() (uint64, error)
  // GetHeader returns the rollup header of a specific height.
  GetHeader(uint64) (Header, error)
  // SubmitHeader submits a header to the rollup bridge contract on Ethereum.
  SubmitHeader(Header) error
}
```

Here we are waiting for the blob tx to be rollup to Ethereum, however, it would likely be better to simply download that blobs from EthDA instead.

A rollup full node will just consist of some representation of a blockchain along with clients to read from with EthDA and Ethereum.

```go
type Fullnode struct {
  Blockchain
  EthDAClient
  EthClient
}

// Sequencer wraps the demo Fullnode struct to add specific functionality for producing blocks.
type Sequencer struct {
  Fullnode
}
```

### Committing to data

Typical blockchains commit to the transactions included in each block using a Merkle root. Rollups that use zkBlob for DA need to use the commitments that are relayed to the zkBlob contracts. For optimistic rollups, this could be as simple as referencing the data in the EthDA batch. For zk rollups, this would involve creating an inclusion proof to the blob span in the zkBlob contracts and then verifying that proof in the zk proof used to verify state.

### Creating blocks

The first step in creating a block is to post the block data to EthDA. Upon confirmation of the blob tx, a `BlobSpan` could be created which is included in the header and signed over by the sequencer. This `BlobSpan` can be used by contracts on Ethereum that use the zkBlob contracts to prove some specific data was included.

```go
func (s *Sequencer) ProduceBlock(txs []json.RawMessage) (Block, error) {
  blobTx = {txs...} // Wrap to a blob tx

  tx, err := s.EthDAClient.send("eth_sendRawTransactions", blobTx)
  if err != nil {
    return Block{}, err
  }

  var lastBlock Block
  if len(s.Blocks) > 0 {
    lastBlock = s.Blocks[len(s.Blocks)-1]
  }

  header := Header{
    Height:       uint64(len(s.Blocks) + 1),
    PreviousHash: lastBlock.Header.Hash(),
    BlobSpan: {
      EthDABatch: tx.block,
      BlobTxHash: tx.hash
    },
  }

  signature := s.key.Sign(header.SignBytes())

  header.SequencerSignature = signature

  block := Block{
    Txs:   txs,
    Header: header,
  }

  s.AddBlock(block)

  return block, nil
}
```

Note that the sequencer here is not yet posting headers to Ethereum. This is because the sequencer is waiting for the EthDA batches to be relayed to the contracts. Once the contracts are updated, the sequencer can post the header to Ethereum.

```go
func (s *Sequencer) UpdateHeaders() error {
  latestRollupHeight, err := s.EthClient.LatestRollupHeight()
  if err != nil {
    return err
  }

  for i := latestRollupHeight; i <= uint64(len(s.Blocks)+1); i++ {
    err := s.EthClient.SubmitHeader(s.Blocks[i].Header)
    if err != nil {
      return err
    }
  }

  return nil
}
```

## Rollup full node

### Downloading the block

There are a few different mechanisms that could be used to download blocks. The simplest solution and what is outlined above is for Fullnodes to wait until the blocks and the headers are posted to the respective chains, and then download each as they are posted. It would also be possible to gossip the headers ahead of time and download the rollup blocks from EthDA instead of waiting for the headers to be posted to Ethereum.

```go
func (f *Fullnode) AddBlock(b Block) error {
  if b.Header.Height != uint64(len(f.Blocks)+1) {
    return fmt.Errorf("failure to add block: expected block height %d, got %d", len(f.Blocks)+1, b.Header.Height)
  }
  if !b.Header.SequencerSignature.IsValid(f.SequencerAddress) {
    return fmt.Errorf("failure to add block: invalid sequencer signature")
  }

  f.Blocks = append(f.Blocks, b)
  return nil
}

func (f *Fullnode) GetLatestBlock() error {
  nextHeight := uint64(len(f.Blocks) + 1)

  // Download the next header from etheruem before we download the block data
  // from EthDA. Note that we could alternatievely download the header
  // directly from the sequencer instead of waiting.
  header, err := f.EthClient.GetHeader(nextHeight)
  if err != nil {
    return err
  }

  data, err := f.EthDAClient.send("eth_getTransactionByHash", header.BlobSpan.BlobTx)
  if err != nil {
    return err
  }

  return f.AddBlock(
    Block{
      Data:   data,
      Header: header,
    },
  )
}
```

This outline of a zkBlob rollup isn't doing execution or state transitions induced by the transactions, however, that step would occur here. If fraud is detected, the fraud proof process will begin. The only difference between the fraud proof process of a normal optimistic rollup and a rollup that uses zkBlob for DA is that the full node would first prove the fraudulent transaction was committed to by the Sequencer using the Span in the header and before proceeding with the normal process.