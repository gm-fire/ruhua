(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf37543a"],{"5ae6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tuikuan"},[a("el-container",[a("el-aside",{attrs:{width:"200px"}},[a("NavTo")],1),a("el-container",[a("el-header",{staticStyle:{"border-bottom":"1px solid #d0d0d0","background-color":"#FFFFFF"}},[a("Header")],1),a("transition",{attrs:{appear:"","appear-active-class":"animated fadeInLeft"}},[a("el-main",{staticStyle:{"background-color":"#F3F3F3"}},[a("div",{staticClass:"article"},[a("div",{staticStyle:{height:"20px"}},[t._v(" ")]),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50px"}}),a("el-table-column",{attrs:{prop:"order_num",label:"订单号"}}),a("el-table-column",{attrs:{prop:"nickname",label:"用户昵称"}}),a("el-table-column",{attrs:{prop:"because",label:"退款原因"}}),a("el-table-column",{attrs:{prop:"message",label:"客户留言"}}),a("el-table-column",{attrs:{prop:"ip",label:"IP"}}),a("el-table-column",{attrs:{prop:"money",label:"退款金额"}}),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.status?[t._v("待审核")]:t._e(),-1==e.row.status?[t._v("已驳回")]:t._e(),1==e.row.status?[t._v("退款成功")]:t._e()]}}])}),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"300px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){return t.agree(e.row.id)}}},[t._v("同意")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",type:"danger",size:"small"},on:{click:function(a){return t.refuse(e.row.id)}},slot:"reference"},[t._v("驳回")])]}}])}),a("strong")],1)]],2)])],1)],1)],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-input",{attrs:{placeholder:"请输入驳回原因"},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancel}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sub_refuse}},[t._v("确 定")])],1)],1)],1)},l=[],i=(a("7893"),a("a49b"),a("15fc")),n=a("71c2"),o={data:function(){return{dialogVisible:!1,list:"",msg:"",rid:""}},components:{Header:n["a"],NavTo:i["a"]},mounted:function(){this._load()},methods:{_load:function(){var t=this;this.http.get("order/admin/get_tui_all").then((function(e){var a=[];for(var s in e.data){var l=e.data[s];-1!=l.status&&a.push(l)}t.list=a}))},agree:function(t){var e=this;this.$confirm("确定同意该退款","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.http.post("order/admin/tui_money",{id:t}).then((function(t){400==t.status?e.$message({message:t.msg,type:"warning"}):e.$message({message:"退款成功",type:"success"}),e._load()}))}))},refuse:function(t){this.dialogVisible=!0,this.rid=t},sub_refuse:function(){var t=this,e={id:this.rid,msg:this.msg};e.msg?this.http.post("order/admin/tui_bohui",e).then((function(e){t.$message({message:"驳回成功",type:"success"}),t.msg="",t.dialogVisible=!1,t._load()})):this.$message({message:"未填写驳回原因",type:"warning"})},cancel:function(){this.dialogVisible=!1,this.msg=""},handleClose:function(){this.dialogVisible=!1,this.msg=""}}},r=o,c=(a("687f"),a("4e82")),u=Object(c["a"])(r,s,l,!1,null,null,null);e["default"]=u.exports},"687f":function(t,e,a){"use strict";var s=a("93f4"),l=a.n(s);l.a},"93f4":function(t,e,a){}}]);