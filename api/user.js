import Request from '@/utils/requset'
import operate from '@/common/operate'
let request = new Request().http

// 按需引入的 请求头
export  const getUserInfo= function(data) {    
    return request({
	url: "order/user ",		
        method: "POST",
	data: data,
	// token: operate.isToken()
    })
}

//页面中使用 按需使用

// 引入
// import {
//     getUserInfo
// } from '@/api/user.js'

//放入生命周期
// init() {
//     getUserInfo().then((res) => {
// 	console.log(res);
//     })
// }
