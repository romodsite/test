import{j as e}from"./index.xDGvdcGR.js";import{r as s,R as r}from"./router.BuKbULCr.js";import{u as a,k as t,y as l,x as n,z as o,A as c,B as i,C as d}from"./App.CWrh0A6d.js";import"./player.BR9K4l7b.js";import"./vendor.BBo61Skz.js";const m=r.memo((({active:s,onClick:r,children:a,count:t})=>e.jsxs("button",{className:"py-2 px-4 mr-2 font-medium "+(s?"bg-blue-600 text-white rounded-t-lg":"text-gray-300 hover:bg-gray-700 hover:text-white rounded-t-lg"),onClick:r,children:[a,void 0!==t&&t>0&&` (${t})`]}))),p=r.memo((({post:s,handleApprove:r,handleReject:a,reason:t,setReason:l})=>e.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg shadow-md w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]",children:[e.jsx("h2",{className:"text-xl font-semibold mb-2",children:s.title}),e.jsx("img",{src:s.image,alt:s.title,className:"w-full h-80 object-cover mb-2 rounded"}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"text-xl font-bold",children:"Lien"})," ",e.jsx("br",{}),e.jsx("a",{className:"underline text-blue-400",href:s.link,target:"_blank",rel:"noopener noreferrer",children:s.link})]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"text-xl font-bold",children:"Genres:"})," ",e.jsx("br",{})," ",s.genres.join(", ")]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"text-xl font-bold",children:"Utilisateur:"})," ",e.jsx("br",{})," ",s.username]}),e.jsx("div",{className:"flex gap-2 mb-2",children:e.jsx("button",{className:"bg-green-500 text-white w-full py-2 rounded hover:bg-green-600",onClick:()=>r(s.id),children:"Approuver"})}),e.jsx("input",{type:"text",placeholder:"Raison du rejet",value:t,onChange:e=>l(e.target.value),className:"w-full p-2 rounded bg-gray-700 text-white mb-2"}),e.jsx("button",{className:"bg-red-500 text-white w-full py-2 rounded hover:bg-red-600",onClick:()=>a(s.id),children:"Rejeter"})]}))),x=r.memo((({report:s,handleResolveReport:r,reason:a,setReason:t})=>e.jsx("div",{className:"bg-gray-800 p-4 rounded-lg shadow-md",children:e.jsx("div",{className:"flex flex-col md:flex-row gap-4",children:e.jsxs("div",{className:"flex-grow",children:[e.jsxs("h2",{className:"text-xl font-semibold mb-2",children:[s.postTitle,e.jsxs("span",{className:"ml-2 bg-red-500 text-white text-sm px-2 py-0.5 rounded-full",children:[s.count," ",s.count>1?"reports":"report"]})]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Posté par:"})," ",s.postOwnerUsername]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Lien:"})," ",e.jsx("a",{className:"underline text-blue-400",href:s.link,target:"_blank",rel:"noopener noreferrer",children:s.link})]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Signalé par:"})," ",s.reporterUsernames.join(", ")]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Raison principale:"}),e.jsx("p",{className:"mt-1 text-yellow-300",children:s.first_report_reason}),s.first_report_justification&&e.jsxs("div",{className:"mt-2",children:[e.jsx("span",{className:"font-bold",children:"Justification:"}),e.jsx("p",{className:"mt-1 text-gray-300 bg-gray-700 p-2 rounded",children:s.first_report_justification})]})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Autres raisons signalées:"}),e.jsx("ul",{className:"list-disc pl-5 mt-1",children:s.reasons.map(((s,r)=>e.jsx("li",{children:s},r)))})]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("span",{className:"font-bold",children:"Date:"})," ",new Date(s.date_creation).toLocaleString()]}),e.jsx("input",{type:"text",placeholder:"Raison de la décision (obligatoire)",value:a,onChange:e=>t(e.target.value),className:"w-full p-2 rounded bg-gray-700 text-white mb-2"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"bg-green-500 text-white flex-1 py-2 rounded hover:bg-green-600",onClick:()=>r(s.id,!0),children:"Garder le post"}),e.jsx("button",{className:"bg-red-500 text-white flex-1 py-2 rounded hover:bg-red-600",onClick:()=>r(s.id,!1),children:"Supprimer le post"})]})]})})}))),h=()=>{const[r,h]=s.useState([]),[u,j]=s.useState([]),[g,b]=s.useState(""),[N,f]=s.useState((()=>localStorage.getItem("panelActiveTab")||"moderation")),[v,w]=s.useState([]),{user:y,loading:k,error:C}=a(),R=s.useCallback((async()=>{try{const e=await t();h(e)}catch(e){l.error(e.message||"Erreur lors du chargement des posts en modération.")}}),[]),S=s.useCallback((async()=>{try{const e=await n();j(e)}catch(e){l.error(e.message||"Erreur lors du chargement des reports.")}}),[]),A=s.useCallback((async()=>{try{const e=await o();w(e)}catch(e){l.error(e.message||"Erreur lors du chargement des reports résolus.")}}),[]),_=s.useCallback((async e=>{try{await c(e),l.success("Post approuvé avec succès !"),R()}catch(s){l.error(s.message||"Erreur lors de l'approbation du post.")}}),[R]),E=s.useCallback((async e=>{if(g)try{await i(e,g),l.success("Post rejeté avec succès."),b(""),R()}catch(s){l.error(s.message||"Erreur lors du rejet du post.")}else l.error("Veuillez fournir une raison pour le rejet.")}),[g,R]),P=s.useCallback((async(e,s)=>{if(g)try{await d(e,s,g),l.success(s?"Report résolu, le post reste sur le site.":"Report résolu, le post a été supprimé."),b(""),S(),A()}catch(r){l.error(r.message||"Erreur lors de la résolution du report.")}else l.error(s?"Veuillez fournir une raison pour conserver le post.":"Veuillez fournir une raison pour supprimer le post.")}),[g,S,A]),z=s.useCallback((e=>{f(e),localStorage.setItem("panelActiveTab",e)}),[]);s.useEffect((()=>{if(y&&("Administrator"===y.role||"Moderator"===y.role)){"moderation"===N?R():"reports"===N?S():"resolved"===N&&A();const e=setInterval((()=>{"moderation"===N?R():"reports"===N?S():"resolved"===N&&A()}),3e4);return()=>clearInterval(e)}}),[y,N,R,S,A]);const M=s.useMemo((()=>"moderation"===N?e.jsx("div",{className:"flex flex-wrap gap-4 text-white",children:0===r.length?e.jsx("p",{className:"text-gray-300",children:"Aucun post en attente de modération."}):r.map((s=>e.jsx(p,{post:s,handleApprove:_,handleReject:E,reason:g,setReason:b},s.id)))}):"reports"===N?e.jsx("div",{className:"text-white",children:0===u.length?e.jsx("p",{className:"text-gray-300",children:"Aucun report à traiter."}):e.jsx("div",{className:"grid gap-4",children:u.map((s=>e.jsx(x,{report:s,handleResolveReport:P,reason:g,setReason:b},s.id)))})}):e.jsx("div",{className:"text-white",children:0===v.length?e.jsx("p",{className:"text-gray-300",children:"Aucun report résolu à afficher."}):e.jsx("div",{className:"grid gap-4",children:v.map((s=>e.jsx("div",{className:"bg-gray-800 p-4 rounded-lg shadow-md",children:e.jsx("div",{className:"flex flex-col md:flex-row gap-4",children:e.jsxs("div",{className:"flex-grow",children:[e.jsxs("h2",{className:"text-xl font-semibold mb-2",children:[s.postTitle,e.jsx("span",{className:`ml-2 ${"accepted"===s.status?"bg-green-500":"bg-red-500"} text-white text-sm px-2 py-0.5 rounded-full`,children:"accepted"===s.status?"Conservé":"Supprimé"})]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Posté par:"})," ",s.postOwnerUsername]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Signalé par:"})," ",s.reporterUsernames.join(", ")]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Raisons:"}),e.jsx("ul",{className:"list-disc pl-5 mt-1",children:s.reasons.map(((s,r)=>e.jsx("li",{children:s},r)))})]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Date:"})," ",new Date(s.date_creation).toLocaleString()]})]})})},s.id)))})})),[N,r,u,v,g,_,E,P]);return k?e.jsx("div",{className:"container mx-auto p-4 pt-[100px] text-white",children:"Chargement..."}):!y||"Administrator"!==y.role&&"Moderator"!==y.role?e.jsx("div",{className:"container mx-auto p-4 pt-[100px] text-white",children:e.jsxs("div",{className:"bg-red-500 p-4 rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold mb-2",children:"Accès refusé"}),e.jsx("p",{children:"Vous n'avez pas les permissions nécessaires pour accéder à cette page."}),e.jsx("button",{className:"mt-4 bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-200",onClick:()=>window.location.href="/login",children:"Se connecter"})]})}):C?e.jsx("div",{className:"container mx-auto p-4 pt-[100px] text-white",children:e.jsxs("div",{className:"bg-red-500 p-4 rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold mb-2",children:"Erreur d'authentification"}),e.jsx("p",{children:C}),e.jsx("button",{className:"mt-4 bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-200",onClick:()=>window.location.href="/login",children:"Se connecter"})]})}):e.jsxs("div",{className:"container mx-auto p-4 pt-[100px]",children:[e.jsx("h1",{className:"text-4xl font-bold mb-6 text-white",children:"Panel de Modération"}),e.jsxs("div",{className:"flex border-b border-gray-700 mb-6",children:[e.jsx(m,{active:"moderation"===N,onClick:()=>z("moderation"),count:r.length,children:"Posts en Modération"}),e.jsx(m,{active:"reports"===N,onClick:()=>z("reports"),count:u.length,children:"Reports en attente"}),e.jsx(m,{active:"resolved"===N,onClick:()=>z("resolved"),children:"Reports résolus"})]}),M]})};export{h as default};
