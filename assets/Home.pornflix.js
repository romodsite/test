import{j as e}from"./index.pornflix.js";import{R as t,r as s,L as r}from"./router.pornflix.js";import{r as n,g as i}from"./vendor.pornflix.js";import{r as a,a as o,b as l}from"./player.pornflix.js";import{U as d,c,d as h,e as u,y as m}from"./App.pornflix.js";import{C as p}from"./Card.pornflix.js";const f=t.memo((({child:t,index:s,slideWidth:r})=>e.jsx("div",{style:{width:r+"px",flexShrink:0},children:t}))),g=t.memo((({children:r})=>{const n=s.useRef(null),i=s.useRef(null),[a,o]=s.useState(0),[l,d]=s.useState(1),[c,h]=s.useState(0),[u,m]=s.useState(0),[p,g]=s.useState(0),[x,y]=s.useState(0),[b,v]=s.useState(!1),[w,j]=s.useState(!1),[k,E]=s.useState("300ms"),[L,S]=s.useState(!1),[N,P]=s.useState(0),M=274,C=s.useCallback((()=>{!L&&c>a&&(S(!0),o((e=>Math.min(e+l,c))),P((e=>Math.min(e+1,u-1))))}),[L,a,c,l,u]),I=s.useCallback((()=>{!L&&a>0&&(S(!0),o((e=>Math.max(e-l,0))),P((e=>Math.max(e-1,0))))}),[L,a,l]);s.useEffect((()=>{const e=setTimeout((()=>S(!1)),parseInt(k));return()=>clearTimeout(e)}),[a,k]);const T=s.useCallback((()=>{const e=t.Children.count(r);return`translateX(-${Math.min(a,e-l)*M}px)`}),[r,a,l]);s.useEffect((()=>{const e=()=>{if(n.current&&i.current){const e=n.current.offsetWidth,s=Math.floor(e/M);d(s);const i=t.Children.count(r);h(Math.max(0,i-s)),m(Math.ceil(i/s)),window.innerWidth>500?window.innerWidth>768?E("1000ms"):E("600ms"):E("300ms")}};e();const s=()=>{e()};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)}),[r]),s.useEffect((()=>{const e=n.current,t=e=>{if(!b)return;const t=e.touches[0].clientX,s=e.touches[0].clientY,r=p-t,n=x-s;w||(Math.abs(r)>Math.abs(n)?e.preventDefault():(j(!0),v(!1))),w||(r>50?(C(),v(!1)):-50>r&&(I(),v(!1)))};return null==e||e.addEventListener("touchmove",t,{passive:!1}),()=>{null==e||e.removeEventListener("touchmove",t)}}),[b,w,p,x,C,I]);const O=s.useCallback((e=>{g(e.touches[0].clientX),y(e.touches[0].clientY),v(!0),j(!1)}),[]),R=s.useCallback((()=>{v(!1)}),[]),D=s.useMemo((()=>{const s=t.Children.toArray(r),n=Math.max(0,a-2),i=Math.min(s.length,a+l+2),o=[];n>0&&o.push(e.jsx("div",{style:{width:n*M+"px",flexShrink:0}},"start-placeholder"));for(let t=n;i>t;t++)o.push(e.jsx(f,{child:s[t],index:t,slideWidth:M},t));return o}),[r,a,l]),A=s.useMemo((()=>e.jsx("div",{className:"pagination-indicator flex justify-center mt-4 space-x-2",children:Array.from({length:u}).map(((t,s)=>e.jsx("div",{className:"w-2 h-[3px] "+(s===N?"bg-white":"bg-gray-500")},s)))})),[u,N]);return e.jsxs("div",{className:"carousel-wrapper relative w-full mx-auto",children:[e.jsxs("div",{ref:n,className:"carousel-container overflow-hidden relative w-full",onTouchStart:O,onTouchEnd:R,children:[e.jsx("div",{ref:i,className:"carousel-content flex mx-4 md:mx-[40px]",style:{transform:T(),width:t.Children.count(r)*M+"px",transition:`transform ${k} ease-in-out`},children:D}),a>0&&e.jsx("button",{onClick:I,className:"absolute h-full top-1/2 left-0 transform -translate-y-1/2 p-2 opacity-40 transition-all duration-300 cursor-pointer bg-gray-500 hover:bg-gray-700 hover:opacity-60 text-white hidden sm:block",children:"⬅"}),c>a&&e.jsx("button",{onClick:C,className:"absolute h-full top-1/2 right-0 transform -translate-y-1/2 p-2 opacity-40 transition-all duration-300 cursor-pointer bg-gray-500 hover:bg-gray-700 hover:opacity-60 text-white hidden sm:block",children:"➡"})]}),A]})}));var x,y,b,v;const w=i(function(){if(v)return b;v=1;var e=l().createReactPlayer,t=function(){if(y)return x;y=1;var e,t=Object.create,s=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,c=(e,t,n,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of i(t))d.call(e,o)||o===n||s(e,o,{get:()=>t[o],enumerable:!(a=r(t,o))||a.enumerable});return e},h=(e,t,r)=>{return a=r,(i="symbol"!=typeof t?t+"":t)in(n=e)?s(n,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[i]=a,r;var n,i,a},u={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>S}),e=u,x=c(s({},"__esModule",{value:!0}),e);var m,p,f=(m=n(),p=null!=m?t(l(m)):{},c(m&&m.__esModule?p:s(p,"default",{value:m,enumerable:!0}),m)),g=a(),b=o();const v="undefined"!=typeof navigator,w=v&&"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,j=v&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||w)&&!window.MSStream,k=v&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,E=/www\.dropbox\.com\/.+/,L=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;class S extends f.Component{constructor(){super(...arguments),h(this,"onReady",((...e)=>this.props.onReady(...e))),h(this,"onPlay",((...e)=>this.props.onPlay(...e))),h(this,"onBuffer",((...e)=>this.props.onBuffer(...e))),h(this,"onBufferEnd",((...e)=>this.props.onBufferEnd(...e))),h(this,"onPause",((...e)=>this.props.onPause(...e))),h(this,"onEnded",((...e)=>this.props.onEnded(...e))),h(this,"onError",((...e)=>this.props.onError(...e))),h(this,"onPlayBackRateChange",(e=>this.props.onPlaybackRateChange(e.target.playbackRate))),h(this,"onEnablePIP",((...e)=>this.props.onEnablePIP(...e))),h(this,"onDisablePIP",(e=>{const{onDisablePIP:t,playing:s}=this.props;t(e),s&&this.play()})),h(this,"onPresentationModeChange",(e=>{if(this.player&&(0,g.supportsWebKitPresentationMode)(this.player)){const{webkitPresentationMode:t}=this.player;"picture-in-picture"===t?this.onEnablePIP(e):"inline"===t&&this.onDisablePIP(e)}})),h(this,"onSeek",(e=>{this.props.onSeek(e.target.currentTime)})),h(this,"mute",(()=>{this.player.muted=!0})),h(this,"unmute",(()=>{this.player.muted=!1})),h(this,"renderSourceElement",((e,t)=>"string"==typeof e?f.default.createElement("source",{key:t,src:e}):f.default.createElement("source",{key:t,...e}))),h(this,"renderTrack",((e,t)=>f.default.createElement("track",{key:t,...e}))),h(this,"ref",(e=>{this.player&&(this.prevPlayer=this.player),this.player=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getSource(this.props.url);e&&(this.player.src=e),(j||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url===e.url||(0,g.isMediaStream)(this.props.url)||this.props.url instanceof Array||(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.hls&&this.hls.destroy()}addListeners(e){const{url:t,playsinline:s}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.addEventListener("canplay",this.onReady),s&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}removeListeners(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}shouldUseAudio(e){return!e.config.forceVideo&&!e.config.attributes.poster&&(b.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio)}shouldUseHLS(e){return!!(k&&this.props.config.forceSafariHLS||this.props.config.forceHLS)||!j&&!this.props.config.forceDisableHls&&(b.HLS_EXTENSIONS.test(e)||L.test(e))}shouldUseDASH(e){return b.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}shouldUseFLV(e){return b.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}load(e){const{hlsVersion:t,hlsOptions:s,dashVersion:r,flvVersion:n}=this.props.config;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,g.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION",t),"Hls").then((t=>{if(this.hls=new t(s),this.hls.on(t.Events.MANIFEST_PARSED,(()=>{this.props.onReady()})),this.hls.on(t.Events.ERROR,((e,s)=>{this.props.onError(e,s,this.hls,t)})),L.test(e)){const t=e.match(L)[1];this.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}",t))}else this.hls.loadSource(e);this.hls.attachMedia(this.player),this.props.onLoaded()})),this.shouldUseDASH(e)&&(0,g.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION",r),"dashjs").then((t=>{this.dash=t.MediaPlayer().create(),this.dash.initialize(this.player,e,this.props.playing),this.dash.on("error",this.props.onError),3>parseInt(r)?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:t.Debug.LOG_LEVEL_NONE}}),this.props.onLoaded()})),this.shouldUseFLV(e)&&(0,g.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION",n),"flvjs").then((t=>{this.flv=t.createPlayer({type:"flv",url:e}),this.flv.attachMediaElement(this.player),this.flv.on(t.Events.ERROR,((e,s)=>{this.props.onError(e,s,this.flv,t)})),this.flv.load(),this.props.onLoaded()})),e instanceof Array)this.player.load();else if((0,g.isMediaStream)(e))try{this.player.srcObject=e}catch(i){this.player.src=window.URL.createObjectURL(e)}}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,g.supportsWebKitPresentationMode)(this.player)&&"picture-in-picture"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,g.supportsWebKitPresentationMode)(this.player)&&"inline"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(0===e.length)return 0;const t=e.end(e.length-1),s=this.getDuration();return t>s?s:t}getSource(e){const t=this.shouldUseHLS(e),s=this.shouldUseDASH(e),r=this.shouldUseFLV(e);if(!(e instanceof Array||(0,g.isMediaStream)(e)||t||s||r))return E.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}render(){const{url:e,playing:t,loop:s,controls:r,muted:n,config:i,width:a,height:o}=this.props,l=this.shouldUseAudio(this.props)?"audio":"video",d={width:"auto"===a?a:"100%",height:"auto"===o?o:"100%"};return f.default.createElement(l,{ref:this.ref,src:this.getSource(e),style:d,preload:"auto",autoPlay:t||void 0,controls:r,muted:n,loop:s,...i.attributes},e instanceof Array&&e.map(this.renderSourceElement),i.tracks.map(this.renderTrack))}}return h(S,"displayName","FilePlayer"),h(S,"canPlay",b.canPlay.file),x}().default;return b=e([{key:"file",canPlay:t.canPlay,lazyPlayer:t}])}());"requestIdleCallback"in window?requestIdleCallback((()=>{["/images/mobile-fallback.jpg","/images/desktop-fallback.jpg"].forEach((e=>{(new Image).src=e}))})):setTimeout((()=>{["/images/mobile-fallback.jpg","/images/desktop-fallback.jpg"].forEach((e=>{(new Image).src=e}))}),1e3);const j=t.memo((()=>{const{user:t}=s.useContext(d),[r,n]=s.useState({isMobile:768>window.innerWidth,isTablet:window.innerWidth>=768&&1024>window.innerWidth,maxHeight:window.innerHeight}),[i,a]=s.useState(!0),[o,l]=s.useState(!1),[u,m]=s.useState(!1),[p,f]=s.useState(!0),[g,x]=s.useState(!0),[y,b]=s.useState("visible"),[v,j]=s.useState("hidden"),[k,E]=s.useState("complete"===document.readyState),L=s.useRef(null),S=s.useRef(null),N=s.useRef(0),P=s.useRef(null),M=s.useRef(!1),C=s.useRef(0);s.useEffect((()=>{const e=()=>{const e=window.innerWidth;n({isMobile:768>e,isTablet:e>=768&&1024>e,maxHeight:768>e?Math.min(window.innerHeight,800):window.innerHeight})};e(),window.addEventListener("resize",e);const t=new IntersectionObserver((([e])=>e.isIntersecting&&m(!0)),{threshold:.1});P.current&&t.observe(P.current);const s=setTimeout((()=>f(!1)),1e3);return k||window.addEventListener("load",(()=>E(!0)),{once:!0}),()=>{window.removeEventListener("resize",e),clearTimeout(s),L.current&&clearTimeout(L.current),t.disconnect()}}),[k]);const I=s.useCallback((e=>{(null==e?void 0:e.getDuration)&&(N.current=e.getDuration()),l(!0),f(!1);const t=()=>{requestAnimationFrame((()=>{j("fadeIn"),setTimeout((()=>{j("scaleIn"),setTimeout((()=>{j("ready"),x(!1)}),500)}),700)}))};k?t():window.addEventListener("load",t,{once:!0})}),[k]),T=s.useCallback((e=>{if(0>=N.current)return;C.current=e.playedSeconds;const t=N.current-e.playedSeconds;.5>e.playedSeconds&&"fadeOut"===y?(b("fadeIn"),setTimeout((()=>b("visible")),800),M.current=!0):"visible"!==y||t>1.3||0>=t||M.current||(b("fadeOut"),M.current=!0,setTimeout((()=>M.current=!1),2e3))}),[y]),O=s.useMemo((()=>{const e={video:{width:"100%",objectFit:"cover",height:r.isMobile?r.maxHeight+"px":"100vh",willChange:"opacity, transform"},container:{height:"100vh",maxHeight:"100vh",contain:"strict",contentVisibility:"auto"},fallback:{backgroundImage:`url(/images/${r.isMobile?"mobile":"desktop"}-fallback.jpg)`,backgroundSize:"cover",backgroundPosition:"center",willChange:"opacity"}};let t={};if("visible"!==y||"ready"===v){const e=g?"1.5s":"fadeOut"===y?"1.2s":"fadeIn"===y?"0.8s":"0s";t={opacity:g||"fadeOut"===y?0:1,WebkitTransition:`opacity ${e} ease-in-out`,transition:`opacity ${e} ease-in-out`,WebkitTransform:"translateZ(0)",transform:"translateZ(0)",WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden"}}else switch(v){case"hidden":t={opacity:0,transform:"scale(1.05) translateZ(0)",WebkitTransform:"scale(1.05) translateZ(0)",transition:"none",WebkitTransition:"none"};break;case"fadeIn":t={opacity:.7,transform:"scale(1.05) translateZ(0)",WebkitTransform:"scale(1.05) translateZ(0)",transition:"opacity 0.7s ease-in-out",WebkitTransition:"opacity 0.7s ease-in-out"};break;case"scaleIn":t={opacity:1,transform:"scale(1) translateZ(0)",WebkitTransform:"scale(1) translateZ(0)",transition:"opacity 0.5s ease-out, transform 0.5s ease-out",WebkitTransition:"opacity 0.5s ease-out, -webkit-transform 0.5s ease-out"}}return{...e,animation:t}}),[r,v,y,g]),R=s.useMemo((()=>({file:{attributes:{style:{objectFit:"cover",width:"100%",height:"100%"},playsInline:!0,"webkit-playsinline":"true",preload:"metadata",disablePictureInPicture:!0,controlsList:"noplaybackrate nofullscreen nodownload","x-webkit-airplay":"allow",poster:r.isMobile?"https://i.vimeocdn.com/video/2005743691-1c68f1596ab75d7e9ecc54bf61d8e55015758578e507393c6a43509b0a91d82a-d_640x360.jpg":"https://i.vimeocdn.com/video/2005745137-0de00d90002b5d4fab41b77192e9d7d130f2d98f03ef0c5f0f6a62651e78e23b-d_640x360.jpg",loading:"lazy",fetchPriority:"low"},forceVideo:!0,forceAudio:!1,hlsOptions:{lowLatencyMode:!1,startPosition:-1,debug:!1,progressive:!0,maxBufferLength:5,maxMaxBufferLength:10,backBufferLength:0,startLevel:0,autoStartLoad:!1}}})),[r.isMobile]);s.useEffect((()=>{let e;return S.current&&S.current.getInternalPlayer&&o&&(e=setTimeout((()=>{try{const e=S.current.getInternalPlayer("hls");e&&e.startLoad&&e.startLoad()}catch(e){}}),500)),()=>{e&&clearTimeout(e)}}),[o]);const D=s.useCallback((t=>e.jsx(w,{ref:S,url:t,playing:!0,muted:i,loop:!0,width:"100%",height:"100%",className:"video-container",style:{...O.video,...O.animation},onReady:I,onProgress:T,onError(e){},playsinline:!0,stopOnUnmount:!1,config:R,fallback:e.jsx("div",{className:"absolute inset-0 bg-gray-900 transition-opacity duration-500 z-0 "+(p?"opacity-100":"opacity-0"),style:O.fallback,"aria-hidden":"true"}),progressInterval:250,light:!1,preload:"false"})),[i,O,I,T,R,p]);return e.jsxs("div",{ref:P,className:"relative w-full overflow-hidden video-player bg-gray-900 content-visibility-auto",style:O.container,role:"banner","aria-label":"Background video of exclusive content",children:[e.jsx("div",{className:"absolute inset-0 bg-gray-900 transition-opacity duration-500 z-0 "+(p?"opacity-100":"opacity-0"),style:O.fallback,"aria-hidden":"true"}),(u||!("IntersectionObserver"in window))&&(r.isMobile?e.jsx("div",{className:"relative w-full h-full",children:D("https://RoMod.publit.io/file/h_720/mobile.mp4")}):e.jsxs("div",{style:{height:"100vh"},children:[D("https://RoMod.publit.io/file/h_1080/pc.mp4"),e.jsxs("div",{className:"absolute z-10 bottom-1/4 right-0 flex items-center gap-4",children:[e.jsx("button",{className:"bg-[#33333399] text-white p-4 rounded-full cursor-pointer",onClick:()=>a((e=>!e)),"aria-label":"Toggle mute",children:i?e.jsx(c,{className:"w-full h-max"}):e.jsx(h,{})}),e.jsx("p",{className:"p-3 bg-[#33333399] text-white border-l-4 border-[#ffffffd2] pr-16 font-semibold",children:"18+"})]})]}))]})}));j.displayName="BackgroundVideo";const k=t.memo((({title:t,linkText:s,linkTo:n,data:i,headingLevel:a="h2",metadata:o})=>{const l=a;return e.jsxs("section",{className:"carousel-section",children:[e.jsxs("div",{className:"mx-4.5 md:mx-10.5 mt-12 mb-4 text-white flex justify-between items-end",children:[e.jsx(l,{className:("h1"===a?"text-3xl md:text-4xl":"text-2xl md:text-3xl")+" font-semibold",children:t}),e.jsx(r,{to:n,className:"text-md hover:underline transition duration-300",children:s||"See more →"})]}),i.length>0?e.jsx(g,{children:i.map(((t,s)=>{return e.jsx(p,{className:"mx-1",id:t.id,image:t.image,link:t.link,title:t.title,genres:t.genres,username:t.username,loading:(r=s,3>r?"eager":"lazy"),fetchPriority:0===s?"high":"auto"},""+(t.id||s));var r}))}):e.jsx("div",{className:"flex justify-center items-center h-64 text-white text-lg font-semibold",children:"No data available at the moment."})]})})),E=({data:t})=>{const s={"@context":"https://schema.org","@type":"ItemList",itemListElement:t.map(((e,t)=>{var s;return{"@type":"ListItem",position:t+1,item:{"@type":"VideoObject",name:e.title,description:e.description||e.title+" video content",thumbnailUrl:e.image,uploadDate:e.createdAt||(new Date).toISOString(),creator:{"@type":"Person",name:e.username},genre:(null==(s=e.genres)?void 0:s.join(", "))||"Adult"}}}))};return e.jsx("script",{type:"application/ld+json",children:JSON.stringify(s)})},L=({exclusifData:t,communityData:s,trendingData:r})=>{const n=["adult content","streaming","free videos","exclusive videos","community content","trending videos","adult platform","no subscription","free streaming","adult entertainment","watch online","free access","video content","adult videos","community uploads","exclusive content","trending content","no sign up","free adult content","streaming platform"],i=[...t||[],...s||[],...r||[]];return e.jsxs("section",{className:"mx-4.5 md:mx-10.5 my-8 py-6 border-t border-gray-800 text-xs text-gray-500",children:[e.jsx("h2",{className:"text-lg mb-6",children:"Tags"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.map(((t,s)=>t.title&&e.jsxs("span",{className:"inline-block",children:[t.title.toLowerCase(),s<i.length-1?",":""]},"post-tag-"+s))),i.length>0&&n.length>0&&e.jsx("span",{className:"px-2",children:"•"}),n.map(((t,s)=>e.jsxs("span",{className:"inline-block",children:[t,s<n.length-1?",":""]},"default-tag-"+s)))]})]})},S=t.memo((function(){const t=(e=>{const[t,r]=s.useState((()=>window.matchMedia(e).matches));return s.useEffect((()=>{const t=window.matchMedia(e),s=e=>r(e.matches);return t.addEventListener("change",s),()=>t.removeEventListener("change",s)}),[e]),t})("(max-width: 767px)"),{user:n}=s.useContext(d),{megaExclusifData:i,communautaireData:a,trendingData:o,metadata:l,isLoading:c,loadingStates:h,errors:p,handleRetry:f}=((e=1)=>{const[t,r]=s.useState({exclusif:{items:[],metadata:{lastUpdated:null,totalCount:0}},community:{items:[],metadata:{lastUpdated:null,totalCount:0}},trending:{items:[],metadata:{lastUpdated:null,totalCount:0}}}),[n,i]=s.useState(!0),[a,o]=s.useState({exclusif:!0,community:!0,trending:!0}),[l,d]=s.useState({exclusif:null,community:null,trending:null}),[c,h]=s.useState(0),p=s.useCallback((async(t,s=0)=>{o((e=>({...e,[t.toLowerCase()]:!0})));try{let e=await u(40,null,null,t,null,{timeout:15e3});return d((e=>({...e,[t.toLowerCase()]:null}))),{items:e||[],metadata:{lastUpdated:(new Date).toISOString(),totalCount:(null==e?void 0:e.length)||0,category:t}}}catch(r){if(d((e=>({...e,[t.toLowerCase()]:{message:r.message,timestamp:(new Date).toISOString()}}))),e-1>s){const e=1e3*Math.pow(2,s);return await new Promise((t=>setTimeout(t,e))),p(t,s+1)}return{items:[],metadata:{lastUpdated:null,totalCount:0,error:!0}}}finally{o((e=>({...e,[t.toLowerCase()]:!1})))}}),[e]);s.useEffect((()=>{const e=new AbortController;let t=!0;return(async()=>{i(!0);try{const[e,s,n]=await Promise.all([p("Exclusif"),p("Community"),p("Trending")]);t&&r({exclusif:e,community:s,trending:n})}finally{t&&i(!1)}})(),()=>{t=!1,e.abort()}}),[p,c]);const f=s.useCallback((()=>{h((e=>e+1)),m.info("Attempting to reload data...")}),[]);return{megaExclusifData:t.exclusif.items,communautaireData:t.community.items,trendingData:t.trending.items,metadata:{exclusif:t.exclusif.metadata,community:t.community.metadata,trending:t.trending.metadata},isLoading:n,loadingStates:a,errors:l,handleRetry:f,isEmpty:!n&&0===t.exclusif.items.length&&0===t.community.items.length&&0===t.trending.items.length}})(1),g=s.useMemo((()=>"transform z-10 "+(t?"mt-[-12rem]":"mt-[-9.5rem]")),[t]);return e.jsxs(e.Fragment,{children:[!c&&i.length>0&&e.jsx(E,{data:i}),e.jsxs("div",{className:"w-full flex flex-col",children:[e.jsx(j,{}),e.jsxs("div",{className:"absolute z-10 max-w-3xl flex flex-col gap-2 md:gap-6 bottom-[180px] md:bottom-1/5 px-4 md:left-10 text-white md:top-auto",children:[e.jsx("h2",{className:"text-xl md:text-4xl text-shadow-strong",id:"welcome-message",children:n?"Welcome "+(null==n?void 0:n.username):"Welcome to PornFlix"}),e.jsx("h1",{className:"text-2xl md:text-5xl font-bold text-shadow-strong",fetchPriority:"high",children:"Free Adult Content Sharing Platform"}),e.jsx("p",{className:"text-shadow-strong text-sm md:text-xl text-justify",children:"Browse our extensive collection of adult videos and photos, available without any restrictions or fees. Our community-driven platform offers premium content in various categories for your enjoyment."}),!t&&e.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[e.jsx(r,{to:"/search/genre/Exclusif",className:"text-lg md:text-xl w-max px-6 py-2 rounded-md bg-cyan-500 exclusif hover:bg-cyan-400 transition duration-300 text-white font-semibold",children:"Free Exclusive Content"}),e.jsx(r,{to:"/search/genre/Community",className:"text-lg md:text-xl w-max px-6 py-2 rounded-md bg-orange-400 communautaire hover:bg-amber-500 transition duration-300 text-white font-semibold",children:"Community Shared"})]})]}),e.jsxs("div",{className:g,children:[(h.exclusif||h.community||h.trending)&&e.jsx("div",{className:"mx-4.5 md:mx-10.5 mt-4 text-white",children:e.jsx("div",{className:"bg-gray-800/50 p-3 rounded-lg",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"}),e.jsxs("span",{children:[h.exclusif?"Loading Exclusive content... ":"",h.community?"Loading Community content... ":"",h.trending?"Loading Trending content... ":""]})]})})}),e.jsx(k,{title:"Mega Exclusive",linkTo:"/search/genre/Exclusive",data:i,metadata:l.exclusif,headingLevel:"h2"}),e.jsx(k,{title:"Community",linkTo:"/search/genre/Community",data:a,metadata:l.community,headingLevel:"h2"}),o&&o.length>0&&e.jsx(k,{title:"Trending Now",linkTo:"/search/trending",data:o,metadata:l.trending,headingLevel:"h2"}),Object.values(p).some((e=>null!==e))&&e.jsxs("div",{className:"mx-4.5 md:mx-10.5 my-4 p-3 bg-red-800/30 border border-red-500/30 rounded-lg text-white",children:[e.jsx("p",{className:"font-semibold mb-2",children:"Some content failed to load:"}),e.jsxs("ul",{className:"text-sm",children:[p.exclusif&&e.jsxs("li",{children:["• Exclusive content: ",p.exclusif.message]}),p.community&&e.jsxs("li",{children:["• Community content: ",p.community.message]}),p.trending&&e.jsxs("li",{children:["• Trending content: ",p.trending.message]})]}),e.jsx("button",{onClick:f,className:"mt-3 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm",children:"Retry"})]}),e.jsx("section",{className:"mx-4.5 md:mx-10.5 my-12 text-white",children:e.jsxs("div",{className:"w-full bg-gradient-to-br from-gray-900/50 to-black/70 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-800/50",children:[e.jsx("h3",{className:"text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600",children:"Why choose our free adult content platform?"}),e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsxs("div",{className:"w-full md:w-[calc(33.33%-1rem)] flex-grow md:flex-basis-0 bg-gray-800/40 hover:bg-gray-800/60 p-6 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-700/50 hover:border-red-500/50",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-red-500 mr-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("h4",{className:"text-lg font-semibold text-white",children:"100% Free Access"})]}),e.jsx("p",{className:"text-gray-300",children:"All content on our platform is completely free to access and download. No subscriptions, no hidden fees, and no payment information required."})]}),e.jsxs("div",{className:"w-full md:w-[calc(33.33%-1rem)] flex-grow md:flex-basis-0 bg-gray-800/40 hover:bg-gray-800/60 p-6 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-700/50 hover:border-red-500/50",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-red-500 mr-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),e.jsx("h4",{className:"text-lg font-semibold text-white",children:"Community Sharing"})]}),e.jsx("p",{className:"text-gray-300",children:"Join our active community. Share your discoveries and enjoy contributions from other members. Our platform makes it easy to discover new adult content."})]}),e.jsxs("div",{className:"w-full md:w-[calc(33.33%-1rem)] flex-grow md:flex-basis-0 bg-gray-800/40 hover:bg-gray-800/60 p-6 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-700/50 hover:border-red-500/50",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-red-500 mr-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),e.jsx("h4",{className:"text-lg font-semibold text-white",children:"Regular Updates"})]}),e.jsx("p",{className:"text-gray-300",children:"Our collection is enriched daily with new content. Visit us regularly to discover the latest adult videos and photos added by our community."})]}),e.jsxs("div",{className:"w-full md:w-[calc(33.33%-1rem)] flex-grow md:flex-basis-0 bg-gray-800/40 hover:bg-gray-800/60 p-6 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-700/50 hover:border-red-500/50",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-red-500 mr-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"})}),e.jsx("h4",{className:"text-lg font-semibold text-white",children:"Premium Quality"})]}),e.jsx("p",{className:"text-gray-300",children:"Experience high-definition videos and high-quality images. Our curated content collection ensures the best viewing experience without compromising on quality or performance."})]}),e.jsxs("div",{className:"w-full md:w-[calc(33.33%-1rem)] flex-grow md:flex-basis-0 bg-gray-800/40 hover:bg-gray-800/60 p-6 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-700/50 hover:border-red-500/50",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-red-500 mr-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),e.jsx("h4",{className:"text-lg font-semibold text-white",children:"Privacy & Security"})]}),e.jsx("p",{className:"text-gray-300",children:"Your privacy is our priority. Enjoy content without creating accounts or sharing personal information. Our platform ensures anonymous browsing with enhanced security measures."})]})]})]})}),e.jsx(L,{exclusifData:i,communityData:a,trendingData:o})]})]})]})}));export{S as default};
