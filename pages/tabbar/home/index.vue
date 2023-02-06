<template>
	<view class="content">
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
		console.log($use,'$use');
		})
		
	}

</script>

<style>
.content {
	text-align: center;
	height: 100%;
}
uni-page-body,html,body{  
            height: 100%;  
	        background: linear-gradient(to bottom,#92bdf7,#f1f6ff);
}
</style>
