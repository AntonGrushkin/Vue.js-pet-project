import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
import VueRouter from 'vue-router';
import Main from './components/pages/Main';
import Cart from './components/pages/Cart';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/cart',
      component: Cart
    } 
  ]
});

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
