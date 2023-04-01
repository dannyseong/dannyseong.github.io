"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),p=o,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={layout:"post",title:"Refactorying Exercise in JavaScript",date:new Date("2023-03-26T00:00:00.000Z"),authors:["daehoon"]},i="Refactorying codes",l={permalink:"/blog/2023/03/29/refactorying_exercise_JS",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-29-refactorying_exercise_JS.md",source:"@site/blog/2023-03-29-refactorying_exercise_JS.md",title:"Refactorying Exercise in JavaScript",description:"The objective of this contents is for reviewing my personnel study through the content in YouTube. The Youtuber, \ud504\ub871\ud2b8, make this contents and the reference link is described at the bottom of this post.",date:"2023-03-26T00:00:00.000Z",formattedDate:"March 26, 2023",tags:[],readingTime:2.155,hasTruncateMarker:!1,authors:[{name:"Daehoon Seong",title:"author",url:"https://github.com/dannyseong",imageURL:"https://avatars.githubusercontent.com/u/99000722?v=4",key:"daehoon"}],frontMatter:{layout:"post",title:"Refactorying Exercise in JavaScript",date:"2023-03-26T00:00:00.000Z",authors:["daehoon"]},prevItem:{title:"*args and **kwargs in Python",permalink:"/blog/python-*args-**kwargs"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},s={authorsImageUrls:[void 0]},c=[{value:"Before",id:"before",level:3},{value:"After",id:"after",level:3},{value:"Refactory Point of View",id:"refactory-point-of-view",level:3},{value:"References",id:"references",level:3}],u={toc:c},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The objective of this contents is for reviewing my personnel study through the content in YouTube. The Youtuber, \ud504\ub871\ud2b8, make this contents and the reference link is described at the bottom of this post."),(0,o.kt)("h3",{id:"before"},"Before"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Define function for ordering coffee\nfunction orderCoffe(el, orderList) {\n  if (el) {\n    if (Array.isArray(orderList)) {\n      el.addEventListener("click", function () {\n        setTimeout(function () {\n          for (let i = 0; i < orderList.length; i++) {\n            document.querySelector(\n              "#log"\n            ).innerHTML += `${orderList[i]}\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4<br />`;\n          }\n        }, 2000);\n      });\n    }\n  }\n}\n// Call orderCoffee function\norderCoffee(document.querySelector("button"), ["americano", "cafeLatte"]);\n')),(0,o.kt)("h3",{id:"after"},"After"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Assign Global variables and functions to be used\nconst logEL = document.querySelector("#log");\nconst delay = (time) =>\n  new Promise((resolve) => setTimeout(() => resolve(), time));\nconst insertMsg = (order) => {\n  logEL.innerHTML += `${orderList[i]}\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4<br />`;\n};\n\n// Define buttonClickHandelr Function\nasync function buttonClickHandler(orderList) {\n  const delayTime = 2000;\n  await delay(delayTime);\n  orderList.forEach(insertMsg);\n}\n\n// Define orderCoffee Function\nfunction orderCoffee(el, orderList) {\n  if (!el || !Array.isArray(orderList)) return;\n  el.addEventListener("click", () => buttonClickHandler(orderList));\n}\n\n// Call orderCoffee function\norderCoffee(document.querySelector("button"), ["americano", "cafeLatte"]);\n')),(0,o.kt)("h3",{id:"refactory-point-of-view"},"Refactory Point of View"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If multiple ",(0,o.kt)("inlineCode",{parentName:"li"},"if")," statement are used consecutively, they should be consolidated into one.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Before\nif (el) {\n  if (Array.isArray(orderList)) {\n    // Inner Codes...\n  }\n}\n\n// After\nif (!el || !Array.isArray(orderList)) return;\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In case of callback function, it should be assgined to a separated variable, and use this variable as a parameter. This will increase the readability of the code."),(0,o.kt)("li",{parentName:"ol"},"Getting used to using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise")," object for asynchornous operation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'//Before\nel.addEventListener("click", function () {\n  setTimeout(function () {\n    for (let i = 0; i < orderList.length; i++) {\n      document.querySelector(\n        "#log"\n      ).innerHTML += `${orderList[i]}\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4<br />`;\n    }\n  }, 2000);\n});\n\n//After\nconst logEL = document.querySelector("#log");\nconst delay = (time) =>\n  new Promise((resolve) => setTimeout(() => resolve(), time));\nconst insertMsg = (order) => {\n  logEL.innerHTML += `${orderList[i]}\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4<br />`;\n};\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Getting used to the use of the high-order function like forEach() in JavaScript.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Before\nfor (let i = 0; i < orderList.length; i++) {\n  // Inner Codes\n}\n// After\norderList.forEach(insertMsg);\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"The constant number should be assigned to a separated variable to improve the readability of the code.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const delayTime = 2000;\n")),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=BfpTtsWTWEM"},"\ucf54\ub4dc\ub9ac\ubdf0\uc5d0\uc11c \uce6d\ucc2c\ubc1b\uc740 \ucf54\ub4dc\uc758 \ube44\ubc00, \ud504\ub871\ud2b8"))))}d.isMDXComponent=!0}}]);