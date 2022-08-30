<template>
	<view class="">
		<goods-list  @goodsItemClick='goGoodsDetail' :goods="goods"></goods-list>
		<view v-if="flag" class="isOver">
			-----我是有底线的-----
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list.vue';
	export default {
		data(){
			return {
				pageindex:1,
				goods:[],
				flag:false
			}
		},
		components:{
			'goods-list':goodsList
		},
		methods:{
			async getGoodsList(callback){
				let res=await this.$myRequest({
					url:`/api/getgoods?pageindex=${this.pageindex}`,
					method:"GET",
				});
				res.data.message.forEach(item=>{
					item.img_url='http://destiny001.gitee.io/image/ban1.jpg'
				});
				if(res.data.message.length<10) this.flag=true;
				this.goods=[...this.goods,...res.data.message];
				callback&&callback();
			},
			resetData(){
				this.pageindex=1;
				this.goods=[];
				this.flag=false;
			},
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				});
			}
		},
		onLoad() {
			this.getGoodsList();
		},
		onReachBottom() {
			console.log('chudi');
			this.pageindex++;
			this.getGoodsList();
		},
		onPullDownRefresh() {
			console.log(1);
			this.resetData();
			this.getGoodsList(()=>uni.stopPullDownRefresh());
		}
	}
</script>

<style>
	.goods_list{
		background: #eee;
	}
	.isOver{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28rpx;
	}
</style>