---
id: blobsphere
title: ''
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Blobsphere is the Alt-DA solution for Ethereum L2s, with seemless DA interface defined by [EIP-4844](https://www.eip4844.com). It accepts transaction data from L2s via blob-carrying transactions (Blob TX), stores it in a *Data Availability Layer*, and relays commitments of storage to *Blobsphere DA Contract* deployed on Ethereum L1, which could then be checked by L2's contract on L1.

<img src={useBaseUrl('/img/overview/blobsphere/blobsphere.png')} style={{width: 660}} />

