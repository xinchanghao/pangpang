(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/pages/app/index.less":function(e,t,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(void 0)).push([e.i,"#components-layout-demo-top-side-2 .logo {\n  width: 120px;\n  height: 31px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 16px 28px 16px 0;\n  float: left;\n}\n",""])},"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/pages/components/header/style.less":function(e,t,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(void 0)).push([e.i,".header {\n  color: #ffffff;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n}\n.header__logo {\n  width: 200px;\n}\n.header__right {\n  position: absolute;\n  right: 0;\n}\n.header__right a {\n  color: #ffffff;\n}\n.header__right i {\n  margin-left: 5px;\n}\n",""])},"./src/actions/test.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("./src/utils/api.js"),s=(o=r)&&o.__esModule?o:{default:o};t.default={test:function(e){return function(){s.default.test(e).then((function(){console.log("修改成功")}))}}}},"./src/pages sync recursive ^\\.\\/.*$":function(e,t,n){var o={"./app":"./src/pages/app/index.jsx","./app/":"./src/pages/app/index.jsx","./app/home-son":"./src/pages/app/home-son/index.jsx","./app/home-son/":"./src/pages/app/home-son/index.jsx","./app/home-son/index":"./src/pages/app/home-son/index.jsx","./app/home-son/index.jsx":"./src/pages/app/home-son/index.jsx","./app/home-son/reducer":"./src/pages/app/home-son/reducer/index.js","./app/home-son/reducer/":"./src/pages/app/home-son/reducer/index.js","./app/home-son/reducer/index":"./src/pages/app/home-son/reducer/index.js","./app/home-son/reducer/index.js":"./src/pages/app/home-son/reducer/index.js","./app/index":"./src/pages/app/index.jsx","./app/index.jsx":"./src/pages/app/index.jsx","./app/index.less":"./src/pages/app/index.less","./app/reducer":"./src/pages/app/reducer/index.js","./app/reducer/":"./src/pages/app/reducer/index.js","./app/reducer/index":"./src/pages/app/reducer/index.js","./app/reducer/index.js":"./src/pages/app/reducer/index.js","./components/footer":"./src/pages/components/footer/index.jsx","./components/footer/":"./src/pages/components/footer/index.jsx","./components/footer/index":"./src/pages/components/footer/index.jsx","./components/footer/index.jsx":"./src/pages/components/footer/index.jsx","./components/header":"./src/pages/components/header/index.jsx","./components/header/":"./src/pages/components/header/index.jsx","./components/header/index":"./src/pages/components/header/index.jsx","./components/header/index.jsx":"./src/pages/components/header/index.jsx","./components/header/style":"./src/pages/components/header/style.less","./components/header/style.less":"./src/pages/components/header/style.less","./components/sider":"./src/pages/components/sider/index.jsx","./components/sider/":"./src/pages/components/sider/index.jsx","./components/sider/index":"./src/pages/components/sider/index.jsx","./components/sider/index.jsx":"./src/pages/components/sider/index.jsx","./nav1":"./src/pages/nav1/index.jsx","./nav1/":"./src/pages/nav1/index.jsx","./nav1/index":"./src/pages/nav1/index.jsx","./nav1/index.jsx":"./src/pages/nav1/index.jsx","./nav1/son":"./src/pages/nav1/son/index.jsx","./nav1/son/":"./src/pages/nav1/son/index.jsx","./nav1/son/index":"./src/pages/nav1/son/index.jsx","./nav1/son/index.jsx":"./src/pages/nav1/son/index.jsx","./nav2":"./src/pages/nav2/index.jsx","./nav2/":"./src/pages/nav2/index.jsx","./nav2/index":"./src/pages/nav2/index.jsx","./nav2/index.jsx":"./src/pages/nav2/index.jsx","./test":"./src/pages/test/index.jsx","./test/":"./src/pages/test/index.jsx","./test/index":"./src/pages/test/index.jsx","./test/index.jsx":"./src/pages/test/index.jsx"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id="./src/pages sync recursive ^\\.\\/.*$"},"./src/pages/app/home-son/index.jsx":function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=l(n("./node_modules/react/index.js")),a=l(n("./src/utils/BaseComponent.jsx")),u=n("./node_modules/react-redux/es/index.js");function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return console.log(222),s.default.createElement("div",null,s.default.createElement("p",null,this.props.addSonResult.getIn(["data"])),s.default.createElement("p",null,this.props.num.getIn(["data"])),s.default.createElement("p",null,this.props.num.getIn(["twonum"])))}}]),t}(a.default);t.default=(0,u.connect)((function(e){return{addSonResult:e.getIn(["HomeSonReducer"])}}))(i)},"./src/pages/app/index.jsx":function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=y(n("./node_modules/antd/lib/breadcrumb/index.js")),s=y(n("./node_modules/antd/lib/layout/index.js")),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n("./node_modules/antd/lib/breadcrumb/style/css.js"),n("./node_modules/antd/lib/layout/style/css.js");var u=y(n("./node_modules/react/index.js")),l=n("./node_modules/react-redux/es/index.js"),i=n("./node_modules/react-router-dom/es/index.js"),c=y(n("./src/utils/BaseComponent.jsx")),d=n("./src/utils/asyncComponent.jsx");n("./src/pages/app/index.less");var f=y(n("./src/pages/components/header/index.jsx")),p=y(n("./src/pages/components/sider/index.jsx")),m=y(n("./src/pages/components/footer/index.jsx"));function y(e){return e&&e.__esModule?e:{default:e}}var b=s.default.Content,j=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={data:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){return u.default.createElement(s.default,null,u.default.createElement(f.default,null),u.default.createElement(b,{style:{padding:"0 50px"}},u.default.createElement(r.default,{style:{margin:"16px 0"}},u.default.createElement(r.default.Item,null,"Home"),u.default.createElement(r.default.Item,null,"List"),u.default.createElement(r.default.Item,null,"App")),u.default.createElement(s.default,{style:{padding:"24px 0",background:"#fff"}},u.default.createElement(p.default,null),u.default.createElement(b,{style:{padding:"0 24px",minHeight:280}},u.default.createElement(i.Switch,null,u.default.createElement(i.Route,{path:"/1",exact:!0,component:(0,d.AsyncComponent)("nav1")}),u.default.createElement(i.Route,{path:"/2",component:(0,d.AsyncComponent)("nav2")}),u.default.createElement(i.Route,{path:"/test",component:(0,d.AsyncComponent)("test")}))))),u.default.createElement(m.default,null))}}]),t}(c.default);t.default=(0,l.connect)((function(e){return{addResult:e.getIn(["HomeReducer"])}}))(j)},"./src/pages/app/index.less":function(e,t,n){var o=n("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/pages/app/index.less");"string"==typeof o&&(o=[[e.i,o,""]]);var r={transform:void 0};n("./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals)},"./src/pages/components/footer/index.jsx":function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=l(n("./node_modules/antd/lib/layout/index.js")),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n("./node_modules/antd/lib/layout/style/css.js");var a=l(n("./node_modules/react/index.js")),u=n("./node_modules/react-redux/es/index.js");function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}var d=r.default.Footer,f=function(e){function t(){return i(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"render",value:function(){return a.default.createElement(d,{style:{textAlign:"center"}},"Pangpang ©2018 Created by ChhXin")}}]),t}(a.default.Component);t.default=(0,u.connect)((function(e){return{}}))(f)},"./src/pages/components/header/index.jsx":function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=p(n("./node_modules/antd/lib/dropdown/index.js")),s=p(n("./node_modules/antd/lib/icon/index.js")),a=p(n("./node_modules/antd/lib/menu/index.js")),u=p(n("./node_modules/antd/lib/layout/index.js")),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n("./node_modules/antd/lib/dropdown/style/css.js"),n("./node_modules/antd/lib/icon/style/css.js"),n("./node_modules/antd/lib/menu/style/css.js"),n("./node_modules/antd/lib/layout/style/css.js");var i=p(n("./node_modules/react/index.js")),c=n("./node_modules/react-redux/es/index.js"),d=n("./node_modules/react-router-dom/es/index.js"),f=p(n("./src/utils/auth.js"));function p(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}n("./src/pages/components/header/style.less");var b=u.default.Header,j=function(e){function t(){var e,n,o;m(this,t);for(var r=arguments.length,s=Array(r),u=0;u<r;u++)s[u]=arguments[u];return n=o=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.menu=i.default.createElement(a.default,null,i.default.createElement(a.default.Item,{key:"0"},i.default.createElement("a",{href:"/dashboard"},"个人中心")),i.default.createElement(a.default.Item,{key:"1"},i.default.createElement("a",{href:"#"},"退出"))),y(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"render",value:function(){return i.default.createElement(b,null,i.default.createElement("div",{className:"header"},i.default.createElement("div",{className:"header__logo"},"PANGPANG"),i.default.createElement(a.default,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],style:{lineHeight:"64px"}},i.default.createElement(a.default.Item,{key:"1"},i.default.createElement(d.Link,{to:"/1"}),"nav1"),i.default.createElement(a.default.Item,{key:"2"},i.default.createElement(d.Link,{to:"/2"}),"nav2"),i.default.createElement(a.default.Item,{key:"3"},i.default.createElement(d.Link,{to:"/test"}),"test")),i.default.createElement("div",{className:"header__right"},f.default.isLogin()?i.default.createElement(r.default,{overlay:this.menu,trigger:["click"]},i.default.createElement("a",{className:"ant-dropdown-link"},f.default.getUserContext().name,i.default.createElement(s.default,{type:"down"}))):i.default.createElement("a",{className:"ant-dropdown-link",href:"/login"},"登录"))))}}]),t}(i.default.Component);t.default=(0,c.connect)((function(e){return{}}))(j)},"./src/pages/components/header/style.less":function(e,t,n){var o=n("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/pages/components/header/style.less");"string"==typeof o&&(o=[[e.i,o,""]]);var r={transform:void 0};n("./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals)},"./src/pages/components/sider/index.jsx":function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=c(n("./node_modules/antd/lib/icon/index.js")),s=c(n("./node_modules/antd/lib/layout/index.js")),a=c(n("./node_modules/antd/lib/menu/index.js")),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n("./node_modules/antd/lib/icon/style/css.js"),n("./node_modules/antd/lib/layout/style/css.js"),n("./node_modules/antd/lib/menu/style/css.js");var l=c(n("./node_modules/react/index.js")),i=n("./node_modules/react-redux/es/index.js");function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}var p=a.default.SubMenu,m=(s.default.Header,s.default.Sider),y=function(e){function t(){return d(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"render",value:function(){return l.default.createElement(m,{width:200,style:{background:"#fff"}},l.default.createElement(a.default,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"}},l.default.createElement(p,{key:"sub1",title:l.default.createElement("span",null,l.default.createElement(r.default,{type:"user"}),"subnav 1")},l.default.createElement(a.default.Item,{key:"1"},"option1"),l.default.createElement(a.default.Item,{key:"2"},"option2"),l.default.createElement(a.default.Item,{key:"3"},"option3"),l.default.createElement(a.default.Item,{key:"4"},"option4")),l.default.createElement(p,{key:"sub2",title:l.default.createElement("span",null,l.default.createElement(r.default,{type:"laptop"}),"subnav 2")},l.default.createElement(a.default.Item,{key:"5"},"option5"),l.default.createElement(a.default.Item,{key:"6"},"option6"),l.default.createElement(a.default.Item,{key:"7"},"option7"),l.default.createElement(a.default.Item,{key:"8"},"option8")),l.default.createElement(p,{key:"sub3",title:l.default.createElement("span",null,l.default.createElement(r.default,{type:"notification"}),"subnav 3")},l.default.createElement(a.default.Item,{key:"9"},"option9"),l.default.createElement(a.default.Item,{key:"10"},"option10"),l.default.createElement(a.default.Item,{key:"11"},"option11"),l.default.createElement(a.default.Item,{key:"12"},"option12"))))}}]),t}(l.default.Component);t.default=(0,i.connect)((function(e){return{}}))(y)},"./src/pages/nav1/index.jsx":function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("./node_modules/react/index.js"),u=(r=a)&&r.__esModule?r:{default:r},l=n("./node_modules/react-router-dom/es/index.js"),i=n("./src/utils/asyncComponent.jsx");var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("h1",null,"this is nav1"),u.default.createElement(l.Route,{path:this.props.match.url+"/son",component:(0,i.AsyncComponent)("Login/Son")}))}}]),t}(u.default.Component);t.default=c},"./src/pages/nav1/son/index.jsx":function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("./node_modules/react/index.js"),u=(r=a)&&r.__esModule?r:{default:r};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}var c=function(e){function t(){return l(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("div",null,"6666666666666666666666")}}]),t}(u.default.Component);t.default=c},"./src/pages/nav2/index.jsx":function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("./node_modules/react/index.js"),u=(r=a)&&r.__esModule?r:{default:r};var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("h1",null,"this is nav 2"))}}]),t}(u.default.Component);t.default=l},"./src/pages/test/index.jsx":function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=c(n("./node_modules/react/index.js")),a=n("./node_modules/react-redux/es/index.js"),u=c(n("./src/utils/BaseComponent.jsx")),l=c(n("./src/actions/test.js")),i=n("./node_modules/redux/es/index.js");function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}var p=function(e){function t(){return d(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillMount",value:function(){this.props.testActions.test({account:"1",pwd:"1"})}},{key:"render",value:function(){return s.default.createElement("h1",null,"this is test")}}]),t}(u.default);t.default=(0,a.connect)((function(e){return{}}),(function(e){return{testActions:(0,i.bindActionCreators)(l.default,e)}}))(p)},"./src/utils/BaseComponent.jsx":function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("./node_modules/react/index.js"),u=(r=a)&&r.__esModule?r:{default:r},l=n("./node_modules/immutable/dist/immutable.js");var i=function(e){function t(e,n,r){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=this.props||{},o=this.state||{};if(t=t||{},e=e||{},Object.keys(n).length!==Object.keys(e).length||Object.keys(o).length!==Object.keys(t).length)return!0;for(var r in e)if(!(0,l.is)(n[r],e[r]))return!0;for(var s in t)if(!(0,l.is)(o[s],t[s]))return!0;return!1}}]),t}(u.default.Component);t.default=i},"./src/utils/api.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("./src/utils/request.js"),s=(o=r)&&o.__esModule?o:{default:o};var a={test:function(e){return(0,s.default)("/cars-sale/user/login",e,"post")}};t.default=Object.assign({},a)},"./src/utils/auth.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,s=void 0;try{for(var a,u=e[Symbol.iterator]();!(o=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,s=e}finally{try{!o&&u.return&&u.return()}finally{if(r)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},s=n("./src/utils/request.js"),a=(o=s)&&o.__esModule?o:{default:o},u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/tiny-cookie/es/index.js")),l=n("./src/utils/config.js");var i=new Date;i.setFullYear(i.getFullYear()+1),i=i.toGMTString();var c,d=/\?uid\=(\w+)/;function f(){return window.location.href="/",Promise.reject()}var p={login:function(){return p.__Login()},__Login:function(){var e,t=!!(e=location.href.match(d))&&e[1];return t?function(e){return(0,a.default)("/user/login/auth",{uid:e})}(t):f()},logout:function(){return(0,a.default)("/user/login/logout").then(f)},getUserContext:function(){if(!c){var e=u.get(l.PANGKey);if(!e)return p.logout();c=e.split("&").reduce((function(e,t){var n=t.split("="),o=r(n,2),s=o[0],a=o[1];return e[decodeURIComponent(s)]=decodeURIComponent(a),e}),{})}return c},isLogin:function(){return u.get(l.PANGKey)&&u.get("PANG_USER")}};t.default=p},"./src/utils/config.js":function(e,t,n){"use strict";var o="",r="";o="http://pangpang.net:8080",r="PANGPANGKey",e.exports={baseURL:o,PANGKey:r}},"./src/utils/request.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("./node_modules/antd/lib/alert/index.js"));n("./node_modules/antd/lib/alert/style/css.js");var r=a(n("./node_modules/reqwest/reqwest.js")),s=n("./src/utils/config.js");function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return new Promise((function(u,l){(0,r.default)({url:s.baseURL+e,method:n,data:t,processData:a,type:"json",crossOrigin:!0,withCredentials:!0}).then((function(e){1018!==e.errno&&404!==e.errno?(403===e.errno&&o.default.error(e.msg),601===e.errno&&l(e),u(e.data)):window.location.href="/"})).catch((function(t){console.log(t,e),l(t)}))}))}},1:function(e,t){}}]);
//# sourceMappingURL=1.500597c5.chunk.js.map