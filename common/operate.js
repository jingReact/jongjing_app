export default {
   //接口
	api: function() {
	    let version = wx.getAccountInfoSync().miniProgram.envVersion;
	    switch (version) {
		case "develop": //开发预览版
			return "http://localhost:1889/"
			break;
		case 'trial': //体验版
			return "http://localhost:1889/"
			break;
		case 'release': //正式版
			return "http://localhost:1889/"
			break;
		default: //未知,默认调用正式版
			return "http://localhost:1889/"
			break;
	}
    }
}