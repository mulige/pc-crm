import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Linkage from '@/components/Linkage'

import Header from '@/components/Header'
import SliderPage from '@/pages/SliderPage'
import FilterPage from '@/pages/FilterPage'
import TablePage from '@/pages/TablePage'
import FormPage from '@/pages/FormPage'
import Main from '@/pages/Main'
import index from '@/pages/Index'
import InnerMain from '@/pages/InnerMain'
import OutsideMain from '@/pages/OutsideMain'
import Flow from '@/pages/Flow'
import CompanyType from '@/pages/CompanyType'
import Index from '@/pages/Index'
/* const Foo = () =>
	import("@/components/Foo") */
Vue.use(Router)

var router = new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				selector: to.hash
			}
		}
	},
	routes: [{
		path: '/',
		name: 'Index',
		component: index,
		children: [
		{
			path: '/tablePage',
			name: 'TablePage',
			component: TablePage
		},
		{
			path: '/filterPage',
			name: 'FilterPage',
			component: FilterPage
		},
		{
			path: '/sliderPage',
			name: 'SliderPage',
			component: SliderPage
		},
		{
			path: '/innerMain',
			name: 'InnerMain',
			component: InnerMain
		}, {
			path: '/outsideMain',
			name: 'outsideMain',
			component: OutsideMain
		},
		{
			path: '/linkage',
			name: 'Linkage',
			component: Linkage
		},
		{
			path: '/formPage',
			name: 'FormPage',
			component: FormPage,
			meta: {
				title: '表单'
			},

			children: [{
				path: 'a',
				name: 'a',
				component: SliderPage,
				meta: {
					title: '页面A'
				},
				children: [{
					path: 'b',
					name: 'b',
					meta: {
						title: '页面B'
					},
					component: Linkage

				},
					{
						path: 'c',
						name: 'c',
						meta: {
							title: '页面C'
						},
						component: FilterPage

					}
				]
			},
				{
					path: 'd',
					name: 'd',
					component: SliderPage,
					meta: {
						title: '页面D'
					}

				}


			]

		},
		{
			path: '/flow',
			name: 'flow',
			component: Flow,
			meta: {
				title: '流程'
			}
		},
		{
			path: '/companyType',
			name: 'companyType',
			component: CompanyType,
			meta: {
				title: '企业类型'
			}
		},

		]
	},


	]
})

var routeList = []
router.beforeEach((to, from, next) => {
	next()
}
)

export default router
