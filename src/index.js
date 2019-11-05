import Vue from 'vue';
import router from './router';
import App from 'Component/App.vue';

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
