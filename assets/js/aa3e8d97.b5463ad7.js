"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2759],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={title:"How to retrieve JSON Web Tokens (JWT)",sidebar_label:"How to retrieve JWTs",description:"You'll learn how to retrieve a JWT in your application code as well as locally using tools like Postman.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","JSON web token","JWT"]},l=void 0,u={unversionedId:"guides/how-to-retrieve-jwt",id:"version-v1/guides/how-to-retrieve-jwt",title:"How to retrieve JSON Web Tokens (JWT)",description:"You'll learn how to retrieve a JWT in your application code as well as locally using tools like Postman.",source:"@site/docs-js_versioned_docs/version-v1/guides/how-to-retrieve-jwt.mdx",sourceDirName:"guides",slug:"/guides/how-to-retrieve-jwt",permalink:"/cloud-sdk/docs/js/v1/guides/how-to-retrieve-jwt",draft:!1,tags:[],version:"v1",frontMatter:{title:"How to retrieve JSON Web Tokens (JWT)",sidebar_label:"How to retrieve JWTs",description:"You'll learn how to retrieve a JWT in your application code as well as locally using tools like Postman.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","JSON web token","JWT"]},sidebar:"docsJsSidebar",previous:{title:"How to Add Resilience",permalink:"/cloud-sdk/docs/js/v1/guides/how-to-add-resilience"},next:{title:"Currency Conversion",permalink:"/cloud-sdk/docs/js/v1/extensions/currency-conversion"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"JWT on SAP BTP",id:"jwt-on-sap-btp",level:2},{value:"Use JWT in Application",id:"use-jwt-in-application",level:2},{value:"Obtain JWT with Postman",id:"obtain-jwt-with-postman",level:2},{value:"Obtain JWT programmatically",id:"obtain-jwt-programmatically",level:2}],d={toc:c};function h(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"A JSON Web Token (JWT) is a standardized object containing some structured information.\nA JWT contains three parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Header: Containing meta information like hashing algorithm and verification certificates"),(0,i.kt)("li",{parentName:"ul"},"Payload: The actual data"),(0,i.kt)("li",{parentName:"ul"},"Signature: Signature of the Header and Payload for verification")),(0,i.kt)("p",null,"Given a JWT, you can use the information from the header and signature to check if the JWT is valid.\nTherefore, JWTs are used to exchange authorization and authentication information between applications."),(0,i.kt)("h2",{id:"jwt-on-sap-btp"},"JWT on SAP BTP"),(0,i.kt)("p",null,"The retrieval of a JWT is done by the approuter together with the XSUAA.\nWe explain these concepts in ",(0,i.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/js/guides/how-to-use-the-approuter"},"this guide "),".\nFind a complete setup in the sample applications for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/cf-sample-application"},"Cloud Foundry")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/k8s-sample-application"},"k8s"),".\nThe flow is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"user requests a resource and is not yet authenticated"),(0,i.kt)("li",{parentName:"ul"},"approuter redirects the request to the identity provider (IdP)"),(0,i.kt)("li",{parentName:"ul"},"XSUAA issues a JWT - see ",(0,i.kt)("a",{parentName:"li",href:"#obtain-jwt-programmatically"},"here")," for details"),(0,i.kt)("li",{parentName:"ul"},"approuter adds the JWT to the request headers and redirects the request to the initially requested resource")),(0,i.kt)("p",null,"A JWT issued this way contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"JKU")," header property.\nThis property points to the URL where you can obtain the certificate to verify the JWT.\nThe URL must be from the XSUAA domain so that it is trusted and the JWT validation does not fail."),(0,i.kt)("p",null,"Sometimes you want to use a JWT which is not issued by the XSUAA and approuter.\nSuch tokens do not contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"JKU")," at all or a value with a different domain.\nIn this case the SAP Cloud SDK does not validate the token, but the destination service does.\nYou have to set the ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/283cd2d1c72147a18c69daf681650f07.html"},"destination properties")," ",(0,i.kt)("inlineCode",{parentName:"p"},"x_user_token.jwks")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"x_user_token.jwks_uri")," to provide the information to verify the custom JWT."),(0,i.kt)("p",null,"If you use a custom JWT without the approuter and XSUAA service, it is your responsibility to do the access control in the application."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"A JWT has a limited lifetime but is nevertheless a sensitive security object.\nDo not log complete JWTs in the application, share them with others, or use online tools to decode them.")),(0,i.kt)("h2",{id:"use-jwt-in-application"},"Use JWT in Application"),(0,i.kt)("p",null,"After the JWT was issued, it is added to the request headers by the approuter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "headers": {\n    "authorization": "Bearer yourJwtTokenBase64Encoded"\n  }\n}\n')),(0,i.kt)("p",null,"The SAP Cloud SDK has a convenience function to extract the JWT from the request object.\nFor ",(0,i.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"NestJS"),", the code would look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller, Get, Req } from '@nestjs/common';\nimport { Request } from 'express';\nimport { retrieveJwt } from '@sap-cloud-sdk/core';\n\n@Controller()\nexport class AppController {\n  constructor() {}\n\n  @Get('some-sample-endpoint')\n  getSomeSampleEndpoint(@Req() request: Request): Promise<void> {\n    const myJwt = retrieveJwt(request);\n    //Do something with the JWT e.g. fetch some data using a destination\n  }\n}\n")),(0,i.kt)("p",null,"Note, that the SAP Cloud SDK uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"IncomingMessage")," object from node, which is compatible to the request object of common frameworks like ",(0,i.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"express")," or ",(0,i.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"NestJs"),".\nIn case you use a different framework, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/blob/6e3453e50a061d3ea2dbd9ac6a40232e624f348f/packages/connectivity/src/scp-cf/jwt.ts#L45-L63"},"implementation")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"retrieveJwt()")," is simple.\nEffectively it takes ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," header value and extracts the token value."),(0,i.kt)("p",null,"You can use the JWT to call the destination service or make a request against a destination directly.\nNote, that the destination service performs token exchange flows for you, if configured accordingly.\nThis means the initial JWT is transformed to a ",(0,i.kt)("inlineCode",{parentName:"p"},"SAMLBearerAssertion")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientCredentials")," grant."),(0,i.kt)("h2",{id:"obtain-jwt-with-postman"},"Obtain JWT with Postman"),(0,i.kt)("p",null,"For a faster feedback cycle, it is convenient to test things locally without deployment to the SAP BTP.\nIn some cases, applications rely on a JWT to set scopes or propagate a user to external systems.\nIn such a case, you can obtain the JWT using Postman:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a new request"),(0,i.kt)("li",{parentName:"ul"},'go to the "Authorization tab of the request'),(0,i.kt)("li",{parentName:"ul"},'select "OAuth 2.0" as a type'),(0,i.kt)("li",{parentName:"ul"},"fill the following values in the user interface:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Callback URL"),": Path to the application protected by the XSUAA"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Auth URL"),": Path to the authentication endpoint using your subdomain and the values for the callback URL e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<subdomain>.authentication.sap.hana.ondemand.com/oauth/authorize?redirect_uri=<callbackUrl>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Token URL"),": Path to the token endpoint using your subdomain, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<subdomain>.authentication.sap.hana.ondemand.com/oauth/token")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Client ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Client secret")," for the XSUAA service (either VCAP variables or service keys)"),(0,i.kt)("li",{parentName:"ul"},"uncheck the ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorize using browser checkbox")))),(0,i.kt)("li",{parentName:"ul"},"press the ",(0,i.kt)("inlineCode",{parentName:"li"},"Get new access token")," button to retrieve a token"),(0,i.kt)("li",{parentName:"ul"},"Postman will open a window showing the IdP login form"),(0,i.kt)("li",{parentName:"ul"},"enter username and password"),(0,i.kt)("li",{parentName:"ul"},"Postman shows the retrieved token that you can copy")),(0,i.kt)("p",null,"Cookies will remember the entered username and password.\nThis makes re-fetching a new token super quick when your old token expires.\nRemove the cookies in case you want to start fresh."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(95273).Z,width:"1526",height:"852"})),(0,i.kt)("h2",{id:"obtain-jwt-programmatically"},"Obtain JWT programmatically"),(0,i.kt)("p",null,"In some situations, it is necessary to retrieve a JWT programmatically.\nWe have implemented the OAuth 2.0 flow for our internal E2E tests and the implementation involves many steps.\nWe will give a high-level overview."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"retrieve a ",(0,i.kt)("inlineCode",{parentName:"li"},"code")," from the XSUAA"),(0,i.kt)("li",{parentName:"ul"},"initial GET request on XSUAA: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<xsuaaUrl>/oauth/authorize?client_id=<clientId>&redirect_uri=<redirectUri>&response_type=code")),(0,i.kt)("li",{parentName:"ul"},"This will provide cookies for all upcoming XSUAA requests."),(0,i.kt)("li",{parentName:"ul"},"retrieve a SAML request from the XSUAA: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<xsuaaUrl>/saml/login/alias/<subdomain>.<host>")),(0,i.kt)("li",{parentName:"ul"},"Transform the SAML request into a SAML response via the IdP.\nThis involves multiple redirected requests with a lot of cookies and request parameters passed around.\nIn the browser redirects with the ",(0,i.kt)("inlineCode",{parentName:"li"},"set-cookie")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"location")," headers work well.\nIn node, most HTTP clients do not handle the redirects correctly and a manual redirect on 302 response needs to be implemented."),(0,i.kt)("li",{parentName:"ul"},"Once you have the SAML response, call the XSUAA to retrieve the ",(0,i.kt)("inlineCode",{parentName:"li"},"code")," in the location header."),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"code")," with clientId and clientSecret to get a JWT token from the XSUAA service.")),(0,i.kt)("p",null,"In case you also need an implementation, investigate the steps in the debug console of your browser when you login."))}h.isMDXComponent=!0},95273:function(e,t,n){t.Z=n.p+"assets/images/postman-oauth-token-4c6a2e98609bc91d63ffa4677afa9880.png"}}]);