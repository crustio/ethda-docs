---
id: upload-and-download-blobs
title: ''
hide_table_of_contents: false
---

## Background

Besides the new blob-carrying transactions introduced by [EIP-4844](https://eips.ethereum.org/EIPS/eip-4844), there are a few different types of *legacy* transactions which are widely supported by community tools like MetaMask:

- Regular transactions: a transaction from one account to another.
- Contract deployment transactions: a transaction without a 'to' address, where the data field is used for the contract code.
- Execution of a contract: a transaction that interacts with a deployed smart contract. In this case, 'to' address is the smart contract address.

The ultimate goal of EthDA is to support the new type of blob-carrying transactions, but at current stage, to keep maximal compatibility with ecosystem tools (like MetaMask, etc), we use regular transactions with an extensional protocol for Blobs uploading.

## Upload Blobs

FirsBlobs and their additional information should be placed in `data` field, and encoded in hexadecimal with UTF-8 character encoding.

A typical blob uploading transaction have fields like below:

```json
{
  from,
  to,
  gas,
  value,
  gasPrice,
  maxPriorityFeePerGas,
  maxFeePerGas,
  data: {
    blobs,
    blobContentTypes,
    blobVersionedHashes,
    kzgCommitments,
    kzgProofs
  }
}
```

Please note:

- `to`: Should be always set to a placeholder address `0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE`
- `value`: Should always be 0
- `gas`: Including normal transaction fees and blob storage fees
- `data` -> `blobs/blobVersionedHashes/kzgCommitments/kzgProofs`: Same to [EIP-4844](https://eips.ethereum.org/EIPS/eip-4844) blob carrying transactions
- `data` -> `blobContentTypes`: Specify mime type of the Blobs. Useful for users storing application data.

## Download Blobs

Blobs could be download via regular **eth_getTransactionByHash / eth_getTransactionByBlockHashAndIndex / eth_getTransactionByBlockNumberAndIndex** RPC interfaces.