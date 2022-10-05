<script setup lang="ts">
	import { ref, reactive } from 'vue'
	import { CaretDownOutlined } from '@ant-design/icons-vue'
	import JsonEditorVue from 'json-editor-vue'
	import type { Mode } from 'json-editor-vue'

	interface IJsonEditorVue {
		value: any
		mode?: Mode
		readOnly?: boolean
		class?: string
	}

	const inputValue = ref<string>('')
	const jsonData = reactive<IJsonEditorVue>({ value: undefined, mode: 'text', readOnly: false })
</script>

<template>
	<a-row style="height: 100%">
		<a-col :span="5" style="background-color: blanchedalmond">FOLDER</a-col>
		<a-col :span="19" style="padding: 0 0 0 0.5rem">
			<a-row :gutter="16" style="margin-bottom: 1rem">
				<a-col :span="17">
					<a-input size="large" v-model:value="inputValue" />
				</a-col>
				<a-col :span="5">
					<a-button size="large" block type="primary">Add</a-button>
				</a-col>
				<a-col :span="2">
					<a-button size="large" block type="primary">
						<CaretDownOutlined />
					</a-button>
				</a-col>
			</a-row>
			<a-row style="height: 92.5%">
				<a-col span="12" style="background-color: bisque" class="jsoneditor-col">
					<JsonEditorVue v-model="jsonData.value" v-model:mode="jsonData.mode" />
				</a-col>
				<a-col span="12" style="background-color: blanchedalmond">result</a-col>
			</a-row>
		</a-col>
	</a-row>
</template>

<style scoped>
	:deep(.ant-col .jsoneditor-col > div) {
		height: 100% !important;
	}
</style>
