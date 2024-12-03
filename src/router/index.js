import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import IndexView from '@/views/index/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      redirect: '/index',//重定向到首页
    },
    {
      path: '/index',
      name: 'index',
      component: IndexView
    },
    {
      path: '/mid-video',
      name:'mid-video',
      component: () => import('@/views/index/MidVideoView.vue')
    },
    {
      path: '/tv',
      name: 'tv',
      component: () => import('@/views/index/TVView.vue')
    },
    {
      path: '/movie',
      name:'movie',
      component: () => import('@/views/index/MovieView.vue')
    },
    {
      path: '/variety',
      name: 'variety',
      component: () => import('@/views/index/VarietyView.vue')
    },
    {
      path: '/cartoon',
      name: 'cartoon',
      component: () => import('@/views/index/CartoonView.vue')
    },
    {
      path: '/child',
      name: 'child',
      component: () => import('@/views/index/ChildView.vue')
    },
    {
      path:'/music',
      name:'music',
      component: () => import('@/views/index/MusicView.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/index/GameView.vue')
    },
    {
      path: '/more',
      name: 'more',
      component: () => import('@/views/index/MoreView.vue')
    }
    ]
})

export default router