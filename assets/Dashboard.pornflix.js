import{j as e}from"./index.pornflix.js";import{r as t,L as s}from"./router.pornflix.js";import{U as a,j as r,k as l,m as n,n as i,y as d,o}from"./App.pornflix.js";import{C as c}from"./Card.pornflix.js";import"./player.pornflix.js";import"./vendor.pornflix.js";const x=()=>{const[x,p]=t.useState([]),[g,m]=t.useState([]),[h,u]=t.useState([]),[j,b]=t.useState([]),[f,w]=t.useState({page:1,totalPages:1,totalReports:0,limit:10}),[y,N]=t.useState(!0),{user:v}=t.useContext(a),[k,S]=t.useState((()=>localStorage.getItem("dashboardActiveTab")||"accepted"));t.useEffect((()=>{v&&P(k)}),[v,k]);const P=async e=>{N(!0);try{let t;"accepted"===e?(t=await r(10,null,v.username),p(t)):"pending"===e?(t=await l(v.username),m(t)):"rejected"===e?(t=await n(v.username),u(t)):"reported"===e&&(t=await i(f.page),t&&t.reports&&(b(t.reports),w({page:t.pagination.page,totalPages:t.pagination.totalPages,totalReports:t.pagination.totalReports,limit:t.pagination.limit||10})))}catch(t){d.error(t.message||"Error loading posts.")}finally{N(!1)}},C=e=>{S(e),localStorage.setItem("dashboardActiveTab",e),("accepted"===e&&0===x.length||"pending"===e&&0===g.length||"rejected"===e&&0===h.length||"reported"===e&&0===j.length)&&P(e)},R=e=>{1>e||e>f.totalPages||(w((t=>({...t,page:e}))),D(e))},D=async e=>{N(!0);try{const t=await i(e);t&&t.reports&&(b(t.reports),w({page:t.pagination.page,totalPages:t.pagination.totalPages,totalReports:t.pagination.totalReports,limit:t.pagination.limit||10}))}catch(t){d.error(t.message||"Error loading reported posts.")}finally{N(!1)}};return e.jsxs("div",{className:"container mx-auto p-4 pt-[100px] flex flex-col lg:flex-row",children:[e.jsxs("div",{className:"lg:fixed flex flex-col justify-between text-white mb-6 lg:w-1/4",children:[e.jsxs("div",{className:"flex flex-col items-center lg:items-start gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("img",{src:(null==v?void 0:v.pfp)?null==v?void 0:v.pfp:"https://i.pinimg.com/736x/e8/3c/db/e83cdbd70190f7f28de6d68c9e129dd7.jpg",alt:"Profile",className:"h-24 w-24 lg:h-30 lg:w-30 rounded-full"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-white",children:null==v?void 0:v.username}),e.jsx(s,{to:"/settings",className:"text-white text-xl",children:e.jsx(o,{})})]}),e.jsx("p",{className:"text-sm lg:text-lg font-medium text-gray-400",children:null==v?void 0:v.role})]})]}),(null==v?void 0:v.banned)?e.jsx("div",{className:" w-fit mt-6 bg-gray-500 text-center text-white px-4 py-2 rounded-lg hover:bg-gray-700",children:"Create new post"}):e.jsx(s,{to:"/dashboard/create-post",className:" w-fit mt-6 bg-blue-500 text-center text-white px-4 py-2 rounded-lg hover:bg-blue-700",children:"Create new post"})]}),e.jsxs("p",{className:"font-bold mt-4 text-center lg:text-left",children:["Registration date ",e.jsx("br",{})," ",e.jsx("span",{className:"font-medium text-gray-400",children:(null==v?void 0:v.dateCreation)?v.dateCreation:"N/A"})]}),e.jsxs("p",{className:"font-bold mt-4 text-center lg:text-left",children:["Account status ",e.jsx("br",{})," ",(null==v?void 0:v.banned)?e.jsx("span",{className:"text-red-600 font-medium",children:"Suspended"}):e.jsx("span",{className:"text-green-600 font-medium",children:"Active"})]})]}),e.jsxs("div",{className:"lg:pl-[384px] w-full",children:[e.jsxs("div",{className:"flex flex-wrap gap-4 text-white mb-4 justify-center lg:justify-start",children:[e.jsx("button",{onClick:()=>C("accepted"),className:"accepted"===k?"w-32 lg:w-40 border-2 py-2 bg-white text-black rounded block z-10":"w-32 lg:w-40 border-2 py-2 rounded cursor-pointer block z-10",children:"Accepted"}),e.jsx("button",{onClick:()=>C("pending"),className:"pending"===k?"w-32 lg:w-40 border-2 py-2 bg-white text-black rounded block z-10":"w-32 lg:w-40 border-2 py-2 rounded cursor-pointer block z-10",children:"Pending"}),e.jsx("button",{onClick:()=>C("rejected"),className:"rejected"===k?"w-32 lg:w-40 border-2 py-2 bg-white text-black rounded block z-10":"w-32 lg:w-40 border-2 py-2 rounded cursor-pointer block z-10",children:"Rejected"}),e.jsx("button",{onClick:()=>C("reported"),className:"reported"===k?"w-32 lg:w-40 border-2 py-2 bg-white text-black rounded block z-10":"w-32 lg:w-40 border-2 py-2 rounded cursor-pointer block z-10",children:"Reported"})]}),y?e.jsx("p",{className:"text-white text-center",children:"Loading..."}):e.jsxs("div",{children:["accepted"===k&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl lg:text-3xl font-bold mb-4 text-white text-center lg:text-left",children:"Your posts"}),e.jsx("div",{className:"flex flex-wrap gap-4 justify-center lg:justify-start",children:0===x.length?e.jsx("p",{className:"text-white",children:"You don't have any approved posts yet."}):x.map((t=>e.jsx(c,{id:t.id,image:t.image,link:t.link,title:t.title,genres:t.genres||[],username:t.username,user:v},t.id)))})]}),"pending"===k&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl lg:text-3xl font-bold mb-4 text-white text-center lg:text-left",children:"Posts being reviewed"}),e.jsx("div",{className:"flex flex-wrap gap-4 justify-center lg:justify-start",children:0===g.length?e.jsx("p",{className:"text-white",children:"You don't have any posts awaiting moderation."}):g.map((t=>e.jsx(c,{image:t.image,link:t.link,title:t.title,genres:t.genres||[],username:t.username,user:v,isPending:!0},t.id)))})]}),"rejected"===k&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl lg:text-3xl font-bold mb-4 text-white text-center lg:text-left",children:"Rejected posts"}),e.jsx("div",{className:"flex flex-wrap gap-4 justify-center lg:justify-start",children:0===h.length?e.jsx("p",{className:"text-white",children:"You don't have any rejected posts."}):h.map((t=>e.jsx(c,{image:t.image,link:t.link,title:t.title,genres:t.genres||[],username:t.username,user:v,isRejected:!0,reason:t.reason},t.id)))})]}),"reported"===k&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl lg:text-3xl font-bold mb-4 text-white text-center lg:text-left",children:"Reported posts"}),0===j.length?e.jsx("p",{className:"text-white",children:"You haven't reported any posts."}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsx("div",{className:"block md:hidden",children:j.map((t=>e.jsxs("div",{className:"bg-gray-800 p-4 mb-4 rounded-lg text-white",children:[e.jsx("h3",{className:"font-bold text-lg border-b border-gray-700 pb-2 mb-2",children:t.postTitle||"Deleted post"}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-gray-400",children:"Posted by:"}),t.postOwnerUsername?e.jsx(s,{to:"/search?u="+t.postOwnerUsername,className:"text-blue-400 hover:underline",children:t.postOwnerUsername}):e.jsx("span",{className:"text-white",children:"Unknown user"})]}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-gray-400",children:"Reason:"}),"pending"!==t.reportStatus&&t.reason?e.jsx("span",{className:"text-white",children:t.reason}):e.jsx("span",{className:"text-gray-500",children:"-"})]}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-gray-400",children:"Date:"}),e.jsx("span",{className:"text-white",children:new Date(t.reportDate||t.date_creation).toLocaleDateString()})]}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-gray-400",children:"Status:"}),e.jsx("span",{className:"px-2 py-1 rounded-full text-xs font-medium\n                                                            "+("pending"===t.reportStatus?"bg-yellow-500 text-white":"accepted"===t.reportStatus?"bg-green-500 text-white":"rejected"===t.reportStatus?"bg-red-500 text-white":"bg-gray-500 text-white"),children:"pending"===t.reportStatus?"Pending":"accepted"===t.reportStatus?"Kept":"rejected"===t.reportStatus?"Deleted":t.reportStatus||"Unknown"})]})]},t.userReportId||t.id)))}),e.jsxs("table",{className:"w-full text-white hidden md:table",children:[e.jsx("thead",{className:"bg-gray-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left",children:"Title"}),e.jsx("th",{className:"px-4 py-3 text-left",children:"Posted by"}),e.jsx("th",{className:"px-4 py-3 text-left",children:"Moderator reason"}),e.jsx("th",{className:"px-4 py-3 text-left",children:"Date"}),e.jsx("th",{className:"px-4 py-3 text-center",children:"Status"})]})}),e.jsx("tbody",{children:j.map((t=>e.jsxs("tr",{className:"border-b border-gray-700",children:[e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{children:t.postTitle||"Deleted post"})}),e.jsx("td",{className:"px-4 py-3",children:t.postOwnerUsername?e.jsx(s,{to:"/search?u="+t.postOwnerUsername,className:"text-blue-400 hover:underline",children:t.postOwnerUsername}):e.jsx("span",{className:"text-gray-400",children:"Unknown user"})}),e.jsx("td",{className:"px-4 py-3 max-w-xs",children:"pending"!==t.reportStatus&&t.reason?e.jsx("p",{children:t.reason}):e.jsx("p",{className:"text-gray-500",children:"-"})}),e.jsx("td",{className:"px-4 py-3",children:new Date(t.reportDate||t.date_creation).toLocaleDateString()}),e.jsx("td",{className:"px-4 py-3 text-center",children:e.jsx("span",{className:"px-2 py-1 rounded-full text-xs font-medium\n                                                                "+("pending"===t.reportStatus?"bg-yellow-500 text-white":"accepted"===t.reportStatus?"bg-green-500 text-white":"rejected"===t.reportStatus?"bg-red-500 text-white":"bg-gray-500 text-white"),children:"pending"===t.reportStatus?"Pending":"accepted"===t.reportStatus?"Kept":"rejected"===t.reportStatus?"Deleted":t.reportStatus||"Unknown"})})]},t.userReportId||t.id)))})]}),f.totalPages>1&&e.jsx("div",{className:"flex justify-center mt-6",children:e.jsxs("nav",{className:"flex flex-wrap items-center justify-center",children:[e.jsx("button",{onClick:()=>R(f.page-1),className:"px-3 py-1 m-1 rounded-l border border-gray-700 "+(1===f.page?"bg-gray-800 text-gray-500 cursor-not-allowed":"bg-gray-700 text-white hover:bg-gray-600"),disabled:1===f.page,children:"Previous"}),e.jsx("div",{className:"flex flex-wrap justify-center",children:[...Array(f.totalPages).keys()].map((t=>{const s=t+1;return 1===s||s===f.totalPages||s>=f.page-1&&s<=f.page+1?e.jsx("button",{onClick:()=>R(s),className:"px-3 py-1 border-t border-b border-gray-700 "+(f.page===s?"bg-blue-600 text-white":"bg-gray-700 text-white hover:bg-gray-600"),children:s},s):2===s&&f.page>3||s===f.totalPages-1&&f.page<f.totalPages-2?e.jsx("span",{className:"px-3 py-1 border-t border-b border-gray-700 bg-gray-700 text-white",children:"..."},s):null}))}),e.jsx("button",{onClick:()=>R(f.page+1),className:"px-3 py-1 m-1 rounded-r border border-gray-700 "+(f.page===f.totalPages?"bg-gray-800 text-gray-500 cursor-not-allowed":"bg-gray-700 text-white hover:bg-gray-600"),disabled:f.page===f.totalPages,children:"Next"})]})}),e.jsx("p",{className:"text-gray-400 text-sm mt-4 text-center md:text-left",children:"Note: If you're not satisfied with the decision on a post that is no longer pending, you can report it again by finding it on the site."})]})]})]})]})]})};export{x as default};
