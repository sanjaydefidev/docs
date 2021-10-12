(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[2607],{6603:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={id:"getting-pair-addresses",title:"Pair Addresses"},s="getPair",p={unversionedId:"guides/getting-pair-addresses",id:"version-2.0.0/guides/getting-pair-addresses",isDocsHomePage:!1,title:"Pair Addresses",description:"The most obvious way to get the address for a pair is to call getPair on the factory. If the pair exists, this function will return its address, else address(0) (0x0000000000000000000000000000000000000000).",source:"@site/SDK_versioned_docs/version-2.0.0/guides/05-getting-pair-addresses.md",sourceDirName:"guides",slug:"/guides/getting-pair-addresses",permalink:"/sdk/2.0.0/guides/getting-pair-addresses",version:"2.0.0",sidebarPosition:5,frontMatter:{id:"getting-pair-addresses",title:"Pair Addresses"},sidebar:"version-V2/sdksidebar",previous:{title:"Trading",permalink:"/sdk/2.0.0/guides/trading"},next:{title:"Getting Started",permalink:"/sdk/2.0.0/reference/getting-started"}},l=[{value:"Examples",id:"examples",children:[{value:"TypeScript",id:"typescript",children:[]}]}],c={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getpair"},"getPair"),(0,i.kt)("p",null,"The most obvious way to get the address for a pair is to call ",(0,i.kt)("a",{parentName:"p",href:"../../../protocol/V2/reference/smart-contracts/factory#getpair"},"getPair")," on the factory. If the pair exists, this function will return its address, else ",(0,i.kt)("inlineCode",{parentName:"p"},"address(0)")," (",(0,i.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The "canonical" way to determine whether or not a pair exists.'),(0,i.kt)("li",{parentName:"ul"},"Requires an on-chain lookup.")),(0,i.kt)("h1",{id:"create2"},"CREATE2"),(0,i.kt)("p",null,"Thanks to some ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Factory.sol#L32"},"fancy footwork in the factory"),", we can also compute pair addresses ",(0,i.kt)("em",{parentName:"p"},"without any on-chain lookups")," because of ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1014"},"CREATE2"),". The following values are required for this technique:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("a",{parentName:"td",href:"../../../protocol/V2/reference/smart-contracts/factory"},"factory address"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"salt")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keccak256(abi.encodePacked(token0, token1))"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keccak256(init_code)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token0")," must be strictly less than ",(0,i.kt)("inlineCode",{parentName:"li"},"token1")," by sort order.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can be computed offline."),(0,i.kt)("li",{parentName:"ul"},"Requires the ability to perform ",(0,i.kt)("inlineCode",{parentName:"li"},"keccak256"),".")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"typescript"},"TypeScript"),(0,i.kt)("p",null,"This example makes use of the ",(0,i.kt)("a",{parentName:"p",href:"../reference/getting-started"},"Uniswap SDK"),". In reality, the SDK computes pair addresses behind the scenes, obviating the need to compute them manually like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { FACTORY_ADDRESS, INIT_CODE_HASH } from "@uniswap/sdk";\nimport { pack, keccak256 } from "@ethersproject/solidity";\nimport { getCreate2Address } from "@ethersproject/address";\n\nconst token0 = "0xCAFE000000000000000000000000000000000000"; // change me!\nconst token1 = "0xF00D000000000000000000000000000000000000"; // change me!\n\nconst pair = getCreate2Address(\n  FACTORY_ADDRESS,\n  keccak256(["bytes"], [pack(["address", "address"], [token0, token1])]),\n  INIT_CODE_HASH\n);\n')))}d.isMDXComponent=!0},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);