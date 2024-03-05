---
id: upload-and-download-blobs
title: ''
hide_table_of_contents: false
---

:::warning
Please not that this is for the upcoming devnet-2, and does **NOT** work with current devnet-1 yet. We are actively working to deliver it ASAP.
:::


## Background

Besides the new blob-carrying transactions introduced by [EIP-4844](https://eips.ethereum.org/EIPS/eip-4844), there are a few different types of *legacy* transactions which are widely supported by community tools like MetaMask:

- Regular transactions: a transaction from one account to another.
- Contract deployment transactions: a transaction without a 'to' address, where the data field is used for the contract code.
- Execution of a contract: a transaction that interacts with a deployed smart contract. In this case, 'to' address is the smart contract address.

The ultimate goal of EthDA is to support the new type of blob-carrying transactions, but at current stage, to keep maximal compatibility with ecosystem tools (like MetaMask, etc), we use regular transactions with an extensional protocol for Blobs uploading.

## Upload Blobs

### Step 1: Encode data to blobs

Encode raw data to blobs and compute KZG commitments, KZG proofs and versioned hashes.

### Step 2: Sign blobs

Use [eth_signTypedData_v4](https://docs.metamask.io/wallet/reference/eth_signTypedData_v4/) to generate an [EIP-712](https://eips.ethereum.org/EIPS/eip-712) signature for blob uploading authentication.

The parameters to be signed looks like below:

```JS
{
  domain: {
    // EthDA Devnet
    chainId: 177,
    name: "EthDA Blobs",
    // A place-holder
    verifyingContract: "0x0000000000000000000000000000000000000000",
    version: "1",
  },

  message: {
    // Whether EthDA need to generate DA attestations and submit to L1
    daAttestationsToL1: true,
    blobs: [..., ...],
    contentTypes: [..., ...],
    versionedHashes: [..., ...],
    kzgCommitments: [..., ...],
    kzgProofs: [..., ...]
  },
  // This refers to the keys of the following types object.
  primaryType: "Blobs",
  types: {
    // This refers to the domain the contract is hosted on.
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
    ],
    Blobs: [
      { name: "daAttestationsToL1", type: "boolean" },
      { name: "blobs", type: "string[]" },
      { name: "contentTypes", type: "string[]" },
      { name: "versionedHashes", type: "string[]" },
      { name: "kzgCommitments", type: "string[]" },
      { name: "kzgProofs", type: "string[]" }
    ]
  },
}
```

### Step 3: Upload blobs

Blobs could then be uploaded for later retrieval, with the signature generated above. For this purpose, a new RPC interface is introduced.

**ethda_uploadBlobs**, with parameters:
- `signature`: Signature generated in step above
- `blobs`: Blobs data
- `daAttestationsToL1`
- `contentTypes`
- `versionedHashes`
- `kzgCommitments`
- `kzgProofs`


:::warning
Blobs are only stored for a very short of time (like 1 hour). 
:::

### Step 4: Query blob storage fee

Similar to [EIP-4844](https://eips.ethereum.org/EIPS/eip-4844), we introduce blob gas as a new type of gas. It is independent of normal gas and follows its own targeting rule, similar to [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559). Users could use RPC interface below to query the real-time fee per blob:

**ethda_estimatePerBlobFee**

### Step 5: Send blob transaction

Users could now sign and send a regular transaction to EthDA for blobs storage:

**to**: Should be a place-holder address *0x0000000000000000000000000000000000000000*

**value**: The blobs storage fee. Should be *PER_BLOB_FEE* * *BLOB_COUNT*

**data**: Should be a json encoded in hexadecimal with UTF-8 character encoding

```JS
{
  daAttestationsToL1,
  contentTypes,
  versionedHashes,
  kzgCommitments,
  kzgProofs
}
```

### Step 6: Query transaction status

After a *blob transaction* described above is submitted, users could then monitor transaction status. If transaction is successfully minted, it means specified blobs are successfully stored by EthDA's DAS network.


## Download Blobs

Blobs could be download via regular **eth_getTransactionByHash / eth_getTransactionByBlockHashAndIndex / eth_getTransactionByBlockNumberAndIndex** RPC interfaces.