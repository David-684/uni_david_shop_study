<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view
			 @click="leftClickHandle(item)"
			 :class="active==item.id?'active':''" v-for="item in cates" :key="item.id">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right">
			<view
			 class="item" v-for="item in secondData" :key="item.id">
				<image @click="previewImg(item)" :src="item.img_url" mode=""></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="secondData.length===0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				active:0,
				secondData:[]
			}
		},
		methods: {
			async getPicsCate(){
				const res=await this.$myRequest({
					url:'/api/getimgcategory'
				});
				this.cates=res.data.message;
				this.active=this.cates[0].id;
				this.leftClickHandle({id:this.active})
			},
			async leftClickHandle(item){
				this.active=item.id;
				const res=await this.$myRequest({
					url:'/api/getimages/'+item.id
				});
				res.data.message.forEach(item=>{
					item.img_url='http://destiny001.gitee.io/image/ban1.jpg'
				});
				this.secondData=res.data.message;
			},
			previewImg(item){
				uni.previewImage({
					current:item.img_url,
					urls:this.secondData.map(i=>i.img_url)
				})
			}
		},
		mounted()  {
			this.getPicsCate();
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: qpx solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background-color: $shop-color;
				color: #fff;
			}
		}
		.right{
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
