import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/components/Layout/Layout.vue'; // 引入刚才创建的布局组件
import LoginView from '../views/LoginView.vue';
import IndexView from '@/views/index/IndexView.vue';
import RegisterView from '@/views/register/RegisterView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout, // 根路径使用布局组件，意味着其下的子路由都将有通用布局
      children: [
        {
          path: '',
          redirect: '/index'
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
    },
    {
      path: '/register',
      name:'register',
      component: RegisterView // 注册路由保持独立，不需要通用布局，所以不在布局组件的子路由范围内
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView // 登录路由同理，保持独立，不使用通用布局
    }
  ]
})

export default router;