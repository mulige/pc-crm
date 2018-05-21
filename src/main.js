// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import './../static/icon/iconfont.css'
const FormType = () => import('@/components/FormType')
const FormTable = () => import('@/components/formtable/FormTable')

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('form-type',FormType)
Vue.component('form-table',FormTable)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
