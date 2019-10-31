import Vue from 'vue'
import App from './App.vue'
import htmlToPdf from '@/utils/htmlToPdf'
Vue.use(htmlToPdf)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
