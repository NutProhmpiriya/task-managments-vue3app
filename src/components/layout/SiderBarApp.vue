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
	<ALayoutSider :collapsed="collapsed" :trigger="null" collapsible>
		<div class="logo" />
		<AMenu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="handleclickMenu">
			<AMenuItem key="/planning-prokers">
				<UserOutlined />
				<span>Planning Proker</span>
			</AMenuItem>
			<AMenuItem key="/planning-prokers/1">
				<VideoCameraOutlined />
				<span>Planning Proke Detail</span>
			</AMenuItem>
			<AMenuItem key="/postman">
				<UploadOutlined />
				<span>Postman</span>
			</AMenuItem>
			<AMenuItem key="/blogposts">
				<UploadOutlined />
				<span>Blogposts</span>
			</AMenuItem>
			<AMenuItem key="/antdform">
				<UploadOutlined />
				<span>AntdForm</span>
			</AMenuItem>
			<AMenuItem key="/about">
				<UploadOutlined />
				<span>nav 3</span>
			</AMenuItem>
		</AMenu>
	</ALayoutSider>
</template>
<style scoped>
	.logo {
		height: 32px;
		margin: 16px;
		background: rgba(255, 255, 255, 0.3);
	}
</style>
