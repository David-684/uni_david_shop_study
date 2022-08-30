<template>
	<view class="goods_list">
		<view @click="goodsItemClick(item.id)" class="goods_item" v-for="item in goods" :key="item.id">
			<image :src="item.img_url" mode=""></image>
			<view class="price">
				<text>{{item.sell_price}}</text>
				<text>{{item.market_price}}</text>
			</view>
			<view class="price">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['goods'],
		methods:{
			goodsItemClick(id){
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list{
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods_item{
			background: #fff;
			width: 355rpx;
			padding: 15rpx;
			box-sizing: border-box;
			margin: 10rpx 0;
			image{
				width: 80%;
				height: 150px;
				margin: 0 auto;
				display: block;
			}
			.price{
				color:$shop-color;
				font-size: 36rpx;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					margin-left: 7rpx;
					text-decoration: line-through;
				}
			}
			.name{
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>