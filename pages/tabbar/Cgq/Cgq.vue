<template>
  <view class="content">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
      <view class="context_base">水文/水质相关传感器选择</view>
        <van-field
          v-model="yczList.SiteType"
          is-link
          readonly
          label="水位计1"
          placeholder="选择水位计1"
          @click="showSiteType = true"
        />
        <van-popup v-model:show="showSiteType" round position="bottom">
          <van-picker
            :columns="SiteTypeList"
            @cancel="showSiteType = false"
            @confirm="onSiteType"
          />
        </van-popup>
        <van-field
          v-model="yczList.FloodSeasonMode"
          is-link
          readonly
          label="水位计2"
          placeholder="选择站汛期模式"
          @click="showSeasonMode = true"
        />
        <van-popup v-model:show="showSeasonMode" round position="bottom">
          <van-picker
            :columns="showSeasonModeList"
            @cancel="showSeasonMode = false"
            @confirm="TwoSiteType"
          />
        </van-popup>
</van-cell-group>
      <div style="margin-top: 123rpx">
        <van-button round block type="primary" native-type="submit">
          保存配置
        </van-button>
      </div>
    </van-form>
  </view>
</template>
<script setup>
import { ref, reactive } from "vue";
const showSiteType = ref(false);
const showSeasonMode = ref(false);
const yczList = reactive({});
const SiteTypeList = reactive([
  { text: "杭州", value: "Hangzhou" },
  { text: "宁波", value: "Ningbo" },
]);
const showSeasonModeList = reactive([
  { text: "杭州", value: "Hangzhou" },
  { text: "宁波", value: "Ningbo" },
  { text: "武汉", value: "Ningbo" },
]);

function onSiteType({ selectedOptions }, v) {
  showSiteType.value = false;
  yczList.SiteType = selectedOptions[0].text;
  yczList.SiteTypeList = selectedOptions[0];
}
function TwoSiteType({ selectedOptions }) {
  showSeasonMode.value = false;
  yczList.FloodSeasonMode = selectedOptions[0].text;
  yczList.FloodSeasonModeList = selectedOptions[0];
}
function onSubmit() {
  console.warn(yczList, "yczList");
}
</script>
<style lang="scss">
.content {
  font-size: 20rpx;
  .context_base {
    padding: 20rpx 40rpx;
    font-size: 25rpx;
    font-weight: bold;
    background: linear-gradient(to right, #8dbaf6, #f1f6ff);
  }
  .info {
    background: #f1f6ff;
    padding: 40rpx 35rpx;
  }
  .stepper_text {
    color: #a8a8a8;
    display: inline-block;
    margin-left: 16rpx;
  }
}
</style>
