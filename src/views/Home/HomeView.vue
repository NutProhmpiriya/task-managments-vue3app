<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'HomeView',
	})
</script>

<template>
	<div>
		<h1>HOME</h1>
		<a-button type="primary" size="large">
			<router-link to="/planning-prokers">Planning Proker Room</router-link>
		</a-button>
	</div>
</template>
