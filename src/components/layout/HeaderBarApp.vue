<script lang="ts">
	import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
	import { defineComponent } from 'vue'
	export default defineComponent({
		name: 'HeaderBarApp',
		components: {
			MenuUnfoldOutlined,
			MenuFoldOutlined,
		},
		props: {
			collapsed: Boolean,
			setCollapsed: {
				type: Function,
				required: true,
			},
		},
	})
</script>

<template>
	<a-layout-header style="background: #fff; padding-left: 0.5rem">
		<menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => setCollapsed()" />
		<menu-fold-outlined v-else class="trigger" @click="() => setCollapsed()" />
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
