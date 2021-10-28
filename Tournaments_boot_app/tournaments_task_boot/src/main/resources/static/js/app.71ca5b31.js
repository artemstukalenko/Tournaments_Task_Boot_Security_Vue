(function(e){function r(r){for(var o,u,l=r[0],a=r[1],i=r[2],m=0,f=[];m<l.length;m++)u=l[m],Object.prototype.hasOwnProperty.call(n,u)&&n[u]&&f.push(n[u][0]),n[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);c&&c(r);while(f.length)f.shift()();return s.push.apply(s,i||[]),t()}function t(){for(var e,r=0;r<s.length;r++){for(var t=s[r],o=!0,l=1;l<t.length;l++){var a=t[l];0!==n[a]&&(o=!1)}o&&(s.splice(r--,1),e=u(u.s=t[0]))}return e}var o={},n={app:0},s=[];function u(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=o,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)u.d(t,o,function(r){return e[r]}.bind(null,o));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=r,l=l.slice();for(var i=0;i<l.length;i++)r(l[i]);var c=a;s.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"034f":function(e,r,t){"use strict";t("85ec")},"169b":function(e,r,t){"use strict";t("2b49")},"23eb":function(e,r,t){"use strict";t("d368")},"2b49":function(e,r,t){},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),t("router-view")],1)},s=[],u=(t("034f"),t("2877")),l={},a=Object(u["a"])(l,n,s,!1,null,null,null),i=a.exports,c=t("8c4f"),m=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h2",[e._v("HOMEPAGE")]),t("hr"),t("router-link",{attrs:{to:"/roles"}},[e._v("Work with roles")]),t("hr"),t("router-link",{attrs:{to:"/users"}},[e._v("Work with users")])],1)},f=[],p={},d=Object(u["a"])(p,m,f,!1,null,null,null),v=d.exports,h=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h2",[e._v("ROLES")]),t("AddRoleForm"),t("hr"),t("RoleList",{attrs:{rolesList:e.roles},on:{"remove-role":e.removeRole}})],1)},b=[],_=(t("d3b7"),t("4de4"),function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("ul",e._l(e.rolesList,(function(r){return t("RoleComponent",{attrs:{role:r},on:{"remove-role":e.removeRole}})})),1)])}),U=[],g=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("li",[t("span",[e._v(" "+e._s(e.role.roleId)+" "+e._s(e.role.roleName)+" ")]),t("button",{staticClass:"remove-button",on:{click:function(r){return e.$emit("remove-role",e.role.roleId)}}},[e._v("×")])])},y=[],w={props:{role:{type:Object,required:!0}}},R=w,O=(t("23eb"),Object(u["a"])(R,g,y,!1,null,null,null)),x=O.exports,j={props:["rolesList"],components:{RoleComponent:x},methods:{removeRole:function(e){this.$emit("remove-role",e)}}},E=j,$=Object(u["a"])(E,_,U,!1,null,null,null),P=$.exports,N=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("hr"),t("h3",[e._v("Add role")]),t("form",{on:{submit:function(r){return r.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.formRole.roleName,expression:"formRole.roleName"}],attrs:{type:"text"},domProps:{value:e.formRole.roleName},on:{input:function(r){r.target.composing||e.$set(e.formRole,"roleName",r.target.value)}}}),t("button",{attrs:{type:"submit"}},[e._v("Confirm")])])])},L=[],S=t("bc3a"),I=t.n(S),k={data:function(){return{formRole:{roleName:""}}},methods:{onSubmit:function(){I.a.post("http://localhost:8080/api/roles",this.formRole).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}}},C=k,A=(t("169b"),Object(u["a"])(C,N,L,!1,null,null,null)),M=A.exports,T={components:{RoleList:P,RoleComponent:x,AddRoleForm:M},data:function(){return{roles:[]}},methods:{removeRole:function(e){var r={method:"DELETE"};fetch("http://localhost:8080/api/roles/"+e,r),this.roles=this.roles.filter((function(r){return r.roleId!==e}))}},mounted:function(){var e=this;fetch("http://localhost:8080/api/roles").then((function(e){return e.json()})).then((function(r){e.roles=r}))}},D=T,F=Object(u["a"])(D,h,b,!1,null,null,null),H=F.exports,q=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h2",[e._v("USERS")]),t("AddUserForm"),t("hr"),t("UserList",{attrs:{usersList:e.users},on:{"remove-user":e.removeUser}})],1)},J=[],W=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("ul",e._l(e.usersList,(function(r){return t("UserComponent",{attrs:{role:r},on:{"remove-user":e.removeUser}})})),1)])},G=[],z=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("li",[t("span",[e._v(" "+e._s(e.user.userId)+" "+e._s(e.user.userRole.roleName)+" "+e._s(e.user.name)+" "+e._s(e.user.username)+" ")]),t("button",{staticClass:"remove-button",on:{click:function(r){return e.$emit("remove-user",e.user.userId)}}},[e._v("×")])])},B=[],K={props:{user:{type:Object,required:!0}}},Q=K,V=(t("6fbc"),Object(u["a"])(Q,z,B,!1,null,null,null)),X=V.exports,Y={props:["userList"],components:{UserComponent:X},methods:{removeUser:function(e){this.$emit("remove-user",e)}}},Z=Y,ee=Object(u["a"])(Z,W,G,!1,null,null,null),re=ee.exports,te=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("hr"),t("h3",[e._v("Add user")]),t("form",{on:{submit:function(r){return r.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.userRoleId,expression:"formUser.userRoleId"}],attrs:{type:"number",placeholder:"User role id"},domProps:{value:e.formUser.userRoleId},on:{input:function(r){r.target.composing||e.$set(e.formUser,"userRoleId",r.target.value)}}}),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.userName,expression:"formUser.userName"}],attrs:{type:"text",placeholder:"User name"},domProps:{value:e.formUser.userName},on:{input:function(r){r.target.composing||e.$set(e.formUser,"userName",r.target.value)}}}),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.userUsername,expression:"formUser.userUsername"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.formUser.userUsername},on:{input:function(r){r.target.composing||e.$set(e.formUser,"userUsername",r.target.value)}}}),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.userPassword,expression:"formUser.userPassword"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.formUser.userPassword},on:{input:function(r){r.target.composing||e.$set(e.formUser,"userPassword",r.target.value)}}}),t("br"),t("button",{attrs:{type:"submit"}},[e._v("Confirm")])])])},oe=[],ne={data:function(){return{formUser:{userRoleId:"",userName:"",userUsername:"",userPassword:""}}},methods:{onSubmit:function(){I.a.post("http://localhost:8080/api/users",this.formUser).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}}},se=ne,ue=(t("6d92"),Object(u["a"])(se,te,oe,!1,null,null,null)),le=ue.exports,ae={components:{UserList:re,UserComponent:X,AddUserForm:le},data:function(){return{users:[]}},methods:{removeUser:function(e){var r={method:"DELETE"};fetch("http://localhost:8080/api/users/"+e,r),this.roles=this.roles.filter((function(r){return r.userId!==e}))}},mounted:function(){var e=this;fetch("http://localhost:8080/api/users").then((function(e){return e.json()})).then((function(r){e.users=r}))}},ie=ae,ce=Object(u["a"])(ie,q,J,!1,null,null,null),me=ce.exports;o["a"].use(c["a"]);var fe=[{path:"/",name:"Home",component:v},{path:"/roles",name:"Roles",component:H},{path:"/users",name:"Users",component:me}],pe=new c["a"]({mode:"history",base:"/",routes:fe}),de=pe;o["a"].config.productionTip=!1,new o["a"]({router:de,render:function(e){return e(i)}}).$mount("#app")},"5c86":function(e,r,t){},"6d92":function(e,r,t){"use strict";t("5c86")},"6fbc":function(e,r,t){"use strict";t("c806")},"85ec":function(e,r,t){},c806:function(e,r,t){},d368:function(e,r,t){}});
//# sourceMappingURL=app.71ca5b31.js.map