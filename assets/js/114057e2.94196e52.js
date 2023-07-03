"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4817],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Splash Screen",sidebar_position:5},s=void 0,i={unversionedId:"features/splash",id:"features/splash",title:"Splash Screen",description:"Splash screens are required on native platforms. Expo Router automatically orchestrates the native splash screen to keep it visible until the first route is rendered, this applies to any route that the user deep links into. To enable this functionality, install expo-splash-screen in your project.",source:"@site/docs/features/splash.md",sourceDirName:"features",slug:"/features/splash",permalink:"/router/docs/features/splash",draft:!1,editUrl:"https://github.com/expo/router/tree/main/docs/docs/features/splash.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Splash Screen",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Errors",permalink:"/router/docs/features/errors"},next:{title:"Head",permalink:"/router/docs/features/head"}},l={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Splash screens are required on native platforms. Expo Router automatically orchestrates the native splash screen to keep it visible until the first route is rendered, this applies to any route that the user deep links into. To enable this functionality, install ",(0,a.kt)("inlineCode",{parentName:"p"},"expo-splash-screen")," in your project."),(0,a.kt)("p",null,"The default behavior is to hide the splash screen when the first route is rendered, this is optimal for the majority of routes. For some routes, you may want to prolong the splash screen until additional data or asset loading has concluded. This can be achieved with the ",(0,a.kt)("inlineCode",{parentName:"p"},"SplashScreen")," component. The splash screen will remain visible until all ",(0,a.kt)("inlineCode",{parentName:"p"},"SplashScreen")," components in your app have been unmounted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/index.tsx",title:"app/index.tsx"},'import { SplashScreen } from "expo-router";\n\nexport default function App() {\n  const [isReady, setReady] = React.useState(false);\n\n  React.useEffect(() => {\n    // Perform some sort of async data or asset fetching.\n    setTimeout(() => {\n      setReady(true);\n    }, 1000);\n  }, []);\n\n  return (\n    <>\n      {/* When all loading is setup, unmount the splash screen component. */}\n      // highlight-next-line\n      {!isReady && <SplashScreen />}\n      <Text>My App</Text>\n    </>\n  );\n}\n')))}u.isMDXComponent=!0}}]);