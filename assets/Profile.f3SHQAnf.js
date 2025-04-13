import{r as t,j as e,R as j}from"./index.R1rO9--g.js";import{A,u as B,U as P,B as W,C as M,D as Q,n as D}from"./App.CvAjmVrL.js";import"./vendor.g9V5BtTL.js";const E=j.memo(({searchedUser:s,isModeratorOrAdmin:n,handleWarn:a,handleBan:l,warnReason:f,setWarnReason:d,banReason:p,setBanReason:c})=>e.jsxs("div",{className:"lg:fixed flex flex-col justify-between text-white mb-6 lg:w-1/4",children:[e.jsx("div",{className:"flex flex-col items-center lg:items-start gap-4",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("img",{src:(s==null?void 0:s.profilePicture)||"https://i.pinimg.com/736x/e8/3c/db/e83cdbd70190f7f28de6d68c9e129dd7.jpg",alt:"Profile",className:"h-24 w-24 lg:h-30 lg:w-30 rounded-full"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"flex items-center gap-3",children:e.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-white",children:s==null?void 0:s.username})}),e.jsx("p",{className:"text-sm lg:text-lg font-medium text-gray-400",children:s==null?void 0:s.role})]})]})}),e.jsxs("p",{className:"font-bold mt-4 text-center lg:text-left",children:["Date d'inscription ",e.jsx("br",{})," ",e.jsx("span",{className:"font-medium",children:(s==null?void 0:s.dateCreation)||"N/A"})]}),e.jsxs("p",{className:"font-bold mt-4 text-center lg:text-left",children:["Statut du compte ",e.jsx("br",{})," ",s!=null&&s.banned?e.jsx("span",{className:"text-red-600 font-medium",children:"Suspendu"}):e.jsx("span",{className:"text-green-600 font-medium",children:"Actif"})]}),e.jsxs("p",{className:"font-bold mt-4 text-center lg:text-left",children:["Nombre de warnings ",e.jsx("br",{})," ",e.jsx("span",{className:"font-medium",children:(s==null?void 0:s.warnings)||0})]}),n&&e.jsxs("div",{className:"flex flex-col gap-4 mt-4",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row items-center lg:items-start gap-2",children:[e.jsx("button",{onClick:()=>a(),className:"bg-yellow-500 text-white px-4 py-2 rounded",children:"Warn"}),e.jsx("input",{type:"text",placeholder:"Reason for warning",value:f,onChange:i=>d(i.target.value),className:"p-2 rounded w-full lg:w-auto"})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row items-center lg:items-start gap-2",children:[e.jsx("button",{onClick:()=>l(),className:"bg-red-500 text-white px-4 py-2 rounded",children:"Ban"}),e.jsx("input",{type:"text",placeholder:"Reason for ban",value:p,onChange:i=>c(i.target.value),className:"p-2 rounded w-full lg:w-auto"})]})]})]})),O=j.memo(({searchedUser:s,posts:n})=>e.jsxs("div",{className:"lg:pl-[384px] w-full",children:[e.jsxs("h2",{className:"text-2xl lg:text-3xl font-bold mb-4 text-white text-center lg:text-left",children:["Posts de ",s==null?void 0:s.username]}),e.jsx("div",{className:"flex flex-wrap gap-4 justify-center lg:justify-start",children:n.map(a=>e.jsxs("div",{className:"card w-64 h-40 bg-cover bg-center",style:{backgroundImage:`url(${a.image})`},children:[e.jsx("h2",{children:a.title}),e.jsx("p",{children:a.genres.join(", ")})]},a.id))})]})),$=j.memo(({searchQuery:s,setSearchQuery:n,handleSearch:a})=>e.jsxs("div",{className:"flex flex-col items-center justify-center h-screen text-white",children:[e.jsx("h1",{className:"text-6xl font-bold animate-bounce",children:"404"}),e.jsx("p",{className:"text-2xl mt-4",children:"Utilisateur non trouvé"}),e.jsx("p",{className:"text-lg mt-2 text-gray-400 text-center",children:"L'utilisateur que vous recherchez n'existe pas ou a été supprimé."}),e.jsx("label",{className:"mt-6 text-lg text-gray-300",children:"Rechercher un autre utilisateur ?"}),e.jsxs("div",{className:"mt-2 flex items-center",children:[e.jsx("input",{type:"text",placeholder:"Nom d'utilisateur",value:s,onChange:l=>n(l.target.value),onKeyDown:l=>l.key==="Enter"&&a(),className:"p-2 rounded rounded-r-none bg-gray-800 text-white w-64 focus:outline-none"}),e.jsx("button",{onClick:a,className:"p-2 cursor-pointer bg-red-400 rounded rounded-l-none text-black flex items-center justify-center",children:e.jsx(D,{className:"h-6 w-6"})})]})]})),K=()=>{const{user:s}=A(),n=B(),[a,l]=t.useState(null),[f,d]=t.useState([]),[p,c]=t.useState(!0),[i,o]=t.useState(!1),[x,b]=t.useState(""),[m,N]=t.useState(""),[y,v]=t.useState(!1),[u,S]=t.useState(""),{user:h}=t.useContext(P),w=t.useCallback(async r=>{try{c(!0);const g=await W(r);l(g.user),d(g.posts),o(!1)}catch{o(!0)}finally{c(!1)}},[]),C=t.useCallback(()=>{u.trim()&&(c(!0),o(!1),l(null),d([]),n(`/profile/${u.trim()}`))},[u,n]),R=t.useCallback(async()=>{if(!x)return alert("Please provide a reason for the warning.");try{await M(s,x),alert("User warned successfully."),b(""),l(r=>({...r,warnings:r.warnings+1}))}catch{}},[s,x]),k=t.useCallback(async()=>{if(!m)return alert("Please provide a reason for the ban.");try{await Q(s,m),alert("User banned successfully."),N(""),l(r=>({...r,banned:!0}))}catch{}},[s,m]);t.useEffect(()=>{(async()=>{try{await w(s),!h||h.role!=="Administrator"&&h.role!=="Moderator"||v(!0)}catch{o(!0),c(!1)}})()},[s,h,w]);const U=t.useMemo(()=>e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"})}),[]);return p?U:i?e.jsx($,{searchQuery:u,setSearchQuery:S,handleSearch:C}):e.jsxs("div",{className:"container mx-auto p-4 pt-[100px] flex flex-col lg:flex-row",children:[e.jsx(E,{searchedUser:a,isModeratorOrAdmin:y,handleWarn:R,handleBan:k,warnReason:x,setWarnReason:b,banReason:m,setBanReason:N}),e.jsx(O,{searchedUser:a,posts:f})]})};export{K as default};
