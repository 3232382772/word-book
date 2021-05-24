import Vue from 'vue'
import VueRouter from 'vue-router'

const Words = () => import('views/words/Words')
const Sections = () => import('views/sections/Sections')
const Profile = () => import('views/profile/Profile')
const MyCode = () => import('views/profile/childComps/MyCode')
const Collection = () => import('views/collection/Collection')
const Tips = () => import('views/tips/Tips')
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/words'},
  {
    path: '/words',
    component: Words,
  },
  {
    path: '/sections',
    component: Sections
  },
  {
    path: '/profile', 
    component: Profile,
  },
  {
    path: '/code',
    component: MyCode
  },
  {
    path: '/collection',
    component: Collection
  },
  {
    path: '/tips',
    component: Tips
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router