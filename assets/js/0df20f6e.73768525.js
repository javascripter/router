"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[512],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(r),m=n,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Drawer navigation"},i=void 0,l={unversionedId:"migration/react-navigation/drawer-navigator",id:"migration/react-navigation/drawer-navigator",title:"Drawer navigation",description:"To use the React Navigation drawer navigator with Expo Router, do the following:",source:"@site/docs/migration/react-navigation/drawer-navigator.md",sourceDirName:"migration/react-navigation",slug:"/migration/react-navigation/drawer-navigator",permalink:"/router/docs/migration/react-navigation/drawer-navigator",draft:!1,editUrl:"https://github.com/expo/router/tree/main/docs/docs/migration/react-navigation/drawer-navigator.md",tags:[],version:"current",frontMatter:{title:"Drawer navigation"},sidebar:"tutorialSidebar",previous:{title:"Custom navigators",permalink:"/router/docs/migration/react-navigation/custom-navigators"},next:{title:"Drawer",permalink:"/router/docs/migration/react-navigation/drawer"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To use the React Navigation ",(0,n.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/drawer-based-navigation"},"drawer navigator")," with Expo Router, do the following:"),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Follow the ",(0,n.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/drawer-navigator#installation"},"installation guide")," for Drawer Navigator."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("inlineCode",{parentName:"li"},"@react-navigation/drawer"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"npx expo install @react-navigation/drawer")),(0,n.kt)("li",{parentName:"ul"},"Ensure ",(0,n.kt)("inlineCode",{parentName:"li"},"react-native-reanimated")," is correctly configured in the ",(0,n.kt)("inlineCode",{parentName:"li"},"babel.config.js")," file."),(0,n.kt)("li",{parentName:"ul"},"Changes to the ",(0,n.kt)("inlineCode",{parentName:"li"},"babel.config.js")," require a clean babel cache to be applied: ",(0,n.kt)("inlineCode",{parentName:"li"},"npx expo start --clear"),".")),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("p",null,"Contextualize the drawer navigator to support the Expo Router file convention:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./Drawer.tsx",title:"./Drawer.tsx"},'import {\n  // Import the creation function\n  createDrawerNavigator,\n  // Import the types\n  DrawerNavigationOptions,\n} from "@react-navigation/drawer";\n\nimport { withLayoutContext } from "expo-router";\n\nconst { Navigator } = createDrawerNavigator();\n\n// This can be used like `<Drawer />`\nexport const Drawer = withLayoutContext<\n  DrawerNavigationOptions,\n  typeof Navigator\n>(Navigator);\n')),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/_layout.js",title:"app/_layout.js"},'import { Drawer } from "../Drawer";\n\nexport default function RootLayout() {\n  return <Drawer />;\n}\n')),(0,n.kt)("p",null,"To edit the drawer navigation menu labels, titles and screen options specific screens are required as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/_layout.js",title:"app/_layout.js"},'import { Drawer } from "../Drawer";\n\nexport default function RootLayout() {\n  return (\n    <Drawer>\n      <Drawer.Screen\n        name="index" // This is the name of the page and must match the url from root\n        options={{\n          drawerLabel: "Home",\n          title: "overview",\n        }}\n      />\n      <Drawer.Screen\n        name="user/[id]" // This is the name of the page and must match the url from root\n        options={{\n          drawerLabel: "User",\n          title: "overview",\n        }}\n      />\n    </Drawer>\n  );\n}\n')))}u.isMDXComponent=!0}}]);