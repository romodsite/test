import{a as x,b as C}from"./index-DjY-_M0D.js";import{r as N,a as q}from"./Home-CDmbzxYX.js";function T(l,a){for(var p=0;p<a.length;p++){const o=a[p];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in l)){const u=Object.getOwnPropertyDescriptor(o,s);u&&Object.defineProperty(l,s,u.get?u:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var P,O;function k(){if(O)return P;O=1;var l=Object.create,a=Object.defineProperty,p=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,D=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,j=(t,e)=>{for(var r in e)a(t,r,{get:e[r],enumerable:!0})},m=(t,e,r,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of o(e))!u.call(t,i)&&i!==r&&a(t,i,{get:()=>e[i],enumerable:!(d=p(e,i))||d.enumerable});return t},w=(t,e,r)=>(r=t!=null?l(s(t)):{},m(!t||!t.__esModule?a(r,"default",{value:t,enumerable:!0}):r,t)),S=t=>m(a({},"__esModule",{value:!0}),t),n=(t,e,r)=>(D(t,typeof e!="symbol"?e+"":e,r),r),v={};j(v,{default:()=>y}),P=S(v);var c=w(x()),g=N(),b=q();const M="https://play.vidyard.com/embed/v4.js",R="VidyardV4",A="onVidyardAPI";class y extends c.Component{constructor(){super(...arguments),n(this,"callPlayer",g.callPlayer),n(this,"mute",()=>{this.setVolume(0)}),n(this,"unmute",()=>{this.props.volume!==null&&this.setVolume(this.props.volume)}),n(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:r,config:d,onError:i,onDuration:E}=this.props,h=e&&e.match(b.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,g.getSDK)(M,R,A).then(_=>{this.container&&(_.api.addReadyListener((f,L)=>{this.player||(this.player=L,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))},h),_.api.renderPlayer({uuid:h,container:this.container,autoplay:r?1:0,...d.options}),_.api.getPlayerMetadata(h).then(f=>{this.duration=f.length_in_seconds,E(f.length_in_seconds)}))},i)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){const{display:e}=this.props,r={width:"100%",height:"100%",display:e};return c.default.createElement("div",{style:r},c.default.createElement("div",{ref:this.ref}))}}return n(y,"displayName","Vidyard"),n(y,"canPlay",b.canPlay.vidyard),P}var V=k();const K=C(V),F=T({__proto__:null,default:K},[V]);export{F as V};
