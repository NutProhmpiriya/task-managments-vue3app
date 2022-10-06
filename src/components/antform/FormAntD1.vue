<script setup lang="ts">
	import { Form } from 'ant-design-vue'
	import { reactive } from 'vue'
	const useForm = Form.useForm
	const modelRef = reactive({
		name: '',
		description: '',
	})
	const ruleRef = reactive({})
	const { resetFields, validate } = useForm(modelRef, ruleRef)

	const submitFormA = () => {
		let error: any
		validate()
			.then(() => {
				console.log('validate successA', modelRef)
			})
			.catch(errorInfo => {
				console.log('validate failed', errorInfo)
				error = errorInfo
			})
		return { data: modelRef, error: error }
	}

	const resetFormA = () => {
		resetFields()
	}

	defineExpose({ submitFormA, resetFormA, modelRef })
</script>
<template>
	<div>
		<a-form name="formA">
			<h3>Form1</h3>
			<a-form-item name="name">
				<a-input placeholder="Basic usage" v-model:value="modelRef.name" allow-clear />
			</a-form-item>
			<a-form-item name="description">
				<a-input placeholder="Basic usage" v-model:value="modelRef.description" allow-clear />
			</a-form-item>
		</a-form>
	</div>
</template>
