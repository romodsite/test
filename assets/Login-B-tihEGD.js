import{r,j as e}from"./index-D8fr86l7.js";import{u as f,L as c,l as g,y as m}from"./App-C8aaqOOE.js";/* empty css               */const j=()=>{const[a,o]=r.useState(""),[n,u]=r.useState(""),[x,l]=r.useState(!1),i=f();r.useEffect(()=>{const t=new URLSearchParams(i.search).get("username");t&&o(t)},[i]);const p=async s=>{var t,d;s.preventDefault(),l(!0);try{await g(a,n),m.success("Connexion réussie ! Bienvenue 👋"),window.location.href="/"}catch(h){m.error(((d=(t=h.response)==null?void 0:t.data)==null?void 0:d.error)||"Erreur lors de la connexion")}finally{l(!1)}};return e.jsx("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0",children:e.jsx("div",{className:"w-full bg-[#1f2937] rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0",children:e.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[e.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight md:text-2xl text-white",children:"Connectez-vous à votre compte"}),e.jsxs("form",{className:"space-y-4 md:space-y-6",action:"#",onSubmit:p,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"username",className:"block mb-2 text-sm font-medium text-white",children:"Votre nom d'utilisateur"}),e.jsx("input",{type:"text",name:"username",id:"username",className:"bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:!0,value:a,onChange:s=>o(s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-white",children:"Mot de passe"}),e.jsx("input",{type:"password",name:"password",id:"password",className:"bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:!0,value:n,onChange:s=>u(s.target.value)})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(c,{to:"/forgot-password",className:"text-sm font-medium hover:underline text-[#ed3f5e]",children:"Mot de passe oublié ?"})}),e.jsx("button",{type:"submit",className:"w-full text-white bg-[#e11d48] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#be123c] cursor-pointer",children:x?e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("div",{className:"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6"})}):"Se connecter"}),e.jsxs("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:["Vous n'avez pas encore de compte ? ",e.jsx(c,{to:"/register",className:"font-medium hover:underline text-[#ed3f5e]",children:"Inscrivez-vous"})]})]})]})})})};export{j as default};
