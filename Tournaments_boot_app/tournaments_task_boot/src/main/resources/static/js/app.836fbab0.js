(function(e){function t(t){for(var o,u,l=t[0],a=t[1],i=t[2],m=0,p=[];m<l.length;m++)u=l[m],Object.prototype.hasOwnProperty.call(n,u)&&n[u]&&p.push(n[u][0]),n[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);c&&c(t);while(p.length)p.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,l=1;l<r.length;l++){var a=r[l];0!==n[a]&&(o=!1)}o&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var o={},n={app:0},s=[];function u(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=o,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(r,o,function(t){return e[t]}.bind(null,o));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var c=a;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"169b":function(e,t,r){"use strict";r("2b49")},"23eb":function(e,t,r){"use strict";r("d368")},"2b49":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),r("router-view")],1)},s=[],u=(r("034f"),r("2877")),l={},a=Object(u["a"])(l,n,s,!1,null,null,null),i=a.exports,c=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("HOMEPAGE")]),r("hr"),r("router-link",{attrs:{to:"/roles"}},[e._v("Work with roles")]),r("hr"),r("router-link",{attrs:{to:"/users"}},[e._v("Work with users")])],1)},p=[],f={},d=Object(u["a"])(f,m,p,!1,null,null,null),v=d.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("ROLES")]),r("AddRoleForm"),r("hr"),r("RoleList",{attrs:{rolesList:e.roles},on:{"remove-role":e.removeRole,"update-role":e.updateRole}})],1)},b=[],_=(r("d3b7"),r("4de4"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",e._l(e.rolesList,(function(t){return r("RoleComponent",{attrs:{role:t},on:{"remove-role":e.removeRole,"update-role":e.updateRole}})})),1)])}),U=[],g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",[e._v(" "+e._s(e.role.roleId)+" "+e._s(e.role.roleName)+" ")]),r("button",{staticClass:"remove-button",on:{click:function(t){return e.$emit("remove-role",e.role.roleId)}}},[e._v("×")]),r("a",{on:{click:function(t){return e.$emit("update-role",e.role.roleId)}}},[e._v(" Update")])])},R=[],y={props:{role:{type:Object,required:!0},needUpdate:!1}},w=y,O=(r("23eb"),Object(u["a"])(w,g,R,!1,null,null,null)),x=O.exports,$={props:["rolesList"],components:{RoleComponent:x},methods:{removeRole:function(e){this.$emit("remove-role",e)},updateRole:function(e){this.$emit("update-role",e)}}},j=$,E=Object(u["a"])(j,_,U,!1,null,null,null),P=E.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("hr"),r("h3",[e._v("Add role")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formRole.roleName,expression:"formRole.roleName"}],attrs:{type:"text"},domProps:{value:e.formRole.roleName},on:{input:function(t){t.target.composing||e.$set(e.formRole,"roleName",t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Confirm")])])])},L=[],N=r("bc3a"),S=r.n(N),k={data:function(){return{formRole:{roleName:""}}},methods:{onSubmit:function(){S.a.post("http://localhost:8080/api/roles",this.formRole).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}}},C=k,A=(r("169b"),Object(u["a"])(C,I,L,!1,null,null,null)),T=A.exports,D={components:{RoleList:P,RoleComponent:x,AddRoleForm:T},data:function(){return{roles:[]}},methods:{removeRole:function(e){var t={method:"DELETE"};fetch("http://localhost:8080/api/roles/"+e,t),this.roles=this.roles.filter((function(t){return t.roleId!==e}))},updateRole:function(e){fetch("http://localhost:8080/api/roles/"+e),Ue.push("/api/roles/"+e)}},mounted:function(){var e=this;fetch("http://localhost:8080/api/roles").then((function(e){return e.json()})).then((function(t){e.roles=t}))}},F=D,M=Object(u["a"])(F,h,b,!1,null,null,null),H=M.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("USERS")]),r("AddUserForm",{on:{"add-user-to-page":e.addUserToPage}}),r("hr"),r("UserList",{attrs:{userList:e.users},on:{"remove-user":e.removeUser}})],1)},J=[],W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",e._l(e.userList,(function(t){return r("UserComponent",{attrs:{user:t},on:{"remove-user":e.removeUser}})})),1)])},G=[],z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",[e._v(" "+e._s(e.user.userId)+" "+e._s(e.user.userRole.roleName)+" "+e._s(e.user.name)+" "+e._s(e.user.username)+" ")]),r("button",{staticClass:"remove-button",on:{click:function(t){return e.$emit("remove-user",e.user.userId)}}},[e._v("×")])])},B=[],K={props:{user:{type:Object,required:!0}}},Q=K,V=(r("6fbc"),Object(u["a"])(Q,z,B,!1,null,null,null)),X=V.exports,Y={props:["userList"],components:{UserComponent:X},methods:{removeUser:function(e){this.$emit("remove-user",e)}}},Z=Y,ee=Object(u["a"])(Z,W,G,!1,null,null,null),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("hr"),r("h3",[e._v("Add user")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.userRole.roleId,expression:"formUser.userRole.roleId"}],attrs:{type:"number",name:"roleId",id:"roleId",placeholder:"User role id"},domProps:{value:e.formUser.userRole.roleId},on:{input:function(t){t.target.composing||e.$set(e.formUser.userRole,"roleId",t.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.name,expression:"formUser.name"}],attrs:{type:"text",placeholder:"User name"},domProps:{value:e.formUser.name},on:{input:function(t){t.target.composing||e.$set(e.formUser,"name",t.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.username,expression:"formUser.username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.formUser.username},on:{input:function(t){t.target.composing||e.$set(e.formUser,"username",t.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.password,expression:"formUser.password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.formUser.password},on:{input:function(t){t.target.composing||e.$set(e.formUser,"password",t.target.value)}}}),r("br"),r("button",{attrs:{type:"submit"}},[e._v("Confirm")])])])},oe=[],ne={data:function(){return{formUser:{userRole:{roleId:""},name:"",username:"",password:""}}},methods:{onSubmit:function(){S.a.post("http://localhost:8080/api/users",this.formUser).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),this.$emit("add-user-to-page",this.formUser)}}},se=ne,ue=(r("6d92"),Object(u["a"])(se,re,oe,!1,null,null,null)),le=ue.exports,ae={components:{UserList:te,UserComponent:X,AddUserForm:le},data:function(){return{users:[]}},methods:{removeUser:function(e){var t={method:"DELETE"};fetch("http://localhost:8080/api/users/"+e,t),this.users=this.users.filter((function(t){return t.userId!==e}))},addUserToPage:function(e){this.users.push(e)}},mounted:function(){var e=this;fetch("http://localhost:8080/api/users").then((function(e){return e.json()})).then((function(t){e.users=t}))}},ie=ae,ce=Object(u["a"])(ie,q,J,!1,null,null,null),me=ce.exports,pe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},fe=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("UPDATE ROLE")])])}],de={},ve=Object(u["a"])(de,pe,fe,!1,null,null,null),he=ve.exports;o["a"].use(c["a"]);var be=[{path:"/",name:"Home",component:v},{path:"/roles",name:"Roles",component:H},{path:"/users",name:"Users",component:me},{path:"/roles/{id}",name:"UpdateRoleForm",component:he}],_e=new c["a"]({mode:"history",base:"/",routes:be}),Ue=_e;o["a"].config.productionTip=!1,new o["a"]({router:Ue,render:function(e){return e(i)}}).$mount("#app")},"5c86":function(e,t,r){},"6d92":function(e,t,r){"use strict";r("5c86")},"6fbc":function(e,t,r){"use strict";r("c806")},"85ec":function(e,t,r){},c806:function(e,t,r){},d368:function(e,t,r){}});
//# sourceMappingURL=app.836fbab0.js.map