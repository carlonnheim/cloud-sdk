"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4001],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=u;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(87462),o=(t(67294),t(3905)),i=t(65488),l=t(85162);const r={id:"manage-dependencies",title:"Managing Dependencies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Dependency Management",description:"How to manage dependencies, detect and resolve conflicts",keywords:["sap","cloud","sdk","cloud native","cloud sdk","dependency","dependency conflicts","manage dependencies","how-to"]},d=void 0,s={unversionedId:"guides/manage-dependencies",id:"guides/manage-dependencies",title:"Managing Dependencies",description:"How to manage dependencies, detect and resolve conflicts",source:"@site/docs-java/guides/dependencies.mdx",sourceDirName:"guides",slug:"/guides/manage-dependencies",permalink:"/cloud-sdk/docs/java/guides/manage-dependencies",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/guides/dependencies.mdx",tags:[],version:"current",frontMatter:{id:"manage-dependencies",title:"Managing Dependencies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Dependency Management",description:"How to manage dependencies, detect and resolve conflicts",keywords:["sap","cloud","sdk","cloud native","cloud sdk","dependency","dependency conflicts","manage dependencies","how-to"]},sidebar:"docsJavaSidebar",previous:{title:"Update to Version 4",permalink:"/cloud-sdk/docs/java/guides/4.0-upgrade"},next:{title:"Integration With CAP",permalink:"/cloud-sdk/docs/java/guides/cap-sdk-integration"}},p={},c=[{value:"General Information",id:"general-information",level:2},{value:"The SAP Cloud SDK Bill-of-Material",id:"the-sap-cloud-sdk-bill-of-material",level:3},{value:"Dealing With Dependency Conflicts",id:"dealing-with-dependency-conflicts",level:2},{value:"Updating the SAP Cloud SDK Version",id:"updating-the-sap-cloud-sdk-version",level:3},{value:"Overriding Dependency Versions of the SAP Cloud SDK Bill-of-Material",id:"overriding-dependency-versions-of-the-sap-cloud-sdk-bill-of-material",level:3},{value:"Notes on the SAP Java Buildpack",id:"notes-on-the-sap-java-buildpack",level:2},{value:"Managing the Buildpack Version",id:"managing-the-buildpack-version",level:3},{value:"Avoiding Scope Conflicts",id:"avoiding-scope-conflicts",level:3},{value:"Background: Dependency Version Conflicts",id:"background-dependency-version-conflicts",level:3},{value:"Background: Dependency Scope Conflicts",id:"background-dependency-scope-conflicts",level:3}],u={toc:c};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general-information"},"General Information"),(0,o.kt)("p",null,"The SAP Cloud SDK for Java is a set of libraries that itself depends on other libraries.\nTo manage these relationships it relies on the ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html"},"dependency management functionality")," of ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/index.html"},"Maven"),"."),(0,o.kt)("p",null,"This article shows how to manage dependencies for the SAP Cloud SDK for Java specifically.\nFor general information on how to deal with dependencies refer to the resources linked above and throughout this page."),(0,o.kt)("h3",{id:"the-sap-cloud-sdk-bill-of-material"},"The SAP Cloud SDK Bill-of-Material"),(0,o.kt)("p",null,"The SAP Cloud SDK provides a ",(0,o.kt)("a",{parentName:"p",href:"https://dzone.com/articles/the-bill-of-materials-in-maven"},"Bill-of-Material")," (BOM).\nIt comprises all dependencies and their specific version that the SAP Cloud SDK relies upon."),(0,o.kt)("p",null,"It can be used in the dependency management as follows:"),(0,o.kt)(i.Z,{groupId:"deployment",defaultValue:"default",values:[{label:"Default",value:"default"},{label:"Tomcat with SAP Java Buildpack",value:"SJB"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"default",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n"))),(0,o.kt)(l.Z,{value:"SJB",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-sjb-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")))),(0,o.kt)("admonition",{title:"Dedicated BOM for SAP Java Buildpack",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"#notes-on-the-sap-java-buildpack"},"buildpack related notes below")," in case you are using the SAP Java Buildpack with a WAR based deployment.")),(0,o.kt)("p",null,"It helps in various ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimizing the effort for updating SAP Cloud SDK versions"),(0,o.kt)("li",{parentName:"ul"},"Ensuring all SAP Cloud SDK components are used consistently with the same version"),(0,o.kt)("li",{parentName:"ul"},"Compatibility with some other key SAP libraries or frameworks like ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-security-xsuaa-integration"},"XSUAA")," and ",(0,o.kt)("a",{parentName:"li",href:"https://cap.cloud.sap/docs/"},"CAP"),"."),(0,o.kt)("li",{parentName:"ul"},"Avoiding some potential dependency conflicts"),(0,o.kt)("li",{parentName:"ul"},"Checking which components & their respective version the SAP Cloud SDK depends upon")),(0,o.kt)("p",null,"For these reasons we highly recommend using the BOM in your project."),(0,o.kt)("admonition",{title:"Alternative: SAP Cloud SDK Modules Bill-of-Material",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Besides the SAP Cloud SDK Bill-of-Material ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-bom")," there is also the SAP Cloud SDK Modules Bill-of-Material ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-modules-bom"),".\nIt manages the version of all SAP Cloud SDK modules only.\n",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-modules-bom")," does not manage versions of transitive dependencies and hence can be chosen to resolve dependency version conflicts.")),(0,o.kt)("admonition",{title:"SAP Cloud SDK Maven Plugins",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please be aware that neither the ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-bom")," nor the ",(0,o.kt)("inlineCode",{parentName:"p"},"modules-bom")," will manage the versions of any SAP Cloud SDK Maven plugins (like the ",(0,o.kt)("inlineCode",{parentName:"p"},"odata-generator-maven-plugin"),") you may use.\nIt is required to specify a version for such plugins explicitly, otherwise dependency conflicts may occur.")),(0,o.kt)("h2",{id:"dealing-with-dependency-conflicts"},"Dealing With Dependency Conflicts"),(0,o.kt)("p",null,"When using multiple libraries, you will probably run into a version conflict at some point.\nThis is caused by the way dependencies are resolved.\nIf you are using two libraries ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," where both depend on a different version of ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," you encounter a conflict."),(0,o.kt)("p",null,"This conflict can only be solved by you as the consumer be explicitly stating which version of ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," should be used."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dzone.com/articles/solving-dependency-conflicts-in-maven"},"This guide")," outlines this problem in more detail and provides general guidance on how to find and resolve such problems."),(0,o.kt)("h3",{id:"updating-the-sap-cloud-sdk-version"},"Updating the SAP Cloud SDK Version"),(0,o.kt)("p",null,"You may run into dependency related problems when updating SAP Cloud SDK versions since its dependencies are frequently updated.\nHere are some recommendations from our experience that should help to mitigate any problems:"),(0,o.kt)("p",null,"We recommend increasing the SAP Cloud SDK version in a dedicated change e.g. a pull request."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This isolates the change and makes finding problems easier.")),(0,o.kt)("p",null,"Look out for ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodNotFound")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ClassDefNotFound")," exceptions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They are common when a library is provided with an unexpected version.")),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/release-notes"},"release notes"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Under improvements, you will see all dependency changes.")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn dependency:tree")," to analyze the dependency tree."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It shows where dependencies are used and in which version.")),(0,o.kt)("p",null,"Google the error message."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Usually, you will at least get an idea which library is causing the problems.")),(0,o.kt)("p",null,"Update the SAP Cloud SDK version frequently."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This mitigates the risk per update and ensures you are up to date.")),(0,o.kt)("h3",{id:"overriding-dependency-versions-of-the-sap-cloud-sdk-bill-of-material"},"Overriding Dependency Versions of the SAP Cloud SDK Bill-of-Material"),(0,o.kt)("p",null,"Sometimes you may want to override the version of a specific dependency the SAP Cloud SDK is using.\nYou can achieve this by listing it in the dependency management."),(0,o.kt)("p",null,"For example to override the version of SLF4J:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>latest-sdk-version</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.slf4j</groupId>\n            <artifactId>slf4j-api</artifactId>\n            <version>your-slf4j-version</version>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Remember that including a dependency in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<dependencyManagement>")," section only enforces its version and scope.\nIt does not yet include it as a dependency in your project.")),(0,o.kt)("h2",{id:"notes-on-the-sap-java-buildpack"},"Notes on the SAP Java Buildpack"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/a3f90069d6cd41da82f34a6123d82ce6.html"},"SAP Java Buildpack")," brings some dependencies that are also brought by the SAP Cloud SDK.\nThis can lead to conflicts when using a ",(0,o.kt)("inlineCode",{parentName:"p"},"war")," deployment."),(0,o.kt)("p",null,"To prevent any issues we recommend using our dedicated BOM for the SAP Java Buildpack:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.sap.cloud.sdk</groupId>\n  <artifactId>sdk-sjb-bom</artifactId>\n  <version>4.XX.X</version>\n  <type>pom</type>\n  <scope>import</scope>\n</dependency>\n")),(0,o.kt)("p",null,"Alternatively, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/6c6936e8e4ea40c9a9a69f6783b1e978.html"},"BOMs provided by the SAP Java Buildpack")," directly."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The SAP Java Buildpack generally does not affect typical Spring Boot applications which are packed into an executable jar by default.")),(0,o.kt)("h3",{id:"managing-the-buildpack-version"},"Managing the Buildpack Version"),(0,o.kt)("p",null,"We recommend setting a fixed Buildpack version in the ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.yml")," and updating it regularly.\nUse ",(0,o.kt)("inlineCode",{parentName:"p"},"cf buildpacks")," to see which Buildpacks are currently available.\nPlease note that usually only the last 3 Buildpack versions are kept alive, and usually every two weeks a new version is released.\nConsequently, with this strategy, you should update at least once a month."),(0,o.kt)("p",null,"In general, this is safer than using always the latest Buildpack.\nBecause this strategy avoids that a simple restart can break your application due to a changed Buildpack."),(0,o.kt)("p",null,"In particular, it ensures that the specific Buildpack + SAP Cloud SDK combination has been tested."),(0,o.kt)("p",null,"Also see ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/a3f90069d6cd41da82f34a6123d82ce6.html"},"this note")," on Buildpack versioning."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There are no known dependencies in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudfoundry/java-buildpack"},"Community Java Buildpack")," that could interfere with the ones provided by the SAP Cloud SDK.\nStill, the same strategy is also valid and useful for the community Buildpack.")),(0,o.kt)("h3",{id:"avoiding-scope-conflicts"},"Avoiding Scope Conflicts"),(0,o.kt)("p",null,"Using our dedicated buildpack BOM ",(0,o.kt)("inlineCode",{parentName:"p"},"com.sap.cloud.sdk:sdk-sjb-bom")," helps preventing scope conflicts.\nThis combined BOM ensures that the SAP Cloud SDK and SAP Java Buildpack versions are compatible and that you only need to manage one BOM."),(0,o.kt)("p",null,"It will set the version and the scope of the dependencies the SAP Java Buildpack adds to your application at runtime.\nThe scope of the those dependencies is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"provided"),"."),(0,o.kt)("p",null,"You can verify the behavior by searching for the scope of, for example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"com.sap.cloud.security.xsuaa:token-client")," dependency in your application.\nWhen you use the dedicated ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-sjb-bom")," or any of the ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=com.sap.cloud.sjb.cf"},"BOMs provided by the SAP Java Buildpack directly")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"token-client")," should have the scope ",(0,o.kt)("inlineCode",{parentName:"p"},"provided"),".\nIf you are not using the BOMs, it should have the scope ",(0,o.kt)("inlineCode",{parentName:"p"},"compile")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Verify your dependency tree via ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn dependency:tree"),".\nThe above dependencies should only be listed with scope ",(0,o.kt)("inlineCode",{parentName:"p"},"provided"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Dependencies with the scope ",(0,o.kt)("inlineCode",{parentName:"p"},"provided")," are not part of your ",(0,o.kt)("inlineCode",{parentName:"p"},".war")," file.\nThis means you need to adapt the scopes if you want to run your applications without the SAP Java Buildpack.\nOne common example for this is running your application locally."),(0,o.kt)("p",{parentName:"admonition"},"In our ",(0,o.kt)("inlineCode",{parentName:"p"},"scp-cf-tomee")," archetype we provide a maven profile activated by the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"-Ddeployment=local"),".\nThis replaces our ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-sjb-bom")," (a convenience combination of the SAP Java Buildpack and our SAP Cloud SDK BOMs) with our ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-bom"),".\nAs a result the SAP Java Buildpack BOM is removed from the ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencyManagement"),", which adapts the scopes of your dependencies for local deployment.")),(0,o.kt)("h3",{id:"background-dependency-version-conflicts"},"Background: Dependency Version Conflicts"),(0,o.kt)("p",null,"The dependency versions from the ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-bom")," and the Buildpack may differ."),(0,o.kt)("p",null,"Consider this example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Buildpack version ",(0,o.kt)("inlineCode",{parentName:"li"},"1.43")," contains ",(0,o.kt)("inlineCode",{parentName:"li"},"java-security:2.10.5")),(0,o.kt)("li",{parentName:"ul"},"SAP Cloud SDK version ",(0,o.kt)("inlineCode",{parentName:"li"},"3.59")," contains ",(0,o.kt)("inlineCode",{parentName:"li"},"java-security:2.11.2"))),(0,o.kt)("p",null,"If there are breaking API changes in ",(0,o.kt)("inlineCode",{parentName:"p"},"java-security")," this can lead to runtime errors."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There is no way to solve this versioning problem on SAP Cloud SDK or Buildpack side.\nGenerally, we try to keep the versions as consistent as possible."),(0,o.kt)("p",{parentName:"admonition"},"However, the exact combination of Buildpack and SAP Cloud SDK depends on the release schedule of the two products.\nIn addition to that, it also depends on the time an application updates the SAP Cloud SDK version & deploys it.")),(0,o.kt)("h3",{id:"background-dependency-scope-conflicts"},"Background: Dependency Scope Conflicts"),(0,o.kt)("p",null,"In addition to potential version conflicts also scope problems can occur."),(0,o.kt)("p",null,"Consider this example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Buildpack contains ",(0,o.kt)("inlineCode",{parentName:"li"},"java-security")),(0,o.kt)("li",{parentName:"ul"},"SAP Cloud SDK depends on ",(0,o.kt)("inlineCode",{parentName:"li"},"java-security")," with scope ",(0,o.kt)("inlineCode",{parentName:"li"},"compile"))),(0,o.kt)("p",null,"As a result, the classes from ",(0,o.kt)("inlineCode",{parentName:"p"},"java-security")," will be on the classpath twice.\nOnce from the Buildpack and once packaged by maven into the deployment artifact."))}m.isMDXComponent=!0},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),o=t(86010);const i="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,l),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),o=t(67294),i=t(86010),l=t(72389),r=t(67392),d=t(7094),s=t(12466);const p="tabList__CuJ",c="tabItem_LNqP";function u(e){var n;const{lazy:t,block:l,defaultValue:u,values:m,groupId:h,className:k}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,r.l)(v,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===u?u:u??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,d.U)(),[C,S]=(0,o.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=h){const e=b[h];null!=e&&e!==C&&v.some((n=>n.value===e))&&S(e)}const A=e=>{const n=e.currentTarget,t=w.indexOf(n),a=v[t].value;a!==C&&(P(n),S(a),null!=h&&N(h,String(a)))},B=e=>{var n;let t=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},k)},v.map((e=>{let{value:n,label:t,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>w.push(e),onKeyDown:B,onClick:A},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":C===n})}),t??n)}))),t?(0,o.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function m(e){const n=(0,l.Z)();return o.createElement(u,(0,a.Z)({key:String(n)},e))}}}]);