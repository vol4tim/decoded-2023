(function(){var t={9417:function(t,e,n){"use strict";var s=n(5361),a=n(6281),o=n(9242),i=n(3396);function r(t,e,n,s,a,o){const r=(0,i.up)("Description"),u=(0,i.up)("MainPage");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(r),a.isReady?((0,i.wg)(),(0,i.j4)(u,{key:0})):(0,i.kq)("",!0)],64)}var u=n(7464),c=n.n(u);function l(t){return new(c())(t.toString())}function d(t,e){return l(t).todp(e)}function v(t,e=0,n){return l(t).div(new(c())(10).pow(e.toString())).todp(n).toString()}c().set({toExpNeg:-31,toExpPos:31});var p=n(4870);const f={class:"col-1"},g=(0,i._)("h1",null,[(0,i._)("span",null,"Multi-agent"),(0,i._)("span",null,"system"),(0,i._)("span",null,"on Polkadot")],-1),m=(0,i._)("p",null," Collaborative programming of multiple robots for performing certain tasks has become increasingly accessible. ",-1),h=(0,i._)("a",{href:"https://robonomics.network",target:"_blank",class:"link"}," Robonomics parachain ",-1),b=(0,i._)("div",{class:"decor-plus"},"+",-1),w=(0,i._)("div",{class:"decor-lines"},[(0,i._)("div"),(0,i._)("div")],-1),y=[g,m,h,b,w];function k(t,e){return(0,i.wg)(),(0,i.iD)("div",f,y)}var S=n(89);const x={},M=(0,S.Z)(x,[["render",k]]);var U=M,R=n(7139);const P={class:"col-2"},_=["disabled"],j={class:"account"};function C(t,e,n,s,a,o){const r=(0,i.up)("robo-account-polkadot"),u=(0,i.up)("step1"),c=(0,i.up)("step2"),l=(0,i.up)("step3"),d=(0,i.up)("step4"),v=(0,i.up)("status");return(0,i.wg)(),(0,i.iD)("div",P,[(0,i._)("button",{onClick:e[0]||(e[0]=(...t)=>s.launch&&s.launch(...t)),class:(0,R.C_)({started:s.tx.process.value||""!==s.statusStep1}),disabled:s.tx.process.value||""!==s.statusStep1}," Start ",10,_),(0,i._)("div",j,[(0,i.Wm)(r,{short:"",extensionAllowShift:"",extensionShowIcon:"",selectable:""})]),(0,i.Wm)(u,{status:s.statusStep1},null,8,["status"]),(0,i.Wm)(c,{status:s.statusStep2},null,8,["status"]),(0,i.Wm)(l,{status:s.statusStep3},null,8,["status"]),(0,i.Wm)(d,{status:s.statusStep4,color:s.сolorStep4},null,8,["status","color"]),(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,R.zw)(s.statusText),1)])),_:1})])}var D={manipulator:"4CvF6jVED256b4iJZkZjLbet4i6rUhgxdN98b8VtGmWytJxQ",lamp:"4EEx5LiK6GPQaYVhyePut84uAg3nwsbzUWhsBvgyF5AMBMLR",dog:"4EEx5LiK6GPQaYVhyePut84uAg3nwsbzUWhsBvgyF5AMBMLR",command:"QmNLei78zWmzUdbeRB3CiUfAizWUrbeeZh5K1rhAQKCh52",subscription:"4HnTtj2hdExSjddA3xqMBx1o5S27XmUYBhjkGQ9ZkpW6Bz8w",red:"Qmdx4qag1yFRKJGNMNU2hneqqfQz28acg698gu3RGixPNy",green:"QmVep3wpUvMsYJwvVcwgp8ArzRffbsKLXpzwXsajn43sxK",timeout:{step1:3e3,step2:5e3,step3:15e3}};function I(){const{instance:t}=(0,i.f3)("RobonomicsProvider");return(0,p.IU)(t).value}n(1703);var W=n(7281);const O=(t=null)=>{const e=I(),n=(0,p.iH)(t),s=(0,p.iH)([]),a=async()=>{if(n.value)try{(0,W.Y)(n.value);const t=await e.rws.getDevices(n.value);return void(s.value=t.map((t=>t.toHuman())))}catch(t){console.log(t)}s.value=[]};return(0,i.YP)(n,(async()=>{await a()}),{immediate:!0}),{owner:n,devices:s,loadDevices:a}},H=(t=null)=>{const e=(0,p.iH)(t),n=(0,p.qj)({value:null}),s=I(),{devices:a,loadDevices:o}=O(e),r=()=>s.api.consts.rws.referenceCallWeight,u=async t=>{const e=await s.rws.getLedger(t);if(!e.isEmpty)return e.value},c=864e5,l=async t=>{const e=await u(t);if(!e)return-1;const n=e.freeWeight.toNumber(),s=e.lastUpdate.toNumber(),a=e.issueTime.toNumber(),o=r(),i=Date.now();let l=(()=>{let t=30*c;return i<a+t?1e4:0})();const d=i-s;return Math.floor(n+o*l*d/1e9)},d=(0,i.Fl)((()=>{if(null===n.value)return"";const t=(0,p.IU)(n),e=t.value.issueTime.toNumber();let s=0;return t.value.kind.isDaily&&(s=t.value.kind.value.days.toNumber()),e+s*c})),v=(0,i.Fl)((()=>{if(null===n.value)return 0;const t=(0,p.IU)(n);let e=0;return t.value.kind.isDaily&&(e=t.value.kind.value.days.toNumber()),e/30})),f=(0,i.Fl)((()=>!(null===n.value||Date.now()>d.value))),g=(0,i.Fl)((()=>null!==n.value)),m=async()=>{if(e.value)try{(0,W.Y)(e.value);const t=await u(e.value);if(t)return void(n.value=t)}catch(t){console.log(t)}n.value=null};return(0,i.YP)(e,(async()=>{await m()}),{immediate:!0}),{owner:e,dataRaw:n,hasSubscription:g,isActive:f,countMonth:v,validUntil:d,loadLedger:m,devices:a,loadDevices:o,getFreeWeightCalc:l}},A=()=>{const t=I(),{getFreeWeightCalc:e}=H(),n=(0,p.iH)(null),s=(0,p.iH)(null),a=(0,p.iH)(!1),o=async(e,n)=>{if(!n){if(!t.accountManager.account)throw new Error("Signer required");n=t.accountManager.account.address}return(await e.paymentInfo(n)).weight.toNumber()},i=async(t,n)=>{const s=await e(n);if(s<0)throw new Error(`Not found ledger ${n}`);const a=await o(t);if(a>s)throw new Error(`The origin account have no enough free weight to process these call. Call weight ${a}, Free weight ${s}`)},r=async(e,o=!1)=>{n.value=null,s.value=null,a.value=!0;try{o&&(await i(e,o),t.accountManager.useSubscription(o)),n.value=await t.accountManager.signAndSend(e),console.log("tx",n.value.block,n.value.tx)}catch(r){console.log(r),s.value=r.message}return a.value=!1,o&&t.accountManager.useSubscription(!1),n};return{error:s,process:a,result:n,send:r}};var E=n(6708);const T={class:"status"};function N(t,e,n,s,a,o){return(0,i.wg)(),(0,i.iD)("div",T,[(0,i.WI)(t.$slots,"default")])}var $={};const B=(0,S.Z)($,[["render",N]]);var F=B;const Z=(0,i.uE)('<div class="step-content"><div class="step-icon"></div><div class="step-titleline"><div class="step-number">1</div><div class="step-title"> MyCobot 280 Jetson Nano 6 DOF Collaborative Robot </div></div></div><div class="step-status"><span></span><span></span><span></span><span></span></div>',2),z=[Z];function L(t,e,n,s,a,o){return(0,i.wg)(),(0,i.iD)("div",{class:(0,R.C_)(["step step-1",n.status])},z,2)}var q={props:{status:{default:""}}};const Q=(0,S.Z)(q,[["render",L]]);var Y=Q;const K=(0,i.uE)('<div class="step-content"><div class="step-icon"></div><div class="step-titleline"><div class="step-number">2</div><div class="step-title">Human agent access</div></div></div><div class="step-status"><span></span><span></span><span></span><span></span></div>',2),V=[K];function G(t,e,n,s,a,o){return(0,i.wg)(),(0,i.iD)("div",{class:(0,R.C_)(["step step-2",n.status])},V,2)}var J={props:{status:{default:""}}};const X=(0,S.Z)(J,[["render",G]]);var tt=X;const et=(0,i.uE)('<div class="step-content"><div class="step-icon"></div><div class="step-titleline"><div class="step-number">3</div><div class="step-title">Mini Pupper 2 ROS2</div></div></div><div class="step-status"><span></span><span></span><span></span><span></span></div>',2),nt=[et];function st(t,e,n,s,a,o){return(0,i.wg)(),(0,i.iD)("div",{class:(0,R.C_)(["step step-3",n.status])},nt,2)}var at={props:{status:{default:""}}};const ot=(0,S.Z)(at,[["render",st]]);var it=ot;const rt=(0,i.uE)('<div class="step-content"><div class="step-icon"></div><div class="step-titleline"><div class="step-number">4</div><div class="step-title">Status lamp</div></div></div><div class="step-status"><span></span><span></span><span></span><span></span></div>',2),ut=[rt];function ct(t,e,n,s,a,o){return(0,i.wg)(),(0,i.iD)("div",{class:(0,R.C_)(["step step-4",[n.status,n.color]])},ut,2)}var lt={props:{status:{default:""},color:{default:""}}};const dt=(0,S.Z)(lt,[["render",ct]]);var vt=dt;const pt={none:"",loading:"loading",ok:"ok",error:"error",red:"",green:"success"};function ft(t){return new Promise((e=>{setTimeout((()=>{e()}),t)}))}var gt={components:{Step1:Y,Step2:tt,Step3:it,Step4:vt,Status:F},setup(){const t=I(),e=A(),n=(0,p.iH)("Waiting for pressing 'Start' button"),s=(0,p.iH)(pt.none),a=(0,p.iH)(pt.none),o=(0,p.iH)(pt.none),i=(0,p.iH)(pt.none),r=(0,p.iH)(pt.red),u=async()=>{n.value="Tx launched by 'Start' button",s.value=pt.loading;const u=t.launch.send(D.manipulator,D.command);if(await e.send(u,D.subscription),e.error.value)"Cancelled"!==e.error.value?(console.log(`Error: ${e.error.value}`),n.value=e.error.value,s.value=pt.error):(console.log("Calcel"),n.value="Waiting for pressing 'Start' button",s.value=pt.none);else{console.log("Launch sended");const e=await t.launch.on({},(t=>{for(const s of t){const t=E.P6.hexToCid(s.parameter);s.account===D.dog&&s.robot===D.lamp&&(a.value=pt.ok,o.value=pt.ok,i.value=pt.ok,t===D.red?(n.value="Status lamp got result of track, failed",r.value=pt.red):(n.value="Status lamp got result of track, success",r.value=pt.green),e())}}));n.value="Transaction sent",await ft(1500),n.value="MyCobot received request",s.value=pt.ok,a.value=pt.loading,await ft(D.timeout.step1),n.value="Human agent got access",await ft(D.timeout.step2),n.value="Human agent is manipulating Mini Pupper 2",a.value=pt.ok,o.value=pt.loading,await ft(D.timeout.step3),o.value=pt.ok,i.value=pt.loading}};return{launch:u,tx:e,statusText:n,statusStep1:s,statusStep2:a,statusStep3:o,statusStep4:i,"сolorStep4":r}}};const mt=(0,S.Z)(gt,[["render",C]]);var ht=mt,bt={name:"App",components:{Description:U,MainPage:ht},inject:["RobonomicsProvider"],data(){return{isReady:this.RobonomicsProvider.isReady}},computed:{robonomics:function(){return(0,p.IU)(this.RobonomicsProvider.instance.value)}},watch:{isReady:function(){this.handlerAccount(this.$store.state.robonomicsUIvue.polkadot.address)},"$store.state.robonomicsUIvue.polkadot.extensionObj":function(t){t.signer&&t.signer.signRaw&&this.$store.state.robonomicsUIvue.polkadot.address&&this.handlerAccount(this.$store.state.robonomicsUIvue.polkadot.address)},"$store.state.robonomicsUIvue.polkadot.address":{handler:function(t){t&&this.$store.state.robonomicsUIvue.polkadot.extensionObj.signer&&this.$store.state.robonomicsUIvue.polkadot.extensionObj.signer.signRaw&&this.handlerAccount(t)},immediate:!0}},methods:{async handlerAccount(t){if(!this.isReady)return;this.unsubscribeBalance&&this.unsubscribeBalance();const e=this.$store.state.robonomicsUIvue.polkadot.accounts.find((e=>e.address===t));e&&(await this.robonomics.accountManager.setSender(t,{type:e.type,extension:this.$store.state.robonomicsUIvue.polkadot.extensionObj}),this.unsubscribeBalance=await this.robonomics.account.getBalance(t,(t=>{const e=t.free.sub(t.feeFrozen);this.$store.commit("polkadot/setBalanceXRT",d(v(e,this.robonomics.api.registry.chainDecimals[0]),4))})))}}};const wt=(0,S.Z)(bt,[["render",r]]);var yt=wt,kt=n(720),St=n(6117),xt=n(142);class Mt extends E.Uk{constructor(t,e={},n=null){super(t,n),this.extension=null,t.loadAll(e),this.setReady(!0)}async beforeSetSender(t,{type:e,extension:n}){this.extension=n;try{this.keyring.getPair(t)}catch(s){this.keyring.loadInjected(t,{},e)}}async afterSetSender(){this.account.meta.isInjected&&this.extension&&(this.api.setSigner(this.extension.signer),this.account.signMsg=async t=>(await this.extension.signer.signRaw({address:this.account.address,data:(0,St.c)((0,xt.Rl)(t)),type:"bytes"})).signature)}}var Ut={install:async(t,e)=>{const n=(0,p.iH)(!1),s=(0,p.qj)({value:void 0});t.provide("RobonomicsProvider",{isReady:n,instance:s}),s.value=await E.l.createInstance(e),(0,p.IU)(s).value.setAccountManager(new Mt(kt.ZP)),n.value=!0}},Rt=n(65);const Pt=(0,Rt.MT)({state:{name:"Vue"}});var _t=Pt;window.Buffer=s.lW;const jt=(0,o.ri)(yt);jt.use(_t).use(a.robonomicsUI,{store:_t}).use(Ut,{endpoint:"wss://kusama.rpc.robonomics.network/"}).mount("#app")},6601:function(){},173:function(){},1887:function(){}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var o=e[s]={id:s,loaded:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,s,a,o){if(!s){var i=1/0;for(l=0;l<t.length;l++){s=t[l][0],a=t[l][1],o=t[l][2];for(var r=!0,u=0;u<s.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](s[u])}))?s.splice(u--,1):(r=!1,o<i&&(i=o));if(r){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[s,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,o,i=s[0],r=s[1],u=s[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(u)var l=u(n)}for(e&&e(s);c<i.length;c++)o=i[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},s=self["webpackChunkdecoded_2023"]=self["webpackChunkdecoded_2023"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(9417)}));s=n.O(s)})();
//# sourceMappingURL=app.47740cd4.js.map