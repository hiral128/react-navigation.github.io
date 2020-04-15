(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),r=(n(0),n(469)),i={id:"localization",title:"Localization",sidebar_label:"Localization"},l={id:"version-3.x/localization",title:"Localization",description:"English is only one of many languages people speak around the world (thanks a lot, [Tower of Babel](https://en.wikipedia.org/wiki/Tower_of_Babel)) and it's polite and sometimes even necessary to translate our app to the languages our users speak. Let's look at one way we can do this in React Navigation - it's not the only way but it'll do the trick. Similar to [themes](themes.md), we will use `screenProps`. You may also want to use React's context API as demonstrated in the [themes](themes.md) guide in order to make it easier to access the translate function from a variety of components.",source:"@site/versioned_docs/version-3.x/localization.md",permalink:"/docs/3.x/localization",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-3.x/localization.md",version:"3.x",sidebar_label:"Localization",sidebar:"version-3.x-docs",previous:{title:"Integrating with MobX State Tree",permalink:"/docs/3.x/MST-integration"},next:{title:"React Navigation on the Web",permalink:"/docs/3.x/web-support"}},s=[{value:"Setting up a localization library",id:"setting-up-a-localization-library",children:[]},{value:"Wiring up your localization library to navigation",id:"wiring-up-your-localization-library-to-navigation",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"English is only one of many languages people speak around the world (thanks a lot, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Tower_of_Babel"}),"Tower of Babel"),") and it's polite and sometimes even necessary to translate our app to the languages our users speak. Let's look at one way we can do this in React Navigation - it's not the only way but it'll do the trick. Similar to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.x/themes"}),"themes"),", we will use ",Object(r.b)("inlineCode",{parentName:"p"},"screenProps"),". You may also want to use React's context API as demonstrated in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.x/themes"}),"themes")," guide in order to make it easier to access the translate function from a variety of components."),Object(r.b)("h2",{id:"setting-up-a-localization-library"},"Setting up a localization library"),Object(r.b)("p",null,"We'll need to use some kind of library to store our translations and provide a function that gives us access to them, along with handling fallbacks when we don't have a particular language defined. Localization and internationalization (i18n) are often used interchangeably, as in the example below where we get the current ",Object(r.b)("inlineCode",{parentName:"p"},"locale")," from ",Object(r.b)("inlineCode",{parentName:"p"},"expo-localization")," and use the ",Object(r.b)("inlineCode",{parentName:"p"},"i18n-js")," library for managing translations, for no particular reason other than it was available - use whatever you like."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import  * as Localization from 'expo-localization'; // or whatever library you want\nimport i18n from 'i18n-js'; // or whatever library you want\n\nconst en = {\n  foo: 'Foo',\n  bar: 'Bar {{someValue}}',\n};\n\nconst fr = {\n  foo: 'Fou',\n  bar: 'B\xe1r {{someValue}}',\n};\n\ni18n.fallbacks = true;\ni18n.translations = { fr, en };\n\n// This will log 'en' for me, as I'm an English speaker\nconsole.log(Localization.locale);\n")),Object(r.b)("h2",{id:"wiring-up-your-localization-library-to-navigation"},"Wiring up your localization library to navigation"),Object(r.b)("p",null,"Next let's store our ",Object(r.b)("inlineCode",{parentName:"p"},"locale")," in the state of our root app component and then thread it through ",Object(r.b)("inlineCode",{parentName:"p"},"screenProps")," to make it available throughout React Navigation."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export default class App extends React.Component {\n  state = {\n    locale: Localization.locale,\n  };\n\n  setLocale = locale => {\n    this.setState({ locale });\n  };\n\n  t = (scope, options) => {\n    return i18n.t(scope, { locale: this.state.locale, ...options });\n  };\n\n  render() {\n    return (\n      <AppContainer\n        screenProps={{\n          t: this.t,\n          locale: this.state.locale,\n          setLocale: this.setLocale,\n        }}\n      />\n    );\n  }\n}\n")),Object(r.b)("p",null,"Now in our screens we can use these ",Object(r.b)("inlineCode",{parentName:"p"},"screenProps")," as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"class Screen extends React.Component {\n  static navigationOptions = ({ screenProps: { t } }) => ({\n    title: t('foo'),\n  });\n\n  render() {\n    let { t, locale } = this.props.screenProps;\n\n    return (\n      <View style={styles.container}>\n        <Text style={styles.text}>\n          Current locale: {locale}.{' '}\n          {locale !== 'en' && locale !== 'fr'\n            ? 'Translations will fall back to \"en\" because none available'\n            : null}\n        </Text>\n        <Text>{t('bar', { someValue: Date.now() })}</Text>\n        {locale === 'en' ? (\n          <Button\n            title=\"Switch to French\"\n            onPress={() => this.props.screenProps.setLocale('fr')}\n          />\n        ) : (\n          <Button\n            title=\"Switch to English\"\n            onPress={() => this.props.screenProps.setLocale('en')}\n          />\n        )}\n      </View>\n    );\n  }\n}\n")),Object(r.b)("p",null,"You can run this example in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/@react-navigation/localization-example"}),"this Snack"),". Again, you may want to go further than just passing this through ",Object(r.b)("inlineCode",{parentName:"p"},"screenProps")," if you want to make it easier to access the ",Object(r.b)("inlineCode",{parentName:"p"},"t")," function or the other ",Object(r.b)("inlineCode",{parentName:"p"},"screenProps")," from any React component (and not just screen components that are rendered by React Navigation). Refer to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.x/themes"}),"themes")," and the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"React documentation on context")," for help with that."))}p.isMDXComponent=!0},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||r;return n?o.a.createElement(d,l({ref:t},c,{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);