import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/index'
import './registerServiceWorker'

Vue.config.productionTip = false

// Disable ios safari bouncing
document.ontouchmove = event => { event.preventDefault() }

// Disable double tab zoom
let doubleTouchStartTimestamp = 0

document.addEventListener('touchstart', event => {
  let now = +(new Date())
  if (doubleTouchStartTimestamp + 500 > now) {
    event.preventDefault()
  }
  doubleTouchStartTimestamp = now
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
