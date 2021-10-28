(function(e){function t(t){for(var o,s,l=t[0],u=t[1],m=t[2],c=0,p=[];c<l.length;c++)s=l[c],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);i&&i(t);while(p.length)p.shift()();return a.push.apply(a,m||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,l=1;l<r.length;l++){var u=r[l];0!==n[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var o={},n={app:0},a=[];function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var i=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"12f2":function(e,t,r){"use strict";r("2079")},"169b":function(e,t,r){"use strict";r("2b49")},2079:function(e,t,r){},"23eb":function(e,t,r){"use strict";r("d368")},"2b49":function(e,t,r){},"444e":function(e,t,r){"use strict";r("e093")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),r("router-view")],1)},a=[],s=(r("034f"),r("2877")),l={},u=Object(s["a"])(l,n,a,!1,null,null,null),m=u.exports,i=r("8c4f"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("HOMEPAGE")]),r("hr"),r("router-link",{attrs:{to:"/roles"}},[e._v("Work with roles")]),r("hr"),r("router-link",{attrs:{to:"/users"}},[e._v("Work with users")]),r("hr"),r("router-link",{attrs:{to:"/players"}},[e._v("Work with players")]),r("hr"),r("router-link",{attrs:{to:"/teams"}},[e._v("Work with teams")]),r("hr"),r("router-link",{attrs:{to:"/teamplayers"}},[e._v("Work with teamplayers")])],1)},p=[],f={},d=Object(s["a"])(f,c,p,!1,null,null,null),h=d.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("ROLES")]),r("AddRoleForm"),r("hr"),r("RoleList",{attrs:{rolesList:e.roles},on:{"remove-role":e.removeRole}})],1)},y=[],b=(r("d3b7"),r("4de4"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",e._l(e.rolesList,(function(t){return r("RoleComponent",{attrs:{role:t},on:{"remove-role":e.removeRole}})})),1)])}),_=[],g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",[e._v(" "+e._s(e.role.roleId)+" "+e._s(e.role.roleName)+" ")]),r("button",{staticClass:"remove-button",on:{click:function(t){return e.$emit("remove-role",e.role.roleId)}}},[e._v("×")])])},T=[],P={props:{role:{type:Object,required:!0}}},$=P,E=(r("23eb"),Object(s["a"])($,g,T,!1,null,null,null)),x=E.exports,j={props:["rolesList"],components:{RoleComponent:x},methods:{removeRole:function(e){this.$emit("remove-role",e)}}},O=j,U=Object(s["a"])(O,b,_,!1,null,null,null),I=U.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("hr"),r("h3",[e._v("Add role")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formRole.roleName,expression:"formRole.roleName"}],attrs:{type:"text"},domProps:{value:e.formRole.roleName},on:{input:function(t){t.target.composing||e.$set(e.formRole,"roleName",t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Confirm")])])])},L=[],N=r("bc3a"),R=r.n(N),C={data:function(){return{formRole:{roleName:""}}},methods:{onSubmit:function(){R.a.post("http://localhost:8080/api/roles",this.formRole).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}}},S=C,A=(r("169b"),Object(s["a"])(S,w,L,!1,null,null,null)),k=A.exports,D={components:{RoleList:I,RoleComponent:x,AddRoleForm:k},data:function(){return{roles:[]}},methods:{removeRole:function(e){var t={method:"DELETE"};fetch("http://localhost:8080/api/roles/"+e,t),this.roles=this.roles.filter((function(t){return t.roleId!==e}))}},mounted:function(){var e=this;fetch("http://localhost:8080/api/roles").then((function(e){return e.json()})).then((function(t){e.roles=t}))}},F=D,M=Object(s["a"])(F,v,y,!1,null,null,null),q=M.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("USERS")]),r("AddUserForm",{on:{"add-user-to-page":e.addUserToPage}}),r("hr"),r("UserList",{attrs:{userList:e.users},on:{"remove-user":e.removeUser}})],1)},H=[],J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",e._l(e.userList,(function(t){return r("UserComponent",{attrs:{user:t},on:{"remove-user":e.removeUser}})})),1)])},Y=[],G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",[e._v(" "+e._s(e.user.userId)+" "+e._s(e.user.userRole.roleName)+" "+e._s(e.user.name)+" "+e._s(e.user.username)+" ")]),r("button",{staticClass:"remove-button",on:{click:function(t){return e.$emit("remove-user",e.user.userId)}}},[e._v("×")])])},z=[],B={props:{user:{type:Object,required:!0}}},K=B,Q=(r("6fbc"),Object(s["a"])(K,G,z,!1,null,null,null)),V=Q.exports,X={props:["userList"],components:{UserComponent:V},methods:{removeUser:function(e){this.$emit("remove-user",e)}}},Z=X,ee=Object(s["a"])(Z,J,Y,!1,null,null,null),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("hr"),r("h3",[e._v("Add user")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.userRole.roleId,expression:"formUser.userRole.roleId"}],attrs:{type:"number",name:"roleId",id:"roleId",placeholder:"User role id"},domProps:{value:e.formUser.userRole.roleId},on:{input:function(t){t.target.composing||e.$set(e.formUser.userRole,"roleId",t.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.name,expression:"formUser.name"}],attrs:{type:"text",placeholder:"User name"},domProps:{value:e.formUser.name},on:{input:function(t){t.target.composing||e.$set(e.formUser,"name",t.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.username,expression:"formUser.username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.formUser.username},on:{input:function(t){t.target.composing||e.$set(e.formUser,"username",t.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.password,expression:"formUser.password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.formUser.password},on:{input:function(t){t.target.composing||e.$set(e.formUser,"password",t.target.value)}}}),r("br"),r("button",{attrs:{type:"submit"}},[e._v("Confirm")])])])},oe=[],ne={data:function(){return{formUser:{userRole:{roleId:""},name:"",username:"",password:""}}},methods:{onSubmit:function(){R.a.post("http://localhost:8080/api/users",this.formUser).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),this.$emit("add-user-to-page",this.formUser)}}},ae=ne,se=(r("6d92"),Object(s["a"])(ae,re,oe,!1,null,null,null)),le=se.exports,ue={components:{UserList:te,UserComponent:V,AddUserForm:le},data:function(){return{users:[]}},methods:{removeUser:function(e){var t={method:"DELETE"};fetch("http://localhost:8080/api/users/"+e,t),this.users=this.users.filter((function(t){return t.userId!==e}))},addUserToPage:function(e){this.users.push(e)}},mounted:function(){var e=this;fetch("http://localhost:8080/api/users").then((function(e){return e.json()})).then((function(t){e.users=t}))}},me=ue,ie=Object(s["a"])(me,W,H,!1,null,null,null),ce=ie.exports,pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("PLAYERS")]),r("AddPlayerForm",{on:{"add-player-to-page":e.addPlayerToPage}}),r("hr"),r("PlayerList",{attrs:{playersList:e.players},on:{"remove-player":e.removePlayer}})],1)},fe=[],de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",[e._v(" "+e._s(e.player.id)+" "+e._s(e.player.playerName)+" "+e._s(e.player.user.userId)+" ")]),r("button",{staticClass:"remove-button",on:{click:function(t){return e.$emit("remove-player",e.player.id)}}},[e._v("×")])])},he=[],ve={props:{player:{type:Object,required:!0}}},ye=ve,be=(r("b56a"),Object(s["a"])(ye,de,he,!1,null,null,null)),_e=be.exports,ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",e._l(e.playersList,(function(t){return r("PlayerComponent",{attrs:{player:t},on:{"remove-player":e.removePlayer}})})),1)])},Te=[],Pe={props:["playersList"],components:{PlayerComponent:_e},methods:{removePlayer:function(e){this.$emit("remove-player",e)}}},$e=Pe,Ee=Object(s["a"])($e,ge,Te,!1,null,null,null),xe=Ee.exports,je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("hr"),r("h3",[e._v("Add player")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formPlayer.playerName,expression:"formPlayer.playerName"}],attrs:{type:"text",placeholder:"Player name"},domProps:{value:e.formPlayer.playerName},on:{input:function(t){t.target.composing||e.$set(e.formPlayer,"playerName",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formPlayer.user.userId,expression:"formPlayer.user.userId"}],attrs:{type:"number",placeholder:"User id"},domProps:{value:e.formPlayer.user.userId},on:{input:function(t){t.target.composing||e.$set(e.formPlayer.user,"userId",t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Confirm")])])])},Oe=[],Ue={data:function(){return{formPlayer:{playerName:"",user:{userId:""}}}},methods:{onSubmit:function(){R.a.post("http://localhost:8080/api/players",this.formPlayer).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),this.$emit("add-player-to-page",this.formPlayer)}}},Ie=Ue,we=(r("444e"),Object(s["a"])(Ie,je,Oe,!1,null,null,null)),Le=we.exports,Ne={components:{PlayerList:xe,PlayerComponent:_e,AddPlayerForm:Le},data:function(){return{players:[]}},methods:{removePlayer:function(e){var t={method:"DELETE"};fetch("http://localhost:8080/api/players/"+e,t),this.players=this.players.filter((function(t){return t.id!==e}))},addPlayerToPage:function(e){this.players.push(e)}},mounted:function(){var e=this;fetch("http://localhost:8080/api/players").then((function(e){return e.json()})).then((function(t){e.players=t}))}},Re=Ne,Ce=Object(s["a"])(Re,pe,fe,!1,null,null,null),Se=Ce.exports,Ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("TEAMS")]),r("AddTeamForm",{on:{"add-team-to-page":e.addTeamToPage}}),r("hr"),r("TeamList",{attrs:{teamsList:e.teams},on:{"remove-team":e.removeTeam}})],1)},ke=[],De=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",[e._v(" "+e._s(e.team.teamId)+" "+e._s(e.team.teamName)+" "+e._s(e.team.user.userId)+" ")]),r("button",{staticClass:"remove-button",on:{click:function(t){return e.$emit("remove-team",e.team.teamId)}}},[e._v("×")])])},Fe=[],Me={props:{team:{type:Object,required:!0}}},qe=Me,We=(r("a998"),Object(s["a"])(qe,De,Fe,!1,null,null,null)),He=We.exports,Je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",e._l(e.teamsList,(function(t){return r("TeamComponent",{attrs:{team:t},on:{"remove-team":e.removeTeam}})})),1)])},Ye=[],Ge={props:["teamsList"],components:{TeamComponent:He},methods:{removeTeam:function(e){this.$emit("remove-team",e)}}},ze=Ge,Be=Object(s["a"])(ze,Je,Ye,!1,null,null,null),Ke=Be.exports,Qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("hr"),r("h3",[e._v("Add team")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formTeam.teamName,expression:"formTeam.teamName"}],attrs:{type:"text",placeholder:"Team name"},domProps:{value:e.formTeam.teamName},on:{input:function(t){t.target.composing||e.$set(e.formTeam,"teamName",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formTeam.user.userId,expression:"formTeam.user.userId"}],attrs:{type:"number",placeholder:"User id"},domProps:{value:e.formTeam.user.userId},on:{input:function(t){t.target.composing||e.$set(e.formTeam.user,"userId",t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Confirm")])])])},Ve=[],Xe={data:function(){return{formTeam:{teamName:"",user:{userId:""}}}},methods:{onSubmit:function(){R.a.post("http://localhost:8080/api/teams",this.formTeam).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),this.$emit("add-team-to-page",this.formTeam)}}},Ze=Xe,et=(r("c4a8"),Object(s["a"])(Ze,Qe,Ve,!1,null,null,null)),tt=et.exports,rt={components:{TeamList:Ke,TeamComponent:He,AddTeamForm:tt},data:function(){return{teams:[]}},methods:{removeTeam:function(e){var t={method:"DELETE"};fetch("http://localhost:8080/api/teams/"+e,t),this.teams=this.teams.filter((function(t){return t.teamId!==e}))},addTeamToPage:function(e){this.teams.push(e)}},mounted:function(){var e=this;fetch("http://localhost:8080/api/teams").then((function(e){return e.json()})).then((function(t){e.teams=t}))}},ot=rt,nt=Object(s["a"])(ot,Ae,ke,!1,null,null,null),at=nt.exports,st=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("TEAMPLAYERS")]),r("AddPlayerForm",{on:{"add-teamplayer-to-page":e.addTeamplayerToPage}}),r("hr"),r("PlayerList",{attrs:{teamplayersList:e.teamplayers},on:{"remove-teamplayer":e.removeTeamplayer}})],1)},lt=[],ut=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",[e._v(" "+e._s(e.teamplayer.teamPlayerId)+" "+e._s(e.teamplayer.team.teamId)+" "+e._s(e.teamplayer.player.id)+" ")]),r("button",{staticClass:"remove-button",on:{click:function(t){return e.$emit("remove-teamplayer",e.teamplayer.teamPlayerId)}}},[e._v("×")])])},mt=[],it={props:{teamplayer:{type:Object,required:!0}}},ct=it,pt=(r("12f2"),Object(s["a"])(ct,ut,mt,!1,null,null,null)),ft=pt.exports,dt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",e._l(e.teamplayersList,(function(t){return r("TeamplayerComponent",{attrs:{teamplayer:t},on:{"remove-teamplayer":e.removeTeamplayer}})})),1)])},ht=[],vt={props:["teamplayersList"],components:{TeamplayerComponent:ft},methods:{removeTeamplayer:function(e){this.$emit("remove-teamplayer",e)}}},yt=vt,bt=Object(s["a"])(yt,dt,ht,!1,null,null,null),_t=bt.exports,gt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("hr"),r("h3",[e._v("Add teamplayer")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formTeamplayer.team.teamId,expression:"formTeamplayer.team.teamId"}],attrs:{type:"number",placeholder:"Team id"},domProps:{value:e.formTeamplayer.team.teamId},on:{input:function(t){t.target.composing||e.$set(e.formTeamplayer.team,"teamId",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formTeamplayer.player.id,expression:"formTeamplayer.player.id"}],attrs:{type:"number",placeholder:"Player id"},domProps:{value:e.formTeamplayer.player.id},on:{input:function(t){t.target.composing||e.$set(e.formTeamplayer.player,"id",t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Confirm")])])])},Tt=[],Pt={data:function(){return{formTeamplayer:{team:{teamId:""},player:{id:""}}}},methods:{onSubmit:function(){R.a.post("http://localhost:8080/api/teamplayers",this.formTeamplayer).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),this.$emit("add-teamplayer-to-page",this.formTeamplayer)}}},$t=Pt,Et=(r("5b14"),Object(s["a"])($t,gt,Tt,!1,null,null,null)),xt=Et.exports,jt={components:{TeamplayerList:_t,TeamplayerComponent:ft,AddTeamplayerForm:xt},data:function(){return{teamplayers:[]}},methods:{removeTeamplayer:function(e){var t={method:"DELETE"};fetch("http://localhost:8080/api/teamplayers/"+e,t),this.teamplayers=this.teamplayers.filter((function(t){return t.teamPlayerId!==e}))},addTeamplayerToPage:function(e){this.players.push(e)}},mounted:function(){var e=this;fetch("http://localhost:8080/api/teamplayers").then((function(e){return e.json()})).then((function(t){e.teamplayers=t}))}},Ot=jt,Ut=Object(s["a"])(Ot,st,lt,!1,null,null,null),It=Ut.exports;o["a"].use(i["a"]);var wt=[{path:"/",name:"Home",component:h},{path:"/roles",name:"Roles",component:q},{path:"/users",name:"Users",component:ce},{path:"/players",name:"Players",component:Se},{path:"/teams",name:"Teams",component:at},{path:"/teamplayers",name:"Teamplayers",component:It}],Lt=new i["a"]({mode:"history",base:"/",routes:wt}),Nt=Lt;o["a"].config.productionTip=!1,new o["a"]({router:Nt,render:function(e){return e(m)}}).$mount("#app")},"5b14":function(e,t,r){"use strict";r("d15e")},"5c86":function(e,t,r){},"6d92":function(e,t,r){"use strict";r("5c86")},"6fbc":function(e,t,r){"use strict";r("c806")},"7a7d":function(e,t,r){},"85ec":function(e,t,r){},"9b12":function(e,t,r){},a998:function(e,t,r){"use strict";r("9b12")},abb5:function(e,t,r){},b56a:function(e,t,r){"use strict";r("abb5")},c4a8:function(e,t,r){"use strict";r("7a7d")},c806:function(e,t,r){},d15e:function(e,t,r){},d368:function(e,t,r){},e093:function(e,t,r){}});
//# sourceMappingURL=app.21a4b734.js.map