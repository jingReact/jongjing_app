<script>

export default {
	onLaunch() {
		setTimeout(() => {
			uni.setTabBarBadge({
				index: 1,
				text: '31'
			});
			uni.showTabBarRedDot({
				index: 3
			});
		}, 1000);
	},
	onShow() {
	},
	onHide() {
	}
};
</script>

<style>
/*每个页面公共css */ 
.van-cell {
    margin-left: -9rpx;
}
</style>
