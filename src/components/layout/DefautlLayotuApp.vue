<script lang="ts">
	import { defineComponent, ref, watch } from 'vue'
	import SiderBarApp from './SiderBarApp.vue'
	import HeaderBarApp from './HeaderBarApp.vue'
	import BreadCrumb from './BreadCrumb.vue'
	import { useRoute } from 'vue-router'
	import type { IBreadcrumb } from './BreadCrumb.vue'
	export default defineComponent({
		components: {
			SiderBarApp,
			HeaderBarApp,
			BreadCrumb,
		},
		setup() {
			const collapsed = ref<boolean>(false)
			const fullPath = ref<string>('')
			const route = useRoute()
			const setCollapsed = () => {
				collapsed.value = !collapsed.value
			}
			const breadcrumbs = ref<IBreadcrumb[]>([])

			watch(
				() => route.name,
				() => {
					fullPath.value = route.fullPath
					const fullPathArray = route.fullPath.split('/')
					let currentPath = '/'
					breadcrumbs.value = fullPathArray.map((path, index) => {
						let name = path.replace(/-/g, ' ')
						const _name = name.split(' ')
						const _name2 = _name.map(n => n.charAt(0).toUpperCase() + n.slice(1))
						name = _name2.join(' ')
						return {
							path: (currentPath += path),
							name: index === 0 ? 'Home' : name,
						}
					})
				}
			)
			return {
				collapsed,
				setCollapsed,
				breadcrumbs,
				fullPath,
			}
		},
	})
</script>

<template>
	<a-layout style="min-height: 100vh" v-if="fullPath === '/'">
		<a-layout-content class="container">
			<slot />
		</a-layout-content>
	</a-layout>
	<a-layout style="min-height: 100vh" v-else>
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
