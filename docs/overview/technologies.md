---
id: technologies
title: ''
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Architecture

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/overview/technologies/architecture.png')} style={{maxWidth: 800}} />
</div>

## ZK Rollup

EthDA itself is an Ethereum ZK rollup powered by Polygon CDK, and derives security from Ethereum consensus.

## Blobs

EthDA is 100% compatible with Blob structure introduced by [EIP-4844](https://eips.ethereum.org/EIPS/eip-4844). The *header* of a Blob is the the Kate commitment to the Blob, plus a bit of other miscallaneous data (slot, shard, length proof), and a signature from the proposer; the *body* of a Blob consists of the original data, the extended data, and the proofs. Below is the detailed structure of a Blob from [Vitalik's notes](https://hackmd.io/@vbuterin/sharding_proposal):

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/overview/technologies/blob.png')} style={{maxWidth: 600}} />
</div>

## Yield Bearing

EthDA's gas token, $ETH, is an *rebasable* token with native yield. Yield comes from ETH staking and RWA protocols, and is passed back to EthDA users automatically.

## Revenue Sharing

L2s that using EthDA as Alt-DA could reward part of their DA fees to their users via EthDA's benefit sharing protocols.

- L2 user stakes $L2 token (L2's DAO token) to EthDA’s *Benefit Sharing Contract* on L1
- L2 chain uses EthDA as Alt-DA, and spend $ETH as gas fee and Blob storage fee
- EthDA accrues $ETH income for every L2 chain
- $ETH income from each L2 chain is periodically pooled into *Benefit Sharing Contract* for their staking users
- L2 user periodically claims $ETH rewards from *Benefit Sharing Contract*

<!-- ## RPC Interfaces -->
<!-- 
EthDA does not introduce any new EVM RPC interfaces. Instead, we extend existing RPC interfaces to support Blob uploading and downloading via Blob TX.

- **eth_sendRawTransaction**<br/>
  Similar to Ethereum L1, this RPC interface is used to post Blob TX to EthDA sequencers.
- **eth_getTransactionByHash / eth_getTransactionByBlockHashAndIndex / eth_getTransactionByBlockNumberAndIndex**<br/>
  This set of RPC interfaces could be used to download Blobs from EthDA. EthDA will check the requested transaction type, and if it's a Blob TX, the attached Blobs will be returned as part of the transaction data. -->

<!-- ## Data Availability Sampling (DAS) -->
<!-- 
So, how are Blobs stored on EthDA? EthDA employs a set of *decentralized Data Availability Nodes*, and uses DAS scheme to ensure Blob sharding and storage.

DAS on EthDA is an extended implementation of DAS on Ethereum beacon layer. In addition to that, EthDA is able to support permanent Blob storage instead of a short period of storage like 4 weeks.

Similar to L1, DA nodes are randomly shuffled and split into N subnets. Each Blob is published to a subnet based on their index, and that subnet will be responsible for storing the Blob and ensuring its availability as a whole.

DA node, however, does not need to store the whole Blob assigned to the subnet it belongs to. Instead, a Blob is split into multiple slices and DA nodes will randomly sample each other to make sure the Blob is stored by the whole subnet.
The whole subnet architecture is a grid structure of N horizontal subnets and M vertical subnets. -->

<!-- <div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/overview/technologies/das.png')} style={{width: 560}} />
</div> -->

<!-- ## Blobweave

There is a soft consensus mechanism among EthDA's sequencer network to produce L2 blocks (aka transaction bundles, or sequences) and submit ZK proofs to L1. To support Blob permanent storage by the sequencer network, EthDA uses a scheme called Blobweave similar to Arweave's Blockweave.

Basically, the sequencer network maintains the L2 block hash list, a list of the hashes of all previous L2 blocks. The L2 block hash is calculated based on transaction data bundled into the block, including the carried Blobs. Moreover, a historical block with Blob TX is randomly selected to be the recall block. Transactions of the recall block are hashed alongside to generate the new block hash, thus forming a weave of blobs which we call Blobweave.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/overview/technologies/blobweave.png')} style={{width: 560}} />
</div> -->