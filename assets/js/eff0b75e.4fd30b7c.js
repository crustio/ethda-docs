"use strict";(self.webpackChunkethda_docs=self.webpackChunkethda_docs||[]).push([[4546],{5721:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=i(5893),r=i(1151),s=i(4996);const o={id:"technologies",title:"",hide_table_of_contents:!1},l=void 0,a={id:"overview/technologies",title:"",description:"Architecture",source:"@site/docs/overview/technologies.md",sourceDirName:"overview",slug:"/overview/technologies",permalink:"/overview/technologies",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"technologies",title:"",hide_table_of_contents:!1},sidebar:"mySidebar",previous:{title:"",permalink:"/"},next:{title:"",permalink:"/overview/da"}},c={},h=[{value:"Architecture",id:"architecture",level:2},{value:"ZK Rollup",id:"zk-rollup",level:2},{value:"Blobs",id:"blobs",level:2},{value:"Yield Bearing",id:"yield-bearing",level:2},{value:"Revenue Sharing",id:"revenue-sharing",level:2}];function d(e){const t={a:"a",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("img",{src:(0,s.Z)("/img/overview/technologies/architecture.png"),style:{maxWidth:"800"}})}),"\n",(0,n.jsx)(t.h2,{id:"zk-rollup",children:"ZK Rollup"}),"\n",(0,n.jsx)(t.p,{children:"EthDA itself is an Ethereum ZK rollup powered by Polygon CDK, and derives security from Ethereum consensus."}),"\n",(0,n.jsx)(t.h2,{id:"blobs",children:"Blobs"}),"\n",(0,n.jsxs)(t.p,{children:["EthDA is 100% compatible with Blob structure introduced by ",(0,n.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-4844",children:"EIP-4844"}),". The ",(0,n.jsx)(t.em,{children:"header"})," of a Blob is the the Kate commitment to the Blob, plus a bit of other miscallaneous data (slot, shard, length proof), and a signature from the proposer; the ",(0,n.jsx)(t.em,{children:"body"})," of a Blob consists of the original data, the extended data, and the proofs. Below is the detailed structure of a Blob from ",(0,n.jsx)(t.a,{href:"https://hackmd.io/@vbuterin/sharding_proposal",children:"Vitalik's notes"}),":"]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("img",{src:(0,s.Z)("/img/overview/technologies/blob.png"),style:{maxWidth:"600"}})}),"\n",(0,n.jsx)(t.h2,{id:"yield-bearing",children:"Yield Bearing"}),"\n",(0,n.jsxs)(t.p,{children:["EthDA's gas token, $ETH, is an ",(0,n.jsx)(t.em,{children:"rebasable"})," token with native yield. Yield comes from ETH staking and RWA protocols, and is passed back to EthDA users automatically."]}),"\n",(0,n.jsx)(t.h2,{id:"revenue-sharing",children:"Revenue Sharing"}),"\n",(0,n.jsx)(t.p,{children:"L2s that using EthDA as Alt-DA could reward part of their DA fees to their users via EthDA's benefit sharing protocols."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["L2 user stakes $L2 token (L2's DAO token) to EthDA\u2019s ",(0,n.jsx)(t.em,{children:"Benefit Sharing Contract"})," on L1"]}),"\n",(0,n.jsx)(t.li,{children:"L2 chain uses EthDA as Alt-DA, and spend $ETH as gas fee and Blob storage fee"}),"\n",(0,n.jsx)(t.li,{children:"EthDA accrues $ETH income for every L2 chain"}),"\n",(0,n.jsxs)(t.li,{children:["$ETH income from each L2 chain is periodically pooled into ",(0,n.jsx)(t.em,{children:"Benefit Sharing Contract"})," for their staking users"]}),"\n",(0,n.jsxs)(t.li,{children:["L2 user periodically claims $ETH rewards from ",(0,n.jsx)(t.em,{children:"Benefit Sharing Contract"})]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>o});var n=i(7294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);