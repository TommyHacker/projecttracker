(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{4140:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(9697)}])},9697:function(e,n,t){"use strict";t.r(n);var s=t(5893),r=t(7294),a=t(9669),i=t.n(a),u=t(1163),c=t(1664);n.default=function(e){var n=e.user,t=e.setUser,a=(0,u.useRouter)(),o=(0,r.useState)(),l=o[0],d=o[1],f=(0,r.useState)(),h=f[0],p=f[1];(0,r.useEffect)((function(){if(n)return a.push("/")}));return(0,s.jsx)("div",{className:"page-container",children:(0,s.jsxs)("form",{className:"user-form",onSubmit:function(e){return function(e){return e.preventDefault(),i().post("/api/user/login",{email:l,password:h},{withCredentials:!0}).then((function(e){if("success"===e.data.status)return t(e.data.data)})).catch((function(e){return console.log(e)})),d(""),p(""),a.replace("/")}(e)},children:[(0,s.jsx)("div",{className:"title",children:"Login."}),(0,s.jsxs)("div",{className:"section",children:[(0,s.jsx)("label",{htmlFor:"email",children:"Email"}),(0,s.jsx)("input",{type:"email",name:"email",onChange:function(e){return d(e.target.value)}})]}),(0,s.jsxs)("div",{className:"section",children:[(0,s.jsx)("label",{htmlFor:"password",children:"Password"}),(0,s.jsx)("input",{type:"password",name:"password",onChange:function(e){return p(e.target.value)}})]}),(0,s.jsx)("button",{children:"Log In"}),(0,s.jsxs)("p",{children:["Don't have an account? ",(0,s.jsx)(c.default,{href:"/register",children:"register"})," here."]})]})})}}},function(e){e.O(0,[774,888,179],(function(){return n=4140,e(e.s=n);var n}));var n=e.O();_N_E=n}]);