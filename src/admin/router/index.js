import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login/login'
import home from '../views/home/home'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'login',
			component: login,
			meta: {
				pageTitle: "",
				needToken: false
			}
		},
		{
			path: '/home',
			name: 'home',
			component: home,
			meta: {
				pageTitle: "",
				needToken: true
			}
		},
	]
})