(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{12:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(311)}])},311:function(e,n,t){"use strict";t.r(n);var s=t(5893),r=t(7294),i=t(9669),c=t.n(i);n.default=function(e){var n=e.user,t=(e.setUser,(0,r.useState)()),i=t[0],a=t[1],o=(0,r.useState)(!1),u=o[0],l=o[1],d=(0,r.useState)(!1),h=d[0],f=d[1];(0,r.useEffect)((function(){if(!i)return console.log("getting user stats"),void c().get("/api/project/dashboardConfession",{withCredentials:!0}).then((function(e){return a(e.data.data)})).catch((function(e){return console.log(e)}))}),[i]);return(0,s.jsxs)("div",{className:"page-container",children:[(0,s.jsx)("h1",{children:"Dashboard"}),(0,s.jsxs)("div",{className:"body",children:[(0,s.jsxs)("h2",{onClick:function(){f(!h)},children:["Tickets : ",i&&i.ticketsCount.length]}),h&&i.ticketsCount.map((function(e,n){return(0,s.jsx)("p",{children:e.title},n)})),(0,s.jsxs)("h2",{className:"fadefromred",onClick:function(){l(!u)},children:["Projects : ",i&&i.projectsCount.length]}),u&&i.projectsCount.map((function(e,n){return(0,s.jsx)("p",{children:e.title},n)})),n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{style:{textTransform:"capitalize"},children:n.fullName}),(0,s.jsx)("p",{children:n.email})]})]})]})}}},function(e){e.O(0,[774,888,179],(function(){return n=12,e(e.s=n);var n}));var n=e.O();_N_E=n}]);