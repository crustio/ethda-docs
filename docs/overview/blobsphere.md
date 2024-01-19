---
id: blobsphere
title: ''
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

Blobsphere is the Alt-DA solution for Ethereum L2s, with seemless DA interface defined by [EIP-4844](https://www.eip4844.com). It accepts transaction data from L2s via blob-carrying transactions (Blob TX), stores it in a *Data Availability Layer*, and relays commitments of storage to *Blobsphere DA Contract* deployed on Ethereum L1, which could then be checked and verified by L2's contracts on L1.

<img src={useBaseUrl('/img/overview/blobsphere/blobsphere.png')} style={{width: 660}} />

## How Blobsphere works

EthDA by itself is an Ethereum validium with an off-chain *Data Availability Layer* which stores transaction data posted to it. But unlike other validiums which usually accepts legacy transactions, EthDA is specially catered for blob transactions, and *Blobsphere* is the protocol for L2s to use EthDA as an Alt-DA.