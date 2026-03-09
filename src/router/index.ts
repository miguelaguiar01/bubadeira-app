import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: () => import('../views/SplashView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: () => import('../views/LobbyView.vue'),
    },
    {
      path: '/game/higher-or-lower',
      name: 'higher-or-lower',
      component: () => import('../views/HigherOrLowerView.vue'),
    },
  ],
})

export default router
