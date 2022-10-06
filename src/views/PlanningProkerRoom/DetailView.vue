<script setup lang="ts">
	import { ref } from 'vue'
	import SignUpModal from '@/components/auth/SignUpModal.vue'
	import { useRoute } from 'vue-router'
	import { AButton } from '@/components/atnd'

	const singUpModalRef = ref<InstanceType<typeof SignUpModal> | null>(null)
	const roomId = useRoute().params.id
	const openModal = () => {
		singUpModalRef.value?.showModal()
	}
</script>

<template>
	<div>
		<h3>Planning Room Detail {{ roomId }}</h3>
		<AButton type="primary" @click="openModal">OPEN MODAL</AButton>
		<SignUpModal ref="singUpModalRef" />
	</div>
</template>
