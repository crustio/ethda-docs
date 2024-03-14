---
id: da
title: ''
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

EthDA employs a decentralized DA network for Blob data storage. The DA network comprises of a set of PoS node based on Tendermint consensus, which run DAS to ensure Blob storage, and submit *DA attestations* to Ethereum L1 for L2's rollup contracts to check data availability and verify proofs. Node rewarding and slash are managed by a set of PoS contracts deployed on EthDA's sequencer network. 

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/overview/da/da.png')} style={{maxWidth: '800'}} />
</div>

## Workflow

A typical workflow of Alt-DA scenario is like below:

- L2 signs & sends tx with encoded Blobs and *versioned_hashes / kzg_commitments / kzg_proofs* to EthDA Sequencer, and pays Blob storage fees
- EthDA Sequencer validates and sends Blobs to EthDA DAS Network
- EthDA DAS Network stores Blobs, performing DAS, and submits *DA Attestations* to DA Contracts on L1
- EthDA tx flows through EthDA CDK components like zkProver/Aggregator, and is rolluped to L1 with ZK Proofs for settlement
- L2 downloads Blobs from EthDA DAS Network on demand, and sends fraud/validity proofs to its rollup contracts for verification. L2 rollup contracts verify proofs and check *DA attestations* from EthDA DA Contracts on L1.


<!-- ## Overview

Blobsphere is the Alt-DA solution for Ethereum L2s, with seemless DA interface defined by [EIP-4844](https://www.eip4844.com). It accepts transaction data from L2s via blob-carrying transactions (Blob TX), stores it in a *Data Availability Layer*, and relays commitments of storage to *Blobsphere DA Contract* deployed on Ethereum L1, which could then be checked and verified by L2's contracts on L1.

<img src={useBaseUrl('/img/overview/blobsphere/blobsphere.png')} style={{width: 660}} />

## How Blobsphere works

EthDA by itself is an Ethereum validium with an off-chain *Data Availability Layer* which stores transaction data posted to it. But unlike other validiums which usually accepts legacy transactions, EthDA is specially catered for blob transactions, and *Blobsphere* is the protocol for L2s to use EthDA as an Alt-DA. -->