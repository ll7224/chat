import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import 'lib-flexible/flexible'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
