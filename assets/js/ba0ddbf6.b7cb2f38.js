"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1311],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(o),f=n,v=p["".concat(s,".").concat(f)]||p[f]||c[f]||r;return o?a.createElement(v,i(i({ref:t},u),{},{components:o})):a.createElement(v,i({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},85446:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],l={id:"video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloud-sdk-for-java",title:"Video Tutorial: Generate Your Type-Safe OData Client",sidebar_label:"Generate OData Client",description:"You will learn how to generate a type-safe OData client with SAP Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s=void 0,d={unversionedId:"java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloud-sdk-for-java",id:"java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloud-sdk-for-java",title:"Video Tutorial: Generate Your Type-Safe OData Client",description:"You will learn how to generate a type-safe OData client with SAP Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Business Technology Platform",source:"@site/docs/java/video/odata-generator.mdx",sourceDirName:"java/video",slug:"/java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloud-sdk-for-java",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloud-sdk-for-java",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/video/odata-generator.mdx",tags:[],version:"current",lastUpdatedBy:"Tom Frenken",lastUpdatedAt:1652957324,formattedLastUpdatedAt:"5/19/2022",frontMatter:{id:"video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloud-sdk-for-java",title:"Video Tutorial: Generate Your Type-Safe OData Client",sidebar_label:"Generate OData Client",description:"You will learn how to generate a type-safe OData client with SAP Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-getting-started-with-sap-cloud-sdk-for-java"},next:{title:"Destinations and Cloud Connector",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java"}},u={},c=[{value:"Looking for More?",id:"looking-for-more",level:2}],p={toc:c};function f(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Imagine you need to develop an app that integrates with an OData service.\nMaybe you also want to host it on SAP Business Technology Platform?\nThis might be a painstaking task.\nThis video tutorial shows how to minimize your efforts and simplify everything to the limit.\nAll you have to do is use SAP Cloud SDK for Java and have your hands on an API definition which is usually the ",(0,r.kt)("inlineCode",{parentName:"p"},"EDMX")," file.\nIn case you have access to your service, the simplest way to get it is by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"/$metadata")," endpoint and saving it to a file."),(0,r.kt)("p",null,"In this video, the SAP developers' advocate ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCkzNZP9fzLxRyhnGT2ziSRw"},"Max Streifeneder")," will take you step-by-step to success.\nYour can also check our docs on generating ",(0,r.kt)("a",{parentName:"p",href:"../features/odata/generate-typed-odata-v2-and-v4-client-for-java"},"OData type-safe client"),".\nEnjoy the video!"),(0,r.kt)("div",{class:"sdk-video-container"},(0,r.kt)("iframe",{class:"sdk-video",src:"https://www.youtube.com/embed/NXuDRONdRTQ?start=2185",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"looking-for-more"},"Looking for More?"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCkzNZP9fzLxRyhnGT2ziSRw"},"Max's channel")," for other videos on SAP Cloud SDK and other SAP technologies.\nHe speaks about difficult enterprise software topics and helps to navigate the vast SAP Cloud ecosystem to help you deliver beautiful Apps and Extensions for SAP S/4HANA and other popular SAP products."))}f.isMDXComponent=!0}}]);