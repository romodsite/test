import{j as e}from"./index.pornflix.js";import{r as t,e as r,d as n,u as s}from"./router.pornflix.js";import{U as a,F as i,e as l,y as o}from"./App.pornflix.js";import{C as d}from"./Card.pornflix.js";import"./player.pornflix.js";import"./vendor.pornflix.js";const m=["","Exclusive","Community","Meme","Amateur","Asian","BDSM","Big Ass","Big Tits","Blonde","Brunette","Creampie","Ebony","Hardcore","Interracial","Latina","MILF","POV","Public","Redhead","Teen","Threesome"],u=({searchQuery:u})=>{const{user:c}=t.useContext(a),[p,x]=r(),h=n(),g=s(),[f,y]=t.useState([]),[w,j]=t.useState(!1),[b,v]=t.useState(null),[N,S]=t.useState(!1),[A,C]=t.useState((()=>h.query||p.get("q")||u||"")),[L,q]=t.useState((()=>h.genre||p.get("g")||"")),[I,E]=t.useState((()=>h.username||p.get("u")||"")),[B,R]=t.useState(null),[T,U]=t.useState(640>window.innerWidth);return t.useEffect((()=>{const e=()=>{U(640>window.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),t.useEffect((()=>{const e=h.query||p.get("q")||u||"",t=h.genre||p.get("g")||"",r=h.username||p.get("u")||"";C(e),q(t),E(r),(async(e=null)=>{const t=(null==e?void 0:e.query)??A,r=(null==e?void 0:e.genre)??L,n=(null==e?void 0:e.username)??I;j(!0),v(null);try{S(!(t||r||n));const e=await l(20,t,n,r,null);R({timestamp:(new Date).toLocaleTimeString(),count:Array.isArray(e)?e.length:"non-array",firstItem:Array.isArray(e)&&e.length>0?e[0].title:"none"}),y(Array.isArray(e)?e:[])}catch(s){v(s.message||"An error occurred"),o.error("Search error: "+(s.message||"An unknown error occurred")),y([])}finally{j(!1)}})({query:e,genre:t,username:r})}),[h,p,u]),e.jsxs("div",{className:"p-8 pt-[100px]",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4 text-white",children:A?`Results for "${A}"`:I?"Posts by "+I:L?"Genre: "+L:N?"Latest published posts":"Search"}),e.jsx("form",{onSubmit(e){e.preventDefault();const t=((e,t,r)=>{const n=[];return t&&n.push("genre/"+encodeURIComponent(t)),r&&n.push("user/"+encodeURIComponent(r)),e&&n.push("query/"+encodeURIComponent(e)),n.length>0?"/search/"+n.join("/"):"/search"})(A,L,I);g(t)},className:"mb-6",children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[e.jsxs("div",{className:"relative flex-grow",children:[e.jsx("input",{type:"text",placeholder:"Search...",value:A,onChange:e=>C(e.target.value),className:"w-full px-4 py-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"}),e.jsx(i,{className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-2 md:w-auto w-full",children:[e.jsxs("select",{value:L,onChange:e=>q(e.target.value),className:"px-4 py-3 rounded bg-gray-800 text-white md:w-40 w-full appearance-none cursor-pointer",children:[e.jsx("option",{value:"",children:"All genres"}),m.filter((e=>""!==e)).map((t=>e.jsx("option",{value:t,children:t},t)))]}),e.jsx("input",{type:"text",placeholder:"Username",value:I,onChange:e=>E(e.target.value),className:"px-4 py-3 rounded bg-gray-800 text-white md:w-40 w-full"}),e.jsx("button",{type:"submit",className:"px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition w-full md:w-auto",children:"Search"})]})]})}),b&&e.jsx("div",{className:"my-4 p-4 bg-red-500 bg-opacity-20 border-l-4 border-red-500 text-white rounded",children:b}),w&&e.jsxs("div",{className:"flex items-center justify-center my-20",children:[e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500"}),e.jsx("span",{className:"ml-3 text-white text-lg",children:"Loading..."})]}),!w&&e.jsx(e.Fragment,{children:0===f.length?e.jsxs("div",{className:"text-center text-white my-20",children:[e.jsx("p",{className:"text-xl font-medium",children:"No results found"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Try with different search terms"})]}):e.jsx("div",{className:"flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start",children:f.map((t=>e.jsx(d,{id:t.id,image:t.image,link:t.link,title:t.title,genres:t.genres||[],username:t.username,user:c},t.id)))})}),B&&e.jsxs("div",{className:"mt-8 text-xs text-gray-400",children:[e.jsxs("p",{children:["Last search: ",B.timestamp]}),e.jsxs("p",{children:["Number of results: ",B.count]}),e.jsxs("p",{children:["First result: ",B.firstItem]})]}),e.jsx("style",{children:"\n                /* On mobile, reduce card size */\n                @media (max-width: 640px) {\n                    .card {\n                        width: 150px !important;\n                        height: 230px !important;\n                        min-width: 150px !important;\n                        min-height: 230px !important;\n                    }\n                }\n                \n                /* On tablet, intermediate size */\n                @media (min-width: 641px) and (max-width: 768px) {\n                    .card {\n                        width: 190px !important;\n                        height: 260px !important;\n                        min-width: 190px !important;\n                        min-height: 260px !important;\n                    }\n                }\n                \n                /* Default style uses standard dimensions of Card component */\n            "})]})};export{u as default};
