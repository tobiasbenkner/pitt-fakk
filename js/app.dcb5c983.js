(function(t){function e(e){for(var r,a,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)a=s[p],o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/pitt-force/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"449b":function(t,e,n){t.exports=n.p+"media/metronome.6561a0f4.wav"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r,o,i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("main",[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600"}},[n("v-toolbar",{attrs:{card:"",dense:""}},[n("v-toolbar-title",[n("span",{staticClass:"subheading"},[t._v("PITT-FAKK")])])],1),n("v-card-text",[n("v-layout",{attrs:{"justify-space-between":"","mb-3":""}},[n("v-flex",{attrs:{"text-xs-left":"",xs5:""}},[n("span",{staticClass:"display-3 font-weight-light",domProps:{textContent:t._s(t.bpm)}}),n("span",{staticClass:"subheading font-weight-light mr-1"},[t._v("BPM")])]),n("v-flex",{attrs:{xs2:"","text-xs-center":""}},[n("img",{attrs:{width:"90px",src:"img/pitt-bodybuilding-bizeps.png"}})]),n("v-flex",{attrs:{"text-xs-right":"",xs5:""}},[n("v-btn",{attrs:{color:t.color,dark:"",depressed:"",fab:""},on:{click:t.toggle}},[n("v-icon",{attrs:{large:""}},[t._v("\n                                "+t._s(t.isPlaying?"pause":"play_arrow")+"\n                            ")])],1)],1)],1),n("v-slider",{attrs:{color:t.color,"always-dirty":"",min:"20",max:"120"},model:{value:t.bpm,callback:function(e){t.bpm=e},expression:"bpm"}},[n("v-icon",{staticClass:"icon-minus",attrs:{slot:"prepend",large:"",color:t.color},on:{click:t.decrement},slot:"prepend"},[t._v("\n                        remove\n                    ")]),n("v-icon",{staticClass:"icon-plus",attrs:{slot:"append",large:"",color:t.color},on:{click:t.increment},slot:"append"},[t._v("\n                        add\n                    ")])],1)],1)],1),t.deferredPrompt?n("div",{staticClass:"text-xs-right",staticStyle:{"margin-top":"10px"}},[n("v-btn",{attrs:{color:t.color},nativeOn:{click:function(e){return t.installApp(e)}}},[t._v("Install App")])],1):t._e()],1)])},s=[],l={name:"InstallApp",data:function(){return{deferredPromptData:null}},methods:{installApp:function(){var t=this;this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then(function(e){"accepted"===e.outcome&&(t.deferredPromptData=null)})},initInstallApp:function(){var t=this;window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),t.deferredPrompt=e})}},computed:{deferredPrompt:{get:function(){return this.deferredPromptData},set:function(t){this.deferredPromptData=t}}}},c=l,u=n("2877"),p=Object(u["a"])(c,r,o,!1,null,null,null);p.options.__file="InstallApp.vue";var f=p.exports,d={name:"home",mixins:[f],data:function(){return{bpm:80,isPlaying:!1,audio:new Audio(n("449b")),refreshIntervalId:null}},watch:{bpm:function(t){this.resetInterval()}},computed:{color:function(){return"red"}},methods:{decrement:function(){this.bpm--},increment:function(){this.bpm++},toggle:function(){this.isPlaying=!this.isPlaying,this.isPlaying?this.startInterval():clearInterval(this.refreshIntervalId)},playSound:function(){this.audio.play()},startInterval:function(){var t=this;this.refreshIntervalId=setInterval(function(){t.playSound()},1e3/(this.bpm/60))},resetInterval:function(){this.isPlaying&&(clearInterval(this.refreshIntervalId),this.startInterval())}},created:function(){this.initInstallApp()},mounted:function(){var t=this;window.onblur=function(){t.isPlaying=!1,clearInterval(t.refreshIntervalId)}}},v=d,h=(n("5c0b"),Object(u["a"])(v,a,s,!1,null,null,null));h.options.__file="App.vue";var m=h.exports,b=n("9483");Object(b["a"])("".concat("/pitt-force/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d1e7");var g=n("ce5b"),y=n.n(g);n("bf40");i["default"].use(y.a,{theme:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(t,e,n){}});
//# sourceMappingURL=app.dcb5c983.js.map