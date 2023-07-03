"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Configuring the header bar",sidebar_position:5},i=void 0,s={unversionedId:"guides/headers",id:"guides/headers",title:"Configuring the header bar",description:"Ports the guide React Navigation: header buttons to Expo Router.",source:"@site/docs/guides/headers.md",sourceDirName:"guides",slug:"/guides/headers",permalink:"/router/docs/guides/headers",draft:!1,editUrl:"https://github.com/expo/router/tree/main/docs/docs/guides/headers.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Configuring the header bar",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Building a layout",permalink:"/router/docs/guides/"},next:{title:"Header buttons",permalink:"/router/docs/guides/header-buttons"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ports the guide ",(0,a.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/headers"},"React Navigation: header buttons")," to Expo Router."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="File System"',title:'"File','System"':!0},"app/\n  _layout.js\n  home.js\n  details.js\n")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"screenOptions")," prop to configure the header bar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/_layout.js",title:"app/_layout.js"},'import { Stack } from "expo-router";\n\nexport default function Layout() {\n  return (\n    <Stack\n      initialRouteName="home"\n      screenOptions={{\n        headerStyle: {\n          backgroundColor: "#f4511e",\n        },\n        headerTintColor: "#fff",\n        headerTitleStyle: {\n          fontWeight: "bold",\n        },\n      }}\n    />\n  );\n}\n')),(0,a.kt)("p",null,"You can use a layout's Screen component to configure the header bar dynamically from within the route. This is good for interactions that change the UI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/home.js",title:"app/home.js"},'import { Link, Stack } from "expo-router";\nimport { Image, Text, View } from "react-native";\n\nfunction LogoTitle() {\n  return (\n    <Image\n      style={{ width: 50, height: 50 }}\n      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}\n    />\n  );\n}\n\nexport default function Home() {\n  return (\n    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n      <Stack.Screen\n        options={{\n          // https://reactnavigation.org/docs/headers#setting-the-header-title\n          title: "My home",\n          // https://reactnavigation.org/docs/headers#adjusting-header-styles\n          headerStyle: { backgroundColor: "#f4511e" },\n          headerTintColor: "#fff",\n          headerTitleStyle: {\n            fontWeight: "bold",\n          },\n          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component\n          headerTitle: (props) => <LogoTitle {...props} />,\n        }}\n      />\n\n      <Text>Home Screen</Text>\n\n      <Link href={{ pathname: "details", params: { name: "Bacon" } }}>\n        Go to Details\n      </Link>\n    </View>\n  );\n}\n')),(0,a.kt)("p",null,"You can use the imperative API ",(0,a.kt)("inlineCode",{parentName:"p"},"router.setParams()")," function to configure the route dynamically."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/details.tsx",title:"app/details.tsx"},'import { View, Text } from "react-native";\nimport { Stack, useLocalSearchParams, useRouter } from "expo-router";\n\nexport default function Details() {\n  const router = useRouter();\n  const params = useLocalSearchParams();\n\n  return (\n    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n      <Stack.Screen\n        options={{\n          title: params.name,\n        }}\n      />\n      <Text\n        onPress={() => {\n          router.setParams({ name: "Updated" });\n        }}\n      >\n        Update the title\n      </Text>\n    </View>\n  );\n}\n')))}p.isMDXComponent=!0}}]);