(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{8799:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notifications",function(){return e(5103)}])},5103:function(n,t,e){"use strict";e.r(t);var i=e(5893),c=e(9669),a=e.n(c),o=e(7294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}t.default=function(n){var t=n.user,e=n.setUser,c=function(n){a().patch("/api/user/notification",{id:n},{withCredentials:!0}).then((function(n){e((function(t){return function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),i.forEach((function(t){r(n,t,e[t])}))}return n}({},t,{notifications:n.data.data})}))})).catch((function(n){return console.log("okay")}))};return(0,o.useEffect)((function(){t&&a().get("/api/user/notifications",{withCredentials:!0}).then((function(n){return setNotifications(n.data.data)})).catch((function(n){return console.log(n)}))}),[t]),(0,i.jsxs)("div",{className:"page-container",children:[(0,i.jsx)("h1",{children:"Notifications"}),(0,i.jsxs)("div",{className:"body",children:[t&&t.notifications.length<=0&&(0,i.jsx)("h2",{style:{textAlign:"center"},children:"No Notifications."}),t&&t.notifications.map((function(n){return(0,i.jsxs)("div",{className:n.seen?"notification-card read":"notification-card",children:[(0,i.jsx)("h2",{className:"notification-sender",children:n.sender}),(0,i.jsx)("h4",{onClick:function(){return console.log(n)},className:"notification-content",children:n.content}),(0,i.jsx)("h6",{className:"notification-date",children:n.createdAt.slice(0,10)}),(0,i.jsx)("div",{className:"mark-as-container",children:n.seen?"":(0,i.jsx)("div",{className:"marked-as-read"})}),(0,i.jsx)("button",{className:"mark-as-read-btn",onClick:function(){return c(n._id)},children:n.seen?"Mark Unread":"Mark Read"}),(0,i.jsx)("button",{className:"delete-btn",onClick:function(){return t=n._id,void a().patch("/api/user/notification/delete",{id:t},{withCredentials:!0}).then((function(n){return setNotifications(n.data.data)})).catch((function(n){return console.log(n)}));var t},children:"X"})]},n._id)}))]})]})}}},function(n){n.O(0,[774,888,179],(function(){return t=8799,n(n.s=t);var t}));var t=n.O();_N_E=t}]);