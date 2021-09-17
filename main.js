
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import './main.js'
Vue.config.productionTip = false

App.mpType = 'app'

let fontSize 
let screenWidth = uni.getSystemInfoSync().screenWidth
screenWidth = screenWidth >750?'750':screenWidth
fontSize = 100 * (screenWidth / 375) + 'px'
console.log(screenWidth)
Vue.prototype.$rootFontSize = fontSize



const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif