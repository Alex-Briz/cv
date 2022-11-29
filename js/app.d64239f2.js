(function(){"use strict";var t={3447:function(t,e,o){var n=o(9242),a=o(3396),i=o.p+"media/open-tab.9731f07b.wav",r=o.p+"media/close-tab.68763d7e.wav";const l=(0,a._)("h6",null,"© 2022 Chervoniak (Alex-Briz) Vadym",-1),s={class:"audio"},c=(0,a._)("audio",{id:"open",autoplay:"",controls:""},[(0,a._)("source",{src:i,type:"audio/wav"}),(0,a.Uk)(" Your browser does not support the audio element. ")],-1),d=(0,a._)("audio",{id:"close",controls:""},[(0,a._)("source",{src:r,type:"audio/wav"}),(0,a.Uk)(" Your browser does not support the audio element. ")],-1),p=[c,d];function u(t,e,o,i,r,c){const d=(0,a.up)("WithUkraine"),u=(0,a.up)("HeadName"),g=(0,a.up)("InfoBlock");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(d),(0,a.Wm)(u),(0,a.Wm)(g,{text:"my history:",dataObject:r.history,defaultShow:!1},null,8,["dataObject"]),(0,a.Wm)(g,{text:"demo pages:",dataObject:r.folio,defaultShow:!0},null,8,["dataObject"]),(0,a.Wm)(g,{text:"impowered by:",dataObject:r.thanks,defaultShow:!1},null,8,["dataObject"]),(0,a.Wm)(g,{text:"inspired by:",dataObject:r.inspired,defaultShow:!1},null,8,["dataObject"]),(0,a.Wm)(g,{text:"get in touch:",dataObject:r.contacts,defaultShow:!0,extraStyles:"contacts"},null,8,["dataObject"]),l,(0,a.wy)((0,a._)("div",s,p,512),[[n.F8,!1]])])}const g=t=>((0,a.dD)("data-v-242871ef"),t=t(),(0,a.Cn)(),t),h={id:"withUkraine"},m=g((()=>(0,a._)("div",{id:"time"},"dd/mm/yyyy hh:mm:ss",-1))),v=g((()=>(0,a._)("p",null,[(0,a.Uk)("Stand With "),(0,a._)("span",null,"Ukraine")],-1))),b=g((()=>(0,a._)("div",{id:"flag"},[(0,a._)("div",{id:"navy"},"navy"),(0,a._)("div",{id:"gold"},"gold")],-1))),w=[m,v,b];function k(t,e,o,n,i,r){return(0,a.wg)(),(0,a.iD)("div",h,w)}var f={name:"WithUkraine",data(){return{}},methods:{clock(){const t={};let e=(new Date).toLocaleString("nl-BE",t);document.getElementById("time").innerText=e}},mounted(){setInterval(this.clock,1e3)}},y=o(89);const _=(0,y.Z)(f,[["render",k],["__scopeId","data-v-242871ef"]]);var S=_,j=o.p+"img/photo956.46cbbe4b.png";const x=t=>((0,a.dD)("data-v-4ea3061a"),t=t(),(0,a.Cn)(),t),O={class:"main"},B=x((()=>(0,a._)("div",{class:"top"},[(0,a._)("h1",null,[(0,a._)("b",null,"Chervoniak Vadym")]),(0,a._)("p",null,[(0,a._)("b",null,"web developer")])],-1))),C=x((()=>(0,a._)("div",{class:"photo"},[(0,a._)("img",{src:j,alt:"photo"})],-1))),z=[B,C];function I(t,e,o,n,i,r){return(0,a.wg)(),(0,a.iD)("div",O,z)}var P={name:"HeadName"};const D=(0,y.Z)(P,[["render",I],["__scopeId","data-v-4ea3061a"]]);var W=D,F=o(7139);const U=t=>((0,a.dD)("data-v-afd49098"),t=t(),(0,a.Cn)(),t),A={class:"block"},E=["href"],H=["src","alt"],T={key:1},V=U((()=>(0,a._)("div",{class:(0,F.C_)(["stick"])},null,-1)));function L(t,e,o,i,r,l){return(0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("div",{class:"toggler",onClick:e[0]||(e[0]=(...t)=>l.toggle&&l.toggle(...t)),style:(0,F.j5)([r.toggleBool?{background:"whitesmoke",color:"var(--viridian)",textShadow:"0 0 0.5vh var(--viridian)"}:{background:"var(--viridian)",color:"whitesmoke",textShadow:"0 0 0.5vh whitesmoke"}])},[(0,a._)("span",{class:(0,F.C_)([r.toggleBool?"mirrorVertSpan":"normalVertSpan"]),style:(0,F.j5)([r.toggleBool?{background:"var(--viridian)",color:"whitesmoke",textShadow:"0 0 0.5vh whitesmoke"}:{background:"whitesmoke",color:"var(--viridian)",textShadow:"0 0 0.5vh var(--viridian)"}])},"V",6),(0,a.Uk)((0,F.zw)(o.text)+" ",1),(0,a._)("span",{class:(0,F.C_)([r.toggleBool?"mirrorVertSpan":"normalVertSpan"]),style:(0,F.j5)([r.toggleBool?{background:"var(--viridian)",color:"whitesmoke"}:{background:"whitesmoke",color:"var(--viridian)"}])},"V",6)],4),(0,a.wy)((0,a._)("ul",{class:(0,F.C_)([o.dataObject[0].link?"wrapper":"paragraphs"])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.dataObject,((t,e)=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:(0,F.C_)([o.dataObject[0].link?"wrapper_li":"paragraph_li"]),style:(0,F.j5)(["contacts"===o.extraStyles?{justifyContent:"space-between",border:"none",width:"25%",height:"14.5vh",margin:"1vh"}:{justifyContent:"space-between"}])},[o.dataObject[e].link&&o.dataObject[e].title?((0,a.wg)(),(0,a.iD)("a",{key:0,href:t.link,style:(0,F.j5)(["contacts"===o.extraStyles?{fontSize:"0.5rem"}:{}])},[o.dataObject[e].image?((0,a.wg)(),(0,a.iD)("img",{key:0,src:t.image,alt:t.title,style:(0,F.j5)(["contacts"!==o.extraStyles?{height:"11.5vh",width:"auto"}:{}])},null,12,H)):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,F.zw)(t.title),1)],12,E)):((0,a.wg)(),(0,a.iD)("p",T,(0,F.zw)(t.paragraph),1))],6)))),128)),V],2),[[n.F8,r.toggleBool]])])}var N={name:"InfoBlock",props:{text:String,dataObject:Object,defaultShow:Boolean,extraStyles:String},data(){return{toggleBool:this.$props.defaultShow}},methods:{toggle(){return!0===this.toggleBool?this.closeSound():!1===this.toggleBool&&this.openSound(),this.toggleBool=!this.toggleBool},openSound(){let t=document.getElementById("open");t.play()},closeSound(){let t=document.getElementById("close");t.play()}},mounted(){}};const M=(0,y.Z)(N,[["render",L],["__scopeId","data-v-afd49098"]]);var R=M,Z={thanks:[{link:"https://ubuntu.com/",image:"https://assets.ubuntu.com/v1/5924f0b8-CoF-2022.svg",title:"Canonical Ubuntu (22.04 LTS Jammy Jellyfish)"},{link:"https://www.hp.com/us-en/home.html",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png",title:"Hewlett-Packard (HP 250 G5 Notebook PC) "},{link:"https://www.logitech.com/",image:"https://companieslogo.com/img/orig/LOGI-50d54b0c.png?t=1649295494",title:"Logitech (K-540 + M-310)"}],folio:[{link:"https://alex-briz.github.io/AIB/",image:"./01.png",title:"AiB (dynamic) logo"},{link:"https://alex-briz.github.io/fireSnow/",image:"./02.png",title:"Fire's'Now - nice css snow (from SCSS)"},{link:"https://alex-briz.github.io/clicker-js/",image:"./03.png",title:"Clicker -- simple test game"},{link:"https://alex-briz.github.io/tic-tac-toe-js/",image:"./04.png",title:"Tic-Tac-Toe (with drag'n'drop)"},{link:"https://alex-briz.github.io/wordle-js/",image:"./05.png",title:"Wordle guessing game (ukrainian)"},{link:"https://alex-briz.github.io/fetch-api-js/",image:"./06.png",title:"Fetch API with Rick and Morthy"},{link:"https://alex-briz.github.io/random-user-vue/",image:"./07.png",title:"Random user getting with vue.js"},{link:"https://alex-briz.github.io/travel-app-vue/",image:"./08.png",title:"Vue Travel app (SPA vue-router)"},{link:"https://alex-briz.github.io/food-cart-vue/",image:"./09.png",title:"Food delivery app with cart (vue)"},{link:"https://alex-briz.github.io/shop-react/",image:"./10.png",title:"Shop example (using ReactJS)"},{link:"https://alex-briz.github.io/gpt3-react/",image:"./11.png",title:"Responsive product landing site (react)"}],history:[{paragraph:"Ще з 2014 стрімкий розвиток ІТ відкрив мені новий вимір професійного зростання та додаткового на початку заробітку.,\n        Я займався консультативною діяльністю онлайн (хоч і не в суто технічному напрямку),\n        маю невеликий досвід рерайтингу/копірайтингу, промотингу, менеджерські навички\n        (самостійної та колективно-взаємної організації).\n        "},{paragraph:'\n        В шкільні роки я був не відмінником, але - твердим "хорошистом" без "трійок",\n        брав участь в місцевих міжшкільних олімпіадах з математики, фізики, хімії (та навіть займав не останні місця),\n        приймав участь від своєї школи з англійської і інформатики.\n        '},{paragraph:"\n        В коледжі був зам. старости навчальної групи та вчився на підвищену стипендію і закінчив коледж з відзнакою.\n        Пішов одразу на 3-й курс університету за скороченою програмою (факультет фізики, кафедра новітньої енергетики в м. Чернівці),\n        отримував підвищену стипендію і знову ж таки був зам. старости групи.\n        "},{paragraph:"\n        Свій перший ПК я придбав у 2003-му, за гроші зароблені на літніх канікулах.\n        Звіттоді я й розвиваюся.\n        "},{paragraph:"\n        Я застав час коли найпоширенішою була ОС WinXP, потім я розвивав у собі поступово креативні здібності,\n        займався створенням та редагуванням цифрової музики (з використанням таких інструментів як FLStudio,\n        коли він ще називався Fruity Loops 3, SoundForge коли ця утиліта належала компанії Sonic Foundary,\n        а не Sony, та Audition, коли він ще не був куплений Adobe).\n        "},{paragraph:"\n        Деякий час співпрацював з рекламно-телекомунікаційним\n        підприємством (студією звукозапису та діджей-школою за сумісництвом, що доречі існує, але в іншій формі наразі -\n        як рекламне агенство в місті, де я родився і виріс - Кам'янець-Подільський, що на Хмельниччині).\n        "},{paragraph:"\n        За допомогою Adobe Photoshop і спеціального друкарського устаткування займались якийсь час виготовленням сувенірної\n        продукції на замовлення, - брендована одежа, мерч-продукція і т. п.\n        "},{paragraph:"\n        Мені зрозумілі і близькі процеси неперервної розробки,\n        до душі постійний розвиток, і націленість на стабільну співпрацю, на основі взаємоповаги, та \"робота на результат\",\n        і я не боюся обов'язків та відповідальності пов'язаних з професійною діяльністю.\n        "},{paragraph:"\n        Я звик працювати по 50 годин на тиждень, і думаю - це цілком нормально.\n        Якщо необхідно, то я готовий прикласти скільки треба зусиль, та не пожалкую часу заради успіху в реалізації поставлених цілей,\n        розвя'зання технічних задач, досягнення справжнього та глибокого (вільного) розуміння предмету.\n        "},{paragraph:'\n        Відчуття впевненості у власних знаннях і вміннях,\n        та іх цінності для інших, - це те, що "дарує крила"! ;)\n        Приємно по життю бути людиною справи/діла, триматися взаємодомовленостей та взаєморозуміння.'}],contacts:[{link:"+380505444199",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Phone_Shiny_Icon.svg/768px-Phone_Shiny_Icon.svg.png",title:"+380505444199"},{link:"ua505444199@gmail.com",image:"https://iconarchive.com/download/i60229/zerode/plump/Mail.ico",title:"ua505444199@gmail.com"},{link:"@alex11briz",image:"https://cdn3.iconfinder.com/data/icons/social-networks-34/96/social-22-512.png",title:"@alex11briz"}],inspired:[{image:"https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/05/leading-lineheight.jpg?fit=1200%2C600&ssl=1",title:"p",paragraph:"paragraph"}]},J={name:"App",components:{WithUkraine:S,HeadName:W,InfoBlock:R},data(){return{thanks:Z.thanks,folio:Z.folio,history:Z.history,contacts:Z.contacts,inspired:Z.inspired}},methods:{scroll(){var t=document.getElementsByClassName("wrapper")[0];t.style.setProperty("overflow-y","scroll"),t.scrollTop=t.scrollHeight},audioPreload(){let t=document.getElementById("open"),e=document.getElementById("close");t.preload="auto",t.load(),e.preload="auto",e.load()}},mounted(){this.scroll(),document.addEventListener("DOMContentLoaded",(()=>{this.audioPreload()}))}};const Y=(0,y.Z)(J,[["render",u]]);var G=Y;(0,n.ri)(G).mount("#app")}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,n,a,i){if(!n){var r=1/0;for(d=0;d<t.length;d++){n=t[d][0],a=t[d][1],i=t[d][2];for(var l=!0,s=0;s<n.length;s++)(!1&i||r>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[s])}))?n.splice(s--,1):(l=!1,i<r&&(r=i));if(l){t.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[n,a,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/landing-cv-vue/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,r=n[0],l=n[1],s=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(s)var d=s(o)}for(e&&e(n);c<r.length;c++)i=r[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(d)},n=self["webpackChunklanding_cv_vue"]=self["webpackChunklanding_cv_vue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3447)}));n=o.O(n)})();
//# sourceMappingURL=app.d64239f2.js.map