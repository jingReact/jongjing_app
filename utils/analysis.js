	//16进制转换数据
// 读取16进制数据
   /**判断16进制中有没有00出现,如果出现,只截取当前转译数据中第一个00之前的数据 */
    function dataFiltering(text) {
    console.log(text);
    const Str =
      text.indexOf("00") != -1 ? text.substring(0, text.indexOf("00")) : text;
        return Str;
  }
   /** 大小端转换 支持长字符串转 */
  function littleEndian(str) {
    if (str != "" && str != undefined) {
      var new_str = "";
      for (var x = str.length; x >= 0; x = x - 2) {
        new_str += str.charAt(x);
        new_str += str.charAt(x + 1);
      }
      return new_str;
    } else {
      return str;
    }
  }
   /**当类型为 s 时,把数据转换成有符号的整数 */
  function type_s_Data(i) {
    let two = parseInt(i, 16).toString(2);
    let bitNum = i.length * 4;
    if (two.length < bitNum) {
      while (two.length < bitNum) {
        two = "0" + two;
      }
    }
}
 // 十六进制转字符
 function hexToString(hex, encoding) {
    var trimedStr = hex.trim();
    var rawStr =
      trimedStr.substr(0, 2).toLowerCase() === "0x"
        ? trimedStr.substr(2)
        : trimedStr;
    var len = rawStr.length;
    if (len % 2 !== 0) {
      return "";
    }
    var curCharCode;
    var resultStr = [];
    for (var i = 0; i < len; i = i + 2) {
      curCharCode = parseInt(rawStr.substr(i, 2), 16);
      resultStr.push(curCharCode);
    }
    // encoding为空时默认为utf-8
    var bytesView = new Uint8Array(resultStr);
    var str = new TextDecoder(encoding).decode(bytesView);
    return str;
  }

  
export function UseGetDataForZiJie (el,AllData){
    // 获取此组数据的数据长度
    let solt;
    if (el.type == "u") {
      // 获取当前字段需要截取的16进制数据长度
      solt = el.num / 4;
      // 获取截取的数据
      let data1 = AllData.Data16.slice(
        AllData.DataKey,
        solt + AllData.DataKey
      );
      // 记录当前截取到的数据索引
      AllData.DataKey += solt;
      // 如果当前数据是不用解析的,就直接跳过
      if (el.analysis == false) {
        el.value = data1;
        return;
      } else {
        // 此类数据直接转译
        let Data_FanZhuan = littleEndian(data1);
        el.value = parseInt(Data_FanZhuan, 16);
      }
    } 
    else if (el.type == "s") {
      // 获取当前字段需要截取的16进制数据长度
      solt = el.num / 4;
      // 获取截取的数据
      let data1 = AllData.Data16.slice(
        AllData.DataKey,
        solt + AllData.DataKey
      );
      // 记录当前截取到的数据索引
      AllData.DataKey += solt;
      // 如果当前数据是不用解析的,就直接跳过
      if (el.analysis == false) {
        el.value = data1;
        return;
      } else {
        // 此类数据转译
        let Data_FanZhuan = littleEndian(data1);
        console.log("type_s_Data", type_s_Data(Data_FanZhuan));
        el.value = type_s_Data(Data_FanZhuan);
      }
    } 
    else {
      // 获取当前字段需要截取的16进制数据长度
      solt = el.num * 2;
      // 获取截取的数据
      let data1 = AllData.Data16.slice(
        AllData.DataKey,
        solt + AllData.DataKey
      );
      // 记录当前截取到的数据索引
      AllData.DataKey += solt;
      // 如果当前数据是不用解析的,就直接跳过
      if (el.analysis == false) {
        el.value = data1;
        return;
      } else {
        // 当数据第一位就出现了00,说明当前数据是不用解析的,直接赋值``
        if (data1.indexOf("00") == 0) {
          el.value = "";
        } else {
          // 调用数据处理方法
          data1 = dataFiltering(data1);
          // 进行gbk的数据转换
          let Data_String = hexToString(data1, "gbk");
          console.log("Data_String" + el.nameZn, Data_String);
          el.value = Data_String;
        }
      }
    }
    // console.log(AllData.Data_form,7777777);
    return AllData.Data_form;
  };

