(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8583947c"],{"8eba":function(t,e,o){"use strict";var s=o("0cc1");t.exports=function(t,e){return!!t&&s((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},ab4a:function(t,e,o){"use strict";var s=o("c1f5"),n=o.n(s);n.a},ad27:function(t,e,o){},b2f9:function(t,e,o){"use strict";var s=o("ad27"),n=o.n(s);n.a},c1f5:function(t,e,o){},de90:function(t,e,o){"use strict";var s=o("2498"),n=o("8451"),a=o("a9cf"),i=o("0cc1"),l=[].sort,c=[1,2,3];s(s.P+s.F*(i((function(){c.sort(void 0)}))||!i((function(){c.sort(null)}))||!o("8eba")(l)),"Array",{sort:function(t){return void 0===t?l.call(a(this)):l.call(a(this),n(t))}})},ebad:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list"},[o("el-container",[o("el-aside",{attrs:{width:"200px"}},[o("NavTo")],1),o("el-container",{staticClass:"pro-list"},[o("el-header",{staticStyle:{"border-bottom":"1px solid #d0d0d0","background-color":"#FFFFFF"}},[o("Header")],1),o("transition",{attrs:{appear:"","appear-active-class":"animated fadeInLeft"}},[o("el-main",{staticStyle:{"background-color":"#F3F3F3"}},[o("list-a",{attrs:{down:t.down}})],1)],1)],1)],1)],1)},n=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list-a"},[t.addShow?t._e():o("div",{staticClass:"tab-btn"},[o("el-button",{attrs:{size:"medium"},on:{click:t.all}},[t._v("在售商品")]),o("el-button",{attrs:{size:"medium"},on:{click:t.getDownPro}},[t._v("下架商品")])],1),o("div",[t.addShow?o("div",{staticClass:"add-category "},[o("Good",{attrs:{eid:t.eid},on:{emit_tg:t.emit_tg_list,back:t.back}})],1):t._e(),t.addShow?t._e():o("div",{staticClass:"list"},[o("div",{staticClass:"list-head"},[o("div",{staticClass:"liat-head-01"},[o("el-row",[o("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.on_add}},[t._v("发布商品")]),o("el-button",{attrs:{type:"warning",size:"small"},on:{click:t.sort_sub}},[t._v("更新排序")]),o("el-button",{attrs:{type:"success",size:"small"},on:{click:t.getProductList}},[t._v("刷新")])],1)],1),o("div",{staticClass:"liat-head-02",staticStyle:{"padding-left":"30px"}},[o("el-input",{staticStyle:{width:"98%"},attrs:{placeholder:"商品名称",size:"small"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),o("div",{staticClass:"liat-head-03"},[o("el-row",[o("el-button",{attrs:{type:"info",size:"small"},on:{click:function(e){return t.serach(t.value)}}},[t._v("搜索")])],1)],1)]),[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.product,border:"","default-sort":{prop:"sort",order:"descending"}}},[o("el-table-column",{attrs:{prop:"sort",label:"排序",width:"100",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-input",{model:{value:e.row.sort,callback:function(o){t.$set(e.row,"sort",o)},expression:"scope.row.sort"}})]}}],null,!1,900905939)}),o("el-table-column",{attrs:{label:"商品名称",width:"550"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",{staticStyle:{display:"flex"}},[e.row.imgs?o("div",{staticClass:"product-img"},[o("img",{attrs:{src:t.$getimg+e.row.imgs}})]):t._e(),o("div",{staticClass:"product-mes"},[o("p",[t._v(t._s(e.row.goods_name))]),o("p",[t._v(t._s(e.row.description))])])])]}}],null,!1,3715628569)}),o("el-table-column",{attrs:{prop:"price",label:"价格",sortable:""}}),o("el-table-column",{attrs:{prop:"stock",label:"总库存",sortable:""}}),o("el-table-column",{attrs:{prop:"sales",label:"销量",sortable:""}}),o("el-table-column",{attrs:{label:"是否热销",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-switch",{attrs:{"active-color":"#409EFF","inactive-color":"#DCDFE6"},on:{change:function(o){return t.set_hot(e.row.goods_id)}},model:{value:e.row.is_hot,callback:function(o){t.$set(e.row,"is_hot",o)},expression:"scope.row.is_hot"}})]}}],null,!1,762428361)}),o("el-table-column",{attrs:{label:"是否新品",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-switch",{attrs:{"active-color":"#409EFF","inactive-color":"#DCDFE6"},on:{change:function(o){return t.set_new(e.row.goods_id)}},model:{value:e.row.is_new,callback:function(o){t.$set(e.row,"is_new",o)},expression:"scope.row.is_new"}})]}}],null,!1,55133129)}),o("el-table-column",{attrs:{label:"是否下架",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-switch",{attrs:{"active-color":"#DCDFE6","inactive-color":"#F56C6C"},on:{change:function(o){return t.set_down(e.row.goods_id,e.$index)}},model:{value:e.row.state,callback:function(o){t.$set(e.row,"state",o)},expression:"scope.row.state"}})]}}],null,!1,3562652848)}),o("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"success",size:"small"},on:{click:function(o){return t.on_edit(e.row.goods_id)}}},[t._v("编辑")]),o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",type:"danger",size:"small"},on:{click:function(o){return t.del(e.row.goods_id,e.$index)}},slot:"reference"},[t._v("删除")])]}}],null,!1,766361398)})],1)],o("el-pagination",{staticStyle:{"padding-top":"60px","text-align":"center"},attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.size},on:{"current-change":t.jump_page}})],2)])])},i=[],l=(o("de90"),o("4b5e"),o("6c28"),o("4634"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o(t.comview,{tag:"component",attrs:{eid:t.eid},on:{emit_tangou:t.emit_tg,back:t.back}})],1)}),c=[],r=(o("7893"),o("a49b"),o("7370")),d={name:"Good",props:["eid"],data:function(){return{comview:""}},components:{Pro:r["a"]},methods:{back:function(){this.$emit("back")},emit_tg:function(){this.$emit("emit_tg")}},mounted:function(){this.comview="Pro"}},u=d,p=o("4e82"),h=Object(p["a"])(u,l,c,!1,null,null,null),f=h.exports,m={name:"List-b",props:["down"],data:function(){return{getimg:this.$getimg,allB:"",value:"",inpue:"",visible2:!1,product:[],addShow:!1,eid:0,size:8,total:0,is_hot:!0}},components:{Good:f},mounted:function(){this.getProductList(),this.all()},methods:{serach:function(t){console.log(t);var e=[],o=!0,s=!1,n=void 0;try{for(var a,i=this.allB[Symbol.iterator]();!(o=(a=i.next()).done);o=!0){var l=a.value,c=l.goods_name.indexOf(t);c>=0&&e.push(l)}}catch(r){s=!0,n=r}finally{try{o||null==i.return||i.return()}finally{if(s)throw n}}this.product=e},sort_sub:function(){var t=this,e={},o=this;console.log("pro:",o.product);var s=!0,n=!1,a=void 0;try{for(var i,l=o.product[Symbol.iterator]();!(s=(i=l.next()).done);s=!0){var c=i.value;e[c.goods_id]=c.sort}}catch(r){n=!0,a=r}finally{try{s||null==l.return||l.return()}finally{if(n)throw a}}this.http.post_show("product/admin/set_sort",e).then((function(e){t.$message({message:"操作成功",type:"success"}),t.all()}))},all:function(){var t=this;this.value="",this.http.post("product/admin/get_product").then((function(e){t.total=e.data.length,t.allB=e.data,t.product=e.data.slice(0,t.size)}))},jump_page:function(t){var e=this,o=(t-1)*e.size,s=t*e.size;console.log(o,s),this.product=this.allB.slice(o,s)},on_add:function(){this.addShow=!0,this.eid=0},on_edit:function(t){this.addShow=!0,this.eid=t},back:function(){this.order_id=0,this.addShow=!1,this.getProductList()},getProductList:function(){var t=this;this.http.post("product/admin/all_goods_info").then((function(e){t.allB=e.data,t.product=e.data.slice(0,t.size),t.total=e.data.length}))},getDownPro:function(){var t=this;this.http.post("product/admin/get_products_down").then((function(e){t.allB=e.data,t.product=e.data,t.total=e.data.length}))},del:function(t,e){var o=this,s=this;localStorage.getItem("oauth");this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o.http.put_show("product/admin/del_product",{id:t}).then((function(t){s.$message({showClose:!0,message:"删除成功",type:"success"}),s.product.splice(e,1),o.getProductList()}))}))},set_hot:function(t){this.http.put_show("cms/update",{id:t,db:"goods",field:"is_hot"}).then((function(t){console.log(t)}))},set_new:function(t){this.http.put_show("cms/update",{id:t,db:"goods",field:"is_new"}).then((function(t){console.log(t)}))},set_down:function(t,e){var o=this;this.http.put_show("cms/update",{id:t,db:"goods",field:"state"}).then((function(t){o.$message({message:"成功",type:"success"}),o.product.splice(e,1)}))},emit_tg_list:function(){this.addShow=!1,this.eid=0,this.getProductList()}}},_=m,g=(o("ab4a"),Object(p["a"])(_,a,i,!1,null,"15953259",null)),w=g.exports,v=o("15fc"),b=o("71c2"),y={data:function(){return{activeName:"first",visible2:!1,product:[],addShow:!1,down:!1,eid:0,page:[],drawer:!1}},components:{ListA:w,NavTo:v["a"],Header:b["a"]},methods:{emit_one:function(){console.log(123)}},mounted:function(){}},k=y,S=(o("b2f9"),Object(p["a"])(k,s,n,!1,null,"56d590b6",null));e["default"]=S.exports}}]);