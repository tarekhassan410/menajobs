(function(t){function e(e){for(var o,s,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a783acaa"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var u=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"1d2f":function(t,e,n){},"3be3":function(t,e,n){"use strict";var o=n("8c5a"),a=n.n(o);a.a},"47bd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{attrs:{id:"nav"}},[n("page-header")],1),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""},on:{"after-enter":t.afterEnter}},[n("router-view")],1),n("section",{attrs:{id:"fixed-footer"}},[t._v("You are checking an early version of Mena jobs. We are working on releasing it ASAP.")])],1)},r=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"page-nav"},[o("div",{attrs:{id:"logo-container"}},[o("router-link",{attrs:{to:"/"}},[o("img",{attrs:{src:n("d14b")}})])],1),o("ul",[o("li",{staticClass:"post-job-action"},[o("router-link",{attrs:{to:"/Postjob"}},[t._v("Post a job")])],1)])])},i=[],c={name:"PageHeader"},u=c,l=(n("fd14"),n("2877")),d=Object(l["a"])(u,s,i,!1,null,"6603c0d8",null),f=d.exports,p={components:{PageHeader:f}},m=p,b=(n("034f"),Object(l["a"])(m,a,r,!1,null,null,null)),v=b.exports,h=n("9483");Object(h["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var g=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"jobs-list-wrapper"}},[n("div",{attrs:{id:"jobs-list"}},[n("search-form"),n("jobs-list")],1)])},j=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"jobs-list-container"}},t._l(t.positionsList,(function(t){return n("div",{key:t.id},[n("job-card",{attrs:{position:t.position,tags:t.tags,company:t.company,id:t.id}})],1)})),0)},w=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-container"},[n("div",{staticClass:"position-details"},[n("div",{staticClass:"company-name"},[n("h4",[t._v(t._s(t.company))])]),n("div",{staticClass:"position"},[n("h3",[n("router-link",{staticClass:"to-job-post",attrs:{to:{path:"Job/"+t.id}}},[t._v(t._s(t.position))])],1)]),t._m(0)]),n("div",{staticClass:"tags"},t._l(t.tags,(function(e){return n("span",{key:e,staticClass:"position-tag"},[t._v(t._s(e))])})),0)])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-timing-details"},[n("p",[t._v("1d ago . full time")])])}],C={props:["position","tags","company","id"]},O=C,D=(n("3be3"),Object(l["a"])(O,k,P,!1,null,"253ef6b4",null)),E=D.exports,x={data:function(){return{positions:[]}},computed:{positionsList:function(){return this.$store.state.jobsList}},created:function(){this.$store.dispatch("loadJobsList"),console.log(Object({NODE_ENV:"production",VUE_APP_API_KEY:"1234",VUE_APP_URL:"https://production.com",BASE_URL:"/"}))},components:{JobCard:E}},J=x,S=Object(l["a"])(J,y,w,!1,null,"11eaf28c",null),L=S.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",[n("select",{attrs:{id:"select-category"},on:{change:t.handleSearchTermChange}},[n("option",{attrs:{value:"All"}},[t._v("Select category")]),n("option",{attrs:{value:"Marketing"}},[t._v("Marketing")]),n("option",{attrs:{value:"Design"}},[t._v("Design")]),n("option",{attrs:{value:"Programming"}},[t._v("Programming")])])])])},$=[],A={data:function(){return{inputSearchTerm:""}},computed:{searchTerm:function(){return this.$store.state.searchTerm}},methods:{handleSearchTermChange:function(t){this.inputSearchTerm=t.target.value,this.$store.dispatch("searchJobs",t.target.value)}}},M=A,R=(n("8158"),Object(l["a"])(M,T,$,!1,null,"05da73f3",null)),B=R.exports,I={name:"Home",components:{JobsList:L,SearchForm:B}},N=I,U=(n("60a5"),Object(l["a"])(N,_,j,!1,null,"16773dd6",null)),V=U.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"job-details"}},[n("div",{attrs:{id:"job-details-container"}},[n("div",{staticClass:"back-section"},[n("router-link",{attrs:{to:"/"}},[n("button",[n("i",{staticClass:"fas fa-arrow-left"}),t._v(" Back ")])])],1),n("h3",[t._v(t._s(t.jobDetails.position))]),n("div",[n("h4",{staticClass:"company-name"},[t._v(t._s(t.jobDetails.company))])]),n("div",{staticClass:"tag-holder"},t._l(t.jobDetails.tags,(function(e){return n("span",{key:e,staticClass:"tag"},[t._v("#"+t._s(e))])})),0),n("p",{staticClass:"job-description"},[t._v(t._s(t.jobDetails.description))])])])},q=[],F={name:"JobDetails",data:function(){return{jobDetails:[]}},created:function(){var t=this;this.$store.dispatch("getJobDetails",this.$route.params.id).then((function(){t.jobDetails=t.$store.getters.getJobDetails,console.log("details",t.jobDetails)}))}},z=F,G=(n("74ee"),Object(l["a"])(z,H,q,!1,null,"74682094",null)),K=G.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"post-job-main-container"}},[n("div",{attrs:{id:"wrapper"}},[n("div",{staticClass:"back-section"},[n("router-link",{attrs:{to:"/"}},[n("button",[n("i",{staticClass:"fas fa-arrow-left"}),t._v(" Back ")])])],1),t._m(0)])])},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-job-form-container"},[n("form",{staticClass:"post-job-form"},[n("div",[n("label",{staticClass:"semi-bold-font"},[t._v("Choose position of candidate")])]),n("select",[n("option",{attrs:{value:"All"}},[t._v("select")]),n("option",{attrs:{value:"Marketing"}},[t._v("Marketing")]),n("option",{attrs:{value:"Design"}},[t._v("Design")]),n("option",{attrs:{value:"Programming"}},[t._v("Programming")])]),n("div",[n("label",{staticClass:"semi-bold-font"},[t._v("Description")])]),n("textarea",{attrs:{cols:"10",rows:"10"}})])])}],X={name:"Post a job",data:function(){return{}}},Q=X,Z=(n("5f3a"),Object(l["a"])(Q,Y,W,!1,null,"dbb80860",null)),tt=Z.exports;o["a"].use(g["a"]);var et=[{path:"/",name:"Home",component:V},{path:"/jobs",name:"Jobs",component:L},{path:"/Job/:id",name:"JobDetails",component:K},{path:"/Postjob",name:"Postjob",component:tt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],nt=new g["a"]({mode:"history",routes:et}),ot=nt,at=(n("4160"),n("a9e3"),n("159b"),n("96cf"),n("1da1")),rt=n("2f62"),st=n("8aa5"),it=n.n(st),ct={apiKey:"AIzaSyBb9PMc5-aBqMGBMXwVEuO4y3VAG9U4kIM",authDomain:"menadotdev.firebaseapp.com",databaseURL:"https://menadotdev.firebaseio.com",projectId:"menadotdev",storageBucket:"menadotdev.appspot.com",messagingSenderId:"429073848493",appId:"1:429073848493:web:bf7432059207444d"},ut=it.a.initializeApp(ct),lt=(n("e71f"),it.a.firestore());o["a"].use(rt["a"]);var dt=new rt["a"].Store({state:{jobsList:[],jobDetails:[],searchTerm:""},mutations:{setJobsList:function(t,e){return t.jobsList=e},setJobDetails:function(t,e){return t.jobDetails=e},setSearchTerm:function(t,e){return t.searchTerm=e}},getters:{getJobsList:function(t){return console.log(ut),t.jobsList},getJobDetails:function(t){return t.jobDetails},getSearchTerm:function(t){return t.searchTerm}},actions:{loadJobsList:function(t){return Object(at["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],o=lt.collection("jobsPosts"),e.next=4,o.get().then((function(t){t.forEach((function(t){n.push({company:t.data().company,id:t.data().id,tags:t.data().tags,position:t.data().position})}))})).catch((function(t){return console.log(t)}));case 4:t.commit("setJobsList",n);case 5:case"end":return e.stop()}}),e)})))()},getJobDetails:function(t,e){return Object(at["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=lt.collection("jobsPosts").where("id","==",Number(e)),n.next=3,o.get().then((function(e){e.forEach((function(e){t.commit("setJobDetails",e.data())}))})).catch((function(t){return console.log(t)}));case 3:case"end":return n.stop()}}),n)})))()},searchJobs:function(t,e){return Object(at["a"])(regeneratorRuntime.mark((function n(){var o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=[],a=lt.collection("jobsPosts").where("tags","array-contains",e),n.next=4,a.get().then((function(e){e.forEach((function(t){o.push({company:t.data().company,id:t.data().id,tags:t.data().tags,position:t.data().position})})),t.commit("setJobsList",o)})).catch((function(t){return console.log(t)}));case 4:case"end":return n.stop()}}),n)})))()},updateSearchTerm:function(t,e){t.commit("setSearchTerm",e)}},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:ot,store:dt,render:function(t){return t(v)}}).$mount("#app")},"5f3a":function(t,e,n){"use strict";var o=n("1d2f"),a=n.n(o);a.a},"60a5":function(t,e,n){"use strict";var o=n("ab30"),a=n.n(o);a.a},"6ecb":function(t,e,n){},"74ee":function(t,e,n){"use strict";var o=n("6ecb"),a=n.n(o);a.a},8158:function(t,e,n){"use strict";var o=n("47bd"),a=n.n(o);a.a},"85ec":function(t,e,n){},"8c5a":function(t,e,n){},ab30:function(t,e,n){},d14b:function(t,e,n){t.exports=n.p+"img/logo_transparent.5dd34082.png"},e968:function(t,e,n){},fd14:function(t,e,n){"use strict";var o=n("e968"),a=n.n(o);a.a}});
//# sourceMappingURL=app.14355dd6.js.map