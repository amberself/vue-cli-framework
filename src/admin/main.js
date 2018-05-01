import Vue from 'vue'
import App from './App'
import axios from 'axios' //axios 网络请求
import router from './router' //路由
import store from './vuex/store'; //vuex
import { SetMomentConfig, SetAxiosConfig, SetRouterTransition } from '@/admin/assets/js/middleware'; //中间件
import * as filters from './filters' //全局过滤器
import ElementUI from 'element-ui' //ElementUI 组件
import 'element-ui/lib/theme-chalk/index.css' //ElementUI 组件样式

//Vue全局设置
Vue.config.productionTip = false; //设置为 false 以阻止 vue 在启动时生成生产提示
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key]); //全局过滤器初始化
});

// 中间件初始化
SetMomentConfig();
SetAxiosConfig(router, store);
SetRouterTransition(router, store);

// 创建Vue实例
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})