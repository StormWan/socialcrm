(function(e){function t(t){for(var a,r,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)r=u[s],o[r]&&f.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-19f2292e":"a3f52a3f","chunk-2e532d6d":"4276435b","chunk-2ef8b17c":"cba6b3a1","chunk-4b4e3bde":"7f11c27b","chunk-bdd29826":"cc753cba","chunk-d222b1b2":"8eb0959e","chunk-e61d96b8":"6cdba1a6","chunk-ee425646":"042fa0c8","chunk-f23b7f4c":"1bf957e3"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-19f2292e":1,"chunk-2e532d6d":1,"chunk-2ef8b17c":1,"chunk-4b4e3bde":1,"chunk-bdd29826":1,"chunk-d222b1b2":1,"chunk-e61d96b8":1,"chunk-ee425646":1,"chunk-f23b7f4c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-19f2292e":"4df5c85c","chunk-2e532d6d":"16e5676b","chunk-2ef8b17c":"02033675","chunk-4b4e3bde":"7ff616cb","chunk-bdd29826":"37705832","chunk-d222b1b2":"545a5a8f","chunk-e61d96b8":"d129a030","chunk-ee425646":"16e5676b","chunk-f23b7f4c":"33cf4932"}[e]+".css",o=i.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===a||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e),l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}o[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"365c":function(e,t,n){"use strict";var a=n("a417"),r=n("795b"),o=n.n(r),c=(n("e7e5"),n("d399")),u=n("bc3a"),i=n.n(u),l=n("41cb"),s=n("4360"),f=function(e){Object(c["a"])({message:e,duration:1e3,forbidClick:!0})},d=function(){l["a"].go(0)},h=function(e,t){switch(e){case 401:f("未登录，请登录"),localStorage.clear(),setTimeout(function(){d()},1e3);break;case 403:f("登录过期，请重新登录"),localStorage.clear(),setTimeout(function(){d()},1e3);break;case 404:f("请求的资源不存在");break;default:console.log(t)}},p=i.a.create({timeout:24e3});p.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",p.interceptors.request.use(function(e){var t=localStorage.getItem("token");return t&&(e.headers.Authorization="JWT "+t),e},function(e){return o.a.error(e)}),p.interceptors.response.use(function(e){return 200===e.status?o.a.resolve(e):o.a.reject(e)},function(e){var t=e.response;if(t)return h(t.status,t.data.message),o.a.reject(t);s["a"].commit("changeNetwork",!1)});var b=p,m=n("4328"),g=n.n(m),k={auth:function(e){return b.post("".concat(a["a"].scrm,"/account/auth/"),g.a.stringify(e))},yaoAuth:function(e){return b.post("".concat(a["a"].scrm,"/account/yaoAuth/"),g.a.stringify(e))},merchantAuth:function(e){return b.post("".concat(a["a"].scrm,"/account/merchantAuth/"),g.a.stringify(e))}},v=k,y={showCreate:function(e){return b.post("".concat(a["a"].scrm,"/marketing/show/"),e)},activityDetail:function(e,t){return b.get("".concat(a["a"].scrm,"/marketing/activity/").concat(e,"/"),{params:t})}},w=y,A={shareCreate:function(e){return b.post("".concat(a["a"].scrm,"/marketing/show/"),e)},activityDetail:function(e,t){return b.get("".concat(a["a"].scrm,"/marketing/activity/").concat(e,"/"),{params:t})}},x=A;t["a"]={apply:v,show:w,share:x}},"41cb":function(e,t,n){"use strict";n("96cf");var a=n("3b8d"),r=n("2b0e"),o=n("8c4f"),c=n("365c"),u=n("9e55"),i=n("a417");r["a"].use(o["a"]);var l=new o["a"]({routes:[{path:"/",name:"home",meta:{noAuth:!1},components:{default:function(){return n.e("chunk-d222b1b2").then(n.bind(null,"7abe"))}}},{path:"/task",name:"task",meta:{keepAlive:!0,noAuth:!0},components:{default:function(){return n.e("chunk-4b4e3bde").then(n.bind(null,"c430"))},tabbar:function(){return n.e("chunk-2ef8b17c").then(n.bind(null,"73b0"))}}},{path:"/about",name:"about",meta:{keepAlive:!0,noAuth:!0},components:{default:function(){return n.e("chunk-e61d96b8").then(n.bind(null,"613f"))},tabbar:function(){return n.e("chunk-2ef8b17c").then(n.bind(null,"73b0"))}}},{path:"/teach",name:"teach",meta:{keepAlive:!0,noAuth:!0},components:{default:function(){return n.e("chunk-19f2292e").then(n.bind(null,"aeab"))}}},{path:"/setting",name:"settiing",meta:{keepAlive:!0,noAuth:!0},components:{default:function(){return n.e("chunk-2e532d6d").then(n.bind(null,"7424"))}}},{path:"/rebate",name:"rebate",meta:{keepAlive:!0,noAuth:!0},components:{default:function(){return n.e("chunk-ee425646").then(n.bind(null,"5f64"))}}},{path:"/bingingPhone",name:"bingingPhone",meta:{keepAlive:!0,noAuth:!0},components:{default:function(){return n.e("chunk-f23b7f4c").then(n.bind(null,"2af2"))}}},{path:"/shareMoments",name:"shareMoments",meta:{keepAlive:!0,noAuth:!1},components:{default:function(){return n.e("chunk-bdd29826").then(n.bind(null,"58be"))}}}]});l.beforeEach(function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,n,a){var r,o,l,s,f,d,h,p,b,m,g,k;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some(function(e){return e.meta.noAuth})){e.next=4;break}a(),e.next=70;break;case 4:if(r=localStorage.getItem("token"),o=localStorage.getItem("merchant_openid"),console.log("token="+r),console.log("merchantOpenid= "+o),null===r||null===o){e.next=12;break}return console.log("获得token, 和merchantOpenid进入页面: token="+r+" merchantOpenid="+o),a(),e.abrupt("return");case 12:if(l=Object(u["a"])("activity"),s=Object(u["a"])("appid"),f=i["a"].base+"/?appid="+s+"&activity="+l,encodeURIComponent(f),console.log("redirectUrl="+f),null!==r){e.next=46;break}if(d=Object(u["a"])("openid"),h=Object(u["a"])("userinfo"),void 0!==d&&null!==d&&""!==d){e.next=25;break}console.log("yaoyaola auth redirect"),a(),e.next=46;break;case 25:return e.next=27,c["a"].apply.yaoAuth({openid:d,userinfo:h,token:r,appid:s});case 27:if(p=e.sent,b=p.data,200!==b.code){e.next=44;break}if(console.log(b),localStorage.setItem("token",b.data.token),"null"!==b.data.merchant_openid&&null!==b.data.merchant_openid&&""!==b.data.merchant_openid){e.next=37;break}return console.log(b.data.merchant_openid),localStorage.removeItem("merchant_openid"),a(),e.abrupt("return");case 37:return console.log(b.data),localStorage.setItem("merchant_openid",b.data.merchant_openid),localStorage.setItem("userInfo",b.data),a(),e.abrupt("return");case 44:console.log(b),a();case 46:if(null===r||null!==o){e.next=70;break}if(m=Object(u["a"])("code"),console.log("code="+m),console.log("appid="+s),null!==m&&void 0!==m&&""!==m){e.next=55;break}console.log("in code is null and redirect to wechat auth code="+m),a(),e.next=70;break;case 55:return e.next=57,c["a"].apply.merchantAuth({code:m,token:r,redirect_uri:f});case 57:if(g=e.sent,k=g.data,200!==k.code){e.next=68;break}return console.log("merchant login success"),console.log(k),localStorage.setItem("merchant_openid",k.data.merchant_openid),localStorage.setItem("userInfo",k.data),a(),e.abrupt("return");case 68:console.log(k),a();case 70:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}()),t["a"]=l},4360:function(e,t,n){"use strict";var a,r=n("bd86"),o=n("2b0e"),c=n("2f62"),u="login",i="logout",l="title",s={activeTab:0},f={setActiveTab:function(e,t){e.activeTab=t}},d={namespaced:!0,state:s,mutations:f};o["a"].use(c["a"]);t["a"]=new c["a"].Store({modules:{tabbar:d},state:{user:{},token:null,title:""},mutations:(a={},Object(r["a"])(a,u,function(e,t){localStorage.token=t,e.token=t}),Object(r["a"])(a,i,function(e){localStorage.removeItem("token"),e.token=null}),Object(r["a"])(a,l,function(e,t){e.title=t}),a),actions:{}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e17f");var a=n("2241"),r=(n("66cf"),n("343b")),o=(n("c3a6"),n("ad06")),c=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("router-view",{attrs:{name:"tabbar"}})],1)},i=[],l=(n("034f"),n("2877")),s={},f=Object(l["a"])(s,u,i,!1,null,null,null),d=f.exports,h=n("41cb"),p=n("4360"),b=n("365c");c["a"].prototype.$api=b["a"],c["a"].config.productionTip=!1,c["a"].use(o["a"]),c["a"].use(r["a"]),c["a"].use(a["a"]),new c["a"]({router:h["a"],store:p["a"],render:function(e){return e(d)}}).$mount("#app")},"64a9":function(e,t,n){},"9e55":function(e,t,n){"use strict";n.d(t,"a",function(){return a});n("28a5"),n("3b2b"),n("a481"),n("386d"),n("4917");function a(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}},a417:function(e,t,n){"use strict";var a={scrm:"http://newsh5.cn/api",base:"http://newsh5.cn"};t["a"]=a}});
//# sourceMappingURL=app.5682a4cb.js.map