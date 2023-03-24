import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.mixin({
	created() {
		this.baseUrl='http://127.0.0.1:3333/'
		this.webSokcetUrl='wx:http://127.0.0.1:8787/'
	}
})
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif