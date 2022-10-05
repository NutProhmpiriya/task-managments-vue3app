<script setup lang="ts">
	import type { PropType } from 'vue'

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
	<a-breadcrumb class="breadcrumb-container">
		<a-breadcrumb-item v-for="breadcrumb in breadcrumbs" :key="breadcrumb.path">
			<router-link :to="breadcrumb.path">{{ breadcrumb.name }}</router-link>
		</a-breadcrumb-item>
	</a-breadcrumb>
</template>

<style scoped>
	.breadcrumb-container {
		margin: 0.5rem 0 0 1rem;
	}
</style>
