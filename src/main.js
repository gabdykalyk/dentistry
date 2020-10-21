import Vue from 'vue'
import App from './App.vue'

import AppHeader from './components/AppHeader.vue';
import AppBanner from './components/AppBanner.vue';
import AppExperience from './components/AppExperience.vue';
import AppFeatures from './components/AppFeatures.vue';
import AppPhotoes from './components/AppPhotoes.vue';
import AppFooter from './components/AppFooter.vue';

Vue.component('AppHeader', AppHeader);
Vue.component('AppBanner', AppBanner);
Vue.component('AppExperience', AppExperience);
Vue.component('AppFeatures', AppFeatures);
Vue.component('AppPhotoes', AppPhotoes);
Vue.component('AppFooter', AppFooter);

new Vue({
  el: '#app',
  render: h => h(App)
})
