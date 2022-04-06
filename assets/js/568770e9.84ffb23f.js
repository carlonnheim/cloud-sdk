"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2642],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66999:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"overview",title:"Overview",sidebar_label:"Overview",description:"Client generators for OpenAPI services for TypeScript and JavaScript",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","openapi","JavaScript","TypeScript","OpenAPI"]},s=void 0,l={unversionedId:"js/features/openapi/overview",id:"js/features/openapi/overview",title:"Overview",description:"Client generators for OpenAPI services for TypeScript and JavaScript",source:"@site/docs/js/features/openapi/overview.mdx",sourceDirName:"js/features/openapi",slug:"/js/features/openapi/overview",permalink:"/cloud-sdk/docs/js/features/openapi/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/openapi/overview.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1649235975,formattedLastUpdatedAt:"4/6/2022",frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",description:"Client generators for OpenAPI services for TypeScript and JavaScript",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","openapi","JavaScript","TypeScript","OpenAPI"]},sidebar:"someSidebar",previous:{title:"On-Premise Systems",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise"},next:{title:"Generate an OpenAPI Client",permalink:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"}},c=[{value:"OpenAPI &amp; the SAP Cloud SDK",id:"openapi--the-sap-cloud-sdk",children:[{value:"OpenAPI Code Generator",id:"openapi-code-generator",children:[],level:3},{value:"Pregenerated OpenAPI Type-safe Client Libraries",id:"pregenerated-openapi-type-safe-client-libraries",children:[],level:3}],level:2},{value:"Why the SAP Cloud SDK for JavaScript for OpenAPI Services?",id:"why-the-sap-cloud-sdk-for-javascript-for-openapi-services",children:[],level:2},{value:"Feedback &amp; Support",id:"feedback--support",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"openapi--the-sap-cloud-sdk"},"OpenAPI & the SAP Cloud SDK"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," standard is a popular format to define RESTful APIs.\nTogether with ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/overview"},"OData")," OpenAPI is one of the key API definition formats used at SAP.\nThe SAP Cloud SDK provides convenient tooling to make the consumption of OpenAPI services easy and convenient on SAP Business Technology Platform."),(0,o.kt)("h3",{id:"openapi-code-generator"},"OpenAPI Code Generator"),(0,o.kt)("p",null,"We developed an ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"},"OpenAPI code generator")," from the ground up.\nIt's a ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client#options-of-the-openapi-cli"},"command line tool (CLI)")," capable of converting any OpenAPI specification into a TypeScript or JavaScript type-safe client library that is seamlessly integrated with other SAP Cloud SDK features like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"connectivity")),(0,o.kt)("li",{parentName:"ul"},"multi-tenancy"),(0,o.kt)("li",{parentName:"ul"},"authentication"),(0,o.kt)("li",{parentName:"ul"},"destinations"),(0,o.kt)("li",{parentName:"ul"},"and other abstractions of the SAP Business Technology Platform.")),(0,o.kt)("p",null,"We support both OpenAPI versions ",(0,o.kt)("strong",{parentName:"p"},"2.0")," and ",(0,o.kt)("strong",{parentName:"p"},"3.0"),".\nYou can use the OpenAPI generator to create a client library for any OpenAPI-based API service available on the ",(0,o.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP API Business Hub")," or found elsewhere in the Internet.\nIf you encounter any problems or errors with OpenAPI tooling give us feedback via our ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/get-support"},"support channels"),"."),(0,o.kt)("h3",{id:"pregenerated-openapi-type-safe-client-libraries"},"Pregenerated OpenAPI Type-safe Client Libraries"),(0,o.kt)("p",null,"We're collaborating with service publishers at SAP to certify and release type-safe OpenAPI client libraries for their services on npm.\nThe ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/openapi/pregenerated-clients/workflow"},"SAP Workflow service")," is a good example of such collaboration.\nStay tuned for more certified services.\nStay tuned for more OpenAPI client libraries certified by the SAP Cloud SDK or create a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/issues"},"request")," for the specific service you're interested in."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"generate a client library yourself")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can always ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"},"generate an OpenAPI client library yourself")," based on API specifications available on the ",(0,o.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP API Business Hub")," or found elsewhere."))),(0,o.kt)("h2",{id:"why-the-sap-cloud-sdk-for-javascript-for-openapi-services"},"Why the SAP Cloud SDK for JavaScript for OpenAPI Services?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You'll benefit from less code boilerplate and better developer experience."),(0,o.kt)("li",{parentName:"ul"},"We take care of various complexities around the development of applications and extensions on the SAP Business Technology Platform."),(0,o.kt)("li",{parentName:"ul"},"You'll get convenient abstractions for",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Destinations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Service bindings")),(0,o.kt)("li",{parentName:"ul"},"automated ",(0,o.kt)("inlineCode",{parentName:"li"},"CSRF")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ETag")," tokens handling"),(0,o.kt)("li",{parentName:"ul"},"automated management of HTTP Headers"),(0,o.kt)("li",{parentName:"ul"},"and much more"))),(0,o.kt)("li",{parentName:"ul"},"We hide the complexities of cloud development making many tasks easier for developers."),(0,o.kt)("li",{parentName:"ul"},"You're getting best in class ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk-js/issues/new/choose"},"support from the SAP Cloud SDK")," development team."),(0,o.kt)("li",{parentName:"ul"},"We take care of change management by continuously updating, integrating, and shipping the latest version of services that we release."),(0,o.kt)("li",{parentName:"ul"},"Our documentation is written by developers for developers.\nWe keep it relevant and up to date.")),(0,o.kt)("h2",{id:"feedback--support"},"Feedback & Support"),(0,o.kt)("p",null,"We are happy to hear from you via internal communication channels or our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/issues/new/choose"},"GitHub repository"),"."))}u.isMDXComponent=!0}}]);