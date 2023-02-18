if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$6 = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        type: Boolean,
        default: false
      },
      isShadow: {
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
      style: vue.normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
    }, [
      vue.createCommentVNode(" \u5C01\u9762 "),
      vue.renderSlot(_ctx.$slots, "cover", {}, () => [
        $props.cover ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-card__cover"
        }, [
          vue.createElementVNode("image", {
            class: "uni-card__cover-image",
            mode: "widthFix",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
            src: $props.cover
          }, null, 8, ["src"])
        ])) : vue.createCommentVNode("v-if", true)
      ], true),
      vue.renderSlot(_ctx.$slots, "title", {}, () => [
        $props.title || $props.extra ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-card__header"
        }, [
          vue.createCommentVNode(" \u5361\u7247\u6807\u9898 "),
          vue.createElementVNode("view", {
            class: "uni-card__header-box",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
          }, [
            $props.thumbnail ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-card__header-avatar"
            }, [
              vue.createElementVNode("image", {
                class: "uni-card__header-avatar-image",
                src: $props.thumbnail,
                mode: "aspectFit"
              }, null, 8, ["src"])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "uni-card__header-content" }, [
              vue.createElementVNode("text", { class: "uni-card__header-content-title uni-ellipsis" }, vue.toDisplayString($props.title), 1),
              $props.title && $props.subTitle ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "uni-card__header-content-subtitle uni-ellipsis"
              }, vue.toDisplayString($props.subTitle), 1)) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createElementVNode("view", {
            class: "uni-card__header-extra",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
          }, [
            vue.createElementVNode("text", { class: "uni-card__header-extra-text" }, vue.toDisplayString($props.extra), 1)
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ], true),
      vue.createCommentVNode(" \u5361\u7247\u5185\u5BB9 "),
      vue.createElementVNode("view", {
        class: "uni-card__content",
        style: vue.normalizeStyle({ padding: $props.padding }),
        onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4),
      vue.createElementVNode("view", {
        class: "uni-card__actions",
        onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
      }, [
        vue.renderSlot(_ctx.$slots, "actions", {}, void 0, true)
      ])
    ], 6);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render], ["__scopeId", "data-v-19622063"], ["__file", "D:/Documents/HBuilderProjects/jiongshui_app/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  var operate = {
    api: function() {
      let version = wx.getAccountInfoSync().miniProgram.envVersion;
      switch (version) {
        case "develop":
          return "http://localhost:1889/";
        case "trial":
          return "http://localhost:1889/";
        case "release":
          return "http://localhost:1889/";
        default:
          return "http://localhost:1889/";
      }
    }
  };
  class Request {
    http(param) {
      var url = param.url, method = param.method, header = {}, data = param.data || {};
      param.token || "";
      var hideLoading = param.hideLoading || false;
      var requestUrl = operate.api + url;
      if (method) {
        method = method.toUpperCase();
        if (method == "POST") {
          header = {
            "content-type": "application/x-www-form-urlencoded"
          };
        } else {
          header = {
            "content-type": "application/json"
          };
        }
      }
      if (!hideLoading) {
        uni.showLoading({
          title: "\u52A0\u8F7D\u4E2D..."
        });
      }
      return new Promise((resolve, reject) => {
        uni.request({
          url: requestUrl,
          data,
          method,
          header,
          success: (res) => {
            if (res.statusCode && res.statusCode != 200) {
              uni.showToast({
                title: "api\u9519\u8BEF" + res.errMsg,
                icon: "none"
              });
              return;
            }
            resolve(res.data);
          },
          fail: (e) => {
            uni.showToast({
              title: "" + e.data.msg,
              icon: "none"
            });
            resolve(e.data);
          },
          complete() {
            if (!hideLoading) {
              uni.hideLoading();
            }
            resolve();
            return;
          }
        });
      });
    }
  }
  new Request().http;
  const _sfc_main$5 = {
    __name: "index",
    setup(__props) {
      const icons = vue.reactive([
        {
          type: "../../../static/img/yaocezhan_icon.png",
          text: "\u9065\u6D4B\u7AD9\u8BBE\u7F6E",
          path: "../ycz/ycz"
        },
        {
          type: "../../../static/img/yaocechuanganqi_icon.png",
          text: "\u4F20\u611F\u5668\u578B\u53F7\u9009\u62E9",
          path: "../Cgq/Cgq"
        },
        {
          type: "../../../static/img/shuiwenchuanganqi_icon.png",
          text: "\u6C34\u6587\u4F20\u611F\u5668\u901A\u6027\u8BBE\u7F6E",
          path: "../Swq/Swq"
        },
        {
          type: "../../../static/img/shuiwenji_icon.png",
          text: "\u6C34\u4F4D\u8BA1\u8BBE\u7F6E",
          path: "../Swj/Swj"
        }
      ]);
      function tableClick(i) {
        uni.navigateTo({
          url: i.path
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(icons, (i) => {
            return vue.openBlock(), vue.createBlock(_component_uni_card, {
              key: i.type,
              class: "card"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "content_view" }, [
                  vue.createElementVNode("view", { class: "card_view" }, [
                    vue.createElementVNode("img", {
                      src: i.type,
                      alt: ""
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", null, vue.toDisplayString(i.text), 1)
                  ]),
                  vue.createElementVNode("view", {
                    onClick: ($event) => tableClick(i)
                  }, [
                    vue.createElementVNode("img", {
                      class: "right_img",
                      src: "/static/img/right.png",
                      alt: ""
                    })
                  ], 8, ["onClick"])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]);
      };
    }
  };
  var PagesTabbarHomeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "D:/Documents/HBuilderProjects/jiongshui_app/pages/tabbar/home/index.vue"]]);
  function strLength(val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
      if (val[i].match(/[^\x00-\xff]/ig) != null)
        len += 2;
      else
        len += 1;
    }
    return len;
  }
  function numberLength(val) {
    formatAppLog("log", "at utils/validator.js:14", val.length, 888);
    let a = typeof parseInt(val);
    if (a == "number") {
      if (val.length != 10) {
        return false;
      } else {
        return true;
      }
    } else
      return false;
  }
  const AllData = vue.reactive({
    FloodSeasonModeList: [
      { text: "\u6C5B\u671F", value: "1" },
      { text: "\u975E\u6C5B\u671F", value: "0" }
    ],
    AdditionalMmodeList: [
      { text: "\u624B\u52A8\u6A21\u5F0F", value: "0" },
      { text: "\u9619\u503C\u52A0\u62A5\u6A21\u5F0F", value: "1" }
    ],
    YzcSiteTypeList: [
      { text: "\u964D\u6C34", value: 0 },
      { text: "\u6CB3\u9053", value: 1 },
      { text: "\u6C34\u5E93\uFF08\u6E56\u6CCA\uFF09", value: 2 },
      { text: "\u95F8\u575D", value: 3 },
      { text: "\u6CF5\u7AD9", value: 4 },
      { text: "\u6F6E\u6C50", value: 5 },
      { text: "\u5892\u60C5", value: 6 },
      { text: "\u5730\u4E0B\u6C34", value: 7 },
      { text: "\u6C34\u8D28", value: 8 },
      { text: "\u53D6\u6C34\u53E3", value: 9 },
      { text: "\u6392\u6C34\u53E3", value: 10 },
      { text: "\u7A98\u4E95", value: 11 },
      { text: "\u5B98\u7F51", value: 12 },
      { text: "\u5185\u6D9D", value: 13 },
      { text: "\u6CB3\u9053\uFF08\u4E09\u9632", value: 14 },
      { text: "\u9669\u60C5\uFF08\u4E09\u9632\uFF09", value: 15 }
    ],
    SiteTypeList: [
      { text: "WGX20-A-1\u6FC0\u5149\u6C34\u4F4D\u8BA1", value: "0" },
      { text: "XF-WQX80-\u6C14\u6CE1\u4F4D\u8BA1", value: "1" },
      { text: "XF-WYZ-1\u538B\u529B\u6C34\u4F4D\u8BA1", value: "2" },
      { text: "420mA\u538B\u529B\u6C34\u4F4D\u8BA1", value: "3" },
      { text: "420mA\u96F7\u8FBE\u6C34\u4F4D\u8BA1", value: "4" },
      { text: "YLN-YQS\u6C14\u6CE1\u4F4D\u8BA1", value: "5" },
      { text: "WT-WTZ-1\u96F7\u8FBE\u6C34\u4F4D\u8BA1", value: "6" },
      { text: "DYYX-WW\u8D85\u58F0\u6CE2\u6C34\u4F4D\u8BA1", value: "7" },
      { text: "WFX_40\u6D6E\u5B50\u6C34\u4F4D\u8BA1", value: "8" },
      { text: "MFM4700\u538B\u529B\u6C34\u4F4D\u8BA1", value: "9" },
      { text: "WDC\u7535\u5B50\u6C34\u5C3A", value: "10" },
      { text: "KYB19\u538B\u529B\u6C34\u4F4D\u8BA1", value: "11" },
      { text: "RD-300s\u96F7\u8FBE\u6C34\u4F4D\u8BA1", value: "12" },
      { text: "NF-WGX-5\u5C0F\u96F7\u8FBE\u6C34\u4F4D\u8BA1", value: "13" },
      { text: "NF-WGX-6\u5927\u96F7\u8FBE\u6C34\u4F4D\u8BA1", value: "14" },
      { text: "VWP_0.35\u7845\u538B\u6C34\u4F4D\u8BA1", value: "15" },
      { text: "TC-FMCR15F\u96F7\u8FBE\u6C34\u4F4D\u8BA1", value: "16" }
    ],
    DataKey: 0,
    Data16: `true`,
    DataZijie: [],
    Data_form: [
      {
        name: "ID",
        nameZn: "ID",
        type: "u",
        num: 32,
        value: "",
        analysis: true
      },
      {
        name: "SiteType",
        nameZn: "SiteType",
        type: "u",
        num: 32,
        value: "",
        analysis: true
      },
      {
        name: "FloodSeasonMode",
        nameZn: "FloodSeasonMode",
        type: "u",
        num: 32,
        value: "",
        analysis: true
      },
      {
        name: "AdditionalMmode",
        nameZn: "AdditionalMmode",
        type: "u",
        num: 32,
        value: "",
        analysis: true
      },
      {
        name: "reportingPeriod",
        nameZn: "reportingPeriod",
        type: "u",
        num: 32,
        value: "",
        analysis: true
      },
      {
        name: "reportingCJB",
        nameZn: "reportingCJB",
        type: "u",
        num: 32,
        value: "",
        analysis: true
      },
      {
        name: "reportingXQF",
        nameZn: "reportingXQF",
        type: "u",
        num: 32,
        value: "",
        analysis: true
      },
      {
        name: "TelName",
        nameZn: "\u9065\u6D4B\u7AD9\u540D\u5B57",
        type: "char",
        num: 64,
        value: "",
        analysis: true
      },
      {
        name: "ThisPhone",
        nameZn: "\u672C\u673ASIM\u5361\u7535\u8BDD\u53F7\u7801",
        type: "char",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "ThisSMSNumber",
        nameZn: "\u672C\u673ASIM\u5361\u77ED\u4FE1\u4E2D\u5FC3\u53F7\u7801",
        type: "char",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "ServerIP",
        nameZn: "\u670D\u52A1\u5668\u5730\u5740",
        type: "char",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "ServerPort",
        nameZn: "\u670D\u52A1\u5668\u7AEF\u53E3",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "TelNumber",
        nameZn: "\u9065\u6D4B\u7AD9\u7F16\u7801",
        type: "u",
        num: 40,
        value: "",
        analysis: false
      },
      {
        name: "AlarmTime",
        nameZn: "\u52A0\u62A5\u62A5\u95F4\u9694",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "TeleType",
        nameZn: "\u9065\u6D4B\u7AD9\u7C7B\u578B",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "CommMessageProtocolIndex",
        nameZn: "\u4E2D\u5FC3\u7AD9",
        type: "u",
        num: 24,
        value: "",
        analysis: false
      },
      {
        name: "StandbyServerPort",
        nameZn: "\u5907\u7528\u670D\u52A1\u5668\u7AEF\u53E3",
        type: "u",
        num: 192,
        value: "",
        analysis: false
      },
      {
        name: "ServerConfig",
        nameZn: "\u670D\u52A1\u5668\u76F8\u5173\u914D\u7F6E",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "InsideDTU_Type",
        nameZn: "\u5185\u90E8DTU\u7C7B\u578B\u5B9A\u4E49",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "HourCycle",
        nameZn: "\u5C0F\u65F6\u62A5\u5468\u671F",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "HourCycle",
        nameZn: "\u5C0F\u65F6\u62A5\u5468\u671F",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "WaterLevelHight",
        nameZn: "\u6C34\u4F4D\u8BA1\u63A2\u5934\u5B89\u88C5\u9AD8\u5EA6",
        type: "u",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "WaterLevelHAlarm",
        nameZn: "\u4F4E\u62A5\u8B66\u6C34\u4F4D",
        type: "u",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "WaterLevelLAlarm",
        nameZn: "\u6C34\u4F4D\u8BA1\u4F4E\u62A5\u8B66\u6C34\u4F4D",
        type: "u",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "WaterLevelAlarmH",
        nameZn: "\u6C34\u4F4D\u8BA1\u62A5\u8B66\u6C34\u4F4D\u4EE5\u4E0A\u62A5\u8B66\u6C34\u4F4D",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "WaterLevelAlarmL",
        nameZn: "\u6C34\u4F4D\u8BA1\u62A5\u8B66\u6C34\u4F4D\u4EE5\u4E0B\u62A5\u8B66\u6C34\u4F4D",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "WaterBaseLevel",
        nameZn: "\u6C34\u4F4D\u57FA\u51C6\u9762",
        type: "s",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "WaterCorrectionLevel",
        nameZn: "\u6C34\u4F4D\u4FEE\u6B63\u503C",
        type: "s",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "WaterCorrParame",
        nameZn: "\u6C34\u4F4D\u8BA1\u7EBF\u6027\u4FEE\u6B63\u503C",
        type: "u",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "WaterCorrParame",
        nameZn: "\u6C34\u4F4D\u8BA1\u7EBF\u6027\u4FEE\u6B63\u503C",
        type: "u",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "ManualSetRand",
        nameZn: "\u4EBA\u5DE5\u7F6E\u6570\u6D6E\u52A8\u503C",
        type: "u",
        num: 80,
        value: "",
        analysis: false
      },
      {
        name: "TimeCycle",
        nameZn: "\u5B9A\u65F6\u62A5\u53D1\u9001\u5468\u671F",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "res32",
        nameZn: "",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "LZX1_K",
        nameZn: "\u6C34\u9F9F\u6821\u51C6\u7CFB\u6570",
        type: "u",
        num: 96,
        value: "",
        analysis: false
      },
      {
        name: "LZX1_X",
        nameZn: "\u6C34\u9F9F\u6CB3\u9053\u6750\u8D28\u9009\u62E9",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "TimeCollCycle",
        nameZn: "\u5B9A\u65F6\u62A5\u91C7\u96C6\u5468\u671F",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "I4_Data",
        nameZn: "4mA\u5BF9\u5E94\u91C7\u96C6\u503C",
        type: "u",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "I20_Data",
        nameZn: "20mA\u5BF9\u5E94\u91C7\u96C6\u503C",
        type: "u",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "Camera_Hours",
        nameZn: "\u6444\u50CF\u5934\u6574\u70B9\u91C7\u96C6\u8BBE\u7F6E",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "ServerOtherConfig",
        nameZn: "BIT0-BIT4\u8865\u53D1\u6570\u636E\u9009\u9879",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "OtherConfig",
        nameZn: "\u4FDD\u7559\u5176\u5B83\u914D\u7F6E\u76F8\u5173",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "LongitudeCompe",
        nameZn: "\u7ECF\u5EA6\u8865\u507F",
        type: "int",
        num: 4,
        value: "",
        analysis: false
      },
      {
        name: "LatitudinalCompe",
        nameZn: "\u7EAC\u5EA6\u8865\u507F",
        type: "int",
        num: 4,
        value: "",
        analysis: false
      },
      {
        name: "EDHight",
        nameZn: "\u84B8\u53D1\u76BF\u4F20\u611F\u5668\u5B89\u88C5\u9AD8\u5EA6\u5355\u4F4D",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "EDRange",
        nameZn: "\u84B8\u53D1\u76BF\u4F20\u611F\u5668\u91CF\u7A0B",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "EDMinAddWater",
        nameZn: "\u84B8\u53D1\u76BF\u6700\u5C0F\u52A0\u6C34\u91CF",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "SSMHight",
        nameZn: "\u571F\u58E4\u6C89\u964D\u4F20\u611F\u5668\u5B89\u88C5\u9AD8\u5EA6\u5355\u4F4D",
        type: "u",
        num: 256,
        value: "",
        analysis: false
      },
      {
        name: "SSMRange",
        nameZn: "\u571F\u58E4\u6C89\u964D\u4F20\u611F\u5668\u91CF\u7A0B",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "SSMRange",
        nameZn: "\u571F\u58E4\u6C89\u964D\u4F20\u611F\u5668\u91CF\u7A0B",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "SlaveParameter",
        nameZn: "\u4ECE\u673A\u53C2\u6570",
        type: "u",
        num: 144,
        value: "",
        analysis: false
      },
      {
        name: "WQCorrParame",
        nameZn: "\u6C34\u8D28\u4FEE\u6B63\u7CFB\u6570",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "WLA",
        nameZn: "\u8865\u76F2\u8DDD\u79BB",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "EXTDTU_UpFREQ",
        nameZn: "\u4E0A\u884C\u9891\u7387",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "EXTDTU_DownFREQ",
        nameZn: "\u4E0B\u884C\u9891\u7387",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "StartYear",
        nameZn: "\u6570\u636E\u8D77\u59CB\u5E74",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "Startmonth",
        nameZn: "\u6570\u636E\u8D77\u59CB\u6708",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "StartDate",
        nameZn: "\u6570\u636E\u8D77\u59CB\u65E5",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "RS485_CH1_WarmTime",
        nameZn: "RS485 \u901A\u90531\u9884\u70ED\u65F6\u95F4",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "RS485_CH3_WarmTime",
        nameZn: "RS485 \u901A\u90533\u9884\u70ED\u65F6\u95F4",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "RS485_CH2_WarmTime",
        nameZn: "RS485 \u901A\u90532\u9884\u70ED\u65F6\u95F4",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "REV_WARM_TIME",
        nameZn: "\u9884\u7559\u51E0\u4E2A\u9884\u70ED\u65F6\u95F4\u8BBE\u7F6E",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "WaterQuality_Cycle",
        nameZn: "\u5E38\u89C4\u6C34\u8D28\u4F20\u611F\u5668\u91C7\u96C6\u5468\u671F",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "Meather_Cycle",
        nameZn: "\u5E38\u89C4\u6C14\u8C61\u4F20\u611F\u5668\u91C7\u96C6\u5468\u671F",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "Camera_Cycle",
        nameZn: "\u5DE5\u4E1A\u76F8\u673A\u91C7\u96C6\u5468\u671F",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "WQCorrParame",
        nameZn: "",
        type: "u",
        num: 80,
        value: "",
        analysis: false
      },
      {
        name: "ManualSet",
        nameZn: "\u4EBA\u5DE5\u7F6E\u6570",
        type: "s",
        num: 80,
        value: "",
        analysis: false
      },
      {
        name: "InsideDTU_Lora_KEY",
        nameZn: "\u5185\u7F6EDTUlora\u52A0\u5BC6key",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "InsideDTU_Lora_ADD",
        nameZn: "\u5185\u7F6EDTUlora\u5730\u5740",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "ServerPassward",
        nameZn: "\u670D\u52A1\u5668\u5BC6\u7801",
        type: "u",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "I4_20_Offset",
        nameZn: "\u5185\u7F6E4-20mA\u91C7\u96C6\u504F\u79FB",
        type: "s",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "I4_20_Parame",
        nameZn: "\u5185\u7F6E4-20mA\u91C7\u96C6\u7EBF\u6027\u4FEE\u6B63\u503C",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "InsFlowHeight",
        nameZn: "\u6D41\u901F\u4EEA\u5B89\u88C5\u9AD8\u5EA6",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "InsFlowCV",
        nameZn: "\u6D41\u91CF\u6821\u6B63\u7CFB\u6570",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "FlowSlotSedim",
        nameZn: "\u6D41\u901F\u69FD\u6DE4\u79EF\u6DF1\u5EA6",
        type: "u",
        num: 96,
        value: "",
        analysis: false
      },
      {
        name: "FlowSlotParameter",
        nameZn: "\u6D41\u901F\u69FD\u53C2\u6570",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "FilterTimes_J",
        nameZn: "\u6D41\u901F\uFF0C\u6C34\u4F4D\uFF0CSS\u6EE4\u6CE2\u6B21\u6570",
        type: "u",
        num: 24,
        value: "",
        analysis: false
      },
      {
        name: "FlowPipDir",
        nameZn: "\u7BA1\u9053\u65B9\u5411 bit0:\u6D41\u91CF\u8BA11\u7BA1\u9053\u65B9\u5411",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "FlowDirection",
        nameZn: "\u6D41\u91CF\u8BA1\u5B89\u88C5\u65B9\u5411",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "TURBHeight",
        nameZn: "\u6D4A\u5EA6\u8BA1\u5B89\u88C5\u9AD8\u5EA6",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "FilterRange",
        nameZn: "\u6D41\u901F\uFF0C\u6C34\u4F4D\uFF0CSS\u6EE4\u6CE2\u6CE2\u52A8\u9608\u503C",
        type: "u",
        num: 28,
        value: "",
        analysis: false
      },
      {
        name: "FilterTimes_S",
        nameZn: "\u6D41\u901F\uFF0C\u6C34\u4F4D\uFF0CSS\u6EE4\u6CE2\u6B21\u6570",
        type: "u",
        num: 24,
        value: "",
        analysis: false
      },
      {
        name: "rev8",
        nameZn: "",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "FilterThreshold",
        nameZn: "\u6D41\u901F\uFF0C\u6C34\u4F4D\uFF0CSS\u6EE4\u6CE2\u95E8\u9650",
        type: "u",
        num: 48,
        value: "",
        analysis: false
      },
      {
        name: "FlowDrect_WLValve",
        nameZn: "",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "FlowDrect_FLValve[",
        nameZn: "",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "FlowDrect_HoldCnt",
        nameZn: "",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "Reserve16",
        nameZn: "\u4FDD\u7559",
        type: "u",
        num: 48,
        value: "",
        analysis: false
      },
      {
        name: "ServiceID",
        nameZn: "",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "WaterQuality_Enable",
        nameZn: "\u5E38\u89C4\u6C34\u8D28\u4F20\u611F\u5668\u5F00\u5173",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "WLRevise",
        nameZn: "\u6C34\u4F4D\u4FEE\u6B63\u503C ",
        type: "s",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "Meather_Enable",
        nameZn: "\u5E38\u89C4\u6C14\u8C61\u4F20\u611F\u5668\u5F00\u5173",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "WaterLevel_Addr",
        nameZn: "\u6C34\u4F4D\u8BA1\u5730\u5740",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "SSM_Addr",
        nameZn: "\u571F\u58E4\u6C89\u964D\u4EEA\u5730\u5740",
        type: "u",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "ED_Addr",
        nameZn: "\u84B8\u53D1\u76BF\u4F20\u611F\u5668\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "NH4N_Addr",
        nameZn: "\u6C28\u6C2E\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "HNO3_Addr",
        nameZn: "\u785D\u9178\u76D0\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "CHLA_Addr",
        nameZn: "\u53F6\u7EFF\u7D20a\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "ALGAE_Addr",
        nameZn: "\u84DD\u7EFF\u85FB\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "REDOX_Addr",
        nameZn: "\u6C27\u5316\u8FD8\u539F\u7535\u4F4D",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: " COD_Addr",
        nameZn: "COD\u901A\u4FE1\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "res9",
        nameZn: "",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "Pressure_Addr",
        nameZn: "\u6C14\u538B\u4F20\u611F\u5668\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "Wind_Add",
        nameZn: "\u98CE\u901F\u98CE\u5411\u4F20\u611F\u5668\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "AirTempHump_Addr",
        nameZn: "\u7A7A\u6C14\u6E29\u6E7F\u5EA6\u4F20\u611F\u5668\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "DO_Addr",
        nameZn: "DO",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "GateLevel_Addr",
        nameZn: "\u95F8\u4F4D\u8BA1\u5730\u5740",
        type: "u",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "COND_Addr",
        nameZn: "COND",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "Radiation_Addr",
        nameZn: "\u8F90\u5C04\u4F20\u611F\u5668",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "PM25_Addr",
        nameZn: "PM2.5\u901A\u4FE1\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "SoilMois_Addr",
        nameZn: "\u5892\u60C5\u4F20\u611F\u5668\u5730\u5740",
        type: "u",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "WaterFlow_Addr",
        nameZn: "\u6D41\u91CF\u8BA1\u5730\u5740",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "Tra_Addr",
        nameZn: "\u900F\u660E\u5EA6\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "PH_Add",
        nameZn: "PH\u901A\u4FE1\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "WaterTemp_Addr",
        nameZn: "\u6C34\u6E29\u901A\u4FE1\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "Camera_Addr",
        nameZn: "\u6444\u50CF\u5934\u5730\u5740",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "res8",
        nameZn: "",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "BOD_Add",
        nameZn: "BOD\u5730\u5740",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "OIW_Addr",
        nameZn: "\u6C34\u4E2D\u6CB9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "CL_Addr",
        nameZn: "\u4F59\u6C2F\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "WQCorrParameSelect",
        nameZn: "\u6C34\u8D28\u7C7B\u578B\u4FEE\u6B63\u53C2\u6570\u9009\u62E9",
        type: "u",
        num: 40,
        value: "",
        analysis: false
      },
      {
        name: " RS485_CH1_Retry",
        nameZn: "RS485\u901A\u90531\u91C7\u96C6\u6570\u636E\u65E0\u6548\u91CD\u8BD5\u6B21\u6570",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "RS485_CH3_Retry",
        nameZn: "RS485\u901A\u90533\u91C7\u96C6\u6570\u636E\u65E0\u6548\u91CD\u8BD5\u6B21\u6570",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "RS485_CH2_Retry",
        nameZn: "\u5176\u4ED6\u4F20\u611F\u5668\u6570\u636E\u65E0\u6548\u91CD\u8BD5\u6B21\u6570",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "WaterLevel_Enable",
        nameZn: "\u6C34\u4F4D\u8BA1\u5F00\u5173\u72B6\u6001",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "oilMois_Enable",
        nameZn: "\u5892\u60C5\u5F00\u5173\u72B6\u6001",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "WaterFlow_Enable;",
        nameZn: "\u6D41\u91CF\u5F00\u5173\u72B6\u6001",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: " res8_5",
        nameZn: "",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "Camera_Enable",
        nameZn: "\u5DE5\u4E1A\u76F8\u673A\u5F00\u5173",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "CumlFlow_Enable;",
        nameZn: "\u7D2F\u8BA1\u6D41\u91CF\u5F00\u5173",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "GateLevel_Enable;",
        nameZn: "\u95F8\u4F4D\u8BA1\u5F00\u5173",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "SendFlag",
        nameZn: "\u53D1\u9001\u6807\u5FD7BIT0 0\u6C5B\u671F\u9700\u8981\u65F6\u95F4\u52A0\u62A5",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "SSM_Enable",
        nameZn: "\u571F\u58E4\u6C89\u964D\u4EEA\u5F00\u5173",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "TURB_Add",
        nameZn: "\u60AC\u6D6E\u7269\u901A\u4FE1\u5730\u5740",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "SQ_Addr",
        nameZn: "\u6CE5\u6C99\u901A\u4FE1\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "TN_Addr",
        nameZn: "\u603B\u6C2E\u901A\u4FE1\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "TP_Addr",
        nameZn: "\u603B\u78F7\u901A\u4FE1\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "REV_ENABLE",
        nameZn: "\u9884\u7559\u51E0\u4E2A\u5F00\u5173\u8BBE\u7F6E",
        type: "u",
        num: 72,
        value: "",
        analysis: false
      },
      {
        name: "RainAlarm",
        nameZn: "\u96E8\u91CF\u52A0\u62A5\u9608\u503C",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "RainTimeReport_Enable",
        nameZn: "\u65F6\u6BB5\u96E8\u91CF\u4F7F\u80FD",
        type: "bool",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "RainRes",
        nameZn: "\u96E8\u91CF\u8BA1\u5206\u8FA8\u7387",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "CentralAddr",
        nameZn: "\u4E2D\u5FC3\u7AD9\u5730\u5740\u7F16\u7801",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "VoltageAlarm",
        nameZn: "\u7535\u6C60\u4F4E\u7535\u538B\u62A5\u8B66",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "VoltageProte",
        nameZn: "\u7535\u6C60\u4F4E\u7535\u538B\u4FDD\u62A4,\u5C06\u7F29\u77ED\u53D1\u9001\u5468\u671F,\u4FDD\u62A4\u7535\u6C60",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "ConfigStr0",
        nameZn: "\u53EF\u914D\u7F6E\u5B57\u7B26\u4E32\uFF0Cmqtt\u7528\u4E8Etoken\u6216\u8005\u7528\u6237\u540D\uFF08\u5B9A\u5236\uFF09\uFF0C212\u7528\u4E8E\u7AD9\u7801",
        type: "char",
        num: 22,
        value: "",
        analysis: false
      },
      {
        name: "ConfigStr1",
        nameZn: "\u53EF\u914D\u7F6E\u5B57\u7B26\u4E32\uFF0Cmqtt\u7528\u4E8E\u5BC6\u7801",
        type: "char",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "ManualSetSelect",
        nameZn: "\u4EBA\u5DE5\u7F6E\u6570\u53C2\u6570\u9009\u62E9",
        type: "u",
        num: 40,
        value: "",
        analysis: false
      },
      {
        name: " res8_4",
        nameZn: "",
        type: "u",
        num: 48,
        value: "",
        analysis: false
      },
      {
        name: "HeartbeatTime",
        nameZn: "\u5FC3\u8DF3\u5305,\u94FE\u8DEF\u7EF4\u6301\u62A5",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "es8_6",
        nameZn: "",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: " Camera_TimeSlot",
        nameZn: "\u76F8\u673A\u53D1\u9001\u65F6\u95F4\u6BB5",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "res8_2",
        nameZn: "",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      },
      {
        name: "WaterLevelChangeAlarm",
        nameZn: "\u6C34\u4F4D\u53D8\u5316\u52A0\u62A5 \u6CB3\u90531min\u76D1\u6D4B\u52A0\u62A5",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "res899",
        nameZn: "",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "WorkingMode",
        nameZn: "\u5DE5\u4F5C\u6A21\u5F0F\u8BBE\u7F6E,\u7528\u4E8E\u8BBE\u7F6E\u662F\u5426\u5E38\u5728\u7EBF\u6A21\u5F0F",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "DoorAlarmTime",
        nameZn: "\u67DC\u95E8\u62A5\u8B66\u7B49\u5F85\u5EF6\u65F6",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: " res8_10",
        nameZn: "",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: " res8_9",
        nameZn: "",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "EnableTiming",
        nameZn: "\u662F\u5426\u81EA\u52A8\u6821\u65F6",
        type: "bool",
        num: 1,
        value: "",
        analysis: false
      },
      {
        name: " Camera_PicAck",
        nameZn: "\u56FE\u7247\u62A5\u6587\u54CD\u5E94\u8BBE\u7F6E",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "PicPackSendDelay",
        nameZn: "\u56FE\u7247\u62A5\u6587\u5305\u53D1\u9001\u5EF6\u65F6",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: " res8_0",
        nameZn: "",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "VpnPoint",
        nameZn: "VPN\u63A5\u5165\u70B9",
        type: "char",
        num: 34,
        value: "",
        analysis: false
      },
      {
        name: "VpnName",
        nameZn: "VPN\u7528\u6237\u540D",
        type: "u",
        num: 34,
        value: "",
        analysis: false
      },
      {
        name: "VpnPassword",
        nameZn: "VPN\u5BC6\u7801",
        type: "u",
        num: 34,
        value: "",
        analysis: false
      },
      {
        name: "VpnEnable",
        nameZn: "VPN\u4F7F\u80FD\uFF0C\u670D\u52A1\u56681-3",
        type: "bool",
        num: 1,
        value: "",
        analysis: false
      },
      {
        name: "RemoteVpnEnable",
        nameZn: "\u8FDC\u7A0B\u670D\u52A1\u5668\u662F\u5426\u662F\u80FDVPN\uFF0C\u4E5F\u5C31\u662F\u540E\u53F0\u670D\u52A1\u5668\u662F\u5426\u662F\u80FDVPN\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u4E3A0",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "BODSelect",
        nameZn: "BOD\u578B\u53F7\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "DomainEnable",
        nameZn: "bit0-bin3:\u4E2D\u5FC3\u7AD91-3,\u57DF\u540D\u4F7F\u80FD",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "Domain",
        nameZn: "\u670D\u52A1\u5668\u57DF\u540D",
        type: "char",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "DitchType",
        nameZn: "\u6D41\u91CF\u8BA1\u622A\u9762\u9009\u62E9",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "FlowUnit",
        nameZn: "\u6D41\u91CF\u4F20\u8F93\u65B9\u5F0F\uFF0C0\uFF1A\u6D41\u91CFm3/s\uFF1B1\uFF1A\u6C34\u91CFm3/h",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "FlowChanRes",
        nameZn: "\u975E\u6807\u51C6\u5830\u9AD8\u5EA6\u5206\u8FA8\u7387\uFF0C\u603B\u5171256\u4E2A\u70B9\uFF0C1-100cm\u53EF\u8BBE\u7F6E",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "WaterLevelSensor",
        nameZn: "\u6C34\u4F4D\u6570\u636E\u6765\u6E90",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "WaterTempSensor",
        nameZn: "\u6C34\u6E29\u6570\u636E\u6765\u6E90",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "FaultFilter",
        nameZn: "\u4F20\u611F\u5668\u6545\u969C\u6EE4\u6CE2\u6B21\u6570",
        type: "u",
        num: 24,
        value: "",
        analysis: false
      },
      {
        name: "OIWSelect",
        nameZn: "\u6C34\u4E2D\u6CB9\u578B\u53F7",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "CLSelect",
        nameZn: "",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "es8_3",
        nameZn: "",
        type: "u",
        num: 40,
        value: "",
        analysis: false
      },
      {
        name: "WaterLevelDeviceSelect",
        nameZn: "\u6C34\u4F4D\u8BA1\u8BBE\u5907\u9009\u62E9",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "WaterFlowDeviceSelect",
        nameZn: "\u6D41\u91CF\u8BA1\u8BBE\u5907\u9009\u62E9",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "CamerDeviceSelect",
        nameZn: "\u76F8\u673A\u578B\u53F7\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "DODeviceSelect",
        nameZn: "DO\u8BBE\u5907\u578B\u53F7\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "CODDeviceSelect",
        nameZn: "COD\u8BBE\u5907\u578B\u53F7\u9009\u62E9-\u9884\u7559",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "CONDDeviceSelect",
        nameZn: "COND\u8BBE\u5907\u578B\u53F7\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "PHDeviceSelect",
        nameZn: "PH\u8BBE\u5907\u578B\u53F7\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "TempHumSelect",
        nameZn: "\u6E29\u6E7F\u5EA6\u8BBE\u5907\u578B\u53F7\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "WaterTempSelect",
        nameZn: "\u6C34\u6E29\u8BBE\u5907\u578B\u53F7\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "GateLevelDeviceSelect",
        nameZn: "\u95F8\u4F4D\u8BA1\u9009\u62E9-8\u4E2A\u95F8\u4F4D\u8BA1\u53EA\u80FD\u4F7F\u7528\u4E00\u79CD\u7C7B\u578B\u7684",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "PressureSelect",
        nameZn: "\u6C14\u538B\u4F20\u611F\u5668\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "WindSelect",
        nameZn: "\u98CE\u901F\u98CE\u5411\u4F20\u611F\u5668\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "RadiationSelect",
        nameZn: "\u8F90\u5C04\u4F20\u611F\u5668\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "res8_7",
        nameZn: "",
        type: "u",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "SoilMoistureSelect",
        nameZn: "\u571F\u58E4\u5892\u60C5\u4F20\u611F\u5668\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "REDOXSelect",
        nameZn: "\u6C27\u5316\u8FD8\u539F\u7535\u4F4D\u4F20\u611F\u5668\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "NH4NSelect",
        nameZn: "\u6C28\u6C2E\u4F20\u611F\u5668\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "HNO3Select",
        nameZn: "\u785D\u9178\u76D0\u4F20\u611F\u5668\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "CHLASelect",
        nameZn: "\u53F6\u7EFF\u7D20a\u4F20\u611F\u5668\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "ALGAESelect",
        nameZn: "\u84DD\u7EFF\u85FB\u4F20\u611F\u5668\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "ServerPassward",
        nameZn: "\u589E\u52A0\u84B8\u53D1\u76BF\u914D\u7F6E",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "EDSelect",
        nameZn: "\u84B8\u53D1\u76BF\u4F20\u611F\u5668\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "SSMSelect",
        nameZn: "\u571F\u58E4\u6C89\u964D\u4F20\u611F\u5668\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "TURBDeviceSelect",
        nameZn: "SS\u8BBE\u5907\u578B\u53F7\u9009\u62E9",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "SQDeviceSelect",
        nameZn: "\u6CE5\u6C99\u8BBE\u5907\u578B\u53F7\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "PM25DeviceSelect",
        nameZn: "PM2.5\u8BBE\u5907\u578B\u53F7\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "TNSelect",
        nameZn: "\u603B\u6C2E\u8BBE\u5907\u578B\u53F7\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "TPSelect",
        nameZn: "\u603B\u78F7\u8BBE\u5907\u578B\u53F7\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "TraSelect",
        nameZn: "\u900F\u660E\u5EA6\u8BBE\u5907\u578B\u53F7\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "Reserve8_2",
        nameZn: "\u4F20\u611F\u5668\u9009\u62E9\u9884\u7559",
        type: "u",
        num: 24,
        value: "",
        analysis: false
      },
      {
        name: "InstFlowAccuSelect",
        nameZn: "\u77AC\u65F6\u6D41\u91CF\u7CBE\u5EA6\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "ExtAlarmTime",
        nameZn: "\u5916\u7F6E\u901A\u4FE1\u6A21\u5757\u901A\u4FE1",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "DataSave_Cycel",
        nameZn: "\u6570\u636E\u5B58\u50A8\u5468\u671F",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "WaterFlowLevelSelect",
        nameZn: "\u6D41\u91CF\u8BA1\u6C34\u4F4D\u6570\u636E\u6765\u6E90",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "EXTDTU_Select",
        nameZn: "\u5916\u7F6EDTU\u5382\u5BB6\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "NBIOT_Enable",
        nameZn: "NBIOT\u5F00\u5173\uFF0C\u4F4E4\u4F4D\u4E3A\u4E2D\u5FC3\u7AD91-3\uFF0C\u9AD84\u4F4D\u4E3A\u540E\u53F0\u8BBE\u7F6E(\u4E3B\u5361)\uFF0C\u8BBE\u7F6E\u4E3A0xA\u4E3A\u5F00\u542F\uFF0C\u5426\u5219\u4E3A\u5173\u95ED",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "NBIOT_Mode",
        nameZn: "NBIOT\u6A21\u5F0F\u9009\u62E9",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "EDWaterLevelSelect",
        nameZn: "\u84B8\u53D1\u76BF\u6C34\u4F4D\u6765\u6E90",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "TURBTestWaterLevelSelect",
        nameZn: "SS\u7684\u6C34\u4F4D\u6765\u6E90\u9009\u62E9",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "SlaveAddr",
        nameZn: "\u4ECE\u673A\u6A21\u5F0F\u5730\u5740",
        type: "u",
        num: 24,
        value: "",
        analysis: false
      },
      {
        name: "SlaveEnable",
        nameZn: "\u4ECE\u673A\u6A21\u5F0F\u5F00\u5173",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "SlaveDeviceSelect",
        nameZn: "\u4ECE\u673A\u9A71\u52A8\u9009\u62E9",
        type: "u",
        num: 24,
        value: "",
        analysis: false
      },
      {
        name: "SoilTempSelect",
        nameZn: "\u571F\u58E4\u6E29\u5EA6\u6570\u636E\u6765\u6E90",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "GTPSelect",
        nameZn: "\u5730\u6E29\u6570\u636E\u6765\u6E90",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "EXTDTU_LoRa_JOINEUI",
        nameZn: "\u8BBE\u7F6EJoinEUI",
        type: "u",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: " InsideDTU_Lora_NID",
        nameZn: "\u5185\u7F6EDTUlora\u7F51\u7EDCid",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: " WGX5_Gain",
        nameZn: "\u5C0F\u96F7\u8FBE\u589E\u76CA",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "WGX6_NP",
        nameZn: "\u5927\u96F7\u8FBE\u5FFD\u7565\u7684\u8DDD\u79BB",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "WGX6_PO",
        nameZn: "\u5927\u96F7\u8FBE\u53D1\u5C04\u529F\u73870",
        type: "u",
        num: 16,
        value: "",
        analysis: false
      },
      {
        name: "InsideDTU_Lora_NUM",
        nameZn: "\u7F51\u5173\u6A21\u7EC4\u6570\u91CF\uFF0C\u7528\u4E8E\u5224\u65AD\u7F51\u5173\u5730\u5740",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "ThresholdCollCycle",
        nameZn: "\u9608\u503C\u91C7\u96C6\u5468\u671F\u9700\u8981\u548C\u5B9A\u65F6\u62A5\u91C7\u96C6\u5468\u671F\u6BD4\u8F83\u9009\u5C0F\u7684",
        type: "u",
        num: 24,
        value: "",
        analysis: false
      },
      {
        name: "ThresholdAlarmCycle",
        nameZn: "\u9608\u503C\u52A0\u62A5\u5468\u671F",
        type: "u",
        num: 24,
        value: "",
        analysis: false
      },
      {
        name: "AlarmCollCycle",
        nameZn: "\u5B9A\u65F6\u62A5\u91C7\u96C6\u5468\u671F\u6C5B\u671F",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "AlarmCycle",
        nameZn: "\u52A0\u62A5\u53D1\u9001\u5468\u671F",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "es8_1",
        nameZn: "",
        type: "u",
        num: 8,
        value: "",
        analysis: false
      },
      {
        name: "WLBase",
        nameZn: "\u4E95\u76D6\u9AD8\u7A0B ",
        type: "s",
        num: 64,
        value: "",
        analysis: false
      },
      {
        name: "Reserve8_3",
        nameZn: "",
        type: "u",
        num: 32,
        value: "",
        analysis: false
      }
    ]
  });
  function dataFiltering(text) {
    formatAppLog("log", "at utils/analysis.js:5", text);
    const Str = text.indexOf("00") != -1 ? text.substring(0, text.indexOf("00")) : text;
    return Str;
  }
  function littleEndian(str) {
    if (str != "" && str != void 0) {
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
  function type_s_Data(i) {
    let two = parseInt(i, 16).toString(2);
    let bitNum = i.length * 4;
    if (two.length < bitNum) {
      while (two.length < bitNum) {
        two = "0" + two;
      }
    }
  }
  function hexToString(hex, encoding) {
    var trimedStr = hex.trim();
    var rawStr = trimedStr.substr(0, 2).toLowerCase() === "0x" ? trimedStr.substr(2) : trimedStr;
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
    var bytesView = new Uint8Array(resultStr);
    var str = new TextDecoder(encoding).decode(bytesView);
    return str;
  }
  function UseGetDataForZiJie(el, AllData2) {
    let solt;
    if (el.type == "u") {
      solt = el.num / 4;
      let data1 = AllData2.Data16.slice(AllData2.DataKey, solt + AllData2.DataKey);
      AllData2.DataKey += solt;
      if (el.analysis == false) {
        el.value = data1;
        return;
      } else {
        let Data_FanZhuan = littleEndian(data1);
        el.value = parseInt(Data_FanZhuan, 16);
      }
    } else if (el.type == "s") {
      solt = el.num / 4;
      let data1 = AllData2.Data16.slice(AllData2.DataKey, solt + AllData2.DataKey);
      AllData2.DataKey += solt;
      if (el.analysis == false) {
        el.value = data1;
        return;
      } else {
        let Data_FanZhuan = littleEndian(data1);
        formatAppLog("log", "at utils/analysis.js:97", "type_s_Data", type_s_Data(Data_FanZhuan));
        el.value = type_s_Data(Data_FanZhuan);
      }
    } else {
      solt = el.num * 2;
      let data1 = AllData2.Data16.slice(AllData2.DataKey, solt + AllData2.DataKey);
      AllData2.DataKey += solt;
      if (el.analysis == false) {
        el.value = data1;
        return;
      } else {
        if (data1.indexOf("00") == 0) {
          el.value = "";
        } else {
          data1 = dataFiltering(data1);
          let Data_String = hexToString(data1, "gbk");
          formatAppLog("log", "at utils/analysis.js:124", "Data_String" + el.nameZn, Data_String);
          el.value = Data_String;
        }
      }
    }
    return AllData2.Data_form;
  }
  function stringToHex(str) {
    var val = "";
    for (var i = 0; i < str.length; i++) {
      if (val == "")
        val = str.charCodeAt(i).toString(16);
      else
        val += str.charCodeAt(i).toString(16);
    }
    return val;
  }
  const _sfc_main$4 = {
    __name: "ycz",
    setup(__props) {
      vue.onMounted(() => {
        AllData.Data_form.forEach((element, index) => {
          let data = UseGetDataForZiJie(element, AllData);
          if (data) {
            HexadecimalLists.array = data;
            data.forEach((i) => {
              Object.assign(yczList, { [i.name]: i.value });
            });
          }
        });
        formatAppLog("log", "at pages/tabbar/ycz/ycz.vue:179", HexadecimalLists.array, "HexadecimalList");
      });
      const validatorSiteName = (val) => {
        let unm = strLength(val);
        if (unm > 62) {
          return `\u60A8\u8F93\u5165\u7684\u4E0D\u5408\u6CD5\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165`;
        }
      };
      const validatorSiteNo = (val) => {
        let unm = numberLength(val);
        if (!unm) {
          return `\u7AD9\u70B9\u7F16\u53F7\u5FC5\u987B\u4E3A10\u4F4D\u6570\u5B57`;
        }
      };
      const yczList = vue.reactive({ checked: true, ClearHistorical: false });
      const HexadecimalLists = vue.reactive({ array: [] });
      const showSiteType = vue.ref(false);
      const showSeasonMode = vue.ref(false);
      const showAdditional = vue.ref(false);
      function onSiteType({ selectedOptions }) {
        showSiteType.value = false;
        yczList.SiteType = selectedOptions[0].text;
      }
      function TwoSiteType({ selectedOptions }) {
        showSeasonMode.value = false;
        yczList.FloodSeasonMode = selectedOptions[0].text;
      }
      function threeSiteType({ selectedOptions }) {
        showAdditional.value = false;
        yczList.AdditionalMmode = selectedOptions[0].text;
      }
      function onSubmit() {
        let array1 = "";
        formatAppLog("log", "at pages/tabbar/ycz/ycz.vue:219", yczList, "yczList");
        HexadecimalLists.array.forEach((i) => {
          Object.keys(yczList).forEach((n) => {
            if (n === i.name) {
              array1 += stringToHex("" + yczList[n]);
            } else {
              array1 += i.value ? i.value : "";
            }
          });
          formatAppLog("log", "at pages/tabbar/ycz/ycz.vue:228", array1, "array1");
        });
      }
      return (_ctx, _cache) => {
        const _component_van_field = vue.resolveComponent("van-field");
        const _component_van_picker = vue.resolveComponent("van-picker");
        const _component_van_popup = vue.resolveComponent("van-popup");
        const _component_van_stepper = vue.resolveComponent("van-stepper");
        const _component_van_switch = vue.resolveComponent("van-switch");
        const _component_van_cell_group = vue.resolveComponent("van-cell-group");
        const _component_van_button = vue.resolveComponent("van-button");
        const _component_van_form = vue.resolveComponent("van-form");
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createVNode(_component_van_form, { onSubmit }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_van_cell_group, { inset: "" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "context_base" }, "\u57FA\u672C\u8BBE\u7F6E"),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.SiteType,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => yczList.SiteType = $event),
                    "is-link": "",
                    readonly: "",
                    label: "\u7AD9\u70B9\u7C7B\u578B",
                    placeholder: "\u9009\u62E9\u7AD9\u70B9\u7C7B\u578B",
                    onClick: _cache[1] || (_cache[1] = ($event) => showSiteType.value = true)
                  }, null, 8, ["modelValue"]),
                  vue.createVNode(_component_van_popup, {
                    show: showSiteType.value,
                    "onUpdate:show": _cache[3] || (_cache[3] = ($event) => showSiteType.value = $event),
                    round: "",
                    position: "bottom"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_van_picker, {
                        columns: vue.unref(AllData).YzcSiteTypeList,
                        onCancel: _cache[2] || (_cache[2] = ($event) => showSiteType.value = false),
                        onConfirm: onSiteType
                      }, null, 8, ["columns"])
                    ]),
                    _: 1
                  }, 8, ["show"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.TelName,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => yczList.TelName = $event),
                    name: "\u7AD9\u70B9\u7F16\u53F7",
                    rules: [{ validator: validatorSiteNo }],
                    label: "\u7AD9\u70B9\u7F16\u53F7",
                    placeholder: "\u7AD9\u70B9\u7F16\u53F7(\u7AD9\u70B9\u7F16\u53F7\u5FC5\u987B\u4E3A10\u4F4D\u6570\u5B57)"
                  }, null, 8, ["modelValue", "rules"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.FloodSeasonMode,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => yczList.FloodSeasonMode = $event),
                    "is-link": "",
                    readonly: "",
                    label: "\u6C5B\u671F\u6A21\u5F0F",
                    placeholder: "\u9009\u62E9\u7AD9\u6C5B\u671F\u6A21\u5F0F",
                    onClick: _cache[6] || (_cache[6] = ($event) => showSeasonMode.value = true)
                  }, null, 8, ["modelValue"]),
                  vue.createVNode(_component_van_popup, {
                    show: showSeasonMode.value,
                    "onUpdate:show": _cache[8] || (_cache[8] = ($event) => showSeasonMode.value = $event),
                    round: "",
                    position: "bottom"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_van_picker, {
                        columns: vue.unref(AllData).FloodSeasonModeList,
                        onCancel: _cache[7] || (_cache[7] = ($event) => showSeasonMode.value = false),
                        onConfirm: TwoSiteType
                      }, null, 8, ["columns"])
                    ]),
                    _: 1
                  }, 8, ["show"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.AdditionalMmode,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => yczList.AdditionalMmode = $event),
                    "is-link": "",
                    readonly: "",
                    label: "\u52A0\u62A5\u6A21\u5F0F",
                    placeholder: "\u9009\u62E9\u7AD9\u52A0\u62A5\u6A21\u5F0F",
                    onClick: _cache[10] || (_cache[10] = ($event) => showAdditional.value = true)
                  }, null, 8, ["modelValue"]),
                  vue.createVNode(_component_van_popup, {
                    show: showAdditional.value,
                    "onUpdate:show": _cache[12] || (_cache[12] = ($event) => showAdditional.value = $event),
                    round: "",
                    position: "bottom"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_van_picker, {
                        columns: vue.unref(AllData).AdditionalMmodeList,
                        onCancel: _cache[11] || (_cache[11] = ($event) => showAdditional.value = false),
                        onConfirm: threeSiteType
                      }, null, 8, ["columns"])
                    ]),
                    _: 1
                  }, 8, ["show"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingPeriod,
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => yczList.reportingPeriod = $event),
                    label: "\u5B9A\u65F6\u62A5\u5468\u671F",
                    "input-align": "right",
                    placeholder: "\u5206\u949F"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingPeriod,
                        "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => yczList.reportingPeriod = $event),
                        "default-value": "0",
                        min: "0",
                        max: "1440",
                        theme: "round"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "\u5206\u949F")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingCJB,
                    "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => yczList.reportingCJB = $event),
                    label: "\u5B9A\u65F6\u62A5\u91C7\u96C6\u5468\u671F",
                    "input-align": "right",
                    placeholder: "\u5206\u949F",
                    "label-width": "300rpx"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingCJB,
                        "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => yczList.reportingCJB = $event),
                        "default-value": "0",
                        min: "0",
                        max: "1440",
                        theme: "round"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "\u5206\u949F")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingXQF,
                    "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => yczList.reportingXQF = $event),
                    label: "\u6C5B\u671F\u53D1\u9001\u5468\u671F",
                    "input-align": "right",
                    placeholder: "\u5206\u949F"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingXQF,
                        "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => yczList.reportingXQF = $event),
                        "default-value": "0",
                        min: "0",
                        max: "60",
                        theme: "round"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "\u5206\u949F")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingCJZ,
                    "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => yczList.reportingCJZ = $event),
                    label: "\u6C5B\u671F\u91C7\u96C6\u5468\u671F",
                    "input-align": "right",
                    placeholder: "\u5206\u949F"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingCJZ,
                        "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => yczList.reportingCJZ = $event),
                        "default-value": "0",
                        min: "0",
                        theme: "round",
                        max: "60"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "\u5206\u949F")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.SiteName,
                    "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => yczList.SiteName = $event),
                    rows: "3",
                    autosize: "",
                    label: "\u7AD9\u70B9\u540D\u79F0",
                    type: "textarea",
                    rules: [{ validator: validatorSiteName }],
                    placeholder: "\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0(\u6700\u591A62\u5B57\u8282\uFF0C31\u4E2A\u6C49\u5B57\u621662\u5B57\u6BCD)"
                  }, null, 8, ["modelValue", "rules"]),
                  vue.createElementVNode("view", { class: "context_base info" }, "\u6570\u636E\u8BBE\u7F6E"),
                  vue.createVNode(_component_van_field, {
                    name: "switch",
                    label: "\u4FE1\u53F7\u5F3A\u5EA6\u4E0A\u62A5",
                    "input-align": "right"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_switch, {
                        modelValue: yczList.ClearHistorical,
                        "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => yczList.ClearHistorical = $event),
                        size: "20"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_van_field, {
                    name: "switch",
                    label: "\u6E05\u695A\u5386\u53F2\u6570\u636E",
                    "input-align": "right"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_switch, {
                        "active-color": "#ee0a24",
                        modelValue: yczList.ClearHistorical,
                        "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => yczList.ClearHistorical = $event),
                        size: "20"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vue.createElementVNode("div", { style: { "margin": "23rpx" } }, [
                vue.createVNode(_component_van_button, {
                  round: "",
                  block: "",
                  type: "primary",
                  "native-type": "submit"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" \u4FDD\u5B58\u914D\u7F6E ")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  var PagesTabbarYczYcz = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "D:/Documents/HBuilderProjects/jiongshui_app/pages/tabbar/ycz/ycz.vue"]]);
  const _sfc_main$3 = {
    __name: "Cgq",
    setup(__props) {
      vue.onMounted(() => {
        AllData.Data_form.forEach((element, index) => {
          let data = UseGetDataForZiJie(element, AllData);
          if (data) {
            HexadecimalLists.array = data;
            data.forEach((i) => {
              Object.assign(yczList, { [i.name]: i.value });
            });
          }
        });
        formatAppLog("log", "at pages/tabbar/Cgq/Cgq.vue:60", HexadecimalLists.array, "HexadecimalList");
      });
      const HexadecimalLists = vue.reactive({ array: [] });
      const showSiteType = vue.ref(false);
      const showSeasonMode = vue.ref(false);
      const yczList = vue.reactive({});
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
        formatAppLog("log", "at pages/tabbar/Cgq/Cgq.vue:78", yczList, "yczList");
        HexadecimalLists.array.forEach((i) => {
          Object.keys(yczList).forEach((n) => {
            if (n === i.name) {
              array1 += stringToHex("" + yczList[n]);
            } else {
              array1 += i.value ? i.value : "";
            }
          });
          formatAppLog("log", "at pages/tabbar/Cgq/Cgq.vue:87", array1, "array1");
        });
      }
      return (_ctx, _cache) => {
        const _component_van_field = vue.resolveComponent("van-field");
        const _component_van_picker = vue.resolveComponent("van-picker");
        const _component_van_popup = vue.resolveComponent("van-popup");
        const _component_van_cell_group = vue.resolveComponent("van-cell-group");
        const _component_van_button = vue.resolveComponent("van-button");
        const _component_van_form = vue.resolveComponent("van-form");
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createVNode(_component_van_form, { onSubmit }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_van_cell_group, { inset: "" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "context_base" }, "\u6C34\u6587/\u6C34\u8D28\u76F8\u5173\u4F20\u611F\u5668\u9009\u62E9"),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.SiteType,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => yczList.SiteType = $event),
                    "is-link": "",
                    readonly: "",
                    label: "\u6C34\u4F4D\u8BA11",
                    placeholder: "\u9009\u62E9\u6C34\u4F4D\u8BA11",
                    onClick: _cache[1] || (_cache[1] = ($event) => showSiteType.value = true)
                  }, null, 8, ["modelValue"]),
                  vue.createVNode(_component_van_popup, {
                    show: showSiteType.value,
                    "onUpdate:show": _cache[3] || (_cache[3] = ($event) => showSiteType.value = $event),
                    round: "",
                    position: "bottom"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_van_picker, {
                        columns: vue.unref(AllData).SiteTypeList,
                        onCancel: _cache[2] || (_cache[2] = ($event) => showSiteType.value = false),
                        onConfirm: onSiteType
                      }, null, 8, ["columns"])
                    ]),
                    _: 1
                  }, 8, ["show"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.FloodSeasonMode,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => yczList.FloodSeasonMode = $event),
                    "is-link": "",
                    readonly: "",
                    label: "\u6C34\u4F4D\u8BA12",
                    placeholder: "\u9009\u62E9\u7AD9\u6C5B\u671F\u6A21\u5F0F",
                    onClick: _cache[5] || (_cache[5] = ($event) => showSeasonMode.value = true)
                  }, null, 8, ["modelValue"]),
                  vue.createVNode(_component_van_popup, {
                    show: showSeasonMode.value,
                    "onUpdate:show": _cache[7] || (_cache[7] = ($event) => showSeasonMode.value = $event),
                    round: "",
                    position: "bottom"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_van_picker, {
                        columns: vue.unref(AllData).SiteTypeList,
                        onCancel: _cache[6] || (_cache[6] = ($event) => showSeasonMode.value = false),
                        onConfirm: TwoSiteType
                      }, null, 8, ["columns"])
                    ]),
                    _: 1
                  }, 8, ["show"])
                ]),
                _: 1
              }),
              vue.createElementVNode("div", { style: { "margin-top": "123rpx" } }, [
                vue.createVNode(_component_van_button, {
                  round: "",
                  block: "",
                  type: "primary",
                  "native-type": "submit"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" \u4FDD\u5B58\u914D\u7F6E ")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  var PagesTabbarCgqCgq = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "D:/Documents/HBuilderProjects/jiongshui_app/pages/tabbar/Cgq/Cgq.vue"]]);
  const _sfc_main$2 = {
    __name: "Swq",
    setup(__props) {
      vue.onMounted(() => {
        AllData.Data_form.forEach((element, index) => {
          let data = UseGetDataForZiJie(element, AllData);
          if (data) {
            HexadecimalLists.array = data;
            data.forEach((i) => {
              Object.assign(yczList, { [i.name]: i.value });
            });
          }
        });
      });
      const HexadecimalLists = vue.reactive({ array: [] });
      const yczList = vue.reactive({ checked: true, ClearHistorical: false });
      function onSubmit() {
        let array1 = "";
        formatAppLog("log", "at pages/tabbar/Swq/Swq.vue:154", yczList, "yczList");
        HexadecimalLists.array.forEach((i) => {
          Object.keys(yczList).forEach((n) => {
            if (n === i.name) {
              array1 += stringToHex("" + yczList[n]);
            } else {
              array1 += i.value ? i.value : "";
            }
          });
          formatAppLog("log", "at pages/tabbar/Swq/Swq.vue:163", array1, "array1");
        });
      }
      return (_ctx, _cache) => {
        const _component_van_stepper = vue.resolveComponent("van-stepper");
        const _component_van_field = vue.resolveComponent("van-field");
        const _component_van_switch = vue.resolveComponent("van-switch");
        const _component_van_cell_group = vue.resolveComponent("van-cell-group");
        const _component_van_button = vue.resolveComponent("van-button");
        const _component_van_form = vue.resolveComponent("van-form");
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createVNode(_component_van_form, { onSubmit }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_van_cell_group, { inset: "" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "context_base" }, "\u4F20\u611F\u5668\u91C7\u96C6\u95F4\u9694\u65F6\u95F4\u8BBE\u7F6E"),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingPeriod,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => yczList.reportingPeriod = $event),
                    label: "\u91C7\u96C6\u5468\u671F",
                    "input-align": "right",
                    placeholder: "\u5206\u949F",
                    "label-width": "110rpx"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createElementVNode("text", { class: "stepper_text" }, "\u5206\u949F(0-1440)"),
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingPeriod,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => yczList.reportingPeriod = $event),
                        "default-value": "0",
                        min: "0",
                        max: "1440",
                        theme: "round"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createCommentVNode(" \u91C7\u96C6\u901A\u4FE1\u8BBE\u7F6E "),
                  vue.createElementVNode("view", { class: "context_base info" }, "\u91C7\u96C6\u901A\u4FE1\u8BBE\u7F6E"),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingCJB,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => yczList.reportingCJB = $event),
                    label: "\u9884\u70ED\u65F6\u95F4",
                    "input-align": "right",
                    placeholder: "\u5206\u949F",
                    "label-width": "110rpx"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createElementVNode("text", { class: "stepper_text" }, "\u79D2\u949F(0-255)"),
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingCJB,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => yczList.reportingCJB = $event),
                        "default-value": "0",
                        min: "0",
                        max: "255",
                        theme: "round"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingXQF,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => yczList.reportingXQF = $event),
                    label: "\u5931\u8D25\u91CD\u8BD5",
                    "input-align": "right",
                    placeholder: "\u5931\u8D25\u91CD\u8BD5\u6B21\u6570"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createElementVNode("text", { class: "stepper_text" }, "(\u91CD\u8BD5\u6B21\u65700-255)"),
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingXQF,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => yczList.reportingXQF = $event),
                        "default-value": "0",
                        min: "0",
                        theme: "round",
                        max: "255"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingCJZ,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => yczList.reportingCJZ = $event),
                    label: "\u6545\u969C\u6EE4\u6CE2",
                    "input-align": "right",
                    placeholder: "\u6545\u969C\u6EE4\u6CE2"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createElementVNode("text", { class: "stepper_text" }, "(\u65E0\u65480-255)"),
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingCJZ,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => yczList.reportingCJZ = $event),
                        "default-value": "0",
                        min: "0",
                        max: "255",
                        theme: "round"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createCommentVNode(" \u4F20\u611F\u5668\u5F00\u5173\u8BBE\u7F6E "),
                  vue.createElementVNode("view", { class: "context_base info" }, "\u4F20\u611F\u5668\u5F00\u5173\u8BBE\u7F6E"),
                  vue.createVNode(_component_van_field, {
                    name: "switch",
                    label: "\u6C34\u4F4D\u8BA11",
                    "input-align": "right"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_switch, {
                        modelValue: yczList.checked,
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => yczList.checked = $event),
                        size: "20"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_van_field, {
                    name: "switch",
                    label: "\u6C34\u4F4D\u8BA12",
                    "input-align": "right"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_switch, {
                        modelValue: yczList.ClearHistorical,
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => yczList.ClearHistorical = $event),
                        size: "20"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  vue.createElementVNode("view", { class: "context_base info" }, "\u4F20\u611F\u5668\u901A\u4FE1\u5730\u5740\u8BBE\u7F6E"),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingPeriod,
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => yczList.reportingPeriod = $event),
                    label: "\u6C34\u4F4D\u8BA11",
                    "input-align": "right",
                    placeholder: "\u6C34\u4F4D\u8BA11"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingPeriod,
                        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => yczList.reportingPeriod = $event),
                        "default-value": "0",
                        min: "0",
                        theme: "round",
                        max: "255"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingPeriod,
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => yczList.reportingPeriod = $event),
                    label: "\u6C34\u4F4D\u8BA12",
                    "input-align": "right",
                    placeholder: "\u6C34\u4F4D\u8BA12"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingPeriod,
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => yczList.reportingPeriod = $event),
                        "default-value": "0",
                        min: "0",
                        theme: "round",
                        max: "255"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              vue.createElementVNode("div", { style: { "margin": "23rpx" } }, [
                vue.createVNode(_component_van_button, {
                  round: "",
                  block: "",
                  type: "primary",
                  "native-type": "submit"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" \u4FDD\u5B58\u914D\u7F6E ")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  var PagesTabbarSwqSwq = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "D:/Documents/HBuilderProjects/jiongshui_app/pages/tabbar/Swq/Swq.vue"]]);
  const _sfc_main$1 = {
    __name: "Swj",
    setup(__props) {
      vue.onMounted(() => {
        AllData.Data_form.forEach((element, index) => {
          let data = UseGetDataForZiJie(element, AllData);
          if (data) {
            HexadecimalLists.array = data;
            data.forEach((i) => {
              Object.assign(yczList, { [i.name]: i.value });
            });
          }
        });
        formatAppLog("log", "at pages/tabbar/Swj/Swj.vue:373", HexadecimalLists.array, "HexadecimalList");
      });
      const HexadecimalLists = vue.reactive({ array: [] });
      const yczList = vue.reactive({ checked: true, ClearHistorical: false });
      function onSubmit() {
        let array1 = "";
        formatAppLog("log", "at pages/tabbar/Swj/Swj.vue:379", yczList, "yczList");
        HexadecimalLists.array.forEach((i) => {
          Object.keys(yczList).forEach((n) => {
            if (n === i.name) {
              array1 += stringToHex("" + yczList[n]);
            } else {
              array1 += i.value ? i.value : "";
            }
          });
          formatAppLog("log", "at pages/tabbar/Swj/Swj.vue:388", array1, "array1");
        });
      }
      return (_ctx, _cache) => {
        const _component_van_stepper = vue.resolveComponent("van-stepper");
        const _component_van_field = vue.resolveComponent("van-field");
        const _component_van_cell_group = vue.resolveComponent("van-cell-group");
        const _component_van_button = vue.resolveComponent("van-button");
        const _component_van_form = vue.resolveComponent("van-form");
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createVNode(_component_van_form, { onSubmit }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_van_cell_group, { inset: "" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "context_base" }, "\u6CB3\u9053\u7AD9\u70B9\u52A0\u62A5\u914D\u7F6E "),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingPeriod,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => yczList.reportingPeriod = $event),
                    label: "\u52A0\u62A5\u4E0A\u9608\u503C",
                    "input-align": "right",
                    placeholder: "m"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createElementVNode("text", { class: "stepper_text" }, "m"),
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingPeriod,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => yczList.reportingPeriod = $event),
                        "default-value": "0",
                        min: "0",
                        step: "0.01",
                        max: "99.99",
                        "decimal-length": 2,
                        "input-width": "80rpx",
                        theme: "round"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingPeriod1,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => yczList.reportingPeriod1 = $event),
                    label: "\u53D8\u5E45\u52A0\u62A5",
                    "input-align": "right",
                    placeholder: "m"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createElementVNode("text", { class: "stepper_text" }, "m(0\uFF1A\u5173\u95ED)"),
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingPeriod,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => yczList.reportingPeriod = $event),
                        "default-value": "0",
                        step: "0.01",
                        max: "99.99",
                        min: "0",
                        "decimal-length": 2,
                        "input-width": "80rpx",
                        theme: "round"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createElementVNode("view", { class: "context_base info" }, "\u7A98\u4E95\u7AD9\u70B9\u52A0\u62A5\u914D\u7F6E"),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingPeriod,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => yczList.reportingPeriod = $event),
                    label: "\u52A0\u62A5\u62A5\u5468\u671F1",
                    "input-align": "right",
                    placeholder: "\u5206\u949F"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingPeriod,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => yczList.reportingPeriod = $event),
                        min: "1",
                        theme: "round",
                        max: "1440",
                        "decimal-length": 1,
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "\u5206\u949F")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingCJB,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => yczList.reportingCJB = $event),
                    label: "\u52A0\u62A5\u62A5\u62A5\u91C7\u96C6\u5468\u671F1",
                    "input-align": "right",
                    placeholder: "\u5206\u949F",
                    "label-width": "300rpx"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingCJB,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => yczList.reportingCJB = $event),
                        min: "1",
                        theme: "round",
                        max: "1440",
                        "decimal-length": 1,
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "\u5206\u949F")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingXQF,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => yczList.reportingXQF = $event),
                    label: "\u62A5\u8B66\u6C34\u4F4D1",
                    "input-align": "right",
                    placeholder: "\u5206\u949F"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingXQF,
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => yczList.reportingXQF = $event),
                        min: "1",
                        theme: "round",
                        max: "9999.99",
                        "decimal-length": 2,
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "m \u2003")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingCJZ,
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => yczList.reportingCJZ = $event),
                    label: "\u5B9A\u65F6\u62A5\u5468\u671F2",
                    "input-align": "right",
                    placeholder: "\u5206\u949F"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingCJZ,
                        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => yczList.reportingCJZ = $event),
                        min: "2",
                        theme: "round",
                        max: "1440",
                        "decimal-length": 1,
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "\u5206\u949F")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingCJZ,
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => yczList.reportingCJZ = $event),
                    label: "\u5B9A\u65F6\u62A5\u91C7\u96C6\u5468\u671F2",
                    "input-align": "right",
                    placeholder: "\u5206\u949F"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingCJZ,
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => yczList.reportingCJZ = $event),
                        min: "2",
                        theme: "round",
                        max: "1440",
                        "decimal-length": 1,
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "\u5206\u949F")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingXQF,
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => yczList.reportingXQF = $event),
                    label: "\u62A5\u8B66\u6C34\u4F4D2",
                    "input-align": "right",
                    placeholder: "\u5206\u949F"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingXQF,
                        "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => yczList.reportingXQF = $event),
                        min: "2",
                        theme: "round",
                        max: "9999.99",
                        "decimal-length": 2,
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "m\u2003")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingCJZ,
                    "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => yczList.reportingCJZ = $event),
                    label: "\u5B9A\u65F6\u62A5\u5468\u671F3",
                    "input-align": "right",
                    placeholder: "\u5206\u949F"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingCJZ,
                        "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => yczList.reportingCJZ = $event),
                        min: "3",
                        theme: "round",
                        max: "1440",
                        "decimal-length": 1,
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "\u5206\u949F")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingCJZ,
                    "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => yczList.reportingCJZ = $event),
                    label: "\u5B9A\u65F6\u62A5\u91C7\u96C6\u5468\u671F3",
                    "input-align": "right",
                    placeholder: "\u5206\u949F",
                    "label-width": "300rpx"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingCJZ,
                        "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => yczList.reportingCJZ = $event),
                        min: "3",
                        theme: "round",
                        max: "1440",
                        "decimal-length": 1,
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "\u5206\u949F")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createElementVNode("view", { class: "context_base info" }, "WGN5/WGN6\u914D\u7F6E"),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingCJZ,
                    "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => yczList.reportingCJZ = $event),
                    label: "\u5C0F\u96F7\u8FBE\u589E\u76CA",
                    "input-align": "right",
                    placeholder: "\u5206\u949F",
                    "label-width": "300rpx"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingCJZ,
                        "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => yczList.reportingCJZ = $event),
                        min: "1",
                        theme: "round",
                        max: "100",
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingCJZ,
                    "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => yczList.reportingCJZ = $event),
                    label: "\u5927\u96F7\u8FBE\u529F\u7387",
                    "input-align": "right",
                    placeholder: "\u5206\u949F",
                    "label-width": "300rpx"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingCJZ,
                        "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => yczList.reportingCJZ = $event),
                        min: "0",
                        theme: "round",
                        max: "50",
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingCJZ,
                    "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => yczList.reportingCJZ = $event),
                    label: "\u5927\u96F7\u8FBENP",
                    "input-align": "right",
                    placeholder: "\u5206\u949F",
                    "label-width": "300rpx"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingCJZ,
                        "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => yczList.reportingCJZ = $event),
                        min: "0",
                        theme: "round",
                        max: "200",
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createElementVNode("view", { class: "context_base info" }, "\u7A98\u4E95\u6C34\u4F4D\u8BA1\u8BBE\u7F6E"),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingXQF,
                    "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => yczList.reportingXQF = $event),
                    label: "\u4E95\u76D6\u9AD8\u7A0B",
                    "input-align": "right",
                    placeholder: "m"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingXQF,
                        "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => yczList.reportingXQF = $event),
                        min: "-9999.99",
                        theme: "round",
                        max: "9999.99",
                        "decimal-length": 2,
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "m")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingXQF,
                    "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => yczList.reportingXQF = $event),
                    label: "\u4E95\u4F4E\u9AD8\u7A0B",
                    "input-align": "right",
                    placeholder: "m"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingXQF,
                        "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => yczList.reportingXQF = $event),
                        min: "-9999.99",
                        theme: "round",
                        max: "9999.99",
                        "decimal-length": 2,
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "m")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingXQF,
                    "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => yczList.reportingXQF = $event),
                    label: "\u7BA1\u4F4E\u9AD8\u7A0B",
                    "input-align": "right",
                    placeholder: "m"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingXQF,
                        "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => yczList.reportingXQF = $event),
                        min: "-9999.99",
                        theme: "round",
                        max: "9999.99",
                        "decimal-length": 2,
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "m")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingXQF,
                    "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => yczList.reportingXQF = $event),
                    label: "\u76F2\u8865\u8DDD\u79BB",
                    "input-align": "right",
                    placeholder: "m"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingXQF,
                        "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => yczList.reportingXQF = $event),
                        min: "-99.99",
                        theme: "round",
                        max: "99.99",
                        "decimal-length": 2,
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "m")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.reportingXQF,
                    "onUpdate:modelValue": _cache[35] || (_cache[35] = ($event) => yczList.reportingXQF = $event),
                    label: "\u4FEE\u6B63\u503C",
                    "input-align": "right",
                    placeholder: "m"
                  }, {
                    input: vue.withCtx(() => [
                      vue.createVNode(_component_van_stepper, {
                        modelValue: yczList.reportingXQF,
                        "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => yczList.reportingXQF = $event),
                        min: "-99.99",
                        theme: "round",
                        max: "99.99",
                        "decimal-length": 2,
                        "input-width": "80rpx"
                      }, null, 8, ["modelValue"]),
                      vue.createElementVNode("text", { class: "stepper_text" }, "m")
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.TelNumber,
                    "onUpdate:modelValue": _cache[36] || (_cache[36] = ($event) => yczList.TelNumber = $event),
                    name: "\u7528\u6237\u540D/\u7AD9\u7801",
                    label: "\u7528\u6237\u540D/\u7AD9\u7801",
                    placeholder: "\u7528\u6237\u540D/\u7AD9\u7801"
                  }, null, 8, ["modelValue"]),
                  vue.createVNode(_component_van_field, {
                    modelValue: yczList.password,
                    "onUpdate:modelValue": _cache[37] || (_cache[37] = ($event) => yczList.password = $event),
                    name: "\u5BC6\u7801",
                    label: "\u5BC6\u7801",
                    placeholder: "\u5BC6\u7801"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              vue.createElementVNode("div", { style: { "margin": "23rpx" } }, [
                vue.createVNode(_component_van_button, {
                  round: "",
                  block: "",
                  type: "primary",
                  "native-type": "submit"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" \u4FDD\u5B58\u914D\u7F6E ")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  var PagesTabbarSwjSwj = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "D:/Documents/HBuilderProjects/jiongshui_app/pages/tabbar/Swj/Swj.vue"]]);
  __definePage("pages/tabbar/home/index", PagesTabbarHomeIndex);
  __definePage("pages/tabbar/ycz/ycz", PagesTabbarYczYcz);
  __definePage("pages/tabbar/Cgq/Cgq", PagesTabbarCgqCgq);
  __definePage("pages/tabbar/Swq/Swq", PagesTabbarSwqSwq);
  __definePage("pages/tabbar/Swj/Swj", PagesTabbarSwjSwj);
  const _sfc_main = {
    onLaunch: function() {
      setTimeout(() => {
        uni.setTabBarBadge({
          index: 1,
          text: "31"
        });
        uni.showTabBarRedDot({
          index: 3
        });
      }, 1e3);
    },
    onShow: function() {
    },
    onHide: function() {
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Documents/HBuilderProjects/jiongshui_app/App.vue"]]);
  const isDef = (val) => val !== void 0 && val !== null;
  const isFunction = (val) => typeof val === "function";
  const isObject = (val) => val !== null && typeof val === "object";
  const isPromise = (val) => isObject(val) && isFunction(val.then) && isFunction(val.catch);
  const isNumeric = (val) => typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
  const isIOS$1 = () => inBrowser$1 ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;
  function noop() {
  }
  const extend = Object.assign;
  const inBrowser$1 = typeof window !== "undefined";
  function get(object, path) {
    const keys = path.split(".");
    let result = object;
    keys.forEach((key) => {
      var _a;
      result = isObject(result) ? (_a = result[key]) != null ? _a : "" : "";
    });
    return result;
  }
  function pick(obj, keys, ignoreUndefined) {
    return keys.reduce((ret, key) => {
      if (!ignoreUndefined || obj[key] !== void 0) {
        ret[key] = obj[key];
      }
      return ret;
    }, {});
  }
  const isSameValue = (newValue, oldValue) => JSON.stringify(newValue) === JSON.stringify(oldValue);
  const toArray = (item) => Array.isArray(item) ? item : [item];
  const unknownProp = null;
  const numericProp = [Number, String];
  const truthProp = {
    type: Boolean,
    default: true
  };
  const makeRequiredProp = (type) => ({
    type,
    required: true
  });
  const makeArrayProp = () => ({
    type: Array,
    default: () => []
  });
  const makeNumericProp = (defaultVal) => ({
    type: numericProp,
    default: defaultVal
  });
  const makeStringProp = (defaultVal) => ({
    type: String,
    default: defaultVal
  });
  var inBrowser = typeof window !== "undefined";
  function raf(fn) {
    return inBrowser ? requestAnimationFrame(fn) : -1;
  }
  function doubleRaf(fn) {
    raf(() => raf(fn));
  }
  var isWindow = (val) => val === window;
  var makeDOMRect = (width2, height2) => ({
    top: 0,
    left: 0,
    right: width2,
    bottom: height2,
    width: width2,
    height: height2
  });
  var useRect = (elementOrRef) => {
    const element = vue.unref(elementOrRef);
    if (isWindow(element)) {
      const width2 = element.innerWidth;
      const height2 = element.innerHeight;
      return makeDOMRect(width2, height2);
    }
    if (element == null ? void 0 : element.getBoundingClientRect) {
      return element.getBoundingClientRect();
    }
    return makeDOMRect(0, 0);
  };
  function useParent(key) {
    const parent = vue.inject(key, null);
    if (parent) {
      const instance = vue.getCurrentInstance();
      const { link, unlink, internalChildren } = parent;
      link(instance);
      vue.onUnmounted(() => unlink(instance));
      const index = vue.computed(() => internalChildren.indexOf(instance));
      return {
        parent,
        index
      };
    }
    return {
      parent: null,
      index: vue.ref(-1)
    };
  }
  function flattenVNodes(children) {
    const result = [];
    const traverse = (children2) => {
      if (Array.isArray(children2)) {
        children2.forEach((child) => {
          var _a;
          if (vue.isVNode(child)) {
            result.push(child);
            if ((_a = child.component) == null ? void 0 : _a.subTree) {
              result.push(child.component.subTree);
              traverse(child.component.subTree.children);
            }
            if (child.children) {
              traverse(child.children);
            }
          }
        });
      }
    };
    traverse(children);
    return result;
  }
  var findVNodeIndex = (vnodes, vnode) => {
    const index = vnodes.indexOf(vnode);
    if (index === -1) {
      return vnodes.findIndex((item) => vnode.key !== void 0 && vnode.key !== null && item.type === vnode.type && item.key === vnode.key);
    }
    return index;
  };
  function sortChildren(parent, publicChildren, internalChildren) {
    const vnodes = flattenVNodes(parent.subTree.children);
    internalChildren.sort((a, b) => findVNodeIndex(vnodes, a.vnode) - findVNodeIndex(vnodes, b.vnode));
    const orderedPublicChildren = internalChildren.map((item) => item.proxy);
    publicChildren.sort((a, b) => {
      const indexA = orderedPublicChildren.indexOf(a);
      const indexB = orderedPublicChildren.indexOf(b);
      return indexA - indexB;
    });
  }
  function useChildren(key) {
    const publicChildren = vue.reactive([]);
    const internalChildren = vue.reactive([]);
    const parent = vue.getCurrentInstance();
    const linkChildren = (value) => {
      const link = (child) => {
        if (child.proxy) {
          internalChildren.push(child);
          publicChildren.push(child.proxy);
          sortChildren(parent, publicChildren, internalChildren);
        }
      };
      const unlink = (child) => {
        const index = internalChildren.indexOf(child);
        publicChildren.splice(index, 1);
        internalChildren.splice(index, 1);
      };
      vue.provide(key, Object.assign({
        link,
        unlink,
        children: publicChildren,
        internalChildren
      }, value));
    };
    return {
      children: publicChildren,
      linkChildren
    };
  }
  function onMountedOrActivated(hook) {
    let mounted;
    vue.onMounted(() => {
      hook();
      vue.nextTick(() => {
        mounted = true;
      });
    });
    vue.onActivated(() => {
      if (mounted) {
        hook();
      }
    });
  }
  function useEventListener(type, listener, options = {}) {
    if (!inBrowser) {
      return;
    }
    const { target = window, passive = false, capture = false } = options;
    let cleaned = false;
    let attached;
    const add = (target2) => {
      if (cleaned) {
        return;
      }
      const element = vue.unref(target2);
      if (element && !attached) {
        element.addEventListener(type, listener, {
          capture,
          passive
        });
        attached = true;
      }
    };
    const remove = (target2) => {
      if (cleaned) {
        return;
      }
      const element = vue.unref(target2);
      if (element && attached) {
        element.removeEventListener(type, listener, capture);
        attached = false;
      }
    };
    vue.onUnmounted(() => remove(target));
    vue.onDeactivated(() => remove(target));
    onMountedOrActivated(() => add(target));
    let stopWatch;
    if (vue.isRef(target)) {
      stopWatch = vue.watch(target, (val, oldVal) => {
        remove(oldVal);
        add(val);
      });
    }
    return () => {
      stopWatch == null ? void 0 : stopWatch();
      remove(target);
      cleaned = true;
    };
  }
  var width;
  var height;
  function useWindowSize() {
    if (!width) {
      width = vue.ref(0);
      height = vue.ref(0);
      if (inBrowser) {
        const update = () => {
          width.value = window.innerWidth;
          height.value = window.innerHeight;
        };
        update();
        window.addEventListener("resize", update, { passive: true });
        window.addEventListener("orientationchange", update, { passive: true });
      }
    }
    return { width, height };
  }
  var overflowScrollReg = /scroll|auto|overlay/i;
  var defaultRoot = inBrowser ? window : void 0;
  function isElement(node) {
    const ELEMENT_NODE_TYPE = 1;
    return node.tagName !== "HTML" && node.tagName !== "BODY" && node.nodeType === ELEMENT_NODE_TYPE;
  }
  function getScrollParent(el, root = defaultRoot) {
    let node = el;
    while (node && node !== root && isElement(node)) {
      const { overflowY } = window.getComputedStyle(node);
      if (overflowScrollReg.test(overflowY)) {
        return node;
      }
      node = node.parentNode;
    }
    return root;
  }
  function useScrollParent(el, root = defaultRoot) {
    const scrollParent = vue.ref();
    vue.onMounted(() => {
      if (el.value) {
        scrollParent.value = getScrollParent(el.value, root);
      }
    });
    return scrollParent;
  }
  var visibility;
  function usePageVisibility() {
    if (!visibility) {
      visibility = vue.ref("visible");
      if (inBrowser) {
        const update = () => {
          visibility.value = document.hidden ? "hidden" : "visible";
        };
        update();
        window.addEventListener("visibilitychange", update);
      }
    }
    return visibility;
  }
  var CUSTOM_FIELD_INJECTION_KEY = Symbol("van-field");
  function useCustomFieldValue(customValue) {
    const field = vue.inject(CUSTOM_FIELD_INJECTION_KEY, null);
    if (field && !field.customValue.value) {
      field.customValue.value = customValue;
      vue.watch(customValue, () => {
        field.resetValidation();
        field.validateWithTrigger("onChange");
      });
    }
  }
  function getScrollTop(el) {
    const top = "scrollTop" in el ? el.scrollTop : el.pageYOffset;
    return Math.max(top, 0);
  }
  function setScrollTop(el, value) {
    if ("scrollTop" in el) {
      el.scrollTop = value;
    } else {
      el.scrollTo(el.scrollX, value);
    }
  }
  function getRootScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  function setRootScrollTop(value) {
    setScrollTop(window, value);
    setScrollTop(document.body, value);
  }
  function getElementTop(el, scroller) {
    if (el === window) {
      return 0;
    }
    const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
    return useRect(el).top + scrollTop;
  }
  const isIOS = isIOS$1();
  function resetScroll() {
    if (isIOS) {
      setRootScrollTop(getRootScrollTop());
    }
  }
  const stopPropagation = (event) => event.stopPropagation();
  function preventDefault(event, isStopPropagation) {
    if (typeof event.cancelable !== "boolean" || event.cancelable) {
      event.preventDefault();
    }
    if (isStopPropagation) {
      stopPropagation(event);
    }
  }
  function isHidden(elementRef) {
    const el = vue.unref(elementRef);
    if (!el) {
      return false;
    }
    const style = window.getComputedStyle(el);
    const hidden = style.display === "none";
    const parentHidden = el.offsetParent === null && style.position !== "fixed";
    return hidden || parentHidden;
  }
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  function addUnit(value) {
    if (isDef(value)) {
      return isNumeric(value) ? `${value}px` : String(value);
    }
    return void 0;
  }
  function getSizeStyle(originSize) {
    if (isDef(originSize)) {
      if (Array.isArray(originSize)) {
        return {
          width: addUnit(originSize[0]),
          height: addUnit(originSize[1])
        };
      }
      const size = addUnit(originSize);
      return {
        width: size,
        height: size
      };
    }
  }
  function getZIndexStyle(zIndex) {
    const style = {};
    if (zIndex !== void 0) {
      style.zIndex = +zIndex;
    }
    return style;
  }
  let rootFontSize;
  function getRootFontSize() {
    if (!rootFontSize) {
      const doc = document.documentElement;
      const fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
      rootFontSize = parseFloat(fontSize);
    }
    return rootFontSize;
  }
  function convertRem(value) {
    value = value.replace(/rem/g, "");
    return +value * getRootFontSize();
  }
  function convertVw(value) {
    value = value.replace(/vw/g, "");
    return +value * windowWidth.value / 100;
  }
  function convertVh(value) {
    value = value.replace(/vh/g, "");
    return +value * windowHeight.value / 100;
  }
  function unitToPx(value) {
    if (typeof value === "number") {
      return value;
    }
    if (inBrowser$1) {
      if (value.includes("rem")) {
        return convertRem(value);
      }
      if (value.includes("vw")) {
        return convertVw(value);
      }
      if (value.includes("vh")) {
        return convertVh(value);
      }
    }
    return parseFloat(value);
  }
  const camelizeRE = /-(\w)/g;
  const camelize = (str) => str.replace(camelizeRE, (_, c) => c.toUpperCase());
  const kebabCase = (str) => str.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
  function padZero(num, targetLength = 2) {
    let str = num + "";
    while (str.length < targetLength) {
      str = "0" + str;
    }
    return str;
  }
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
  function trimExtraChar(value, char, regExp) {
    const index = value.indexOf(char);
    if (index === -1) {
      return value;
    }
    if (char === "-" && index !== 0) {
      return value.slice(0, index);
    }
    return value.slice(0, index + 1) + value.slice(index).replace(regExp, "");
  }
  function formatNumber(value, allowDot = true, allowMinus = true) {
    if (allowDot) {
      value = trimExtraChar(value, ".", /\./g);
    } else {
      value = value.split(".")[0];
    }
    if (allowMinus) {
      value = trimExtraChar(value, "-", /-/g);
    } else {
      value = value.replace(/-/, "");
    }
    const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
    return value.replace(regExp, "");
  }
  function addNumber(num1, num2) {
    const cardinal = 10 ** 10;
    return Math.round((num1 + num2) * cardinal) / cardinal;
  }
  const { hasOwnProperty } = Object.prototype;
  function assignKey(to, from, key) {
    const val = from[key];
    if (!isDef(val)) {
      return;
    }
    if (!hasOwnProperty.call(to, key) || !isObject(val)) {
      to[key] = val;
    } else {
      to[key] = deepAssign(Object(to[key]), val);
    }
  }
  function deepAssign(to, from) {
    Object.keys(from).forEach((key) => {
      assignKey(to, from, key);
    });
    return to;
  }
  var stdin_default$o = {
    name: "\u59D3\u540D",
    tel: "\u7535\u8BDD",
    save: "\u4FDD\u5B58",
    confirm: "\u786E\u8BA4",
    cancel: "\u53D6\u6D88",
    delete: "\u5220\u9664",
    loading: "\u52A0\u8F7D\u4E2D...",
    noCoupon: "\u6682\u65E0\u4F18\u60E0\u5238",
    nameEmpty: "\u8BF7\u586B\u5199\u59D3\u540D",
    addContact: "\u6DFB\u52A0\u8054\u7CFB\u4EBA",
    telInvalid: "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",
    vanCalendar: {
      end: "\u7ED3\u675F",
      start: "\u5F00\u59CB",
      title: "\u65E5\u671F\u9009\u62E9",
      weekdays: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
      monthTitle: (year, month) => `${year}\u5E74${month}\u6708`,
      rangePrompt: (maxRange) => `\u6700\u591A\u9009\u62E9 ${maxRange} \u5929`
    },
    vanCascader: {
      select: "\u8BF7\u9009\u62E9"
    },
    vanPagination: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    },
    vanPullRefresh: {
      pulling: "\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",
      loosing: "\u91CA\u653E\u5373\u53EF\u5237\u65B0..."
    },
    vanSubmitBar: {
      label: "\u5408\u8BA1:"
    },
    vanCoupon: {
      unlimited: "\u65E0\u95E8\u69DB",
      discount: (discount) => `${discount}\u6298`,
      condition: (condition) => `\u6EE1${condition}\u5143\u53EF\u7528`
    },
    vanCouponCell: {
      title: "\u4F18\u60E0\u5238",
      count: (count) => `${count}\u5F20\u53EF\u7528`
    },
    vanCouponList: {
      exchange: "\u5151\u6362",
      close: "\u4E0D\u4F7F\u7528",
      enable: "\u53EF\u7528",
      disabled: "\u4E0D\u53EF\u7528",
      placeholder: "\u8F93\u5165\u4F18\u60E0\u7801"
    },
    vanAddressEdit: {
      area: "\u5730\u533A",
      areaEmpty: "\u8BF7\u9009\u62E9\u5730\u533A",
      addressEmpty: "\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",
      addressDetail: "\u8BE6\u7EC6\u5730\u5740",
      defaultAddress: "\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"
    },
    vanAddressList: {
      add: "\u65B0\u589E\u5730\u5740"
    }
  };
  const lang = vue.ref("zh-CN");
  const messages = vue.reactive({
    "zh-CN": stdin_default$o
  });
  const Locale = {
    messages() {
      return messages[lang.value];
    },
    use(newLang, newMessages) {
      lang.value = newLang;
      this.add({ [newLang]: newMessages });
    },
    add(newMessages = {}) {
      deepAssign(messages, newMessages);
    }
  };
  var stdin_default$n = Locale;
  function createTranslate(name2) {
    const prefix = camelize(name2) + ".";
    return (path, ...args) => {
      const messages2 = stdin_default$n.messages();
      const message = get(messages2, prefix + path) || get(messages2, path);
      return isFunction(message) ? message(...args) : message;
    };
  }
  function genBem(name2, mods) {
    if (!mods) {
      return "";
    }
    if (typeof mods === "string") {
      return ` ${name2}--${mods}`;
    }
    if (Array.isArray(mods)) {
      return mods.reduce((ret, item) => ret + genBem(name2, item), "");
    }
    return Object.keys(mods).reduce((ret, key) => ret + (mods[key] ? genBem(name2, key) : ""), "");
  }
  function createBEM(name2) {
    return (el, mods) => {
      if (el && typeof el !== "string") {
        mods = el;
        el = "";
      }
      el = el ? `${name2}__${el}` : name2;
      return `${el}${genBem(el, mods)}`;
    };
  }
  function createNamespace(name2) {
    const prefixedName = `van-${name2}`;
    return [
      prefixedName,
      createBEM(prefixedName),
      createTranslate(prefixedName)
    ];
  }
  const BORDER = "van-hairline";
  const BORDER_SURROUND = `${BORDER}--surround`;
  const BORDER_TOP_BOTTOM = `${BORDER}--top-bottom`;
  const BORDER_UNSET_TOP_BOTTOM = `${BORDER}-unset--top-bottom`;
  const HAPTICS_FEEDBACK = "van-haptics-feedback";
  const FORM_KEY = Symbol("van-form");
  const LONG_PRESS_START_TIME = 500;
  function callInterceptor(interceptor, {
    args = [],
    done,
    canceled
  }) {
    if (interceptor) {
      const returnVal = interceptor.apply(null, args);
      if (isPromise(returnVal)) {
        returnVal.then((value) => {
          if (value) {
            done();
          } else if (canceled) {
            canceled();
          }
        }).catch(noop);
      } else if (returnVal) {
        done();
      } else if (canceled) {
        canceled();
      }
    } else {
      done();
    }
  }
  function withInstall(options) {
    options.install = (app) => {
      const { name: name2 } = options;
      if (name2) {
        app.component(name2, options);
        app.component(camelize(`-${name2}`), options);
      }
    };
    return options;
  }
  const POPUP_TOGGLE_KEY = Symbol();
  function onPopupReopen(callback) {
    const popupToggleStatus = vue.inject(POPUP_TOGGLE_KEY, null);
    if (popupToggleStatus) {
      vue.watch(popupToggleStatus, (show) => {
        if (show) {
          callback();
        }
      });
    }
  }
  function useExpose(apis) {
    const instance = vue.getCurrentInstance();
    if (instance) {
      extend(instance.proxy, apis);
    }
  }
  const routeProps = {
    to: [String, Object],
    url: String,
    replace: Boolean
  };
  function route({
    to,
    url,
    replace,
    $router: router
  }) {
    if (to && router) {
      router[replace ? "replace" : "push"](to);
    } else if (url) {
      replace ? location.replace(url) : location.href = url;
    }
  }
  function useRoute() {
    const vm = vue.getCurrentInstance().proxy;
    return () => route(vm);
  }
  const [name$o, bem$m] = createNamespace("badge");
  const badgeProps = {
    dot: Boolean,
    max: numericProp,
    tag: makeStringProp("div"),
    color: String,
    offset: Array,
    content: numericProp,
    showZero: truthProp,
    position: makeStringProp("top-right")
  };
  var stdin_default$m = vue.defineComponent({
    name: name$o,
    props: badgeProps,
    setup(props, {
      slots
    }) {
      const hasContent = () => {
        if (slots.content) {
          return true;
        }
        const {
          content,
          showZero
        } = props;
        return isDef(content) && content !== "" && (showZero || content !== 0 && content !== "0");
      };
      const renderContent = () => {
        const {
          dot,
          max,
          content
        } = props;
        if (!dot && hasContent()) {
          if (slots.content) {
            return slots.content();
          }
          if (isDef(max) && isNumeric(content) && +content > max) {
            return `${max}+`;
          }
          return content;
        }
      };
      const getOffsetWithMinusString = (val) => val.startsWith("-") ? val.replace("-", "") : `-${val}`;
      const style = vue.computed(() => {
        const style2 = {
          background: props.color
        };
        if (props.offset) {
          const [x, y] = props.offset;
          const {
            position
          } = props;
          const [offsetY, offsetX] = position.split("-");
          if (slots.default) {
            if (typeof y === "number") {
              style2[offsetY] = addUnit(offsetY === "top" ? y : -y);
            } else {
              style2[offsetY] = offsetY === "top" ? addUnit(y) : getOffsetWithMinusString(y);
            }
            if (typeof x === "number") {
              style2[offsetX] = addUnit(offsetX === "left" ? x : -x);
            } else {
              style2[offsetX] = offsetX === "left" ? addUnit(x) : getOffsetWithMinusString(x);
            }
          } else {
            style2.marginTop = addUnit(y);
            style2.marginLeft = addUnit(x);
          }
        }
        return style2;
      });
      const renderBadge = () => {
        if (hasContent() || props.dot) {
          return vue.createVNode("div", {
            "class": bem$m([props.position, {
              dot: props.dot,
              fixed: !!slots.default
            }]),
            "style": style.value
          }, [renderContent()]);
        }
      };
      return () => {
        if (slots.default) {
          const {
            tag
          } = props;
          return vue.createVNode(tag, {
            "class": bem$m("wrapper")
          }, {
            default: () => [slots.default(), renderBadge()]
          });
        }
        return renderBadge();
      };
    }
  });
  const Badge = withInstall(stdin_default$m);
  let globalZIndex = 2e3;
  const useGlobalZIndex = () => ++globalZIndex;
  const setGlobalZIndex = (val) => {
    globalZIndex = val;
  };
  const [name$n, bem$l] = createNamespace("config-provider");
  const CONFIG_PROVIDER_KEY = Symbol(name$n);
  const configProviderProps = {
    tag: makeStringProp("div"),
    theme: makeStringProp("light"),
    zIndex: Number,
    themeVars: Object,
    themeVarsDark: Object,
    themeVarsLight: Object,
    iconPrefix: String
  };
  function mapThemeVarsToCSSVars(themeVars) {
    const cssVars = {};
    Object.keys(themeVars).forEach((key) => {
      cssVars[`--van-${kebabCase(key)}`] = themeVars[key];
    });
    return cssVars;
  }
  vue.defineComponent({
    name: name$n,
    props: configProviderProps,
    setup(props, {
      slots
    }) {
      const style = vue.computed(() => mapThemeVarsToCSSVars(extend({}, props.themeVars, props.theme === "dark" ? props.themeVarsDark : props.themeVarsLight)));
      if (inBrowser$1) {
        const addTheme = () => {
          document.documentElement.classList.add(`van-theme-${props.theme}`);
        };
        const removeTheme = (theme = props.theme) => {
          document.documentElement.classList.remove(`van-theme-${theme}`);
        };
        vue.watch(() => props.theme, (newVal, oldVal) => {
          if (oldVal) {
            removeTheme(oldVal);
          }
          addTheme();
        }, {
          immediate: true
        });
        vue.onActivated(addTheme);
        vue.onDeactivated(removeTheme);
        vue.onBeforeUnmount(removeTheme);
      }
      vue.provide(CONFIG_PROVIDER_KEY, props);
      vue.watchEffect(() => {
        if (props.zIndex !== void 0) {
          setGlobalZIndex(props.zIndex);
        }
      });
      return () => vue.createVNode(props.tag, {
        "class": bem$l(),
        "style": style.value
      }, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    }
  });
  const [name$m, bem$k] = createNamespace("icon");
  const isImage = (name2) => name2 == null ? void 0 : name2.includes("/");
  const iconProps = {
    dot: Boolean,
    tag: makeStringProp("i"),
    name: String,
    size: numericProp,
    badge: numericProp,
    color: String,
    badgeProps: Object,
    classPrefix: String
  };
  var stdin_default$l = vue.defineComponent({
    name: name$m,
    props: iconProps,
    setup(props, {
      slots
    }) {
      const config = vue.inject(CONFIG_PROVIDER_KEY, null);
      const classPrefix = vue.computed(() => props.classPrefix || (config == null ? void 0 : config.iconPrefix) || bem$k());
      return () => {
        const {
          tag,
          dot,
          name: name2,
          size,
          badge,
          color
        } = props;
        const isImageIcon = isImage(name2);
        return vue.createVNode(Badge, vue.mergeProps({
          "dot": dot,
          "tag": tag,
          "class": [classPrefix.value, isImageIcon ? "" : `${classPrefix.value}-${name2}`],
          "style": {
            color,
            fontSize: addUnit(size)
          },
          "content": badge
        }, props.badgeProps), {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots), isImageIcon && vue.createVNode("img", {
              "class": bem$k("image"),
              "src": name2
            }, null)];
          }
        });
      };
    }
  });
  const Icon = withInstall(stdin_default$l);
  const [name$l, bem$j] = createNamespace("loading");
  const SpinIcon = Array(12).fill(null).map((_, index) => vue.createVNode("i", {
    "class": bem$j("line", String(index + 1))
  }, null));
  const CircularIcon = vue.createVNode("svg", {
    "class": bem$j("circular"),
    "viewBox": "25 25 50 50"
  }, [vue.createVNode("circle", {
    "cx": "50",
    "cy": "50",
    "r": "20",
    "fill": "none"
  }, null)]);
  const loadingProps = {
    size: numericProp,
    type: makeStringProp("circular"),
    color: String,
    vertical: Boolean,
    textSize: numericProp,
    textColor: String
  };
  var stdin_default$k = vue.defineComponent({
    name: name$l,
    props: loadingProps,
    setup(props, {
      slots
    }) {
      const spinnerStyle = vue.computed(() => extend({
        color: props.color
      }, getSizeStyle(props.size)));
      const renderIcon = () => {
        const DefaultIcon = props.type === "spinner" ? SpinIcon : CircularIcon;
        return vue.createVNode("span", {
          "class": bem$j("spinner", props.type),
          "style": spinnerStyle.value
        }, [slots.icon ? slots.icon() : DefaultIcon]);
      };
      const renderText = () => {
        var _a;
        if (slots.default) {
          return vue.createVNode("span", {
            "class": bem$j("text"),
            "style": {
              fontSize: addUnit(props.textSize),
              color: (_a = props.textColor) != null ? _a : props.color
            }
          }, [slots.default()]);
        }
      };
      return () => {
        const {
          type,
          vertical
        } = props;
        return vue.createVNode("div", {
          "class": bem$j([type, {
            vertical
          }]),
          "aria-live": "polite",
          "aria-busy": true
        }, [renderIcon(), renderText()]);
      };
    }
  });
  const Loading = withInstall(stdin_default$k);
  const [name$k, bem$i] = createNamespace("button");
  const buttonProps = extend({}, routeProps, {
    tag: makeStringProp("button"),
    text: String,
    icon: String,
    type: makeStringProp("default"),
    size: makeStringProp("normal"),
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    nativeType: makeStringProp("button"),
    loadingSize: numericProp,
    loadingText: String,
    loadingType: String,
    iconPosition: makeStringProp("left")
  });
  var stdin_default$j = vue.defineComponent({
    name: name$k,
    props: buttonProps,
    emits: ["click"],
    setup(props, {
      emit,
      slots
    }) {
      const route2 = useRoute();
      const renderLoadingIcon = () => {
        if (slots.loading) {
          return slots.loading();
        }
        return vue.createVNode(Loading, {
          "size": props.loadingSize,
          "type": props.loadingType,
          "class": bem$i("loading")
        }, null);
      };
      const renderIcon = () => {
        if (props.loading) {
          return renderLoadingIcon();
        }
        if (slots.icon) {
          return vue.createVNode("div", {
            "class": bem$i("icon")
          }, [slots.icon()]);
        }
        if (props.icon) {
          return vue.createVNode(Icon, {
            "name": props.icon,
            "class": bem$i("icon"),
            "classPrefix": props.iconPrefix
          }, null);
        }
      };
      const renderText = () => {
        let text;
        if (props.loading) {
          text = props.loadingText;
        } else {
          text = slots.default ? slots.default() : props.text;
        }
        if (text) {
          return vue.createVNode("span", {
            "class": bem$i("text")
          }, [text]);
        }
      };
      const getStyle = () => {
        const {
          color,
          plain
        } = props;
        if (color) {
          const style = {
            color: plain ? color : "white"
          };
          if (!plain) {
            style.background = color;
          }
          if (color.includes("gradient")) {
            style.border = 0;
          } else {
            style.borderColor = color;
          }
          return style;
        }
      };
      const onClick = (event) => {
        if (props.loading) {
          preventDefault(event);
        } else if (!props.disabled) {
          emit("click", event);
          route2();
        }
      };
      return () => {
        const {
          tag,
          type,
          size,
          block,
          round,
          plain,
          square,
          loading,
          disabled,
          hairline,
          nativeType,
          iconPosition
        } = props;
        const classes = [bem$i([type, size, {
          plain,
          block,
          round,
          square,
          loading,
          disabled,
          hairline
        }]), {
          [BORDER_SURROUND]: hairline
        }];
        return vue.createVNode(tag, {
          "type": nativeType,
          "class": classes,
          "style": getStyle(),
          "disabled": disabled,
          "onClick": onClick
        }, {
          default: () => [vue.createVNode("div", {
            "class": bem$i("content")
          }, [iconPosition === "left" && renderIcon(), renderText(), iconPosition === "right" && renderIcon()])]
        });
      };
    }
  });
  const Button = withInstall(stdin_default$j);
  const popupSharedProps = {
    show: Boolean,
    zIndex: numericProp,
    overlay: truthProp,
    duration: numericProp,
    teleport: [String, Object],
    lockScroll: truthProp,
    lazyRender: truthProp,
    beforeClose: Function,
    overlayStyle: Object,
    overlayClass: unknownProp,
    transitionAppear: Boolean,
    closeOnClickOverlay: truthProp
  };
  function getDirection(x, y) {
    if (x > y) {
      return "horizontal";
    }
    if (y > x) {
      return "vertical";
    }
    return "";
  }
  function useTouch() {
    const startX = vue.ref(0);
    const startY = vue.ref(0);
    const deltaX = vue.ref(0);
    const deltaY = vue.ref(0);
    const offsetX = vue.ref(0);
    const offsetY = vue.ref(0);
    const direction = vue.ref("");
    const isVertical = () => direction.value === "vertical";
    const isHorizontal = () => direction.value === "horizontal";
    const reset = () => {
      deltaX.value = 0;
      deltaY.value = 0;
      offsetX.value = 0;
      offsetY.value = 0;
      direction.value = "";
    };
    const start = (event) => {
      reset();
      startX.value = event.touches[0].clientX;
      startY.value = event.touches[0].clientY;
    };
    const move = (event) => {
      const touch = event.touches[0];
      deltaX.value = (touch.clientX < 0 ? 0 : touch.clientX) - startX.value;
      deltaY.value = touch.clientY - startY.value;
      offsetX.value = Math.abs(deltaX.value);
      offsetY.value = Math.abs(deltaY.value);
      const LOCK_DIRECTION_DISTANCE = 10;
      if (!direction.value || offsetX.value < LOCK_DIRECTION_DISTANCE && offsetY.value < LOCK_DIRECTION_DISTANCE) {
        direction.value = getDirection(offsetX.value, offsetY.value);
      }
    };
    return {
      move,
      start,
      reset,
      startX,
      startY,
      deltaX,
      deltaY,
      offsetX,
      offsetY,
      direction,
      isVertical,
      isHorizontal
    };
  }
  let totalLockCount = 0;
  const BODY_LOCK_CLASS = "van-overflow-hidden";
  function useLockScroll(rootRef, shouldLock) {
    const touch = useTouch();
    const DIRECTION_UP = "01";
    const DIRECTION_DOWN = "10";
    const onTouchMove = (event) => {
      touch.move(event);
      const direction = touch.deltaY.value > 0 ? DIRECTION_DOWN : DIRECTION_UP;
      const el = getScrollParent(event.target, rootRef.value);
      const { scrollHeight, offsetHeight, scrollTop } = el;
      let status = "11";
      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? "00" : "01";
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = "10";
      }
      if (status !== "11" && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
        preventDefault(event, true);
      }
    };
    const lock = () => {
      document.addEventListener("touchstart", touch.start);
      document.addEventListener("touchmove", onTouchMove, { passive: false });
      if (!totalLockCount) {
        document.body.classList.add(BODY_LOCK_CLASS);
      }
      totalLockCount++;
    };
    const unlock = () => {
      if (totalLockCount) {
        document.removeEventListener("touchstart", touch.start);
        document.removeEventListener("touchmove", onTouchMove);
        totalLockCount--;
        if (!totalLockCount) {
          document.body.classList.remove(BODY_LOCK_CLASS);
        }
      }
    };
    const init = () => shouldLock() && lock();
    const destroy = () => shouldLock() && unlock();
    onMountedOrActivated(init);
    vue.onDeactivated(destroy);
    vue.onBeforeUnmount(destroy);
    vue.watch(shouldLock, (value) => {
      value ? lock() : unlock();
    });
  }
  function useLazyRender(show) {
    const inited = vue.ref(false);
    vue.watch(show, (value) => {
      if (value) {
        inited.value = value;
      }
    }, { immediate: true });
    return (render) => () => inited.value ? render() : null;
  }
  const [name$j, bem$h] = createNamespace("overlay");
  const overlayProps = {
    show: Boolean,
    zIndex: numericProp,
    duration: numericProp,
    className: unknownProp,
    lockScroll: truthProp,
    lazyRender: truthProp,
    customStyle: Object
  };
  var stdin_default$i = vue.defineComponent({
    name: name$j,
    props: overlayProps,
    setup(props, {
      slots
    }) {
      const root = vue.ref();
      const lazyRender = useLazyRender(() => props.show || !props.lazyRender);
      const onTouchMove = (event) => {
        if (props.lockScroll) {
          preventDefault(event, true);
        }
      };
      const renderOverlay = lazyRender(() => {
        var _a;
        const style = extend(getZIndexStyle(props.zIndex), props.customStyle);
        if (isDef(props.duration)) {
          style.animationDuration = `${props.duration}s`;
        }
        return vue.withDirectives(vue.createVNode("div", {
          "ref": root,
          "style": style,
          "class": [bem$h(), props.className]
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[vue.vShow, props.show]]);
      });
      useEventListener("touchmove", onTouchMove, {
        target: root
      });
      return () => vue.createVNode(vue.Transition, {
        "name": "van-fade",
        "appear": true
      }, {
        default: renderOverlay
      });
    }
  });
  const Overlay = withInstall(stdin_default$i);
  const popupProps = extend({}, popupSharedProps, {
    round: Boolean,
    position: makeStringProp("center"),
    closeIcon: makeStringProp("cross"),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: makeStringProp("top-right"),
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean
  });
  const [name$i, bem$g] = createNamespace("popup");
  var stdin_default$h = vue.defineComponent({
    name: name$i,
    inheritAttrs: false,
    props: popupProps,
    emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
    setup(props, {
      emit,
      attrs,
      slots
    }) {
      let opened;
      let shouldReopen;
      const zIndex = vue.ref();
      const popupRef = vue.ref();
      const lazyRender = useLazyRender(() => props.show || !props.lazyRender);
      const style = vue.computed(() => {
        const style2 = {
          zIndex: zIndex.value
        };
        if (isDef(props.duration)) {
          const key = props.position === "center" ? "animationDuration" : "transitionDuration";
          style2[key] = `${props.duration}s`;
        }
        return style2;
      });
      const open = () => {
        if (!opened) {
          opened = true;
          zIndex.value = props.zIndex !== void 0 ? +props.zIndex : useGlobalZIndex();
          emit("open");
        }
      };
      const close = () => {
        if (opened) {
          callInterceptor(props.beforeClose, {
            done() {
              opened = false;
              emit("close");
              emit("update:show", false);
            }
          });
        }
      };
      const onClickOverlay = (event) => {
        emit("clickOverlay", event);
        if (props.closeOnClickOverlay) {
          close();
        }
      };
      const renderOverlay = () => {
        if (props.overlay) {
          return vue.createVNode(Overlay, {
            "show": props.show,
            "class": props.overlayClass,
            "zIndex": zIndex.value,
            "duration": props.duration,
            "customStyle": props.overlayStyle,
            "role": props.closeOnClickOverlay ? "button" : void 0,
            "tabindex": props.closeOnClickOverlay ? 0 : void 0,
            "onClick": onClickOverlay
          }, {
            default: slots["overlay-content"]
          });
        }
      };
      const onClickCloseIcon = (event) => {
        emit("clickCloseIcon", event);
        close();
      };
      const renderCloseIcon = () => {
        if (props.closeable) {
          return vue.createVNode(Icon, {
            "role": "button",
            "tabindex": 0,
            "name": props.closeIcon,
            "class": [bem$g("close-icon", props.closeIconPosition), HAPTICS_FEEDBACK],
            "classPrefix": props.iconPrefix,
            "onClick": onClickCloseIcon
          }, null);
        }
      };
      const onOpened = () => emit("opened");
      const onClosed = () => emit("closed");
      const onKeydown = (event) => emit("keydown", event);
      const renderPopup = lazyRender(() => {
        var _a;
        const {
          round,
          position,
          safeAreaInsetTop,
          safeAreaInsetBottom
        } = props;
        return vue.withDirectives(vue.createVNode("div", vue.mergeProps({
          "ref": popupRef,
          "style": style.value,
          "role": "dialog",
          "tabindex": 0,
          "class": [bem$g({
            round,
            [position]: position
          }), {
            "van-safe-area-top": safeAreaInsetTop,
            "van-safe-area-bottom": safeAreaInsetBottom
          }],
          "onKeydown": onKeydown
        }, attrs), [(_a = slots.default) == null ? void 0 : _a.call(slots), renderCloseIcon()]), [[vue.vShow, props.show]]);
      });
      const renderTransition = () => {
        const {
          position,
          transition,
          transitionAppear
        } = props;
        const name2 = position === "center" ? "van-fade" : `van-popup-slide-${position}`;
        return vue.createVNode(vue.Transition, {
          "name": transition || name2,
          "appear": transitionAppear,
          "onAfterEnter": onOpened,
          "onAfterLeave": onClosed
        }, {
          default: renderPopup
        });
      };
      vue.watch(() => props.show, (show) => {
        if (show && !opened) {
          open();
          if (attrs.tabindex === 0) {
            vue.nextTick(() => {
              var _a;
              (_a = popupRef.value) == null ? void 0 : _a.focus();
            });
          }
        }
        if (!show && opened) {
          opened = false;
          emit("close");
        }
      });
      useExpose({
        popupRef
      });
      useLockScroll(popupRef, () => props.show && props.lockScroll);
      useEventListener("popstate", () => {
        if (props.closeOnPopstate) {
          close();
          shouldReopen = false;
        }
      });
      vue.onMounted(() => {
        if (props.show) {
          open();
        }
      });
      vue.onActivated(() => {
        if (shouldReopen) {
          emit("update:show", true);
          shouldReopen = false;
        }
      });
      vue.onDeactivated(() => {
        if (props.show && props.teleport) {
          close();
          shouldReopen = true;
        }
      });
      vue.provide(POPUP_TOGGLE_KEY, () => props.show);
      return () => {
        if (props.teleport) {
          return vue.createVNode(vue.Teleport, {
            "to": props.teleport
          }, {
            default: () => [renderOverlay(), renderTransition()]
          });
        }
        return vue.createVNode(vue.Fragment, null, [renderOverlay(), renderTransition()]);
      };
    }
  });
  const Popup = withInstall(stdin_default$h);
  const [name$h, bem$f, t] = createNamespace("picker");
  const getFirstEnabledOption = (options) => options.find((option) => !option.disabled) || options[0];
  function getColumnsType(columns, fields) {
    const firstColumn = columns[0];
    if (firstColumn) {
      if (Array.isArray(firstColumn)) {
        return "multiple";
      }
      if (fields.children in firstColumn) {
        return "cascade";
      }
    }
    return "default";
  }
  function findIndexOfEnabledOption(options, index) {
    index = clamp(index, 0, options.length);
    for (let i = index; i < options.length; i++) {
      if (!options[i].disabled)
        return i;
    }
    for (let i = index - 1; i >= 0; i--) {
      if (!options[i].disabled)
        return i;
    }
    return 0;
  }
  const isOptionExist = (options, value, fields) => value !== void 0 && !!options.find((option) => option[fields.value] === value);
  function findOptionByValue(options, value, fields) {
    const index = options.findIndex((option) => option[fields.value] === value);
    const enabledIndex = findIndexOfEnabledOption(options, index);
    return options[enabledIndex];
  }
  function formatCascadeColumns(columns, fields, selectedValues) {
    const formatted = [];
    let cursor = {
      [fields.children]: columns
    };
    let columnIndex = 0;
    while (cursor && cursor[fields.children]) {
      const options = cursor[fields.children];
      const value = selectedValues.value[columnIndex];
      cursor = isDef(value) ? findOptionByValue(options, value, fields) : void 0;
      if (!cursor && options.length) {
        const firstValue = getFirstEnabledOption(options)[fields.value];
        cursor = findOptionByValue(options, firstValue, fields);
      }
      columnIndex++;
      formatted.push(options);
    }
    return formatted;
  }
  function getElementTranslateY(element) {
    const { transform } = window.getComputedStyle(element);
    const translateY = transform.slice(7, transform.length - 1).split(", ")[5];
    return Number(translateY);
  }
  function assignDefaultFields(fields) {
    return extend({
      text: "text",
      value: "value",
      children: "children"
    }, fields);
  }
  const DEFAULT_DURATION = 200;
  const MOMENTUM_TIME = 300;
  const MOMENTUM_DISTANCE = 15;
  const [name$g, bem$e] = createNamespace("picker-column");
  const PICKER_KEY = Symbol(name$g);
  var stdin_default$g = vue.defineComponent({
    name: name$g,
    props: {
      value: numericProp,
      fields: makeRequiredProp(Object),
      options: makeArrayProp(),
      readonly: Boolean,
      allowHtml: Boolean,
      optionHeight: makeRequiredProp(Number),
      swipeDuration: makeRequiredProp(numericProp),
      visibleOptionNum: makeRequiredProp(numericProp)
    },
    emits: ["change", "clickOption"],
    setup(props, {
      emit,
      slots
    }) {
      let moving;
      let startOffset;
      let touchStartTime;
      let momentumOffset;
      let transitionEndTrigger;
      const root = vue.ref();
      const wrapper = vue.ref();
      const currentOffset = vue.ref(0);
      const currentDuration = vue.ref(0);
      const touch = useTouch();
      const count = () => props.options.length;
      const baseOffset = () => props.optionHeight * (+props.visibleOptionNum - 1) / 2;
      const updateValueByIndex = (index) => {
        const enabledIndex = findIndexOfEnabledOption(props.options, index);
        const offset = -enabledIndex * props.optionHeight;
        const trigger = () => {
          const value = props.options[enabledIndex][props.fields.value];
          if (value !== props.value) {
            emit("change", value);
          }
        };
        if (moving && offset !== currentOffset.value) {
          transitionEndTrigger = trigger;
        } else {
          trigger();
        }
        currentOffset.value = offset;
      };
      const isReadonly = () => props.readonly || !props.options.length;
      const onClickOption = (index) => {
        if (moving || isReadonly()) {
          return;
        }
        transitionEndTrigger = null;
        currentDuration.value = DEFAULT_DURATION;
        updateValueByIndex(index);
        emit("clickOption", props.options[index]);
      };
      const getIndexByOffset = (offset) => clamp(Math.round(-offset / props.optionHeight), 0, count() - 1);
      const momentum = (distance, duration) => {
        const speed = Math.abs(distance / duration);
        distance = currentOffset.value + speed / 3e-3 * (distance < 0 ? -1 : 1);
        const index = getIndexByOffset(distance);
        currentDuration.value = +props.swipeDuration;
        updateValueByIndex(index);
      };
      const stopMomentum = () => {
        moving = false;
        currentDuration.value = 0;
        if (transitionEndTrigger) {
          transitionEndTrigger();
          transitionEndTrigger = null;
        }
      };
      const onTouchStart = (event) => {
        if (isReadonly()) {
          return;
        }
        touch.start(event);
        if (moving) {
          const translateY = getElementTranslateY(wrapper.value);
          currentOffset.value = Math.min(0, translateY - baseOffset());
        }
        currentDuration.value = 0;
        startOffset = currentOffset.value;
        touchStartTime = Date.now();
        momentumOffset = startOffset;
        transitionEndTrigger = null;
      };
      const onTouchMove = (event) => {
        if (isReadonly()) {
          return;
        }
        touch.move(event);
        if (touch.isVertical()) {
          moving = true;
          preventDefault(event, true);
        }
        currentOffset.value = clamp(startOffset + touch.deltaY.value, -(count() * props.optionHeight), props.optionHeight);
        const now = Date.now();
        if (now - touchStartTime > MOMENTUM_TIME) {
          touchStartTime = now;
          momentumOffset = currentOffset.value;
        }
      };
      const onTouchEnd = () => {
        if (isReadonly()) {
          return;
        }
        const distance = currentOffset.value - momentumOffset;
        const duration = Date.now() - touchStartTime;
        const startMomentum = duration < MOMENTUM_TIME && Math.abs(distance) > MOMENTUM_DISTANCE;
        if (startMomentum) {
          momentum(distance, duration);
          return;
        }
        const index = getIndexByOffset(currentOffset.value);
        currentDuration.value = DEFAULT_DURATION;
        updateValueByIndex(index);
        setTimeout(() => {
          moving = false;
        }, 0);
      };
      const renderOptions = () => {
        const optionStyle = {
          height: `${props.optionHeight}px`
        };
        return props.options.map((option, index) => {
          const text = option[props.fields.text];
          const {
            disabled
          } = option;
          const value = option[props.fields.value];
          const data = {
            role: "button",
            style: optionStyle,
            tabindex: disabled ? -1 : 0,
            class: [bem$e("item", {
              disabled,
              selected: value === props.value
            }), option.className],
            onClick: () => onClickOption(index)
          };
          const childData = {
            class: "van-ellipsis",
            [props.allowHtml ? "innerHTML" : "textContent"]: text
          };
          return vue.createVNode("li", data, [slots.option ? slots.option(option) : vue.createVNode("div", childData, null)]);
        });
      };
      useParent(PICKER_KEY);
      useExpose({
        stopMomentum
      });
      vue.watchEffect(() => {
        const index = props.options.findIndex((option) => option[props.fields.value] === props.value);
        const enabledIndex = findIndexOfEnabledOption(props.options, index);
        const offset = -enabledIndex * props.optionHeight;
        currentOffset.value = offset;
      });
      useEventListener("touchmove", onTouchMove, {
        target: root
      });
      return () => vue.createVNode("div", {
        "ref": root,
        "class": bem$e(),
        "onTouchstartPassive": onTouchStart,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [vue.createVNode("ul", {
        "ref": wrapper,
        "style": {
          transform: `translate3d(0, ${currentOffset.value + baseOffset()}px, 0)`,
          transitionDuration: `${currentDuration.value}ms`,
          transitionProperty: currentDuration.value ? "all" : "none"
        },
        "class": bem$e("wrapper"),
        "onTransitionend": stopMomentum
      }, [renderOptions()])]);
    }
  });
  const [name$f] = createNamespace("picker-toolbar");
  const pickerToolbarProps = {
    title: String,
    cancelButtonText: String,
    confirmButtonText: String
  };
  const pickerToolbarSlots = ["cancel", "confirm", "title", "toolbar"];
  const pickerToolbarPropKeys = Object.keys(pickerToolbarProps);
  var stdin_default$f = vue.defineComponent({
    name: name$f,
    props: pickerToolbarProps,
    emits: ["confirm", "cancel"],
    setup(props, {
      emit,
      slots
    }) {
      const renderTitle = () => {
        if (slots.title) {
          return slots.title();
        }
        if (props.title) {
          return vue.createVNode("div", {
            "class": [bem$f("title"), "van-ellipsis"]
          }, [props.title]);
        }
      };
      const onCancel = () => emit("cancel");
      const onConfirm = () => emit("confirm");
      const renderCancel = () => {
        const text = props.cancelButtonText || t("cancel");
        return vue.createVNode("button", {
          "type": "button",
          "class": [bem$f("cancel"), HAPTICS_FEEDBACK],
          "onClick": onCancel
        }, [slots.cancel ? slots.cancel() : text]);
      };
      const renderConfirm = () => {
        const text = props.confirmButtonText || t("confirm");
        return vue.createVNode("button", {
          "type": "button",
          "class": [bem$f("confirm"), HAPTICS_FEEDBACK],
          "onClick": onConfirm
        }, [slots.confirm ? slots.confirm() : text]);
      };
      return () => vue.createVNode("div", {
        "class": bem$f("toolbar")
      }, [slots.toolbar ? slots.toolbar() : [renderCancel(), renderTitle(), renderConfirm()]]);
    }
  });
  function scrollLeftTo(scroller, to, duration) {
    let count = 0;
    const from = scroller.scrollLeft;
    const frames = duration === 0 ? 1 : Math.round(duration * 1e3 / 16);
    function animate() {
      scroller.scrollLeft += (to - from) / frames;
      if (++count < frames) {
        raf(animate);
      }
    }
    animate();
  }
  function scrollTopTo(scroller, to, duration, callback) {
    let current2 = getScrollTop(scroller);
    const isDown = current2 < to;
    const frames = duration === 0 ? 1 : Math.round(duration * 1e3 / 16);
    const step = (to - current2) / frames;
    function animate() {
      current2 += step;
      if (isDown && current2 > to || !isDown && current2 < to) {
        current2 = to;
      }
      setScrollTop(scroller, current2);
      if (isDown && current2 < to || !isDown && current2 > to) {
        raf(animate);
      } else if (callback) {
        raf(callback);
      }
    }
    animate();
  }
  let current = 0;
  function useId() {
    const vm = vue.getCurrentInstance();
    const { name: name2 = "unknown" } = (vm == null ? void 0 : vm.type) || {};
    return `${name2}-${++current}`;
  }
  function useRefs() {
    const refs = vue.ref([]);
    const cache = [];
    vue.onBeforeUpdate(() => {
      refs.value = [];
    });
    const setRefs = (index) => {
      if (!cache[index]) {
        cache[index] = (el) => {
          refs.value[index] = el;
        };
      }
      return cache[index];
    };
    return [refs, setRefs];
  }
  function useVisibilityChange(target, onChange) {
    if (!inBrowser$1 || !window.IntersectionObserver) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      onChange(entries[0].intersectionRatio > 0);
    }, { root: document.body });
    const observe = () => {
      if (target.value) {
        observer.observe(target.value);
      }
    };
    const unobserve = () => {
      if (target.value) {
        observer.unobserve(target.value);
      }
    };
    vue.onDeactivated(unobserve);
    vue.onBeforeUnmount(unobserve);
    onMountedOrActivated(observe);
  }
  const [name$e, bem$d] = createNamespace("sticky");
  const stickyProps = {
    zIndex: numericProp,
    position: makeStringProp("top"),
    container: Object,
    offsetTop: makeNumericProp(0),
    offsetBottom: makeNumericProp(0)
  };
  var stdin_default$e = vue.defineComponent({
    name: name$e,
    props: stickyProps,
    emits: ["scroll", "change"],
    setup(props, {
      emit,
      slots
    }) {
      const root = vue.ref();
      const scrollParent = useScrollParent(root);
      const state = vue.reactive({
        fixed: false,
        width: 0,
        height: 0,
        transform: 0
      });
      const offset = vue.computed(() => unitToPx(props.position === "top" ? props.offsetTop : props.offsetBottom));
      const rootStyle = vue.computed(() => {
        const {
          fixed,
          height: height2,
          width: width2
        } = state;
        if (fixed) {
          return {
            width: `${width2}px`,
            height: `${height2}px`
          };
        }
      });
      const stickyStyle = vue.computed(() => {
        if (!state.fixed) {
          return;
        }
        const style = extend(getZIndexStyle(props.zIndex), {
          width: `${state.width}px`,
          height: `${state.height}px`,
          [props.position]: `${offset.value}px`
        });
        if (state.transform) {
          style.transform = `translate3d(0, ${state.transform}px, 0)`;
        }
        return style;
      });
      const emitScroll = (scrollTop) => emit("scroll", {
        scrollTop,
        isFixed: state.fixed
      });
      const onScroll = () => {
        if (!root.value || isHidden(root)) {
          return;
        }
        const {
          container,
          position
        } = props;
        const rootRect = useRect(root);
        const scrollTop = getScrollTop(window);
        state.width = rootRect.width;
        state.height = rootRect.height;
        if (position === "top") {
          if (container) {
            const containerRect = useRect(container);
            const difference = containerRect.bottom - offset.value - state.height;
            state.fixed = offset.value > rootRect.top && containerRect.bottom > 0;
            state.transform = difference < 0 ? difference : 0;
          } else {
            state.fixed = offset.value > rootRect.top;
          }
        } else {
          const {
            clientHeight
          } = document.documentElement;
          if (container) {
            const containerRect = useRect(container);
            const difference = clientHeight - containerRect.top - offset.value - state.height;
            state.fixed = clientHeight - offset.value < rootRect.bottom && clientHeight > containerRect.top;
            state.transform = difference < 0 ? -difference : 0;
          } else {
            state.fixed = clientHeight - offset.value < rootRect.bottom;
          }
        }
        emitScroll(scrollTop);
      };
      vue.watch(() => state.fixed, (value) => emit("change", value));
      useEventListener("scroll", onScroll, {
        target: scrollParent,
        passive: true
      });
      useVisibilityChange(root, onScroll);
      return () => {
        var _a;
        return vue.createVNode("div", {
          "ref": root,
          "style": rootStyle.value
        }, [vue.createVNode("div", {
          "class": bem$d({
            fixed: state.fixed
          }),
          "style": stickyStyle.value
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
      };
    }
  });
  const Sticky = withInstall(stdin_default$e);
  const [name$d, bem$c] = createNamespace("tab");
  var stdin_default$d = vue.defineComponent({
    name: name$d,
    props: {
      id: String,
      dot: Boolean,
      type: String,
      color: String,
      title: String,
      badge: numericProp,
      shrink: Boolean,
      isActive: Boolean,
      disabled: Boolean,
      controls: String,
      scrollable: Boolean,
      activeColor: String,
      inactiveColor: String,
      showZeroBadge: truthProp
    },
    setup(props, {
      slots
    }) {
      const style = vue.computed(() => {
        const style2 = {};
        const {
          type,
          color,
          disabled,
          isActive,
          activeColor,
          inactiveColor
        } = props;
        const isCard = type === "card";
        if (color && isCard) {
          style2.borderColor = color;
          if (!disabled) {
            if (isActive) {
              style2.backgroundColor = color;
            } else {
              style2.color = color;
            }
          }
        }
        const titleColor = isActive ? activeColor : inactiveColor;
        if (titleColor) {
          style2.color = titleColor;
        }
        return style2;
      });
      const renderText = () => {
        const Text = vue.createVNode("span", {
          "class": bem$c("text", {
            ellipsis: !props.scrollable
          })
        }, [slots.title ? slots.title() : props.title]);
        if (props.dot || isDef(props.badge) && props.badge !== "") {
          return vue.createVNode(Badge, {
            "dot": props.dot,
            "content": props.badge,
            "showZero": props.showZeroBadge
          }, {
            default: () => [Text]
          });
        }
        return Text;
      };
      return () => vue.createVNode("div", {
        "id": props.id,
        "role": "tab",
        "class": [bem$c([props.type, {
          grow: props.scrollable && !props.shrink,
          shrink: props.shrink,
          active: props.isActive,
          disabled: props.disabled
        }])],
        "style": style.value,
        "tabindex": props.disabled ? void 0 : props.isActive ? 0 : -1,
        "aria-selected": props.isActive,
        "aria-disabled": props.disabled || void 0,
        "aria-controls": props.controls
      }, [renderText()]);
    }
  });
  const [name$c, bem$b] = createNamespace("swipe");
  const swipeProps = {
    loop: truthProp,
    width: numericProp,
    height: numericProp,
    vertical: Boolean,
    autoplay: makeNumericProp(0),
    duration: makeNumericProp(500),
    touchable: truthProp,
    lazyRender: Boolean,
    initialSwipe: makeNumericProp(0),
    indicatorColor: String,
    showIndicators: truthProp,
    stopPropagation: truthProp
  };
  const SWIPE_KEY = Symbol(name$c);
  var stdin_default$c = vue.defineComponent({
    name: name$c,
    props: swipeProps,
    emits: ["change", "dragStart", "dragEnd"],
    setup(props, {
      emit,
      slots
    }) {
      const root = vue.ref();
      const track = vue.ref();
      const state = vue.reactive({
        rect: null,
        width: 0,
        height: 0,
        offset: 0,
        active: 0,
        swiping: false
      });
      let dragging = false;
      const touch = useTouch();
      const {
        children,
        linkChildren
      } = useChildren(SWIPE_KEY);
      const count = vue.computed(() => children.length);
      const size = vue.computed(() => state[props.vertical ? "height" : "width"]);
      const delta = vue.computed(() => props.vertical ? touch.deltaY.value : touch.deltaX.value);
      const minOffset = vue.computed(() => {
        if (state.rect) {
          const base = props.vertical ? state.rect.height : state.rect.width;
          return base - size.value * count.value;
        }
        return 0;
      });
      const maxCount = vue.computed(() => size.value ? Math.ceil(Math.abs(minOffset.value) / size.value) : count.value);
      const trackSize = vue.computed(() => count.value * size.value);
      const activeIndicator = vue.computed(() => (state.active + count.value) % count.value);
      const isCorrectDirection = vue.computed(() => {
        const expect = props.vertical ? "vertical" : "horizontal";
        return touch.direction.value === expect;
      });
      const trackStyle = vue.computed(() => {
        const style = {
          transitionDuration: `${state.swiping ? 0 : props.duration}ms`,
          transform: `translate${props.vertical ? "Y" : "X"}(${state.offset}px)`
        };
        if (size.value) {
          const mainAxis = props.vertical ? "height" : "width";
          const crossAxis = props.vertical ? "width" : "height";
          style[mainAxis] = `${trackSize.value}px`;
          style[crossAxis] = props[crossAxis] ? `${props[crossAxis]}px` : "";
        }
        return style;
      });
      const getTargetActive = (pace) => {
        const {
          active
        } = state;
        if (pace) {
          if (props.loop) {
            return clamp(active + pace, -1, count.value);
          }
          return clamp(active + pace, 0, maxCount.value);
        }
        return active;
      };
      const getTargetOffset = (targetActive, offset = 0) => {
        let currentPosition = targetActive * size.value;
        if (!props.loop) {
          currentPosition = Math.min(currentPosition, -minOffset.value);
        }
        let targetOffset = offset - currentPosition;
        if (!props.loop) {
          targetOffset = clamp(targetOffset, minOffset.value, 0);
        }
        return targetOffset;
      };
      const move = ({
        pace = 0,
        offset = 0,
        emitChange
      }) => {
        if (count.value <= 1) {
          return;
        }
        const {
          active
        } = state;
        const targetActive = getTargetActive(pace);
        const targetOffset = getTargetOffset(targetActive, offset);
        if (props.loop) {
          if (children[0] && targetOffset !== minOffset.value) {
            const outRightBound = targetOffset < minOffset.value;
            children[0].setOffset(outRightBound ? trackSize.value : 0);
          }
          if (children[count.value - 1] && targetOffset !== 0) {
            const outLeftBound = targetOffset > 0;
            children[count.value - 1].setOffset(outLeftBound ? -trackSize.value : 0);
          }
        }
        state.active = targetActive;
        state.offset = targetOffset;
        if (emitChange && targetActive !== active) {
          emit("change", activeIndicator.value);
        }
      };
      const correctPosition = () => {
        state.swiping = true;
        if (state.active <= -1) {
          move({
            pace: count.value
          });
        } else if (state.active >= count.value) {
          move({
            pace: -count.value
          });
        }
      };
      const prev = () => {
        correctPosition();
        touch.reset();
        doubleRaf(() => {
          state.swiping = false;
          move({
            pace: -1,
            emitChange: true
          });
        });
      };
      const next = () => {
        correctPosition();
        touch.reset();
        doubleRaf(() => {
          state.swiping = false;
          move({
            pace: 1,
            emitChange: true
          });
        });
      };
      let autoplayTimer;
      const stopAutoplay = () => clearTimeout(autoplayTimer);
      const autoplay = () => {
        stopAutoplay();
        if (props.autoplay > 0 && count.value > 1) {
          autoplayTimer = setTimeout(() => {
            next();
            autoplay();
          }, +props.autoplay);
        }
      };
      const initialize = (active = +props.initialSwipe) => {
        if (!root.value) {
          return;
        }
        const cb = () => {
          var _a, _b;
          if (!isHidden(root)) {
            const rect = {
              width: root.value.offsetWidth,
              height: root.value.offsetHeight
            };
            state.rect = rect;
            state.width = +((_a = props.width) != null ? _a : rect.width);
            state.height = +((_b = props.height) != null ? _b : rect.height);
          }
          if (count.value) {
            active = Math.min(count.value - 1, active);
            if (active === -1) {
              active = count.value - 1;
            }
          }
          state.active = active;
          state.swiping = true;
          state.offset = getTargetOffset(active);
          children.forEach((swipe) => {
            swipe.setOffset(0);
          });
          autoplay();
        };
        if (isHidden(root)) {
          vue.nextTick().then(cb);
        } else {
          cb();
        }
      };
      const resize = () => initialize(state.active);
      let touchStartTime;
      const onTouchStart = (event) => {
        if (!props.touchable || event.touches.length > 1)
          return;
        touch.start(event);
        dragging = false;
        touchStartTime = Date.now();
        stopAutoplay();
        correctPosition();
      };
      const onTouchMove = (event) => {
        if (props.touchable && state.swiping) {
          touch.move(event);
          if (isCorrectDirection.value) {
            const isEdgeTouch = !props.loop && (state.active === 0 && delta.value > 0 || state.active === count.value - 1 && delta.value < 0);
            if (!isEdgeTouch) {
              preventDefault(event, props.stopPropagation);
              move({
                offset: delta.value
              });
              if (!dragging) {
                emit("dragStart");
                dragging = true;
              }
            }
          }
        }
      };
      const onTouchEnd = () => {
        if (!props.touchable || !state.swiping) {
          return;
        }
        const duration = Date.now() - touchStartTime;
        const speed = delta.value / duration;
        const shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta.value) > size.value / 2;
        if (shouldSwipe && isCorrectDirection.value) {
          const offset = props.vertical ? touch.offsetY.value : touch.offsetX.value;
          let pace = 0;
          if (props.loop) {
            pace = offset > 0 ? delta.value > 0 ? -1 : 1 : 0;
          } else {
            pace = -Math[delta.value > 0 ? "ceil" : "floor"](delta.value / size.value);
          }
          move({
            pace,
            emitChange: true
          });
        } else if (delta.value) {
          move({
            pace: 0
          });
        }
        dragging = false;
        state.swiping = false;
        emit("dragEnd");
        autoplay();
      };
      const swipeTo = (index, options = {}) => {
        correctPosition();
        touch.reset();
        doubleRaf(() => {
          let targetIndex;
          if (props.loop && index === count.value) {
            targetIndex = state.active === 0 ? 0 : index;
          } else {
            targetIndex = index % count.value;
          }
          if (options.immediate) {
            doubleRaf(() => {
              state.swiping = false;
            });
          } else {
            state.swiping = false;
          }
          move({
            pace: targetIndex - state.active,
            emitChange: true
          });
        });
      };
      const renderDot = (_, index) => {
        const active = index === activeIndicator.value;
        const style = active ? {
          backgroundColor: props.indicatorColor
        } : void 0;
        return vue.createVNode("i", {
          "style": style,
          "class": bem$b("indicator", {
            active
          })
        }, null);
      };
      const renderIndicator = () => {
        if (slots.indicator) {
          return slots.indicator({
            active: activeIndicator.value,
            total: count.value
          });
        }
        if (props.showIndicators && count.value > 1) {
          return vue.createVNode("div", {
            "class": bem$b("indicators", {
              vertical: props.vertical
            })
          }, [Array(count.value).fill("").map(renderDot)]);
        }
      };
      useExpose({
        prev,
        next,
        state,
        resize,
        swipeTo
      });
      linkChildren({
        size,
        props,
        count,
        activeIndicator
      });
      vue.watch(() => props.initialSwipe, (value) => initialize(+value));
      vue.watch(count, () => initialize(state.active));
      vue.watch(() => props.autoplay, autoplay);
      vue.watch([windowWidth, windowHeight], resize);
      vue.watch(usePageVisibility(), (visible) => {
        if (visible === "visible") {
          autoplay();
        } else {
          stopAutoplay();
        }
      });
      vue.onMounted(initialize);
      vue.onActivated(() => initialize(state.active));
      onPopupReopen(() => initialize(state.active));
      vue.onDeactivated(stopAutoplay);
      vue.onBeforeUnmount(stopAutoplay);
      useEventListener("touchmove", onTouchMove, {
        target: track
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "ref": root,
          "class": bem$b()
        }, [vue.createVNode("div", {
          "ref": track,
          "style": trackStyle.value,
          "class": bem$b("track", {
            vertical: props.vertical
          }),
          "onTouchstartPassive": onTouchStart,
          "onTouchend": onTouchEnd,
          "onTouchcancel": onTouchEnd
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), renderIndicator()]);
      };
    }
  });
  const Swipe = withInstall(stdin_default$c);
  const [name$b, bem$a] = createNamespace("tabs");
  var stdin_default$b = vue.defineComponent({
    name: name$b,
    props: {
      count: makeRequiredProp(Number),
      inited: Boolean,
      animated: Boolean,
      duration: makeRequiredProp(numericProp),
      swipeable: Boolean,
      lazyRender: Boolean,
      currentIndex: makeRequiredProp(Number)
    },
    emits: ["change"],
    setup(props, {
      emit,
      slots
    }) {
      const swipeRef = vue.ref();
      const onChange = (index) => emit("change", index);
      const renderChildren = () => {
        var _a;
        const Content = (_a = slots.default) == null ? void 0 : _a.call(slots);
        if (props.animated || props.swipeable) {
          return vue.createVNode(Swipe, {
            "ref": swipeRef,
            "loop": false,
            "class": bem$a("track"),
            "duration": +props.duration * 1e3,
            "touchable": props.swipeable,
            "lazyRender": props.lazyRender,
            "showIndicators": false,
            "onChange": onChange
          }, {
            default: () => [Content]
          });
        }
        return Content;
      };
      const swipeToCurrentTab = (index) => {
        const swipe = swipeRef.value;
        if (swipe && swipe.state.active !== index) {
          swipe.swipeTo(index, {
            immediate: !props.inited
          });
        }
      };
      vue.watch(() => props.currentIndex, swipeToCurrentTab);
      vue.onMounted(() => {
        swipeToCurrentTab(props.currentIndex);
      });
      useExpose({
        swipeRef
      });
      return () => vue.createVNode("div", {
        "class": bem$a("content", {
          animated: props.animated || props.swipeable
        })
      }, [renderChildren()]);
    }
  });
  const [name$a, bem$9] = createNamespace("tabs");
  const tabsProps = {
    type: makeStringProp("line"),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: makeNumericProp(0),
    duration: makeNumericProp(0.3),
    animated: Boolean,
    ellipsis: truthProp,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: makeNumericProp(0),
    background: String,
    lazyRender: truthProp,
    lineWidth: numericProp,
    lineHeight: numericProp,
    beforeChange: Function,
    swipeThreshold: makeNumericProp(5),
    titleActiveColor: String,
    titleInactiveColor: String
  };
  const TABS_KEY = Symbol(name$a);
  var stdin_default$a = vue.defineComponent({
    name: name$a,
    props: tabsProps,
    emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
    setup(props, {
      emit,
      slots
    }) {
      let tabHeight;
      let lockScroll;
      let stickyFixed;
      const root = vue.ref();
      const navRef = vue.ref();
      const wrapRef = vue.ref();
      const contentRef = vue.ref();
      const id = useId();
      const scroller = useScrollParent(root);
      const [titleRefs, setTitleRefs] = useRefs();
      const {
        children,
        linkChildren
      } = useChildren(TABS_KEY);
      const state = vue.reactive({
        inited: false,
        position: "",
        lineStyle: {},
        currentIndex: -1
      });
      const scrollable = vue.computed(() => children.length > props.swipeThreshold || !props.ellipsis || props.shrink);
      const navStyle = vue.computed(() => ({
        borderColor: props.color,
        background: props.background
      }));
      const getTabName = (tab, index) => {
        var _a;
        return (_a = tab.name) != null ? _a : index;
      };
      const currentName = vue.computed(() => {
        const activeTab = children[state.currentIndex];
        if (activeTab) {
          return getTabName(activeTab, state.currentIndex);
        }
      });
      const offsetTopPx = vue.computed(() => unitToPx(props.offsetTop));
      const scrollOffset = vue.computed(() => {
        if (props.sticky) {
          return offsetTopPx.value + tabHeight;
        }
        return 0;
      });
      const scrollIntoView = (immediate) => {
        const nav = navRef.value;
        const titles = titleRefs.value;
        if (!scrollable.value || !nav || !titles || !titles[state.currentIndex]) {
          return;
        }
        const title = titles[state.currentIndex].$el;
        const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
        scrollLeftTo(nav, to, immediate ? 0 : +props.duration);
      };
      const setLine = () => {
        const shouldAnimate = state.inited;
        vue.nextTick(() => {
          const titles = titleRefs.value;
          if (!titles || !titles[state.currentIndex] || props.type !== "line" || isHidden(root.value)) {
            return;
          }
          const title = titles[state.currentIndex].$el;
          const {
            lineWidth,
            lineHeight
          } = props;
          const left = title.offsetLeft + title.offsetWidth / 2;
          const lineStyle = {
            width: addUnit(lineWidth),
            backgroundColor: props.color,
            transform: `translateX(${left}px) translateX(-50%)`
          };
          if (shouldAnimate) {
            lineStyle.transitionDuration = `${props.duration}s`;
          }
          if (isDef(lineHeight)) {
            const height2 = addUnit(lineHeight);
            lineStyle.height = height2;
            lineStyle.borderRadius = height2;
          }
          state.lineStyle = lineStyle;
        });
      };
      const findAvailableTab = (index) => {
        const diff = index < state.currentIndex ? -1 : 1;
        while (index >= 0 && index < children.length) {
          if (!children[index].disabled) {
            return index;
          }
          index += diff;
        }
      };
      const setCurrentIndex = (currentIndex, skipScrollIntoView) => {
        const newIndex = findAvailableTab(currentIndex);
        if (!isDef(newIndex)) {
          return;
        }
        const newTab = children[newIndex];
        const newName = getTabName(newTab, newIndex);
        const shouldEmitChange = state.currentIndex !== null;
        if (state.currentIndex !== newIndex) {
          state.currentIndex = newIndex;
          if (!skipScrollIntoView) {
            scrollIntoView();
          }
          setLine();
        }
        if (newName !== props.active) {
          emit("update:active", newName);
          if (shouldEmitChange) {
            emit("change", newName, newTab.title);
          }
        }
        if (stickyFixed && !props.scrollspy) {
          setRootScrollTop(Math.ceil(getElementTop(root.value) - offsetTopPx.value));
        }
      };
      const setCurrentIndexByName = (name2, skipScrollIntoView) => {
        const matched = children.find((tab, index2) => getTabName(tab, index2) === name2);
        const index = matched ? children.indexOf(matched) : 0;
        setCurrentIndex(index, skipScrollIntoView);
      };
      const scrollToCurrentContent = (immediate = false) => {
        if (props.scrollspy) {
          const target = children[state.currentIndex].$el;
          if (target && scroller.value) {
            const to = getElementTop(target, scroller.value) - scrollOffset.value;
            lockScroll = true;
            scrollTopTo(scroller.value, to, immediate ? 0 : +props.duration, () => {
              lockScroll = false;
            });
          }
        }
      };
      const onClickTab = (item, index, event) => {
        const {
          title,
          disabled
        } = children[index];
        const name2 = getTabName(children[index], index);
        if (!disabled) {
          callInterceptor(props.beforeChange, {
            args: [name2],
            done: () => {
              setCurrentIndex(index);
              scrollToCurrentContent();
            }
          });
          route(item);
        }
        emit("clickTab", {
          name: name2,
          title,
          event,
          disabled
        });
      };
      const onStickyScroll = (params) => {
        stickyFixed = params.isFixed;
        emit("scroll", params);
      };
      const scrollTo = (name2) => {
        vue.nextTick(() => {
          setCurrentIndexByName(name2);
          scrollToCurrentContent(true);
        });
      };
      const getCurrentIndexOnScroll = () => {
        for (let index = 0; index < children.length; index++) {
          const {
            top
          } = useRect(children[index].$el);
          if (top > scrollOffset.value) {
            return index === 0 ? 0 : index - 1;
          }
        }
        return children.length - 1;
      };
      const onScroll = () => {
        if (props.scrollspy && !lockScroll) {
          const index = getCurrentIndexOnScroll();
          setCurrentIndex(index);
        }
      };
      const renderNav = () => children.map((item, index) => vue.createVNode(stdin_default$d, vue.mergeProps({
        "key": item.id,
        "id": `${id}-${index}`,
        "ref": setTitleRefs(index),
        "type": props.type,
        "color": props.color,
        "style": item.titleStyle,
        "class": item.titleClass,
        "shrink": props.shrink,
        "isActive": index === state.currentIndex,
        "controls": item.id,
        "scrollable": scrollable.value,
        "activeColor": props.titleActiveColor,
        "inactiveColor": props.titleInactiveColor,
        "onClick": (event) => onClickTab(item, index, event)
      }, pick(item, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
        title: item.$slots.title
      }));
      const renderLine = () => {
        if (props.type === "line" && children.length) {
          return vue.createVNode("div", {
            "class": bem$9("line"),
            "style": state.lineStyle
          }, null);
        }
      };
      const renderHeader = () => {
        var _a, _b, _c;
        const {
          type,
          border,
          sticky
        } = props;
        const Header = [vue.createVNode("div", {
          "ref": sticky ? void 0 : wrapRef,
          "class": [bem$9("wrap"), {
            [BORDER_TOP_BOTTOM]: type === "line" && border
          }]
        }, [vue.createVNode("div", {
          "ref": navRef,
          "role": "tablist",
          "class": bem$9("nav", [type, {
            shrink: props.shrink,
            complete: scrollable.value
          }]),
          "style": navStyle.value,
          "aria-orientation": "horizontal"
        }, [(_a = slots["nav-left"]) == null ? void 0 : _a.call(slots), renderNav(), renderLine(), (_b = slots["nav-right"]) == null ? void 0 : _b.call(slots)])]), (_c = slots["nav-bottom"]) == null ? void 0 : _c.call(slots)];
        if (sticky) {
          return vue.createVNode("div", {
            "ref": wrapRef
          }, [Header]);
        }
        return Header;
      };
      vue.watch([() => props.color, windowWidth], setLine);
      vue.watch(() => props.active, (value) => {
        if (value !== currentName.value) {
          setCurrentIndexByName(value);
        }
      });
      vue.watch(() => children.length, () => {
        if (state.inited) {
          setCurrentIndexByName(props.active);
          setLine();
          vue.nextTick(() => {
            scrollIntoView(true);
          });
        }
      });
      const init = () => {
        setCurrentIndexByName(props.active, true);
        vue.nextTick(() => {
          state.inited = true;
          if (wrapRef.value) {
            tabHeight = useRect(wrapRef.value).height;
          }
          scrollIntoView(true);
        });
      };
      const onRendered = (name2, title) => emit("rendered", name2, title);
      const resize = () => {
        setLine();
        vue.nextTick(() => {
          var _a, _b;
          return (_b = (_a = contentRef.value) == null ? void 0 : _a.swipeRef.value) == null ? void 0 : _b.resize();
        });
      };
      useExpose({
        resize,
        scrollTo
      });
      vue.onActivated(setLine);
      onPopupReopen(setLine);
      onMountedOrActivated(init);
      useEventListener("scroll", onScroll, {
        target: scroller,
        passive: true
      });
      linkChildren({
        id,
        props,
        setLine,
        onRendered,
        currentName,
        scrollIntoView
      });
      return () => vue.createVNode("div", {
        "ref": root,
        "class": bem$9([props.type])
      }, [props.sticky ? vue.createVNode(Sticky, {
        "container": root.value,
        "offsetTop": offsetTopPx.value,
        "onScroll": onStickyScroll
      }, {
        default: () => [renderHeader()]
      }) : renderHeader(), vue.createVNode(stdin_default$b, {
        "ref": contentRef,
        "count": children.length,
        "inited": state.inited,
        "animated": props.animated,
        "duration": props.duration,
        "swipeable": props.swipeable,
        "lazyRender": props.lazyRender,
        "currentIndex": state.currentIndex,
        "onChange": setCurrentIndex
      }, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      })]);
    }
  });
  const TAB_STATUS_KEY = Symbol();
  const [name$9, bem$8] = createNamespace("swipe-item");
  var stdin_default$9 = vue.defineComponent({
    name: name$9,
    setup(props, {
      slots
    }) {
      let rendered;
      const state = vue.reactive({
        offset: 0,
        inited: false,
        mounted: false
      });
      const {
        parent,
        index
      } = useParent(SWIPE_KEY);
      if (!parent) {
        {
          formatAppLog("error", "at node_modules/vant/es/swipe-item/SwipeItem.mjs:25", "[Vant] <SwipeItem> must be a child component of <Swipe>.");
        }
        return;
      }
      const style = vue.computed(() => {
        const style2 = {};
        const {
          vertical
        } = parent.props;
        if (parent.size.value) {
          style2[vertical ? "height" : "width"] = `${parent.size.value}px`;
        }
        if (state.offset) {
          style2.transform = `translate${vertical ? "Y" : "X"}(${state.offset}px)`;
        }
        return style2;
      });
      const shouldRender = vue.computed(() => {
        const {
          loop,
          lazyRender
        } = parent.props;
        if (!lazyRender || rendered) {
          return true;
        }
        if (!state.mounted) {
          return false;
        }
        const active = parent.activeIndicator.value;
        const maxActive = parent.count.value - 1;
        const prevActive = active === 0 && loop ? maxActive : active - 1;
        const nextActive = active === maxActive && loop ? 0 : active + 1;
        rendered = index.value === active || index.value === prevActive || index.value === nextActive;
        return rendered;
      });
      const setOffset = (offset) => {
        state.offset = offset;
      };
      vue.onMounted(() => {
        vue.nextTick(() => {
          state.mounted = true;
        });
      });
      useExpose({
        setOffset
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "class": bem$8(),
          "style": style.value
        }, [shouldRender.value ? (_a = slots.default) == null ? void 0 : _a.call(slots) : null]);
      };
    }
  });
  const SwipeItem = withInstall(stdin_default$9);
  const [name$8, bem$7] = createNamespace("tab");
  const tabProps = extend({}, routeProps, {
    dot: Boolean,
    name: numericProp,
    badge: numericProp,
    title: String,
    disabled: Boolean,
    titleClass: unknownProp,
    titleStyle: [String, Object],
    showZeroBadge: truthProp
  });
  var stdin_default$8 = vue.defineComponent({
    name: name$8,
    props: tabProps,
    setup(props, {
      slots
    }) {
      const id = useId();
      const inited = vue.ref(false);
      const {
        parent,
        index
      } = useParent(TABS_KEY);
      if (!parent) {
        {
          formatAppLog("error", "at node_modules/vant/es/tab/Tab.mjs:36", "[Vant] <Tab> must be a child component of <Tabs>.");
        }
        return;
      }
      const getName = () => {
        var _a;
        return (_a = props.name) != null ? _a : index.value;
      };
      const init = () => {
        inited.value = true;
        if (parent.props.lazyRender) {
          vue.nextTick(() => {
            parent.onRendered(getName(), props.title);
          });
        }
      };
      const active = vue.computed(() => {
        const isActive = getName() === parent.currentName.value;
        if (isActive && !inited.value) {
          init();
        }
        return isActive;
      });
      const hasInactiveClass = vue.ref(!active.value);
      vue.watch(active, (val) => {
        if (val) {
          hasInactiveClass.value = false;
        } else {
          doubleRaf(() => {
            hasInactiveClass.value = true;
          });
        }
      });
      vue.watch(() => props.title, () => {
        parent.setLine();
        parent.scrollIntoView();
      });
      vue.provide(TAB_STATUS_KEY, active);
      return () => {
        var _a;
        const label = `${parent.id}-${index.value}`;
        const {
          animated,
          swipeable,
          scrollspy,
          lazyRender
        } = parent.props;
        if (!slots.default && !animated) {
          return;
        }
        const show = scrollspy || active.value;
        if (animated || swipeable) {
          return vue.createVNode(SwipeItem, {
            "id": id,
            "role": "tabpanel",
            "class": bem$7("panel-wrapper", {
              inactive: hasInactiveClass.value
            }),
            "tabindex": active.value ? 0 : -1,
            "aria-hidden": !active.value,
            "aria-labelledby": label
          }, {
            default: () => {
              var _a2;
              return [vue.createVNode("div", {
                "class": bem$7("panel")
              }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])];
            }
          });
        }
        const shouldRender = inited.value || scrollspy || !lazyRender;
        const Content = shouldRender ? (_a = slots.default) == null ? void 0 : _a.call(slots) : null;
        useExpose({
          id
        });
        return vue.withDirectives(vue.createVNode("div", {
          "id": id,
          "role": "tabpanel",
          "class": bem$7("panel"),
          "tabindex": show ? 0 : -1,
          "aria-labelledby": label
        }, [Content]), [[vue.vShow, show]]);
      };
    }
  });
  const Tab = withInstall(stdin_default$8);
  const Tabs = withInstall(stdin_default$a);
  const [name$7, bem$6] = createNamespace("picker-group");
  const PICKER_GROUP_KEY = Symbol(name$7);
  const pickerGroupProps = extend({
    tabs: makeArrayProp(),
    nextStepText: String
  }, pickerToolbarProps);
  vue.defineComponent({
    name: name$7,
    props: pickerGroupProps,
    emits: ["confirm", "cancel"],
    setup(props, {
      emit,
      slots
    }) {
      const activeTab = vue.ref(0);
      const {
        children,
        linkChildren
      } = useChildren(PICKER_GROUP_KEY);
      linkChildren();
      const showNextButton = () => activeTab.value < props.tabs.length - 1 && props.nextStepText;
      const onConfirm = () => {
        if (showNextButton()) {
          activeTab.value++;
        } else {
          emit("confirm", children.map((item) => item.confirm()));
        }
      };
      const onCancel = () => emit("cancel");
      return () => {
        var _a;
        const childNodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
        const confirmButtonText = showNextButton() ? props.nextStepText : props.confirmButtonText;
        return vue.createVNode("div", {
          "class": bem$6()
        }, [vue.createVNode(stdin_default$f, {
          "title": props.title,
          "cancelButtonText": props.cancelButtonText,
          "confirmButtonText": confirmButtonText,
          "onConfirm": onConfirm,
          "onCancel": onCancel
        }, null), vue.createVNode(Tabs, {
          "active": activeTab.value,
          "onUpdate:active": ($event) => activeTab.value = $event,
          "class": bem$6("tabs"),
          "shrink": true,
          "animated": true
        }, {
          default: () => [props.tabs.map((title, index) => vue.createVNode(Tab, {
            "title": title,
            "titleClass": bem$6("tab-title")
          }, {
            default: () => [childNodes == null ? void 0 : childNodes[index]]
          }))]
        })]);
      };
    }
  });
  const pickerSharedProps = extend({
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: makeNumericProp(44),
    showToolbar: truthProp,
    swipeDuration: makeNumericProp(1e3),
    visibleOptionNum: makeNumericProp(6)
  }, pickerToolbarProps);
  const pickerProps = extend({}, pickerSharedProps, {
    columns: makeArrayProp(),
    modelValue: makeArrayProp(),
    toolbarPosition: makeStringProp("top"),
    columnsFieldNames: Object
  });
  var stdin_default$7 = vue.defineComponent({
    name: name$h,
    props: pickerProps,
    emits: ["confirm", "cancel", "change", "clickOption", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const columnsRef = vue.ref();
      const selectedValues = vue.ref(props.modelValue.slice(0));
      const {
        parent
      } = useParent(PICKER_GROUP_KEY);
      const {
        children,
        linkChildren
      } = useChildren(PICKER_KEY);
      linkChildren();
      const fields = vue.computed(() => assignDefaultFields(props.columnsFieldNames));
      const optionHeight = vue.computed(() => unitToPx(props.optionHeight));
      const columnsType = vue.computed(() => getColumnsType(props.columns, fields.value));
      const currentColumns = vue.computed(() => {
        const {
          columns
        } = props;
        switch (columnsType.value) {
          case "multiple":
            return columns;
          case "cascade":
            return formatCascadeColumns(columns, fields.value, selectedValues);
          default:
            return [columns];
        }
      });
      const hasOptions = vue.computed(() => currentColumns.value.some((options) => options.length));
      const selectedOptions = vue.computed(() => currentColumns.value.map((options, index) => findOptionByValue(options, selectedValues.value[index], fields.value)));
      const selectedIndexes = vue.computed(() => currentColumns.value.map((options, index) => options.findIndex((option) => option[fields.value.value] === selectedValues.value[index])));
      const setValue = (index, value) => {
        if (selectedValues.value[index] !== value) {
          const newValues = selectedValues.value.slice(0);
          newValues[index] = value;
          selectedValues.value = newValues;
        }
      };
      const getEventParams = () => ({
        selectedValues: selectedValues.value.slice(0),
        selectedOptions: selectedOptions.value,
        selectedIndexes: selectedIndexes.value
      });
      const onChange = (value, columnIndex) => {
        setValue(columnIndex, value);
        if (columnsType.value === "cascade") {
          selectedValues.value.forEach((value2, index) => {
            const options = currentColumns.value[index];
            if (!isOptionExist(options, value2, fields.value)) {
              setValue(index, options.length ? options[0][fields.value.value] : void 0);
            }
          });
        }
        vue.nextTick(() => {
          emit("change", extend({
            columnIndex
          }, getEventParams()));
        });
      };
      const onClickOption = (currentOption, columnIndex) => emit("clickOption", extend({
        columnIndex,
        currentOption
      }, getEventParams()));
      const confirm = () => {
        children.forEach((child) => child.stopMomentum());
        const params = getEventParams();
        vue.nextTick(() => {
          emit("confirm", params);
        });
        return params;
      };
      const cancel = () => emit("cancel", getEventParams());
      const renderColumnItems = () => currentColumns.value.map((options, columnIndex) => vue.createVNode(stdin_default$g, {
        "value": selectedValues.value[columnIndex],
        "fields": fields.value,
        "options": options,
        "readonly": props.readonly,
        "allowHtml": props.allowHtml,
        "optionHeight": optionHeight.value,
        "swipeDuration": props.swipeDuration,
        "visibleOptionNum": props.visibleOptionNum,
        "onChange": (value) => onChange(value, columnIndex),
        "onClickOption": (option) => onClickOption(option, columnIndex)
      }, {
        option: slots.option
      }));
      const renderMask = (wrapHeight) => {
        if (hasOptions.value) {
          const frameStyle = {
            height: `${optionHeight.value}px`
          };
          const maskStyle = {
            backgroundSize: `100% ${(wrapHeight - optionHeight.value) / 2}px`
          };
          return [vue.createVNode("div", {
            "class": bem$f("mask"),
            "style": maskStyle
          }, null), vue.createVNode("div", {
            "class": [BORDER_UNSET_TOP_BOTTOM, bem$f("frame")],
            "style": frameStyle
          }, null)];
        }
      };
      const renderColumns = () => {
        const wrapHeight = optionHeight.value * +props.visibleOptionNum;
        const columnsStyle = {
          height: `${wrapHeight}px`
        };
        return vue.createVNode("div", {
          "ref": columnsRef,
          "class": bem$f("columns"),
          "style": columnsStyle
        }, [renderColumnItems(), renderMask(wrapHeight)]);
      };
      const renderToolbar = () => {
        if (props.showToolbar && !parent) {
          return vue.createVNode(stdin_default$f, vue.mergeProps(pick(props, pickerToolbarPropKeys), {
            "onConfirm": confirm,
            "onCancel": cancel
          }), pick(slots, pickerToolbarSlots));
        }
      };
      vue.watch(currentColumns, (columns) => {
        columns.forEach((options, index) => {
          if (options.length && !isOptionExist(options, selectedValues.value[index], fields.value)) {
            setValue(index, getFirstEnabledOption(options)[fields.value.value]);
          }
        });
      }, {
        immediate: true
      });
      let lastEmittedModelValue;
      vue.watch(() => props.modelValue, (newValues) => {
        if (!isSameValue(newValues, selectedValues.value) && !isSameValue(newValues, lastEmittedModelValue)) {
          selectedValues.value = newValues.slice(0);
        }
      }, {
        deep: true
      });
      vue.watch(selectedValues, (newValues) => {
        if (!isSameValue(newValues, props.modelValue)) {
          lastEmittedModelValue = newValues.slice(0);
          emit("update:modelValue", lastEmittedModelValue);
        }
      }, {
        immediate: true
      });
      useEventListener("touchmove", preventDefault, {
        target: columnsRef
      });
      const getSelectedOptions = () => selectedOptions.value;
      useExpose({
        confirm,
        getSelectedOptions
      });
      return () => {
        var _a, _b;
        return vue.createVNode("div", {
          "class": bem$f()
        }, [props.toolbarPosition === "top" ? renderToolbar() : null, props.loading ? vue.createVNode(Loading, {
          "class": bem$f("loading")
        }, null) : null, (_a = slots["columns-top"]) == null ? void 0 : _a.call(slots), renderColumns(), (_b = slots["columns-bottom"]) == null ? void 0 : _b.call(slots), props.toolbarPosition === "bottom" ? renderToolbar() : null]);
      };
    }
  });
  const Picker = withInstall(stdin_default$7);
  const [name$6, bem$5] = createNamespace("cell");
  const cellSharedProps = {
    tag: makeStringProp("div"),
    icon: String,
    size: String,
    title: numericProp,
    value: numericProp,
    label: numericProp,
    center: Boolean,
    isLink: Boolean,
    border: truthProp,
    required: Boolean,
    iconPrefix: String,
    valueClass: unknownProp,
    labelClass: unknownProp,
    titleClass: unknownProp,
    titleStyle: null,
    arrowDirection: String,
    clickable: {
      type: Boolean,
      default: null
    }
  };
  const cellProps = extend({}, cellSharedProps, routeProps);
  var stdin_default$6 = vue.defineComponent({
    name: name$6,
    props: cellProps,
    setup(props, {
      slots
    }) {
      const route2 = useRoute();
      const renderLabel = () => {
        const showLabel = slots.label || isDef(props.label);
        if (showLabel) {
          return vue.createVNode("div", {
            "class": [bem$5("label"), props.labelClass]
          }, [slots.label ? slots.label() : props.label]);
        }
      };
      const renderTitle = () => {
        var _a;
        if (slots.title || isDef(props.title)) {
          const titleSlot = (_a = slots.title) == null ? void 0 : _a.call(slots);
          if (Array.isArray(titleSlot) && titleSlot.length === 0) {
            return;
          }
          return vue.createVNode("div", {
            "class": [bem$5("title"), props.titleClass],
            "style": props.titleStyle
          }, [titleSlot || vue.createVNode("span", null, [props.title]), renderLabel()]);
        }
      };
      const renderValue = () => {
        const slot = slots.value || slots.default;
        const hasValue = slot || isDef(props.value);
        if (hasValue) {
          return vue.createVNode("div", {
            "class": [bem$5("value"), props.valueClass]
          }, [slot ? slot() : vue.createVNode("span", null, [props.value])]);
        }
      };
      const renderLeftIcon = () => {
        if (slots.icon) {
          return slots.icon();
        }
        if (props.icon) {
          return vue.createVNode(Icon, {
            "name": props.icon,
            "class": bem$5("left-icon"),
            "classPrefix": props.iconPrefix
          }, null);
        }
      };
      const renderRightIcon = () => {
        if (slots["right-icon"]) {
          return slots["right-icon"]();
        }
        if (props.isLink) {
          const name2 = props.arrowDirection && props.arrowDirection !== "right" ? `arrow-${props.arrowDirection}` : "arrow";
          return vue.createVNode(Icon, {
            "name": name2,
            "class": bem$5("right-icon")
          }, null);
        }
      };
      return () => {
        var _a;
        const {
          tag,
          size,
          center,
          border,
          isLink,
          required
        } = props;
        const clickable = (_a = props.clickable) != null ? _a : isLink;
        const classes = {
          center,
          required,
          clickable,
          borderless: !border
        };
        if (size) {
          classes[size] = !!size;
        }
        return vue.createVNode(tag, {
          "class": bem$5(classes),
          "role": clickable ? "button" : void 0,
          "tabindex": clickable ? 0 : void 0,
          "onClick": route2
        }, {
          default: () => {
            var _a2;
            return [renderLeftIcon(), renderTitle(), renderValue(), renderRightIcon(), (_a2 = slots.extra) == null ? void 0 : _a2.call(slots)];
          }
        });
      };
    }
  });
  const Cell = withInstall(stdin_default$6);
  const [name$5, bem$4] = createNamespace("form");
  const formProps = {
    colon: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    showError: Boolean,
    labelWidth: numericProp,
    labelAlign: String,
    inputAlign: String,
    scrollToError: Boolean,
    validateFirst: Boolean,
    submitOnEnter: truthProp,
    showErrorMessage: truthProp,
    errorMessageAlign: String,
    validateTrigger: {
      type: [String, Array],
      default: "onBlur"
    }
  };
  var stdin_default$5 = vue.defineComponent({
    name: name$5,
    props: formProps,
    emits: ["submit", "failed"],
    setup(props, {
      emit,
      slots
    }) {
      const {
        children,
        linkChildren
      } = useChildren(FORM_KEY);
      const getFieldsByNames = (names) => {
        if (names) {
          return children.filter((field) => names.includes(field.name));
        }
        return children;
      };
      const validateSeq = (names) => new Promise((resolve, reject) => {
        const errors = [];
        const fields = getFieldsByNames(names);
        fields.reduce((promise, field) => promise.then(() => {
          if (!errors.length) {
            return field.validate().then((error) => {
              if (error) {
                errors.push(error);
              }
            });
          }
        }), Promise.resolve()).then(() => {
          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
        });
      });
      const validateAll = (names) => new Promise((resolve, reject) => {
        const fields = getFieldsByNames(names);
        Promise.all(fields.map((item) => item.validate())).then((errors) => {
          errors = errors.filter(Boolean);
          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
        });
      });
      const validateField = (name2) => {
        const matched = children.find((item) => item.name === name2);
        if (matched) {
          return new Promise((resolve, reject) => {
            matched.validate().then((error) => {
              if (error) {
                reject(error);
              } else {
                resolve();
              }
            });
          });
        }
        return Promise.reject();
      };
      const validate = (name2) => {
        if (typeof name2 === "string") {
          return validateField(name2);
        }
        return props.validateFirst ? validateSeq(name2) : validateAll(name2);
      };
      const resetValidation = (name2) => {
        if (typeof name2 === "string") {
          name2 = [name2];
        }
        const fields = getFieldsByNames(name2);
        fields.forEach((item) => {
          item.resetValidation();
        });
      };
      const getValidationStatus = () => children.reduce((form, field) => {
        form[field.name] = field.getValidationStatus();
        return form;
      }, {});
      const scrollToField = (name2, options) => {
        children.some((item) => {
          if (item.name === name2) {
            item.$el.scrollIntoView(options);
            return true;
          }
          return false;
        });
      };
      const getValues = () => children.reduce((form, field) => {
        if (field.name !== void 0) {
          form[field.name] = field.formValue.value;
        }
        return form;
      }, {});
      const submit = () => {
        const values = getValues();
        validate().then(() => emit("submit", values)).catch((errors) => {
          emit("failed", {
            values,
            errors
          });
          if (props.scrollToError && errors[0].name) {
            scrollToField(errors[0].name);
          }
        });
      };
      const onSubmit = (event) => {
        preventDefault(event);
        submit();
      };
      linkChildren({
        props
      });
      useExpose({
        submit,
        validate,
        getValues,
        scrollToField,
        resetValidation,
        getValidationStatus
      });
      return () => {
        var _a;
        return vue.createVNode("form", {
          "class": bem$4(),
          "onSubmit": onSubmit
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
    }
  });
  const Form = withInstall(stdin_default$5);
  function isEmptyValue(value) {
    if (Array.isArray(value)) {
      return !value.length;
    }
    if (value === 0) {
      return false;
    }
    return !value;
  }
  function runSyncRule(value, rule) {
    if (isEmptyValue(value)) {
      if (rule.required) {
        return false;
      }
      if (rule.validateEmpty === false) {
        return true;
      }
    }
    if (rule.pattern && !rule.pattern.test(String(value))) {
      return false;
    }
    return true;
  }
  function runRuleValidator(value, rule) {
    return new Promise((resolve) => {
      const returnVal = rule.validator(value, rule);
      if (isPromise(returnVal)) {
        returnVal.then(resolve);
        return;
      }
      resolve(returnVal);
    });
  }
  function getRuleMessage(value, rule) {
    const { message } = rule;
    if (isFunction(message)) {
      return message(value, rule);
    }
    return message || "";
  }
  function startComposing({ target }) {
    target.composing = true;
  }
  function endComposing({ target }) {
    if (target.composing) {
      target.composing = false;
      target.dispatchEvent(new Event("input"));
    }
  }
  function resizeTextarea(input, autosize) {
    const scrollTop = getRootScrollTop();
    input.style.height = "auto";
    let height2 = input.scrollHeight;
    if (isObject(autosize)) {
      const { maxHeight, minHeight } = autosize;
      if (maxHeight !== void 0) {
        height2 = Math.min(height2, maxHeight);
      }
      if (minHeight !== void 0) {
        height2 = Math.max(height2, minHeight);
      }
    }
    if (height2) {
      input.style.height = `${height2}px`;
      setRootScrollTop(scrollTop);
    }
  }
  function mapInputType(type) {
    if (type === "number") {
      return {
        type: "text",
        inputmode: "decimal"
      };
    }
    if (type === "digit") {
      return {
        type: "tel",
        inputmode: "numeric"
      };
    }
    return { type };
  }
  function getStringLength(str) {
    return [...str].length;
  }
  function cutString(str, maxlength) {
    return [...str].slice(0, maxlength).join("");
  }
  const [name$4, bem$3] = createNamespace("field");
  const fieldSharedProps = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: numericProp,
    formatter: Function,
    clearIcon: makeStringProp("clear"),
    modelValue: makeNumericProp(""),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: makeStringProp("focus"),
    formatTrigger: makeStringProp("onChange"),
    error: {
      type: Boolean,
      default: null
    },
    disabled: {
      type: Boolean,
      default: null
    },
    readonly: {
      type: Boolean,
      default: null
    }
  };
  const fieldProps = extend({}, cellSharedProps, fieldSharedProps, {
    rows: numericProp,
    type: makeStringProp("text"),
    rules: Array,
    autosize: [Boolean, Object],
    labelWidth: numericProp,
    labelClass: unknownProp,
    labelAlign: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    colon: {
      type: Boolean,
      default: null
    }
  });
  var stdin_default$4 = vue.defineComponent({
    name: name$4,
    props: fieldProps,
    emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const id = useId();
      const state = vue.reactive({
        status: "unvalidated",
        focused: false,
        validateMessage: ""
      });
      const inputRef = vue.ref();
      const clearIconRef = vue.ref();
      const customValue = vue.ref();
      const {
        parent: form
      } = useParent(FORM_KEY);
      const getModelValue = () => {
        var _a;
        return String((_a = props.modelValue) != null ? _a : "");
      };
      const getProp = (key) => {
        if (isDef(props[key])) {
          return props[key];
        }
        if (form && isDef(form.props[key])) {
          return form.props[key];
        }
      };
      const showClear = vue.computed(() => {
        const readonly = getProp("readonly");
        if (props.clearable && !readonly) {
          const hasValue = getModelValue() !== "";
          const trigger = props.clearTrigger === "always" || props.clearTrigger === "focus" && state.focused;
          return hasValue && trigger;
        }
        return false;
      });
      const formValue = vue.computed(() => {
        if (customValue.value && slots.input) {
          return customValue.value();
        }
        return props.modelValue;
      });
      const runRules = (rules) => rules.reduce((promise, rule) => promise.then(() => {
        if (state.status === "failed") {
          return;
        }
        let {
          value
        } = formValue;
        if (rule.formatter) {
          value = rule.formatter(value, rule);
        }
        if (!runSyncRule(value, rule)) {
          state.status = "failed";
          state.validateMessage = getRuleMessage(value, rule);
          return;
        }
        if (rule.validator) {
          if (isEmptyValue(value) && rule.validateEmpty === false) {
            return;
          }
          return runRuleValidator(value, rule).then((result) => {
            if (result && typeof result === "string") {
              state.status = "failed";
              state.validateMessage = result;
            } else if (result === false) {
              state.status = "failed";
              state.validateMessage = getRuleMessage(value, rule);
            }
          });
        }
      }), Promise.resolve());
      const resetValidation = () => {
        state.status = "unvalidated";
        state.validateMessage = "";
      };
      const endValidate = () => emit("endValidate", {
        status: state.status,
        message: state.validateMessage
      });
      const validate = (rules = props.rules) => new Promise((resolve) => {
        resetValidation();
        if (rules) {
          emit("startValidate");
          runRules(rules).then(() => {
            if (state.status === "failed") {
              resolve({
                name: props.name,
                message: state.validateMessage
              });
              endValidate();
            } else {
              state.status = "passed";
              resolve();
              endValidate();
            }
          });
        } else {
          resolve();
        }
      });
      const validateWithTrigger = (trigger) => {
        if (form && props.rules) {
          const {
            validateTrigger
          } = form.props;
          const defaultTrigger = toArray(validateTrigger).includes(trigger);
          const rules = props.rules.filter((rule) => {
            if (rule.trigger) {
              return toArray(rule.trigger).includes(trigger);
            }
            return defaultTrigger;
          });
          if (rules.length) {
            validate(rules);
          }
        }
      };
      const limitValueLength = (value) => {
        var _a;
        const {
          maxlength
        } = props;
        if (isDef(maxlength) && getStringLength(value) > maxlength) {
          const modelValue = getModelValue();
          if (modelValue && getStringLength(modelValue) === +maxlength) {
            return modelValue;
          }
          const selectionEnd = (_a = inputRef.value) == null ? void 0 : _a.selectionEnd;
          if (state.focused && selectionEnd) {
            const valueArr = [...value];
            const exceededLength = valueArr.length - +maxlength;
            valueArr.splice(selectionEnd - exceededLength, exceededLength);
            return valueArr.join("");
          }
          return cutString(value, +maxlength);
        }
        return value;
      };
      const updateValue = (value, trigger = "onChange") => {
        const originalValue = value;
        value = limitValueLength(value);
        const limitDiffLen = getStringLength(originalValue) - getStringLength(value);
        if (props.type === "number" || props.type === "digit") {
          const isNumber = props.type === "number";
          value = formatNumber(value, isNumber, isNumber);
        }
        let formatterDiffLen = 0;
        if (props.formatter && trigger === props.formatTrigger) {
          const {
            formatter,
            maxlength
          } = props;
          value = formatter(value);
          if (isDef(maxlength) && getStringLength(value) > maxlength) {
            value = cutString(value, +maxlength);
          }
          if (inputRef.value && state.focused) {
            const {
              selectionEnd
            } = inputRef.value;
            const bcoVal = cutString(originalValue, selectionEnd);
            formatterDiffLen = getStringLength(formatter(bcoVal)) - getStringLength(bcoVal);
          }
        }
        if (inputRef.value && inputRef.value.value !== value) {
          if (state.focused) {
            let {
              selectionStart,
              selectionEnd
            } = inputRef.value;
            inputRef.value.value = value;
            if (isDef(selectionStart) && isDef(selectionEnd)) {
              const valueLen = getStringLength(value);
              if (limitDiffLen) {
                selectionStart -= limitDiffLen;
                selectionEnd -= limitDiffLen;
              } else if (formatterDiffLen) {
                selectionStart += formatterDiffLen;
                selectionEnd += formatterDiffLen;
              }
              inputRef.value.setSelectionRange(Math.min(selectionStart, valueLen), Math.min(selectionEnd, valueLen));
            }
          } else {
            inputRef.value.value = value;
          }
        }
        if (value !== props.modelValue) {
          emit("update:modelValue", value);
        }
      };
      const onInput = (event) => {
        if (!event.target.composing) {
          updateValue(event.target.value);
        }
      };
      const blur = () => {
        var _a;
        return (_a = inputRef.value) == null ? void 0 : _a.blur();
      };
      const focus = () => {
        var _a;
        return (_a = inputRef.value) == null ? void 0 : _a.focus();
      };
      const adjustTextareaSize = () => {
        const input = inputRef.value;
        if (props.type === "textarea" && props.autosize && input) {
          resizeTextarea(input, props.autosize);
        }
      };
      const onFocus = (event) => {
        state.focused = true;
        emit("focus", event);
        vue.nextTick(adjustTextareaSize);
        if (getProp("readonly")) {
          blur();
        }
      };
      const onBlur = (event) => {
        if (getProp("readonly")) {
          return;
        }
        state.focused = false;
        updateValue(getModelValue(), "onBlur");
        emit("blur", event);
        validateWithTrigger("onBlur");
        vue.nextTick(adjustTextareaSize);
        resetScroll();
      };
      const onClickInput = (event) => emit("clickInput", event);
      const onClickLeftIcon = (event) => emit("clickLeftIcon", event);
      const onClickRightIcon = (event) => emit("clickRightIcon", event);
      const onClear = (event) => {
        preventDefault(event);
        emit("update:modelValue", "");
        emit("clear", event);
      };
      const showError = vue.computed(() => {
        if (typeof props.error === "boolean") {
          return props.error;
        }
        if (form && form.props.showError && state.status === "failed") {
          return true;
        }
      });
      const labelStyle = vue.computed(() => {
        const labelWidth = getProp("labelWidth");
        if (labelWidth) {
          return {
            width: addUnit(labelWidth)
          };
        }
      });
      const onKeypress = (event) => {
        const ENTER_CODE = 13;
        if (event.keyCode === ENTER_CODE) {
          const submitOnEnter = form && form.props.submitOnEnter;
          if (!submitOnEnter && props.type !== "textarea") {
            preventDefault(event);
          }
          if (props.type === "search") {
            blur();
          }
        }
        emit("keypress", event);
      };
      const getInputId = () => props.id || `${id}-input`;
      const getValidationStatus = () => state.status;
      const renderInput = () => {
        const controlClass = bem$3("control", [getProp("inputAlign"), {
          error: showError.value,
          custom: !!slots.input,
          "min-height": props.type === "textarea" && !props.autosize
        }]);
        if (slots.input) {
          return vue.createVNode("div", {
            "class": controlClass,
            "onClick": onClickInput
          }, [slots.input()]);
        }
        const inputAttrs = {
          id: getInputId(),
          ref: inputRef,
          name: props.name,
          rows: props.rows !== void 0 ? +props.rows : void 0,
          class: controlClass,
          disabled: getProp("disabled"),
          readonly: getProp("readonly"),
          autofocus: props.autofocus,
          placeholder: props.placeholder,
          autocomplete: props.autocomplete,
          enterkeyhint: props.enterkeyhint,
          "aria-labelledby": props.label ? `${id}-label` : void 0,
          onBlur,
          onFocus,
          onInput,
          onClick: onClickInput,
          onChange: endComposing,
          onKeypress,
          onCompositionend: endComposing,
          onCompositionstart: startComposing
        };
        if (props.type === "textarea") {
          return vue.createVNode("textarea", inputAttrs, null);
        }
        return vue.createVNode("input", vue.mergeProps(mapInputType(props.type), inputAttrs), null);
      };
      const renderLeftIcon = () => {
        const leftIconSlot = slots["left-icon"];
        if (props.leftIcon || leftIconSlot) {
          return vue.createVNode("div", {
            "class": bem$3("left-icon"),
            "onClick": onClickLeftIcon
          }, [leftIconSlot ? leftIconSlot() : vue.createVNode(Icon, {
            "name": props.leftIcon,
            "classPrefix": props.iconPrefix
          }, null)]);
        }
      };
      const renderRightIcon = () => {
        const rightIconSlot = slots["right-icon"];
        if (props.rightIcon || rightIconSlot) {
          return vue.createVNode("div", {
            "class": bem$3("right-icon"),
            "onClick": onClickRightIcon
          }, [rightIconSlot ? rightIconSlot() : vue.createVNode(Icon, {
            "name": props.rightIcon,
            "classPrefix": props.iconPrefix
          }, null)]);
        }
      };
      const renderWordLimit = () => {
        if (props.showWordLimit && props.maxlength) {
          const count = getStringLength(getModelValue());
          return vue.createVNode("div", {
            "class": bem$3("word-limit")
          }, [vue.createVNode("span", {
            "class": bem$3("word-num")
          }, [count]), vue.createTextVNode("/"), props.maxlength]);
        }
      };
      const renderMessage = () => {
        if (form && form.props.showErrorMessage === false) {
          return;
        }
        const message = props.errorMessage || state.validateMessage;
        if (message) {
          const slot = slots["error-message"];
          const errorMessageAlign = getProp("errorMessageAlign");
          return vue.createVNode("div", {
            "class": bem$3("error-message", errorMessageAlign)
          }, [slot ? slot({
            message
          }) : message]);
        }
      };
      const renderLabel = () => {
        const colon = getProp("colon") ? ":" : "";
        if (slots.label) {
          return [slots.label(), colon];
        }
        if (props.label) {
          return vue.createVNode("label", {
            "id": `${id}-label`,
            "for": getInputId()
          }, [props.label + colon]);
        }
      };
      const renderFieldBody = () => [vue.createVNode("div", {
        "class": bem$3("body")
      }, [renderInput(), showClear.value && vue.createVNode(Icon, {
        "ref": clearIconRef,
        "name": props.clearIcon,
        "class": bem$3("clear")
      }, null), renderRightIcon(), slots.button && vue.createVNode("div", {
        "class": bem$3("button")
      }, [slots.button()])]), renderWordLimit(), renderMessage()];
      useExpose({
        blur,
        focus,
        validate,
        formValue,
        resetValidation,
        getValidationStatus
      });
      vue.provide(CUSTOM_FIELD_INJECTION_KEY, {
        customValue,
        resetValidation,
        validateWithTrigger
      });
      vue.watch(() => props.modelValue, () => {
        updateValue(getModelValue());
        resetValidation();
        validateWithTrigger("onChange");
        vue.nextTick(adjustTextareaSize);
      });
      vue.onMounted(() => {
        updateValue(getModelValue(), props.formatTrigger);
        vue.nextTick(adjustTextareaSize);
      });
      useEventListener("touchstart", onClear, {
        target: vue.computed(() => {
          var _a;
          return (_a = clearIconRef.value) == null ? void 0 : _a.$el;
        })
      });
      return () => {
        const disabled = getProp("disabled");
        const labelAlign = getProp("labelAlign");
        const LeftIcon = renderLeftIcon();
        const renderTitle = () => {
          const Label = renderLabel();
          if (labelAlign === "top") {
            return [LeftIcon, Label].filter(Boolean);
          }
          return Label || [];
        };
        return vue.createVNode(Cell, {
          "size": props.size,
          "class": bem$3({
            error: showError.value,
            disabled,
            [`label-${labelAlign}`]: labelAlign
          }),
          "center": props.center,
          "border": props.border,
          "isLink": props.isLink,
          "clickable": props.clickable,
          "titleStyle": labelStyle.value,
          "valueClass": bem$3("value"),
          "titleClass": [bem$3("label", [labelAlign, {
            required: props.required
          }]), props.labelClass],
          "arrowDirection": props.arrowDirection
        }, {
          icon: LeftIcon && labelAlign !== "top" ? () => LeftIcon : null,
          title: renderTitle,
          value: renderFieldBody,
          extra: slots.extra
        });
      };
    }
  });
  const Field = withInstall(stdin_default$4);
  const [name$3, bem$2] = createNamespace("switch");
  const switchProps = {
    size: numericProp,
    loading: Boolean,
    disabled: Boolean,
    modelValue: unknownProp,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: unknownProp,
      default: true
    },
    inactiveValue: {
      type: unknownProp,
      default: false
    }
  };
  var stdin_default$3 = vue.defineComponent({
    name: name$3,
    props: switchProps,
    emits: ["change", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const isChecked = () => props.modelValue === props.activeValue;
      const onClick = () => {
        if (!props.disabled && !props.loading) {
          const newValue = isChecked() ? props.inactiveValue : props.activeValue;
          emit("update:modelValue", newValue);
          emit("change", newValue);
        }
      };
      const renderLoading = () => {
        if (props.loading) {
          const color = isChecked() ? props.activeColor : props.inactiveColor;
          return vue.createVNode(Loading, {
            "class": bem$2("loading"),
            "color": color
          }, null);
        }
        if (slots.node) {
          return slots.node();
        }
      };
      useCustomFieldValue(() => props.modelValue);
      return () => {
        var _a;
        const {
          size,
          loading,
          disabled,
          activeColor,
          inactiveColor
        } = props;
        const checked = isChecked();
        const style = {
          fontSize: addUnit(size),
          backgroundColor: checked ? activeColor : inactiveColor
        };
        return vue.createVNode("div", {
          "role": "switch",
          "class": bem$2({
            on: checked,
            loading,
            disabled
          }),
          "style": style,
          "tabindex": disabled ? void 0 : 0,
          "aria-checked": checked,
          "onClick": onClick
        }, [vue.createVNode("div", {
          "class": bem$2("node")
        }, [renderLoading()]), (_a = slots.background) == null ? void 0 : _a.call(slots)]);
      };
    }
  });
  const Switch = withInstall(stdin_default$3);
  const sharedProps = extend({}, pickerSharedProps, {
    modelValue: makeArrayProp(),
    filter: Function,
    formatter: {
      type: Function,
      default: (type, option) => option
    }
  });
  const pickerInheritKeys = Object.keys(pickerSharedProps);
  function times(n, iteratee) {
    if (n < 0) {
      return [];
    }
    const result = Array(n);
    let index = -1;
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  const genOptions = (min, max, type, formatter, filter) => {
    const options = times(max - min + 1, (index) => {
      const value = padZero(min + index);
      return formatter(type, {
        text: value,
        value
      });
    });
    return filter ? filter(type, options) : options;
  };
  const formatValueRange = (values, columns) => values.map((value, index) => {
    const column = columns[index];
    if (column.length) {
      const maxValue = +column[column.length - 1].value;
      if (+value > maxValue) {
        return String(maxValue);
      }
    }
    return value;
  });
  const [name$2, bem$1] = createNamespace("cell-group");
  const cellGroupProps = {
    title: String,
    inset: Boolean,
    border: truthProp
  };
  var stdin_default$2 = vue.defineComponent({
    name: name$2,
    inheritAttrs: false,
    props: cellGroupProps,
    setup(props, {
      slots,
      attrs
    }) {
      const renderGroup = () => {
        var _a;
        return vue.createVNode("div", vue.mergeProps({
          "class": [bem$1({
            inset: props.inset
          }), {
            [BORDER_TOP_BOTTOM]: props.border && !props.inset
          }]
        }, attrs), [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
      const renderTitle = () => vue.createVNode("div", {
        "class": bem$1("title", {
          inset: props.inset
        })
      }, [slots.title ? slots.title() : props.title]);
      return () => {
        if (props.title || slots.title) {
          return vue.createVNode(vue.Fragment, null, [renderTitle(), renderGroup()]);
        }
        return renderGroup();
      };
    }
  });
  const CellGroup = withInstall(stdin_default$2);
  const [name$1, bem] = createNamespace("stepper");
  const LONG_PRESS_INTERVAL = 200;
  const isEqual = (value1, value2) => String(value1) === String(value2);
  const stepperProps = {
    min: makeNumericProp(1),
    max: makeNumericProp(Infinity),
    name: makeNumericProp(""),
    step: makeNumericProp(1),
    theme: String,
    integer: Boolean,
    disabled: Boolean,
    showPlus: truthProp,
    showMinus: truthProp,
    showInput: truthProp,
    longPress: truthProp,
    autoFixed: truthProp,
    allowEmpty: Boolean,
    modelValue: numericProp,
    inputWidth: numericProp,
    buttonSize: numericProp,
    placeholder: String,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    beforeChange: Function,
    defaultValue: makeNumericProp(1),
    decimalLength: numericProp
  };
  var stdin_default$1 = vue.defineComponent({
    name: name$1,
    props: stepperProps,
    emits: ["plus", "blur", "minus", "focus", "change", "overlimit", "update:modelValue"],
    setup(props, {
      emit
    }) {
      const format = (value, autoFixed = true) => {
        const {
          min,
          max,
          allowEmpty,
          decimalLength
        } = props;
        if (allowEmpty && value === "") {
          return value;
        }
        value = formatNumber(String(value), !props.integer);
        value = value === "" ? 0 : +value;
        value = Number.isNaN(value) ? +min : value;
        value = autoFixed ? Math.max(Math.min(+max, value), +min) : value;
        if (isDef(decimalLength)) {
          value = value.toFixed(+decimalLength);
        }
        return value;
      };
      const getInitialValue = () => {
        var _a;
        const defaultValue = (_a = props.modelValue) != null ? _a : props.defaultValue;
        const value = format(defaultValue);
        if (!isEqual(value, props.modelValue)) {
          emit("update:modelValue", value);
        }
        return value;
      };
      let actionType;
      const inputRef = vue.ref();
      const current2 = vue.ref(getInitialValue());
      const minusDisabled = vue.computed(() => props.disabled || props.disableMinus || current2.value <= +props.min);
      const plusDisabled = vue.computed(() => props.disabled || props.disablePlus || current2.value >= +props.max);
      const inputStyle = vue.computed(() => ({
        width: addUnit(props.inputWidth),
        height: addUnit(props.buttonSize)
      }));
      const buttonStyle = vue.computed(() => getSizeStyle(props.buttonSize));
      const check = () => {
        const value = format(current2.value);
        if (!isEqual(value, current2.value)) {
          current2.value = value;
        }
      };
      const setValue = (value) => {
        if (props.beforeChange) {
          callInterceptor(props.beforeChange, {
            args: [value],
            done() {
              current2.value = value;
            }
          });
        } else {
          current2.value = value;
        }
      };
      const onChange = () => {
        if (actionType === "plus" && plusDisabled.value || actionType === "minus" && minusDisabled.value) {
          emit("overlimit", actionType);
          return;
        }
        const diff = actionType === "minus" ? -props.step : +props.step;
        const value = format(addNumber(+current2.value, diff));
        setValue(value);
        emit(actionType);
      };
      const onInput = (event) => {
        const input = event.target;
        const {
          value
        } = input;
        const {
          decimalLength
        } = props;
        let formatted = formatNumber(String(value), !props.integer);
        if (isDef(decimalLength) && formatted.includes(".")) {
          const pair = formatted.split(".");
          formatted = `${pair[0]}.${pair[1].slice(0, +decimalLength)}`;
        }
        if (props.beforeChange) {
          input.value = String(current2.value);
        } else if (!isEqual(value, formatted)) {
          input.value = formatted;
        }
        const isNumeric2 = formatted === String(+formatted);
        setValue(isNumeric2 ? +formatted : formatted);
      };
      const onFocus = (event) => {
        var _a;
        if (props.disableInput) {
          (_a = inputRef.value) == null ? void 0 : _a.blur();
        } else {
          emit("focus", event);
        }
      };
      const onBlur = (event) => {
        const input = event.target;
        const value = format(input.value, props.autoFixed);
        input.value = String(value);
        current2.value = value;
        vue.nextTick(() => {
          emit("blur", event);
          resetScroll();
        });
      };
      let isLongPress;
      let longPressTimer;
      const longPressStep = () => {
        longPressTimer = setTimeout(() => {
          onChange();
          longPressStep();
        }, LONG_PRESS_INTERVAL);
      };
      const onTouchStart = () => {
        if (props.longPress) {
          isLongPress = false;
          clearTimeout(longPressTimer);
          longPressTimer = setTimeout(() => {
            isLongPress = true;
            onChange();
            longPressStep();
          }, LONG_PRESS_START_TIME);
        }
      };
      const onTouchEnd = (event) => {
        if (props.longPress) {
          clearTimeout(longPressTimer);
          if (isLongPress) {
            preventDefault(event);
          }
        }
      };
      const onMousedown = (event) => {
        if (props.disableInput) {
          preventDefault(event);
        }
      };
      const createListeners = (type) => ({
        onClick: (event) => {
          preventDefault(event);
          actionType = type;
          onChange();
        },
        onTouchstartPassive: () => {
          actionType = type;
          onTouchStart();
        },
        onTouchend: onTouchEnd,
        onTouchcancel: onTouchEnd
      });
      vue.watch(() => [props.max, props.min, props.integer, props.decimalLength], check);
      vue.watch(() => props.modelValue, (value) => {
        if (!isEqual(value, current2.value)) {
          current2.value = format(value);
        }
      });
      vue.watch(current2, (value) => {
        emit("update:modelValue", value);
        emit("change", value, {
          name: props.name
        });
      });
      useCustomFieldValue(() => props.modelValue);
      return () => vue.createVNode("div", {
        "role": "group",
        "class": bem([props.theme])
      }, [vue.withDirectives(vue.createVNode("button", vue.mergeProps({
        "type": "button",
        "style": buttonStyle.value,
        "class": [bem("minus", {
          disabled: minusDisabled.value
        }), {
          [HAPTICS_FEEDBACK]: !minusDisabled.value
        }],
        "aria-disabled": minusDisabled.value || void 0
      }, createListeners("minus")), null), [[vue.vShow, props.showMinus]]), vue.withDirectives(vue.createVNode("input", {
        "ref": inputRef,
        "type": props.integer ? "tel" : "text",
        "role": "spinbutton",
        "class": bem("input"),
        "value": current2.value,
        "style": inputStyle.value,
        "disabled": props.disabled,
        "readonly": props.disableInput,
        "inputmode": props.integer ? "numeric" : "decimal",
        "placeholder": props.placeholder,
        "aria-valuemax": props.max,
        "aria-valuemin": props.min,
        "aria-valuenow": current2.value,
        "onBlur": onBlur,
        "onInput": onInput,
        "onFocus": onFocus,
        "onMousedown": onMousedown
      }, null), [[vue.vShow, props.showInput]]), vue.withDirectives(vue.createVNode("button", vue.mergeProps({
        "type": "button",
        "style": buttonStyle.value,
        "class": [bem("plus", {
          disabled: plusDisabled.value
        }), {
          [HAPTICS_FEEDBACK]: !plusDisabled.value
        }],
        "aria-disabled": plusDisabled.value || void 0
      }, createListeners("plus")), null), [[vue.vShow, props.showPlus]])]);
    }
  });
  const Stepper = withInstall(stdin_default$1);
  const [name] = createNamespace("time-picker");
  const timePickerProps = extend({}, sharedProps, {
    minHour: makeNumericProp(0),
    maxHour: makeNumericProp(23),
    minMinute: makeNumericProp(0),
    maxMinute: makeNumericProp(59),
    minSecond: makeNumericProp(0),
    maxSecond: makeNumericProp(59),
    columnsType: {
      type: Array,
      default: () => ["hour", "minute"]
    }
  });
  var stdin_default = vue.defineComponent({
    name,
    props: timePickerProps,
    emits: ["confirm", "cancel", "change", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const currentValues = vue.ref(props.modelValue);
      const columns = vue.computed(() => props.columnsType.map((type) => {
        const {
          filter,
          formatter
        } = props;
        switch (type) {
          case "hour":
            return genOptions(+props.minHour, +props.maxHour, type, formatter, filter);
          case "minute":
            return genOptions(+props.minMinute, +props.maxMinute, type, formatter, filter);
          case "second":
            return genOptions(+props.minSecond, +props.maxSecond, type, formatter, filter);
          default: {
            throw new Error(`[Vant] DatePicker: unsupported columns type: ${type}`);
          }
        }
      }));
      vue.watch(currentValues, (newValues) => {
        if (!isSameValue(newValues, props.modelValue)) {
          emit("update:modelValue", newValues);
        }
      });
      vue.watch(() => props.modelValue, (newValues) => {
        newValues = formatValueRange(newValues, columns.value);
        if (!isSameValue(newValues, currentValues.value)) {
          currentValues.value = newValues;
        }
      }, {
        immediate: true
      });
      const onChange = (...args) => emit("change", ...args);
      const onCancel = (...args) => emit("cancel", ...args);
      const onConfirm = (...args) => emit("confirm", ...args);
      return () => vue.createVNode(Picker, vue.mergeProps({
        "modelValue": currentValues.value,
        "onUpdate:modelValue": ($event) => currentValues.value = $event,
        "columns": columns.value,
        "onChange": onChange,
        "onCancel": onCancel,
        "onConfirm": onConfirm
      }, pick(props, pickerInheritKeys)), slots);
    }
  });
  const TimePicker = withInstall(stdin_default);
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(Button).use(Form).use(Field).use(CellGroup).use(Switch).use(Stepper).use(Picker).use(Popup).use(TimePicker);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
