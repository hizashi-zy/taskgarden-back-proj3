(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){},105:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(25),c=a.n(r),s=(a(103),a(9)),o=a(96),i=a(10),l=a.n(i),j=a(14),u=a(12),d=(a(105),a(106),a(34)),b=a(15),h=a(13),p=a.n(h),O=a(21);function x(e){return{type:"GET_TASKS",payload:e}}function m(e){return{type:"SET_DAILIES",payload:e}}function g(e){return{type:"UPDATE_COINS",payload:e}}var f=a(185),k=a(93),y=a(186),v=a(184),C=a.p+"static/media/nP5HPw4.4d2f2cb7.jpeg",w=a(18),S=a(189),U=a(190),I=a(1);var N=function(e){var t=e.setAuth,a=e.setAdmin,r=e.show,c=e.setShow,o=Object(n.useState)({}),i=Object(u.a)(o,2),d=i[0],h=i[1],O=Object(b.g)();function x(){return(x=Object(j.a)(l.a.mark((function e(){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/api/login",d);case 3:n=e.sent,r=n.data,localStorage.setItem("token",r.token),r.user.isAdmin&&a(!0),t(!0),c(!1),O.push("/dashboard"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function m(e){h((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(w.a)({},e.target.name,e.target.value))}))}return Object(I.jsxs)(S.a,{className:"",show:r,onHide:function(){return c(!1)},centered:!0,children:[Object(I.jsx)(S.a.Header,{closeButton:!0,children:Object(I.jsx)(S.a.Title,{children:"Log In"})}),Object(I.jsx)(S.a.Body,{children:Object(I.jsxs)(U.a,{children:[Object(I.jsxs)(U.a.Group,{controlId:"formBasicEmail",children:[Object(I.jsx)(U.a.Label,{children:"Email address"}),Object(I.jsx)(U.a.Control,{name:"email",type:"email",placeholder:"Enter email",onChange:m})]}),Object(I.jsxs)(U.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(I.jsx)(U.a.Label,{children:"Password"}),Object(I.jsx)(U.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:m})]}),Object(I.jsx)(v.a,{variant:"primary",onClick:function(){return x.apply(this,arguments)},block:!0,children:"Log In"})]})})]})};var T=function(e){var t=e.show,a=e.setShow,r=e.setAuth,c=Object(n.useState)({}),o=Object(u.a)(c,2),i=o[0],d=o[1],h=Object(b.g)();function O(){return(O=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/api/register",i);case 3:t=e.sent,n=t.data.token,localStorage.setItem("token",n),r(!0),a(!1),h.push("/dashboard"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function x(e){d((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(w.a)({},e.target.name,e.target.value))}))}return Object(I.jsxs)(S.a,{show:t,onHide:function(){return a(!1)},centered:!0,children:[Object(I.jsx)(S.a.Header,{closeButton:!0,children:Object(I.jsx)(S.a.Title,{children:"Register"})}),Object(I.jsx)(S.a.Body,{children:Object(I.jsxs)(U.a,{children:[Object(I.jsxs)(U.a.Group,{controlId:"formBasicEmail",children:[Object(I.jsx)(U.a.Label,{children:"Email address"}),Object(I.jsx)(U.a.Control,{name:"email",type:"email",placeholder:"Enter email",onChange:x})]}),Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Username"}),Object(I.jsx)(U.a.Control,{name:"username",type:"text",placeholder:"Enter Username",onChange:x})]}),Object(I.jsxs)(U.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(I.jsx)(U.a.Label,{children:"Password"}),Object(I.jsx)(U.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:x})]}),Object(I.jsxs)(U.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(I.jsx)(U.a.Label,{children:"Confirm Password"}),Object(I.jsx)(U.a.Control,{name:"passwordConfirmation",type:"password",placeholder:"Password",onChange:x})]}),Object(I.jsx)(v.a,{variant:"primary",onClick:function(){return O.apply(this,arguments)},children:"Register"})]})})]})};var B=function(e){e.auth;var t=e.setAuth,a=e.setAdmin,r=(e.setUser,Object(n.useState)(!1)),c=Object(u.a)(r,2),s=c[0],o=c[1],i=Object(n.useState)(!1),l=Object(u.a)(i,2),j=l[0],d=l[1];return Object(I.jsxs)(f.a,{className:"flex-grow-1",children:[Object(I.jsx)(k.a,{xs:12,md:7,className:"bg-dark align-content-center",children:Object(I.jsxs)(f.a,{children:[Object(I.jsx)(f.a,{className:"text-center",children:Object(I.jsx)(k.a,{className:"text-white h1",children:"Task Garden"})}),Object(I.jsx)(f.a,{children:Object(I.jsx)(k.a,{children:Object(I.jsx)(y.a,{src:C,fluid:!0,id:"landingForest"})})})]})}),Object(I.jsx)(k.a,{xs:5,children:Object(I.jsxs)(k.a,{children:[Object(I.jsx)(f.a,{children:Object(I.jsxs)(k.a,{children:[Object(I.jsx)(f.a,{className:"justify-content-center",children:"Have an Account? Sign in!"}),Object(I.jsx)(f.a,{className:"justify-content-center",children:Object(I.jsx)(v.a,{variant:"primary",className:"landingButton",onClick:function(){return o(!0)},children:"Sign in"})})]})}),Object(I.jsx)(f.a,{children:Object(I.jsxs)(k.a,{children:[Object(I.jsx)(f.a,{className:"justify-content-center",children:"If not, register here!"}),Object(I.jsx)(f.a,{className:"justify-content-center",children:Object(I.jsx)(v.a,{variant:"primary",className:"landingButton",onClick:function(){return d(!0)},children:"Register"})})]})})]})}),Object(I.jsx)(N,{show:s,setShow:o,setAuth:t,setAdmin:a}),Object(I.jsx)(T,{show:j,setShow:d,setAuth:t})]})},D=a(193),L=a(191),E=a.p+"static/media/pixel-art-bitcoin-gold-coin.a640bf77.png";var A=function(e){var t=e.admin,a=e.logout,n=e.user,r=e.coins;return Object(I.jsxs)(D.a,{expand:"lg",id:"navbar",className:"p-0",style:{backgroundColor:"rgba(81, 163, 136, 1)"},children:[Object(I.jsx)(D.a.Brand,{id:"navbarBrand",style:{backgroundColor:"rgba(196, 196, 196, 0.3)"},children:Object(I.jsx)(d.b,{to:"/",style:{fontSize:"2.5rem",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},className:"py-0 px-5 nav-link text-white",children:"Task Garden"})}),Object(I.jsx)(D.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:"ml-5"}),Object(I.jsx)(D.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end",children:Object(I.jsxs)(L.a,{className:"mx-4 align-items-center",style:{textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},children:[!t&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(L.a.Item,{className:"nav-link text-white",children:[Object(I.jsx)(y.a,{style:{width:"25px",height:"25px"},src:E,className:"mr-1"}),n?r:0]}),Object(I.jsx)(d.b,{to:"/dashboard",className:"nav-link text-white",children:"Dashboard"}),Object(I.jsx)(d.b,{to:"/garden",className:"nav-link text-white",children:"Garden"}),Object(I.jsx)(d.b,{to:"/florist",className:"nav-link text-white",children:"Florist"})]}),Object(I.jsx)(v.a,{style:{backgroundColor:"rgba(58, 70, 93, 1)",color:"white",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:"5px",border:"none"},onClick:a,children:"Logout"})]})})]})},G=a(187),_=a(47),F=a.n(_);a(131);var P=function(e){var t=e.addTaskShow,a=e.setAddTaskShow,r=e.getTasks,c=Object(n.useState)({dateBy:new Date}),o=Object(u.a)(c,2),i=o[0],d=o[1],b=Object(n.useState)(new Date),h=Object(u.a)(b,2),O=h[0],x=h[1],m=Object(n.useState)(new Date),g=Object(u.a)(m,2),y=g[0],C=g[1],N=Object(n.useState)({IU:"none",IN:"none",UU:"none",UN:"none"}),T=Object(u.a)(N,2),B=T[0],D=T[1];function L(){a(!1),D({IU:"none",IN:"none",UU:"none",UN:"none"})}function E(e){d((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(w.a)({},e.target.name,e.target.value))}))}function A(e,t){"none"===B[e.target.attributes.name.value]?(D({IU:"none",IN:"none",UU:"none",UN:"none"}),D((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(w.a)({},e.target.attributes.name.value,"3px solid yellow"))})),d((function(e){return Object(s.a)(Object(s.a)({},e),{},{isImportant:t.isImportant,isUrgent:t.isUrgent})}))):(D((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(w.a)({},e.target.attributes.name.value,"none"))})),d((function(e){return Object(s.a)(Object(s.a)({},e),{},{isImportant:!1,isUrgent:!1})})))}function _(){return(_=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/api/tasks/create",Object(s.a)(Object(s.a)({},i),{},{dateStart:O,dateBy:y}),{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 3:L(),r(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:d((function(e){return Object(s.a)(Object(s.a)({},e),{},{isImportant:!1,isUrgent:!1})}));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(I.jsxs)(S.a,{show:t,onHide:L,children:[Object(I.jsx)(S.a.Header,{closeButton:!0,children:Object(I.jsx)(S.a.Title,{children:"Add New Task"})}),Object(I.jsx)(S.a.Body,{children:Object(I.jsxs)(U.a,{children:[Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Task Title"}),Object(I.jsx)(U.a.Control,{name:"name",type:"text",placeholder:"Task Title",onChange:E})]}),Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Category"}),Object(I.jsx)(U.a.Control,{name:"category",type:"text",placeholder:"Category",onChange:E})]}),Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Start Date"}),Object(I.jsx)(F.a,{selected:O,onChange:function(e){return x(e)},selectsStart:!0,startDate:O,endDate:y,showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,timeCaption:"Time",dateFormat:"d MMM yyyy, h:mm aa"}),Object(I.jsx)("br",{}),Object(I.jsx)(U.a.Label,{children:"Completed By"}),Object(I.jsx)(F.a,{selected:y,onChange:function(e){return C(e)},selectsEnd:!0,startDate:O,endDate:y,minDate:O,showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,timeCaption:"Time",dateFormat:"d MMM yyyy, h:mm aa"})]}),Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Description"}),Object(I.jsx)(U.a.Control,{name:"description",as:"textarea",rows:3,placeholder:"Enter a description",onChange:E})]}),Object(I.jsxs)(U.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(I.jsx)(U.a.Label,{children:"Select Plant"}),Object(I.jsxs)(U.a.Control,{as:"select",onChange:E,children:[Object(I.jsx)("option",{children:"1"}),Object(I.jsx)("option",{children:"2"}),Object(I.jsx)("option",{children:"3"}),Object(I.jsx)("option",{children:"4"})]})]}),Object(I.jsxs)(G.a,{children:[Object(I.jsxs)(f.a,{children:[Object(I.jsx)(k.a,{style:{backgroundColor:"rgba(231, 85, 85,1)",border:"".concat(B.IU)},name:"IU",onClick:function(e){return A(e,{isImportant:!0,isUrgent:!0})},children:"Important Urgent"}),Object(I.jsx)(k.a,{style:{backgroundColor:"rgba(224, 159, 159)",border:"".concat(B.IN)},name:"IN",onClick:function(e){return A(e,{isImportant:!0,isUrgent:!1})},children:"Important Not-Urgent"})]}),Object(I.jsxs)(f.a,{children:[Object(I.jsx)(k.a,{style:{backgroundColor:"rgba(241, 181, 121,1)",border:"".concat(B.UU)},name:"UU",onClick:function(e){return A(e,{isImportant:!1,isUrgent:!0})},children:"Unimportant Urgent"}),Object(I.jsx)(k.a,{style:{backgroundColor:"rgba(54, 150, 148,1)",border:"".concat(B.UN)},name:"UN",onClick:function(e){return A(e,{isImportant:!1,isUrgent:!1})},children:"Unimportant Not-Urgent"})]})]}),Object(I.jsx)("br",{}),Object(I.jsx)(v.a,{variant:"primary",onClick:function(){return _.apply(this,arguments)},children:"Submit"})]})})]})};function H(){return z.apply(this,arguments)}function z(){return(z=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/check",{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0.response),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function R(){return(R=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/user",{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{message:"Failed to get user"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var M=a(192);var K=function(e){var t=e.task,a=e.handleEditTask,r=Object(n.useState)(!0),c=Object(u.a)(r,2),s=c[0],o=c[1],i=Object(n.useState)(!1),d=Object(u.a)(i,2),b=d[0],h=d[1],x=Object(O.b)();function m(){return(m=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("/api/tasks/delete/".concat(t._id),{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/tasks/done/".concat(t._id),{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 3:"Completed"===e.sent.data.payload?h(!0):h(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){"Completed"===t.status?h(!0):h(!1),console.log(t)}),[]),Object(I.jsx)(M.a,{show:s,onClose:function(e){e.stopPropagation(),function(){o(!1),x((e=t._id,{type:"DELETE_TASK",payload:e}));var e}(),function(){m.apply(this,arguments)}()},children:Object(I.jsxs)(M.a.Header,{children:[Object(I.jsx)("strong",{style:b?{textDecoration:"line-through"}:{textDecoration:"none"},onClick:function(e){return a(e,t)},className:"mr-auto",children:t.name}),Object(I.jsx)(U.a.Check,{type:"checkbox",onChange:function(e){!function(){g.apply(this,arguments)}(),e.stopPropagation()},checked:b})]})})},J=a(188);var Y=function(e){var t=e.clickedTask,a=e.setClickedTask,r=e.editTaskShow,c=e.setEditTaskShow,o=e.getTasks,i=Object(n.useState)(),d=Object(u.a)(i,2),b=d[0],h=d[1],O=Object(n.useState)(),x=Object(u.a)(O,2),m=x[0],g=x[1],y=Object(n.useState)({IU:"none",IN:"none",UU:"none",UN:"none"}),C=Object(u.a)(y,2),N=C[0],T=C[1];function B(){c(!1)}function D(e){a((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(w.a)({},e.target.name,e.target.value))}))}function L(e,t){"none"===N[e.target.attributes.name.value]?(T({IU:"none",IN:"none",UU:"none",UN:"none"}),T((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(w.a)({},e.target.attributes.name.value,"3px solid yellow"))})),a((function(e){return Object(s.a)(Object(s.a)({},e),{},{isImportant:t.isImportant,isUrgent:t.isUrgent})}))):(T((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(w.a)({},e.target.attributes.name.value,"none"))})),a((function(e){return Object(s.a)(Object(s.a)({},e),{},{isImportant:!1,isUrgent:!1})})))}function E(){return(E=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/api/tasks/edit/".concat(t._id),Object(s.a)(Object(s.a)({},t),{},{dateStart:b,dateBy:m}),{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 3:B(),o(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(t.dateStart&&t.dateBy&&(h(Object(J.a)(t.dateStart)),g(Object(J.a)(t.dateBy))),t){T({IU:"none",IN:"none",UU:"none",UN:"none"});var e="";t.isImportant?e+="I":e+="U",t.isUrgent?e+="U":e+="N",T((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(w.a)({},e,"3px solid yellow"))}))}}),[r]),Object(I.jsx)(I.Fragment,{children:t&&Object(I.jsxs)(S.a,{show:r,onHide:B,children:[Object(I.jsx)(S.a.Header,{closeButton:!0,children:Object(I.jsx)(S.a.Title,{children:"Edit Task"})}),Object(I.jsx)(S.a.Body,{children:Object(I.jsxs)(U.a,{children:[Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Task Title"}),Object(I.jsx)(U.a.Control,{name:"name",type:"text",placeholder:"Task Title",value:t.name,onChange:D})]}),Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Category"}),Object(I.jsx)(U.a.Control,{name:"category",type:"text",placeholder:"Category",value:t.category,onChange:D})]}),Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Start Date"}),Object(I.jsx)(F.a,{selected:b,onChange:function(e){return h(e)},selectsStart:!0,startDate:b,endDate:m,showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,timeCaption:"Time",dateFormat:"d MMM yyyy, h:mm aa"}),Object(I.jsx)("br",{}),Object(I.jsx)(U.a.Label,{children:"Completed By"}),Object(I.jsx)(F.a,{selected:m,onChange:function(e){return g(e)},selectsEnd:!0,startDate:b,endDate:m,minDate:b,showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,timeCaption:"Time",dateFormat:"d MMM yyyy, h:mm aa"})]}),Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Description"}),Object(I.jsx)(U.a.Control,{name:"description",as:"textarea",rows:3,placeholder:"Enter a description",value:t.description,onChange:D})]}),Object(I.jsxs)(U.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(I.jsx)(U.a.Label,{children:"Select Plant"}),Object(I.jsxs)(U.a.Control,{as:"select",onChange:D,children:[Object(I.jsx)("option",{children:"1"}),Object(I.jsx)("option",{children:"2"}),Object(I.jsx)("option",{children:"3"}),Object(I.jsx)("option",{children:"4"})]})]}),Object(I.jsxs)(G.a,{children:[Object(I.jsxs)(f.a,{children:[Object(I.jsx)(k.a,{style:{backgroundColor:"rgba(231, 85, 85,1)",border:"".concat(N.IU)},name:"IU",onClick:function(e){return L(e,{isImportant:!0,isUrgent:!0})},children:"Important Urgent"}),Object(I.jsx)(k.a,{style:{backgroundColor:"rgba(224, 159, 159)",border:"".concat(N.IN)},name:"IN",onClick:function(e){return L(e,{isImportant:!0,isUrgent:!1})},children:"Important Not-Urgent"})]}),Object(I.jsxs)(f.a,{children:[Object(I.jsx)(k.a,{style:{backgroundColor:"rgba(241, 181, 121,1)",border:"".concat(N.UU)},name:"UU",onClick:function(e){return L(e,{isImportant:!1,isUrgent:!0})},children:"Unimportant Urgent"}),Object(I.jsx)(k.a,{style:{backgroundColor:"rgba(54, 150, 148,1)",border:"".concat(N.UN)},name:"UN",onClick:function(e){return L(e,{isImportant:!1,isUrgent:!1})},children:"Unimportant Not-Urgent"})]})]}),Object(I.jsx)("br",{}),Object(I.jsx)(v.a,{variant:"primary",onClick:function(){return E.apply(this,arguments)},children:"Submit"})]})})]})})};function q(e){var t=e.tasks,a=e.isImportant,n=e.isUrgent,r=e.handleEditTask;return void 0===t?Object(I.jsx)(I.Fragment,{children:"Error unable to get Tasks..."}):t.length>=0?Object(I.jsx)(I.Fragment,{children:t.map((function(e){return e.isImportant===a&&e.isUrgent===n&&Object(I.jsx)(k.a,{lg:6,md:12,children:Object(I.jsx)(K,{task:e,handleEditTask:r})},e._id)}))}):Object(I.jsx)(I.Fragment,{})}var V=function(e){var t=e.tasks,a=e.getTasks,r=e.isImportant,c=e.isUrgent,o=e.color,i=e.title,l=e.border,j=Object(s.a)(Object(s.a)({},o),{},{height:"35vh",boxShadow:"10px 10px 4px 0 rgba(0, 0, 0, 0.25)"},l),d=Object(n.useState)(!1),b=Object(u.a)(d,2),h=b[0],p=b[1],O=Object(n.useState)({}),x=Object(u.a)(O,2),m=x[0],g=x[1];return Object(I.jsxs)(G.a,{style:j,children:[Object(I.jsxs)(f.a,{className:"mx-auto",style:{height:"15%"},children:[Object(I.jsx)(k.a,{md:5}),Object(I.jsx)(k.a,{md:2,style:{backgroundColor:"rgba(65, 90, 95, 0.25)",color:"white",borderRadius:"10px",boxShadow:"0 4px 4px 0 rgba(0, 0, 0, 0.25)"},className:"px-0 py-1 my-auto",children:i})]}),Object(I.jsx)(f.a,{className:"mt-3",children:Object(I.jsx)(q,{tasks:t,isImportant:r,isUrgent:c,handleEditTask:function(e,t){p(!0),g(t)}})}),Object(I.jsx)(Y,{editTaskShow:h,setEditTaskShow:p,clickedTask:m,setClickedTask:g,getTasks:a})]})};var Q=function(e){var t=e.tasks,a=e.getTasks,n=["Do","Decide","Delegate","Drop"],r=[{borderTopLeftRadius:"15px"},{borderTopRightRadius:"15px"},{borderBottomLeftRadius:"15px"},{borderBottomRightRadius:"15px"}],c={color:[{backgroundColor:"rgba(231, 85, 85,1)"},{backgroundColor:"rgba(224, 159, 159)"},{backgroundColor:"rgba(241, 181, 121,1)"},{backgroundColor:"rgba(54, 150, 148,1)"}]},s=[!0,!0,!1,!1],o=[!0,!1,!0,!1];return Object(I.jsxs)("div",{children:[Object(I.jsxs)(f.a,{children:[Object(I.jsx)(k.a,{md:6,className:"px-0",children:Object(I.jsx)(V,{tasks:t,getTasks:a,isImportant:s[0],isUrgent:o[0],color:c.color[0],title:n[0],border:r[0]})}),Object(I.jsx)(k.a,{md:6,className:"px-0",children:Object(I.jsx)(V,{tasks:t,getTasks:a,isImportant:s[1],isUrgent:o[1],color:c.color[1],title:n[1],border:r[1]})})]}),Object(I.jsxs)(f.a,{children:[Object(I.jsx)(k.a,{md:6,className:"px-0",children:Object(I.jsx)(V,{tasks:t,getTasks:a,isImportant:s[2],isUrgent:o[2],color:c.color[2],title:n[2],border:r[2]})}),Object(I.jsx)(k.a,{md:6,className:"px-0",children:Object(I.jsx)(V,{tasks:t,getTasks:a,isImportant:s[3],isUrgent:o[3],color:c.color[3],title:n[3],border:r[3]})})]})]})};function W(e){var t=e.changeStateOfDaily;return e.buttonState?Object(I.jsx)(v.a,{onClick:t,style:{border:"3px solid rgba(50, 136, 29, 1)",backgroundColor:"rgba(78, 201, 47, 1)",borderRadius:"10px",boxShadow:"0 4px 4px 0 rgba(0, 0, 0, 0.25)"},children:'"Done"'}):Object(I.jsx)(v.a,{onClick:t,style:{border:"3px solid rgba(68,9,9, 1)",backgroundColor:"rgb(208,30,30)",borderRadius:"10px",boxShadow:"0 4px 4px 0 rgba(0, 0, 0, 0.25)"},children:"Not Done"})}var X=function(e){var t=e.daily,a=Object(n.useState)(!1),r=Object(u.a)(a,2),c=r[0],s=r[1],o=Object(O.b)();function i(){return(i=Object(j.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/tasks/dailies/".concat(t._id),t,{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 2:a=e.sent,s(a.data.isArchived),o(g(a.data.newCoins));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){s(t.isArchived)}),[]),Object(I.jsx)(G.a,{style:{border:"5px solid rgba(35, 108, 56, 1)",backgroundColor:"white",borderRadius:"10px",boxShadow:"0 4px 4px 0 rgba(0, 0, 0, 0.25)"},className:"mt-3",children:Object(I.jsxs)(f.a,{className:"align-items-center",children:[Object(I.jsxs)(k.a,{md:9,children:["Dailies",Object(I.jsx)("br",{}),t.name]}),Object(I.jsx)(k.a,{md:3,children:Object(I.jsx)(W,{changeStateOfDaily:function(){return i.apply(this,arguments)},buttonState:c})})]})})};var Z=function(e){e.auth;var t=e.setAuth,a=Object(n.useState)(!1),r=Object(u.a)(a,2),c=r[0],s=r[1],o=Object(O.c)((function(e){return e.tasks})),i=Object(O.c)((function(e){return e.dailies})),d=Object(O.b)();function b(){return h.apply(this,arguments)}function h(){return(h=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/tasks",{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 3:t=e.sent,a=t.data,console.log(a.tasks),d(x(a.tasks)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function g(){return(g=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/tasks/dailies",{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 3:t=e.sent,a=t.data.dailies,d(m(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){H().then((function(e){return t(e)})).catch((function(e){return t(e)})),b(),function(){g.apply(this,arguments)}()}),[]),Object(I.jsxs)(I.Fragment,{children:[i?i.map((function(e,t){return Object(I.jsx)(X,{daily:e},t)})):Object(I.jsx)("div",{children:"Loading..."}),Object(I.jsx)(G.a,{className:"mr-3 my-2",style:{width:"50px",fontSize:"2rem",color:"white",backgroundColor:"rgba(58, 70, 93, 1)",borderRadius:"50%"},onClick:function(){return s(!0)},children:"+"}),Object(I.jsx)(P,{addTaskShow:c,setAddTaskShow:s,getTasks:b}),Object(I.jsx)(G.a,{children:Object(I.jsx)(Q,{tasks:o,getTasks:b})})]})},$=a(194),ee=a(195);var te=function(e){var t=[],a=Object(n.useState)([]),r=Object(u.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(""),i=Object(u.a)(o,2),d=i[0],b=i[1],h=Object(n.useState)([]),O=Object(u.a)(h,2),x=O[0],m=O[1];function g(){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/garden/inventory",{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 2:t=e.sent,a=t.data.plants,s(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/garden/",{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 2:t=e.sent,a=t.data.garden,m(a.plants);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(j.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d||x[t]){e.next=7;break}return e.next=3,p.a.post("/api/garden/inventory/".concat(d),{index:t},{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 3:a=e.sent,a.data,g(),w();case 7:b("");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){g(),w()}),[]),function(e){for(var a=0;a<e;a++)t.push({})}(9),Object(I.jsx)(G.a,{className:"my-5",children:Object(I.jsxs)(f.a,{children:[Object(I.jsx)(k.a,{md:3,children:Object(I.jsx)($.a,{defaultActiveKey:"0",children:Object(I.jsxs)(ee.a,{children:[Object(I.jsx)(ee.a.Header,{children:Object(I.jsx)($.a.Toggle,{as:v.a,variant:"primary",eventKey:"0",children:"Inventory"})}),Object(I.jsx)($.a.Collapse,{eventKey:"0",children:Object(I.jsx)(ee.a.Body,{children:c.length>0&&c.map((function(e){return Object(I.jsxs)(G.a,{className:"my-4",style:{border:"3px solid ".concat(d===e._id?"yellow":"white")},children:[Object(I.jsx)(y.a,{src:e.images[e.currentLevel-1],alt:e.name,fluid:!0,onClick:function(){return t=e._id,b(""),void(d!==t&&b(t));var t}}),e.name]},e._id)}))})})]})})}),Object(I.jsx)(k.a,{md:9,children:Object(I.jsx)(G.a,{style:{height:"70vh",backgroundColor:"green"},children:Object(I.jsx)(f.a,{style:{height:"100%"},children:t.map((function(e,t){return Object(I.jsx)(k.a,{md:4,className:"my-3",children:Object(I.jsx)(G.a,{style:{backgroundColor:"rgb(255, 255, 255, 0.3)",borderRadius:"10px",height:"100%",width:"100%"},onClick:function(){return function(e){return U.apply(this,arguments)}(t)},children:x&&x.length>0&&null!=x[t]&&Object(I.jsx)(y.a,{src:x[t].images[x[t].currentLevel-1],alt:x[t].name,fluid:!0})})})}))})})})]})})},ae=a.p+"static/media/florist HD.baab64be.jpg";var ne=function(e){e.user,e.auth;var t=e.setAuth,a=(e.admin,e.coins),r=Object(n.useState)([]),c=Object(u.a)(r,2),s=c[0],o=c[1],i=Object(n.useState)(!1),d=Object(u.a)(i,2),b=d[0],h=d[1],x=Object(O.b)();function m(){return(m=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/florist",{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 3:t=e.sent,o(t.data.payload),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function C(e){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!((n=s.find((function(e){return e._id==t.target.value}))).price>a)){e.next=4;break}return e.abrupt("return",h(!0));case 4:return e.next=6,p.a.post("/api/florist/buy",{coins:a,plant:n},{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 6:r=e.sent,x(g(r.data.newCoins)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){H().then((function(e){return t(e)})).catch((function(e){return t(e)})),function(){m.apply(this,arguments)}()}),[]),Object(I.jsx)(G.a,{children:Object(I.jsxs)(f.a,{children:[Object(I.jsx)(k.a,{md:5,children:Object(I.jsx)(y.a,{src:ae,fluid:!0})}),Object(I.jsxs)(k.a,{md:7,children:[Object(I.jsx)(f.a,{md:3,xs:1,className:"g-4",children:s.length>0&&s.map((function(e){return Object(I.jsx)(k.a,{children:Object(I.jsxs)(ee.a,{style:{width:"9rem"},bg:"warning",children:[Object(I.jsx)(ee.a.Img,{variant:"top",src:e.images[1],style:{width:"110px",height:"110px"}}),Object(I.jsxs)(ee.a.Body,{children:[Object(I.jsx)(ee.a.Title,{children:e.name}),Object(I.jsxs)(ee.a.Text,{children:[Object(I.jsx)(y.a,{style:{width:"25px",height:"25px"},src:E}),e.price]}),Object(I.jsx)(v.a,{onClick:C,value:e._id,children:"Buy"})]})]})},e._id)}))}),Object(I.jsxs)(S.a,{show:b,onHide:function(){return h(!1)},backdrop:"static",keyboard:!1,children:[Object(I.jsx)(S.a.Header,{closeButton:!0,children:Object(I.jsx)(S.a.Title,{children:"u no moneh"})}),Object(I.jsx)(S.a.Body,{children:"You have insufficient coins for this purchase. Please do more dailies."})]})]})]})})};var re=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),i=Object(u.a)(o,2),d=i[0],b=i[1],h=Object(n.useState)({}),O=Object(u.a)(h,2),x=O[0],m=O[1],g=Object(n.useState)({}),y=Object(u.a)(g,2),C=y[0],S=y[1];function N(e){m((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(w.a)({},e.target.name,e.target.value))}))}function T(){return(T=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(x),e.prev=1,e.next=4,p.a.post("/api/admin/florist/create",x,{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function B(e){S((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(w.a)({},e.target.name,e.target.value))}))}function D(){return(D=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/api/admin/dailies/create",C,{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(I.jsx)(G.a,{children:Object(I.jsxs)(f.a,{children:[Object(I.jsxs)(k.a,{md:4,children:[Object(I.jsx)("h3",{children:"Add New Plant to Florist"}),Object(I.jsxs)(U.a,{children:[Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Name"}),Object(I.jsx)(U.a.Control,{name:"name",type:"text",placeholder:"Name of Plant",onChange:N})]}),Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Price"}),Object(I.jsx)(U.a.Control,{name:"price",type:"number",placeholder:"Price",onChange:N})]}),Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Max Growth"}),Object(I.jsx)(U.a.Control,{name:"maxGrowth",type:"number",placeholder:"Max Growth",onChange:N})]}),Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Max Level"}),Object(I.jsx)(U.a.Control,{name:"maxLevel",type:"number",placeholder:"Max Level",onChange:N})]}),Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Description"}),Object(I.jsx)(U.a.Control,{name:"description",type:"text",placeholder:"Description",onChange:N})]}),Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Image"}),Object(I.jsx)(U.a.Control,{type:"file",onChange:function(e){return c(e.target.files[0])}}),Object(I.jsx)(v.a,{onClick:function(){var e=function(){var e=new FormData;return e.append("file",r),e.append("upload_preset","taskgarden"),e.append("cloud_name","seiproj3images"),e}();(function(e){e.get("file")||console.log("Please upload a file");return e.get("file")})(e)&&function(e){fetch("https://api.cloudinary.com/v1_1/seiproj3images/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){b(e.url),m((function(t){return Object(s.a)(Object(s.a)({},t),{},{images:["https://res.cloudinary.com/seiproj3images/image/upload/v1624281668/foqxjhxeuxnhefyuhctl.png",e.url]})}))})).catch((function(e){return console.log(e)}))}(e)},children:"Upload"})]}),Object(I.jsx)("div",{children:Object(I.jsx)("img",{src:d,alt:"upload"})}),Object(I.jsx)(v.a,{onClick:function(){return T.apply(this,arguments)},children:"Submit"})]})]}),Object(I.jsxs)(k.a,{md:4,children:[Object(I.jsx)("h3",{children:"Add New Dailies"}),Object(I.jsxs)(U.a,{children:[Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Name of Dailies"}),Object(I.jsx)(U.a.Control,{name:"name",type:"text",placeholder:"eg. Do 20 push-ups",onChange:B})]}),Object(I.jsxs)(U.a.Group,{children:[Object(I.jsx)(U.a.Label,{children:"Category"}),Object(I.jsx)(U.a.Control,{name:"category",type:"text",placeholder:"eg. Fitness",onChange:B})]}),Object(I.jsx)(v.a,{onClick:function(){return D.apply(this,arguments)},children:"Submit"})]})]})]})})},ce=["auth","admin","Component","path","location"];function se(e){var t=e.auth,a=e.admin,n=e.Component,r=e.path,c=e.location,i=Object(o.a)(e,ce);return Object(I.jsx)(I.Fragment,{children:t&&!a?Object(I.jsx)(b.b,{path:r,exact:!0,children:Object(I.jsx)(n,Object(s.a)({auth:t},i))}):Object(I.jsx)(b.a,{to:{pathname:"/",state:{from:c}}})})}var oe=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(u.a)(c,2),o=s[0],i=s[1],h=Object(n.useState)(null),x=Object(u.a)(h,2),m=x[0],f=x[1],k=Object(O.c)((function(e){return e.coins})),y=Object(O.b)();function v(){return(v=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!1),r(!1),f(null),e.next=6,p.a.delete("/api/logout",{headers:{authorization:"Bearer ".concat(localStorage.token)}});case 6:localStorage.removeItem("token"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){(function(){return R.apply(this,arguments)})().then((function(e){e.user?(i(e.user.isAdmin),r(!0),f(e.user),y(g(e.user.coins))):console.log(e.message)}))}),[a]),Object(I.jsx)("div",{className:"App",children:Object(I.jsxs)(d.a,{children:[a&&Object(I.jsx)(A,{user:m,admin:o,coins:k,logout:function(){return v.apply(this,arguments)}}),Object(I.jsxs)(b.d,{children:[Object(I.jsx)(b.b,{path:"/",exact:!0,children:a?o?Object(I.jsx)(re,{}):Object(I.jsx)(Z,{setAuth:r}):Object(I.jsx)(B,{setAuth:r,setAdmin:i})}),Object(I.jsx)(se,{auth:a,setAuth:r,admin:o,user:m,path:"/dashboard",Component:Z,exact:!0}),Object(I.jsx)(se,{auth:a,setAuth:r,admin:o,user:m,path:"/garden",Component:te,exact:!0}),Object(I.jsx)(se,{auth:a,setAuth:r,admin:o,user:m,coins:k,path:"/florist",Component:ne,exact:!0})]})]})})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,196)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},le=a(83),je=a(95),ue={tasks:[],task:{},dailies:[],coins:Number};var de=Object(le.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0,a=e.tasks;switch(t.type){case"GET_TASKS":return Object(s.a)(Object(s.a)({},e),{},{tasks:t.payload});case"GET_TASK":var n=a.find((function(e){return e._id===t.payload}));return Object(s.a)(Object(s.a)({},e),{},{tasks:n});case"DELETE_TASK":var r=a.filter((function(e){return e._id!==t.payload}));return Object(s.a)(Object(s.a)({},e),{},{tasks:r});case"UPDATE_COINS":return Object(s.a)(Object(s.a)({},e),{},{coins:t.payload});case"SET_DAILIES":return Object(s.a)(Object(s.a)({},e),{},{dailies:t.payload});case"ARCHIVE_DAILY":var c=e.dailies,o=c.findIndex((function(e){return e._id===t.payload}));return c[o]=!c[o],console.log("daily arr hit"),console.log(c),Object(s.a)(Object(s.a)({},e),{},{dailies:c});default:return e}}),Object(le.a)(je.a));c.a.render(Object(I.jsx)(O.a,{store:de,children:Object(I.jsx)(oe,{})}),document.getElementById("root")),ie()}},[[175,1,2]]]);
//# sourceMappingURL=main.bd75b1ce.chunk.js.map