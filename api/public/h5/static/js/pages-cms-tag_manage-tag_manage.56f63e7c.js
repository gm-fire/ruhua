(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cms-tag_manage-tag_manage"],{"2ab7":function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("67af")),o=a(e("7acb")),s={components:{uniList:n.default,uniListItem:o.default},data:function(){return{tagList:[{title:"aa"}],tag_show:1,id:"0",new_tag:{id:"",title:""},tag_title:""}},methods:{add_tag:function(){this.tag_show=0},sub_add:function(){if(this.tag_title){var t=this.id,i={id:t++,title:this.tag_title};this.tagList.push(i),this.tag_title="",this.id=t,this.tag_show=1,this.$api.msg("添加成功"),console.log(this.tagList)}else this.$api.msg("标签名不能为空")}},onPullDownRefresh:function(){setTimeout(function(){uni.stopPullDownRefresh()},2e3)}};i.default=s},"2adb":function(t,i,e){var a=e("64d4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("984f4714",a,!0,{sourceMap:!1,shadowMode:!1})},6016:function(t,i,e){"use strict";e.r(i);var a=e("2ab7"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},"64d4":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'uni-page-body[data-v-6d06e449]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4}uni-view[data-v-6d06e449]{font-size:%?28?%;line-height:inherit}.biao[data-v-6d06e449]{background-color:#fff;margin:10px;border-radius:5px;border:1px solid #eaeaea}.biao_01[data-v-6d06e449]{padding:10px 10px 10px;border-bottom:1px solid #ededed;display:-webkit-box;display:-webkit-flex;display:flex}.biao_01_l[data-v-6d06e449]{padding-top:7px;-webkit-flex-shrink:0;flex-shrink:0}.biao_01_r[data-v-6d06e449]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.uni-input-input[data-v-6d06e449],\n.uni-input[data-v-6d06e449]{height:30px;line-height:30px}.example[data-v-6d06e449]{padding:0 %?30?% %?30?%}.example-title[data-v-6d06e449]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;color:#464e52;padding:%?30?% %?30?% %?30?% %?50?%;margin-top:%?20?%;position:relative;background-color:#fdfdfd;border-bottom:1px #f5f5f5 solid}.example-title__after[data-v-6d06e449]{position:relative;color:#031e3c}.example-title[data-v-6d06e449]:after{content:"";position:absolute;left:%?30?%;margin:auto;top:0;bottom:0;width:%?6?%;height:%?32?%;background-color:#ccc}.example .example-title[data-v-6d06e449]{margin:%?40?% 0}.example-body[data-v-6d06e449]{padding:%?30?%;background:#fff}.example-info[data-v-6d06e449]{padding:%?30?%;color:#3b4144;background:#fff}.p_btn[data-v-6d06e449]{background:#f7f6fb;padding:0 10px 0;position:fixed;bottom:0;width:100%;z-index:9999}.pro_btn[data-v-6d06e449]{background-color:#e5e5e5;padding:10px;text-align:center;border-radius:20px;background-color:#df421d;color:#fff;width:94%}body.?%PAGE?%[data-v-6d06e449]{background-color:#efeff4}',""])},d14c:function(t,i,e){"use strict";var a=e("2adb"),n=e.n(a);n.a},f424:function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[1==t.tag_show?[e("v-uni-view",{staticClass:"example-title"},[t._v("标签管理")]),e("uni-list",[t._l(t.tagList,function(i,a){return[e("uni-list-item",{key:a+"_0",attrs:{title:i.title,"badge-type":"none","show-badge":"true","badge-text":"12人"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.add_tag.apply(void 0,arguments)}}})]})],2),e("v-uni-view",{staticClass:"p_btn"},[e("v-uni-view",{staticClass:"flex flex-direction"},[e("v-uni-button",{staticClass:"cu-btn bg-red margin-tb-sm lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.add_tag.apply(void 0,arguments)}}},[t._v("添加")])],1)],1)]:t._e(),0==t.tag_show?[e("v-uni-view",{staticClass:"biao"},[e("v-uni-view",{staticClass:"biao_01"},[e("v-uni-view",{staticClass:"biao_01_l"},[t._v("标签名称：")]),e("v-uni-view",{staticClass:"biao_01_r"},[e("v-uni-input",{staticClass:"uni-input",model:{value:t.tag_title,callback:function(i){t.tag_title=i},expression:"tag_title"}})],1)],1)],1),e("v-uni-view",{staticStyle:{"margin-left":"20px","margin-top":"20px",color:"#5E5F61"}},[t._v("自动打标签条件")]),e("v-uni-view",{staticClass:"biao"},[e("v-uni-view",{staticClass:"biao_01"},[e("v-uni-view",{staticClass:"biao_01_l"},[t._v("累计成交笔数：")]),e("v-uni-view",{staticClass:"biao_01_r"},[e("v-uni-input",{staticClass:"uni-input"})],1)],1),e("v-uni-view",{staticClass:"biao_01"},[e("v-uni-view",{staticClass:"biao_01_l"},[t._v("累计成交金额：")]),e("v-uni-view",{staticClass:"biao_01_r"},[e("v-uni-input",{staticClass:"uni-input"})],1)],1)],1),e("v-uni-view",{staticClass:"p_btn"},[e("v-uni-view",{staticClass:"flex flex-direction"},[e("v-uni-button",{staticClass:"cu-btn bg-red margin-tb-sm lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sub_add.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)]:t._e()],2)},o=[];e.d(i,"b",function(){return n}),e.d(i,"c",function(){return o}),e.d(i,"a",function(){return a})},f8bd:function(t,i,e){"use strict";e.r(i);var a=e("f424"),n=e("6016");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("d14c");var s,d=e("f0c5"),l=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"6d06e449",null,!1,a["a"],s);i["default"]=l.exports}}]);