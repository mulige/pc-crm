import Vue from 'vue'
import Router from 'vue-router'


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
import CountAndShow from '@/components/CountAndShow'
/* const Foo = () =>
	import("@/components/Foo") */
	
const CustomerList = () => import('@/pages/CustomerList')
const CustomerIndustry = () => import('@/pages/CustomerIndustry')
const CustomerMsg = () => import('@/pages/CustomerMsg')
	
const VerticalFlow = () => import('@/components/VerticalFlow')
const FormTable = () => import('@/components/formtable/FormTable')
const Tree = () => import('@/components/tree/Tree')
const Tabs = () => import('@/components/Tabs')
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
		redirect: '/flow',
		children: [
		{
			path: '/customerMsg',
			name: 'CustomerMsg',
			component: CustomerMsg
		},
		{
			path: '/customerIndustry',
			name: 'CustomerIndustry',
			component: CustomerIndustry
		},
		{
			path: '/customerList',
			name: 'CustomerList',
			component: CustomerList
		},
		{
			path: '/tabs',
			name: 'Tabs',
			component: Tabs
		},
		{
			path: '/vFlow',
			name: 'VerticalFlow',
			component: VerticalFlow
		},
		{
			path: '/formTable',
			name: 'FormTable',
			component: FormTable
		},
		{
			path: '/tree',
			name: 'Tree',
			component: Tree
		},
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
			{
				path: '/countAndShow',
				name: 'CountAndShow',
				component: CountAndShow,
				meta: {
					title: '数据显示'
				}
			}

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
