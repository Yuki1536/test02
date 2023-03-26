import Vue from 'vue'
import App from './App.vue'

// import HelloWorld from './components/HelloWorld.vue';
// import Test from "./components/Test.vue";
// 注册
// import Router from "vue-router";
// Vue.use(Router);
// // 可写在router/index中，用export导出
// const router = new Router({
//   routes: [
//     {
//           path: '/',
//           name:'home',
//           component: HelloWorld
//       },
//     {
//           path: '/test',
//           name:'test',
//           // component: Test
//           // 路由懒加载
//           component: ()=>import('./components/Test.vue')
//       }
//   ]
// })

// https://code.juejin.cn/pen/7214690048015335462 ,解构赋值
import router from "./router/index.js";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
