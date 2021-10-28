(function(e){function t(t){for(var r,u,i=t[0],a=t[1],s=t[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(n,u)&&n[u]&&f.push(n[u][0]),n[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);c&&c(t);while(f.length)f.shift()();return l.push.apply(l,s||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],r=!0,i=1;i<o.length;i++){var a=o[i];0!==n[a]&&(r=!1)}r&&(l.splice(t--,1),e=u(u.s=o[0]))}return e}var r={},n={app:0},l=[];function u(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=r,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(o,r,function(t){return e[t]}.bind(null,r));return o},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=a;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"169b":function(e,t,o){"use strict";o("2b49")},"23eb":function(e,t,o){"use strict";o("d368")},"2b49":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),o("router-view")],1)},l=[],u=(o("034f"),o("2877")),i={},a=Object(u["a"])(i,n,l,!1,null,null,null),s=a.exports,c=o("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("HOMEPAGE")]),o("hr"),o("router-link",{attrs:{to:"/roles"}},[e._v("Work with roles")])],1)},f=[],d={},m=Object(u["a"])(d,p,f,!1,null,null,null),h=m.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("ROLES")]),o("hr"),o("a",{attrs:{href:/addRole/}},[e._v("Add new Role")]),o("RoleList",{attrs:{rolesList:e.roles},on:{"remove-role":e.removeRole}})],1)},b=[],_=(o("d3b7"),o("4de4"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("ul",e._l(e.rolesList,(function(t){return o("RoleComponent",{attrs:{role:t},on:{"remove-role":e.removeRole}})})),1)])}),y=[],O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[o("span",[e._v(" "+e._s(e.role.roleId)+" "+e._s(e.role.roleName)+" ")]),o("button",{staticClass:"remove-button",on:{click:function(t){return e.$emit("remove-role",e.role.roleId)}}},[e._v("×")])])},j=[],g={props:{role:{type:Object,required:!0}}},R=g,w=(o("23eb"),Object(u["a"])(R,O,j,!1,null,null,null)),x=w.exports,E={props:["rolesList"],components:{RoleComponent:x},methods:{removeRole:function(e){this.$emit("remove-role",e)}}},N=E,P=Object(u["a"])(N,_,y,!1,null,null,null),S=P.exports,$={components:{RoleList:S,RoleComponent:x},data:function(){return{roles:[]}},methods:{removeRole:function(e){var t={method:"DELETE"};fetch("http://localhost:8080/api/roles/"+e,t),this.roles=this.roles.filter((function(t){return t.roleId!==e}))}},mounted:function(){var e=this;fetch("http://localhost:8080/api/roles").then((function(e){return e.json()})).then((function(t){e.roles=t}))}},L=$,k=Object(u["a"])(L,v,b,!1,null,null,null),C=k.exports,M=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("ADD ROLE FORM")]),o("hr"),o("form",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.roleName,expression:"roleName"}],attrs:{type:"text"},domProps:{value:e.roleName},on:{input:function(t){t.target.composing||(e.roleName=t.target.value)}}}),o("button",{attrs:{type:"submit"}},[e._v("Confirm")])]),o("hr"),o("a",{attrs:{href:/roles/}},[e._v("Cancel")])])},T=[],A=(o("498a"),{data:function(){return{roleName:""}},methods:{onSubmit:function(){if(this.roleName.trim()){var e={roleName:this.roleName},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("http://localhost:8080/api/roles",t).then(console.log(e))}}}}),D=A,H=(o("169b"),Object(u["a"])(D,M,T,!1,null,null,null)),I=H.exports;r["a"].use(c["a"]);var J=[{path:"/",name:"Home",component:h},{path:"/roles",name:"Roles",component:C},{path:"/addRole",name:"AddRole",component:I}],q=new c["a"]({mode:"history",base:"/",routes:J}),F=q;r["a"].config.productionTip=!1,new r["a"]({router:F,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,o){},d368:function(e,t,o){}});
//# sourceMappingURL=app.8f5692c1.js.map