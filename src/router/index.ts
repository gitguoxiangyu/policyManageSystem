import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 路由懒加载，Vue Router 动态引入
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MainPage/mainPage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginRegister/loginRegister.vue')
    },
  ]
})

export default router
