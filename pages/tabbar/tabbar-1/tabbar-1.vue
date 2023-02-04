<template>
	<view class="content">
		<button @click="clickBtn">{{message}}</button>
	</view>
</template>

<script setup>
	import {getUserInfo}  from '@/api/user.js'


   import {ref} from'vue'
	const message=ref('点击首页页面')
    function clickBtn(){
		console.log( getUserInfo,"=====");
		getUserInfo().then((d)=>{ 
        console.log(d,999);
		})
		
	}

</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}
</style>
