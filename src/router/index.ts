import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 路由懒加载，Vue Router 动态引入
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MainPage/mainPage.vue'),
      children: [{
        path: '/',
        name: 'index',
        component: () => import('@/views/IndexPage/indexPage.vue')
      },{
        path: '/usermanage',
        name: 'usermanage',
        component: ()=> import('@/views/System/UserManage/userManage.vue')
      },
      {
        path: '/manager',
        name: 'manager',
        component: () => import('@/views/System/SystemManage/SystemManage.vue')
      },
      {
        path: '/policy',
        name: 'policy',
        component: () => import('@/views/System/PolicyManage/PolicyManage.vue')
      },]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginRegister/loginRegister.vue')
    },
    
  ]
})

export default router
