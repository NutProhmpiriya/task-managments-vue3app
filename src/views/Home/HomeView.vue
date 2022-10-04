<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'HomeView',
	})
</script>

<template>
	<h1>
		<a-button type="primary" size="large">
			<router-link to="/planing-prokers">Planning Proker Room</router-link>
		</a-button>
	</h1>
</template>
