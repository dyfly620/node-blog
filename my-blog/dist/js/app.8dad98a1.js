(function(e){function t(t){for(var a,r,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-08abea28":"97732ffa","chunk-2d0b2014":"b2d8331e","chunk-5a4c594e":"1b230615","chunk-2d6f80c8":"81e069f4","chunk-90208f1a":"c5c48d2d","chunk-3a6d6e56":"b1d498c6","chunk-4869e4bd":"9fa995cc","chunk-5f7c460c":"67b0765d","chunk-6523c5d2":"5f60c7a4","chunk-976f03b6":"00367c94","chunk-a411ab52":"71f3a1ae","chunk-b5584890":"b14141b6","chunk-1ed9a653":"782f7e82","chunk-61c62cdc":"85b2d434","chunk-62800c44":"5d76212e","chunk-a64a4ff2":"4f42c007","chunk-f65a8f0a":"1afcb76f","chunk-41d95a20":"d0a249f7","chunk-716f0ad3":"eb3fa9e3"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-08abea28":1,"chunk-5a4c594e":1,"chunk-2d6f80c8":1,"chunk-90208f1a":1,"chunk-3a6d6e56":1,"chunk-4869e4bd":1,"chunk-5f7c460c":1,"chunk-6523c5d2":1,"chunk-976f03b6":1,"chunk-a411ab52":1,"chunk-b5584890":1,"chunk-1ed9a653":1,"chunk-61c62cdc":1,"chunk-62800c44":1,"chunk-a64a4ff2":1,"chunk-f65a8f0a":1,"chunk-41d95a20":1,"chunk-716f0ad3":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-08abea28":"e88b6ea0","chunk-2d0b2014":"31d6cfe0","chunk-5a4c594e":"808cf61e","chunk-2d6f80c8":"fdfb31b9","chunk-90208f1a":"6ba8954f","chunk-3a6d6e56":"e0980a94","chunk-4869e4bd":"52a3a20a","chunk-5f7c460c":"8087229c","chunk-6523c5d2":"9a7aa3e5","chunk-976f03b6":"d7fc26ff","chunk-a411ab52":"d37802ba","chunk-b5584890":"94c84709","chunk-1ed9a653":"b8e87535","chunk-61c62cdc":"9020c3d6","chunk-62800c44":"35d5bc46","chunk-a64a4ff2":"7b013e2c","chunk-f65a8f0a":"4579fffb","chunk-41d95a20":"a2d0627d","chunk-716f0ad3":"6f09fea1"}[e]+".css",o=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var a=n("2b0e"),r=n("2f62");a["default"].use(r["a"]),t["a"]=new r["a"].Store({})},"063d":function(e,t,n){},"0db2":function(e,t,n){"use strict";var a=n("c218"),r=n.n(a);r.a},"493c":function(e,t,n){},"5f70":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n("b32d"),r=function(e){return Object(a["a"])({url:"api/actions/like",method:"post",data:e})},o=function(e){return Object(a["a"])({url:"api/actions/adopt",method:"post",data:e})},i=function(e){return Object(a["a"])({url:"api/actions/review",method:"post",data:e})},c=function(e){return Object(a["a"])({url:"api/actions/removelike",method:"post",data:e})},u=function(e){return Object(a["a"])({url:"api/actions/getLikelists",method:"get",params:e})},s=function(){return Object(a["a"])({url:"api/share/list",method:"get"})}},"7eb1":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));n("99af"),n("4160"),n("159b"),n("96cf");var a=n("89ba"),r=n("9f12"),o=n("53fe"),i=n("8b83"),c=n("c65a"),u=n("c03e"),s=n("9ab4"),l=n("6fc5"),f=n("0613"),d=n("5f70"),p=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(i["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.likeArticles=[],e.likeArticlId=[],e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"SET_ARTICLE",value:function(e){this.likeArticles=[],this.likeArticles=this.likeArticles.concat(e)}},{key:"SET_LIKEID",value:function(e){var t=this;this.likeArticlId=[],e.forEach((function(e){t.likeArticlId.push(e.article_id)}))}},{key:"getLikeLists",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["d"])();case 2:t=e.sent,n=t.data,n.forEach((function(e){Object.assign(e,{islike:!0})})),this.SET_ARTICLE(n),this.SET_LIKEID(n);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),t}(l["d"]);s["a"]([l["c"]],p.prototype,"SET_ARTICLE",null),s["a"]([l["c"]],p.prototype,"SET_LIKEID",null),s["a"]([l["a"]],p.prototype,"getLikeLists",null),p=s["a"]([Object(l["b"])({dynamic:!0,store:f["a"],name:"article"})],p);var h=Object(l["e"])(p)},"83a3":function(e,t,n){"use strict";var a=n("493c"),r=n.n(a);r.a},"9bf2c":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="9bf2c"},"9dba":function(e,t,n){"use strict";n("498a"),n("96cf");var a=n("89ba"),r=n("9f12"),o=n("53fe"),i=n("8b83"),c=n("c65a"),u=n("c03e"),s=n("9ab4"),l=n("6fc5"),f=n("ea9b"),d=n("a78e"),p=n.n(d),h="authorization",m=function(){return p.a.get(h)},b=function(e){return p.a.set(h,e)},v=function(){return p.a.remove(h)},g=n("0613");n.d(t,"a",(function(){return y}));var k=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(i["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.loggedType="register",e.islogin=!1,e.token=m()||"",e.autograph="",e.avatar="",e.company="",e.job="",e.nickname="",e.username="",e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"SET_LoggedType",value:function(e){this.loggedType=e}},{key:"SET_Login",value:function(e){this.islogin=e}},{key:"SET_TOKEN",value:function(e){this.token=e}},{key:"SET_AUTOGRAPH",value:function(e){this.autograph=e}},{key:"SET_AVATAR",value:function(e){this.avatar=e}},{key:"SET_COMPANY",value:function(e){this.company=e}},{key:"SET_JOB",value:function(e){this.job=e}},{key:"SET_NICKNAME",value:function(e){this.nickname=e}},{key:"SET_USERNAME",value:function(e){this.username=e}},{key:"Login",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,n=n.trim(),e.prev=2,e.next=5,Object(f["d"])({username:n,password:a});case 5:r=e.sent,o=r.data,b(o.accessToken),this.SET_TOKEN(o.accessToken),this.SET_Login(!1),e.next=15;break;case 12:return e.prev=12,e.t0=e["catch"](2),e.abrupt("return",e.t0);case 15:case"end":return e.stop()}}),e,this,[[2,12]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"oauthLogin",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["b"])({code:t});case 2:return n=e.sent,a=n.data,b(a.accessToken),this.SET_TOKEN(a.accessToken),this.SET_Login(!1),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"Register",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f["e"])(t);case 3:return n=e.sent,a=n.data,b(a.accessToken),this.SET_TOKEN(a.accessToken),this.SET_Login(!1),e.abrupt("return",a);case 11:return e.prev=11,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"ResetToken",value:function(){v(),this.SET_TOKEN("")}},{key:"handleLoggedType",value:function(e){this.SET_LoggedType(e)}},{key:"handleIslogin",value:function(e){this.SET_Login(e)}},{key:"GetUserInfo",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,o,i,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["a"])();case 2:if(t=e.sent,n=t.data,n){e.next=6;break}throw Error("Verification failed, please Login again.");case 6:a=n.autograph,r=n.avatar,o=n.company,i=n.job,c=n.nickname,u=n.username,this.SET_AUTOGRAPH(a),this.SET_AVATAR(r),this.SET_COMPANY(o),this.SET_JOB(i),this.SET_NICKNAME(c),this.SET_USERNAME(u);case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),t}(l["d"]);s["a"]([l["c"]],k.prototype,"SET_LoggedType",null),s["a"]([l["c"]],k.prototype,"SET_Login",null),s["a"]([l["c"]],k.prototype,"SET_TOKEN",null),s["a"]([l["c"]],k.prototype,"SET_AUTOGRAPH",null),s["a"]([l["c"]],k.prototype,"SET_AVATAR",null),s["a"]([l["c"]],k.prototype,"SET_COMPANY",null),s["a"]([l["c"]],k.prototype,"SET_JOB",null),s["a"]([l["c"]],k.prototype,"SET_NICKNAME",null),s["a"]([l["c"]],k.prototype,"SET_USERNAME",null),s["a"]([l["a"]],k.prototype,"Login",null),s["a"]([l["a"]],k.prototype,"oauthLogin",null),s["a"]([l["a"]],k.prototype,"Register",null),s["a"]([l["a"]],k.prototype,"ResetToken",null),s["a"]([l["a"]],k.prototype,"handleLoggedType",null),s["a"]([l["a"]],k.prototype,"handleIslogin",null),s["a"]([l["a"]],k.prototype,"GetUserInfo",null),k=s["a"]([Object(l["b"])({dynamic:!0,store:g["a"],name:"user"})],k);var y=Object(l["e"])(k)},a988:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i}));var a=n("b32d"),r=function(e){return Object(a["a"])({url:"api/follow/following",method:"post",data:e})},o=function(e){return Object(a["a"])({url:"api/follow/unfollow",method:"post",data:e})},i=function(e){return Object(a["a"])({url:"api/follow/list",method:"get",params:e})}},b20f:function(e,t,n){},b32d:function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),r=n.n(a),o=n("5c96"),i=n("9dba"),c=r.a.create({baseURL:"api",withCredentials:!0});c.interceptors.request.use((function(e){return i["a"].token&&(e.headers["authorization"]=i["a"].token),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 0===t.errno?Promise.resolve(t):(50014!==t.code&&500!==t.status||o["MessageBox"].confirm("您登录以过期，请重新登录","登录过期",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){i["a"].ResetToken(),i["a"].handleIslogin(!0)})),Object(o["Message"])({message:t.data.message||"Error",type:"error",duration:5e3}),Promise.reject(t))}),(function(e){return Object(o["Message"])({message:e.message||"Error",type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=c},b428:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));n("a15b"),n("0d03"),n("d3b7"),n("e25e"),n("ac1f"),n("25f0"),n("1276");function a(e){for(var t=(e+"").split(""),n=0;n<13;n++)t[n]||(t[n]="0");e=1*t.join("");var a=6e4,r=60*a,o=24*r,i=30*o,c=(new Date).getTime(),u=c-e;if(u<0)return"不久前";var s=u/i,l=u/(7*o),f=u/o,d=u/r,p=u/a,h=function(e){return e<10?"0"+e:e};return s>4?function(){var t=new Date(e);return t.getFullYear()+"年"+h(t.getMonth()+1)+"月"+h(t.getDate())+"日"}():s>=1?parseInt(s.toString())+"月前":l>=1?parseInt(l.toString())+"周前":f>=1?parseInt(f.toString())+"天前":d>=1?parseInt(d.toString())+"小时前":p>=1?parseInt(p.toString())+"分钟前":"刚刚"}function r(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,r=t.getDate()<10?"0"+t.getDate():t.getDate();return n+"年"+a+"月"+r+" "}},c218:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("4160"),n("159b"),n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("el-tooltip",{attrs:{placement:"top",content:"返回顶部"}},[n("back-to-top")],1),n("LiveMessage"),n("login")],1)},o=[],i=n("9f12"),c=n("8b83"),u=n("c65a"),s=n("c03e"),l=n("9ab4"),f=n("60a3"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.transitionName}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"back-to-ceiling",on:{click:e.backToTop}},[n("i",{staticClass:"el-icon-caret-top",staticStyle:{"font-size":"20px"}})])])},p=[],h=n("53fe"),m=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.visible=!1,e.isMoving=!1,e}return Object(s["a"])(t,e),Object(h["a"])(t,[{key:"mounted",value:function(){window.addEventListener("scroll",this.handleScroll,!0)}},{key:"beforeDestroy",value:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)}},{key:"handleScroll",value:function(){this.visible=window.pageYOffset>this.visibilityHeight}},{key:"backToTop",value:function(){var e=this;if(!this.isMoving){var t=window.pageYOffset,n=0;this.isMoving=!0;var a=setInterval((function(){var r=Math.floor(e.easeInOutQuad(10*n,t,-t,500));r<=e.backPosition?(window.scrollTo(0,e.backPosition),clearInterval(a),e.isMoving=!1):window.scrollTo(0,r),n++}),16.7)}}},{key:"easeInOutQuad",value:function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}}]),t}(f["d"]);l["a"]([Object(f["c"])({default:100})],m.prototype,"visibilityHeight",void 0),l["a"]([Object(f["c"])({default:"fade"})],m.prototype,"transitionName",void 0),l["a"]([Object(f["c"])({default:0})],m.prototype,"backPosition",void 0),m=l["a"]([Object(f["a"])({name:"BackToTop"})],m);var b=m,v=b,g=(n("83a3"),n("2877")),k=Object(g["a"])(v,d,p,!1,null,"4e945016",null),y=k.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message"},[n("div",{staticClass:"live-message",on:{click:function(t){e.dialogVisible=!0}}},[n("i",{staticClass:"iconfont"},[e._v("")])]),n("div",{staticClass:"dialog"},[n("el-dialog",{attrs:{visible:e.dialogVisible,width:"600px",title:"意见反馈"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"反馈渠道",prop:"resource"}},[n("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(t){e.$set(e.ruleForm,"resource",t)},expression:"ruleForm.resource"}},[n("el-radio",{attrs:{label:"交流分享"}}),n("el-radio",{attrs:{label:"产品建议"}}),n("el-radio",{attrs:{label:"网站Bug"}}),n("el-radio",{attrs:{label:"其他"}})],1)],1),n("el-form-item",{attrs:{label:"意见内容",prop:"content"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{autosize:{minRows:3,maxRows:5},type:"textarea",placeholder:"请输入内容"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),n("el-form-item",{attrs:{label:"联系方式",prop:"phone"}},[n("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入真实联系方式（邮箱、QQ)"},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"medium"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1)],1)])},w=[],j=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.dialogVisible=!1,e.ruleForm={resource:"交流分享",content:"",phone:""},e}return Object(s["a"])(t,e),t}(f["d"]);j=l["a"]([Object(f["a"])({name:"message"})],j);var T=j,E=T,_=(n("0db2"),Object(g["a"])(E,O,w,!1,null,"316d1aac",null)),x=_.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"el-fade-in"}},[e.islogin?n("div",{staticClass:"login"},[n("div",{staticClass:"auth-form"},[n("i",{staticClass:"close-btn iconfont",attrs:{title:"关闭"},on:{click:e.closeLogin}},[e._v("")]),n("div",{staticClass:"panel"},[n("formBox",{attrs:{type:e.activeIndex},on:{onSubmit:e.handleLogin}}),n("div",{staticClass:"oauth-box"},[n("div",{staticClass:"oauth-title"},[e._v("第三方账号登录：")]),n("div",{staticClass:"oauth-content"},[n("div",{staticClass:"oauth-bg",on:{click:e.hadnleOauth}},[n("svg",{staticClass:"icon github-icon",attrs:{width:"32.8",height:"32.8",viewBox:"0 0 21 18"}},[n("path",{attrs:{"data-v-335a593e":"",fill:"#161614","fill-rule":"nonzero",d:"M1.857 9.203c0 3.624 2.456 6.698 5.862 7.782.429.076.585-.177.585-.395 0-.194-.007-.71-.012-1.395-2.384.496-2.887-1.1-2.887-1.1-.39-.947-.952-1.2-.952-1.2-.778-.508.06-.498.06-.498.86.058 1.312.846 1.312.846.765 1.253 2.007.89 2.495.68.078-.529.3-.89.544-1.095-1.903-.207-3.904-.911-3.904-4.054 0-.896.334-1.628.882-2.201-.088-.208-.383-1.042.084-2.171 0 0 .72-.22 2.357.84a8.557 8.557 0 0 1 2.146-.276 8.566 8.566 0 0 1 2.146.277c1.636-1.062 2.354-.841 2.354-.841.468 1.129.174 1.963.086 2.17.55.574.881 1.306.881 2.202 0 3.15-2.004 3.844-3.913 4.047.307.253.581.754.581 1.52 0 1.096-.01 1.98-.01 2.25 0 .219.154.474.589.394C16.546 15.898 19 12.825 19 9.203 19 4.673 15.162 1 10.428 1c-4.733 0-8.57 3.672-8.57 8.203z"}})])])])]),n("div",{staticClass:"agreement-box"},[e._v(" 注册登录即表示同意 "),n("span",{staticClass:"agreement"},[e._v("用户协议")]),e._v("、 "),n("span",{staticClass:"agreement"},[e._v("隐私政策 ")])])],1)])]):e._e()])},L=[],C=(n("96cf"),n("89ba")),A=n("9dba"),R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form"},["login"===e.type?n("div",{staticClass:"panfish"},[n("img",{staticStyle:{width:"120px",height:"95px"},attrs:{src:"https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png"}})]):e._e(),n("div",{staticClass:"form-title"},[e._v(e._s("login"==e.type?"登录":"注册"))]),n("el-form",{ref:"Form",staticClass:"form-content",attrs:{rules:e.rules,autocomplete:"on",model:e.formData}},["register"===e.type?n("el-form-item",{attrs:{prop:"nickname"}},[n("el-input",{attrs:{type:"text",autocomplete:"login"===e.type?"on":"new-password",placeholder:"请输入用户名"},model:{value:e.formData.nickname,callback:function(t){e.$set(e.formData,"nickname",t)},expression:"formData.nickname"}})],1):e._e(),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{type:"text",placeholder:"请输入手机号"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),"register"===e.type&&!0===e.showCode?n("el-form-item",{attrs:{prop:"code"}},[n("el-input",{attrs:{type:"text",placeholder:"手机验证码"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}},[n("template",{slot:"append"},[e.visible?n("div",{on:{click:e.getCode}},[e._v("获取验证码")]):n("div",{staticClass:"reset"},[n("span",{staticClass:"reset-time"},[e._v(e._s(e.time))]),e._v(" s后重发")])])],2)],1):e._e(),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password",autocomplete:"login"===e.type?"on":"new-password",placeholder:"请输入密码(不少于3位)","show-password":""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1),n("el-button",{staticClass:"sumbit-btn",attrs:{loading:e.show,type:e.show?"info":"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v(e._s("login"===e.type?"登录":"立即注册"))])],1)],1)},I=[],D=n("ea9b"),P=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.validateUsername=function(t,n,a){if(n.length<1)a(new Error("请输入手机号"));else{var r=/^1[3|4|5|7|8][0-9]{9}$/;r.test(e.formData.username)?a():a(new Error("请输入正确的手机号码"))}},e.visible=!0,e.show=!1,e.time=30,e.formData={username:"",password:"",nickname:"",code:""},e.rules={nickname:[{required:!0,message:"请输入用户名",trigger:"blur"}],username:[{validator:e.validateUsername,trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:3,message:"密码不少于3位数",trigger:"blur"}]},e}return Object(s["a"])(t,e),Object(h["a"])(t,[{key:"handleLogin",value:function(){var e=this;this.$refs.Form.validate(function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}e.show=!0,e.$emit("onSubmit",e.formData),t.next=6;break;case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"monitor",value:function(){}},{key:"getCode",value:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(D["f"])({username:this.formData.username});case 2:this.visible=!1,t=setInterval((function(){n.time>1?n.time=n.time-1:(n.time=30,n.visible=!0,clearInterval(t))}),1e3);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"showCode",get:function(){var e=/^1[3|4|5|7|8][0-9]{9}$/;return!!e.test(this.formData.username)}}]),t}(f["d"]);l["a"]([Object(f["c"])()],P.prototype,"type",void 0),P=l["a"]([f["a"]],P);var M=P,N=M,F=(n("e0d2"),Object(g["a"])(N,R,I,!1,null,"cd391300",null)),U=F.exports,$=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),Object(h["a"])(t,[{key:"stopMove",value:function(){var e=function(e){e.preventDefault()};document.body.style.overflow="hidden",document.addEventListener("touchmove",e,!1)}},{key:"removeStop",value:function(){var e=function(e){e.preventDefault()};document.body.style.overflow="",document.removeEventListener("touchmove",e,!1)}},{key:"hadnleOauth",value:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.open("/oauth","","height=600, width=700"),A["a"].handleIslogin(!1);case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"closeLogin",value:function(){A["a"].handleIslogin(!1)}},{key:"handleLogin",value:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("login"!=this.activeIndex){e.next=8;break}return e.next=3,A["a"].Login({username:t.username,password:t.password});case 3:return e.sent,e.next=6,A["a"].GetUserInfo();case 6:e.next=15;break;case 8:return e.next=10,A["a"].Register(t);case 10:if(n=e.sent,-1==n.errno){e.next=15;break}return this.$notify({title:"注册成功",message:"欢迎来到起点",type:"success"}),e.next=15,A["a"].GetUserInfo();case 15:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"islogin",get:function(){return A["a"].islogin?this.stopMove():this.removeStop(),A["a"].islogin}},{key:"activeIndex",get:function(){return A["a"].loggedType}}]),t}(f["d"]);$=l["a"]([Object(f["a"])({name:"login",components:{formBox:U}})],$);var B=$,K=B,V=(n("f036"),Object(g["a"])(K,S,L,!1,null,"60a5de22",null)),q=V.exports,z=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),t}(f["d"]);z=l["a"]([Object(f["a"])({components:{BackToTop:y,LiveMessage:x,login:q}})],z);var G=z,Y=G,H=Object(g["a"])(Y,r,o,!1,null,null,null),J=H.exports,Q=(n("d3b7"),n("8c4f"));a["default"].use(Q["a"]);var W=[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-b5584890"),n.e("chunk-62800c44")]).then(n.bind(null,"7abe"))},meta:{title:"起航-让世界感知你的存在"}},{path:"/author",name:"author",component:function(){return Promise.all([n.e("chunk-b5584890"),n.e("chunk-f65a8f0a"),n.e("chunk-41d95a20")]).then(n.bind(null,"82c6"))},meta:{title:"个人主页 - 起航"}},{path:"/article",name:"article",component:function(){return Promise.all([n.e("chunk-b5584890"),n.e("chunk-2d6f80c8"),n.e("chunk-61c62cdc")]).then(n.bind(null,"230c"))},meta:{title:"文章页 - 起航"}},{path:"/questions",name:"questions",component:function(){return n.e("chunk-5f7c460c").then(n.bind(null,"bb44"))},meta:{title:"等你来答 - 起航"}},{path:"/checkAsk",name:"checkAsk",component:function(){return Promise.all([n.e("chunk-5a4c594e"),n.e("chunk-2d6f80c8"),n.e("chunk-90208f1a")]).then(n.bind(null,"be7f"))},meta:{title:"问答 - 起航"}},{path:"/ask",name:"ask",component:function(){return Promise.all([n.e("chunk-5a4c594e"),n.e("chunk-4869e4bd")]).then(n.bind(null,"b7dc"))},meta:{title:"提问 - 起航"}},{path:"/users",name:"users",component:function(){return Promise.all([n.e("chunk-b5584890"),n.e("chunk-1ed9a653")]).then(n.bind(null,"4468"))},meta:{title:"用户 - 起航"}},{path:"/hot",name:"hot",component:function(){return Promise.all([n.e("chunk-b5584890"),n.e("chunk-a64a4ff2")]).then(n.bind(null,"2a9a"))},meta:{title:"视频 - 起航"}},{path:"/share",name:"share",component:function(){return n.e("chunk-a411ab52").then(n.bind(null,"1044"))},meta:{title:"发现 - 起航"}},{path:"/search",name:"search",component:function(){return Promise.all([n.e("chunk-b5584890"),n.e("chunk-f65a8f0a"),n.e("chunk-716f0ad3")]).then(n.bind(null,"efe3"))},meta:{title:"搜索 - 起航"}},{path:"/settings",name:"settings",component:function(){return n.e("chunk-08abea28").then(n.bind(null,"61c2"))},meta:{title:"个人资料 - 起航"}},{path:"/markdown",name:"markdown",component:function(){return Promise.all([n.e("chunk-5a4c594e"),n.e("chunk-3a6d6e56")]).then(n.bind(null,"816e9"))},meta:{title:"写文章"}},{path:"/oauth",name:"oauth",component:function(){return n.e("chunk-2d0b2014").then(n.bind(null,"21ed"))}},{path:"/redirect",name:"redirect",component:function(){return n.e("chunk-6523c5d2").then(n.bind(null,"ef3c"))}},{path:"/excellent",name:"excellent",component:function(){return n.e("chunk-976f03b6").then(n.bind(null,"c37c"))}}],X=new Q["a"]({mode:"history",routes:W}),Z=X,ee=n("0613"),te=n("323e"),ne=n.n(te),ae=(n("a5d8"),n("7eb1")),re=n("df4f");ne.a.configure({showSpinner:!1}),Z.beforeEach(function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(ne.a.start(),!A["a"].token){e.next=8;break}return e.next=4,A["a"].GetUserInfo();case 4:return e.next=6,ae["a"].getLikeLists();case 6:return e.next=8,re["a"].getFollows();case 8:a(),ne.a.done();case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()),Z.afterEach((function(e){ne.a.done(),e.meta.title&&(document.title=e.meta.title)}));var oe=n("5c96"),ie=n("1487"),ce=n.n(ie),ue=(n("2c43"),n("b0c0"),n("ddb0"),n("9bf2c"));ue.keys().forEach((function(e){var t=ue(e),n=t.default||t;a["default"].component(n.name,n)}));n("450d"),n("0fae"),n("f5df1"),n("b20f");var se=n("b428");a["default"].config.productionTip=!1,a["default"].use(oe),a["default"].directive("highlight",(function(e){var t=e.querySelectorAll("pre code");t.forEach((function(e){ce.a.highlightBlock(e)}))})),a["default"].prototype.formatDate=se["a"],new a["default"]({router:Z,store:ee["a"],render:function(e){return e(J)}}).$mount("#app")},d2fb:function(e,t,n){},df4f:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));n("99af"),n("96cf");var a=n("89ba"),r=n("9f12"),o=n("53fe"),i=n("8b83"),c=n("c65a"),u=n("c03e"),s=n("9ab4"),l=n("6fc5"),f=n("0613"),d=n("a988"),p=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(i["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.follows=[],e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"SET_FOLLOWS",value:function(e){this.follows=[],this.follows=this.follows.concat(e)}},{key:"getFollows",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["b"])();case 2:t=e.sent,n=t.data,this.SET_FOLLOWS(n[0].data);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),t}(l["d"]);s["a"]([l["c"]],p.prototype,"SET_FOLLOWS",null),s["a"]([l["a"]],p.prototype,"getFollows",null),p=s["a"]([Object(l["b"])({dynamic:!0,store:f["a"],name:"follows"})],p);var h=Object(l["e"])(p)},e0d2:function(e,t,n){"use strict";var a=n("d2fb"),r=n.n(a);r.a},ea9b:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"g",(function(){return l}));var a=n("b32d"),r=function(e){return Object(a["a"])({url:"api/user/login",method:"post",data:e})},o=function(e){return Object(a["a"])({url:"api/user/getuserList",method:"get",params:e})},i=function(e){return Object(a["a"])({url:"api/user/oauth",method:"get",params:e})},c=function(e){return Object(a["a"])({url:"api/user/register",method:"post",data:e})},u=function(e){return Object(a["a"])({url:"api/user/sendSmsCodeToUser",method:"post",data:e})},s=function(e){return Object(a["a"])({url:"api/user/getInfo",method:"get",params:e})},l=function(e){return Object(a["a"])({url:"api/user/updateUser",method:"post",data:e})}},f036:function(e,t,n){"use strict";var a=n("063d"),r=n.n(a);r.a}});