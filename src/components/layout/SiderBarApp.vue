<script lang="ts">
	import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'
	import { defineComponent, ref } from 'vue'
	export default defineComponent({
		name: 'SiderBarApp',
		components: {
			UserOutlined,
			VideoCameraOutlined,
			UploadOutlined,
		},
		props: {
			collapsed: Boolean,
		},
		setup() {
			return {
				selectedKeys: ref<string[]>(['1']),
			}
		},
	})
</script>
<template>
	<a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
		<div class="logo" />
		<a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
			<a-menu-item key="1">
				<user-outlined />
				<span>nav 1</span>
			</a-menu-item>
			<a-menu-item key="2">
				<video-camera-outlined />
				<span>nav 2</span>
			</a-menu-item>
			<a-menu-item key="3">
				<upload-outlined />
				<span>nav 3</span>
			</a-menu-item>
		</a-menu>
	</a-layout-sider>
</template>
<style scoped>
	.logo {
		height: 32px;
		margin: 16px;
		background: rgba(255, 255, 255, 0.3);
	}
</style>
