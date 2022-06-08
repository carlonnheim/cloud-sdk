"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8842],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},72360:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),i="tabItem_OmH5";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),i=a(72389),o=a(67392),l=a(7094),s=a(12466),u=a(86010),d="tabList_uSqn",p="tabItem_LplD";function c(e){var t,a,i,c=e.lazy,m=e.block,h=e.defaultValue,y=e.values,v=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=y?y:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===h?h:null!=(t=null!=h?h:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),T=w.tabGroupChoices,C=w.setTabGroupChoices,S=(0,r.useState)(N),x=S[0],P=S[1],E=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=T[v];null!=j&&j!==x&&g.some((function(e){return e.value===j}))&&P(j)}var q=function(e){var t=e.currentTarget,a=E.indexOf(t),n=g[a].value;n!==x&&(D(t),P(n),null!=v&&C(v,n))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},f)},g.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:O,onFocus:q,onClick:q},i,{className:(0,u.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),c?(0,r.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},20807:function(e,t,a){var n=a(67294),r=a(63081);t.Z=function(e){var t=e.slug,a=e.name;return n.createElement("a",{href:"/cloud-sdk/api/"+r.Z[0]+"/"+t},a)}},63081:function(e,t){t.Z=["2.4.0","2.3.0","2.2.0","2.1.0","2.0.0","1.54.0","1.53.1","1.53.0","1.52.0","1.51.0","1.50.0","1.49.0","1.48.1","1.48.0","1.47.1","1.47.0","1.46.0","1.45.0","1.44.0","1.43.0","1.42.0","1.41.0","1.40.0","1.39.0","1.38.0","1.37.1","1.37.0","1.36.1","1.36.0","1.35.0","1.34.0","1.33.0","1.32.1","1.32.0","1.31.0","1.30.0","1.29.0","1.28.2","1.28.1","1.28.0","1.27.0","1.26.1","1.26.0","1.25.0","1.24.1","1.24.0","1.23.0","1.22.0","1.21.2","1.21.1","1.21.0","1.20.1","1.20.0","1.19.0","1.18.1","1.18.0"]},94779:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=(a(20807),a(44996),a(9877)),l=a(72360),s=["components"],u={title:"Query Parameters",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Query Parameters",description:"This article describes how query parameters are prioritized and handled by the SAP Cloud SDK.",keywords:["sap","cloud","sdk","parameters","encoding","connectivity","JavaScript","TypeScript"]},d=void 0,p={unversionedId:"js/features/connectivity/query-parameters",id:"js/features/connectivity/query-parameters",title:"Query Parameters",description:"This article describes how query parameters are prioritized and handled by the SAP Cloud SDK.",source:"@site/docs/js/features/connectivity/query-parameters.mdx",sourceDirName:"js/features/connectivity",slug:"/js/features/connectivity/query-parameters",permalink:"/cloud-sdk/docs/js/features/connectivity/query-parameters",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/connectivity/query-parameters.mdx",tags:[],version:"current",lastUpdatedBy:"KavithaSiva",lastUpdatedAt:1654678013,formattedLastUpdatedAt:"6/8/2022",frontMatter:{title:"Query Parameters",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Query Parameters",description:"This article describes how query parameters are prioritized and handled by the SAP Cloud SDK.",keywords:["sap","cloud","sdk","parameters","encoding","connectivity","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Generic HTTP Client",permalink:"/cloud-sdk/docs/js/features/connectivity/generic-http-client"},next:{title:"On-Premise Systems",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise"}},c={},m=[{value:"Header Origins and Priority",id:"header-origins-and-priority",level:2},{value:"Custom Parameters",id:"custom-parameters",level:3},{value:"Destination Parameters",id:"destination-parameters",level:3},{value:"Internal Parameters",id:"internal-parameters",level:3},{value:"Encoding",id:"encoding",level:2}],h={toc:m};function y(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This documents applies to version 2 of the SAP Cloud SDK."))),(0,i.kt)("h2",{id:"header-origins-and-priority"},"Header Origins and Priority"),(0,i.kt)("p",null,"As partially described in the ",(0,i.kt)("a",{parentName:"p",href:"./destination#additional-headers-and-query-parameters-on-destinations"},"destination guide")," there are multiple possible origins for query parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provided by the user on request level.\nThese parameters are referred to as ",(0,i.kt)("inlineCode",{parentName:"li"},"custom")," parameters."),(0,i.kt)("li",{parentName:"ul"},"Defined by the destination object or properties."),(0,i.kt)("li",{parentName:"ul"},"Introduced by the SAP Cloud SDK.\nThese parameters are referred to as ",(0,i.kt)("inlineCode",{parentName:"li"},"internal")," parameters.")),(0,i.kt)("p",null,"In case there are parameters with the same key from multiple origins the priority is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Custom")," parameters"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Destination")," parameters"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Internal")," parameters")),(0,i.kt)("h3",{id:"custom-parameters"},"Custom Parameters"),(0,i.kt)("p",null,"Custom parameters are set on the request level by the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," method of the generated clients"),(0,i.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi.requestBuilder().getAll().addCustomQueryParameters({\n  apikey: 'my-api-key'\n});\n"))),(0,i.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder().getAll().addCustomQueryParameters({\n  apikey: 'my-api-key'\n});\n")))),(0,i.kt)("p",null,"or the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," method of the generic ",(0,i.kt)("inlineCode",{parentName:"p"},"http-client"),":"),(0,i.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const requestConfig = {\n  params: {\n    custom: { parameterKey: parameterValue }\n  }\n};\nexecuteHttpRequest(myDestination, requestConfig);\n"))),(0,i.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const requestConfig = {\n  params: {\n    parameterKey: parameterValue\n  }\n};\nexecuteHttpRequest(myDestination, requestConfig);\n")))),(0,i.kt)("p",null,"Note the difference between version 1 and 2 of the SAP Cloud SDK.\nIn version 2, we allow to specify the origin of the header.\nFor version 1, it is always ",(0,i.kt)("inlineCode",{parentName:"p"},"custom"),"."),(0,i.kt)("h3",{id:"destination-parameters"},"Destination Parameters"),(0,i.kt)("p",null,"You set these parameters on the destination object as described ",(0,i.kt)("a",{parentName:"p",href:"./destination#additional-headers-and-query-parameters-on-destinations"},"here"),".\nYou can investigate the parsed parameters in the ",(0,i.kt)("inlineCode",{parentName:"p"},"queryParameters")," property of the destination object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { queryParameters } = await getDestination({\n  destinationName: 'myDestination',\n  userJwt: 'yourJwt'\n});\n")),(0,i.kt)("h3",{id:"internal-parameters"},"Internal Parameters"),(0,i.kt)("p",null,"The SAP Cloud SDK sets certain parameters in the query per default.\nFor OData the format is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," for example using a query parameter.\nAlso all chosen options like filter, select, or top in the OData clients lead to query parameters considered to be ",(0,i.kt)("inlineCode",{parentName:"p"},"internal"),":"),(0,i.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi.requestBuilder().getAll().\n    .select(myEntityApi.schema.FIRST_NAME)\n    .top(5)\n// request url: /myEntityApi?$select=FirstName&$top=5\n"))),(0,i.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder().getAll().select(myEntityApi.schema.FIRST_NAME).top(5);\n// request url: /myEntityApi?$select=FirstName&$top=5\n")))),(0,i.kt)("p",null,"The internal parameters have the lowest priority and you should not have to adjust them manually."),(0,i.kt)("h2",{id:"encoding"},"Encoding"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section applies to version 2 of the SAP Cloud SDK.\nFor version 1 of the SAP Cloud SDK, encoding is done on OData related query parameters without a way to configure it."))),(0,i.kt)("p",null,"In the end, query parameters end up in the URL to the target system.\nTherefore special characters with a meaning in a URL need to be ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier"},"% encoded"),".\nThe SAP Cloud SDK takes care of this encoding depending on the origin you use.\nFor calls executed via a typed client and generic http client the encoding is done as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Custom")," parameters are not encoded.\nThe idea behind this is to give you a way to send parameters with highest priority to the target system as they are."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Destination")," parameters are encoded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Internal")," parameters are encoded.")),(0,i.kt)("p",null,"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," method a option is available to adjust the behavior."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const parameterEncoder = function (\n  params: Record<string, any>\n): Record<string, any> {\n  // your custom implementation\n};\nexecuteHttpRequest(destination, { parameterEncoder });\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"parameterEncoder")," function is applied to the keys and values of all parameters of the request.\nIn case you have the need to encode all parameters including custom ones, we exported a ",(0,i.kt)("inlineCode",{parentName:"p"},"encodeAllParameters")," method to do that.\nSimply pass this method as the ",(0,i.kt)("inlineCode",{parentName:"p"},"parameterEncoder")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," call."),(0,i.kt)("p",null,"Note that this option is not available for the OData and OpenApi clients.\nThe typed clients take care of encoding already and an additional encoding layer would lead to errors."))}y.isMDXComponent=!0}}]);