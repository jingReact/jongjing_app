<template>
	<view class="content">
		{{message}}
	</view>
</template>

<script setup>
	import {ref} from'vue'
		const message=ref('个人中心')
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>
