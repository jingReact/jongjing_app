import {
  reactive
} from 'vue'
export const AllData = reactive({
  FloodSeasonModeList:[
    { text: "汛期", value: "1" },
    { text: "非汛期", value: "0" },
  ],
  AdditionalMmodeList:[
    { text: "手动模式", value: "0" },
    { text: "阙值加报模式", value: "1" },
  ],
  YzcSiteTypeList:[
    { text: "降水", value: 0 },
    { text: "河道", value: 1 },
    { text: "水库（湖泊）", value: 2 },
    { text: "闸坝", value: 3 },
    { text: "泵站", value: 4 },
    { text: "潮汐", value: 5 },
    { text: "墒情", value: 6 },
    { text: "地下水", value: 7 },
    { text: "水质", value: 8 },
    { text: "取水口", value: 9 },
    { text: "排水口", value: 10 },
    { text: "窘井", value: 11 },
    { text: "官网", value: 12 },
    { text: "内涝", value: 13 },
    { text: "河道（三防", value: 14 },
    { text: "险情（三防）", value: 15 },
  ],
  SiteTypeList:[
    { text: "WGX20-A-1激光水位计", value: "0" },
    { text: "XF-WQX80-气泡位计", value: "1" },
    { text: "XF-WYZ-1压力水位计", value: "2" },
    { text: "420mA压力水位计", value: 
    
    "3" },
    { text: "420mA雷达水位计", value: "4" },
    { text: "YLN-YQS气泡位计", value: "5" },
    { text: "WT-WTZ-1雷达水位计", value: "6" },
    { text: "DYYX-WW超声波水位计", value: "7" },
    { text: "WFX_40浮子水位计", value: "8" },
    { text: "MFM4700压力水位计", value: "9" },
    { text: "WDC电子水尺", value: "10" },
    { text: "KYB19压力水位计", value: "11" },
    { text: "RD-300s雷达水位计", value: "12" },
    { text: "NF-WGX-5小雷达水位计", value: "13" },
    { text: "NF-WGX-6大雷达水位计", value: "14" },
    { text: "VWP_0.35硅压水位计", value: "15" },
    { text: "TC-FMCR15F雷达水位计", value: "16" },
  ],
  DataKey: 0,
  Data16: `6E7AA8A5303132333435363738396162636465666700D5A2C7B000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00`,
  //字节数组数据
  DataZijie: [],
  Data_form: [{
      name: "ID",
      nameZn: "ID",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "TelName",
      nameZn: "遥测站名字",
      type: "char",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "ThisPhone",
      nameZn: "本机SIM卡电话号码",
      type: "char",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "ThisSMSNumber",
      nameZn: "本机SIM卡短信中心号码",
      type: "char",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "ServerIP",
      nameZn: "服务器地址",
      type: "char",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "ServerPort",
      nameZn: "服务器端口",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },

    {
      name: "TelNumber",
      nameZn: "遥测站编码",
      type: "u",
      num: 40,
      value: "",
      analysis: true,
    },
    {
      name: "AlarmTime",
      nameZn: "加报报间隔",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "TeleType",
      nameZn: "遥测站类型",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "CommMessageProtocolIndex",
      nameZn: "中心站",
      type: "u",
      num: 24,
      value: "",
      analysis: true,
    },
    {
      name: "StandbyServerPort",
      nameZn: "备用服务器端口",
      type: "u",
      num: 192,
      value: "",
      analysis: true,
    },
    {
      name: "ServerConfig",
      nameZn: "服务器相关配置",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "InsideDTU_Type",
      nameZn: "内部DTU类型定义",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "HourCycle",
      nameZn: "小时报周期",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "HourCycle",
      nameZn: "小时报周期",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "WaterLevelHight",
      nameZn: "水位计探头安装高度",
      type: "u",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "WaterLevelHAlarm",
      nameZn: "低报警水位",
      type: "u",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "WaterLevelLAlarm",
      nameZn: "水位计低报警水位",
      type: "u",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "WaterLevelAlarmH",
      nameZn: "水位计报警水位以上报警水位",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "WaterLevelAlarmL",
      nameZn: "水位计报警水位以下报警水位",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "WaterBaseLevel",
      nameZn: "水位基准面",
      type: "s",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "WaterCorrectionLevel",
      nameZn: "水位修正值",
      type: "s",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "WaterCorrParame",
      nameZn: "水位计线性修正值",
      type: "u",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "WaterCorrParame",
      nameZn: "水位计线性修正值",
      type: "u",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "ManualSetRand",
      nameZn: "人工置数浮动值",
      type: "u",
      num: 80,
      value: "",
      analysis: true,
    },
    {
      name: "TimeCycle",
      nameZn: "定时报发送周期",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "res32",
      nameZn: "",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "LZX1_K",
      nameZn: "水龟校准系数",
      type: "u",
      num: 96,
      value: "",
      analysis: true,
    },
    {
      name: "LZX1_X",
      nameZn: "水龟河道材质选择",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "TimeCollCycle",
      nameZn: "定时报采集周期",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "I4_Data",
      nameZn: "4mA对应采集值",
      type: "u",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "I20_Data",
      nameZn: "20mA对应采集值",
      type: "u",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "Camera_Hours",
      nameZn: "摄像头整点采集设置",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "ServerOtherConfig",
      nameZn: "BIT0-BIT4补发数据选项",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "OtherConfig",
      nameZn: "保留其它配置相关",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "LongitudeCompe",
      nameZn: "经度补偿",
      type: "int",
      num: 4,
      value: "",
      analysis: true,
    },
    {
      name: "LatitudinalCompe",
      nameZn: "纬度补偿",
      type: "int",
      num: 4,
      value: "",
      analysis: true,
    },
    {
      name: "EDHight",
      nameZn: "蒸发皿传感器安装高度单位",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "EDRange",
      nameZn: "蒸发皿传感器量程",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "EDMinAddWater",
      nameZn: "蒸发皿最小加水量",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "SSMHight",
      nameZn: "土壤沉降传感器安装高度单位",
      type: "u",
      num: 256,
      value: "",
      analysis: true,
    },
    {
      name: "SSMRange",
      nameZn: "土壤沉降传感器量程",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "SSMRange",
      nameZn: "土壤沉降传感器量程",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "SlaveParameter",
      nameZn: "从机参数",
      type: "u",
      num: 144,
      value: "",
      analysis: true,
    },
    {
      name: "WQCorrParame",
      nameZn: "水质修正系数",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },

    {
      name: "WLA",
      nameZn: "补盲距离",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "EXTDTU_UpFREQ",
      nameZn: "上行频率",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "EXTDTU_DownFREQ",
      nameZn: "下行频率",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "StartYear",
      nameZn: "数据起始年",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "Startmonth",
      nameZn: "数据起始月",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "StartDate",
      nameZn: "数据起始日",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "RS485_CH1_WarmTime",
      nameZn: "RS485 通道1预热时间",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "RS485_CH3_WarmTime",
      nameZn: "RS485 通道3预热时间",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "RS485_CH2_WarmTime",
      nameZn: "RS485 通道2预热时间",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "REV_WARM_TIME",
      nameZn: "预留几个预热时间设置",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "WaterQuality_Cycle",
      nameZn: "常规水质传感器采集周期",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "Meather_Cycle",
      nameZn: "常规气象传感器采集周期",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "Camera_Cycle",
      nameZn: "工业相机采集周期",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "WQCorrParame",
      nameZn: "",
      type: "u",
      num: 80,
      value: "",
      analysis: true,
    },
    {
      name: "ManualSet",
      nameZn: "人工置数",
      type: "s",
      num: 80,
      value: "",
      analysis: true,
    },
    {
      name: "InsideDTU_Lora_KEY",
      nameZn: "内置DTUlora加密key",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "InsideDTU_Lora_ADD",
      nameZn: "内置DTUlora地址",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "ServerPassward",
      nameZn: "服务器密码",
      type: "u",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "I4_20_Offset",
      nameZn: "内置4-20mA采集偏移",
      type: "s",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "I4_20_Parame",
      nameZn: "内置4-20mA采集线性修正值",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "InsFlowHeight",
      nameZn: "流速仪安装高度",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "InsFlowCV",
      nameZn: "流量校正系数",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "FlowSlotSedim",
      nameZn: "流速槽淤积深度",
      type: "u",
      num: 96,
      value: "",
      analysis: true,
    },
    {
      name: "FlowSlotParameter",
      nameZn: "流速槽参数",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "FilterTimes_J",
      nameZn: "流速，水位，SS滤波次数",
      type: "u",
      num: 24,
      value: "",
      analysis: true,
    },
    {
      name: "FlowPipDir",
      nameZn: "管道方向 bit0:流量计1管道方向",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "FlowDirection",
      nameZn: "流量计安装方向",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "TURBHeight",
      nameZn: "浊度计安装高度",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "FilterRange",
      nameZn: "流速，水位，SS滤波波动阈值",
      type: "u",
      num: 28,
      value: "",
      analysis: true,
    },
    {
      name: "FilterTimes_S",
      nameZn: "流速，水位，SS滤波次数",
      type: "u",
      num: 24,
      value: "",
      analysis: true,
    },
    {
      name: "rev8",
      nameZn: "",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "FilterThreshold",
      nameZn: "流速，水位，SS滤波门限",
      type: "u",
      num: 48,
      value: "",
      analysis: true,
    },
    {
      name: "FlowDrect_WLValve",
      nameZn: "",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "FlowDrect_FLValve[",
      nameZn: "",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "FlowDrect_HoldCnt",
      nameZn: "",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "Reserve16",
      nameZn: "保留",
      type: "u",
      num: 48,
      value: "",
      analysis: true,
    },
    {
      name: "ServiceID",
      nameZn: "",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "WaterQuality_Enable",
      nameZn: "常规水质传感器开关",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "WLRevise",
      nameZn: "水位修正值 ",
      type: "s",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "Meather_Enable",
      nameZn: "常规气象传感器开关",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "WaterLevel_Addr",
      nameZn: "水位计地址",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "SSM_Addr",
      nameZn: "土壤沉降仪地址",
      type: "u",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "ED_Addr",
      nameZn: "蒸发皿传感器地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },

    {
      name: "NH4N_Addr",
      nameZn: "氨氮地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "HNO3_Addr",
      nameZn: "硝酸盐地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "CHLA_Addr",
      nameZn: "叶绿素a地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "ALGAE_Addr",
      nameZn: "蓝绿藻地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "REDOX_Addr",
      nameZn: "氧化还原电位",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: " COD_Addr",
      nameZn: "COD通信地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "res9",
      nameZn: "",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "Pressure_Addr",
      nameZn: "气压传感器地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "Wind_Add",
      nameZn: "风速风向传感器地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "AirTempHump_Addr",
      nameZn: "空气温湿度传感器地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "DO_Addr",
      nameZn: "DO",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "GateLevel_Addr",
      nameZn: "闸位计地址",
      type: "u",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "COND_Addr",
      nameZn: "COND",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "Radiation_Addr",
      nameZn: "辐射传感器",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "PM25_Addr",
      nameZn: "PM2.5通信地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "SoilMois_Addr",
      nameZn: "墒情传感器地址",
      type: "u",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "WaterFlow_Addr",
      nameZn: "流量计地址",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "Tra_Addr",
      nameZn: "透明度地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "PH_Add",
      nameZn: "PH通信地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "WaterTemp_Addr",
      nameZn: "水温通信地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "Camera_Addr",
      nameZn: "摄像头地址",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "res8",
      nameZn: "",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "BOD_Add",
      nameZn: "BOD地址",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "OIW_Addr",
      nameZn: "水中油",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "CL_Addr",
      nameZn: "余氯地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "WQCorrParameSelect",
      nameZn: "水质类型修正参数选择",
      type: "u",
      num: 40,
      value: "",
      analysis: true,
    },
    {
      name: " RS485_CH1_Retry",
      nameZn: "RS485通道1采集数据无效重试次数",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "RS485_CH3_Retry",
      nameZn: "RS485通道3采集数据无效重试次数",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "RS485_CH2_Retry",
      nameZn: "其他传感器数据无效重试次数",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "WaterLevel_Enable",
      nameZn: "水位计开关状态",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "oilMois_Enable",
      nameZn: "墒情开关状态",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "WaterFlow_Enable;",
      nameZn: "流量开关状态",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: " res8_5",
      nameZn: "",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "Camera_Enable",
      nameZn: "工业相机开关",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "CumlFlow_Enable;",
      nameZn: "累计流量开关",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "GateLevel_Enable;",
      nameZn: "闸位计开关",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "SendFlag",
      nameZn: "发送标志BIT0 0汛期需要时间加报",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "SSM_Enable",
      nameZn: "土壤沉降仪开关",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "TURB_Add",
      nameZn: "悬浮物通信地址",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "SQ_Addr",
      nameZn: "泥沙通信地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "TN_Addr",
      nameZn: "总氮通信地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "TP_Addr",
      nameZn: "总磷通信地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "REV_ENABLE",
      nameZn: "预留几个开关设置",
      type: "u",
      num: 72,
      value: "",
      analysis: true,
    },
    {
      name: "RainAlarm",
      nameZn: "雨量加报阈值",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "RainTimeReport_Enable",
      nameZn: "时段雨量使能",
      type: "bool",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "RainRes",
      nameZn: "雨量计分辨率",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "CentralAddr",
      nameZn: "中心站地址编码",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "VoltageAlarm",
      nameZn: "电池低电压报警",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "VoltageProte",
      nameZn: "电池低电压保护,将缩短发送周期,保护电池",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },


    {
      name: "ConfigStr0",
      nameZn: "可配置字符串，mqtt用于token或者用户名（定制），212用于站码",
      type: "char",
      num: 22,
      value: "",
      analysis: true,
    },
    {
      name: "ConfigStr1",
      nameZn: "可配置字符串，mqtt用于密码",
      type: "char",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "ManualSetSelect",
      nameZn: "人工置数参数选择",
      type: "u",
      num: 40,
      value: "",
      analysis: true,
    },
    {
      name: " res8_4",
      nameZn: "",
      type: "u",
      num: 48,
      value: "",
      analysis: true,
    },
    {
      name: "HeartbeatTime",
      nameZn: "心跳包,链路维持报",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "es8_6",
      nameZn: "",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: " Camera_TimeSlot",
      nameZn: "相机发送时间段",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "res8_2",
      nameZn: "",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
    {
      name: "WaterLevelChangeAlarm",
      nameZn: "水位变化加报 河道1min监测加报",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "res899",
      nameZn: "",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "WorkingMode",
      nameZn: "工作模式设置,用于设置是否常在线模式",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "DoorAlarmTime",
      nameZn: "柜门报警等待延时",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: " res8_10",
      nameZn: "",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: " res8_9",
      nameZn: "",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "EnableTiming",
      nameZn: "是否自动校时",
      type: "bool",
      num: 1,
      value: "",
      analysis: true,
    },
    {
      name: " Camera_PicAck",
      nameZn: "图片报文响应设置",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "PicPackSendDelay",
      nameZn: "图片报文包发送延时",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: " res8_0",
      nameZn: "",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "VpnPoint",
      nameZn: "VPN接入点",
      type: "char",
      num: 34,
      value: "",
      analysis: true,
    },
    {
      name: "VpnName",
      nameZn: "VPN用户名",
      type: "u",
      num: 34,
      value: "",
      analysis: true,
    },
    {
      name: "VpnPassword",
      nameZn: "VPN密码",
      type: "u",
      num: 34,
      value: "",
      analysis: true,
    },
    {
      name: "VpnEnable",
      nameZn: "VPN使能，服务器1-3",
      type: "bool",
      num: 1,
      value: "",
      analysis: true,
    },
    {
      name: "RemoteVpnEnable",
      nameZn: "远程服务器是否是能VPN，也就是后台服务器是否是能VPN，一般情况下为0",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "BODSelect",
      nameZn: "BOD型号选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "DomainEnable",
      nameZn: "bit0-bin3:中心站1-3,域名使能",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "Domain",
      nameZn: "服务器域名",
      type: "char",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "DitchType",
      nameZn: "流量计截面选择",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "FlowUnit",
      nameZn: "流量传输方式，0：流量m3/s；1：水量m3/h",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "FlowChanRes",
      nameZn: "非标准堰高度分辨率，总共256个点，1-100cm可设置",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "WaterLevelSensor",
      nameZn: "水位数据来源",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "WaterTempSensor",
      nameZn: "水温数据来源",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "FaultFilter",
      nameZn: "传感器故障滤波次数",
      type: "u",
      num: 24,
      value: "",
      analysis: true,
    },
    {
      name: "OIWSelect",
      nameZn: "水中油型号",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "CLSelect",
      nameZn: "",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "es8_3",
      nameZn: "",
      type: "u",
      num: 40,
      value: "",
      analysis: true,
    },
    {
      name: "WaterLevelDeviceSelect",
      nameZn: "水位计设备选择",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "WaterFlowDeviceSelect",
      nameZn: "流量计设备选择",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "CamerDeviceSelect",
      nameZn: "相机型号选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "DODeviceSelect",
      nameZn: "DO设备型号选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "CODDeviceSelect",
      nameZn: "COD设备型号选择-预留",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "CONDDeviceSelect",
      nameZn: "COND设备型号选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "PHDeviceSelect",
      nameZn: "PH设备型号选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "TempHumSelect",
      nameZn: "温湿度设备型号选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "WaterTempSelect",
      nameZn: "水温设备型号选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "GateLevelDeviceSelect",
      nameZn: "闸位计选择-8个闸位计只能使用一种类型的",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "PressureSelect",
      nameZn: "气压传感器选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "WindSelect",
      nameZn: "风速风向传感器选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "RadiationSelect",
      nameZn: "辐射传感器选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "res8_7",
      nameZn: "",
      type: "u",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "SoilMoistureSelect",
      nameZn: "土壤墒情传感器选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "REDOXSelect",
      nameZn: "氧化还原电位传感器选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "NH4NSelect",
      nameZn: "氨氮传感器选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "HNO3Select",
      nameZn: "硝酸盐传感器选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "CHLASelect",
      nameZn: "叶绿素a传感器选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "ALGAESelect",
      nameZn: "蓝绿藻传感器选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "ServerPassward",
      nameZn: "增加蒸发皿配置",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "EDSelect",
      nameZn: "蒸发皿传感器选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "SSMSelect",
      nameZn: "土壤沉降传感器选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "TURBDeviceSelect",
      nameZn: "SS设备型号选择",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "SQDeviceSelect",
      nameZn: "泥沙设备型号选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "PM25DeviceSelect",
      nameZn: "PM2.5设备型号选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "TNSelect",
      nameZn: "总氮设备型号选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "TPSelect",
      nameZn: "总磷设备型号选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "TraSelect",
      nameZn: "透明度设备型号选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "Reserve8_2",
      nameZn: "传感器选择预留",
      type: "u",
      num: 24,
      value: "",
      analysis: true,
    },
    {
      name: "InstFlowAccuSelect",
      nameZn: "瞬时流量精度选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "ExtAlarmTime",
      nameZn: "外置通信模块通信",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },


    {
      name: "DataSave_Cycel",
      nameZn: "数据存储周期",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "WaterFlowLevelSelect",
      nameZn: "流量计水位数据来源",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "EXTDTU_Select",
      nameZn: "外置DTU厂家选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "NBIOT_Enable",
      nameZn: "NBIOT开关，低4位为中心站1-3，高4位为后台设置(主卡)，设置为0xA为开启，否则为关闭",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "NBIOT_Mode",
      nameZn: "NBIOT模式选择",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "EDWaterLevelSelect",
      nameZn: "蒸发皿水位来源",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "TURBTestWaterLevelSelect",
      nameZn: "SS的水位来源选择",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "SlaveAddr",
      nameZn: "从机模式地址",
      type: "u",
      num: 24,
      value: "",
      analysis: true,
    },
    {
      name: "SlaveEnable",
      nameZn: "从机模式开关",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "SlaveDeviceSelect",
      nameZn: "从机驱动选择",
      type: "u",
      num: 24,
      value: "",
      analysis: true,
    },
    {
      name: "SoilTempSelect",
      nameZn: "土壤温度数据来源",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "GTPSelect",
      nameZn: "地温数据来源",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "EXTDTU_LoRa_JOINEUI",
      nameZn: "设置JoinEUI",
      type: "u",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: " InsideDTU_Lora_NID",
      nameZn: "内置DTUlora网络id",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: " WGX5_Gain",
      nameZn: "小雷达增益",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "WGX6_NP",
      nameZn: "大雷达忽略的距离",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "WGX6_PO",
      nameZn: "大雷达发射功率0",
      type: "u",
      num: 16,
      value: "",
      analysis: true,
    },
    {
      name: "InsideDTU_Lora_NUM",
      nameZn: "网关模组数量，用于判断网关地址",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "ThresholdCollCycle",
      nameZn: "阈值采集周期需要和定时报采集周期比较选小的",
      type: "u",
      num: 24,
      value: "",
      analysis: true,
    },
    {
      name: "ThresholdAlarmCycle",
      nameZn: "阈值加报周期",
      type: "u",
      num: 24,
      value: "",
      analysis: true,
    },
    {
      name: "AlarmCollCycle",
      nameZn: "定时报采集周期汛期",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "AlarmCycle",
      nameZn: "加报发送周期",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "es8_1",
      nameZn: "",
      type: "u",
      num: 8,
      value: "",
      analysis: true,
    },
    {
      name: "WLBase",
      nameZn: "井盖高程 ",
      type: "s",
      num: 64,
      value: "",
      analysis: true,
    },
    {
      name: "Reserve8_3",
      nameZn: "",
      type: "u",
      num: 32,
      value: "",
      analysis: true,
    },
  ]
})