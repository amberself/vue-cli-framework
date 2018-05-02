import Vue from 'vue'
import Router from 'vue-router'
import Portal from '../views/portal/portal'
import ElementUI from '../views/elementui/elementui'
import UIBase from '../views/elementui/UIBase'
import UIForm1 from '../views/elementui/UIForm1'
import UIForm2 from '../views/elementui/UIForm2'
import UIData from '../views/elementui/UIData'
import UINotice from '../views/elementui/UINotice'
import UINavigation from '../views/elementui/UINavigation'
import UIOthers from '../views/elementui/UIOthers'
import UITable from '../views/elementui/UITable'
import MyUI from '../views/elementui/MyUI'

Vue.use(Router);

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
			}, {
				path: '/ElementUI/UIData',
				component: UIData,
				name: 'UIData'
			}, {
				path: '/ElementUI/UINotice',
				component: UINotice,
				name: 'UINotice'
			}, {
				path: '/ElementUI/UINavigation',
				component: UINavigation,
				name: 'UINavigation'
			}, {
				path: '/ElementUI/UIOthers',
				component: UIOthers,
				name: 'UIOthers'
			}, {
				path: '/ElementUI/UITable',
				component: UITable,
				name: 'UITable'
			}, {
				path: '/ElementUI/MyUI',
				component: MyUI,
				name: 'MyUI'
			}]
		},
		{
			path: '/Portal',
			name: 'Portal',
			component: Portal
		}
	]
})