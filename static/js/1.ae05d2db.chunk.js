(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/pages/app/index.less":function(e,t,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(void 0)).push([e.i,"#components-layout-demo-top-side-2 .logo {\n  width: 120px;\n  height: 31px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 16px 28px 16px 0;\n  float: left;\n}\n",""])},"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/pages/components/header/style.less":function(e,t,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(void 0)).push([e.i,".header {\n  color: #ffffff;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n}\n.header__logo {\n  width: 200px;\n}\n.header__right {\n  position: absolute;\n  right: 0;\n}\n.header__right a {\n  color: #ffffff;\n}\n.header__right i {\n  margin-left: 5px;\n}\n",""])},"./src/actions/test.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("./src/utils/api.js"),s=(o=r)&&o.__esModule?o:{default:o};t.default={test:function(e){return function(){s.default.test(e).then(function(){console.log("\u4fee\u6539\u6210\u529f")})}}}},"./src/pages sync recursive ^\\.\\/.*$":function(e,t,n){var o={"./app":"./src/pages/app/index.jsx","./app/":"./src/pages/app/index.jsx","./app/home-son":"./src/pages/app/home-son/index.jsx","./app/home-son/":"./src/pages/app/home-son/index.jsx","./app/home-son/index":"./src/pages/app/home-son/index.jsx","./app/home-son/index.jsx":"./src/pages/app/home-son/index.jsx","./app/home-son/reducer":"./src/pages/app/home-son/reducer/index.js","./app/home-son/reducer/":"./src/pages/app/home-son/reducer/index.js","./app/home-son/reducer/index":"./src/pages/app/home-son/reducer/index.js","./app/home-son/reducer/index.js":"./src/pages/app/home-son/reducer/index.js","./app/index":"./src/pages/app/index.jsx","./app/index.jsx":"./src/pages/app/index.jsx","./app/index.less":"./src/pages/app/index.less","./app/reducer":"./src/pages/app/reducer/index.js","./app/reducer/":"./src/pages/app/reducer/index.js","./app/reducer/index":"./src/pages/app/reducer/index.js","./app/reducer/index.js":"./src/pages/app/reducer/index.js","./components/footer":"./src/pages/components/footer/index.jsx","./components/footer/":"./src/pages/components/footer/index.jsx","./components/footer/index":"./src/pages/components/footer/index.jsx","./components/footer/index.jsx":"./src/pages/components/footer/index.jsx","./components/header":"./src/pages/components/header/index.jsx","./components/header/":"./src/pages/components/header/index.jsx","./components/header/index":"./src/pages/components/header/index.jsx","./components/header/index.jsx":"./src/pages/components/header/index.jsx","./components/header/style":"./src/pages/components/header/style.less","./components/header/style.less":"./src/pages/components/header/style.less","./components/sider":"./src/pages/components/sider/index.jsx","./components/sider/":"./src/pages/components/sider/index.jsx","./components/sider/index":"./src/pages/components/sider/index.jsx","./components/sider/index.jsx":"./src/pages/components/sider/index.jsx","./nav1":"./src/pages/nav1/index.jsx","./nav1/":"./src/pages/nav1/index.jsx","./nav1/index":"./src/pages/nav1/index.jsx","./nav1/index.jsx":"./src/pages/nav1/index.jsx","./nav1/son":"./src/pages/nav1/son/index.jsx","./nav1/son/":"./src/pages/nav1/son/index.jsx","./nav1/son/index":"./src/pages/nav1/son/index.jsx","./nav1/son/index.jsx":"./src/pages/nav1/son/index.jsx","./nav2":"./src/pages/nav2/index.jsx","./nav2/":"./src/pages/nav2/index.jsx","./nav2/index":"./src/pages/nav2/index.jsx","./nav2/index.jsx":"./src/pages/nav2/index.jsx","./test":"./src/pages/test/index.jsx","./test/":"./src/pages/test/index.jsx","./test/index":"./src/pages/test/index.jsx","./test/index.jsx":"./src/pages/test/index.jsx"};function r(e){var t=s(e);return n(t)}function s(e){if(n.o(o,e))return o[e];var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return Object.keys(o)},r.resolve=s,(e.exports=r).id="./src/pages sync recursive ^\\.\\/.*$"},"./src/pages/app/home-son/index.jsx":function(e,t,n){"use strict";var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),s=l(n("./node_modules/react/index.js")),u=l(n("./src/utils/BaseComponent.jsx")),a=n("./node_modules/react-redux/es/index.js");function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":o(t))&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default),r(t,[{key:"render",value:function(){return console.log(222),s.default.createElement("div",null,s.default.createElement("p",null,this.props.addSonResult.getIn(["data"])),s.default.createElement("p",null,this.props.num.getIn(["data"])),s.default.createElement("p",null,this.props.num.getIn(["twonum"])))}}]),t}();t.default=(0,a.connect)(function(e){return{addSonResult:e.getIn(["HomeSonReducer"])}})(i)},"./src/pages/app/index.jsx":function(e,t,n){"use strict";var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=m(n("./node_modules/antd/lib/breadcrumb/index.js")),s=m(n("./node_modules/antd/lib/layout/index.js")),u=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();n("./node_modules/antd/lib/breadcrumb/style/css.js"),n("./node_modules/antd/lib/layout/style/css.js");var a=m(n("./node_modules/react/index.js")),l=n("./node_modules/react-redux/es/index.js"),i=n("./node_modules/react-router-dom/es/index.js"),c=m(n("./src/utils/BaseComponent.jsx")),d=n("./src/utils/asyncComponent.jsx");n("./src/pages/app/index.less");var f=m(n("./src/pages/components/header/index.jsx")),p=m(n("./src/pages/components/sider/index.jsx")),y=m(n("./src/pages/components/footer/index.jsx"));function m(e){return e&&e.__esModule?e:{default:e}}var b=s.default.Content,j=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":o(t))&&"function"!==typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={data:[]},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,c.default),u(n,[{key:"render",value:function(){return a.default.createElement(s.default,null,a.default.createElement(f.default,null),a.default.createElement(b,{style:{padding:"0 50px"}},a.default.createElement(r.default,{style:{margin:"16px 0"}},a.default.createElement(r.default.Item,null,"Home"),a.default.createElement(r.default.Item,null,"List"),a.default.createElement(r.default.Item,null,"App")),a.default.createElement(s.default,{style:{padding:"24px 0",background:"#fff"}},a.default.createElement(p.default,null),a.default.createElement(b,{style:{padding:"0 24px",minHeight:280}},a.default.createElement(i.Switch,null,a.default.createElement(i.Route,{path:"/1",exact:!0,component:(0,d.AsyncComponent)("nav1")}),a.default.createElement(i.Route,{path:"/2",component:(0,d.AsyncComponent)("nav2")}),a.default.createElement(i.Route,{path:"/test",component:(0,d.AsyncComponent)("test")}))))),a.default.createElement(y.default,null))}}]),n}();t.default=(0,l.connect)(function(e){return{addResult:e.getIn(["HomeReducer"])}})(j)},"./src/pages/app/index.less":function(e,t,n){var o=n("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/pages/app/index.less");"string"===typeof o&&(o=[[e.i,o,""]]);var r={transform:void 0};n("./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals)},"./src/pages/components/footer/index.jsx":function(e,t,n){"use strict";var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=l(n("./node_modules/antd/lib/layout/index.js")),s=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();n("./node_modules/antd/lib/layout/style/css.js");var u=l(n("./node_modules/react/index.js")),a=n("./node_modules/react-redux/es/index.js");function l(e){return e&&e.__esModule?e:{default:e}}var i=r.default.Footer,c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":o(t))&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),s(t,[{key:"render",value:function(){return u.default.createElement(i,{style:{textAlign:"center"}},"Pangpang \xa92018 Created by ChhXin")}}]),t}();t.default=(0,a.connect)(function(e){return{}})(c)},"./src/pages/components/header/index.jsx":function(e,t,n){"use strict";var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=p(n("./node_modules/antd/lib/dropdown/index.js")),s=p(n("./node_modules/antd/lib/icon/index.js")),a=p(n("./node_modules/antd/lib/menu/index.js")),u=p(n("./node_modules/antd/lib/layout/index.js")),l=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();n("./node_modules/antd/lib/dropdown/style/css.js"),n("./node_modules/antd/lib/icon/style/css.js"),n("./node_modules/antd/lib/menu/style/css.js"),n("./node_modules/antd/lib/layout/style/css.js");var i=p(n("./node_modules/react/index.js")),c=n("./node_modules/react-redux/es/index.js"),d=n("./node_modules/react-router-dom/es/index.js"),f=p(n("./src/utils/auth.js"));function p(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":o(t))&&"function"!==typeof t?e:t}n("./src/pages/components/header/style.less");var m=u.default.Header,b=function(e){function u(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=n=y(this,(e=u.__proto__||Object.getPrototypeOf(u)).call.apply(e,[this].concat(r)))).menu=i.default.createElement(a.default,null,i.default.createElement(a.default.Item,{key:"0"},i.default.createElement("a",{href:"/dashboard"},"\u4e2a\u4eba\u4e2d\u5fc3")),i.default.createElement(a.default.Item,{key:"1"},i.default.createElement("a",{href:"#"},"\u9000\u51fa"))),y(n,t)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,i.default.Component),l(u,[{key:"render",value:function(){return i.default.createElement(m,null,i.default.createElement("div",{className:"header"},i.default.createElement("div",{className:"header__logo"},"PANGPANG"),i.default.createElement(a.default,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],style:{lineHeight:"64px"}},i.default.createElement(a.default.Item,{key:"1"},i.default.createElement(d.Link,{to:"/1"}),"nav1"),i.default.createElement(a.default.Item,{key:"2"},i.default.createElement(d.Link,{to:"/2"}),"nav2"),i.default.createElement(a.default.Item,{key:"3"},i.default.createElement(d.Link,{to:"/test"}),"test")),i.default.createElement("div",{className:"header__right"},f.default.isLogin()?i.default.createElement(r.default,{overlay:this.menu,trigger:["click"]},i.default.createElement("a",{className:"ant-dropdown-link"},f.default.getUserContext().name,i.default.createElement(s.default,{type:"down"}))):i.default.createElement("a",{className:"ant-dropdown-link",href:"/login"},"\u767b\u5f55"))))}}]),u}();t.default=(0,c.connect)(function(e){return{}})(b)},"./src/pages/components/header/style.less":function(e,t,n){var o=n("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/pages/components/header/style.less");"string"===typeof o&&(o=[[e.i,o,""]]);var r={transform:void 0};n("./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals)},"./src/pages/components/sider/index.jsx":function(e,t,n){"use strict";var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=c(n("./node_modules/antd/lib/icon/index.js")),s=c(n("./node_modules/antd/lib/layout/index.js")),u=c(n("./node_modules/antd/lib/menu/index.js")),a=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();n("./node_modules/antd/lib/icon/style/css.js"),n("./node_modules/antd/lib/layout/style/css.js"),n("./node_modules/antd/lib/menu/style/css.js");var l=c(n("./node_modules/react/index.js")),i=n("./node_modules/react-redux/es/index.js");function c(e){return e&&e.__esModule?e:{default:e}}var d=u.default.SubMenu,f=(s.default.Header,s.default.Sider),p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":o(t))&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),a(t,[{key:"render",value:function(){return l.default.createElement(f,{width:200,style:{background:"#fff"}},l.default.createElement(u.default,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"}},l.default.createElement(d,{key:"sub1",title:l.default.createElement("span",null,l.default.createElement(r.default,{type:"user"}),"subnav 1")},l.default.createElement(u.default.Item,{key:"1"},"option1"),l.default.createElement(u.default.Item,{key:"2"},"option2"),l.default.createElement(u.default.Item,{key:"3"},"option3"),l.default.createElement(u.default.Item,{key:"4"},"option4")),l.default.createElement(d,{key:"sub2",title:l.default.createElement("span",null,l.default.createElement(r.default,{type:"laptop"}),"subnav 2")},l.default.createElement(u.default.Item,{key:"5"},"option5"),l.default.createElement(u.default.Item,{key:"6"},"option6"),l.default.createElement(u.default.Item,{key:"7"},"option7"),l.default.createElement(u.default.Item,{key:"8"},"option8")),l.default.createElement(d,{key:"sub3",title:l.default.createElement("span",null,l.default.createElement(r.default,{type:"notification"}),"subnav 3")},l.default.createElement(u.default.Item,{key:"9"},"option9"),l.default.createElement(u.default.Item,{key:"10"},"option10"),l.default.createElement(u.default.Item,{key:"11"},"option11"),l.default.createElement(u.default.Item,{key:"12"},"option12"))))}}]),t}();t.default=(0,i.connect)(function(e){return{}})(p)},"./src/pages/nav1/index.jsx":function(e,t,n){"use strict";var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r,s=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),u=n("./node_modules/react/index.js"),a=(r=u)&&r.__esModule?r:{default:r},l=n("./node_modules/react-router-dom/es/index.js"),i=n("./src/utils/asyncComponent.jsx");var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":o(t))&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),s(t,[{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement("h1",null,"this is nav1"),a.default.createElement(l.Route,{path:this.props.match.url+"/son",component:(0,i.AsyncComponent)("Login/Son")}))}}]),t}();t.default=c},"./src/pages/nav1/son/index.jsx":function(e,t,n){"use strict";var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r,s=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),u=n("./node_modules/react/index.js"),a=(r=u)&&r.__esModule?r:{default:r};var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":o(t))&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),s(t,[{key:"render",value:function(){return a.default.createElement("div",null,"6666666666666666666666")}}]),t}();t.default=l},"./src/pages/nav2/index.jsx":function(e,t,n){"use strict";var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r,s=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),u=n("./node_modules/react/index.js"),a=(r=u)&&r.__esModule?r:{default:r};var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":o(t))&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),s(t,[{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement("h1",null,"this is nav 2"))}}]),t}();t.default=l},"./src/pages/test/index.jsx":function(e,t,n){"use strict";var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),s=c(n("./node_modules/react/index.js")),u=n("./node_modules/react-redux/es/index.js"),a=c(n("./src/utils/BaseComponent.jsx")),l=c(n("./src/actions/test.js")),i=n("./node_modules/redux/es/index.js");function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":o(t))&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),r(t,[{key:"componentWillMount",value:function(){this.props.testActions.test({account:"1",pwd:"1"})}},{key:"render",value:function(){return s.default.createElement("h1",null,"this is test")}}]),t}();t.default=(0,u.connect)(function(e){return{}},function(e){return{testActions:(0,i.bindActionCreators)(l.default,e)}})(d)},"./src/utils/BaseComponent.jsx":function(e,t,n){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o,s=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),u=n("./node_modules/react/index.js"),a=(o=u)&&o.__esModule?o:{default:o},l=n("./node_modules/immutable/dist/immutable.js");var i=function(e){function o(e,t,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":r(t))&&"function"!==typeof t?e:t}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t,n))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":r(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,a.default.Component),s(o,[{key:"shouldComponentUpdate",value:function(e,t){var n=this.props||{},o=this.state||{};if(t=t||{},e=e||{},Object.keys(n).length!==Object.keys(e).length||Object.keys(o).length!==Object.keys(t).length)return!0;for(var r in e)if(!(0,l.is)(n[r],e[r]))return!0;for(var s in t)if(!(0,l.is)(o[s],t[s]))return!0;return!1}}]),o}();t.default=i},"./src/utils/api.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("./src/utils/request.js"),s=(o=r)&&o.__esModule?o:{default:o};var u={test:function(e){return(0,s.default)("/cars-sale/user/login",e,"post")}};t.default=Object.assign({},u)},"./src/utils/auth.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,u=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,s=void 0;try{for(var u,a=e[Symbol.iterator]();!(o=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);o=!0);}catch(e){r=!0,s=e}finally{try{!o&&a.return&&a.return()}finally{if(r)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=n("./src/utils/request.js"),s=(o=r)&&o.__esModule?o:{default:o},a=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n("./node_modules/tiny-cookie/es/index.js")),l=n("./src/utils/config.js");var i=new Date;i.setFullYear(i.getFullYear()+1),i=i.toGMTString();var c,d=/\?uid\=(\w+)/;function f(){return window.location.href="/",Promise.reject()}var p={login:function(){return p.__Login()},__Login:function(){var e,t,n=!!(e=location.href.match(d))&&e[1];return n?(t=n,(0,s.default)("/user/login/auth",{uid:t})):f()},logout:function(){return(0,s.default)("/user/login/logout").then(f)},getUserContext:function(){if(!c){var e=a.get(l.PANGKey);if(!e)return p.logout();c=e.split("&").reduce(function(e,t){var n=t.split("="),o=u(n,2),r=o[0],s=o[1];return e[decodeURIComponent(r)]=decodeURIComponent(s),e},{})}return c},isLogin:function(){return a.get(l.PANGKey)&&a.get("PANG_USER")}};t.default=p},"./src/utils/config.js":function(e,t,n){"use strict";var o="",r="";o="http://pangpang.net:8080",r="PANGPANGKey",e.exports={baseURL:o,PANGKey:r}},"./src/utils/request.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=o(n("./node_modules/antd/lib/alert/index.js"));n("./node_modules/antd/lib/alert/style/css.js");var a=o(n("./node_modules/reqwest/reqwest.js")),l=n("./src/utils/config.js");function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return new Promise(function(t,n){(0,a.default)({url:l.baseURL+o,method:r,data:e,processData:s,type:"json",crossOrigin:!0,withCredentials:!0}).then(function(e){1018!==e.errno&&404!==e.errno?(403===e.errno&&u.default.error(e.msg),601===e.errno&&n(e),t(e.data)):window.location.href="/"}).catch(function(e){console.log(e,o),n(e)})})}},1:function(e,t){}}]);