import{a as I,b as w}from"./index-CskdO_jc.js";import{r as x,a as L}from"./Home-CYJ5EuiZ.js";function M(p,a){for(var u=0;u<a.length;u++){const i=a[u];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in p)){const c=Object.getOwnPropertyDescriptor(i,n);c&&Object.defineProperty(p,n,c.get?c:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var b,v;function A(){if(v)return b;v=1;var p=Object.create,a=Object.defineProperty,u=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,n=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,D=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,E=(t,e)=>{for(var r in e)a(t,r,{get:e[r],enumerable:!0})},h=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of i(e))!c.call(t,s)&&s!==r&&a(t,s,{get:()=>e[s],enumerable:!(o=u(e,s))||o.enumerable});return t},k=(t,e,r)=>(r=t!=null?p(n(t)):{},h(!t||!t.__esModule?a(r,"default",{value:t,enumerable:!0}):r,t)),F=t=>h(a({},"__esModule",{value:!0}),t),l=(t,e,r)=>(D(t,typeof e!="symbol"?e+"":e,r),r),d={};E(d,{default:()=>y}),b=F(d);var _=k(I()),f=x(),S=L();const P="https://connect.facebook.net/en_US/sdk.js",g="FB",m="fbAsyncInit",j="facebook-player-";class y extends _.Component{constructor(){super(...arguments),l(this,"callPlayer",f.callPlayer),l(this,"playerID",this.props.config.playerId||`${j}${(0,f.randomString)()}`),l(this,"mute",()=>{this.callPlayer("mute")}),l(this,"unmute",()=>{this.callPlayer("unmute")})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,r){if(r){(0,f.getSDK)(P,g,m).then(o=>o.XFBML.parse());return}(0,f.getSDK)(P,g,m).then(o=>{o.init({appId:this.props.config.appId,xfbml:!0,version:this.props.config.version}),o.Event.subscribe("xfbml.render",s=>{this.props.onLoaded()}),o.Event.subscribe("xfbml.ready",s=>{s.type==="video"&&s.id===this.playerID&&(this.player=s.instance,this.player.subscribe("startedPlaying",this.props.onPlay),this.player.subscribe("paused",this.props.onPause),this.player.subscribe("finishedPlaying",this.props.onEnded),this.player.subscribe("startedBuffering",this.props.onBuffer),this.player.subscribe("finishedBuffering",this.props.onBufferEnd),this.player.subscribe("error",this.props.onError),this.props.muted?this.callPlayer("mute"):this.callPlayer("unmute"),this.props.onReady(),document.getElementById(this.playerID).querySelector("iframe").style.visibility="visible")})})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentPosition")}getSecondsLoaded(){return null}render(){const{attributes:e}=this.props.config,r={width:"100%",height:"100%"};return _.default.createElement("div",{style:r,id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false",...e})}}return l(y,"displayName","Facebook"),l(y,"canPlay",S.canPlay.facebook),l(y,"loopOnEnded",!0),b}var O=A();const B=w(O),q=M({__proto__:null,default:B},[O]);export{q as F};
