<script setup lang="ts">
	import { ref } from 'vue'

	const visible = ref(false)
	const handleOk = () => {
		visible.value = false
	}
	const showModal = () => {
		visible.value = true
	}
	defineExpose({ showModal })
</script>

<template>
	<a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
		<p>Some contents...</p>
		<p>Some contents...</p>
		<p>Some contents...</p>
	</a-modal>
</template>
