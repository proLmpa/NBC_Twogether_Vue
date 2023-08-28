// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios' // axios 추가

// axios 추가
Vue.use(axios)
// axios를 root 전력으로 사용하기 위해 추가
Vue.prototype.$axios = axios

Vue.config.productionTip = false

const instance = axios.create({
  baseURL: 'http://localhost:8080'
})

function registerUser (userData) {
  console.log(userData)
  return instance.post('/api/users/signup', userData)
}

export { registerUser }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
