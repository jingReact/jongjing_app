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
            :columns="AllData.SiteTypeList"
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
            :columns="AllData.SiteTypeList"
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
import { ref, reactive ,onMounted} from "vue";
import { AllData } from "@/utils/Hexadecimal";
import { UseGetDataForZiJie, stringToHex } from "@/utils/analysis";
onMounted(() => {
  //16进制转换
  AllData.Data_form.forEach((element, index) => {
    let data = UseGetDataForZiJie(element, AllData);
    if (data) {
      HexadecimalLists.array = data;
      data.forEach((i) => {
        Object.assign(yczList, { [i.name]: i.value });
      });
    }
  });
  console.log(HexadecimalLists.array, "HexadecimalList");
});
const HexadecimalLists = reactive({ array: [] });
const showSiteType = ref(false);
const showSeasonMode = ref(false);
const yczList = reactive({});
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
  let array1 = "";
  console.log(yczList, "yczList");
  HexadecimalLists.array.forEach((i) => {
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
    display: inline-block;
    margin-left: 16rpx;
  }
}
</style>
