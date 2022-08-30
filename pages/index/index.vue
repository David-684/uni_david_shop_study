<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区 -->
		<view class="nav">
			<navigator :url="item.path" class="nav_item" v-for="item in navs" :key="item.path">
				<view :class="item.icon">
				</view>
				<text>{{item.title}}</text>
			</navigator>
		</view>
		<view class="hot_goods">
			<view class="title">
				推荐商品
			</view>
			<goods-list @goodsItemClick='goGoodsDetail' :goods='goods'></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				swipers:[],
				goods:[],
				navs: [
					{
						icon: 'iconfont icon-ziyuan',
						title: 'David超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				]
			}
		},
		components:{
			'goods-list':goodsList
		},
		onLoad() {
			
		},
		onReady() {
			this.getSwipers();
			this.getHotGoods();
		},
		methods: {
			async getSwipers(){
				let res=await this.$myRequest({
					url:'/api/getlunbo',
					method:"GET"
				});
				this.swipers=res.data.message
			},
			async getHotGoods(){
				let res=await this.$myRequest({
					url:'/api/getgoods?pageindex=1',
					method:"GET",
					
				});
				res.data.message.forEach(item=>{
					item.img_url='http://destiny001.gitee.io/image/ban1.jpg'
				});
				this.goods=res.data.message;
			},
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				});
			}
			
		}
	}
</script>

<style lang="scss">
	.hot_goods{
		background-color: #eee;
		margin-top: 10px;
		overflow: hidden;
		.title{
			height: 50px;
			line-height: 50px;
			text-align: center;
			letter-spacing: 20px;
			color: $shop-color;
			background-color: #fff;
			margin: 7rpx auto;
		}
	}
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.nav{
		display: flex;
		.nav_item{
			width: 25%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background-color: #b50e03;
				border-radius: 60rpx;
				margin: 10px auto;
				line-height: 120rpx;
				font-size: 50rpx;
				color: #fff;
			}
			text{
				font-size: 30rpx;
			}
			.icon-tupian{
				font-size: 45rpx;
			}
		}
	}
</style>
