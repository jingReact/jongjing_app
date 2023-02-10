<template>
  <view class="content">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <view class="context_base">基本设置</view>
        <van-field
          v-model="yczList.SiteType"
          is-link
          readonly
          label="站点类型"
          placeholder="选择站点类型"
          @click="showSiteType = true"
        />
        <van-popup v-model:show="showSiteType" round position="bottom">
          <van-picker
            :columns="AllData.YzcSiteTypeList"
            @cancel="showSiteType = false"
            @confirm="onSiteType"
          />
        </van-popup>
        <van-field
          v-model="yczList.TelNumber"
          name="站点编号"
          :rules="[{ validator: validatorSiteNo }]"
          label="站点编号"
          placeholder="站点编号(站点编号必须为10位数字)"
        />

        <van-field
          v-model="yczList.FloodSeasonMode"
          is-link
          readonly
          label="汛期模式"
          placeholder="选择站汛期模式"
          @click="showSeasonMode = true"
        />
        <van-popup v-model:show="showSeasonMode" round position="bottom">
          <van-picker
            :columns="AllData.FloodSeasonModeList"
            @cancel="showSeasonMode = false"
            @confirm="TwoSiteType"
          />
        </van-popup>

        <van-field
          v-model="yczList.AdditionalMmode"
          is-link
          readonly
          label="加报模式"
          placeholder="选择站加报模式"
          @click="showAdditional = true"
        />
        <van-popup v-model:show="showAdditional" round position="bottom">
          <van-picker
            :columns="AllData.AdditionalMmodeList"
            @cancel="showAdditional = false"
            @confirm="threeSiteType"
          />
        </van-popup>
        <van-field
          v-model="yczList.reportingPeriod"
          label="定时报周期"
          input-align="right"
          placeholder="分钟"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingPeriod"
              default-value="0"
              min="0"
              max="1440"
              theme="round"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingCJB"
          label="定时报采集周期"
          input-align="right"
          placeholder="分钟"
          label-width="300rpx"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingCJB"
              default-value="0"
              min="0"
              max="1440"
              theme="round"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.reportingXQF"
          label="汛期发送周期"
          input-align="right"
          placeholder="分钟"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingXQF"
              default-value="0"
              min="0"
              max="60"
              theme="round"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>

        <van-field
          v-model="yczList.reportingCJZ"
          label="汛期采集周期"
          input-align="right"
          placeholder="分钟"
        >
          <template #input>
            <van-stepper
              v-model="yczList.reportingCJZ"
              default-value="0"
              min="0"
              theme="round"
              max="60"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.SiteName"
          rows="3"
          autosize
          label="站点名称"
          type="textarea"
          :rules="[{ validator: validatorSiteName }]"
          placeholder="请输入站点名称(最多62字节，31个汉字或62字母)"
        />
        <view class="context_base info">数据设置</view>
        <van-field name="switch" label="信号强度上报" input-align="right">
          <template #input>
            <van-switch v-model="yczList.checked" size="20" />
          </template>
        </van-field>
        <van-field name="switch" label="清楚历史数据" input-align="right">
          <template #input>
            <van-switch
              active-color="#ee0a24"
              v-model="yczList.ClearHistorical"
              size="20"
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
import { ref, reactive, onMounted } from "vue";
import { strLength, numberLength } from "@/utils/validator";
import { AllData } from "@/utils/Hexadecimal";
import { UseGetDataForZiJie } from "@/utils/analysis";
onMounted(() => {
  //16进制转换
  AllData.Data_form.forEach((element, index) => {
    let HexadecimalList = UseGetDataForZiJie(element, AllData);
    index + 1 >= HexadecimalList.length
      ? console.log(HexadecimalList, 3333)
      : "";
  });
});
//站点 编号验证
//#region
const validatorSiteName = (val) => {
  let unm = strLength(val);
  if (unm > 62) {
    return `您输入的不合法，请重新输入`;
  }
};
const validatorSiteNo = (val) => {
  let unm = numberLength(val);
  console.log(unm);
  if (!unm) {
    return `站点编号必须为10位数字`;
  }
};
//#endregion
//下拉数据方法 咳根据下拉数据进行优化
//#region
const yczList = reactive({ checked: true, ClearHistorical: false });
const showSiteType = ref(false);
const showSeasonMode = ref(false);
const showAdditional = ref(false);
function onSiteType({ selectedOptions }) {
  showSiteType.value = false;
  yczList.SiteType = selectedOptions[0].text;
  yczList.YzcSiteTypeList = selectedOptions[0];
}
function TwoSiteType({ selectedOptions }) {
  showSeasonMode.value = false;
  yczList.FloodSeasonMode = selectedOptions[0].text;
  yczList.FloodSeasonModeList = selectedOptions[0];
}
function threeSiteType({ selectedOptions }) {
  showAdditional.value = false;
  yczList.AdditionalMmode = selectedOptions[0].text;
  yczList.AdditionalMmodeList = selectedOptions[0];
}
//#endregion
//提交
function onSubmit() {
  console.warn(yczList);
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
