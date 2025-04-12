import{r as n,j as e}from"./index-Cd-PITzk.js";import{U as C,g as R,d as z,e as U,f,y as w,L as x,h as D}from"./App-D9o3Zo5Q.js";import{C as j}from"./Card-C0tHkh9M.js";const T=()=>{const[g,y]=n.useState([]),[p,N]=n.useState([]),[m,v]=n.useState([]),[c,b]=n.useState([]),[l,h]=n.useState({page:1,totalPages:1,totalReports:0,limit:10}),[P,d]=n.useState(!0),{user:a}=n.useContext(C),[r,S]=n.useState("accepted");n.useEffect(()=>{a&&i("accepted")},[a]);const i=async t=>{d(!0);try{let s;t==="accepted"?(s=await R(10,null,a.username),y(s)):t==="pending"?(s=await z(a.username),N(s)):t==="rejected"?(s=await U(a.username),v(s)):t==="reported"&&(s=await f(l.page),s&&s.reports&&(b(s.reports),h({page:s.pagination.page,totalPages:s.pagination.totalPages,totalReports:s.pagination.totalReports,limit:s.pagination.limit||10})))}catch(s){w.error(s.message||"Erreur lors du chargement des posts.")}finally{d(!1)}},o=t=>{S(t),(t==="accepted"&&g.length===0||t==="pending"&&p.length===0||t==="rejected"&&m.length===0||t==="reported"&&c.length===0)&&i(t)},u=t=>{t<1||t>l.totalPages||(h(s=>({...s,page:t})),k(t))},k=async t=>{d(!0);try{const s=await f(t);s&&s.reports&&(b(s.reports),h({page:s.pagination.page,totalPages:s.pagination.totalPages,totalReports:s.pagination.totalReports,limit:s.pagination.limit||10}))}catch(s){w.error(s.message||"Erreur lors du chargement des posts signalés.")}finally{d(!1)}};return e.jsxs("div",{className:"container mx-auto p-4 pt-[100px] flex flex-col lg:flex-row",children:[e.jsxs("div",{className:"lg:fixed flex flex-col justify-between text-white mb-6 lg:w-1/4",children:[e.jsxs("div",{className:"flex flex-col items-center lg:items-start gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("img",{src:a!=null&&a.pfp?a==null?void 0:a.pfp:"https://i.pinimg.com/736x/e8/3c/db/e83cdbd70190f7f28de6d68c9e129dd7.jpg",alt:"Profile",className:"h-24 w-24 lg:h-30 lg:w-30 rounded-full"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-white",children:a==null?void 0:a.username}),e.jsx(x,{to:"/settings",className:"text-white text-xl",children:e.jsx(D,{})})]}),e.jsx("p",{className:"text-sm lg:text-lg font-medium text-gray-400",children:a==null?void 0:a.role})]})]}),a!=null&&a.banned?e.jsx("div",{className:" w-fit mt-6 bg-gray-500 text-center text-white px-4 py-2 rounded-lg hover:bg-gray-700",children:"Créer un nouveau post"}):e.jsx(x,{to:"/dashboard/create-post",className:" w-fit mt-6 bg-blue-500 text-center text-white px-4 py-2 rounded-lg hover:bg-blue-700",children:"Créer un nouveau post"})]}),e.jsxs("p",{className:"font-bold mt-4 text-center lg:text-left",children:["Date d'inscription ",e.jsx("br",{})," ",e.jsx("span",{className:"font-medium text-gray-400",children:a!=null&&a.dateCreation?a.dateCreation:"N/A"})]}),e.jsxs("p",{className:"font-bold mt-4 text-center lg:text-left",children:["Statut du compte ",e.jsx("br",{})," ",a!=null&&a.banned?e.jsx("span",{className:"text-red-600 font-medium",children:"Suspendu"}):e.jsx("span",{className:"text-green-600 font-medium",children:"Actif"})]})]}),e.jsxs("div",{className:"lg:pl-[384px] w-full",children:[e.jsxs("div",{className:"flex flex-wrap gap-4 text-white mb-4 justify-center lg:justify-start",children:[e.jsx("button",{onClick:()=>o("accepted"),className:r==="accepted"?"w-32 lg:w-40 border-2 py-2 bg-white text-black rounded block z-10":"w-32 lg:w-40 border-2 py-2 rounded cursor-pointer block z-10",children:"Accepted"}),e.jsx("button",{onClick:()=>o("pending"),className:r==="pending"?"w-32 lg:w-40 border-2 py-2 bg-white text-black rounded block z-10":"w-32 lg:w-40 border-2 py-2 rounded cursor-pointer block z-10",children:"Pending"}),e.jsx("button",{onClick:()=>o("rejected"),className:r==="rejected"?"w-32 lg:w-40 border-2 py-2 bg-white text-black rounded block z-10":"w-32 lg:w-40 border-2 py-2 rounded cursor-pointer block z-10",children:"Rejected"}),e.jsx("button",{onClick:()=>o("reported"),className:r==="reported"?"w-32 lg:w-40 border-2 py-2 bg-white text-black rounded block z-10":"w-32 lg:w-40 border-2 py-2 rounded cursor-pointer block z-10",children:"Reported"})]}),P?e.jsx("p",{className:"text-white text-center",children:"Chargement..."}):e.jsxs("div",{children:[r==="accepted"&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl lg:text-3xl font-bold mb-4 text-white text-center lg:text-left",children:"Vos posts"}),e.jsx("div",{className:"flex flex-wrap gap-4 justify-center lg:justify-start",children:g.length===0?e.jsx("p",{className:"text-white",children:"Vous n'avez pas encore de posts approuvés."}):g.map(t=>e.jsx(j,{id:t.id,image:t.image,link:t.link,title:t.title,genres:t.genres||[],username:t.username,user:a},t.id))})]}),r==="pending"&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl lg:text-3xl font-bold mb-4 text-white text-center lg:text-left",children:"Posts en cours de vérification"}),e.jsx("div",{className:"flex flex-wrap gap-4 justify-center lg:justify-start",children:p.length===0?e.jsx("p",{className:"text-white",children:"Vous n'avez pas de posts en attente de modération."}):p.map(t=>e.jsx(j,{image:t.image,link:t.link,title:t.title,genres:t.genres||[],username:t.username,user:a,isPending:!0},t.id))})]}),r==="rejected"&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl lg:text-3xl font-bold mb-4 text-white text-center lg:text-left",children:"Posts refusés"}),e.jsx("div",{className:"flex flex-wrap gap-4 justify-center lg:justify-start",children:m.length===0?e.jsx("p",{className:"text-white",children:"Vous n'avez pas de posts refusés."}):m.map(t=>e.jsx(j,{image:t.image,link:t.link,title:t.title,genres:t.genres||[],username:t.username,user:a,isRejected:!0,reason:t.reason},t.id))})]}),r==="reported"&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl lg:text-3xl font-bold mb-4 text-white text-center lg:text-left",children:"Posts signalés"}),c.length===0?e.jsx("p",{className:"text-white",children:"Vous n'avez pas signalé de posts."}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsx("div",{className:"block md:hidden",children:c.map(t=>e.jsxs("div",{className:"bg-gray-800 p-4 mb-4 rounded-lg text-white",children:[e.jsx("h3",{className:"font-bold text-lg border-b border-gray-700 pb-2 mb-2",children:t.postTitle||"Post supprimé"}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-gray-400",children:"Publié par:"}),t.postOwnerUsername?e.jsx(x,{to:`/search?u=${t.postOwnerUsername}`,className:"text-blue-400 hover:underline",children:t.postOwnerUsername}):e.jsx("span",{className:"text-white",children:"Utilisateur inconnu"})]}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-gray-400",children:"Raison:"}),t.reportStatus!=="pending"&&t.reason?e.jsx("span",{className:"text-white",children:t.reason}):e.jsx("span",{className:"text-gray-500",children:"-"})]}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-gray-400",children:"Date:"}),e.jsx("span",{className:"text-white",children:new Date(t.reportDate||t.date_creation).toLocaleDateString()})]}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-gray-400",children:"Statut:"}),e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium
                                                            ${t.reportStatus==="pending"?"bg-yellow-500 text-white":t.reportStatus==="accepted"?"bg-green-500 text-white":t.reportStatus==="rejected"?"bg-red-500 text-white":"bg-gray-500 text-white"}`,children:t.reportStatus==="pending"?"En attente":t.reportStatus==="accepted"?"Conservé":t.reportStatus==="rejected"?"Supprimé":t.reportStatus||"Inconnu"})]})]},t.userReportId||t.id))}),e.jsxs("table",{className:"w-full text-white hidden md:table",children:[e.jsx("thead",{className:"bg-gray-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left",children:"Titre"}),e.jsx("th",{className:"px-4 py-3 text-left",children:"Publié par"}),e.jsx("th",{className:"px-4 py-3 text-left",children:"Raison du modérateur"}),e.jsx("th",{className:"px-4 py-3 text-left",children:"Date"}),e.jsx("th",{className:"px-4 py-3 text-center",children:"Statut"})]})}),e.jsx("tbody",{children:c.map(t=>e.jsxs("tr",{className:"border-b border-gray-700",children:[e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{children:t.postTitle||"Post supprimé"})}),e.jsx("td",{className:"px-4 py-3",children:t.postOwnerUsername?e.jsx(x,{to:`/search?u=${t.postOwnerUsername}`,className:"text-blue-400 hover:underline",children:t.postOwnerUsername}):e.jsx("span",{className:"text-gray-400",children:"Utilisateur inconnu"})}),e.jsx("td",{className:"px-4 py-3 max-w-xs",children:t.reportStatus!=="pending"&&t.reason?e.jsx("p",{children:t.reason}):e.jsx("p",{className:"text-gray-500",children:"-"})}),e.jsx("td",{className:"px-4 py-3",children:new Date(t.reportDate||t.date_creation).toLocaleDateString()}),e.jsx("td",{className:"px-4 py-3 text-center",children:e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium
                                                                ${t.reportStatus==="pending"?"bg-yellow-500 text-white":t.reportStatus==="accepted"?"bg-green-500 text-white":t.reportStatus==="rejected"?"bg-red-500 text-white":"bg-gray-500 text-white"}`,children:t.reportStatus==="pending"?"En attente":t.reportStatus==="accepted"?"Conservé":t.reportStatus==="rejected"?"Supprimé":t.reportStatus||"Inconnu"})})]},t.userReportId||t.id))})]}),l.totalPages>1&&e.jsx("div",{className:"flex justify-center mt-6",children:e.jsxs("nav",{className:"flex flex-wrap items-center justify-center",children:[e.jsx("button",{onClick:()=>u(l.page-1),className:`px-3 py-1 m-1 rounded-l border border-gray-700 ${l.page===1?"bg-gray-800 text-gray-500 cursor-not-allowed":"bg-gray-700 text-white hover:bg-gray-600"}`,disabled:l.page===1,children:"Précédent"}),e.jsx("div",{className:"flex flex-wrap justify-center",children:[...Array(l.totalPages).keys()].map(t=>{const s=t+1;return s===1||s===l.totalPages||s>=l.page-1&&s<=l.page+1?e.jsx("button",{onClick:()=>u(s),className:`px-3 py-1 border-t border-b border-gray-700 ${l.page===s?"bg-blue-600 text-white":"bg-gray-700 text-white hover:bg-gray-600"}`,children:s},s):s===2&&l.page>3||s===l.totalPages-1&&l.page<l.totalPages-2?e.jsx("span",{className:"px-3 py-1 border-t border-b border-gray-700 bg-gray-700 text-white",children:"..."},s):null})}),e.jsx("button",{onClick:()=>u(l.page+1),className:`px-3 py-1 m-1 rounded-r border border-gray-700 ${l.page===l.totalPages?"bg-gray-800 text-gray-500 cursor-not-allowed":"bg-gray-700 text-white hover:bg-gray-600"}`,disabled:l.page===l.totalPages,children:"Suivant"})]})}),e.jsx("p",{className:"text-gray-400 text-sm mt-4 text-center md:text-left",children:"Note: Si vous n'êtes pas satisfait de la décision concernant un post qui n'est plus en attente, vous pouvez le signaler à nouveau en le retrouvant sur le site."})]})]})]})]})]})};export{T as default};
