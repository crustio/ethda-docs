"use strict";(self.webpackChunkethda_docs=self.webpackChunkethda_docs||[]).push([[4958],{3567:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>t,contentTitle:()=>i,default:()=>d,frontMatter:()=>m,metadata:()=>r,toc:()=>h});var n=e(5893),l=e(1151);const m={id:"upload-and-download-blobs",title:"",hide_table_of_contents:!1},i=void 0,r={id:"developers/upload-and-download-blobs",title:"",description:"To submit data to EthDA, users submit blob transactions similar to blob-carrying-transactions introduced by EIP-4844. EthDA blob transactions contain two component, a standard ethereum regular transaction with blob commitments and one or more blobs of data.",source:"@site/docs/developers/upload-and-download-blobs.md",sourceDirName:"developers",slug:"/developers/upload-and-download-blobs",permalink:"/developers/upload-and-download-blobs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"upload-and-download-blobs",title:"",hide_table_of_contents:!1},sidebar:"mySidebar",previous:{title:"Bridging Assets to EthDA",permalink:"/developers/quick-start/bridging-assets-to-ethda"},next:{title:"Integrate with zkBlob",permalink:"/developers/integrate-with-zkblob"}},t={},h=[{value:"Upload Blobs",id:"upload-blobs",level:2},{value:"Step 1: Encode data to blobs",id:"step-1-encode-data-to-blobs",level:3},{value:"Step 2: Query blob storage fee",id:"step-2-query-blob-storage-fee",level:3},{value:"Step 3: Construct and sign regular transactions",id:"step-3-construct-and-sign-regular-transactions",level:3},{value:"<code>to</code>",id:"to",level:4},{value:"<code>value</code>",id:"value",level:4},{value:"<code>data</code>",id:"data",level:4},{value:"Step 4: Send blob transaction &amp; blobs",id:"step-4-send-blob-transaction--blobs",level:3},{value:"Step 5: Query transaction status",id:"step-5-query-transaction-status",level:3},{value:"Download Blobs",id:"download-blobs",level:2}];function c(s){const a={a:"a",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"To submit data to EthDA, users submit blob transactions similar to blob-carrying-transactions introduced by EIP-4844. EthDA blob transactions contain two component, a standard ethereum regular transaction with blob commitments and one or more blobs of data."}),"\n",(0,n.jsx)(a.h2,{id:"upload-blobs",children:"Upload Blobs"}),"\n",(0,n.jsx)(a.h3,{id:"step-1-encode-data-to-blobs",children:"Step 1: Encode data to blobs"}),"\n",(0,n.jsx)(a.p,{children:"Encode raw data to blobs and compute KZG commitments, KZG proofs and versioned hashes."}),"\n",(0,n.jsxs)(a.p,{children:["For a Node.js implementation, please refer to ",(0,n.jsx)(a.a,{href:"https://github.com/crustio/ethda-blobs/blob/main/src/utils/blobs.ts",children:"ethda-blobs"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"step-2-query-blob-storage-fee",children:"Step 2: Query blob storage fee"}),"\n",(0,n.jsx)(a.p,{children:"Users could use the same execution api added by EIP-4844 to query the base fee per blob in wei, represented as a hexadecimal:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"eth_blobBaseFee"})}),"\n",(0,n.jsx)(a.h3,{id:"step-3-construct-and-sign-regular-transactions",children:"Step 3: Construct and sign regular transactions"}),"\n",(0,n.jsx)(a.h4,{id:"to",children:(0,n.jsx)(a.code,{children:"to"})}),"\n",(0,n.jsxs)(a.p,{children:["Should be the ",(0,n.jsx)(a.a,{href:"../resources/ethda-contracts",children:"DASAddress"})," contract."]}),"\n",(0,n.jsx)(a.h4,{id:"value",children:(0,n.jsx)(a.code,{children:"value"})}),"\n",(0,n.jsx)(a.p,{children:"Blobs storage fee. The calculation formula is:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"v"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"S"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"z"}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"s"})]})]}),(0,n.jsx)(a.mo,{children:"\u2217"}),(0,n.jsx)(a.mi,{children:"P"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"B"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"T"}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mi,{children:"B"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"G"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"P"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"B"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"})]})]}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"\u2217"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"B"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"F"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mo,{children:"\u2217"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"r"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"value = (Size_{blobs} * Params_{BlobTxBlobGasPerBlob}) * blobBaseFee * multiplier"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(a.span,{className:"mord mtight",children:[(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"s"})]})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"am"}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(a.span,{className:"mord mtight",children:[(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"Bl"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"x"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"Bl"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"G"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"s"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"er"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"Bl"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"})]})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"se"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"ee"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"lt"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"pl"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"})]})]})]})}),"\n",(0,n.jsx)(a.p,{children:"where:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"S"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"z"}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"s"})]})]}),(0,n.jsx)(a.mo,{children:"\u2217"}),(0,n.jsx)(a.mi,{children:"P"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"B"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"T"}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mi,{children:"B"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"G"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"P"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"B"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"})]})]}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"\u2217"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"B"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"F"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"e"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"(Size_{blobs} * Params_{BlobTxBlobGasPerBlob}) * blobBaseFee"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(a.span,{className:"mord mtight",children:[(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"s"})]})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"am"}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(a.span,{className:"mord mtight",children:[(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"Bl"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"x"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"Bl"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"G"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"s"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"er"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"Bl"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"})]})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"se"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"ee"})]})]})]})," is the base fee, and ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mi,{children:"F"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"e"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"priorityFee"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"or"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"ee"})]})})]})," is adjusted by the market, and user could set it to, like 10% of the base fee"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"S"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"z"}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"s"})]})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"Size_{blobs}"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(a.span,{className:"mord mtight",children:[(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"s"})]})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]})]})})]})," means blob count carried by the blob transanction"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"P"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"B"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"T"}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mi,{children:"B"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"G"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"P"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"B"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"})]})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"Params_{BlobTxBlobGasPerBlob}"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"am"}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(a.span,{className:"mord mtight",children:[(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"Bl"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"x"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"Bl"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"G"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"s"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"er"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"Bl"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"b"})]})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]})]})})]})," is the ",(0,n.jsx)(a.code,{children:"BlobTxBlobGasPerBlob"})," param value of Geth, which is 131072"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"B"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"F"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"e"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"blobBaseFee"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"se"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"ee"})]})})]})," could be queried via ",(0,n.jsx)(a.code,{children:"eth_blobBaseFee"})]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"r"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"multiplier"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"lt"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"pl"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"})]})})]})," is usually set to 1. To ensure successful transactions during network fluctuations, it can be adjusted as needed."]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["For a golang implementation, please refer to ",(0,n.jsx)(a.a,{href:"https://github.com/crustio/blob-utils/blob/main/blob.go",children:"blob-utils"}),"."]}),"\n",(0,n.jsx)(a.h4,{id:"data",children:(0,n.jsx)(a.code,{children:"data"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:"{\n  originator,\n  description,\n  content_type,\n  extra,\n  blobs: [\n    {\n      content_type,\n      versioned_hash,  // required\n      kzg_commitment, // required\n      kzg_proof // required\n    },\n    {...}\n    ...\n  ]\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"step-4-send-blob-transaction--blobs",children:"Step 4: Send blob transaction & blobs"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:"{\n  to,\n  value,\n  data,\n  signature,\n  blobs,\n  blobVersionedHashes,\n  kzgCommitments,\n  kzgProofs\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"step-5-query-transaction-status",children:"Step 5: Query transaction status"}),"\n",(0,n.jsxs)(a.p,{children:["After a ",(0,n.jsx)(a.em,{children:"blob transaction"})," described above is submitted, users could then monitor transaction status. If transaction is successfully minted, it means specified blobs are successfully stored by EthDA's DAS network."]}),"\n",(0,n.jsx)(a.h2,{id:"download-blobs",children:"Download Blobs"}),"\n",(0,n.jsxs)(a.p,{children:["Blobs could be download via regular ",(0,n.jsx)(a.strong,{children:"eth_getTransactionByHash / eth_getTransactionByBlockHashAndIndex / eth_getTransactionByBlockNumberAndIndex"})," RPC interfaces."]})]})}function d(s={}){const{wrapper:a}={...(0,l.a)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(c,{...s})}):c(s)}},1151:(s,a,e)=>{e.d(a,{Z:()=>r,a:()=>i});var n=e(7294);const l={},m=n.createContext(l);function i(s){const a=n.useContext(m);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function r(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),n.createElement(m.Provider,{value:a},s.children)}}}]);