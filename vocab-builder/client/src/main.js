import Vue from 'vue'
import App from './App.vue'
import router from './router'

//import CSS framework to decorate web UI
import 'semantic-ui-css/semantic.css'
//import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
