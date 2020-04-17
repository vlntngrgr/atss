import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/index.vue'),
    meta: {
      menu: 'home'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services/index.vue'),
    meta: {
      menu: 'services'
    },
  },
  {
    path: '/services/:name',
    name: 'service',
    component: () => import(/* webpackChunkName: "service" */ '../views/Services/item.vue'),
    meta: {
      menu: 'services'
    },
  },
  {
    path: '/cgv',
    name: 'cgv',
    component: () => import(/* webpackChunkName: "cgve" */ '../views/legal/cgv.vue'),
    meta: {
      menu: 'cgv'
    },
  },
  {
    path: 'disclaimer',
    name: 'disclaimer',
    component: () => import(/* webpackChunkName: "service" */ '../views/legal/disclaimer.vue'),
    meta: {
      menu: 'disclaimer'
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
