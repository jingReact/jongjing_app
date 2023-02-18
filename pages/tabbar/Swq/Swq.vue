<template>
  <view class="content">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
      <view class="context_base">传感器采集间隔时间设置</view>
        <van-field
          v-model="yczList.WaterQuality_Cycle"
          label="采集周期"
          input-align="right"
          placeholder="分钟"
          label-width="110rpx"
        >
          <template #input>
            <text class="stepper_text">分钟(0-1440)</text>
            <van-stepper
              v-model="yczList.WaterQuality_Cycle"
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
          v-model="yczList.RS485_CH3_WarmTime"
          label="预热时间"
          input-align="right"
          placeholder="分钟"
          label-width="110rpx"
        >
          <template #input>
            <text class="stepper_text">秒钟(0-255)</text>
            <van-stepper
              v-model="yczList.RS485_CH3_WarmTime"
              default-value="0"
              min="0"
              max="255"
              theme="round"
            />
          </template>
        </van-field>
        <van-field
          v-model="yczList.RS485_CH3_Retry"
          label="失败重试"
          input-align="right"
          placeholder="失败重试次数"
        >
          <template #input>
            <text class="stepper_text">(重试次数0-255)</text>
            <van-stepper
              v-model="yczList.RS485_CH3_Retry"
              default-value="0"
              min="0"
              theme="round"
              max="255"
            />
          </template>
        </van-field>
        <van-field
          v-model="yczList.FaultFilter"
          label="故障滤波"
          input-align="right"
          placeholder="故障滤波"
        >
          <template #input>
            <text class="stepper_text">(无效0-255)</text>
            <van-stepper
              v-model="yczList.FaultFilter"
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
            <van-switch v-model="yczList.WaterLevel_Addr1" size="20" />
          </template>
        </van-field>
        <van-field name="switch" label="水位计2" input-align="right">
          <template #input>
            <van-switch   v-model="yczList.WaterLevel_Addr2" size="20" />
          </template>
        </van-field>

        <view class="context_base info">传感器通信地址设置</view>
        <van-field
          v-model="yczList.WaterLevel_Enable1"
          label="水位计1"
          input-align="right"
          placeholder="水位计1"
        >
          <template #input>
            <van-stepper
              v-model="yczList.WaterLevel_Enable1"
              default-value="0"
              min="0"
              theme="round"
              max="255"
            />
          </template>
        </van-field>

        <van-field
          v-model="yczList.WaterLevel_Enable2"
          label="水位计2"
          input-align="right"
          placeholder="水位计2"
        >
          <template #input>
            <van-stepper
              v-model="yczList.WaterLevel_Enable2"
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
import { ref, reactive,onMounted ,toRaw} from "vue";
import { UseGetDataForZiJie, stringToHex} from "@/utils/analysis";
import { onLoad } from "@dcloudio/uni-app";
onLoad((option) => {
  //16进制转换
  let array=JSON.parse(option.AllData)
  array.Data_form.forEach((element, index) => {
    let data = UseGetDataForZiJie(element, array);
    if (data) {
      HexadecimalLists = data;
      data.forEach((i) => {
        Object.assign(yczList, { [i.name]: i.value });
      });
    }
  });
});
let HexadecimalLists = reactive({});
let  yczList = reactive({ checked: true,ClearHistorical:false });
function onSubmit() {
  let array1 = "";
  console.log(yczList, "yczList");
  HexadecimalLists.forEach((i) => {
    Object.keys(yczList).forEach((n) => {
      if (n === i.name) {
        array1 += stringToHex("" + yczList[n]);
      } else {
        array1 += i.value ? i.value : "";
      }
    });
    console.log(array1, "array1");
  });
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
