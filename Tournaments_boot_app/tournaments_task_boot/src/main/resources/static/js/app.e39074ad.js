(function(e){function t(t){for(var r,u,i=t[0],s=t[1],c=t[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);a&&a(t);while(f.length)f.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},l=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var a=s;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("router-view")],1)},l=[],u=(n("034f"),n("2877")),i={},s=Object(u["a"])(i,o,l,!1,null,null,null),c=s.exports,a=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("HOMEPAGE")]),n("hr"),n("router-link",{attrs:{to:"/roles"}},[e._v("Work with roles")])],1)},f=[],d={},v=Object(u["a"])(d,p,f,!1,null,null,null),h=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("ROLES")]),n("hr"),n("router-link",{attrs:{to:"/"}},[e._v("Homepage")]),n("RoleList",{attrs:{rolesList:e.roles}})],1)},m=[],_=(n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",e._l(e.rolesList,(function(e){return n("RoleComponent",{attrs:{role:e}})})),1)])}),y=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("strong",[e._v(e._s(e.role.roleName))])])},j=[],g={props:{role:{type:Object,required:!0}}},w=g,x=Object(u["a"])(w,O,j,!1,null,null,null),E=x.exports,P={props:["rolesList"],components:{RoleComponent:E}},k=P,R=Object(u["a"])(k,_,y,!1,null,null,null),L=R.exports,S={components:{RoleList:L,RoleComponent:E},data:function(){return{roles:[]}},mounted:function(){var e=this;fetch("http://localhost:8080/roles").then((function(e){return e.json()})).then((function(t){e.roles=t,console.log(t)}))}},$=S,M=Object(u["a"])($,b,m,!1,null,null,null),H=M.exports;r["a"].use(a["a"]);var C=[{path:"/",name:"Home",component:h},{path:"/roles",name:"Roles",component:H}],T=new a["a"]({mode:"history",base:"/",routes:C}),J=T;r["a"].config.productionTip=!1,new r["a"]({router:J,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.e39074ad.js.map