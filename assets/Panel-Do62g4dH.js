import{r as t,j as e,R as N}from"./index-B3GAj7Io.js";import{q as S,d as A,y as n,s as _,t as M,v as T,w as U,x as L}from"./App-Cuvhlk6y.js";const f=N.memo(({active:r,onClick:d,children:o,count:i})=>e.jsxs("button",{className:`py-2 px-4 mr-2 font-medium ${r?"bg-blue-600 text-white rounded-t-lg":"text-gray-300 hover:bg-gray-700 hover:text-white rounded-t-lg"}`,onClick:d,children:[o,i!==void 0&&i>0&&` (${i})`]})),z=N.memo(({post:r,handleApprove:d,handleReject:o,reason:i,setReason:a})=>e.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg shadow-md w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]",children:[e.jsx("h2",{className:"text-xl font-semibold mb-2",children:r.title}),e.jsx("img",{src:r.image,alt:r.title,className:"w-full h-80 object-cover mb-2 rounded"}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"text-xl font-bold",children:"Lien"})," ",e.jsx("br",{}),e.jsx("a",{className:"underline text-blue-400",href:r.link,target:"_blank",rel:"noopener noreferrer",children:r.link})]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"text-xl font-bold",children:"Genres:"})," ",e.jsx("br",{})," ",r.genres.join(", ")]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"text-xl font-bold",children:"Utilisateur:"})," ",e.jsx("br",{})," ",r.username]}),e.jsx("div",{className:"flex gap-2 mb-2",children:e.jsx("button",{className:"bg-green-500 text-white w-full py-2 rounded hover:bg-green-600",onClick:()=>d(r.id),children:"Approuver"})}),e.jsx("input",{type:"text",placeholder:"Raison du rejet",value:i,onChange:m=>a(m.target.value),className:"w-full p-2 rounded bg-gray-700 text-white mb-2"}),e.jsx("button",{className:"bg-red-500 text-white w-full py-2 rounded hover:bg-red-600",onClick:()=>o(r.id),children:"Rejeter"})]})),D=N.memo(({report:r,handleResolveReport:d,reason:o,setReason:i})=>e.jsx("div",{className:"bg-gray-800 p-4 rounded-lg shadow-md",children:e.jsx("div",{className:"flex flex-col md:flex-row gap-4",children:e.jsxs("div",{className:"flex-grow",children:[e.jsxs("h2",{className:"text-xl font-semibold mb-2",children:[r.postTitle,e.jsxs("span",{className:"ml-2 bg-red-500 text-white text-sm px-2 py-0.5 rounded-full",children:[r.count," ",r.count>1?"reports":"report"]})]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Posté par:"})," ",r.postOwnerUsername]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Lien:"})," ",e.jsx("a",{className:"underline text-blue-400",href:r.link,target:"_blank",rel:"noopener noreferrer",children:r.link})]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Signalé par:"})," ",r.reporterUsernames.join(", ")]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Raison principale:"}),e.jsx("p",{className:"mt-1 text-yellow-300",children:r.first_report_reason}),r.first_report_justification&&e.jsxs("div",{className:"mt-2",children:[e.jsx("span",{className:"font-bold",children:"Justification:"}),e.jsx("p",{className:"mt-1 text-gray-300 bg-gray-700 p-2 rounded",children:r.first_report_justification})]})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Autres raisons signalées:"}),e.jsx("ul",{className:"list-disc pl-5 mt-1",children:r.reasons.map((a,m)=>e.jsx("li",{children:a},m))})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("span",{className:"font-bold",children:"Date:"})," ",new Date(r.date_creation).toLocaleString()]}),e.jsx("input",{type:"text",placeholder:"Raison de la décision (obligatoire)",value:o,onChange:a=>i(a.target.value),className:"w-full p-2 rounded bg-gray-700 text-white mb-2"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"bg-green-500 text-white flex-1 py-2 rounded hover:bg-green-600",onClick:()=>d(r.id,!0),children:"Garder le post"}),e.jsx("button",{className:"bg-red-500 text-white flex-1 py-2 rounded hover:bg-red-600",onClick:()=>d(r.id,!1),children:"Supprimer le post"})]})]})})})),G=()=>{const[r,d]=t.useState([]),[o,i]=t.useState([]),[a,m]=t.useState(""),[c,C]=t.useState("moderation"),[j,k]=t.useState([]),{user:x,loading:E,error:v}=S(),h=t.useCallback(async()=>{try{const s=await A();d(s)}catch(s){console.error("Error fetching moderation posts:",s),n.error(s.message||"Erreur lors du chargement des posts en modération.")}},[]),p=t.useCallback(async()=>{try{const s=await _();i(s)}catch(s){console.error("Error fetching reports:",s),n.error(s.message||"Erreur lors du chargement des reports.")}},[]),u=t.useCallback(async()=>{try{const s=await M();k(s)}catch(s){console.error("Error fetching resolved reports:",s),n.error(s.message||"Erreur lors du chargement des reports résolus.")}},[]),w=t.useCallback(async s=>{try{await T(s),n.success("Post approuvé avec succès !"),h()}catch(l){console.error("Error approving post:",l),n.error(l.message||"Erreur lors de l'approbation du post.")}},[h]),y=t.useCallback(async s=>{if(!a){n.error("Veuillez fournir une raison pour le rejet.");return}try{await U(s,a),n.success("Post rejeté avec succès."),m(""),h()}catch(l){console.error("Error rejecting post:",l),n.error(l.message||"Erreur lors du rejet du post.")}},[a,h]),R=t.useCallback(async(s,l)=>{if(!a){n.error(l?"Veuillez fournir une raison pour conserver le post.":"Veuillez fournir une raison pour supprimer le post.");return}try{await L(s,l,a),n.success(l?"Report résolu, le post reste sur le site.":"Report résolu, le post a été supprimé."),m(""),p(),u()}catch(g){console.error("Error resolving report:",g),n.error(g.message||"Erreur lors de la résolution du report.")}},[a,p,u]),b=t.useCallback(s=>{C(s)},[]);t.useEffect(()=>{if(x&&(x.role==="Administrator"||x.role==="Moderator")){h(),p(),u();const s=setInterval(()=>{c==="moderation"?h():c==="reports"?p():c==="resolved"&&u()},3e4);return()=>clearInterval(s)}},[x,c,h,p,u]);const P=t.useMemo(()=>c==="moderation"?e.jsx("div",{className:"flex flex-wrap gap-4 text-white",children:r.length===0?e.jsx("p",{className:"text-gray-300",children:"Aucun post en attente de modération."}):r.map(s=>e.jsx(z,{post:s,handleApprove:w,handleReject:y,reason:a,setReason:m},s.id))}):c==="reports"?e.jsx("div",{className:"text-white",children:o.length===0?e.jsx("p",{className:"text-gray-300",children:"Aucun report à traiter."}):e.jsx("div",{className:"grid gap-4",children:o.map(s=>e.jsx(D,{report:s,handleResolveReport:R,reason:a,setReason:m},s.id))})}):e.jsx("div",{className:"text-white",children:j.length===0?e.jsx("p",{className:"text-gray-300",children:"Aucun report résolu à afficher."}):e.jsx("div",{className:"grid gap-4",children:j.map(s=>e.jsx("div",{className:"bg-gray-800 p-4 rounded-lg shadow-md",children:e.jsx("div",{className:"flex flex-col md:flex-row gap-4",children:e.jsxs("div",{className:"flex-grow",children:[e.jsxs("h2",{className:"text-xl font-semibold mb-2",children:[s.postTitle,e.jsx("span",{className:`ml-2 ${s.status==="accepted"?"bg-green-500":"bg-red-500"} text-white text-sm px-2 py-0.5 rounded-full`,children:s.status==="accepted"?"Conservé":"Supprimé"})]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Posté par:"})," ",s.postOwnerUsername]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Signalé par:"})," ",s.reporterUsernames.join(", ")]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Raisons:"}),e.jsx("ul",{className:"list-disc pl-5 mt-1",children:s.reasons.map((l,g)=>e.jsx("li",{children:l},g))})]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Date:"})," ",new Date(s.date_creation).toLocaleString()]})]})})},s.id))})}),[c,r,o,j,a,w,y,R]);return E?e.jsx("div",{className:"container mx-auto p-4 pt-[100px] text-white",children:"Chargement..."}):!x||x.role!=="Administrator"&&x.role!=="Moderator"?e.jsx("div",{className:"container mx-auto p-4 pt-[100px] text-white",children:e.jsxs("div",{className:"bg-red-500 p-4 rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold mb-2",children:"Accès refusé"}),e.jsx("p",{children:"Vous n'avez pas les permissions nécessaires pour accéder à cette page."}),e.jsx("button",{className:"mt-4 bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-200",onClick:()=>window.location.href="/login",children:"Se connecter"})]})}):v?e.jsx("div",{className:"container mx-auto p-4 pt-[100px] text-white",children:e.jsxs("div",{className:"bg-red-500 p-4 rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold mb-2",children:"Erreur d'authentification"}),e.jsx("p",{children:v}),e.jsx("button",{className:"mt-4 bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-200",onClick:()=>window.location.href="/login",children:"Se connecter"})]})}):e.jsxs("div",{className:"container mx-auto p-4 pt-[100px]",children:[e.jsx("h1",{className:"text-4xl font-bold mb-6 text-white",children:"Panel de Modération"}),e.jsxs("div",{className:"flex border-b border-gray-700 mb-6",children:[e.jsx(f,{active:c==="moderation",onClick:()=>b("moderation"),count:r.length,children:"Posts en Modération"}),e.jsx(f,{active:c==="reports",onClick:()=>b("reports"),count:o.length,children:"Reports en attente"}),e.jsx(f,{active:c==="resolved",onClick:()=>b("resolved"),children:"Reports résolus"})]}),P]})};export{G as default};
