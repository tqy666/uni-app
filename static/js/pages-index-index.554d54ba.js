(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0c5f":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-image",{staticClass:"logo",attrs:{src:"/static/logo.png"}}),n("v-uni-view",{staticClass:"text-area"},[n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))])],1),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gettoken()}}},[t._v("获取token")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getdata()}}},[t._v("获取testdata")]),t._l(t.arr,(function(e,i){return n("v-uni-view",{key:e.id,staticClass:"first_view"},[n("v-uni-view",[t._v("id:"+t._s(e.id)+",name:"+t._s(e.name)+",email:"+t._s(e.email)+",created_at:"+t._s(e.created_at))]),t._l(e.userluck,(function(e,i){return n("v-uni-view",{key:e.id,staticClass:"child_view"},[t._v("id:"+t._s(e.id)+",name:"+t._s(e.name))])}))],2)}))],2)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"1d34":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-24653c35]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.logo[data-v-24653c35]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-24653c35]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-24653c35]{font-size:%?36?%;color:#8f8f94}.child_view[data-v-24653c35]{width:100%}.first_view[data-v-24653c35]{width:100%;height:%?50?%}",""]),t.exports=e},"44ef":function(t,e,n){"use strict";var i=n("4f55"),a=n.n(i);a.a},"4f55":function(t,e,n){var i=n("1d34");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2549728f",i,!0,{sourceMap:!1,shadowMode:!1})},"66eb":function(t,e,n){"use strict";n.r(e);var i=n("e334"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"6f1d":function(t,e,n){"use strict";n.r(e);var i=n("0c5f"),a=n("66eb");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("44ef");var o,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"24653c35",null,!1,i["a"],o);e["default"]=s.exports},e334:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"Hello",arr:[]}},onLoad:function(){},methods:{gettoken:function(){uni.request({url:"https://www.gostman.xyz/v1/userlogin",data:{name:"15827569021",password:"123456"},method:"POST",success:function(e){t.log(e.data),uni.setStorageSync("storage_key",e.data)}})},getdata:function(){var e=this;uni.request({url:"https://www.gostman.xyz/v1/testdata",method:"GET",header:{Authorization:"Bearer"+uni.getStorageSync("storage_key")},success:function(n){t.log(n.data),e.arr=n.data}})}}};e.default=n}).call(this,n("5a52")["default"])}}]);