import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/HomeView.vue'),
    },
    {
      path: '/:id',
      name: 'planing proker room',
      component: () => import('../views/PlanningRoom/DetailView.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/Errors/404View.vue'),
    },
  ],
})

export default router
