const BASE_URL='http://localhost:8082'
export const myRequest=(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method||'GET',
			data:options.data||{},
			success: (res) => {
				if(res.data.status!==0){
					uni.showToast({
						title:'获取数据失败'
					});
					return;
				}
				resolve(res);
			},
			fail: (res) => {
				uni.showToast({
					title:'请求接口'
				});
				return;
				reject(res);
			}
		});
	})
}