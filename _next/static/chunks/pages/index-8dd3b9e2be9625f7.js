(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8380)}])},8380:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var r=t(5893),i=t(7294),o=t(9008),u=t(1664),a=t(1591),c=t(1358),l=t.n(c);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function d(){var e,n,t=(e=["\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  justify-content: center;\n\n  > li {\n    > a {\n      cursor: pointer;\n      width: 35px;\n      height: 35px;\n      color: blue;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border: 1px solid blue;\n    }\n\n    &.page:not(:nth-last-child(2)),\n    &.break {\n      > a {\n        border-right: none;\n      }\n    }\n\n    &.previous {\n      margin-right: 2rem;\n    }\n\n    &.next {\n      margin-left: 2rem;\n    }\n\n    &.selected {\n      background: blue;\n      cursor: default;\n\n      a {\n        color: #fff;\n      }\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return d=function(){return t},t}var p=(0,t(4632).Z)(l())(d()),b=function(e){e.pageRangeDisplayed;var n=f(e,["pageRangeDisplayed"]);return(0,r.jsx)(p,function(e){for(var n=arguments,t=function(t){var r=null!=n[t]?n[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){s(e,n,r[n])}))},r=1;r<arguments.length;r++)t(r);return e}({nextLabel:">",pageClassName:"page",pageCount:99,pageRangeDisplayed:5,previousLabel:"<"},n))},y=t(8767),v=t(8520),h=t.n(v),g=t(3144),O=t.n(g);function m(e,n,t,r,i,o,u){try{var a=e[o](u),c=a.value}catch(l){return void t(l)}a.done?n(c):Promise.resolve(c).then(r,i)}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e){for(var n=arguments,t=function(t){var r=null!=n[t]?n[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){j(e,n,r[n])}))},r=1;r<arguments.length;r++)t(r);return e}function w(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var P=function(e,n){var t,r=void 0===n?{}:n,i=r.headers,o=w(r,["headers"]);return O()("".concat("https://api.opensea.io/api/v1","/").concat(e),x({headers:x({"Content-Type":"application/json"},i)},o)).then((t=h().mark((function e(n){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.text();case 2:if(t=e.sent,!String(n.status).startsWith("2")){e.next=5;break}return e.abrupt("return",JSON.parse(t));case 5:return e.abrupt("return",Promise.reject(t));case 6:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function u(e){m(o,r,i,u,a,"next",e)}function a(e){m(o,r,i,u,a,"throw",e)}u(void 0)}))}))};function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var C=function(e,n){var t=void 0===e?{}:e,r=t.order,i=void 0===r?"desc":r,o=t.offset,u=void 0===o?0:o,a=t.limit,c=void 0===a?20:a,l=void 0===n?{}:n,s=new URLSearchParams({order_by:"sale_count",order_direction:i,offset:String(u),limit:String(c)}),f=function(e,n,t){var r=void 0===n?{}:n,i=void 0===t?{}:t;return(0,y.useQuery)(e,(function(e){var n=S(e.queryKey,1)[0];return P(n,r)}),i)}(["assets?".concat(s.toString())],{},l),d=f.data,p=_(f,["data"]);return function(e){for(var n=arguments,t=function(t){var r=null!=n[t]?n[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){k(e,n,r[n])}))},r=1;r<arguments.length;r++)t(r);return e}({data:null===d||void 0===d?void 0:d.assets},p)},E=t(2262),N=t(2760),A=t(6052),T=t(8527),D=t(1131);function I(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function L(e){for(var n=arguments,t=function(t){var r=null!=n[t]?n[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){I(e,n,r[n])}))},r=1;r<arguments.length;r++)t(r);return e}function W(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var R=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));var n,t,c=function(e){var n=void 0===e?0:e,t=(0,i.useState)(n),r=t[0],o=t[1];return{initialPage:n,onPageChange:(0,i.useCallback)((function(e){var n=e.selected;o(n)}),[]),page:r}}(),l=(0,N.pm)(),s=W((0,D.KO)(E.t),2),f=s[0],d=s[1],p=C({offset:20*c.page}),y=p.data,v=void 0===y?[]:y,h=p.isLoading,g=(0,i.useCallback)((function(e){var n=v[e],t=n.id,r=n.name;d((function(n){return L({},n,I({},t,v[e]))})),l({title:"Add to WatchList",position:"bottom-right",description:"".concat(r," is added to your watchlist."),status:"success",duration:9e3,isClosable:!0})}),[v,d,l]);return(0,r.jsxs)(A.m$.div,{children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"NFTs"})}),(0,r.jsx)(A.m$.h1,{textAlign:"center",children:"NFTs"}),(0,r.jsx)(u.default,{href:"/watchlist",children:(0,r.jsx)("a",{children:"Go to WatchList"})}),h?(0,r.jsx)(T.kC,{alignItems:"center",justifyContent:"center",minH:"100vh",children:"loading..."}):(0,r.jsx)(T.kC,{flexWrap:"wrap",justifyContent:"center",sx:{gap:"1rem"},children:v.map((function(e,i){return(0,r.jsx)(a.s,{img:null!==(n=e.image_preview_url)&&void 0!==n?n:"",name:null!==(t=e.name)&&void 0!==t?t:"",sales:e.num_sales,children:!(e.id in f)&&(0,r.jsx)(T.xu,{cursor:"pointer",p:2,textAlign:"center",children:(0,r.jsx)(T.xv,{sx:{"&:hover":{color:"blue"}},onClick:function(){return g(i)},children:"+ Add to Watchlist"})})},e.id)}))}),(0,r.jsx)(T.xu,{my:50,children:(0,r.jsx)(b,L({},c))})]})}},1591:function(e,n,t){"use strict";t.d(n,{s:function(){return a}});var r=t(5893),i=(t(7294),t(8527)),o=t(6052);function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=function(e){var n=e.children,t=e.img,a=e.name,c=e.sales;u(e,["children","img","name","sales"]);return(0,r.jsx)(i.xu,{border:"1px solid #ccc",overflow:"hidden",w:250,children:t&&(0,r.jsxs)(i.xu,{children:[(0,r.jsx)(i.kC,{h:"250",children:(0,r.jsx)(o.m$.img,{alt:a,display:"block",m:"0 auto",src:t})}),(0,r.jsxs)(i.xu,{children:[(0,r.jsx)("pre",{children:JSON.stringify({name:a,num_sales:c},null,2)}),n]})]})})}},2262:function(e,n,t){"use strict";t.d(n,{t:function(){return r}});var r=(0,t(4824).O4)("watchList",{})}},function(e){e.O(0,[954,975,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);