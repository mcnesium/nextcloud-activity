/*! third party licenses: js/vendor.LICENSE.txt */
import{V as u,t as m,b as v}from"./index-c5daae92.mjs";import"./index-65a5f423.mjs";const w="modulepreload",y=function(e,i){return e[0]==="."?new URL(e,i).href:e},p={},f=function(e,i,s){if(!i||i.length===0)return e();const d=document.getElementsByTagName("link");return Promise.all(i.map(t=>{if(t=y(t,s),t in p)return;p[t]=!0;const n=t.endsWith(".css"),h=n?'[rel="stylesheet"]':"";if(s)for(let l=d.length-1;l>=0;l--){const c=d[l];if(c.href===t&&(!n||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${h}`))return;const o=document.createElement("link");if(o.rel=n?"stylesheet":w,n||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),n)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>e()).catch(t=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t})},g='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-lightning-bolt" viewBox="0 0 24 24"><path d="M11 15H6L13 1V9H18L11 23V15Z" /></svg>';u.prototype.t=m,u.prototype.n=v;let a=null,r=null;const E=new OCA.Files.Sidebar.Tab({id:"activity",name:m("activity","Activity"),iconSvg:g,async mount(e,i,s){if(a===null){const{default:d}=await f(()=>import("./ActivityTab-2aeb764a.mjs"),[OC.filePath('activity', '', 'js/ActivityTab-2aeb764a.mjs'),OC.filePath('activity', '', 'js/index.es-bbaca1b2.mjs'),OC.filePath('activity', '', 'js/index-65a5f423.mjs'),OC.filePath('activity', '', 'js/logger-a53a57b5.mjs'),OC.filePath('activity', '', 'js/index-c5daae92.mjs'),OC.filePath('activity', '', 'js/Activity-672116fe.mjs'),OC.filePath('activity', '', 'js/api-00dfc954.mjs')],import.meta.url);a=a??u.extend(d)}r&&r.$destroy(),r=new a({parent:s}),r.update(i),r.$mount(e)},update(e){r.update(e)},destroy(){r.$destroy(),r=null}});window.addEventListener("DOMContentLoaded",async function(){if(OCA.Files&&OCA.Files.Sidebar){OCA.Files.Sidebar.registerTab(E);const{default:e}=await f(()=>import("./ActivityTab-2aeb764a.mjs"),[OC.filePath('activity', '', 'js/ActivityTab-2aeb764a.mjs'),OC.filePath('activity', '', 'js/index.es-bbaca1b2.mjs'),OC.filePath('activity', '', 'js/index-65a5f423.mjs'),OC.filePath('activity', '', 'js/logger-a53a57b5.mjs'),OC.filePath('activity', '', 'js/index-c5daae92.mjs'),OC.filePath('activity', '', 'js/Activity-672116fe.mjs'),OC.filePath('activity', '', 'js/api-00dfc954.mjs')],import.meta.url);a=a??u.extend(e)}});export{g as l};
