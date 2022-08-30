<template>
	<view class="news">
		<news-item :list='newsList' @goDetail='goDetail'></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item.vue';
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		components:{
			'news-item':newsItem
		},
		methods: {
			async getNews(){
				let res=await this.$myRequest({
					url:'/api/getnewslist'
				});
				this.newsList=res.data.message;
			},
			goDetail(id){
				uni.navigateTo({
					url:'/pages/news-detail/news-detail?id='+id
				})
			}
			
		},
		onLoad () {
			console.log(1);
			this.getNews();
		}
	}
</script>

<style lang="scss">
</style>
