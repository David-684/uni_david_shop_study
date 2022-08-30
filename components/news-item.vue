<template>
	<view>
		<view class="news_item" @click="itemClick(item.id)" v-for="item in list" :key="item.id">
			<image src="http://destiny001.gitee.io/image/ban1.jpg" mode=""></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间：{{item.add_time|formatData}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"news-item",
		data() {
			return {
				
			};
		},
		props:['list'],
		filters:{
			formatData(date){
				const nDate=new Date(date);
				const year=nDate.getFullYear();
				const month=nDate.getMonth().toString().padStart(2,0);
				const day=nDate.getDay().toString().padStart(2,0);
				return year+'-'+month+'-'+day;
			}
		},
		methods:{
			itemClick(id){
				this.$emit('goDetail',id);
			}
		}
	}
</script>

<style lang="scss">
	.news_item{
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;
		image{
			width: 200rpx;
			height: 150rpx;
			min-width: 200rpx;
		}
		.right{
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.tit{
				font-size: 30rpx;
			}
			.info{
				font-size: 24rpx ;
				text:nth-child(2){
					margin-left: 30rpx;
				}
			}
		}
	}
</style>