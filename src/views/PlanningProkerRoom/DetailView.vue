<script lang="ts">
	import { defineComponent, ref } from 'vue'
	import SignUpModal from '@/components/auth/SignUpModal.vue'

	export default defineComponent({
		components: {
			SignUpModal,
		},
		setup() {
			const singUpModalRef = ref<InstanceType<typeof SignUpModal> | null>(null)
			const openModal = () => {
				singUpModalRef.value?.showModal()
			}
			return {
				openModal,
				singUpModalRef,
			}
		},
	})
</script>

<template>
	<div>
		<h3>Planning Room Detail</h3>
		<a-button type="primary" @click="openModal">OPEN MODAL</a-button>
		<SignUpModal ref="singUpModalRef" />
	</div>
</template>
