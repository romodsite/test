import{r as s,j as e,R as h}from"./index-D8fr86l7.js";import{z as A,b as F,U as I,A as E,B,C as M,k as W}from"./App-C8aaqOOE.js";const z=h.memo(({searchedUser:t,isModeratorOrAdmin:r,handleWarn:l,handleBan:n,warnReason:p,setWarnReason:x,banReason:j,setBanReason:o})=>e.jsxs("div",{className:"lg:fixed flex flex-col justify-between text-white mb-6 lg:w-1/4",children:[e.jsx("div",{className:"flex flex-col items-center lg:items-start gap-4",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("img",{src:(t==null?void 0:t.profilePicture)||"https://i.pinimg.com/736x/e8/3c/db/e83cdbd70190f7f28de6d68c9e129dd7.jpg",alt:"Profile",className:"h-24 w-24 lg:h-30 lg:w-30 rounded-full"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"flex items-center gap-3",children:e.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-white",children:t==null?void 0:t.username})}),e.jsx("p",{className:"text-sm lg:text-lg font-medium text-gray-400",children:t==null?void 0:t.role})]})]})}),e.jsxs("p",{className:"font-bold mt-4 text-center lg:text-left",children:["Date d'inscription ",e.jsx("br",{})," ",e.jsx("span",{className:"font-medium",children:(t==null?void 0:t.dateCreation)||"N/A"})]}),e.jsxs("p",{className:"font-bold mt-4 text-center lg:text-left",children:["Statut du compte ",e.jsx("br",{})," ",t!=null&&t.banned?e.jsx("span",{className:"text-red-600 font-medium",children:"Suspendu"}):e.jsx("span",{className:"text-green-600 font-medium",children:"Actif"})]}),e.jsxs("p",{className:"font-bold mt-4 text-center lg:text-left",children:["Nombre de warnings ",e.jsx("br",{})," ",e.jsx("span",{className:"font-medium",children:(t==null?void 0:t.warnings)||0})]}),r&&e.jsxs("div",{className:"flex flex-col gap-4 mt-4",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row items-center lg:items-start gap-2",children:[e.jsx("button",{onClick:()=>l(),className:"bg-yellow-500 text-white px-4 py-2 rounded",children:"Warn"}),e.jsx("input",{type:"text",placeholder:"Reason for warning",value:p,onChange:c=>x(c.target.value),className:"p-2 rounded w-full lg:w-auto"})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row items-center lg:items-start gap-2",children:[e.jsx("button",{onClick:()=>n(),className:"bg-red-500 text-white px-4 py-2 rounded",children:"Ban"}),e.jsx("input",{type:"text",placeholder:"Reason for ban",value:j,onChange:c=>o(c.target.value),className:"p-2 rounded w-full lg:w-auto"})]})]})]})),D=h.memo(({searchedUser:t,posts:r})=>e.jsxs("div",{className:"lg:pl-[384px] w-full",children:[e.jsxs("h2",{className:"text-2xl lg:text-3xl font-bold mb-4 text-white text-center lg:text-left",children:["Posts de ",t==null?void 0:t.username]}),e.jsx("div",{className:"flex flex-wrap gap-4 justify-center lg:justify-start",children:r.map(l=>e.jsxs("div",{className:"card w-64 h-40 bg-cover bg-center",style:{backgroundImage:`url(${l.image})`},children:[e.jsx("h2",{children:l.title}),e.jsx("p",{children:l.genres.join(", ")})]},l.id))})]})),L=h.memo(({searchQuery:t,setSearchQuery:r,handleSearch:l})=>e.jsxs("div",{className:"flex flex-col items-center justify-center h-screen text-white",children:[e.jsx("h1",{className:"text-6xl font-bold animate-bounce",children:"404"}),e.jsx("p",{className:"text-2xl mt-4",children:"Utilisateur non trouvé"}),e.jsx("p",{className:"text-lg mt-2 text-gray-400 text-center",children:"L'utilisateur que vous recherchez n'existe pas ou a été supprimé."}),e.jsx("label",{className:"mt-6 text-lg text-gray-300",children:"Rechercher un autre utilisateur ?"}),e.jsxs("div",{className:"mt-2 flex items-center",children:[e.jsx("input",{type:"text",placeholder:"Nom d'utilisateur",value:t,onChange:n=>r(n.target.value),onKeyDown:n=>n.key==="Enter"&&l(),className:"p-2 rounded rounded-r-none bg-gray-800 text-white w-64 focus:outline-none"}),e.jsx("button",{onClick:l,className:"p-2 cursor-pointer bg-red-400 rounded rounded-l-none text-black flex items-center justify-center",children:e.jsx(W,{className:"h-6 w-6"})})]})]})),$=()=>{const{user:t}=A(),r=F(),[l,n]=s.useState(null),[p,x]=s.useState([]),[j,o]=s.useState(!0),[c,u]=s.useState(!1),[d,b]=s.useState(""),[m,N]=s.useState(""),[y,v]=s.useState(!1),[f,C]=s.useState(""),{user:g}=s.useContext(I),w=s.useCallback(async a=>{try{o(!0);const i=await E(a);n(i.user),x(i.posts),u(!1)}catch(i){console.error("Failed to fetch user info:",i),u(!0)}finally{o(!1)}},[]),S=s.useCallback(()=>{f.trim()&&(o(!0),u(!1),n(null),x([]),r(`/profile/${f.trim()}`))},[f,r]),k=s.useCallback(async()=>{if(!d)return alert("Please provide a reason for the warning.");try{await B(t,d),alert("User warned successfully."),b(""),n(a=>({...a,warnings:a.warnings+1}))}catch(a){console.error("Failed to warn user:",a)}},[t,d]),R=s.useCallback(async()=>{if(!m)return alert("Please provide a reason for the ban.");try{await M(t,m),alert("User banned successfully."),N(""),n(a=>({...a,banned:!0}))}catch(a){console.error("Failed to ban user:",a)}},[t,m]);s.useEffect(()=>{(async()=>{try{await w(t),g&&(g.role==="Administrator"||g.role==="Moderator")&&v(!0)}catch(i){console.error("Failed in fetch user info effect:",i),u(!0),o(!1)}})()},[t,g,w]);const P=s.useMemo(()=>e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"})}),[]);return j?P:c?e.jsx(L,{searchQuery:f,setSearchQuery:C,handleSearch:S}):e.jsxs("div",{className:"container mx-auto p-4 pt-[100px] flex flex-col lg:flex-row",children:[e.jsx(z,{searchedUser:l,isModeratorOrAdmin:y,handleWarn:k,handleBan:R,warnReason:d,setWarnReason:b,banReason:m,setBanReason:N}),e.jsx(D,{searchedUser:l,posts:p})]})};export{$ as default};
