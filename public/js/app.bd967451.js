(function(t){function e(e){for(var i,r,a=e[0],l=e[1],c=e[2],u=0,h=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"452c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=n("5f5b");n("ab8b"),n("2dd8");i["default"].use(s["a"]);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.unauthorized?n("div",{staticClass:"d-flex flex-column align-items-stretch justify-content-center my-auto",attrs:{id:"app"}},[n("div",{staticClass:"form-header shadow"},[n("p",{staticClass:"header-2 text-primary py-0 px-0 my-3 logo-text"},[t._v(" Watch.. "),n("svg",{staticClass:"mx-2",attrs:{height:"50px",width:"34px",version:"1.1",viewBox:"0 0 234 250",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{fill:"tomato","fill-rule":"nonzero",id:"logo"}},[n("path",{attrs:{id:"Shape",d:"M232.237912,124.63958 L207.054086,87.2418902 L209.962149,5.64164223 C210.078472,3.66415939 209.08973,1.7448378 207.403054,0.756096381 C205.716377,-0.23264504 203.56441,-0.23264504 201.935895,0.814257642 C182.33555,14.540315 137.493219,48.3901684 122.720259,93.0580162 L145.984763,87.2418902 C145.984763,87.2418902 99.1649485,135.22493 81.6002479,210.369278 C81.6002479,210.369278 79.2156363,220.838305 78.5758624,227.875817 C79.4482813,229.911461 80.3788615,232.063428 81.1931191,234.273556 C81.2512804,234.44804 84.1593434,242.29981 85.3807298,246.312937 C86.078665,248.523064 88.1724703,250.093418 90.4989207,250.093418 L143.309345,250.093418 C145.635795,250.093418 147.729601,248.523064 148.427536,246.312937 C168.318687,181.230487 211.416181,170.528815 213.21918,170.179847 C214.847695,169.772718 216.243565,168.609493 216.9415,167.039139 L232.819524,129.757771 C233.517459,128.071095 233.342976,126.093612 232.237912,124.63958 Z M116.904133,221.012788 L99.4557548,191.932158 L134.352511,191.932158 L116.904133,221.012788 Z M160.17611,151.219276 C144.705215,151.219276 134.352511,151.219276 134.352511,151.219276 L180.881519,122.138646 C180.881519,122.138646 175.705167,151.219276 160.17611,151.219276 Z M87.8235028,52.3451341 C76.6565408,64.6753212 45.7147505,105.620848 36.9324002,151.219276 L53.1012305,151.219276 L49.4370711,173.262394 L47.4595883,185.185452 C43.3883,181.812099 35.5365299,176.752069 35.2457236,176.635747 C26.6960184,171.633879 20.7635699,170.238008 20.5890861,170.179847 C18.9605708,169.772718 17.5647006,168.609493 16.8667654,167.039139 L0.988741422,129.757771 C0.290806301,128.071095 0.465290081,126.093612 1.57035402,124.63958 L26.7541797,87.2418902 L23.8461166,5.64164223 C23.7297941,3.48967561 24.8930193,1.4540315 26.8705022,0.523451341 C28.7316625,-0.407128821 31.0581129,-0.0581612601 32.6866282,1.39587024 L87.8235028,52.3451341 Z M99.4557548,151.219276 C99.4557548,151.219276 89.1204989,151.219276 73.6088908,151.219276 C58.0972827,151.219276 52.9267467,122.138646 52.9267467,122.138646 L99.4557548,151.219276 Z"}})])]),t._v(" ..dog ")])]),n("div",{staticClass:"mx-auto border-0 shadow-sm"},[n("b-input-group",{staticClass:"my-3"},[n("b-form-input",{staticClass:"bg-transparent border-primary",attrs:{type:"password",required:"",placeholder:"Enter pin"},model:{value:t.pin,callback:function(e){t.pin=e},expression:"pin"}})],1),t.pinError?n("b-form-invalid-feedback",{staticClass:"text-center",attrs:{state:!1}},[t._v(" "+t._s(t.pinError)+" ")]):t._e()],1),n("div",{staticClass:"d-flex align-items-center my-3 border-0 shadow-sm"},[t.logingIn?n("b-spinner",{staticClass:"mx-auto",attrs:{variant:"primary",small:"",type:"grow"}}):n("b-button",{staticClass:"px-4 m-0 mx-auto",attrs:{variant:"outline-primary"},on:{click:t.start}},[t._v(" LogIn ")])],1)]):n("div",{staticClass:"d-flex align-items-center justify-content-center my-auto",attrs:{id:"app"}},[n("div",{staticClass:"d-flex flex-column align-items-center justify-content-center flex-wrap",staticStyle:{"max-width":"1300px"}},[n("p",{staticClass:"header-2 text-primary py-0 px-0 my-3 logo-text"},[t._v(" Watch.. "),n("svg",{staticClass:"mx-2",attrs:{height:"50px",width:"34px",version:"1.1",viewBox:"0 0 234 250",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{fill:"tomato","fill-rule":"nonzero",id:"logo"}},[n("path",{attrs:{id:"Shape",d:"M232.237912,124.63958 L207.054086,87.2418902 L209.962149,5.64164223 C210.078472,3.66415939 209.08973,1.7448378 207.403054,0.756096381 C205.716377,-0.23264504 203.56441,-0.23264504 201.935895,0.814257642 C182.33555,14.540315 137.493219,48.3901684 122.720259,93.0580162 L145.984763,87.2418902 C145.984763,87.2418902 99.1649485,135.22493 81.6002479,210.369278 C81.6002479,210.369278 79.2156363,220.838305 78.5758624,227.875817 C79.4482813,229.911461 80.3788615,232.063428 81.1931191,234.273556 C81.2512804,234.44804 84.1593434,242.29981 85.3807298,246.312937 C86.078665,248.523064 88.1724703,250.093418 90.4989207,250.093418 L143.309345,250.093418 C145.635795,250.093418 147.729601,248.523064 148.427536,246.312937 C168.318687,181.230487 211.416181,170.528815 213.21918,170.179847 C214.847695,169.772718 216.243565,168.609493 216.9415,167.039139 L232.819524,129.757771 C233.517459,128.071095 233.342976,126.093612 232.237912,124.63958 Z M116.904133,221.012788 L99.4557548,191.932158 L134.352511,191.932158 L116.904133,221.012788 Z M160.17611,151.219276 C144.705215,151.219276 134.352511,151.219276 134.352511,151.219276 L180.881519,122.138646 C180.881519,122.138646 175.705167,151.219276 160.17611,151.219276 Z M87.8235028,52.3451341 C76.6565408,64.6753212 45.7147505,105.620848 36.9324002,151.219276 L53.1012305,151.219276 L49.4370711,173.262394 L47.4595883,185.185452 C43.3883,181.812099 35.5365299,176.752069 35.2457236,176.635747 C26.6960184,171.633879 20.7635699,170.238008 20.5890861,170.179847 C18.9605708,169.772718 17.5647006,168.609493 16.8667654,167.039139 L0.988741422,129.757771 C0.290806301,128.071095 0.465290081,126.093612 1.57035402,124.63958 L26.7541797,87.2418902 L23.8461166,5.64164223 C23.7297941,3.48967561 24.8930193,1.4540315 26.8705022,0.523451341 C28.7316625,-0.407128821 31.0581129,-0.0581612601 32.6866282,1.39587024 L87.8235028,52.3451341 Z M99.4557548,151.219276 C99.4557548,151.219276 89.1204989,151.219276 73.6088908,151.219276 C58.0972827,151.219276 52.9267467,122.138646 52.9267467,122.138646 L99.4557548,151.219276 Z"}})])]),t._v(" ..dog ")]),t.meta?n("b-list-group",{staticClass:"d-flex flex-row align-items-stretch justify-content-center flex-wrap"},t._l(t.meta,(function(e,i){return n("b-list-group-item",{key:i,staticClass:"btn d-flex flex-row align-items-center m-2 bg-transparent border border-primary",class:{"bg-primary":t.selected==i},staticStyle:{"border-radius":"1em",width:"15em"},attrs:{active:t.selected==i},on:{click:function(e){return t.changeSelected(i)}}},[n("div",{staticClass:"d-flex align-items-center mr-lg-2",staticStyle:{width:"2em",height:"2em","border-radius":"50%"}},[n("i",{staticClass:"fa fa-microchip w-100",class:{"text-muted":t.downlist[i],"text-success":!t.downlist[i]},staticStyle:{"font-size":"1em"}})]),n("div",{staticClass:"d-flex flex-column text-left"},[n("span",{staticClass:"h5 my-auto font-weight-bold text-white"},[t._v(" "+t._s(t.parseName(e.name))+" ")]),n("span",{staticClass:"my-auto",class:{"text-muted":t.selected!=i,"text-white":t.selected==i},domProps:{textContent:t._s(t.downlist[i]?"Down":"Active")}})])])})),1):t._e()],1),n("transition",{attrs:{name:"bounce"}},[t.selected?n("div",{staticClass:"mx-5 d-flex flex-column shadow",class:{maximized:t.maximized},staticStyle:{"min-width":"50vw","max-width":"800px","max-height":"600px",overflow:"hidden","border-radius":".75em"}},[n("b-input-group",{staticClass:"ml-auto mr-5 my-3",staticStyle:{width:"unset"},scopedSlots:t._u([{key:"append",fn:function(){return[t.highlight.length?n("i",{staticClass:"btn rounded-circle mx-1 fa fa-arrow-down font-weight-bold my-auto",class:{"text-white":t.key},on:{click:t.findNext}}):t._e(),t.highlight.length?n("i",{staticClass:"btn rounded-circle mx-1 fa fa-arrow-up font-weight-bold my-auto",class:{"text-white":t.key},on:{click:t.findPrev}}):t._e()]},proxy:!0}],null,!1,268916054)},[n("b-form-input",{staticClass:"bg-transparent border-0 mx-2",class:{"text-white":t.key},attrs:{placeholder:"Search"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.mark.apply(null,arguments)}},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}})],1),n("div",{staticClass:"d-flex shadow",staticStyle:{background:"#181818",padding:".85em"}},[n("div",{staticClass:"mx-1 rounded-circle bg-danger d-flex",staticStyle:{height:"1em",width:"1em"},on:{click:function(e){return t.changeSelected(null)}}},[n("i",{staticClass:"fa fa-close font-weight-bold text-white mx-auto my-auto",staticStyle:{"font-size":".5em"}})]),n("div",{staticClass:"mx-1 rounded-circle bg-success d-flex",staticStyle:{height:"1em",width:"1em"},on:{click:function(e){t.maximized=!t.maximized}}},[n("i",{staticClass:"fa fa-expand font-weight-bold text-white mx-auto my-auto",staticStyle:{"font-size":".5em"}})]),t.removing?n("span",{staticClass:"ml-3 my-auto beat"},[t._v(" Container removed. Closing in ... "+t._s(t.removeCounter)+" ")]):t._e(),n("span",{staticClass:"ml-auto mr-3 my-auto text-white"},[t._v(" Service log - "),t.meta[t.selected]?n("span",{staticClass:"font-weight-bold"},[t._v(" "+t._s(t.parseName(t.meta[t.selected].name))+" ")]):t._e()])]),n("pre",{staticClass:"terminal p-5 m-0 text-white text-left d-block",staticStyle:{"min-width":"50vw","max-width":"800px","max-height":"600px",overflow:"auto","list-style":"none",background:"#1c1c1c"},attrs:{id:"console"}},[t._v("\t\t\t\t\t"),t._l(t.lines,(function(e,i){return n("li",{key:i,class:{"bg-highlight":t.highlight[t.pointer]==i},attrs:{id:i},domProps:{innerHTML:t._s(t.highlight&&-1==t.highlight.indexOf(i)?e:e.replace(t.key,"<span class='bg-mark'>"+t.key+"</span>"))}},[t._v("\n\t\t\t\t\t")])})),t._v("\n\t\t\t\t\t"),t.downlist[t.selected]?n("li",{staticStyle:{color:"tomato","margin-left":"-1em","margin-bottom":"-2em"}},[t._v("Service is down ...!")]):t._e(),t._v("\n\t\t\t\t")],2)],1):t._e()])],1)},r=[],a=(n("4e82"),n("159b"),n("07ac"),n("ac1f"),n("5319"),n("1276"),n("fb6a"),n("a15b"),n("498a"),n("caad"),n("2532"),n("d3b7"),n("25f0"),n("b0c0"),n("61ab")),l=n.n(a),c={name:"App",data:function(){return{host:"",metaSocket:null,meta:null,selected:null,parser:new l.a,maximized:!1,removeCounter:5,removing:null,lines:[],key:"",pointer:-1,highlight:[],downlist:{},pin:null,unauthorized:!0,logingIn:!1,pinError:!1}},mounted:function(){},methods:{start:function(){var t=this;this.logingIn=!0,this.metaSocket=io.connect(this.host+"/meta",{query:"pin="+this.pin}),this.metaSocket.on("disconnect",(function(){t.logingIn&&(t.unauthorized=!0,t.logingIn=!1,t.pinError="Incorrect pin !")})),this.metaSocket.on("connect",(function(){t.logingIn&&(t.unauthorized=!1,t.logingIn=!1,t.pinError="")})),this.metaSocket.on("meta",(function(e){e=t.sort(e),t.meta=e,Object.values(t.meta).forEach((function(e){e.running||(t.downlist[e.id]=!0)})),t.$forceUpdate()})),this.metaSocket.on("down",(function(e){t.downlist[e]=!0,t.$forceUpdate()})),this.metaSocket.on("added",(function(e){t.meta[e.id]=e,t.meta=t.sort(t.meta),t.$forceUpdate()})),this.metaSocket.on("removed",(function(e){if(t.socket&&(t.socket.emit("unsubscribe"),t.socket.removeAllListeners(e+"-init"),t.socket.removeAllListeners(e+"-line")),t.selected==e)var n=setInterval((function(){t.removing=t.selected,t.removeCounter--,0==t.removeCounter&&(clearInterval(n),t.removeCounter=5,t.removing=null,t.selected=null)}),1e3);delete t.meta[e],t.$forceUpdate()}))},subscribe:function(){var t=this;this.lines=[],this.$forceUpdate(),this.socket=io.connect(this.host+"/"+this.selected),this.socket.on("connect",(function(){})),this.socket.on(this.selected+"-init",(function(e){t.downlist[t.selected]&&(t.downlist[t.selected]=!1,$this.$forceUpdate()),e.forEach((function(e){var n;try{n=JSON.parse(e).log}catch(i){n=e}t.lines.push(t.parser.toHtml(n)),t.$forceUpdate()})),setTimeout((function(){document.getElementById("console").scrollTop=document.getElementById("console").scrollHeight}),50)})),this.socket.on(this.selected+"-line",(function(e){t.downlist[t.selected]&&(t.downlist[t.selected]=!1,$this.$forceUpdate()),t.lines.push(t.parser.toHtml(e)),t.$forceUpdate(),document.getElementById("console").scrollTop=document.getElementById("console").scrollHeight}))},changeSelected:function(t){var e=this;this.pointer=-1,this.highlight=[],this.key="",this.selected?(this.socket.disconnect(),this.socket=null,this.selected=null,setTimeout((function(){e.selected=t,e.selected&&e.subscribe()}),50)):(this.selected=t,this.subscribe())},toTitleCase:function(t){return t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))},parseName:function(t){var e=t;if(t.split("_").length>1){var n=t.split("_");2==n.length?e=n[0]:3==n.length?e=n[1]:n.length,e=n.slice(1,n.length-1)}return e.join("-")},mark:function(){var t=this;this.highlight=[],this.key.trim().length&&this.lines.forEach((function(e,n){e.toString().includes(t.key)&&t.highlight.push(n)}))},findNext:function(){-1==this.pointer?this.pointer=0:this.pointer++,this.pointer>=this.highlight.length&&(this.pointer=0);var t=document.getElementById(this.highlight[this.pointer]);t.scrollIntoView(!0),t.parentElement.scrollTop-=75},findPrev:function(){-1==this.pointer?this.pointer=this.highlight.length-1:this.pointer--,this.pointer<0&&(this.pointer=this.highlight.length-1);var t=document.getElementById(this.highlight[this.pointer]);t.scrollIntoView(!0),t.parentElement.scrollTop-=75},sort:function(t){var e=[];return Object.values(t).forEach((function(t){e.push(t)})),e.sort((function(t,e){return t.name<e.name?-1:t.name>e.name?1:0})),t={},e.forEach((function(e){t[e.id]=e})),t}}},d=c,u=(n("034f"),n("b0a0"),n("6964"),n("dc82"),n("2877")),h=Object(u["a"])(d,o,r,!1,null,null,null),m=h.exports;i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(m)}}).$mount("#app")},6964:function(t,e,n){"use strict";n("7dff")},"7dff":function(t,e,n){},8283:function(t,e,n){},"85ec":function(t,e,n){},b0a0:function(t,e,n){"use strict";n("452c")},dc82:function(t,e,n){"use strict";n("8283")}});
//# sourceMappingURL=app.bd967451.js.map