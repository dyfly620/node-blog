(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76fee3b4"],{"38c5":function(t,e,n){},"3c43":function(t,e,n){"use strict";var a=n("38c5"),i=n.n(a);i.a},"3df9":function(t,e,n){"use strict";var a=n("5024"),i=n.n(a);i.a},5024:function(t,e,n){},"63a2":function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return r})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"g",(function(){return m}));var a=n("b32d"),i=function(t){return Object(a["a"])({url:"api/question/list",method:"get",params:t})},r=function(){return Object(a["a"])({url:"api/question/hot",method:"get"})},s=function(t){return Object(a["a"])({url:"api/question/answerList",method:"get",params:t})},c=function(t){return Object(a["a"])({url:"api/question/detail",method:"get",params:t})},o=function(t){return Object(a["a"])({url:"api/question/delete",method:"get",params:t})},u=function(t){return Object(a["a"])({url:"api/question/new",method:"post",data:t})},m=function(t){Object(a["a"])({url:"api/question/update",method:"post",data:t})}},be7f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Header"),n("div",{staticClass:"main mg-top-80"},[t.loading?n("skeleton"):n("div",{staticClass:"article section"},[n("div",{staticClass:"article-container"},[n("div",{staticClass:"article-header"},[n("div",{staticClass:"article-header__info"},[n("author-info",{attrs:{userInfo:t.ask.author}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("span",{staticClass:"article-time"},[t._v(t._s(t.ask.createtime)+" ")]),n("span",{staticClass:"article-review"},[t._v("阅读 "+t._s(t.ask.reviews)+" ")]),t.nickname===t.ask.author.nickname?n("router-link",{attrs:{to:{path:"/ask",query:{askId:t.ask.question_id}}}},[n("span",{staticClass:"article-edit"},[t._v("编辑")])]):t._e()],1)])],1)]),n("div",{staticClass:"article-main"},[t._v(t._s(t.ask.title))]),n("div",{staticClass:"article-tags"},[n("i",{staticClass:"iconfont"},[t._v("")]),t._l(t.ask.articleTag,(function(e,a){return n("span",{key:a,staticClass:"article-tag"},[t._v(t._s(e))])}))],2),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],ref:"article"},[n("div",{staticClass:"article-content",domProps:{innerHTML:t._s(t.ask.content)}})])]),t.comments.length>0?n("div",{staticClass:"article-comment mg-top-20"},[n("div",{staticClass:"article-comment__title"},[n("span",{on:{click:function(e){t.show=!t.show}}},[n("i",{staticClass:"el-icon-guide"}),n("span",[t._v(" "+t._s(t.comments.length)+" 个回答 ")]),n("i",{class:t.show?"el-icon-caret-bottom":"el-icon-caret-top"})])]),n("el-collapse-transition",[t.show?t._e():n("div",t._l(t.comments,(function(e,a){return n("div",{key:a,staticClass:"article-comment__content"},[n("comment",{attrs:{show:t.visible,comment:e},on:{submit:t.getComment}})],1)})),0)])],1):t._e(),n("div",{staticClass:"article-comment mg-top-20"},[n("div",{staticClass:"article-comment__title"},[n("i",{staticClass:"el-icon-edit"}),t._v(" 撰写答案 ")]),n("div",{staticClass:"article-comment__content"},[n("commentForm",{on:{submit:t.submitComment}})],1)])]),n("div",{staticClass:"asside"},[n("achievement-card",{attrs:{title:"关于作者",userInfo:t.ask.author}})],1)],1)],1)},i=[],r=(n("96cf"),n("89ba")),s=n("9f12"),c=n("53fe"),o=n("8b83"),u=n("c65a"),m=n("c03e"),l=n("9ab4"),d=n("60a3"),h=n("e725"),v=n("63a2"),p=n("9dba"),f=n("db91"),b=n("5dc5"),k=n("b428"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("div",{staticClass:"comment-header"},[n("author-info",{attrs:{type:"comment",size:"medium",userInfo:t.comment.userInfo}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"comment-action",on:{click:t.Adopt}},[n("el-button",{attrs:{size:"mini",plain:t.visible,true:"",type:"warning"}},[t._v(t._s(1==!t.visible?"已采纳":"采纳"))])],1)],1),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],ref:"article"},[n("div",{staticClass:"article-content comment-content",domProps:{innerHTML:t._s(t.comment.comment_conent)}})]),n("div",{staticClass:"comment-content"},[n("formBox",{attrs:{data:t.comment},on:{submit:t.handleSubmit}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.comment.replys.length>0,expression:"comment.replys.length > 0"}]},[n("reply",{attrs:{replys:t.comment.replys,comment_id:t.comment.comment_id},on:{createReply:t.handleTwoReply}})],1)])},_=[],g=n("595c"),j=n("585a"),y=n("af5c"),O=n("f278"),C=n("5f70"),x=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.visible=!1,t}return Object(m["a"])(e,t),Object(c["a"])(e,[{key:"Adopt",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=0,this.visible?(e=1,this.visible=!1):(e=0,this.visible=!0),t.next=4,Object(C["a"])({askId:this.$route.query.askId,comment_id:this.comment.comment_id,comment_status:e});case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"handleSubmit",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={article_id:this.$route.query.askId,comment_id:e.comment_id,reply_conent:e.value,reply_author:e.comment_author,reply_id:Object(y["a"])()},t.next=3,Object(O["b"])(n);case 3:this.$emit("submit");case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"handleTwoReply",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(O["b"])(e);case 2:this.$emit("submit");case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){this.visible=1!=this.comment.comment_status}}]),e}(d["d"]);l["a"]([Object(d["c"])()],x.prototype,"comment",void 0),l["a"]([Object(d["c"])({default:!1})],x.prototype,"show",void 0),x=l["a"]([Object(d["a"])({components:{authorInfo:b["a"],formBox:g["a"],reply:j["a"]}})],x);var q=x,R=q,I=(n("3c43"),n("2877")),$=Object(I["a"])(R,w,_,!1,null,"17d6bca4",null),E=$.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form"},[n("div",{staticClass:"markdown"},[n("markdown-editor",{ref:"markdownEditor",attrs:{mode:"markdown",height:286},model:{value:t.markdown,callback:function(e){t.markdown=e},expression:"markdown"}})],1),n("div",{staticClass:"sumbit"},[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.submit}},[t._v("提交答案")])],1)])},H=[],N=n("fd3f"),z=n("59ff"),A=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.markdown="",t}return Object(m["a"])(e,t),Object(c["a"])(e,[{key:"submit",value:function(){var t=Object(z["b"])(this.$refs.markdownEditor.getHtml());this.$emit("submit",t),this.markdown=""}}]),e}(d["d"]);A=l["a"]([Object(d["a"])({components:{MarkdownEditor:N["a"]}})],A);var L=A,M=L,B=(n("dbb3"),Object(I["a"])(M,T,H,!1,null,"08c0ce34",null)),F=B.exports,J=n("3f12"),P=n("03e7"),S={question_id:"",author:{nickname:""},title:"",content:"",createtime:"",likeCount:0,comments:0,reviews:0,markdown:"",articleTag:[],status:0},D=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.ask=S,t.show=!0,t.comments=[],t.loading=!0,t}return Object(m["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.query.askId,t.next=3,Object(v["c"])({ask_id:e});case 3:return n=t.sent,a=n.data,t.next=7,function(){return i.loading=!1}();case 7:return a.createtime=Object(k["b"])(a.createtime),this.ask=a,this.getComment(),t.next=12,Object(C["e"])({article_id:e,type:"ask"});case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getComment",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(O["c"])({article_id:this.$route.query.askId});case 2:e=t.sent,n=e.data,this.comments=n;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"submitComment",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={article_id:this.$route.query.askId,comment_conent:e,comment_id:Object(y["a"])(),type:"question"},t.next=3,Object(O["a"])(n);case 3:this.getComment();case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"nickname",get:function(){return p["a"].nickname}},{key:"visible",get:function(){return this.nickname==this.ask.author.nickname}}]),e}(d["d"]);D=l["a"]([Object(d["a"])({components:{Header:h["a"],achievementCard:f["a"],authorInfo:b["a"],comment:E,commentForm:F,articleAction:P["a"],skeleton:J["a"]}})],D);var G=D,K=G,Q=(n("3df9"),Object(I["a"])(K,a,i,!1,null,"1d5193e2",null));e["default"]=Q.exports},d417:function(t,e,n){},dbb3:function(t,e,n){"use strict";var a=n("d417"),i=n.n(a);i.a}}]);