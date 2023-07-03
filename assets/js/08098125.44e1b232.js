"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Head"},o=void 0,l={unversionedId:"features/head",id:"features/head",title:"Head",description:"This guide refers to upcoming Expo Router features, all of which are experimental.",source:"@site/docs/features/head.md",sourceDirName:"features",slug:"/features/head",permalink:"/router/docs/features/head",draft:!1,editUrl:"https://github.com/expo/router/tree/main/docs/docs/features/head.md",tags:[],version:"current",frontMatter:{title:"Head"},sidebar:"tutorialSidebar",previous:{title:"Splash Screen",permalink:"/router/docs/features/splash"},next:{title:"Guides",permalink:"/router/docs/category/guides"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Rendering",id:"rendering",level:2},{value:"Beta Notice",id:"beta-notice",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This guide refers to upcoming Expo Router features, all of which are experimental.")),(0,r.kt)("p",null,"The Expo ",(0,r.kt)("inlineCode",{parentName:"p"},"<Head />")," component provides a simple and flexible way to manage the meta tags and other important elements of the page head in a universal Expo application. The Expo Head component is designed to be used in both web and mobile applications built with Expo Router. By using this component, developers can easily enhance the search engine optimization (SEO) of their applications."),(0,r.kt)("p",null,"Native support can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/lab/handoff"},"handoff guide"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Be sure to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"expo-router")," Config Plugin if you're planning to use on iOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=app.json",title:"app.json"},'{\n  "expo": {\n    "plugins": [\n      [\n        "expo-router",\n        {\n          // Set this to the URL where your iOS universal links can be accessed.\n          // For example, if I build an app "Bacon Blog" and host at `evanbacon.dev`\n          // then `origin` should be `https://evanbacon.dev`.\n          "origin": "<PRODUCTION_URL>"\n        }\n      ]\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Head />")," component can be imported in any route in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," directory, import using ",(0,r.kt)("inlineCode",{parentName:"p"},"expo-router/head"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/index.js",title:"app/index.js"},'import { Text } from "react-native";\nimport Head from "expo-router/head";\n\nexport default function App() {\n  return (\n    <>\n      <Head>\n        <title>My App</title>\n        <meta name="description" content="My App description" />\n      </Head>\n      <Text>Hello World</Text>\n    </>\n  );\n}\n')),(0,r.kt)("p",null,"This renders to the following (simplified):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=dist/index.html",title:"dist/index.html"},'<html>\n  // highlight-next-line\n  <head>\n    // highlight-next-line\n    <title>My App</title>\n    // highlight-next-line\n    <meta name="description" content="My App description" />\n    // highlight-next-line\n  </head>\n  <body>\n    <div id="root">\n      <div>Hello World</div>\n    </div>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"In the above example, we have used the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," tags to set the page title and meta ",(0,r.kt)("strong",{parentName:"p"},"description"),", respectively. You can use other props to set other meta tags, as well as link and script tags."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Head />")," component accepts any web meta tags as children. The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Head />")," component will automatically render the meta tags in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<head />")," of the page. All nested ",(0,r.kt)("inlineCode",{parentName:"p"},"<Head />")," components will be merged into a single ",(0,r.kt)("inlineCode",{parentName:"p"},"<head />")," element."),(0,r.kt)("h2",{id:"rendering"},"Rendering"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Static rendering is experimentally available starting in SDK 49")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Head />")," component can be used for static rendering, be setting ",(0,r.kt)("inlineCode",{parentName:"p"},"web.output: 'static'")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"app.json"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Head />")," component can also be used to update during runtime or in single-page applications, this is useful for updating the page title and favicon to reflect dynamic interactions."),(0,r.kt)("h2",{id:"beta-notice"},"Beta Notice"),(0,r.kt)("p",null,"The Head API may change in the future when we add universal support for React Server Components. We will also add support for native meta tags in the future to maximize discoverability and SEO across devices."))}c.isMDXComponent=!0}}]);