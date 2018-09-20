import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'

Vue.config.productionTip = false


Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
