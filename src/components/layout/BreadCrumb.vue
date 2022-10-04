<script lang="ts">
	import { defineComponent } from 'vue'
	export interface IBreadcrumb {
		path: string
		name: string
	}
	export default defineComponent({
		name: 'BreadCrumb',
		props: {
			breadcrumbs: {
				type: Array as () => IBreadcrumb[],
			},
		},
	})
</script>

<template>
	<a-breadcrumb class="breadcrumb-container">
		<!--  eslint-disable-next-line prettier/prettier -->
		<a-breadcrumb-item v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.path">
			<span v-if="index === 0">{{ breadcrumb.name }}</span>
			<router-link v-else :to="breadcrumb.path">{{ breadcrumb.name }}</router-link>
		</a-breadcrumb-item>
	</a-breadcrumb>
</template>

<style scoped>
	.breadcrumb-container {
		margin: 0.5rem 0 0 1rem;
	}
</style>
