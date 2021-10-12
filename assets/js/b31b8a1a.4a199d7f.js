(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[111],{3040:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={id:"CommonAddLiquidityOptions",title:"CommonAddLiquidityOptions"},p="CommonAddLiquidityOptions",s={unversionedId:"reference/interfaces/CommonAddLiquidityOptions",id:"version-3.0.0/reference/interfaces/CommonAddLiquidityOptions",isDocsHomePage:!1,title:"CommonAddLiquidityOptions",description:"Options for producing the calldata to add liquidity.",source:"@site/SDK_versioned_docs/version-3.0.0/reference/interfaces/nonfungiblepositionmanager.commonaddliquidityoptions.md",sourceDirName:"reference/interfaces",slug:"/reference/interfaces/CommonAddLiquidityOptions",permalink:"/sdk/reference/interfaces/CommonAddLiquidityOptions",version:"3.0.0",frontMatter:{id:"CommonAddLiquidityOptions",title:"CommonAddLiquidityOptions"},sidebar:"version-V3/sdksidebar",previous:{title:"CollectOptions",permalink:"/sdk/reference/interfaces/CollectOptions"},next:{title:"IncreaseSpecificOptions",permalink:"/sdk/reference/interfaces/IncreaseSpecificOptions"}},l=[{value:"Properties",id:"properties",children:[{value:"deadline",id:"deadline",children:[]},{value:"slippageTolerance",id:"slippagetolerance",children:[]},{value:"token0Permit",id:"token0permit",children:[]},{value:"token1Permit",id:"token1permit",children:[]},{value:"useEther",id:"useether",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"commonaddliquidityoptions"},"CommonAddLiquidityOptions"),(0,o.kt)("p",null,"Options for producing the calldata to add liquidity."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"deadline"},"deadline"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"deadline"),": BigintIsh"),(0,o.kt)("p",null,"When the transaction expires, in epoch seconds."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-sdk/blob/aeb1b09/src/nonfungiblePositionManager.ts#L54"},"nonfungiblePositionManager.ts:54")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"slippagetolerance"},"slippageTolerance"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"slippageTolerance"),": ",(0,o.kt)("em",{parentName:"p"},"Percent")),(0,o.kt)("p",null,"How much the pool price is allowed to move."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-sdk/blob/aeb1b09/src/nonfungiblePositionManager.ts#L49"},"nonfungiblePositionManager.ts:49")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"token0permit"},"token0Permit"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"token0Permit"),": ",(0,o.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/StandardPermitArguments"},(0,o.kt)("em",{parentName:"a"},"StandardPermitArguments"))," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/AllowedPermitArguments"},(0,o.kt)("em",{parentName:"a"},"AllowedPermitArguments"))),(0,o.kt)("p",null,"The optional permit parameters for spending token0"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-sdk/blob/aeb1b09/src/nonfungiblePositionManager.ts#L64"},"nonfungiblePositionManager.ts:64")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"token1permit"},"token1Permit"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"token1Permit"),": ",(0,o.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/StandardPermitArguments"},(0,o.kt)("em",{parentName:"a"},"StandardPermitArguments"))," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/AllowedPermitArguments"},(0,o.kt)("em",{parentName:"a"},"AllowedPermitArguments"))),(0,o.kt)("p",null,"The optional permit parameters for spending token1"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-sdk/blob/aeb1b09/src/nonfungiblePositionManager.ts#L69"},"nonfungiblePositionManager.ts:69")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"useether"},"useEther"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"useEther"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Whether to spend ether. If true, one of the pool tokens must be WETH, by default false"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-sdk/blob/aeb1b09/src/nonfungiblePositionManager.ts#L59"},"nonfungiblePositionManager.ts:59")))}d.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);