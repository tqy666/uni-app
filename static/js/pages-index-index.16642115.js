(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"4b00":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-image",{staticClass:"logo",attrs:{src:"/static/logo.png"}}),a("v-uni-view",{staticClass:"text-area"},[a("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))])],1),a("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gettoken()}}},[t._v("获取token")]),a("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getdata()}}},[t._v("获取testdata")]),t._l(t.arr,(function(e,n){return a("v-uni-view",{key:e.id,staticClass:"first_view"},[a("v-uni-view",[t._v("id:"+t._s(e.id)+",name:"+t._s(e.name)+",email:"+t._s(e.email)+",created_at:"+t._s(e.created_at))]),t._l(e.userluck,(function(e,n){return a("v-uni-view",{key:e.id,staticClass:"child_view"},[t._v("id:"+t._s(e.id)+",name:"+t._s(e.name))])}))],2)}))],2)},r=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}))},"66eb":function(t,e,a){"use strict";a.r(e);var n=a("e334"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"6f1d":function(t,e,a){"use strict";a.r(e);var n=a("4b00"),i=a("66eb");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("f901");var o,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"24a38516",null,!1,n["a"],o);e["default"]=s.exports},"86a5":function(t,e,a){var n=a("b277");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("1757cab2",n,!0,{sourceMap:!1,shadowMode:!1})},b277:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".content[data-v-24a38516]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.logo[data-v-24a38516]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-24a38516]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-24a38516]{font-size:%?36?%;color:#8f8f94}.child_view[data-v-24a38516]{width:100%}.first_view[data-v-24a38516]{width:100%;height:50}",""]),t.exports=e},e334:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"Hello",arr:[]}},onLoad:function(){},methods:{gettoken:function(){uni.request({url:"/v1/userlogin",data:{name:"15827569021",password:"123456"},method:"POST",success:function(e){t.log(e.data),uni.setStorageSync("storage_key",e.data)}})},getdata:function(){var e=this;uni.request({url:"/v1/testdata",method:"GET",header:{Authorization:"Bearer"+uni.getStorageSync("storage_key")},success:function(a){t.log(a.data),e.arr=a.data}})}}};e.default=a}).call(this,a("5a52")["default"])},f901:function(t,e,a){"use strict";var n=a("86a5"),i=a.n(n);i.a}}]);