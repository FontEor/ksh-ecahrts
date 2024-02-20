// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Mock from "./mock/mock"
 
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios,axios);

Vue.use(ElementUI);
Vue.config.productionTip = false;

import Vuex from 'vuex'
Vue.use(Vuex)
//全部引入
var echarts = require('echarts');


import 'lib-flexible/flexible.js'
/* eslint-disable no-new */

//在跳转前执行
router.beforeEach((to,from,next)=>{
  //获取用户的登录状态
  let isLogin=sessionStorage.getItem('islogin')
  //注销
  if(to.path=='/logout'){
    //清空
    sessionStorage.clear()
    //跳转到登录
    next({path:'/login'})
  }
  //如果请求的是登录页
  else if(to.path=='/login'){
    if(isLogin!=null){
      //跳转到首页
      next({path:'/Home'})
    }
  }else if(isLogin==null){
    next({path:'/login'})
  }
  //下一个路由
  next();
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
