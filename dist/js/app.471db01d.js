(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a783acaa"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"280f":function(t,e,n){},"37a9":function(t,e,n){},"47bd":function(t,e,n){},"546d":function(t,e,n){"use strict";var o=n("280f"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{attrs:{id:"nav"}},[n("page-header")],1),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""},on:{"after-enter":t.afterEnter}},[n("router-view")],1),n("section",{attrs:{id:"fixed-footer"}},[t._v("You are checking an early version of Mena jobs. We are working on releasing it ASAP.")])],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"page-nav"},[o("div",{attrs:{id:"logo-container"}},[o("router-link",{attrs:{to:"/"}},[o("img",{attrs:{src:n("d14b")}})])],1),t._m(0)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{staticClass:"post-job-action"},[n("a",{attrs:{href:"#"}},[t._v("Post a job")])])])}],c={name:"PageHeader"},u=c,l=(n("7452"),n("2877")),d=Object(l["a"])(u,i,s,!1,null,"54da8269",null),f=d.exports,p={components:{PageHeader:f}},m=p,b=(n("034f"),Object(l["a"])(m,r,a,!1,null,null,null)),h=b.exports,v=n("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var g=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"jobs-list-wrapper"}},[n("div",{attrs:{id:"jobs-list"}},[n("search-form"),n("jobs-list")],1)])},_=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"jobs-list-container"}},t._l(t.positionsList,(function(t){return n("div",{key:t.id},[n("job-card",{attrs:{position:t.position,tags:t.tags,company:t.company,id:t.id}})],1)})),0)},w=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-container"},[n("div",{staticClass:"position-details"},[n("div",{staticClass:"company-name"},[n("h4",[t._v(t._s(t.company))])]),n("div",{staticClass:"position"},[n("h3",[n("router-link",{staticClass:"to-job-post",attrs:{to:{path:"Job/"+t.id}}},[t._v(t._s(t.position))])],1)]),t._m(0)]),n("div",{staticClass:"tags"},t._l(t.tags,(function(e){return n("span",{key:e,staticClass:"position-tag"},[t._v(t._s(e))])})),0)])},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-timing-details"},[n("p",[t._v("1d ago . full time")])])}],O={props:["position","tags","company","id"]},x=O,D=(n("b85b"),Object(l["a"])(x,k,J,!1,null,"30616f0c",null)),S=D.exports,P={data:function(){return{positions:[]}},computed:{positionsList:function(){return this.$store.state.jobsList}},created:function(){this.$store.dispatch("loadJobsList")},components:{JobCard:S}},E=P,T=Object(l["a"])(E,y,w,!1,null,"74ae85d8",null),C=T.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",[n("select",{attrs:{id:"select-category"},on:{change:t.handleSearchTermChange}},[n("option",{attrs:{value:"All"}},[t._v("Select category")]),n("option",{attrs:{value:"Marketing"}},[t._v("Marketing")]),n("option",{attrs:{value:"Design"}},[t._v("Design")]),n("option",{attrs:{value:"Programming"}},[t._v("Programming")])])])])},L=[],A={data:function(){return{inputSearchTerm:""}},computed:{searchTerm:function(){return this.$store.state.searchTerm}},methods:{handleSearchTermChange:function(t){this.inputSearchTerm=t.target.value,this.$store.dispatch("searchJobs",t.target.value)}}},M=A,R=(n("8158"),Object(l["a"])(M,$,L,!1,null,"05da73f3",null)),B=R.exports,I={name:"Home",components:{JobsList:C,SearchForm:B}},H=I,N=(n("546d"),Object(l["a"])(H,j,_,!1,null,"234aba2c",null)),q=N.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"job-details"}},[n("div",{attrs:{id:"job-details-container"}},[n("h2",[t._v(t._s(t.jobDetails.position))]),n("h4",[t._v(t._s(t.jobDetails.company))]),n("div",t._l(t.jobDetails.tags,(function(e){return n("span",{key:e,staticClass:"tag"},[t._v("#"+t._s(e))])})),0),n("p",[t._v(t._s(t.jobDetails.description))])])])},z=[],G={name:"JobDetails",data:function(){return{jobDetails:[]}},created:function(){var t=this;this.$store.dispatch("getJobDetails",this.$route.params.id).then((function(){t.jobDetails=t.$store.getters.getJobDetails,console.log("details",t.jobDetails)}))}},U=G,V=(n("ccce"),Object(l["a"])(U,F,z,!1,null,"0c0b731a",null)),K=V.exports;o["a"].use(g["a"]);var W=[{path:"/",name:"Home",component:q},{path:"/jobs",name:"Jobs",component:C},{path:"/Job/:id",name:"JobDetails",component:K},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],X=new g["a"]({mode:"history",routes:W}),Y=X,Q=(n("4160"),n("a9e3"),n("159b"),n("96cf"),n("1da1")),Z=n("2f62"),tt=n("8aa5"),et=n.n(tt),nt={apiKey:"AIzaSyBb9PMc5-aBqMGBMXwVEuO4y3VAG9U4kIM",authDomain:"menadotdev.firebaseapp.com",databaseURL:"https://menadotdev.firebaseio.com",projectId:"menadotdev",storageBucket:"menadotdev.appspot.com",messagingSenderId:"429073848493",appId:"1:429073848493:web:bf7432059207444d"},ot=et.a.initializeApp(nt),rt=(n("e71f"),et.a.firestore());o["a"].use(Z["a"]);var at=new Z["a"].Store({state:{jobsList:[],jobDetails:[],searchTerm:""},mutations:{setJobsList:function(t,e){return t.jobsList=e},setJobDetails:function(t,e){return t.jobDetails=e},setSearchTerm:function(t,e){return t.searchTerm=e}},getters:{getJobsList:function(t){return console.log(ot),t.jobsList},getJobDetails:function(t){return t.jobDetails},getSearchTerm:function(t){return t.searchTerm}},actions:{loadJobsList:function(t){return Object(Q["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],o=rt.collection("jobsPosts"),e.next=4,o.get().then((function(t){t.forEach((function(t){n.push({company:t.data().company,id:t.data().id,tags:t.data().tags,position:t.data().position})}))})).catch((function(t){return console.log(t)}));case 4:t.commit("setJobsList",n);case 5:case"end":return e.stop()}}),e)})))()},getJobDetails:function(t,e){return Object(Q["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=rt.collection("jobsPosts").where("id","==",Number(e)),n.next=3,o.get().then((function(e){e.forEach((function(e){t.commit("setJobDetails",e.data())}))})).catch((function(t){return console.log(t)}));case 3:case"end":return n.stop()}}),n)})))()},searchJobs:function(t,e){return Object(Q["a"])(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=[],r=rt.collection("jobsPosts").where("tags","array-contains",e),n.next=4,r.get().then((function(e){e.forEach((function(t){o.push({company:t.data().company,id:t.data().id,tags:t.data().tags,position:t.data().position})})),t.commit("setJobsList",o)})).catch((function(t){return console.log(t)}));case 4:case"end":return n.stop()}}),n)})))()},updateSearchTerm:function(t,e){t.commit("setSearchTerm",e)}},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:Y,store:at,render:function(t){return t(h)}}).$mount("#app")},6257:function(t,e,n){},7452:function(t,e,n){"use strict";var o=n("fedc"),r=n.n(o);r.a},8158:function(t,e,n){"use strict";var o=n("47bd"),r=n.n(o);r.a},"85ec":function(t,e,n){},b85b:function(t,e,n){"use strict";var o=n("37a9"),r=n.n(o);r.a},ccce:function(t,e,n){"use strict";var o=n("6257"),r=n.n(o);r.a},d14b:function(t,e,n){t.exports=n.p+"img/logo_transparent.5dd34082.png"},fedc:function(t,e,n){}});
//# sourceMappingURL=app.471db01d.js.map