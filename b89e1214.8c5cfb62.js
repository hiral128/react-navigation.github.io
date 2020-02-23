(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{375:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),o=(n(0),n(465)),i={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},c={id:"version-1.x/getting-started",title:"Getting started",description:"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives.",source:"@site/versioned_docs/version-1.x/getting-started.md",permalink:"/docs/1.x/getting-started",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-1.x/getting-started.md",version:"1.x",sidebar_label:"Getting started",sidebar:"version-1.x/docs",next:{title:"Hello React Navigation",permalink:"/docs/1.x/hello-react-navigation"}},l=[{value:"What to expect",id:"what-to-expect",children:[]},{value:"Installation",id:"installation",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives."),Object(o.b)("p",null,"Before you commit to using React Navigation for your project, you might want to read the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.x/pitch"}),"anti-pitch")," ","\u2014"," it will help you to understand the tradeoffs that we have chosen along with the areas where we consider the library to be deficient currently."),Object(o.b)("h2",{id:"what-to-expect"},"What to expect"),Object(o.b)("p",null,"If you're already familiar with React Native then you'll be able to get moving with React Navigation quickly! If not, you may want to read sections 1 to 4 (inclusive) of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://reactnativeexpress.com/"}),"React Native Express")," first, then come back here when you're done."),Object(o.b)("p",null,"What follows within the ",Object(o.b)("em",{parentName:"p"},"Fundamentals")," section of this documentation is a tour of the most important aspects of React Navigation. It should be enough for you know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Install the ",Object(o.b)("inlineCode",{parentName:"p"},"react-navigation")," package in your React Native project."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-navigation\n# or with npm\n# npm install --save react-navigation\n")),Object(o.b)("p",null,"You're good to go! Continue to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.x/hello-react-navigation"}),'"Hello React Navigation"')," to start writing some code."))}u.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(f,c({ref:t},s,{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);