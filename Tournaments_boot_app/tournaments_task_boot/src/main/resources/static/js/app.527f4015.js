(function(e){function t(t){for(var o,u,i=t[0],s=t[1],c=t[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(n,u)&&n[u]&&f.push(n[u][0]),n[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);a&&a(t);while(f.length)f.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],o=!0,i=1;i<r.length;i++){var s=r[i];0!==n[s]&&(o=!1)}o&&(l.splice(t--,1),e=u(u.s=r[0]))}return e}var o={},n={app:0},l=[];function u(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=o,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(r,o,function(t){return e[t]}.bind(null,o));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var a=s;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"23eb":function(e,t,r){"use strict";r("d368")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),r("router-view")],1)},l=[],u=(r("034f"),r("2877")),i={},s=Object(u["a"])(i,n,l,!1,null,null,null),c=s.exports,a=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("HOMEPAGE")]),r("hr"),r("router-link",{attrs:{to:"/roles"}},[e._v("Work with roles")])],1)},f=[],d={},v=Object(u["a"])(d,p,f,!1,null,null,null),h=v.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("ROLES")]),r("hr"),r("router-link",{attrs:{to:"/addRole"}},[e._v("Add role")]),r("hr"),r("RoleList",{attrs:{rolesList:e.roles},on:{"remove-role":e.removeRole}})],1)},b=[],_=(r("d3b7"),r("4de4"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",e._l(e.rolesList,(function(t){return r("RoleComponent",{attrs:{role:t},on:{"remove-role":e.removeRole}})})),1)])}),O=[],y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",[e._v(" "+e._s(e.role.roleId)+" "+e._s(e.role.roleName)+" ")]),r("button",{staticClass:"remove-button",on:{click:function(t){return e.$emit("remove-role",e.role.roleId)}}},[e._v("×")])])},j=[],R={props:{role:{type:Object,required:!0}}},w=R,E=(r("23eb"),Object(u["a"])(w,y,j,!1,null,null,null)),g=E.exports,x={props:["rolesList"],components:{RoleComponent:g},methods:{removeRole:function(e){this.$emit("remove-role",e)}}},k=x,$=Object(u["a"])(k,_,O,!1,null,null,null),L=$.exports,P={components:{RoleList:L,RoleComponent:g},data:function(){return{roles:[]}},methods:{removeRole:function(e){var t={method:"DELETE"};fetch("http://localhost:8080/api/roles/"+e,t),this.roles=this.roles.filter((function(t){return t.roleId!==e}))}},mounted:function(){var e=this;fetch("http://localhost:8080/api/roles").then((function(e){return e.json()})).then((function(t){e.roles=t}))}},S=P,A=Object(u["a"])(S,m,b,!1,null,null,null),C=A.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("ADD ROLE")]),r("hr"),r("hr"),r("router-link",{attrs:{to:"/roles"}},[e._v("Cancel")])],1)},T=[],D={},H=Object(u["a"])(D,M,T,!1,null,null,null);H.exports;o["a"].use(a["a"]);var I=[{path:"/",name:"Home",component:h},{path:"/roles",name:"Roles",component:C},{path:"/addRole",name:"AddRoleForm",component:AddRoleForm}],F=new a["a"]({mode:"history",base:"/",routes:I}),J=F;o["a"].config.productionTip=!1,new o["a"]({router:J,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,r){},d368:function(e,t,r){}});
//# sourceMappingURL=app.527f4015.js.map