<script lang="ts">
	import { defineComponent, ref } from 'vue'
	import SignUpModal from '@/components/auth/SignUpModal.vue'
	import { useRoute } from 'vue-router'

	export default defineComponent({
		components: {
			SignUpModal,
		},
		setup() {
			const singUpModalRef = ref<InstanceType<typeof SignUpModal> | null>(null)
			const roomId = useRoute().params.id
			const openModal = () => {
				singUpModalRef.value?.showModal()
			}

			return {
				openModal,
				singUpModalRef,
				roomId,
			}
		},
	})
</script>

<template>
	<div>
		<h3>Planning Room Detail {{ roomId }}</h3>
		<a-button type="primary" @click="openModal">OPEN MODAL</a-button>
		<SignUpModal ref="singUpModalRef" />
	</div>
</template>
