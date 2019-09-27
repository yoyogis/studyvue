import Vue from 'vue';
import App from './App.vue';
import Login from './Login.vue';
import Nav from './Nav.vue';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

new Vue({
  router,
  store,
  render: (h) => h(Login),
}).$mount('#login');
