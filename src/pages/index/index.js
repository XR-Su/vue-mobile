/**
 * Created by Richard.Su on 2017/4/7.
 */
import './index.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';    
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import store from '../store'

import homeA from '../components/HomeA';
import homeB from '../components/HomeB';
import homeApage1 from '../components/HomeApage1';

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI) 

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/homeA'
    },
    { 
      path: '/homeA', 
      component: homeA,
    },
    {
      path: '/homeA/page1', //注：这里不能使用children，如果这里使用children的话，那么children中的路由是能在<router-view>中的<router-view>中显示
      component: homeApage1
    },
    {
      path: '/homeB', 
      component: homeB,
    },
  ]
})

const app = new Vue({
  router,
  store,
}).$mount('#app')