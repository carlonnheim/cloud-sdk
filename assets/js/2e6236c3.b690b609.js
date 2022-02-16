"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2431],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),a=n(67294),s=n(72389),l=n(29548),i=n(86010),o="tabItem_LplD";function u(e){var t,n,s,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(s=v[0])?void 0:s.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var A=(0,l.UB)(),g=A.tabGroupChoices,N=A.setTabGroupChoices,T=(0,a.useState)(y),S=T[0],k=T[1],P=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var _=g[m];null!=_&&_!==S&&b.some((function(e){return e.value===_}))&&k(_)}var O=function(e){var t=e.currentTarget,n=P.indexOf(t),r=b[n].value;r!==S&&(E(t),k(r),null!=m&&N(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;n=P[r]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.currentTarget)-1;n=P[a]||P[P.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return P.push(e)},onKeyDown:D,onFocus:O,onClick:O},s,{className:(0,i.Z)("tabs__item",o,null==s?void 0:s.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function p(e){var t=(0,s.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},87601:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),l=n(9877),i=n(58215),o=["components"],u={},p=void 0,c={unversionedId:"js/features/odata/v2/select",id:"js/features/odata/v2/select",title:"select",description:"When reading entities, the API offers select( ... ) on the builders.",source:"@site/docs/js/features/odata/v2/select.mdx",sourceDirName:"js/features/odata/v2",slug:"/js/features/odata/v2/select",permalink:"/cloud-sdk/docs/js/features/odata/v2/select",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/v2/select.mdx",tags:[],version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1645008194,formattedLastUpdatedAt:"2/16/2022",frontMatter:{}},d=[],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When reading entities, the API offers ",(0,s.kt)("inlineCode",{parentName:"p"},"select( ... )")," on the builders.\nThrough it, the query parameters ",(0,s.kt)("inlineCode",{parentName:"p"},"$select")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"$expand")," are set.\nIt restricts the response to the given selection of properties in the request."),(0,s.kt)(l.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"major",mdxType:"TabItem"},(0,s.kt)("p",null,"The properties that can be selected or expanded are represented via fields on the ",(0,s.kt)("inlineCode",{parentName:"p"},"schema")," property of the entity API class.\nThere will be a field for each property, e.g. the ",(0,s.kt)("inlineCode",{parentName:"p"},"businessPartnerApi")," has ",(0,s.kt)("inlineCode",{parentName:"p"},"schema.FIRST_NAME")," as a representation of a property and ",(0,s.kt)("inlineCode",{parentName:"p"},"schema.TO_BUSINESS_PARTNER_ADDRESS")," as a representation of a navigation property."),(0,s.kt)("p",null,"A navigation property means that there is a relation between a business partner and their addresses.\nIn this case, one business partner can have multiple addresses.\nIn SAP S/4HANA, navigation properties typically start with ",(0,s.kt)("inlineCode",{parentName:"p"},"TO_"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .getAll()\n  .select(\n    businessPartnerApi.schema.FIRST_NAME,\n    businessPartnerApi.schema.LAST_NAME,\n    businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute(destination);\n"))),(0,s.kt)(i.Z,{value:"deprecated",mdxType:"TabItem"},(0,s.kt)("p",null,"The properties that can be selected or expanded are represented via static fields on the entity class.\nSo there will be a field for each property.\nE.g. the business partner entity has ",(0,s.kt)("inlineCode",{parentName:"p"},"BusinessPartner.FIRST_NAME")," as a representation of a property and ",(0,s.kt)("inlineCode",{parentName:"p"},"BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS")," as a representation of a navigation property."),(0,s.kt)("p",null,"A navigation property means that there is a relation between a business partner and their addresses.\nIn this case, one business partner can have multiple addresses.\nIn SAP S/4HANA, navigation properties typically start with ",(0,s.kt)("inlineCode",{parentName:"p"},"TO_"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .getAll()\n  .select(\n    BusinessPartner.FIRST_NAME,\n    BusinessPartner.LAST_NAME,\n    BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute(destination);\n")))),(0,s.kt)("p",null,"The above translates to the following query parameters:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"$select=FirstName,LastName,to_BusinessPartnerAddress/*&$expand=to_BusinessPartnerAddress\n")),(0,s.kt)("p",null,"One can also select properties of the expanded navigation property:"),(0,s.kt)(l.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"major",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .getAll()\n  .select(\n    businessPartnerApi.schema.FIRST_NAME,\n    businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(\n      businessPartnerAddressApi.schema.ADDRESS_ID,\n      businessPartnerAddressApi.schema.CITY_CODE\n    )\n  )\n  .execute(destination);\n"))),(0,s.kt)(i.Z,{value:"deprecated",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .getAll()\n  .select(\n    BusinessPartner.FIRST_NAME,\n    BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS.select(\n      BusinessPartnerAddress.ADDRESS_ID,\n      BusinessPartnerAddress.CITY_CODE\n    )\n  )\n  .execute(destination);\n")))),(0,s.kt)("p",null,"The above translates to the following query parameters:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"$select=FirstName,to_BusinessPartnerAddress/AddressID,to_BusinessPartnerAddress/CityCode&$expand=to_BusinessPartnerAddress\n")))}f.isMDXComponent=!0}}]);