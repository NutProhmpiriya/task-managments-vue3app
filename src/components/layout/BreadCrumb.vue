<script setup lang="ts">
	import type { PropType } from 'vue'
	import { ABreadcrumb, ABreadcrumbItem } from '../atnd'
	export interface IBreadcrumb {
		path: string
		name: string
	}
	defineProps({
		breadcrumbs: {
			type: Array as PropType<IBreadcrumb[]>,
			required: true,
		},
	})
</script>

<template>
	<ABreadcrumb class="breadcrumb-container">
		<ABreadcrumbItem v-for="breadcrumb in breadcrumbs" :key="breadcrumb.path">
			<router-link :to="breadcrumb.path">{{ breadcrumb.name }}</router-link>
		</ABreadcrumbItem>
	</ABreadcrumb>
</template>

<style scoped>
	.breadcrumb-container {
		margin: 0.5rem 0 0 1rem;
	}
</style>
