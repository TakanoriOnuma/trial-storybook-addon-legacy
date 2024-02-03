import{r as C}from"./index-070054a4.js";var b={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=C,M=Symbol.for("react.element"),j=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,N=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,p){var s,a={},l=null,_=null;p!==void 0&&(l=""+p),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(_=r.ref);for(s in r)I.call(r,s)&&!k.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps,r)a[s]===void 0&&(a[s]=r[s]);return{$$typeof:M,type:e,key:l,ref:_,props:a,_owner:N.current}}d.Fragment=j;d.jsx=h;d.jsxs=h;b.exports=d;var c=b.exports;const m=({message:e})=>c.jsx("div",{children:e});try{m.displayName="TestMessage",m.__docgenInfo={description:"メッセージを表示するテストコンポーネント",displayName:"TestMessage",props:{message:{defaultValue:null,description:"メッセージ",name:"message",required:!0,type:{name:"string"}}}}}catch{}const i="myAddonParameter",g={},{useGlobals:W,useParameter:w}=__STORYBOOK_MODULE_PREVIEW_API__,L=()=>{const[e]=W();return{...w(i,g)??g,...e[i]}},B=e=>({[i]:e}),Y=e=>{const r=L();return c.jsxs("div",{children:[c.jsx(m,{...e}),c.jsxs("div",{children:["myAddonState: ",JSON.stringify(r)]})]})},q={title:"TestMessage",render:Y,component:m,args:{message:"Hello World"}},t={},o={args:{message:"こんにちは！"}},n={parameters:{...B({num:10})}},u={args:{message:"こんにちは！"},parameters:{...B({flag:!0,num:10})}};var f,y,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var A,P,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    message: "こんにちは！"
  }
}`,...(S=(P=o.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var E,T,O;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    ...createAssignableParametersForMyAddon({
      num: 10
    })
  }
}`,...(O=(T=n.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var v,D,R;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    message: "こんにちは！"
  },
  parameters: {
    ...createAssignableParametersForMyAddon({
      flag: true,
      num: 10
    })
  }
}`,...(R=(D=u.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const J=["Default","Text","DefaultWithParams","TextWithParams"];export{t as Default,n as DefaultWithParams,o as Text,u as TextWithParams,J as __namedExportsOrder,q as default};
//# sourceMappingURL=TestMessage.stories-c215d79f.js.map
