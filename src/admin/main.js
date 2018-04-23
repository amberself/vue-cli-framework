import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex/store';
import { SetMomentConfig, SetAxiosConfig, SetRouterTransition } from '@/admin/assets/js/middleware';

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI);

// 中间件初始化
SetMomentConfig();
SetAxiosConfig(router, store);
SetRouterTransition(router, store);

// 创建Vue实例
new Vue({
	el: '#app',
	store,
	router,
	components: {
		App
	},
	template: '<App/>'
})