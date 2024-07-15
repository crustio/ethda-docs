---
id: upload-and-download-blobs
title: ''
hide_table_of_contents: false
---


To submit data to EthDA, users submit blob transactions similar to blob-carrying-transactions introduced by EIP-4844. EthDA blob transactions contain two component, a standard ethereum regular transaction with blob commitments and one or more blobs of data. 


## Upload Blobs

### Step 1: Encode data to blobs

Encode raw data to blobs and compute KZG commitments, KZG proofs and versioned hashes.

For a Node.js implementation, please refer to [ethda-blobs](https://github.com/crustio/ethda-blobs/blob/main/src/utils/blobs.ts).

### Step 2: Query blob storage fee

Users could use the same execution api added by EIP-4844 to query the base fee per blob in wei, represented as a hexadecimal:

**eth_blobBaseFee**

### Step 3: Construct and sign regular transactions

#### `to`
Should be the [DASAddress](../resources/ethda-contracts) contract.

#### `value`
Blobs storage fee. The calculation formula is:

$$value = (Size_{blobs} * Params_{BlobTxBlobGasPerBlob}) * blobBaseFee * multiplier$$

where:
- $(Size_{blobs} * Params_{BlobTxBlobGasPerBlob}) * blobBaseFee$ is the base fee, and $priorityFee$ is adjusted by the market, and user could set it to, like 10% of the base fee
- $Size_{blobs}$ means blob count carried by the blob transanction
- $Params_{BlobTxBlobGasPerBlob}$ is the `BlobTxBlobGasPerBlob` param value of Geth, which is 131072
- $blobBaseFee$ could be queried via `eth_blobBaseFee`
- $multiplier$ is usually set to 1. To ensure successful transactions during network fluctuations, it can be adjusted as needed.

For a golang implementation, please refer to [blob-utils](https://github.com/crustio/blob-utils/blob/main/blob.go).

<!-- $$Length_{blobs} * Params_{BlobTxBlobGasPerBlob} * BlobBaseFee$$ -->

#### `data`


```JS
{
  originator,
  description,
  content_type,
  extra,
  blobs: [
    {
      content_type,
      versioned_hash,  // required
      kzg_commitment, // required
      kzg_proof // required
    },
    {...}
    ...
  ]
}
```

### Step 4: Send blob transaction & blobs

```JS
{
  to,
  value,
  data,
  signature,
  blobs,
  blobVersionedHashes,
  kzgCommitments,
  kzgProofs
}
```

### Step 5: Query transaction status

After a *blob transaction* described above is submitted, users could then monitor transaction status. If transaction is successfully minted, it means specified blobs are successfully stored by EthDA's DAS network.


## Download Blobs

Blobs could be download via regular **eth_getTransactionByHash / eth_getTransactionByBlockHashAndIndex / eth_getTransactionByBlockNumberAndIndex** RPC interfaces.
