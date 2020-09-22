// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Router from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from "./App";
import Login from "./views/Login";
import LoginError from "./views/LoginError";

Vue.use(Router);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const routes = [
  { path: "/", component: Login },
  { path: "/LoginError", component: LoginError}
];

const router = new Router({
  mode:'history',
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
