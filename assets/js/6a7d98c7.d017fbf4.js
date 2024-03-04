"use strict";(self.webpackChunkethda_docs=self.webpackChunkethda_docs||[]).push([[4958],{9079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=t(5893),o=t(1151);const a={id:"upload-and-download-blobs",title:"",hide_table_of_contents:!1},r=void 0,i={id:"developers/upload-and-download-blobs",title:"",description:"Background",source:"@site/docs/developers/upload-and-download-blobs.md",sourceDirName:"developers",slug:"/developers/upload-and-download-blobs",permalink:"/developers/upload-and-download-blobs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"upload-and-download-blobs",title:"",hide_table_of_contents:!1},sidebar:"mySidebar",previous:{title:"",permalink:"/developers/quick-start/using-ethda-faucet"},next:{title:"",permalink:"/resources/ethda-contracts"}},d={},l=[{value:"Background",id:"background",level:2},{value:"Upload Blobs",id:"upload-blobs",level:2},{value:"Step 1: Encode data to blobs",id:"step-1-encode-data-to-blobs",level:3},{value:"Step 2: Generate signature",id:"step-2-generate-signature",level:3},{value:"Step 3: Upload blobs",id:"step-3-upload-blobs",level:3},{value:"Step 4: Query blob storage fee",id:"step-4-query-blob-storage-fee",level:3},{value:"Step 5: Send transaction",id:"step-5-send-transaction",level:3},{value:"Step 6: Query transaction status",id:"step-6-query-transaction-status",level:3},{value:"Download Blobs",id:"download-blobs",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,s.jsxs)(n.p,{children:["Besides the new blob-carrying transactions introduced by ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-4844",children:"EIP-4844"}),", there are a few different types of ",(0,s.jsx)(n.em,{children:"legacy"})," transactions which are widely supported by community tools like MetaMask:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Regular transactions: a transaction from one account to another."}),"\n",(0,s.jsx)(n.li,{children:"Contract deployment transactions: a transaction without a 'to' address, where the data field is used for the contract code."}),"\n",(0,s.jsx)(n.li,{children:"Execution of a contract: a transaction that interacts with a deployed smart contract. In this case, 'to' address is the smart contract address."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The ultimate goal of EthDA is to support the new type of blob-carrying transactions, but at current stage, to keep maximal compatibility with ecosystem tools (like MetaMask, etc), we use regular transactions with an extensional protocol for Blobs uploading."}),"\n",(0,s.jsx)(n.h2,{id:"upload-blobs",children:"Upload Blobs"}),"\n",(0,s.jsx)(n.h3,{id:"step-1-encode-data-to-blobs",children:"Step 1: Encode data to blobs"}),"\n",(0,s.jsx)(n.p,{children:"Encode raw data to blobs and compute KZG commitments, KZG proofs and versioned hashes."}),"\n",(0,s.jsx)(n.h3,{id:"step-2-generate-signature",children:"Step 2: Generate signature"}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"https://docs.metamask.io/wallet/reference/eth_signTypedData_v4/",children:"eth_signTypedData_v4"})," to generate an ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP-712"})," signature for blob uploading authentication."]}),"\n",(0,s.jsx)(n.p,{children:"The parameters to be signed looks like below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JS",children:'{\n  domain: {\n    // EthDA Devnet\n    chainId: 177,\n    name: "EthDA Blobs",\n    // A place-holder\n    verifyingContract: "0x0000000000000000000000000000000000000000",\n    version: "1",\n  },\n\n  message: {\n    // Whether EthDA need to generate DA attestations and submit to L1\n    daAttestationsToL1: true,\n    contentTypes: [..., ...],\n    versionedHashes: [..., ...],\n    kzgCommitments: [..., ...],\n    kzgProofs: [..., ...]\n  },\n  // This refers to the keys of the following types object.\n  primaryType: "Blobs",\n  types: {\n    // This refers to the domain the contract is hosted on.\n    EIP712Domain: [\n      { name: "name", type: "string" },\n      { name: "version", type: "string" },\n      { name: "chainId", type: "uint256" },\n      { name: "verifyingContract", type: "address" },\n    ],\n    Blobs: [\n      { name: "daAttestationsToL1", type: "boolean" },\n      { name: "contentTypes", type: "string[]" },\n      { name: "versionedHashes", type: "string[]" },\n      { name: "kzgCommitments", type: "string[]" },\n      { name: "kzgProofs", type: "string[]" }\n    ]\n  },\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"step-3-upload-blobs",children:"Step 3: Upload blobs"}),"\n",(0,s.jsx)(n.p,{children:"Blobs could then be uploaded for later retrieval, with the signature generated above. For this purpose, a new RPC interface is introduced."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ethda_uploadBlobs"}),", with parameters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"signature"}),": Signature generated in step above"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blobs"}),": Blobs data"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"daAttestationsToL1"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"contentTypes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"versionedHashes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"kzgCommitments"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"kzgProofs"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Blobs are only stored for a very short of time (like 1 hour)."})}),"\n",(0,s.jsx)(n.h3,{id:"step-4-query-blob-storage-fee",children:"Step 4: Query blob storage fee"}),"\n",(0,s.jsxs)(n.p,{children:["Similar to ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-4844",children:"EIP-4844"}),", we introduce blob gas as a new type of gas. It is independent of normal gas and follows its own targeting rule, similar to ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1559",children:"EIP-1559"}),". Users could use RPC interface below to query the real-time fee per blob:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"ethda_estimatePerBlobFee"})}),"\n",(0,s.jsx)(n.h3,{id:"step-5-send-transaction",children:"Step 5: Send transaction"}),"\n",(0,s.jsx)(n.p,{children:"Users could now sign and send a regular transaction to EthDA for blobs storage:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"to"}),": Should be a place-holder address ",(0,s.jsx)(n.em,{children:"0x0000000000000000000000000000000000000000"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"value"}),": The blobs storage fee. Should be ",(0,s.jsx)(n.em,{children:"PER_BLOB_FEE"})," * ",(0,s.jsx)(n.em,{children:"BLOB_COUNT"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"data"}),": Should be a json encoded in hexadecimal with UTF-8 character encoding"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JS",children:"{\n  daAttestationsToL1,\n  contentTypes,\n  versionedHashes,\n  kzgCommitments,\n  kzgProofs\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-6-query-transaction-status",children:"Step 6: Query transaction status"}),"\n",(0,s.jsxs)(n.p,{children:["After a ",(0,s.jsx)(n.em,{children:"blob transaction"})," described above is submitted, users could then monitor transaction status. If transaction is successfully minted, it means specified blobs are successfully stored by EthDA's DAS network."]}),"\n",(0,s.jsx)(n.h2,{id:"download-blobs",children:"Download Blobs"}),"\n",(0,s.jsxs)(n.p,{children:["Blobs could be download via regular ",(0,s.jsx)(n.strong,{children:"eth_getTransactionByHash / eth_getTransactionByBlockHashAndIndex / eth_getTransactionByBlockNumberAndIndex"})," RPC interfaces."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var s=t(7294);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);