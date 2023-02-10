<template>
  <view class="content">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
      <view class="context_base">传感器采集间隔时间设置</view>
        <van-field
          v-model="yczList.reportingPeriod"
          label="采集周期"
          input-align="right"
          placeholder="分钟"
          label-width="110rpx"
        >
          <template #input>
            <text class="stepper_text">分钟(0-1440)</text>
            <van-stepper
              v-model="yczList.reportingPeriod"
              default-value="0"
              min="0"
              max="1440"
              theme="round"
            />
          </template>
        </van-field>
        <!-- 采集通信设置 -->
        <view class="context_base info">采集通信设置</view>
        <van-field
          v-model="yczList.reportingCJB"
          label="预热时间"
          input-align="right"
          placeholder="分钟"
          label-width="110rpx"
        >
          <template #input>
            <text class="stepper_text">秒钟(0-255)</text>
            <van-stepper
              v-model="yczList.reportingCJB"
              default-value="0"
              min="0"
              max="255"
              theme="round"
            />
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingXQF"
          label="失败重试"
          input-align="right"
          placeholder="失败重试次数"
        >
          <template #input>
            <text class="stepper_text">(重试次数0-255)</text>
            <van-stepper
              v-model="yczList.reportingXQF"
              default-value="0"
              min="0"
              theme="round"
              max="255"
            />
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingCJZ"
          label="故障滤波"
          input-align="right"
          placeholder="故障滤波"
        >
          <template #input>
            <text class="stepper_text">(无效0-255)</text>
            <van-stepper
              v-model="yczList.reportingCJZ"
              default-value="0"
              min="0"
              max="255"
              theme="round"
            />
          </template>
        </van-field>
        <!-- 传感器开关设置 -->
      <view class="context_base info">传感器开关设置</view>
        <van-field name="switch" label="水位计1" input-align="right">
          <template #input>
            <van-switch v-model="yczList.checked" size="20" />
          </template>
        </van-field>
        <van-field name="switch" label="水位计2" input-align="right">
          <template #input>
            <van-switch   v-model="yczList.ClearHistorical" size="20" />
          </template>
        </van-field>

        <view class="context_base info">传感器通信地址设置</view>
        <van-field
          v-model="yczList.reportingPeriod"
          label="水位计1"
          input-align="right"
          placeholder="水位计1"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingPeriod"
              default-value="0"
              min="0"
              theme="round"
              max="255"
            />
          </template>
        </van-field>

        <van-field
          v-model="yczList.reportingPeriod"
          label="水位计2"
          input-align="right"
          placeholder="水位计2"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingPeriod"
              default-value="0"
              min="0"
              theme="round"
              max="255"
            />
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 23rpx">
        <van-button round block type="primary" native-type="submit">
          保存配置
        </van-button>
      </div>
    </van-form>
  </view>
</template>
<script setup>
import { ref, reactive } from "vue";
const yczList = reactive({ checked: true,ClearHistorical:false });
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
    margin-right: 15rpx;
  }
}
</style>
