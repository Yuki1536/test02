import HelloWorld from '../components/HelloWorld.vue';
import Test from '../components/Test.vue'
import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);
// 可写在router/index中，用export导出
export default new Router({
  routes: [
    {
        path:'/',
        redirect:'/home'
    },
    {
          path: '/home',
          name:'home',
          component: HelloWorld,
          children:[{
            path:'child',
            component:()=>import('../components/testc.vue')
          }]
      },
    {
          path: '/test',
          name:'test',
          component: Test
          // 路由懒加载
        //   component: ()=>import('../components/Test.vue')
      }
  ]
})