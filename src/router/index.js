import Vue from 'vue'
import VueRouter from 'vue-router'

import Article from '@/views/Blog/article'

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
    children: [
      {
        path: '/services/:name',
        name: 'service',
        component: () => import(/* webpackChunkName: "services" */ '../views/Services/index.vue'),
      }
    ]
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog/index.vue'),
    meta: {
      menu: 'services'
    }
  },
  {
    path: '/blog/:id',
    name: 'blog-article',
    component: Article
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
