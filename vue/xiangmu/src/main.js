import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/commin.css"
import "./assets/css/comm.css"
import "./assets/ldfcss/ldficon.css"
import "./assets/ldfcss/publicCss.css"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
