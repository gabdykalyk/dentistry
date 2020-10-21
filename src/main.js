import Vue from 'vue'
import App from './App.vue'

import AppHeader from './components/AppHeader.vue';
import AppBanner from './components/AppBanner.vue';

Vue.component('AppHeader', AppHeader);
Vue.component('AppBanner', AppBanner);

new Vue({
  el: '#app',
  render: h => h(App)
})
