(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-spread-spread"],{"187f":function(t,e,n){"use strict";n.r(e);var a=n("c3a6"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},"1e5f":function(t,e,n){"use strict";var a=n("5fd8"),r=n.n(a);r.a},"56f0":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"spread"},[n("v-uni-view",{staticClass:"head"},[n("img",{staticClass:"img",attrs:{src:t.userinfo.avatarUrl}})]),n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.userinfo.nickName))]),n("v-uni-view",{staticClass:"er"},[n("img",{attrs:{src:t.getimg+t.code_url}})]),n("v-uni-view",{staticClass:"btn"},[n("v-uni-view",[n("v-uni-button",{staticClass:"butt",attrs:{disabled:t.is_click},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v("保存二维码")])],1)],1),n("v-uni-view",{staticClass:"gui"},[n("v-uni-view",[t._v("1.将此页面二维码保存并发送给您的好友")]),n("v-uni-view",[t._v("2.好友识别二维码通过手机号进行注册")]),n("v-uni-view",[t._v("3.好友进行实名认证后返推荐奖励给您账户")])],1)],1)},i=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},"5fd8":function(t,e,n){var a=n("e668");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("202e712e",a,!0,{sourceMap:!1,shadowMode:!1})},"64b9":function(t,e,n){"use strict";n.r(e);var a=n("56f0"),r=n("187f");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("1e5f");var u,s=n("f0c5"),o=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"89a7ffdc",null,!1,a["a"],u);e["default"]=o.exports},c3a6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("c916"),r=new a.CUser,i={data:function(){return{getimg:this.$getimg,code_url:"",is_click:!1,userinfo:{}}},onLoad:function(){var t=r.info();this.userinfo={avatarUrl:t.headpic,nickName:t.nickname},this._load()},methods:{_load:function(){var t=this;this.$api.http.post("user/get_web_code",{path:""}).then(function(e){t.code_url=e.data})},save:function(){uni.showModal({title:"请截图保存"})}},onPullDownRefresh:function(){setTimeout(function(){uni.stopPullDownRefresh()},2e3)}};e.default=i},c916:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.CUser=void 0,n("96cf");var r=a(n("3b8d")),i=a(n("d225")),u=a(n("b0b4")),s=a(n("7835")),o=Date.parse(new Date)/1e3,c=function(){function t(){(0,i.default)(this,t)}return(0,u.default)(t,[{key:"info",value:function(){var t=uni.getStorageSync("token");if(t){var e=uni.getStorageSync("my");return e&&e.save_time+7200>o?e.data:s.default.get("/user/info").then(function(t){var e={};return e["data"]=t.data,e["save_time"]=o,uni.setStorageSync("my",e),t.data})}}},{key:"info_wait",value:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=uni.getStorageSync("my"),!(e.data&&e.data.headpic&&e.save_time+7200>o)){t.next=3;break}return t.abrupt("return",e.data);case 3:return t.abrupt("return",s.default.get("/user/info").then(function(t){var e={};return e["data"]=t.data,e["save_time"]=o,uni.setStorageSync("my",e),t.data}));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"reset_storage",value:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",s.default.get("/user/info").then(function(t){var e={};return e["data"]=t.data,e["save_time"]=o,uni.setStorageSync("my",e),t.data}));case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),t}();e.CUser=c},e668:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.spread .head[data-v-89a7ffdc]{background-color:#fa436a;height:100px;position:relative}.spread .head .img[data-v-89a7ffdc]{width:65px;height:65px;border-radius:50px;border:1px solid #c896a6;position:absolute;left:50%;bottom:-30px;margin-left:-32.5px}.spread .title[data-v-89a7ffdc]{text-align:center;padding:40px 0 30px;font-size:18px;font-weight:600}.spread .er[data-v-89a7ffdc]{text-align:center}.spread .er img[data-v-89a7ffdc]{width:180px;height:180px;border:2px solid #f6d7b1;padding:2px;margin:0 0 25px}.spread .btn[data-v-89a7ffdc]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:13px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.spread .btn .butt[data-v-89a7ffdc]{background-color:#fb6471;height:25px;line-height:25px;border-radius:20px;width:140px;text-align:center;color:#fff}.spread .gui[data-v-89a7ffdc]{color:#9e9e9e;font-size:12px;padding:40px 0 0 75px;line-height:20px}',""])}}]);