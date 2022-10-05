<script setup lang="ts">
	import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'
	import { ref } from 'vue'
	import { useRouter } from 'vue-router'
	defineProps({
		collapsed: Boolean,
	})
	const selectedKeys = ref<string[]>(['1'])
	const router = useRouter()
	const handleclickMenu = (e: any) => {
		if (e.key) {
			router.push(e.key)
		}
	}
</script>
<template>
	<a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
		<div class="logo" />
		<a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="handleclickMenu">
			<a-menu-item key="/planning-prokers">
				<UserOutlined />
				<span>Planning Proker</span>
			</a-menu-item>
			<a-menu-item key="/planning-prokers/1">
				<VideoCameraOutlined />
				<span>Planning Proke Detail</span>
			</a-menu-item>
			<a-menu-item key="/postman">
				<UploadOutlined />
				<span>Postman</span>
			</a-menu-item>
			<a-menu-item key="/blogposts">
				<UploadOutlined />
				<span>Blogposts</span>
			</a-menu-item>
			<a-menu-item key="/about">
				<UploadOutlined />
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
