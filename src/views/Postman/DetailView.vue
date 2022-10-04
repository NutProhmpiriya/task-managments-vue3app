<script lang="ts">
	import { defineComponent, ref, watch } from 'vue'
	import { CaretDownOutlined } from '@ant-design/icons-vue'
	import JsonEditorVue from 'json-editor-vue'
	import 'vanilla-jsoneditor/themes/jse-theme-dark.css'
	export default defineComponent({
		name: 'PostmanDetailView',
		components: {
			CaretDownOutlined,
			JsonEditorVue,
		},
		setup() {
			const inputValue = ref<string>('')
			const jsonContent = ref()
			const options = ref()

			const editorJsonError = () => {}
			watch(jsonContent, val => {
				console.log(val)
			})
			return {
				inputValue,
				jsonContent,
				options,
				editorJsonError,
			}
		},
	})
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
				<a-col span="12" style="background-color: bisque">
					<JsonEditorVue v-model="jsonContent" class="jsoneditor" mode="text" />
				</a-col>
				<a-col span="12" style="background-color: blanchedalmond"> </a-col>
			</a-row>
		</a-col>
	</a-row>
</template>

<style scoped>
	.jsoneditor {
		height: 100%;
	}
</style>
