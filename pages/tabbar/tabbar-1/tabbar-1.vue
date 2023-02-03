<template>
	<view class="content">
		{{message}}
	</view>
</template>

<script setup>
   import {ref} from'vue'
	const message=ref('首页页面1')
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}
</style>
