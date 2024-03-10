---
id: upload-and-download-blobs
title: ''
hide_table_of_contents: false
---

:::warning
Please not that this is for the upcoming devnet-2, and does **NOT** work with current devnet-1 yet. We are actively working to deliver it ASAP.
:::

To submit data to EthDA, users submit blob transactions similar to blob-carrying-transactions introduced by EIP-4844. EthDA blob transactions contain two component, a standard ethereum regular transaction with blob commitments and one or more blobs of data. 


## Upload Blobs

### Step 1: Encode data to blobs

Encode raw data to blobs and compute KZG commitments, KZG proofs and versioned hashes.

### Step 2: Query blob storage fee

Users could use RPC interface below to query the real-time fee per blob byte:

**ethda_estimatePerBlobByteFee**

### Step 3: Construct and sign regular transactions

#### `to`
Should be a designated contract address (given later)

#### `value`
Blobs storage fee

#### `data`

```JS
{
  originator: "...",
  description: "...",
  content_type: "...",
  extra: "...",
  blobs: [
    {
      content_type: "...",
      versioned_hash: "...",  // required
      kzg_commitment: "...", // required
      kzg_proof: "..." // required
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
  blobs: [..., ...]
}
```

### Step 5: Query transaction status

After a *blob transaction* described above is submitted, users could then monitor transaction status. If transaction is successfully minted, it means specified blobs are successfully stored by EthDA's DAS network.


## Download Blobs

Blobs could be download via regular **eth_getTransactionByHash / eth_getTransactionByBlockHashAndIndex / eth_getTransactionByBlockNumberAndIndex** RPC interfaces.