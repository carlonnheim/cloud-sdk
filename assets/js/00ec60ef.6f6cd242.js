"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3649],{3905:(e,o,t)=>{t.d(o,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,a=function(e,o){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var o=r.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},s=function(e){var o=d(e.components);return r.createElement(c.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},u=r.forwardRef((function(e,o){var t=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||n;return t?r.createElement(f,i(i({ref:o},s),{},{components:t})):r.createElement(f,i({ref:o},s))}));function m(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=u;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<n;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7484:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var r=t(87462),a=(t(67294),t(3905));const n={id:"demo-of-cloud-sdk-for-javascript-with-calm-and-cap",title:"SAP Cloud Application Programming Model and SAP Cloud Application Lifecycle Management",sidebar_label:"SAP Cloud SDK & CAP",description:"Learn how to build cloud-native Apps and extension using SAP Cloud SDK for JavaScrip with Cloud Application Programming model (CAP)",keywords:["sap","cloud","sdk","cloud native","sap cloud sdk"]},i=void 0,l={unversionedId:"video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap",id:"video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap",title:"SAP Cloud Application Programming Model and SAP Cloud Application Lifecycle Management",description:"Learn how to build cloud-native Apps and extension using SAP Cloud SDK for JavaScrip with Cloud Application Programming model (CAP)",source:"@site/docs-js/video/calm.mdx",sourceDirName:"video",slug:"/video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap",permalink:"/cloud-sdk/docs/js/video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/video/calm.mdx",tags:[],version:"current",frontMatter:{id:"demo-of-cloud-sdk-for-javascript-with-calm-and-cap",title:"SAP Cloud Application Programming Model and SAP Cloud Application Lifecycle Management",sidebar_label:"SAP Cloud SDK & CAP",description:"Learn how to build cloud-native Apps and extension using SAP Cloud SDK for JavaScrip with Cloud Application Programming model (CAP)",keywords:["sap","cloud","sdk","cloud native","sap cloud sdk"]},sidebar:"docsJsSidebar",previous:{title:"Release Policy",permalink:"/cloud-sdk/docs/js/release-policy"},next:{title:"Release Notes",permalink:"/cloud-sdk/docs/js/release-notes-sap-cloud-sdk-for-javascript-and-typescript"}},c={},d=[],s={toc:d};function p(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Want to learn how you can create a ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview/overview-cloud-sdk#sap-cloud-application-programming-model"},"SAP Cloud Application Programming Model (CAP)")," service and consume it using the SAP Cloud SDK?\nThe demo by the colleagues from SAP Cloud Application Lifecycle Management (CALM) explains how you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a locally hosted CAP service"),(0,a.kt)("li",{parentName:"ul"},"Run API calls against the service using a typed client by SAP Cloud SDK for JavaScript")),(0,a.kt)("p",null,"This demo will familiarize you with the main concepts of developing cloud extensions with SAP Cloud SDK and CAP."),(0,a.kt)("div",{class:"sdk-video-container"},(0,a.kt)("iframe",{src:"https://cdnapisec.kaltura.com/p/1921661/sp/192166100/embedIframeJs/uiconf_id/35919811/partner_id/1921661?flashvars[mediaProxy.mediaPlayFrom]=598&iframeembed=true&playerId=sapvideo&entry_id=1_71wlxvjf&flashvars[streamerType]=auto",width:"100%",height:"500",allowfullscreen:!0,webkitallowfullscreen:!0,mozAllowFullScreen:!0,allow:"autoplay *; fullscreen *; encrypted-media *",frameborder:"0"})))}p.isMDXComponent=!0}}]);