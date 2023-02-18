<template>
  <view class="content">
    <uni-card v-for="i in icons" :key="i.type" class="card">
      <view class="content_view">
        <view class="card_view">
          <image class="right_img" :src="i.type" alt="" />
          <view>{{ i.text }}</view>
        </view>
        <view @click="tableClick(i)">
          <image class="right_img icon" src="../../../static/img/right.png" alt="" />
        </view>
      </view>
    </uni-card>
  </view>
</template>

<script setup>
import { getUserInfo } from "@/api/user.js";
import { ref, reactive } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { AllData} from "@/utils/Hexadecimal";
const icons = reactive([
  {
    type: "/static/img/yaocezhan_icon.png",
    text: "遥测站设置",
    path: "../ycz/ycz",
  },
  {
    type: "/static/img/yaocechuanganqi_icon.png",
    text: "传感器型号选择",
    path: "../Cgq/Cgq",

  },
  {
    type: "/static/img/shuiwenchuanganqi_icon.png",
    text: "水文传感器通性设置",
    path: "../Swq/Swq",

  },
  { type: "/static/img/shuiwenji_icon.png", 
    text: "水位计设置",
    path: "../Swj/Swj",
 },
 { 
  type: "/static/img/tiaoshi.png", 
    text: "调试模式",
    c:1,
    path: "../tsms/tsms"
 },
]);
function tableClick(i) {
  let array=JSON.stringify(AllData)
    uni.navigateTo({
    // url: 'test?id=1&name=uniapp'  c传递参数
    url: i.path+ `?AllData= ${array}`,
  });
 
}
</script>

<style lang="scss">
.content {
  text-align: center;
  height: 100%;
  .card {
    height: 200rpx;
    .content_view,
    .card_view {
      display: flex;
      flex: 1;
      justify-content: space-around;
      align-items: center;
      line-height: 150rpx;
      .card_view {
        justify-content: start;
        view {
          font-size: 30rpx;
          font-weight: bold;
        }
      }
      .right_img {
        width: 80rpx;
        height: 80rpx;
      }
      .icon{
        margin-top: 50rpx;
      }
    }
  }
 
}
uni-page-body,
html,
body {
  height: 98%;
  background: linear-gradient(to bottom, #92bdf7, #f1f6ff);
}
</style>
