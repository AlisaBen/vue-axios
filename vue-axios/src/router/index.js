import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/axios',
    name: 'vue-axios',
    component: () => import('../views/axios2-2.vue')
  },
  {
    path: '/contactList',
    name: '联系人列表',
    component: () => import('../views/ContactList.vue')
  },
  {
    path: '/axios1',
    name: 'axios2-3',
    component:() => import('../views/axios2-3.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
