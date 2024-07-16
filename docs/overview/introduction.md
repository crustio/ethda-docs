---
id: introduction
title: ''
slug: /
hide_table_of_contents: false
---

EthDA is a native and seamless DA network for aggregated growth of L2s. It's running as [Polygon CDK](https://polygon.technology/polygon-cdk)-based L2, with standard [EIP-4844](https://www.eip4844.com) Blobs support and Data Availability Sampling for Blob permanent storage. DA fees, paid with $ETH by Alt-DA L2s, is rewarded to L2s and their DApp users. Also, with native support of Blobs, EthDA could potentially be extended as dStorage solution for users.

There are various Ethereum scaling solutions like sidechains, rollups, plasma and validium, etc, with different characteristics and trade-offs between security, decentralization, and throughput, etc. One of the most essential differences is Data Availability. Using Ethereum L1 as DA derives security from Ethereum and that's the reason why rollups are widely regarded as the only trustless scaling solution in the medium and long term. But posting L2 transaction data to L1 requires high gas consumption and may cause congestion on L1. This situation becomes even worse as L2 ecosystem prospers.

The long term and canonical solution to this DA dilemma is Danksharding, and the medium term solution is EIP-4844, or Proto-Danksharding, which the Ethereum community is actively working on as part of the Cancun-Deneb upgrade. EIP-4844 introduces a new type of Blob TX that rollups could use to post their L2 transaction bundle to L1 in a gas efficient manner. Blob transaction is forwards compatible with Danksharding, and the carried Blobs will be persisted by the consensus layer for a limited period like 4 weeks.

However, since EIP-4844 took time to implement and deploy (not to mention the full Danksharding), it's observed that some rollups are opting for Alt-DA solutions like Celestia, Avail, etc. Both Celestia and Avail are separate blockchains built on top of different technical stacks and providing their own Data Availability interface.

EthDA, as a contrast, is an Ethereum native Alt-DA solution, in that:
- EthDA itself is an Ethereum ZK L2, and is administered by a collection of smart contracts deployed on Ethereum L1
- EthDA provides a seamless Blob-based DA interface to Alt-DA chain users, allowing their sequencers to pay storage fees with native $ETH