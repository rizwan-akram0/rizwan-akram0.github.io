(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{410:(e,t,n)=>{Promise.resolve().then(n.bind(n,646)),Promise.resolve().then(n.t.bind(n,9654,23)),Promise.resolve().then(n.t.bind(n,6250,23)),Promise.resolve().then(n.bind(n,766)),Promise.resolve().then(n.bind(n,96)),Promise.resolve().then(n.bind(n,3479)),Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,3704,23)),Promise.resolve().then(n.t.bind(n,9461,23)),Promise.resolve().then(n.bind(n,2551)),Promise.resolve().then(n.t.bind(n,5716,23))},646:(e,t,n)=>{"use strict";n.d(t,{default:()=>s});var r=n(5155),a=n(2115),o=n(8198);let i="fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out",s=()=>{let[e,t]=(0,a.useState)(i);return(0,a.useEffect)(()=>{let e=()=>{window.scrollY>50?t(i.replace(" hidden","")):t(i+" hidden")};return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e,{passive:!0})}},[]),(0,r.jsx)("button",{className:e,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:(0,r.jsx)(o.uCC,{})})}},3479:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{html:t,height:n=null,width:o=null,children:i,dataNtpc:s=""}=e;return(0,a.useEffect)(()=>{s&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(s)}})},[s]),(0,r.jsxs)(r.Fragment,{children:[i,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=o?"".concat(o,"px"):"auto"},"data-ntpc":s,dangerouslySetInnerHTML:{__html:t}}):null]})};let r=n(5155),a=n(2115)},766:(e,t,n)=>{"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=function(e){let{gaId:t,debugMode:n,dataLayerName:s="dataLayer",nonce:l}=e;return void 0===r&&(r=s),(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(s,"'] = window['").concat(s,"'] || [];\n          function gtag(){window['").concat(s,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"' ").concat(n?",{ 'debug_mode': true }":"",");")},nonce:l}),(0,a.jsx)(i.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t),nonce:l})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===r){console.warn("@next/third-parties: GA has not been initialized");return}window[r]?window[r].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(r," does not exist"))};let a=n(5155),o=n(2115),i=function(e){return e&&e.__esModule?e:{default:e}}(n(6584))},96:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=void 0,t.GoogleTagManager=function(e){let{gtmId:t,gtmScriptUrl:n="https://www.googletagmanager.com/gtm.js",dataLayerName:s="dataLayer",auth:l,preview:c,dataLayer:d,nonce:u}=e;i=s;let f="dataLayer"!==s?"&l=".concat(s):"";return(0,a.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(d?"w[l].push(".concat(JSON.stringify(d),")"):"","\n      })(window,'").concat(s,"');")},nonce:u}),(0,r.jsx)(o.default,{id:"_next-gtm","data-ntpc":"GTM",src:"".concat(n,"?id=").concat(t).concat(f).concat(l?"&gtm_auth=".concat(l):"").concat(c?"&gtm_preview=".concat(c,"&gtm_cookies_win=x"):""),nonce:u})]})};let r=n(5155),a=n(2115),o=function(e){return e&&e.__esModule?e:{default:e}}(n(6584)),i="dataLayer";t.sendGTMEvent=(e,t)=>{let n=t||i;window[n]=window[n]||[],window[n].push(e)}},6584:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a.a});var r=n(3704),a=n.n(r),o={};for(let e in r)"default"!==e&&(o[e]=()=>r[e]);n.d(t,o)},3704:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return y},handleClientScriptLoad:function(){return h},initScriptLoader:function(){return m}});let r=n(306),a=n(9955),o=n(5155),i=r._(n(7650)),s=a._(n(2115)),l=n(1147),c=n(2815),d=n(8571),u=new Map,f=new Set,g=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:i="",strategy:s="afterInteractive",onError:l,stylesheets:d}=e,p=n||t;if(p&&f.has(p))return;if(u.has(t)){f.add(p),u.get(t).then(r,l);return}let h=()=>{a&&a(),f.add(p)},m=document.createElement("script"),_=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),h()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});o?(m.innerHTML=o.__html||"",h()):i?(m.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",h()):t&&(m.src=t,u.set(t,_)),(0,c.setAttributesFromProps)(m,e),"worker"===s&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",s),d&&g(d),document.body.appendChild(m)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>p(e))}):p(e)}function m(e){e.forEach(h),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function _(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:u,stylesheets:g,...h}=e,{updateScripts:m,scripts:_,getIsSsr:y,appDir:w,nonce:v}=(0,s.useContext)(l.HeadManagerContext),b=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=t||n;b.current||(a&&e&&f.has(e)&&a(),b.current=!0)},[a,t,n]);let x=(0,s.useRef)(!1);if((0,s.useEffect)(()=>{!x.current&&("afterInteractive"===c?p(e):"lazyOnload"===c&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>p(e))})),x.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(m?(_[c]=(_[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:u,...h}]),m(_)):y&&y()?f.add(t||n):y&&!y()&&p(e)),w){if(g&&g.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(i.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:v,crossOrigin:h.crossOrigin}:{as:"script",nonce:v,crossOrigin:h.crossOrigin}),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===c&&n&&i.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:v,crossOrigin:h.crossOrigin}:{as:"script",nonce:v,crossOrigin:h.crossOrigin})}return null}Object.defineProperty(_,"__nextScript",{value:!0});let y=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return o}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function a(e){return["async","defer","noModule"].includes(e)}function o(e,t){for(let[o,i]of Object.entries(t)){if(!t.hasOwnProperty(o)||r.includes(o)||void 0===i)continue;let s=n[o]||o.toLowerCase();"SCRIPT"===e.tagName&&a(s)?e[s]=!!i:e.setAttribute(s,String(i)),(!1===i||"SCRIPT"===e.tagName&&a(s)&&(!i||"false"===i))&&(e.setAttribute(s,""),e.removeAttribute(s))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5716:()=>{},9654:()=>{},6250:()=>{},9461:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[4,16,173,694,441,517,358],()=>t(410)),_N_E=e.O()}]);