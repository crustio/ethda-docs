---
id: using-ethda-as-dstorage
title: ''
hide_table_of_contents: false
---

Developers could use [@ethda/blobs](https://www.npmjs.com/package/@ethda/blobs) NPM package to upload Blobs to EthDA and download from it. Currently only NodeJS environment is supported.

## Install

```sh
$ npm install @ethda/blobs
```

## Upload Blobs

```Javascript
import {BlobClient, EncodeBlobs} from '@ethda/blobs';
import {ethers} from "ethers";

const content = 'abc....';
const blobs = EncodeBlobs(Buffer.from(content, 'utf-8'));

const signer = new ethers.Wallet('<private_key>', new ethers.providers.JsonRpcProvider("https://rpc.ethda.io"));
const blobClient = new BlobClient(signer);
const hash = await blobClient.sendTx(blobs)
const receipt = await blobClient.getTxReceipt(hash)
```

## Download Blobs

```Javascript
import { BlobClient, EncodeBlobs } from '@ethda/blobs';

const txHash = '...';
const blobClient = new BlobClient(new ethers.providers.JsonRpcProvider("https://rpc.ethda.io"));
const result = await blobTrans.downloadBlobs(txHash)
/**
**  result: {
 blob_hashes: ['0x01853e6b060f5b155f406a7ca3f912df5f93873d9df56ad31904db846565dbd2'],
 sidecar: { blobs: [ [Array] ], commitments: [ [Array] ], proofs: [ [Array] ] }}
 **
*/
```