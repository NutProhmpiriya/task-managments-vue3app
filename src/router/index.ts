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
			path: '/planning-proker',
			name: 'PlaningProkerRoom',
			component: () => import('../views/PlanningProkerRoom/ListView.vue'),
		},
		{
			path: '/planning-proker/:id',
			name: 'PlaningProkerRoomDetail',
			component: () => import('../views/PlanningProkerRoom/DetailView.vue'),
		},
		{
			path: '/postman',
			name: 'Postman',
			component: () => import('../views/Postman/DetailView.vue'),
		},
		{
			path: '/blogposts',
			name: 'BlogPostList',
			component: () => import('../views/BlogPosts/ListView.vue'),
		},
		{
			path: '/blogposts/:id',
			name: 'BlogPostDetail',
			component: () => import('../views/BlogPosts/DetailView.vue'),
		},
		{
			path: '/blogposts/create',
			name: 'CreatePost',
			component: () => import('../views/BlogPosts/EditorView.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('../views/Errors/404View.vue'),
		},
	],
})

export default router
