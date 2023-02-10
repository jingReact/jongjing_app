<!--
 * @Author: liyingjing 1147991367@qq.com
 * @Date: 2023-02-07 09:45:01
 * @LastEditors: liyingjing 1147991367@qq.com
 * @LastEditTime: 2023-02-10 14:42:15
 * @FilePath: \jiongshui_app\pages\tabbar\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="content">
    <uni-card v-for="i in icons" :key="i.type" class="card">
      <view class="content_view">
        <view class="card_view">
          <img :src="i.type" alt="" />
          <view>{{ i.text }}</view>
        </view>
        <view @click="tableClick(i)">
          <img class="right_img" src="../../../static/img/right.png" alt="" />
        </view>
      </view>
    </uni-card>
  </view>
</template>

<script setup>
import { getUserInfo } from "@/api/user.js";
import { ref, reactive } from "vue";
import { onLoad } from "@dcloudio/uni-app";
const icons = reactive([
  {
    type: "../../../static/img/yaocezhan_icon.png",
    text: "遥测站设置",
    path: "../ycz/ycz",
  },
  {
    type: "../../../static/img/yaocechuanganqi_icon.png",
    text: "传感器型号选择",
    path: "../Cgq/Cgq",

  },
  {
    type: "../../../static/img/shuiwenchuanganqi_icon.png",
    text: "水文传感器通性设置",
    path: "../Swq/Swq",

  },
  { type: "../../../static/img/shuiwenji_icon.png", 
    text: "水位计设置",
    path: "../Swj/Swj",
 },
]);
function tableClick(i) {
  uni.navigateTo({
    // url: 'test?id=1&name=uniapp'  c传递参数
    url: i.path,
  });
}
</script>

<style lang="scss">
.content {
  text-align: center;
  height: 100%;
  .card {
    height: 20%;
    .content_view,
    .card_view {
      display: flex;
      flex: 1;
      justify-content: space-around;
      align-items: center;
      line-height: 190rpx;
      .card_view {
        justify-content: start;
        view {
          font-size: 30rpx;
          font-weight: bold;
        }
      }
      .right_img {
        width: 80rpx;
        margin-top: 80rpx;
      }
    }
  }
  .card:last-child{
	background: transparent;
	opacity: .5;
  }
}
uni-page-body,
html,
body {
  height: 98%;
  background: linear-gradient(to bottom, #92bdf7, #f1f6ff);
}
</style>
