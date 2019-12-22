import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFax, faEnvelope, faPhoneVolume, faBuilding, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { firebaseConfig } from './env/firebase'

library.add(faFax, faEnvelope, faPhoneVolume, faBuilding, faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
