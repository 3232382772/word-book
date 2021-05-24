import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//自定义toast插件
import toast from 'common/toast'


import fastclick from 'fastclick'

//导入elementui
import { Icon, Button, Row, Col, Collapse, CollapseItem } from 'element-ui'
Vue.config.productionTip = false

//elementUI
Vue.use(Icon)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Collapse)
Vue.use(CollapseItem)
//toast插件
Vue.use(toast)

//解决移动端300ms延迟
fastclick.attach(document.body)

//创建事件总线
Vue.prototype.$eventBus = new Vue()
//axios
Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
