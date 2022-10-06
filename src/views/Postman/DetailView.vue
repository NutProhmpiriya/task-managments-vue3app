<script setup lang="ts">
	import { ref, reactive } from 'vue'
	import { CaretDownOutlined } from '@ant-design/icons-vue'
	import JsonEditorVue from 'json-editor-vue'
	import type { Mode } from 'json-editor-vue'
	import { ACol, ARow, AButton, AInput } from '@/components/atnd'

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
	<ARow style="height: 100%">
		<ACol :span="5" style="background-color: blanchedalmond">FOLDER</ACol>
		<ACol :span="19" style="padding: 0 0 0 0.5rem">
			<ARow :gutter="16" style="margin-bottom: 1rem">
				<ACol :span="17">
					<AInput size="large" v-model:value="inputValue" />
				</ACol>
				<ACol :span="5">
					<AButton size="large" block type="primary">Add</AButton>
				</ACol>
				<ACol :span="2">
					<AButton size="large" block type="primary">
						<CaretDownOutlined />
					</AButton>
				</ACol>
			</ARow>
			<ARow style="height: 92.5%">
				<ACol span="12" style="background-color: bisque" class="jsoneditor-col">
					<JsonEditorVue v-model="jsonData.value" v-model:mode="jsonData.mode" />
				</ACol>
				<ACol span="12" style="background-color: blanchedalmond">result</ACol>
			</ARow>
		</ACol>
	</ARow>
</template>

<style scoped>
	:deep(.ant-col .jsoneditor-col > div) {
		height: 100% !important;
	}
</style>
