<script setup lang="ts">
	import { ref, toRaw } from 'vue'
	import FormAntD1 from '../../components/antform/FormAntD1.vue'
	import FormAntD2 from '../../components/antform/FormAntD2.vue'
	import FormAntD3 from '../../components/antform/FormAntD3.vue'

	const activeKey = ref('1')
	const formAntD1Ref = ref<InstanceType<typeof FormAntD1> | null>(null)
	const formAntD2Ref = ref<InstanceType<typeof FormAntD2> | null>(null)
	const formAntD3Ref = ref<InstanceType<typeof FormAntD3> | null>(null)
	const dataAllForm = ref({})
	const visible = ref(false)
	const handlerSubmit = () => {
		const formA = formAntD1Ref.value?.submitFormA()
		if (formA?.error || !formA?.data) {
			console.log('errorA', formA?.error)
		}
		const formB = formAntD2Ref.value?.submitFormB()
		if (formB?.error || !formB?.data) {
			console.log('errorB', formB?.error)
		}
		const formC = formAntD3Ref.value?.submitFormC()
		if (formC?.error || !formC?.data) {
			console.log('errorC', formC?.error)
		}
		visible.value = true
		dataAllForm.value = { a: toRaw(formA?.data), b: toRaw(formB?.data), c: toRaw(formC?.data) }
	}
	const afterCloseModal = () => {
		dataAllForm.value = {}
	}
</script>

<template>
	<div>
		<a-button type="primary" html-type="submit" @click="handlerSubmit">Submit</a-button>
		<a-tabs v-model:activeKey="activeKey" centered>
			<a-tab-pane key="1" tab="Tab 1">
				<FormAntD1 ref="formAntD1Ref" />
			</a-tab-pane>
			<a-tab-pane key="2" tab="Tab 2">
				<FormAntD2 ref="formAntD2Ref" />
			</a-tab-pane>
			<a-tab-pane key="3" tab="Tab 3">
				<FormAntD3 ref="formAntD3Ref" />
			</a-tab-pane>
		</a-tabs>
		<a-modal v-model:visible="visible" title="Result All Form" :afterClose="afterCloseModal">
			<pre>{{ dataAllForm }}</pre>
		</a-modal>
	</div>
</template>
