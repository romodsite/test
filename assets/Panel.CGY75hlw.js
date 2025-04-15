import{r as e,j as s,R as r}from"./index.BAl22FBm.js";import{u as a,m as t,y as l,z as n,A as o,B as c,C as i,D as d}from"./App.R-CNmUno.js";import"./vendor.BHl_RpiB.js";const m=r.memo((({active:e,onClick:r,children:a,count:t})=>s.jsxs("button",{className:"py-2 px-4 mr-2 font-medium "+(e?"bg-blue-600 text-white rounded-t-lg":"text-gray-300 hover:bg-gray-700 hover:text-white rounded-t-lg"),onClick:r,children:[a,void 0!==t&&t>0&&` (${t})`]}))),p=r.memo((({post:e,handleApprove:r,handleReject:a,reason:t,setReason:l})=>s.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg shadow-md w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]",children:[s.jsx("h2",{className:"text-xl font-semibold mb-2",children:e.title}),s.jsx("img",{src:e.image,alt:e.title,className:"w-full h-80 object-cover mb-2 rounded"}),s.jsxs("p",{className:"mb-2",children:[s.jsx("span",{className:"text-xl font-bold",children:"Lien"})," ",s.jsx("br",{}),s.jsx("a",{className:"underline text-blue-400",href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.link})]}),s.jsxs("p",{className:"mb-2",children:[s.jsx("span",{className:"text-xl font-bold",children:"Genres:"})," ",s.jsx("br",{})," ",e.genres.join(", ")]}),s.jsxs("p",{className:"mb-2",children:[s.jsx("span",{className:"text-xl font-bold",children:"Utilisateur:"})," ",s.jsx("br",{})," ",e.username]}),s.jsx("div",{className:"flex gap-2 mb-2",children:s.jsx("button",{className:"bg-green-500 text-white w-full py-2 rounded hover:bg-green-600",onClick:()=>r(e.id),children:"Approuver"})}),s.jsx("input",{type:"text",placeholder:"Raison du rejet",value:t,onChange:e=>l(e.target.value),className:"w-full p-2 rounded bg-gray-700 text-white mb-2"}),s.jsx("button",{className:"bg-red-500 text-white w-full py-2 rounded hover:bg-red-600",onClick:()=>a(e.id),children:"Rejeter"})]}))),x=r.memo((({report:e,handleResolveReport:r,reason:a,setReason:t})=>s.jsx("div",{className:"bg-gray-800 p-4 rounded-lg shadow-md",children:s.jsx("div",{className:"flex flex-col md:flex-row gap-4",children:s.jsxs("div",{className:"flex-grow",children:[s.jsxs("h2",{className:"text-xl font-semibold mb-2",children:[e.postTitle,s.jsxs("span",{className:"ml-2 bg-red-500 text-white text-sm px-2 py-0.5 rounded-full",children:[e.count," ",e.count>1?"reports":"report"]})]}),s.jsxs("p",{className:"mb-2",children:[s.jsx("span",{className:"font-bold",children:"Posté par:"})," ",e.postOwnerUsername]}),s.jsxs("p",{className:"mb-2",children:[s.jsx("span",{className:"font-bold",children:"Lien:"})," ",s.jsx("a",{className:"underline text-blue-400",href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.link})]}),s.jsxs("p",{className:"mb-2",children:[s.jsx("span",{className:"font-bold",children:"Signalé par:"})," ",e.reporterUsernames.join(", ")]}),s.jsxs("div",{className:"mb-2",children:[s.jsx("span",{className:"font-bold",children:"Raison principale:"}),s.jsx("p",{className:"mt-1 text-yellow-300",children:e.first_report_reason}),e.first_report_justification&&s.jsxs("div",{className:"mt-2",children:[s.jsx("span",{className:"font-bold",children:"Justification:"}),s.jsx("p",{className:"mt-1 text-gray-300 bg-gray-700 p-2 rounded",children:e.first_report_justification})]})]}),s.jsxs("div",{className:"mb-2",children:[s.jsx("span",{className:"font-bold",children:"Autres raisons signalées:"}),s.jsx("ul",{className:"list-disc pl-5 mt-1",children:e.reasons.map(((e,r)=>s.jsx("li",{children:e},r)))})]}),s.jsxs("p",{className:"mb-4",children:[s.jsx("span",{className:"font-bold",children:"Date:"})," ",new Date(e.date_creation).toLocaleString()]}),s.jsx("input",{type:"text",placeholder:"Raison de la décision (obligatoire)",value:a,onChange:e=>t(e.target.value),className:"w-full p-2 rounded bg-gray-700 text-white mb-2"}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{className:"bg-green-500 text-white flex-1 py-2 rounded hover:bg-green-600",onClick:()=>r(e.id,!0),children:"Garder le post"}),s.jsx("button",{className:"bg-red-500 text-white flex-1 py-2 rounded hover:bg-red-600",onClick:()=>r(e.id,!1),children:"Supprimer le post"})]})]})})}))),h=()=>{const[r,h]=e.useState([]),[u,j]=e.useState([]),[g,b]=e.useState(""),[N,f]=e.useState((()=>localStorage.getItem("panelActiveTab")||"moderation")),[v,w]=e.useState([]),{user:y,loading:k,error:C}=a(),R=e.useCallback((async()=>{try{const e=await t();h(e)}catch(e){l.error(e.message||"Erreur lors du chargement des posts en modération.")}}),[]),S=e.useCallback((async()=>{try{const e=await n();j(e)}catch(e){l.error(e.message||"Erreur lors du chargement des reports.")}}),[]),A=e.useCallback((async()=>{try{const e=await o();w(e)}catch(e){l.error(e.message||"Erreur lors du chargement des reports résolus.")}}),[]),_=e.useCallback((async e=>{try{await c(e),l.success("Post approuvé avec succès !"),R()}catch(s){l.error(s.message||"Erreur lors de l'approbation du post.")}}),[R]),E=e.useCallback((async e=>{if(g)try{await i(e,g),l.success("Post rejeté avec succès."),b(""),R()}catch(s){l.error(s.message||"Erreur lors du rejet du post.")}else l.error("Veuillez fournir une raison pour le rejet.")}),[g,R]),P=e.useCallback((async(e,s)=>{if(g)try{await d(e,s,g),l.success(s?"Report résolu, le post reste sur le site.":"Report résolu, le post a été supprimé."),b(""),S(),A()}catch(r){l.error(r.message||"Erreur lors de la résolution du report.")}else l.error(s?"Veuillez fournir une raison pour conserver le post.":"Veuillez fournir une raison pour supprimer le post.")}),[g,S,A]),z=e.useCallback((e=>{f(e),localStorage.setItem("panelActiveTab",e)}),[]);e.useEffect((()=>{if(y&&("Administrator"===y.role||"Moderator"===y.role)){"moderation"===N?R():"reports"===N?S():"resolved"===N&&A();const e=setInterval((()=>{"moderation"===N?R():"reports"===N?S():"resolved"===N&&A()}),3e4);return()=>clearInterval(e)}}),[y,N,R,S,A]);const D=e.useMemo((()=>"moderation"===N?s.jsx("div",{className:"flex flex-wrap gap-4 text-white",children:0===r.length?s.jsx("p",{className:"text-gray-300",children:"Aucun post en attente de modération."}):r.map((e=>s.jsx(p,{post:e,handleApprove:_,handleReject:E,reason:g,setReason:b},e.id)))}):"reports"===N?s.jsx("div",{className:"text-white",children:0===u.length?s.jsx("p",{className:"text-gray-300",children:"Aucun report à traiter."}):s.jsx("div",{className:"grid gap-4",children:u.map((e=>s.jsx(x,{report:e,handleResolveReport:P,reason:g,setReason:b},e.id)))})}):s.jsx("div",{className:"text-white",children:0===v.length?s.jsx("p",{className:"text-gray-300",children:"Aucun report résolu à afficher."}):s.jsx("div",{className:"grid gap-4",children:v.map((e=>s.jsx("div",{className:"bg-gray-800 p-4 rounded-lg shadow-md",children:s.jsx("div",{className:"flex flex-col md:flex-row gap-4",children:s.jsxs("div",{className:"flex-grow",children:[s.jsxs("h2",{className:"text-xl font-semibold mb-2",children:[e.postTitle,s.jsx("span",{className:`ml-2 ${"accepted"===e.status?"bg-green-500":"bg-red-500"} text-white text-sm px-2 py-0.5 rounded-full`,children:"accepted"===e.status?"Conservé":"Supprimé"})]}),s.jsxs("p",{className:"mb-2",children:[s.jsx("span",{className:"font-bold",children:"Posté par:"})," ",e.postOwnerUsername]}),s.jsxs("p",{className:"mb-2",children:[s.jsx("span",{className:"font-bold",children:"Signalé par:"})," ",e.reporterUsernames.join(", ")]}),s.jsxs("div",{className:"mb-2",children:[s.jsx("span",{className:"font-bold",children:"Raisons:"}),s.jsx("ul",{className:"list-disc pl-5 mt-1",children:e.reasons.map(((e,r)=>s.jsx("li",{children:e},r)))})]}),s.jsxs("p",{className:"mb-2",children:[s.jsx("span",{className:"font-bold",children:"Date:"})," ",new Date(e.date_creation).toLocaleString()]})]})})},e.id)))})})),[N,r,u,v,g,_,E,P]);return k?s.jsx("div",{className:"container mx-auto p-4 pt-[100px] text-white",children:"Chargement..."}):!y||"Administrator"!==y.role&&"Moderator"!==y.role?s.jsx("div",{className:"container mx-auto p-4 pt-[100px] text-white",children:s.jsxs("div",{className:"bg-red-500 p-4 rounded-lg",children:[s.jsx("h2",{className:"text-xl font-bold mb-2",children:"Accès refusé"}),s.jsx("p",{children:"Vous n'avez pas les permissions nécessaires pour accéder à cette page."}),s.jsx("button",{className:"mt-4 bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-200",onClick:()=>window.location.href="/login",children:"Se connecter"})]})}):C?s.jsx("div",{className:"container mx-auto p-4 pt-[100px] text-white",children:s.jsxs("div",{className:"bg-red-500 p-4 rounded-lg",children:[s.jsx("h2",{className:"text-xl font-bold mb-2",children:"Erreur d'authentification"}),s.jsx("p",{children:C}),s.jsx("button",{className:"mt-4 bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-200",onClick:()=>window.location.href="/login",children:"Se connecter"})]})}):s.jsxs("div",{className:"container mx-auto p-4 pt-[100px]",children:[s.jsx("h1",{className:"text-4xl font-bold mb-6 text-white",children:"Panel de Modération"}),s.jsxs("div",{className:"flex border-b border-gray-700 mb-6",children:[s.jsx(m,{active:"moderation"===N,onClick:()=>z("moderation"),count:r.length,children:"Posts en Modération"}),s.jsx(m,{active:"reports"===N,onClick:()=>z("reports"),count:u.length,children:"Reports en attente"}),s.jsx(m,{active:"resolved"===N,onClick:()=>z("resolved"),children:"Reports résolus"})]}),D]})};export{h as default};
