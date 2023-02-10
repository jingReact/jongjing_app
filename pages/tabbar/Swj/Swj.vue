<template>
  <view class="content">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
      <view class="context_base">河道站点加报配置
      </view>
      <van-field
          v-model="yczList.reportingPeriod"
          label="加报上阈值"
          input-align="right"
          placeholder="m"
        >
          <template #input>
          <text class="stepper_text">m</text>
            <van-stepper
              v-model="yczList.reportingPeriod"
              default-value="0"
              min="0"
              step="0.01"
              max="99.99"
              :decimal-length="2"
              input-width="80rpx"
              theme="round"
            />
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingPeriod1"
          label="变幅加报"
          input-align="right"
          placeholder="m"
        >
          <template #input>
            <text class="stepper_text">m(0：关闭)</text>
            <van-stepper
              v-model="yczList.reportingPeriod"
              default-value="0"
              step="0.01"
              max="99.99"
              min="0"
              :decimal-length="2"
              input-width="80rpx"
              theme="round"
            />
          </template>
        </van-field>
        <view class="context_base info">窘井站点加报配置</view>
        <van-field
          v-model="yczList.reportingPeriod"
          label="加报报周期1"
          input-align="right"
          placeholder="分钟"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingPeriod"
              min="1"
              theme="round"
              max="1440"
              :decimal-length="1"
              input-width="80rpx"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingCJB"
          label="加报报报采集周期1"
          input-align="right"
          placeholder="分钟"
          label-width="300rpx"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingCJB"
              min="1"
              theme="round"
              max="1440"
              :decimal-length="1"
              input-width="80rpx"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingXQF"
          label="报警水位1"
          input-align="right"
          placeholder="分钟"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingXQF"
              min="1"
              theme="round"
              max="9999.99"
              :decimal-length="2"
              input-width="80rpx"
            />
            <text class="stepper_text">m &emsp;</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingCJZ"
          label="定时报周期2"
          input-align="right"
          placeholder="分钟"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingCJZ"
              min="2"
              theme="round"
              max="1440"
              :decimal-length="1"
              input-width="80rpx"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingCJZ"
          label="定时报采集周期2"
          input-align="right"
          placeholder="分钟"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingCJZ"
              min="2"
              theme="round"
              max="1440"
              :decimal-length="1"
              input-width="80rpx"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingXQF"
          label="报警水位2"
          input-align="right"
          placeholder="分钟"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingXQF"
              min="2"
              theme="round"
              max="9999.99"
              :decimal-length="2"
              input-width="80rpx"
            />
            <text class="stepper_text">m&emsp;</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingCJZ"
          label="定时报周期3"
          input-align="right"
          placeholder="分钟"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingCJZ"
              min="3"
              theme="round"
              max="1440"
              :decimal-length="1"
              input-width="80rpx"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingCJZ"
          label="定时报采集周期3"
          input-align="right"
          placeholder="分钟"
          label-width="300rpx"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingCJZ"
              min="3"
              theme="round"
              max="1440"
              :decimal-length="1"
              input-width="80rpx"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>
        <view class="context_base info">WGN5/WGN6配置</view>
        <van-field
          v-model="yczList.reportingCJZ"
          label="小雷达增益"
          input-align="right"
          placeholder="分钟"
          label-width="300rpx"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingCJZ"
              min="1"
              theme="round"
              max="100"
              input-width="80rpx"
            />
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingCJZ"
          label="大雷达功率"
          input-align="right"
          placeholder="分钟"
          label-width="300rpx"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingCJZ"
              min="0"
              theme="round"
              max="50"
              input-width="80rpx"
            />
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingCJZ"
          label="大雷达NP"
          input-align="right"
          placeholder="分钟"
          label-width="300rpx"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingCJZ"
              min="0"
              theme="round"
              max="200"
              input-width="80rpx"
            />
          </template>
        </van-field>
        <view class="context_base info">窘井水位计设置</view>
        <van-field
          v-model="yczList.reportingXQF"
          label="井盖高程"
          input-align="right"
          placeholder="m"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingXQF"
              min="-9999.99"
              theme="round"
              max="9999.99"
              :decimal-length="2"
              input-width="80rpx"
            />
            <text class="stepper_text">m</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingXQF"
          label="井低高程"
          input-align="right"
          placeholder="m"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingXQF"
              min="-9999.99"
              theme="round"
              max="9999.99"
              :decimal-length="2"
              input-width="80rpx"
            />
            <text class="stepper_text">m</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingXQF"
          label="管低高程"
          input-align="right"
          placeholder="m"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingXQF"
              min="-9999.99"
              theme="round"
              max="9999.99"
              :decimal-length="2"
              input-width="80rpx"
            />
            <text class="stepper_text">m</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingXQF"
          label="盲补距离"
          input-align="right"
          placeholder="m"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingXQF"
              min="-99.99"
              theme="round"
              max="99.99"
              :decimal-length="2"
              input-width="80rpx"
            />
            <text class="stepper_text">m</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingXQF"
          label="修正值"
          input-align="right"
          placeholder="m"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingXQF"
              min="-99.99"
              theme="round"
              max="99.99"
              :decimal-length="2"
              input-width="80rpx"
            />
            <text class="stepper_text">m</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.TelNumber"
          name="用户名/站码"
          label="用户名/站码"
          placeholder="用户名/站码"
        />
        <van-field
          v-model="yczList.password"
          name="密码"
          label="密码"
          placeholder="密码"
        />
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
    padding: 10rpx 40rpx;
    font-size: 25rpx;
    font-weight: bold;
    background: linear-gradient(to right, #8dbaf6, #f1f6ff);
  }
  .info {
    background: #f1f6ff;
    padding: 10rpx 35rpx;
  }
  .stepper_text {
    color: #a8a8a8;
    display: inline-block;
    margin-right: 10rpx;
  }
}
</style>
