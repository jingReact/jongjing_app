<script>

export default {
	onLaunch: function() {
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
	onShow: function() {
	},
	onHide: function() {
	}
};
</script>

<style>
/*每个页面公共css */ 
.van-cell {
    margin-left: -9rpx;
}
</style>
