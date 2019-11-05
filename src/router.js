import Vue from 'vue';
import Router from 'vue-router';
import Home from 'Component/Home.vue';
import Login from 'Component/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      props: false
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      props: false
    }

  ]
});
