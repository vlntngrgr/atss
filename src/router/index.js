import Vue from 'vue'
import VueRouter from 'vue-router'

import Article from '@/views/Blog/article'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/index.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services/index.vue'),
    // children: [
    //   {
    //     path: '/service/{id}',
    //     name: 'service',
    //     component: 
    //   }
    // ]
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog/index.vue')
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
