import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Http from './service/http.js'
Vue.config.productionTip = false

Vue.prototype.$http = Http // 挂载到vue下，全局可用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
