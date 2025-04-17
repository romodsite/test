import{r as e,j as s,R as t}from"./index.D5OR55Lx.js";import{e as a,c as l,U as n,g as r,w as c,f as i,F as o}from"./App.Dz69de1U.js";import"./vendor.BHl_RpiB.js";const d=t.memo((({searchedUser:e,isModeratorOrAdmin:t,handleWarn:a,handleBan:l,warnReason:n,setWarnReason:r,banReason:c,setBanReason:i})=>s.jsxs("div",{className:"lg:fixed flex flex-col justify-between text-white mb-6 lg:w-1/4",children:[s.jsx("div",{className:"flex flex-col items-center lg:items-start gap-4",children:s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("img",{src:(null==e?void 0:e.profilePicture)||"https://i.pinimg.com/736x/e8/3c/db/e83cdbd70190f7f28de6d68c9e129dd7.jpg",alt:"Profile",className:"h-24 w-24 lg:h-30 lg:w-30 rounded-full"}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx("div",{className:"flex items-center gap-3",children:s.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-white",children:null==e?void 0:e.username})}),s.jsx("p",{className:"text-sm lg:text-lg font-medium text-gray-400",children:null==e?void 0:e.role})]})]})}),s.jsxs("p",{className:"font-bold mt-4 text-center lg:text-left",children:["Registration date ",s.jsx("br",{})," ",s.jsx("span",{className:"font-medium",children:(null==e?void 0:e.dateCreation)||"N/A"})]}),s.jsxs("p",{className:"font-bold mt-4 text-center lg:text-left",children:["Account status ",s.jsx("br",{})," ",(null==e?void 0:e.banned)?s.jsx("span",{className:"text-red-600 font-medium",children:"Suspended"}):s.jsx("span",{className:"text-green-600 font-medium",children:"Active"})]}),s.jsxs("p",{className:"font-bold mt-4 text-center lg:text-left",children:["Number of warnings ",s.jsx("br",{})," ",s.jsx("span",{className:"font-medium",children:(null==e?void 0:e.warnings)||0})]}),t&&s.jsxs("div",{className:"flex flex-col gap-4 mt-4",children:[s.jsxs("div",{className:"flex flex-col lg:flex-row items-center lg:items-start gap-2",children:[s.jsx("button",{onClick:()=>a(),className:"bg-yellow-500 text-white px-4 py-2 rounded",children:"Warn"}),s.jsx("input",{type:"text",placeholder:"Reason for warning",value:n,onChange:e=>r(e.target.value),className:"p-2 rounded w-full lg:w-auto"})]}),s.jsxs("div",{className:"flex flex-col lg:flex-row items-center lg:items-start gap-2",children:[s.jsx("button",{onClick:()=>l(),className:"bg-red-500 text-white px-4 py-2 rounded",children:"Ban"}),s.jsx("input",{type:"text",placeholder:"Reason for ban",value:c,onChange:e=>i(e.target.value),className:"p-2 rounded w-full lg:w-auto"})]})]})]}))),x=t.memo((({searchedUser:e,posts:t})=>s.jsxs("div",{className:"lg:pl-[384px] w-full",children:[s.jsxs("h2",{className:"text-2xl lg:text-3xl font-bold mb-4 text-white text-center lg:text-left",children:["Posts by ",null==e?void 0:e.username]}),s.jsx("div",{className:"flex flex-wrap gap-4 justify-center lg:justify-start",children:t.map((e=>s.jsxs("div",{className:"card w-64 h-40 bg-cover bg-center",style:{backgroundImage:`url(${e.image})`},children:[s.jsx("h2",{children:e.title}),s.jsx("p",{children:e.genres.join(", ")})]},e.id)))})]}))),m=t.memo((({searchQuery:e,setSearchQuery:t,handleSearch:a})=>s.jsxs("div",{className:"flex flex-col items-center justify-center h-screen text-white",children:[s.jsx("h1",{className:"text-6xl font-bold animate-bounce",children:"404"}),s.jsx("p",{className:"text-2xl mt-4",children:"User not found"}),s.jsx("p",{className:"text-lg mt-2 text-gray-400 text-center",children:"The user you are looking for does not exist or has been deleted."}),s.jsx("label",{className:"mt-6 text-lg text-gray-300",children:"Search for another user?"}),s.jsxs("div",{className:"mt-2 flex items-center",children:[s.jsx("input",{type:"text",placeholder:"Username",value:e,onChange:e=>t(e.target.value),onKeyDown:e=>"Enter"===e.key&&a(),className:"p-2 rounded rounded-r-none bg-gray-800 text-white w-64 focus:outline-none"}),s.jsx("button",{onClick:a,className:"p-2 cursor-pointer bg-red-400 rounded rounded-l-none text-black flex items-center justify-center",children:s.jsx(o,{className:"h-6 w-6"})})]})]}))),u=()=>{const{user:t}=a(),o=l(),[u,h]=e.useState(null),[f,g]=e.useState([]),[p,j]=e.useState(!0),[b,w]=e.useState(!1),[N,y]=e.useState(""),[v,S]=e.useState(""),[C,R]=e.useState(!1),[k,U]=e.useState(""),{user:A}=e.useContext(n),B=e.useCallback((async e=>{try{j(!0);const s=await r(e);h(s.user),g(s.posts),w(!1)}catch(s){w(!0)}finally{j(!1)}}),[]),P=e.useCallback((()=>{k.trim()&&(j(!0),w(!1),h(null),g([]),o("/profile/"+k.trim()))}),[k,o]),W=e.useCallback((async()=>{if(!N)return alert("Please provide a reason for the warning.");try{await c(t,N),alert("User warned successfully."),y(""),h((e=>({...e,warnings:e.warnings+1})))}catch(e){}}),[t,N]),M=e.useCallback((async()=>{if(!v)return alert("Please provide a reason for the ban.");try{await i(t,v),alert("User banned successfully."),S(""),h((e=>({...e,banned:!0})))}catch(e){}}),[t,v]);e.useEffect((()=>{(async()=>{try{await B(t),!A||"Administrator"!==A.role&&"Moderator"!==A.role||R(!0)}catch(e){w(!0),j(!1)}})()}),[t,A,B]);const Q=e.useMemo((()=>s.jsx("div",{className:"flex items-center justify-center h-screen",children:s.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"})})),[]);return p?Q:b?s.jsx(m,{searchQuery:k,setSearchQuery:U,handleSearch:P}):s.jsxs("div",{className:"container mx-auto p-4 pt-[100px] flex flex-col lg:flex-row",children:[s.jsx(d,{searchedUser:u,isModeratorOrAdmin:C,handleWarn:W,handleBan:M,warnReason:N,setWarnReason:y,banReason:v,setBanReason:S}),s.jsx(x,{searchedUser:u,posts:f})]})};export{u as default};
