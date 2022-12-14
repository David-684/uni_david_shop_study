import App from './App'
import Vue from 'vue'
import { myRequest } from './util/api.js'
Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$myRequest=myRequest;
Vue.filter('formatDate',(date)=>{
		const nDate=new Date(date);
		const year=nDate.getFullYear();
		const month=nDate.getMonth().toString().padStart(2,0);
		const day=nDate.getDay().toString().padStart(2,0);
		return year+'-'+month+'-'+day;
})
const app = new Vue({
    ...App
})
app.$mount()