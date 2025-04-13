import{r as i,j as e}from"./index.IbELLZCT.js";import{G as F,m as _,n as G,L as $,o as M,y as n,p as T}from"./App.TSAX3wbY.js";function H(r){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 480a16 16 0 0 1-16-16V68.13a24 24 0 0 1 11.9-20.72C88 40.38 112.38 32 160 32c37.21 0 78.83 14.71 115.55 27.68C305.12 70.13 333.05 80 352 80a183.84 183.84 0 0 0 71-14.5 18 18 0 0 1 25 16.58v219.36a20 20 0 0 1-12 18.31c-8.71 3.81-40.51 16.25-84 16.25-24.14 0-54.38-7.14-86.39-14.71C229.63 312.79 192.43 304 160 304c-36.87 0-55.74 5.58-64 9.11V464a16 16 0 0 1-16 16z"},child:[]}]})(r)}const K=({id:r,image:A,link:h,title:m,genres:E,username:u,className:P,user:o,onDelete:p,createPost:R=!1,reportStatus:t=null,isPending:g=!1,isRejected:c=!1,reason:b=null,isReported:j=!1,isPostDeleted:x=!1})=>{const[V,N]=i.useState(!0),[C,f]=i.useState(!1),[a,z]=i.useState(""),[v,w]=i.useState(""),[d,L]=i.useState(!1),[S,k]=i.useState(!1),[q,B]=i.useState(!1),D={"Le lien ne fonctionne pas":1,"Contenu inapproprié":2,"Non conforme aux règles du site":3,Autre:4};return V?e.jsx("div",{className:`relative ${P||""}`,children:e.jsxs("div",{className:"card",children:[e.jsx("img",{src:A,alt:m,loading:"eager",decoding:"async",onLoad:()=>B(!0),className:"absolute inset-0 w-full h-full object-cover z-0",width:"300",height:"450",style:{opacity:q?1:0}}),t&&e.jsx("div",{className:`absolute top-2 right-2 z-10 px-2 py-1 rounded-full text-xs font-medium text-white
                        `+(t==="pending"?"bg-yellow-500":t==="accepted"?"bg-green-500":t==="rejected"?"bg-red-500":"bg-gray-500"),children:t==="pending"?"En attente":t==="accepted"?"Conservé":t==="rejected"?"Supprimé":t}),g&&e.jsx("div",{className:"absolute top-2 right-2 z-10 px-2 py-1 rounded-full text-xs font-medium text-white bg-yellow-500",children:"En attente de modération"}),c&&e.jsx("div",{className:"absolute top-2 right-2 z-10 px-2 py-1 rounded-full text-xs font-medium text-white bg-red-500",children:"Rejeté"}),(c||t&&t!=="pending"||x)&&b&&e.jsx("div",{className:"absolute top-2 left-2 z-10 bg-gray-800 bg-opacity-80 rounded-full p-1 cursor-pointer",onClick:()=>k(!S),children:e.jsx(_,{className:"text-white text-lg"})}),S&&b&&e.jsx("div",{className:"absolute inset-0 z-20 bg-gray-900 bg-opacity-95 flex items-center justify-center p-4",children:e.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg max-w-md w-full",children:[e.jsx("h3",{className:"text-white font-bold text-lg mb-2",children:"Raison :"}),e.jsx("p",{className:"text-white text-sm mb-4",children:b}),e.jsx("button",{onClick:()=>k(!1),className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full",children:"Fermer"})]})}),(o==null?void 0:o.username)===u&&!R&&!g&&!c&&e.jsx("div",{onClick:async()=>{if(window.confirm("Are you sure you want to delete this post?"))try{await M(r),n.success("Post deleted successfully"),N(!1),p&&p(r)}catch(s){n.error(s.message||"Failed to delete post")}},className:"card-delete",children:e.jsx("button",{className:"text-white",children:e.jsx(G,{size:20})})}),(o==null?void 0:o.username)!==u&&!g&&!c&&(!j||t&&t!=="pending")&&e.jsx("div",{onClick:()=>f(!C),className:"card-report",children:e.jsx("button",{className:"text-white",children:e.jsx(H,{size:22})})}),!c&&!j&&!x&&e.jsx("a",{href:h,target:"_blank",rel:"noreferrer",className:"absolute inset-0 z-1"}),e.jsx("h2",{className:"w-max z-10 relative",children:c||j||x?e.jsx("span",{children:m}):e.jsx("a",{href:h,target:"_blank",rel:"noreferrer",children:m})}),e.jsx("div",{className:"flex flex-wrap gap-2 z-10 w-full card-genres relative",children:E.map((s,l)=>e.jsx($,{to:`/search?g=${s}`,children:e.jsx("div",{className:s.toLowerCase()+" tag h-min",children:s})},l))}),e.jsx("p",{className:"w-max z-10 relative",children:x?`By ${u}`:e.jsxs($,{to:`/search?u=${u}`,children:["By ",u]})}),C&&e.jsxs("div",{className:"flex flex-col justify-between absolute top-0 right-0 bg-gray-800 text-white rounded shadow-lg p-4 w-full h-full z-10",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-2",children:"Signaler ce post"}),e.jsx("p",{className:"mb-2",children:"Sélectionner une raison :"}),e.jsxs("select",{value:a,onChange:s=>z(s.target.value),className:"w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-2 mb-2",disabled:d,children:[e.jsx("option",{value:"",disabled:!0,children:"Choisir une raison"}),e.jsx("option",{value:"Le lien ne fonctionne pas",children:"Le lien ne fonctionne pas"}),e.jsx("option",{value:"Contenu inapproprié",children:"Contenu inapproprié"}),e.jsx("option",{value:"Non conforme aux règles du site",children:"Non conforme aux règles du site"}),e.jsx("option",{value:"Autre",children:"Autre"})]}),a==="Le lien ne fonctionne pas"&&e.jsxs("div",{className:"mb-2 text-yellow-300 text-sm",children:[e.jsx("p",{children:"Cette option vérifiera automatiquement si le lien fonctionne."}),e.jsx("p",{children:"Si le lien est inaccessible, le post sera supprimé automatiquement."})]}),a!=="Le lien ne fonctionne pas"&&e.jsx("textarea",{placeholder:"Commentaire supplémentaire (optionnel)",value:v,onChange:s=>w(s.target.value),className:"w-full h-26 bg-gray-700 text-white border border-gray-600 rounded-lg p-2 mb-2 resize-none",disabled:d}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx("button",{onClick:async()=>{if(a)try{L(!0);const s=D[a]||null;let l;s===1?(l=a,w("")):l=v?`${a} - Commentaire: ${v}`:a;const y=await T(r,m,h,l,s);s===1?y.accessible===!1?(n.info("Le lien n'est plus accessible. Le post a été supprimé automatiquement.",{icon:"🔗❌"}),N(!1),p&&setTimeout(()=>{p(r)},100)):y.accessible===!0&&n.error("Le lien est actuellement accessible. Le post n'a pas été supprimé."):n.success(y.message||"Signalement envoyé avec succès"),f(!1),z(""),w("")}catch(s){const l=s.message||"Erreur lors de l'envoi du signalement";l.toLowerCase().includes("already reported")?n.info("Vous avez déjà signalé ce post"):n.error(l)}finally{L(!1)}else n.error("Veuillez sélectionner une raison pour le signalement.")},className:(d?"bg-gray-500":"bg-green-500 hover:bg-green-600")+" text-white px-3 py-1 rounded-lg",disabled:d,children:d?"Envoi...":"Envoyer"}),e.jsx("button",{onClick:()=>f(!1),className:"bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg",disabled:d,children:"Annuler"})]})]})]})}):null};export{K as C};
