(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods"],{2005:function(e,t,n){"use strict";var o=n("3de5"),a=n.n(o);a.a},2909:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var o=u(n("6005")),a=u(n("db90")),i=u(n("06c5")),r=u(n("3427"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return(0,o.default)(e)||(0,a.default)(e)||(0,i.default)(e)||(0,r.default)()}},3427:function(e,t,n){"use strict";function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},"3de5":function(e,t,n){var o=n("6333");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("4f06").default;a("7b8bd96e",o,!0,{sourceMap:!1,shadowMode:!1})},4740:function(e,t,n){"use strict";n.r(t);var o=n("675f"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},6005:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=a(n("6b75"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e))return(0,o.default)(e)}},6333:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,".goods_list[data-v-08f9b0e9]{background:#eee}.isOver[data-v-08f9b0e9]{width:100%;height:50px;line-height:50px;text-align:center;font-size:%?28?%}",""]),e.exports=t},"675f":function(e,t,n){"use strict";var o=n("4ea4");n("99af"),n("4160"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("2909"));n("96cf");var i=o(n("1da1")),r=o(n("e837")),u={data:function(){return{pageindex:1,goods:[],flag:!1}},components:{"goods-list":r.default},methods:{getGoodsList:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$myRequest({url:"/api/getgoods?pageindex=".concat(t.pageindex),method:"GET"});case 2:o=n.sent,o.data.message.forEach((function(e){e.img_url="http://destiny001.gitee.io/image/ban1.jpg"})),o.data.message.length<10&&(t.flag=!0),t.goods=[].concat((0,a.default)(t.goods),(0,a.default)(o.data.message)),e&&e();case 7:case"end":return n.stop()}}),n)})))()},resetData:function(){this.pageindex=1,this.goods=[],this.flag=!1},goGoodsDetail:function(e){uni.navigateTo({url:"/pages/goods-detail/goods-detail?id="+e})}},onLoad:function(){this.getGoodsList()},onReachBottom:function(){console.log("chudi"),this.pageindex++,this.getGoodsList()},onPullDownRefresh:function(){console.log(1),this.resetData(),this.getGoodsList((function(){return uni.stopPullDownRefresh()}))}};t.default=u},"9b06":function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{},[n("goods-list",{attrs:{goods:e.goods},on:{goodsItemClick:function(t){arguments[0]=t=e.$handleEvent(t),e.goGoodsDetail.apply(void 0,arguments)}}}),e.flag?n("v-uni-view",{staticClass:"isOver"},[e._v("-----我是有底线的-----")]):e._e()],1)},i=[]},a905:function(e,t,n){"use strict";n.r(t);var o=n("9b06"),a=n("4740");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("2005");var r,u=n("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"08f9b0e9",null,!1,o["a"],r);t["default"]=s.exports},db90:function(e,t,n){"use strict";function o(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=o}}]);