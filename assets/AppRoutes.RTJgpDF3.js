const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login.D-OWiqGl.js","assets/index.D5OR55Lx.js","assets/vendor.BHl_RpiB.js","assets/index.B4cdifqZ.css","assets/App.Dz69de1U.js","assets/loader.D8xcPYS-.css","assets/Register.DZFSO7MQ.js","assets/ForgotPassword.DQov2zEV.js","assets/Profile.DMHYstOa.js","assets/Home.D1x0VyJF.js","assets/index.CeSC3_op.js","assets/Card.C_LixcLG.js","assets/Home.DP_G_-g8.css","assets/Search.CicTJOoi.js","assets/DMCA.CeH-n5Vr.js","assets/NotFound.D60hgFkb.js","assets/Dashboard.v9-4M7ON.js","assets/CreatePost.BehHyOAv.js","assets/Panel.CfXI00jP.js"])))=>i.map(i=>d[i]);
import{r as e,j as s,_ as r}from"./index.D5OR55Lx.js";import{u as t,R as a,a as n,N as j}from"./App.Dz69de1U.js";import"./vendor.BHl_RpiB.js";const l=e.lazy((()=>r((()=>import("./Login.D-OWiqGl.js")),__vite__mapDeps([0,1,2,3,4,5])))),o=e.lazy((()=>r((()=>import("./Register.DZFSO7MQ.js")),__vite__mapDeps([6,1,2,3,4,5])))),m=e.lazy((()=>r((()=>import("./ForgotPassword.DQov2zEV.js")),__vite__mapDeps([7,1,2,3,4,5])))),x=e.lazy((()=>r((()=>import("./Profile.DMHYstOa.js")),__vite__mapDeps([8,1,2,3,4])))),_=e.lazy((()=>r((()=>import("./Home.D1x0VyJF.js")),__vite__mapDeps([9,1,2,3,10,4,11,12])))),h=e.lazy((()=>r((()=>import("./Search.CicTJOoi.js")),__vite__mapDeps([13,1,2,3,4,11])))),p=e.lazy((()=>r((()=>import("./DMCA.CeH-n5Vr.js")),__vite__mapDeps([14,1,2,3])))),i=e.lazy((()=>r((()=>import("./NotFound.D60hgFkb.js")),__vite__mapDeps([15,1,2,3,4])))),u=e.lazy((()=>r((()=>import("./Dashboard.v9-4M7ON.js")),__vite__mapDeps([16,1,2,3,4,11])))),c=e.lazy((()=>r((()=>import("./CreatePost.BehHyOAv.js")),__vite__mapDeps([17,1,2,3,10,4,11])))),d=e.lazy((()=>r((()=>import("./Panel.CfXI00jP.js")),__vite__mapDeps([18,1,2,3,4])))),y=e.memo((()=>s.jsx("div",{className:"flex items-center justify-center h-screen",children:s.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"})}))),E=e.memo((({element:e,requiredRoles:r=[]})=>{const{user:a,loading:n}=t();return n?s.jsx(y,{}):a?r.length>0&&!r.includes(a.role)?s.jsx(j,{to:"/home",replace:!0}):e:s.jsx(j,{to:"/login",replace:!0})})),g=e.memo((({element:e})=>{const{user:r,loading:a}=t();return a?s.jsx(y,{}):r?s.jsx(j,{to:"/home",replace:!0}):e})),P=e.memo((function({searchQuery:r}){const{loading:P}=t();return P?s.jsx(y,{}):s.jsx(e.Suspense,{fallback:s.jsx(y,{}),children:s.jsxs(a,{children:[s.jsx(n,{path:"/",element:s.jsx(j,{to:"/home",replace:!0})}),s.jsx(n,{path:"/index.html",element:s.jsx(j,{to:"/home",replace:!0})}),s.jsx(n,{path:"/home",element:s.jsx(_,{})}),s.jsx(n,{path:"/login",element:s.jsx(g,{element:s.jsx(l,{})})}),s.jsx(n,{path:"/register",element:s.jsx(g,{element:s.jsx(o,{})})}),s.jsx(n,{path:"/forgot-password",element:s.jsx(g,{element:s.jsx(m,{})})}),s.jsx(n,{path:"/dashboard",element:s.jsx(E,{element:s.jsx(u,{})})}),s.jsx(n,{path:"/dashboard/create-post",element:s.jsx(E,{element:s.jsx(c,{})})}),s.jsx(n,{path:"/search",element:s.jsx(h,{searchQuery:r})}),s.jsx(n,{path:"/search/query/:query",element:s.jsx(h,{searchQuery:r})}),s.jsx(n,{path:"/search/genre/:genre",element:s.jsx(h,{searchQuery:r})}),s.jsx(n,{path:"/search/user/:username",element:s.jsx(h,{searchQuery:r})}),s.jsx(n,{path:"/search/genre/:genre/query/:query",element:s.jsx(h,{searchQuery:r})}),s.jsx(n,{path:"/search/genre/:genre/user/:username",element:s.jsx(h,{searchQuery:r})}),s.jsx(n,{path:"/search/user/:username/query/:query",element:s.jsx(h,{searchQuery:r})}),s.jsx(n,{path:"/search/genre/:genre/user/:username/query/:query",element:s.jsx(h,{searchQuery:r})}),s.jsx(n,{path:"/dmca",element:s.jsx(p,{})}),s.jsx(n,{path:"/panel",element:s.jsx(E,{element:s.jsx(d,{}),requiredRoles:["Administrator","Moderator"]})}),s.jsx(n,{path:"/profile/:user",element:s.jsx(x,{})}),s.jsx(n,{path:"*",element:s.jsx(i,{})})]})})}));export{P as default};
