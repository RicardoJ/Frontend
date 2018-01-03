// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import jQuery from 'jquery'
global.jQuery = jQuery
let bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'


import VueResource from 'vue-resource'
Vue.use(VueResource);


import VueRouter from 'vue-router'
Vue.use(VueRouter);


import VueGoodTable from 'vue-good-table';

Vue.use(VueGoodTable);

import Bars from 'vuebars'
Vue.use(Bars)




import User from './components/User';
import statistics from './components/statistics';

const router =new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
    {
      path: '/',
      component: User
    },
    {
      path: '/statistics',
      component: statistics
    }

  ]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
