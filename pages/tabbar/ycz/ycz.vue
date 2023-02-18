<template>
  <view class="content">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <view class="context_base">基本设置</view>
        <van-field
          v-model="yczList.TeleType"
          label="站点类型"
          placeholder="选择站点类型"
          @click="showTeleType = true"
        />
        <van-popup v-model:show="showTeleType" round position="bottom">
          <van-picker
            :columns="AllData.YzcTeleTypeList"
            @cancel="showTeleType = false"
            @confirm="onTeleType"
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
          v-model="yczList.sendflag1"
          label="汛期模式"
          placeholder="选择站汛期模式"
          @click="showSeasonMode = true"
        />
        <van-popup v-model:show="showSeasonMode" round position="bottom">
          <van-picker
            :columns="AllData.FloodSeasonModeList"
            @cancel="showSeasonMode = false"
            @confirm="TwoTeleType"
          />
        </van-popup>

        <van-field
          v-model="yczList.sendflag2"
          is-link
          label="加报模式"
          placeholder="选择站加报模式"
          @click="showAdditional = true"
        />
        <van-popup v-model:show="showAdditional" round position="bottom">
          <van-picker
            :columns="AllData.AdditionalMmodeList"
            @cancel="showAdditional = false"
            @confirm="threeTeleType"
          />
        </van-popup>
        <van-field
          v-model="yczList.TimeCycle"
          label="定时报周期"
          input-align="right"
          placeholder="分钟"
        >
          <template #input>
            <van-stepper
              v-model="yczList.rTimeCycle"
              default-value="0"
              min="0"
              max="1440"
              theme="round"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.TimeCollCycle"
          label="定时报采集周期"
          input-align="right"
          placeholder="分钟"
          label-width="200rpx"
        >
          <template #input>
            <van-stepper
              v-model="yczList.TimeCollCycle"
              default-value="0"
              min="0"
              max="1440"
              theme="round"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.AlarmCycle"
          label="汛期发送周期"
          input-align="right"
          placeholder="分钟"
        >
          <template #input>
            <van-stepper
              v-model="yczList.AlarmCycle"
              default-value="0"
              min="0"
              max="60"
              theme="round"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>

        <van-field
          v-model="yczList.AlarmCollCycle"
          label="汛期采集周期"
          input-align="right"
          placeholder="分钟"
        >
          <template #input>
            <van-stepper
              v-model="yczList.AlarmCollCycle"
              default-value="0"
              min="0"
              theme="round"
              max="60"
            />
            <text class="stepper_text">分钟</text>
          </template>
        </van-field>
        <van-field
          v-model="yczList.TelName"
          rows="3"
          autosize
          label="站点名称"
          type="textarea"
          :rules="[{ validator: validatorTelName}]"
          placeholder="请输入站点名称(最多62字节，31个汉字或62字母)"
        />
        <view class="context_base info">数据设置</view>
        <van-field name="switch" label="信号强度上报" input-align="right">
          <template #input>
            <van-switch v-model="yczList.ClearHistorical" size="20" />
          </template>
        </van-field>
        <van-field name="switch" label="清除历史数据" input-align="right">
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

// import  {AllData}  from "@/utils/Hexadecimal";
import { ref, reactive, onMounted ,onBeforeUnmount} from "vue";
import { strLength, numberLength } from "@/utils/validator";
import { UseGetDataForZiJie, stringToHex ,hex2bin} from "@/utils/analysis";
import { onLoad } from "@dcloudio/uni-app";
//站点 编号验证
//#region

const validatorTelName  = (val) => {
  let unm = strLength(val);
  if (unm > 62) {
    return `您输入的不合法，请重新输入`;
  }
};
const validatorSiteNo = (val) => {
  let unm = numberLength(val);
  if (!unm) {
    return `站点编号必须为10位数字`;
  }
};
//#endregion
//下拉数据方法 咳根据下拉数据进行优化
//#region
let senFlgList=ref()
let  yczList = reactive({ checked: true, ClearHistorical: false });
let  HexadecimalLists = reactive({ });
let  showTeleType = ref(false);
let showSeasonMode = ref(false);
let showAdditional = ref(false);
function onTeleType({ selectedOptions }) {
  showTeleType.value = false;
  yczList.TeleType = selectedOptions[0].text;
}
function TwoTeleType({ selectedOptions }) {
  showSeasonMode.value = false;
  yczList.sendflag1 = selectedOptions[0].text;
}
function threeTeleType({ selectedOptions }) {
  showAdditional.value = false;
  yczList.sendflag2 = selectedOptions[0].text;
}
//#endregion
//提交
function onSubmit() {
  let array1 = "";
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
onLoad((option) => {
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
  //16进制转化为2进制 进行处理显示
let senFlgList=hex2bin(yczList.SendFlag)
let array1=senFlgList.substring(senFlgList.length-1,senFlgList.length)
let array2=senFlgList.substring(senFlgList.length-2,senFlgList.length-1)
  let sed1=array.FloodSeasonModeList.filter((i)=>{ 
   return i.value==array1
  })
  let sed2=array.AdditionalMmodeList.filter((i)=>{ 
   return i.value==array2
  })
  yczList.sendflag1=sed1[0].text
  yczList.sendflag2=sed2[0].text
});
// console.log(yczList,'TeleTypeTeleType');
console.dir(yczList,'TeleTypeTeleType');

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
