"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=h(n),d=r,u=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var h=2;h<o;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=n(7462),r=(n(7294),n(3905));const o={slug:"python-multiple-inheritance",title:"Multiple Inheritance in Python",authors:{name:"Daehoon Seong",title:"author",url:"https://github.com/seongdaehoon",image_url:"https://avatars.githubusercontent.com/u/99000722?v=4"},tags:["python"]},i=void 0,s={permalink:"/blog/python-multiple-inheritance",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-04-01-multiple-inheritance.md",source:"@site/blog/2023-04-01-multiple-inheritance.md",title:"Multiple Inheritance in Python",description:"What is Multiple Inheritance in Python?",date:"2023-04-01T00:00:00.000Z",formattedDate:"April 1, 2023",tags:[{label:"python",permalink:"/blog/tags/python"}],readingTime:3.425,hasTruncateMarker:!1,authors:[{name:"Daehoon Seong",title:"author",url:"https://github.com/seongdaehoon",image_url:"https://avatars.githubusercontent.com/u/99000722?v=4",imageURL:"https://avatars.githubusercontent.com/u/99000722?v=4"}],frontMatter:{slug:"python-multiple-inheritance",title:"Multiple Inheritance in Python",authors:{name:"Daehoon Seong",title:"author",url:"https://github.com/seongdaehoon",image_url:"https://avatars.githubusercontent.com/u/99000722?v=4",imageURL:"https://avatars.githubusercontent.com/u/99000722?v=4"},tags:["python"]},nextItem:{title:"Why Object-oriented Programming?",permalink:"/blog/cs-why-oop"}},l={authorsImageUrls:[void 0]},h=[{value:"What is Multiple Inheritance in Python?",id:"what-is-multiple-inheritance-in-python",level:2},{value:"Defining a Class with Multiple Inheritance",id:"defining-a-class-with-multiple-inheritance",level:2},{value:"Calling Methods from Parent Classes",id:"calling-methods-from-parent-classes",level:2},{value:"Method Resolution Order (MRO)",id:"method-resolution-order-mro",level:2},{value:"Handling Name Conflicts in Multiple Inheritance",id:"handling-name-conflicts-in-multiple-inheritance",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:h},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-multiple-inheritance-in-python"},"What is Multiple Inheritance in Python?"),(0,r.kt)("p",null,"Multiple inheritance is a feature in object-oriented programming that allows a class to inherit attributes and methods from more than one parent class. This feature enables a subclass to combine the behaviour of multiple classes into a single class, resulting in more concise and maintainable code."),(0,r.kt)("admonition",{title:"Possible",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc4c C++, Python")),(0,r.kt)("admonition",{title:"Not-possible",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u26d4 Java, C#, JavaScript")),(0,r.kt)("h2",{id:"defining-a-class-with-multiple-inheritance"},"Defining a Class with Multiple Inheritance"),(0,r.kt)("p",null,"In Python, defining a class with multiple inheritance is as simple as listing the parent classes in the class definition separated by commas. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class Parent1:\n    def method1(self):\n        print("Parent1 method1")\n\nclass Parent2:\n    def method2(self):\n        print("Parent2 method2")\n\nclass Child(Parent1, Parent2):\n    def method3(self):\n        print("Child method3")\n')),(0,r.kt)("p",null,"In this example, the class ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Child"))," inherits from both ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Parent1"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Parent2")),", and also defines its own method ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"method3")),"."),(0,r.kt)("h2",{id:"calling-methods-from-parent-classes"},"Calling Methods from Parent Classes"),(0,r.kt)("p",null,"Once we have defined a class with multiple inheritance, we can call methods from parent classes just as we would with a single parent class. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> c = Child()\n>>> c.method1()\nParent1 method1\n>>> c.method2()\nParent2 method2\n>>> c.method3()\nChild method3\n")),(0,r.kt)("p",null,"This example demonstrates how we can call methods from both ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Parent1"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Parent2")),", as well as from the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Child"))," class."),(0,r.kt)("h2",{id:"method-resolution-order-mro"},"Method Resolution Order (MRO)"),(0,r.kt)("p",null,"When a class has multiple parent classes, it's important to understand the method resolution order (MRO) to determine which method should be called when there are conflicts. The MRO is a linear ordering of the inheritance hierarchy that determines the order in which methods are searched for and called."),(0,r.kt)("p",null,"In Python, we can access the MRO using the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"mro()"))," method. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class Parent1:\n    def method(self):\n        print("Parent1 method")\n\nclass Parent2:\n    def method(self):\n        print("Parent2 method")\n\nclass Child(Parent1, Parent2):\n    pass\n\nprint(Child.mro())\n')),(0,r.kt)("p",null,"This code demonstrates how to access the MRO of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Child"))," class. The output of this code will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"[<class '__main__.Child'>, <class '__main__.Parent1'>, <class '__main__.Parent2'>, <class 'object'>]\n")),(0,r.kt)("p",null,"This tells us that when we call ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"method()"))," on an object of type ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Child")),", Python will first search for the method in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Child")),", then in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Parent1")),", then in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Parent2")),", and finally in the built-in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"object"))," class."),(0,r.kt)("h2",{id:"handling-name-conflicts-in-multiple-inheritance"},"Handling Name Conflicts in Multiple Inheritance"),(0,r.kt)("p",null,"When we define a class with multiple inheritance, there may be cases where parent classes have methods with the same name. In such cases, we need to use the MRO to determine which method should be called."),(0,r.kt)("p",null,"One way to handle name conflicts is to use method aliases. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class Parent1:\n    def method(self):\n        print("Parent1 method")\n\nclass Parent2:\n    def method(self):\n        print("Parent2 method")\n\nclass Child(Parent1, Parent2):\n    def parent1_method(self):\n        Parent1.method(self)\n\n    def parent2_method(self):\n        Parent2.method\n')),(0,r.kt)("p",null,"In this example, we create two methods, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"parent1_method"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"parent2_method")),", which call the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"method"))," of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Parent1"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Parent2"))," respectively. This way, we can distinguish between methods of parent classes that share the same name."),(0,r.kt)("p",null,"Another way to handle name conflicts is to use the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"super()"))," function to call the parent method. The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"super()"))," function automatically determines the MRO and calls the method of the next class in the MRO. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class Parent1:\n    def method(self):\n        print("Parent1 method")\n\nclass Parent2:\n    def method(self):\n        print("Parent2 method")\n\nclass Child(Parent1, Parent2):\n    def method(self):\n        super().method()\n')),(0,r.kt)("p",null,"In this example, we define a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Child"))," class that inherits from ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Parent1"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Parent2")),". The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Child"))," class also defines a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"method"))," that calls the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"method"))," of the next class in the MRO using the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"super()"))," function. This way, we can call the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"method"))," of both parent classes without having to use method aliases."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Multiple inheritance is a powerful feature of object-oriented programming that allows us to combine the behavior of multiple classes into a single class. In Python, we can define a class with multiple inheritance by listing the parent classes in the class definition, separated by commas. We can call methods from parent classes just as we would with a single parent class. When conflicts arise between the methods of parent classes, we can use the MRO to determine which method should be called. We can also disambiguate between methods with the same name using method aliases or the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"super()"))," function."))}c.isMDXComponent=!0}}]);