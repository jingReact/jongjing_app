import App from './App.vue'
// #ifndef VUE3
import Vue from 'vue'


Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()

// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import { Button, Form, Field, CellGroup,Switch,Stepper,Picker,Popup,TimePicker } from 'vant';
import 'vant/lib/index.css';

export function createApp() {
	const app = createSSRApp(App)
	app.use(Button).use(Form).use(Field).use(CellGroup).use(Switch).use(Stepper).use(Picker).use(Popup).use(TimePicker)
	return {
		app
	}
}
// #endif
