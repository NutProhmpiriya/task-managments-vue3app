<script lang="ts">
	import { defineComponent, ref } from 'vue'
	import SiderBarApp from './SiderBarApp.vue'
	import HeaderBarApp from './HeaderBarApp.vue'
	export default defineComponent({
		components: {
			SiderBarApp,
			HeaderBarApp,
		},
		setup() {
			const collapsed = ref<boolean>(false)
			const setCollapsed = () => {
				collapsed.value = !collapsed.value
			}

			return {
				collapsed,
				setCollapsed,
			}
		},
	})
</script>

<template>
	<a-layout style="min-height: 100vh">
		<SiderBarApp :collapsed="collapsed" />
		<a-layout>
			<HeaderBarApp :collapsed="collapsed" :setCollapsed="setCollapsed" />
			<a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
				<slot />
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>
