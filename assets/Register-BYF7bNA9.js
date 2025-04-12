import{r,j as e}from"./index-Cd-PITzk.js";import{b as F,L as U,r as $,y as w}from"./App-D9o3Zo5Q.js";/* empty css               */const O=()=>{const[a,j]=r.useState(""),[c,y]=r.useState(""),[u,v]=r.useState(""),[n,N]=r.useState({}),[i,k]=r.useState({length:!1,lowercase:!1,uppercase:!1,number:!1,specialChar:!1}),[d,L]=r.useState(null),[C,S]=r.useState(!1),[P,m]=r.useState(!1),[x,p]=r.useState(""),q=F(),z=t=>t.length<3?"Le nom d'utilisateur doit comporter au moins 3 caractères":t.length>24?"Le nom d'utilisateur ne peut pas dépasser 24 caractères":/^[a-zA-Z0-9]+$/.test(t)?null:"Le nom d'utilisateur ne peut contenir que des lettres et des chiffres",h=(t,o)=>{const s={length:t.length>=8,lowercase:/[a-z]/.test(t),uppercase:/[A-Z]/.test(t),number:/[0-9]/.test(t),specialChar:/[!@#$%^&*.]/.test(t)};return k(s),t===o?"Le mot de passe ne peut pas être identique au nom d'utilisateur":s.length?s.lowercase?s.uppercase?s.number?s.specialChar?null:"Le mot de passe doit contenir au moins un caractère spécial":"Le mot de passe doit contenir au moins un chiffre":"Le mot de passe doit contenir au moins une lettre majuscule":"Le mot de passe doit contenir au moins une lettre minuscule":"Le mot de passe doit comporter au moins 8 caractères"},E=async t=>{var f,b;t.preventDefault();const o=z(a),s=h(c,a),g=c!==u?"Les mots de passe ne correspondent pas":null;if(o||s||g){N({username:o,password:s,confirmPassword:g}),p("Veuillez corriger les erreurs ci-dessous.");return}m(!0);const V=new Promise(l=>setTimeout(l,2e3));try{const l=await $(a,c);await V,L(l),S(!0),w.success("Inscription réussie ! Veuillez sauvegarder votre token.")}catch(l){p(l.response.data.error),w.error(((b=(f=l.response)==null?void 0:f.data)==null?void 0:b.error)||"Erreur lors de l'inscription")}finally{m(!1)}},R=()=>{navigator.clipboard.writeText(d.resetToken),alert("Le token de réinitialisation a été copié dans le presse-papiers")},T=()=>{const t=document.createElement("a"),o=new Blob([d.resetToken],{type:"text/plain"});t.href=URL.createObjectURL(o),t.download="resetToken.txt",document.body.appendChild(t),t.click()},A=()=>{q(`/login?username=${a}`)};return e.jsx("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0",children:e.jsx("div",{className:"w-full bg-[#1f2937] rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0",children:e.jsx("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:C?e.jsxs("div",{children:[e.jsxs("h1",{className:"text-xl font-bold leading-tight tracking-tight md:text-2xl text-white",children:["Bienvenue, ",a,"!"]}),e.jsx("p",{className:"text-white mt-4",children:"Veuillez sauvegarder votre token de réinitialisation :"}),e.jsx("input",{type:"text",value:d.resetToken,readOnly:!0,className:"bg-gray-800 border border-gray-600 text-white rounded-lg block w-full p-2.5 mt-2 break-all"}),e.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Ce token sert à réinitialiser votre mot de passe"}),e.jsx("button",{onClick:R,className:"mt-4 text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2.5 text-center cursor-pointer",children:"Copier dans le presse-papiers"}),e.jsx("button",{onClick:T,className:"mt-4 ml-2 text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer",children:"Télécharger en .txt"}),e.jsx("button",{onClick:A,className:"block text-center bg-white hover:bg-gray-300 rounded-lg text-[#ed3f5e] mt-4 py-2.5 w-full",children:"Se connecter"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight md:text-2xl text-white",children:"Créez votre compte"}),e.jsxs("form",{className:"space-y-4 md:space-y-6",onSubmit:E,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"username",className:"block mb-2 text-sm font-medium text-white",children:"Votre nom d'utilisateur"}),e.jsx("input",{type:"text",name:"username",id:"username",className:"bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:!0,value:a,onChange:t=>j(t.target.value),maxLength:"24"}),n.username&&e.jsx("p",{className:"text-red-500 text-sm",children:n.username}),x&&e.jsx("div",{className:"text-sm font-medium text-red-500",children:x})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-white",children:"Mot de passe"}),e.jsx("input",{type:"password",name:"password",id:"password",className:"bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:!0,value:c,onChange:t=>{y(t.target.value),h(t.target.value,a)}}),n.password&&e.jsx("p",{className:"text-red-500 text-sm",children:n.password}),e.jsxs("ul",{className:"text-sm text-gray-400 mt-2",children:[e.jsx("li",{className:i.length?"text-green-500":"",children:"Au moins 8 caractères"}),e.jsx("li",{className:i.lowercase?"text-green-500":"",children:"Au moins une lettre minuscule"}),e.jsx("li",{className:i.uppercase?"text-green-500":"",children:"Au moins une lettre majuscule"}),e.jsx("li",{className:i.number?"text-green-500":"",children:"Au moins un chiffre"}),e.jsx("li",{className:i.specialChar?"text-green-500":"",children:"Au moins un caractère spécial"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"confirmPassword",className:"block mb-2 text-sm font-medium text-white",children:"Confirmez le mot de passe"}),e.jsx("input",{type:"password",name:"confirmPassword",id:"confirmPassword",className:"bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:!0,value:u,onChange:t=>v(t.target.value)}),n.confirmPassword&&e.jsx("p",{className:"text-red-500 text-sm",children:n.confirmPassword})]}),e.jsx("button",{type:"submit",className:"w-full text-white bg-[#e11d48] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#be123c] cursor-pointer",children:P?e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("div",{className:"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6"})}):"S'inscrire"}),e.jsxs("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:["Vous avez déjà un compte ? ",e.jsx(U,{to:"/login",className:"font-medium hover:underline text-[#ed3f5e]",children:"Se connecter"})]})]})]})})})})};export{O as default};
