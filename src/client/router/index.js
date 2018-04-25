import Vue from 'vue'
import Router from 'vue-router'
import Portal from '../views/portal/portal'
import ElementUI from '../views/elementui/elementui'
import UIBase from '../views/elementui/UIBase'
import UIForm1 from '../views/elementui/UIForm1'
import UIForm2 from '../views/elementui/UIForm2'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'ElementUI',
			component: ElementUI,
			children: [{
				path: '/',
				component: UIBase,
				name: 'UIBase'
			}, {
				path: '/ElementUI/UIBase',
				component: UIBase,
				name: 'UIBase'
			}, {
				path: '/ElementUI/UIForm1',
				component: UIForm1,
				name: 'UIForm1'
			}, {
				path: '/ElementUI/UIForm2',
				component: UIForm2,
				name: 'UIForm2'
			}]
		},
		{
			path: '/Portal',
			name: 'Portal',
			component: Portal
		}
	]
})