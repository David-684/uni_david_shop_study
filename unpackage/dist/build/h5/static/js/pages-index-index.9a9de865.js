(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"334e":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.hot_goods[data-v-b9ad1d5e]{background-color:#eee;margin-top:10px;overflow:hidden}.hot_goods .title[data-v-b9ad1d5e]{height:50px;line-height:50px;text-align:center;letter-spacing:20px;color:#b50e03;background-color:#fff;margin:%?7?% auto}.home uni-swiper[data-v-b9ad1d5e]{width:%?750?%;height:%?380?%}.home uni-swiper uni-image[data-v-b9ad1d5e]{width:100%;height:100%}.nav[data-v-b9ad1d5e]{display:flex}.nav .nav_item[data-v-b9ad1d5e]{width:25%;text-align:center}.nav .nav_item uni-view[data-v-b9ad1d5e]{width:%?120?%;height:%?120?%;background-color:#b50e03;border-radius:%?60?%;margin:10px auto;line-height:%?120?%;font-size:%?50?%;color:#fff}.nav .nav_item uni-text[data-v-b9ad1d5e]{font-size:%?30?%}.nav .nav_item .icon-tupian[data-v-b9ad1d5e]{font-size:%?45?%}',""]),t.exports=e},5124:function(t,e,n){"use strict";var a=n("64eb"),i=n.n(a);i.a},"64eb":function(t,e,n){var a=n("334e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("ca2d7124",a,!0,{sourceMap:!1,shadowMode:!1})},"6c09":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"home"},[n("v-uni-swiper",{attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},t._l(t.swipers,(function(t){return n("v-uni-swiper-item",{key:t.id},[n("v-uni-image",{attrs:{src:t.img}})],1)})),1),n("v-uni-view",{staticClass:"nav"},t._l(t.navs,(function(e){return n("v-uni-navigator",{key:e.path,staticClass:"nav_item",attrs:{url:e.path}},[n("v-uni-view",{class:e.icon}),n("v-uni-text",[t._v(t._s(e.title))])],1)})),1),n("v-uni-view",{staticClass:"hot_goods"},[n("v-uni-view",{staticClass:"title"},[t._v("推荐商品")]),n("goods-list",{attrs:{goods:t.goods},on:{goodsItemClick:function(e){arguments[0]=e=t.$handleEvent(e),t.goGoodsDetail.apply(void 0,arguments)}}})],1)],1)},o=[]},"86c9":function(t,e,n){"use strict";var a=n("4ea4");n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),o=a(n("e837")),r={data:function(){return{title:"Hello",swipers:[],goods:[],navs:[{icon:"iconfont icon-ziyuan",title:"David超市",path:"/pages/goods/goods"},{icon:"iconfont icon-guanyuwomen",title:"联系我们",path:"/pages/contact/contact"},{icon:"iconfont icon-tupian",title:"社区图片",path:"/pages/pics/pics"},{icon:"iconfont icon-shipin",title:"学习视频",path:"/pages/videos/videos"}]}},components:{"goods-list":o.default},onLoad:function(){},onReady:function(){this.getSwipers(),this.getHotGoods()},methods:{getSwipers:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/getlunbo",method:"GET"});case 2:n=e.sent,t.swipers=n.data.message;case 4:case"end":return e.stop()}}),e)})))()},getHotGoods:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/getgoods?pageindex=1",method:"GET"});case 2:n=e.sent,n.data.message.forEach((function(t){t.img_url="http://destiny001.gitee.io/image/ban1.jpg"})),t.goods=n.data.message;case 5:case"end":return e.stop()}}),e)})))()},goGoodsDetail:function(t){uni.navigateTo({url:"/pages/goods-detail/goods-detail?id="+t})}}};e.default=r},"9ade":function(t,e,n){"use strict";n.r(e);var a=n("6c09"),i=n("a931");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("5124");var r,s=n("f0c5"),d=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"b9ad1d5e",null,!1,a["a"],r);e["default"]=d.exports},a931:function(t,e,n){"use strict";n.r(e);var a=n("86c9"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}}]);