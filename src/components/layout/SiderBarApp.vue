<script lang="ts">
	import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'
	import { defineComponent, ref } from 'vue'
	import { useRouter } from 'vue-router'
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
			const router = useRouter()
			const handleclickMenu = (e: any) => {
				if (e.key) {
					router.push(e.key)
				}
			}
			return {
				selectedKeys: ref<string[]>(['1']),
				handleclickMenu,
			}
		},
	})
</script>
<template>
	<a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
		<div class="logo" />
		<a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="handleclickMenu">
			<a-menu-item key="/planning-prokers">
				<user-outlined />
				<span>Planning Proker</span>
			</a-menu-item>
			<a-menu-item key="/planning-prokers/1">
				<video-camera-outlined />
				<span>Planning Proke Detail</span>
			</a-menu-item>
			<a-menu-item key="/postman">
				<upload-outlined />
				<span>Postman</span>
			</a-menu-item>
			<a-menu-item key="/blogposts">
				<upload-outlined />
				<span>Blogposts</span>
			</a-menu-item>
			<a-menu-item key="/about">
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
