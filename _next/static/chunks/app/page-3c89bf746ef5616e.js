(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7770:(e,t,i)=>{Promise.resolve().then(i.bind(i,9999)),Promise.resolve().then(i.bind(i,2684)),Promise.resolve().then(i.bind(i,2691)),Promise.resolve().then(i.bind(i,6438)),Promise.resolve().then(i.bind(i,1591)),Promise.resolve().then(i.bind(i,3749)),Promise.resolve().then(i.bind(i,1088)),Promise.resolve().then(i.bind(i,7222)),Promise.resolve().then(i.bind(i,5423)),Promise.resolve().then(i.bind(i,2307)),Promise.resolve().then(i.bind(i,8269)),Promise.resolve().then(i.bind(i,1345)),Promise.resolve().then(i.bind(i,7311)),Promise.resolve().then(i.bind(i,6155)),Promise.resolve().then(i.bind(i,4067)),Promise.resolve().then(i.bind(i,9541)),Promise.resolve().then(i.bind(i,58)),Promise.resolve().then(i.bind(i,6350)),Promise.resolve().then(i.bind(i,6751)),Promise.resolve().then(i.bind(i,5674)),Promise.resolve().then(i.bind(i,140)),Promise.resolve().then(i.bind(i,3717)),Promise.resolve().then(i.bind(i,9154)),Promise.resolve().then(i.bind(i,8768)),Promise.resolve().then(i.bind(i,524)),Promise.resolve().then(i.bind(i,5961)),Promise.resolve().then(i.bind(i,2342)),Promise.resolve().then(i.bind(i,9882)),Promise.resolve().then(i.bind(i,6613)),Promise.resolve().then(i.bind(i,8732)),Promise.resolve().then(i.bind(i,6351)),Promise.resolve().then(i.bind(i,5771)),Promise.resolve().then(i.bind(i,6974)),Promise.resolve().then(i.bind(i,5893)),Promise.resolve().then(i.bind(i,79)),Promise.resolve().then(i.bind(i,2634)),Promise.resolve().then(i.bind(i,4530)),Promise.resolve().then(i.bind(i,9787)),Promise.resolve().then(i.bind(i,7867)),Promise.resolve().then(i.bind(i,5985)),Promise.resolve().then(i.bind(i,9418)),Promise.resolve().then(i.bind(i,4365)),Promise.resolve().then(i.bind(i,7546)),Promise.resolve().then(i.bind(i,3169)),Promise.resolve().then(i.bind(i,835)),Promise.resolve().then(i.bind(i,81)),Promise.resolve().then(i.bind(i,7611)),Promise.resolve().then(i.bind(i,6716)),Promise.resolve().then(i.bind(i,1326)),Promise.resolve().then(i.bind(i,5898)),Promise.resolve().then(i.bind(i,2208)),Promise.resolve().then(i.bind(i,8944)),Promise.resolve().then(i.bind(i,2440)),Promise.resolve().then(i.bind(i,9733)),Promise.resolve().then(i.bind(i,9776)),Promise.resolve().then(i.bind(i,3434)),Promise.resolve().then(i.bind(i,8557)),Promise.resolve().then(i.bind(i,7440)),Promise.resolve().then(i.bind(i,6912)),Promise.resolve().then(i.bind(i,5842)),Promise.resolve().then(i.bind(i,1476)),Promise.resolve().then(i.bind(i,594)),Promise.resolve().then(i.bind(i,8600)),Promise.resolve().then(i.bind(i,2249)),Promise.resolve().then(i.bind(i,7697)),Promise.resolve().then(i.bind(i,8858)),Promise.resolve().then(i.bind(i,3370)),Promise.resolve().then(i.bind(i,7942)),Promise.resolve().then(i.bind(i,7430)),Promise.resolve().then(i.bind(i,2511)),Promise.resolve().then(i.bind(i,9221)),Promise.resolve().then(i.bind(i,3251)),Promise.resolve().then(i.bind(i,3885)),Promise.resolve().then(i.bind(i,5426)),Promise.resolve().then(i.bind(i,2545)),Promise.resolve().then(i.bind(i,5475)),Promise.resolve().then(i.bind(i,2219)),Promise.resolve().then(i.bind(i,4437)),Promise.resolve().then(i.bind(i,2660)),Promise.resolve().then(i.bind(i,1299)),Promise.resolve().then(i.bind(i,6885)),Promise.resolve().then(i.bind(i,7894)),Promise.resolve().then(i.bind(i,9889)),Promise.resolve().then(i.bind(i,907)),Promise.resolve().then(i.bind(i,8729)),Promise.resolve().then(i.bind(i,6727)),Promise.resolve().then(i.t.bind(i,8173,23)),Promise.resolve().then(i.t.bind(i,7970,23)),Promise.resolve().then(i.bind(i,8331))},907:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>h});var r=i(5155),s=i(6223),a=i.n(s);let h=e=>{let{animationPath:t,width:i}=e;return(0,r.jsx)(a(),{loop:!0,autoplay:!0,animationData:t,style:{width:"95%"}})}},8729:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>a});var r=i(5155),s=i(2115);let a=e=>{let{children:t,identifier:i}=e;return(0,s.useEffect)(()=>{let e=document.querySelector(".glow-container-".concat(i)),t=document.querySelectorAll(".glow-card-".concat(i)),r={proximity:40,spread:80,blur:12,gap:32,vertical:!1,opacity:0},s=e=>{for(let i of t){let t=i.getBoundingClientRect();(null==e?void 0:e.x)>t.left-r.proximity&&(null==e?void 0:e.x)<t.left+t.width+r.proximity&&(null==e?void 0:e.y)>t.top-r.proximity&&(null==e?void 0:e.y)<t.top+t.height+r.proximity?i.style.setProperty("--active",1):i.style.setProperty("--active",r.opacity);let s=[t.left+.5*t.width,t.top+.5*t.height],a=180*Math.atan2((null==e?void 0:e.y)-s[1],(null==e?void 0:e.x)-s[0])/Math.PI;a=a<0?a+360:a,i.style.setProperty("--start",a+90)}};return document.body.addEventListener("pointermove",s),e.style.setProperty("--gap",r.gap),e.style.setProperty("--blur",r.blur),e.style.setProperty("--spread",r.spread),e.style.setProperty("--direction",r.vertical?"column":"row"),s(),()=>{document.body.removeEventListener("pointermove",s)}},[i]),(0,r.jsx)("div",{className:"glow-container-".concat(i," glow-container"),children:(0,r.jsxs)("article",{className:"glow-card glow-card-".concat(i," h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full"),children:[(0,r.jsx)("div",{className:"glows"}),t]})})}},6727:(e,t,i)=>{"use strict";i.d(t,{default:()=>d});var r=i(5155),s=i(423),a=i(2115),h=i(8079),l=i(2551);let d=function(){let[e,t]=(0,a.useState)({email:!1,required:!1}),[i,d]=(0,a.useState)(!1),[b,g]=(0,a.useState)({name:"",email:"",message:""}),o=()=>{b.email&&b.message&&b.name&&t({...e,required:!1})},u=async i=>{if(i.preventDefault(),b.email&&b.message&&b.name){if(e.email)return;t({...e,required:!1})}else{t({...e,required:!0});return}try{d(!0),await s.A.post("".concat("http://rizwanakram.me/","/api/contact"),b),l.oR.success("Message sent successfully!"),g({name:"",email:"",message:""})}catch(e){var r,a;l.oR.error(null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(r=a.data)||void 0===r?void 0:r.message)}finally{d(!1)}};return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-medium mb-5 text-[#16f2b3] text-xl uppercase",children:"Contact with me"}),(0,r.jsxs)("div",{className:"max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5",children:[(0,r.jsx)("p",{className:"text-sm text-[#d3d8e8]",children:"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}),(0,r.jsxs)("div",{className:"mt-6 flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("label",{className:"text-base",children:"Your Name: "}),(0,r.jsx)("input",{className:"bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",type:"text",maxLength:"100",required:!0,onChange:e=>g({...b,name:e.target.value}),onBlur:o,value:b.name})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("label",{className:"text-base",children:"Your Email: "}),(0,r.jsx)("input",{className:"bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",type:"email",maxLength:"100",required:!0,value:b.email,onChange:e=>g({...b,email:e.target.value}),onBlur:()=>{var i;o(),t({...e,email:(i=b.email,!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i))})}}),e.email&&(0,r.jsx)("p",{className:"text-sm text-red-400",children:"Please provide a valid email!"})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("label",{className:"text-base",children:"Your Message: "}),(0,r.jsx)("textarea",{className:"bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",maxLength:"500",name:"message",required:!0,onChange:e=>g({...b,message:e.target.value}),onBlur:o,rows:"4",value:b.message})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[e.required&&(0,r.jsx)("p",{className:"text-sm text-red-400",children:"All fiels are required!"}),(0,r.jsx)("button",{className:"flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold",role:"button",onClick:u,disabled:i,children:i?(0,r.jsx)("span",{children:"Sending Message..."}):(0,r.jsxs)("span",{className:"flex items-center gap-1",children:["Send Message",(0,r.jsx)(h.vfs,{size:20})]})})]})]})]})]})}},9999:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/adobe-xd.f0c5ce4c.svg",height:50,width:50,blurWidth:0,blurHeight:0}},2684:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/adobeaudition.96b89ff6.svg",height:256,width:256,blurWidth:0,blurHeight:0}},2691:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/after-effects.4f10a51c.svg",height:50,width:50,blurWidth:0,blurHeight:0}},6438:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/angular.397f2b6c.svg",height:272,width:256,blurWidth:0,blurHeight:0}},1591:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/aws.8dff8f22.svg",height:153,width:256,blurWidth:0,blurHeight:0}},3749:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/azure.9c9dc7f7.svg",height:244,width:256,blurWidth:0,blurHeight:0}},1088:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/blender.eed352b2.svg",height:219,width:256,blurWidth:0,blurHeight:0}},7222:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/bootstrap.9e6ddba8.svg",height:256,width:256,blurWidth:0,blurHeight:0}},5423:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/bulma.5fcd03fd.svg",height:373,width:256,blurWidth:0,blurHeight:0}},2307:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/c.0ffdbd71.svg",height:288,width:256,blurWidth:0,blurHeight:0}},8269:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/canva.0344c508.svg",height:44,width:44,blurWidth:0,blurHeight:0}},1345:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/capacitorjs.ef35ab1a.svg",height:256,width:256,blurWidth:0,blurHeight:0}},7311:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/coffeescript.c4e09c86.svg",height:206,width:256,blurWidth:0,blurHeight:0}},6155:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/cplusplus.d264bdc1.svg",height:288,width:256,blurWidth:0,blurHeight:0}},4067:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/csharp.7851ee36.svg",height:288,width:256,blurWidth:0,blurHeight:0}},9541:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/css.e5e99f36.svg",height:290,width:256,blurWidth:0,blurHeight:0}},58:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/dart.ee3b2b6d.svg",height:256,width:256,blurWidth:0,blurHeight:0}},6350:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/deno.2e2b830f.svg",height:256,width:256,blurWidth:0,blurHeight:0}},6751:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/django.0d24a6f2.svg",height:256,width:256,blurWidth:0,blurHeight:0}},5674:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/docker.23787008.svg",height:50,width:50,blurWidth:0,blurHeight:0}},140:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/dotnet.6e4b6602.svg",height:128,width:128,blurWidth:0,blurHeight:0}},3717:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/dotnetcore.357a5b9b.svg",height:128,width:128,blurWidth:0,blurHeight:0}},9154:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/fastapi.778deaca.svg",height:128,width:128,blurWidth:0,blurHeight:0}},8768:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/fastify.af94c3f5.svg",height:165,width:256,blurWidth:0,blurHeight:0}},524:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/figma.00471f51.svg",height:384,width:256,blurWidth:0,blurHeight:0}},5961:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/firebase.20c6dcf8.svg",height:351,width:256,blurWidth:0,blurHeight:0}},2342:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/flutter.49095fa4.svg",height:299,width:256,blurWidth:0,blurHeight:0}},9882:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/gcp.05f3d772.svg",height:77,width:95,blurWidth:0,blurHeight:0}},6613:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/gimp.d563c9d7.svg",height:256,width:296,blurWidth:0,blurHeight:0}},8732:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/git.21d80414.svg",height:256,width:256,blurWidth:0,blurHeight:0}},6351:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/go.c93ed780.svg",height:192,width:512,blurWidth:0,blurHeight:0}},5771:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/graphql.3a7e3927.svg",height:288,width:256,blurWidth:0,blurHeight:0}},6974:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/haxe.32ac7bcf.svg",height:256,width:256,blurWidth:0,blurHeight:0}},5893:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/html.ed6aaa50.svg",height:290,width:256,blurWidth:0,blurHeight:0}},79:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/illustrator.7eb9c9f7.svg",height:50,width:50,blurWidth:0,blurHeight:0}},2634:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/ionic.f459d036.svg",height:256,width:256,blurWidth:0,blurHeight:0}},4530:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/java.31c00271.svg",height:346,width:256,blurWidth:0,blurHeight:0}},9787:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/javascript.b472cbc1.svg",height:256,width:256,blurWidth:0,blurHeight:0}},7867:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/julia.c330fbca.svg",height:330,width:512,blurWidth:0,blurHeight:0}},5985:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/kotlin.02ff0930.svg",height:256,width:256,blurWidth:0,blurHeight:0}},9418:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/kubernetes.eb23e2ae.svg",height:128,width:128,blurWidth:0,blurHeight:0}},4365:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/lightroom.3238a8d1.svg",height:256,width:256,blurWidth:0,blurHeight:0}},7546:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/linux.6dd6ca83.svg",height:128,width:128,blurWidth:0,blurHeight:0}},3169:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/markdown.58d59da0.svg",height:158,width:256,blurWidth:0,blurHeight:0}},835:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/materialui.2900e517.svg",height:204,width:256,blurWidth:0,blurHeight:0}},81:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/matlab.77f7303a.svg",height:234,width:257,blurWidth:0,blurHeight:0}},7611:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/memsql.f40f9c44.svg",height:184,width:256,blurWidth:0,blurHeight:0}},6716:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/microsoftoffice.974515ca.svg",height:326,width:256,blurWidth:0,blurHeight:0}},1326:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/mongoDB.d8d2b67f.svg",height:249,width:112,blurWidth:0,blurHeight:0}},5898:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/mysql.2ddb80d9.svg",height:252,width:256,blurWidth:0,blurHeight:0}},2208:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/nextJS.99e26750.svg",height:256,width:256,blurWidth:0,blurHeight:0}},8944:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/nginx.dd577355.svg",height:291,width:256,blurWidth:0,blurHeight:0}},2440:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/node-js.bcedbde4.svg",height:64,width:64,blurWidth:0,blurHeight:0}},9733:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/numpy.0fd80405.svg",height:274,width:256,blurWidth:0,blurHeight:0}},9776:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/nuxtJS.0d94fb0c.svg",height:191,width:256,blurWidth:0,blurHeight:0}},3434:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/opencv.96c1a6d0.svg",height:238,width:256,blurWidth:0,blurHeight:0}},8557:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/pandas.1fba2773.svg",height:128,width:128,blurWidth:0,blurHeight:0}},7440:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/photoshop.c2d8557c.svg",height:50,width:50,blurWidth:0,blurHeight:0}},6912:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/php.bdee88ab.svg",height:258,width:512,blurWidth:0,blurHeight:0}},5842:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/picsart.c8403ac7.svg",height:256,width:256,blurWidth:0,blurHeight:0}},1476:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/postgresql.1b536c2f.svg",height:264,width:256,blurWidth:0,blurHeight:0}},594:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/premierepro.f608c54b.svg",height:256,width:256,blurWidth:0,blurHeight:0}},8600:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/python.4ef95129.svg",height:255,width:256,blurWidth:0,blurHeight:0}},2249:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/pytorch.7c4e25e8.svg",height:310,width:256,blurWidth:0,blurHeight:0}},7697:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/react.512a3a7e.svg",height:228,width:256,blurWidth:0,blurHeight:0}},8858:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/ruby.f8a4bb76.svg",height:255,width:256,blurWidth:0,blurHeight:0}},3370:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/scikit-learn.2403fc51.svg",height:128,width:128,blurWidth:0,blurHeight:0}},7942:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/selenium.80aec726.svg",height:269,width:256,blurWidth:0,blurHeight:0}},7430:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/sketch.f176352b.svg",height:232,width:256,blurWidth:0,blurHeight:0}},2511:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/sqlalchemy.88aee860.svg",height:128,width:128,blurWidth:0,blurHeight:0}},9221:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/strapi.e4741f5a.svg",height:252,width:256,blurWidth:0,blurHeight:0}},3251:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/svelte.b1b7be9c.svg",height:308,width:256,blurWidth:0,blurHeight:0}},3885:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/swift.757616d9.svg",height:256,width:256,blurWidth:0,blurHeight:0}},5426:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/tailwind.c0bbaf6f.svg",height:154,width:256,blurWidth:0,blurHeight:0}},2545:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/tensorflow.a44ae670.svg",height:287,width:256,blurWidth:0,blurHeight:0}},5475:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/typescript.97711300.svg",height:256,width:256,blurWidth:0,blurHeight:0}},2219:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/unity.4e0bcc82.svg",height:256,width:256,blurWidth:0,blurHeight:0}},4437:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/vitejs.b0428eab.svg",height:257,width:256,blurWidth:0,blurHeight:0}},2660:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/vue.522784e9.svg",height:221,width:256,blurWidth:0,blurHeight:0}},1299:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/vuetifyjs.88928116.svg",height:293,width:256,blurWidth:0,blurHeight:0}},6885:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/webix.61c9b31f.svg",height:213,width:256,blurWidth:0,blurHeight:0}},7894:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/wolframalpha.1ac762c0.svg",height:256,width:256,blurWidth:0,blurHeight:0}},9889:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r={src:"/rizwan-akram0.github.io/blob/gh-pages/_next/static/media/wordpress.9f06d992.svg",height:255,width:256,blurWidth:0,blurHeight:0}}},e=>{var t=t=>e(e.s=t);e.O(0,[810,66,173,970,694,783,441,517,358],()=>t(7770)),_N_E=e.O()}]);