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
			path: '/planning-poker',
			name: 'PlaningProkerRoom',
			component: () => import('../views/PlanningProkerRoom/ListView.vue'),
		},
		{
			path: '/planning-poker/:id',
			name: 'PlaningProkerRoomDetail',
			component: () => import('../views/PlanningProkerRoom/DetailView.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('../views/Errors/404View.vue'),
		},
	],
})

export default router
