<script setup lang="ts">
	import { MenuUnfoldOutlined, MenuFoldOutlined, BellOutlined } from '@ant-design/icons-vue'
	defineProps({
		collapsed: Boolean,
		setCollapsed: {
			type: Function,
			required: true,
		},
	})
</script>

<template>
	<a-layout-header style="background: #fff; padding-left: 0.5rem">
		<a-row>
			<a-col span="8">
				<MenuUnfoldOutlined v-if="collapsed" class="trigger" @click="() => setCollapsed()" />
				<MenuFoldOutlined v-else class="trigger" @click="() => setCollapsed()" />
			</a-col>
			<a-col span="8"></a-col>
			<a-col span="8">
				<a-row justify="end" align="middle" style="height: 100%">
					<BellOutlined style="font-size: 1.25rem" />
				</a-row>
			</a-col>
		</a-row>
	</a-layout-header>
</template>

<style>
	#components-layout-demo-custom-trigger .trigger {
		font-size: 18px;
		line-height: 64px;
		padding: 0 24px;
		cursor: pointer;
		transition: color 0.3s;
	}

	#components-layout-demo-custom-trigger .trigger:hover {
		color: #1890ff;
	}

	#components-layout-demo-custom-trigger .logo {
		height: 32px;
		background: rgba(255, 255, 255, 0.3);
		margin: 16px;
	}

	.site-layout .site-layout-background {
		background: #fff;
	}
</style>
