import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login/login'
import home from '../views/home/home'
import child1 from '../views/home/child1'
import child2 from '../views/home/child2'

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
			},
			children: [{
					path: '/',
					component: child1,
					name: 'HChild1',
					meta: {
						pageTitle: "HChild1meta",
						needToken: true,
					}
				},
				{
					path: '/home/child1',
					component: child1,
					name: 'HChild1',
					meta: {
						pageTitle: "HChild1meta",
						needToken: true,
					}
				},
				{
					path: '/home/child2',
					component: child2,
					name: 'HChild2',
					meta: {
						pageTitle: "HChild2meta",
						needToken: true,
					}
				}
			]
		},
	]
})