<script lang="ts">
	import { defineComponent, ref, watch } from 'vue'
	import SiderBarApp from './SiderBarApp.vue'
	import HeaderBarApp from './HeaderBarApp.vue'
	import BreadCrumb from '../breadcrumb/BreadCrumb.vue'
	import { useRoute } from 'vue-router'
	import type { IBreadcrumb } from '../breadcrumb/BreadCrumb.vue'
	export default defineComponent({
		components: {
			SiderBarApp,
			HeaderBarApp,
			BreadCrumb,
		},
		setup() {
			const collapsed = ref<boolean>(false)
			const route = useRoute()
			const setCollapsed = () => {
				collapsed.value = !collapsed.value
			}
			const breadcrumbs = ref<IBreadcrumb[]>([])

			watch(
				() => route.fullPath,
				() => {
					const fullPath = route.fullPath.split('/')
					let currentPath = '/'
					breadcrumbs.value = fullPath.map((path, index) => {
						return {
							path: (currentPath += path),
							name: index === 0 ? 'Home' : path,
						}
					})
				}
			)
			return {
				collapsed,
				setCollapsed,
				breadcrumbs,
				route,
			}
		},
	})
</script>

<template>
	<a-layout style="min-height: 100vh">
		<HeaderBarApp :collapsed="collapsed" :setCollapsed="setCollapsed" />
		<a-layout>
			<SiderBarApp :collapsed="collapsed" />
			<a-layout>
				<BreadCrumb :breadcrumbs="breadcrumbs" />
				<a-layout-content class="container">
					<slot />
				</a-layout-content>
			</a-layout>
		</a-layout>
	</a-layout>
</template>

<style scoped>
	.container {
		margin: 12px 16px;
		padding: 24px;
		background: #fff;
		min-height: 280px;
	}
</style>
