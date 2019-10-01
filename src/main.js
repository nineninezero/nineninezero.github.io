import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import jquery from './assets/js/jquery.min.js'
import Router from './assets/vue-router'

import "./assets/iconfont/font_1150073_0n4totq75v1/iconfont.css"

import Home from './views/Home.vue'
import Manage from './views/Manage/Manage.vue'
import bottompath from "../src/componts/Bottompath.vue"
import pagination from "../src/componts/Pagination.vue"
import pagefooter from "../src/componts/Pagefooter.vue"
import Qs from 'qs'
window.jquery=jquery
window.$=jquery
window.qs=Qs

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(Vuex)

// 注册公共组件
Vue.component('pagination',pagination),
Vue.component('bottompath',bottompath),
Vue.component('pagefooter',pagefooter)

// vuex数据
const store = new Vuex.Store({
  state: {
      bgc:"#f8f8f8",
      home_actnum:0,
      serve_actnum:0,     
      about_actnum:0,
      help_actnum:0,
      baseurl:'http://devfront.syppqc.com'
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})

// 路由
const router=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/shouye',
      children: [
        {
          path: 'login',
          name: 'login',
          component: resolve => require(['./views/Login.vue'], resolve)
        },
        {
          path: 'zhuce',
          name: 'zhuce',
          component: resolve => require(['./views/Zhuce.vue'], resolve)
        },
        {
          path: 'shouye',
          name: 'shouye',
          component: resolve => require(['./views/Shouye.vue'], resolve)
        },
        {
          path: 'serve',
          name: 'serve',
          component: resolve => require(['./views/Serve/Serve.vue'], resolve)
        },
        {
          path: 'cfb',
          name: 'cfb',
          redirect: '/cfb/check',                
          component: resolve => require(['./views/Serve/Sv_cfb.vue'], resolve),
          children:[
            {
              path: 'check',
              name: 'check',
              component: resolve => require(['./views/Serve/Sv_check.vue'], resolve)
            },     
            {
              path: 'follow',
              name: 'follow',
              component: resolve => require(['./views/Serve/Sv_follow.vue'], resolve)
            },       
            {
              path: 'book',
              name: 'book',
              component: resolve => require(['./views/Serve/Sv_book.vue'], resolve)
            }       
          ]
        },
        {
          path: 'require',
          name: 'require',
          component: resolve => require(['./views/Serve/Sv_require.vue'], resolve)
        },
        {
          path: 'about',
          name: 'about',
          component: resolve => require(['./views/About/About.vue'], resolve),             
          redirect: '/about/ab_about',      
          children:[
            {
              path: 'ab_about',
              name: 'ab_about',
              component: resolve => require(['./views/About/About_about.vue'], resolve)          
            },
            {
              path: 'ab_connect',
              name: 'ab_connect',
              component: resolve => require(['./views/About/About_connect.vue'], resolve)          
            },
            {
              path: 'ab_help',
              name: 'ab_help',
              component: resolve => require(['./views/About/About_help.vue'], resolve),  
              redirect:{name:'help_zhuce',params:{trydata:"用户注册"}},//要传params不能带path，否则参数被忽略
              children:[
                {
                  path: 'help_zhuce',
                  name: 'help_zhuce',
                  component: resolve => require(['./views/About/About_helps/Help_zhuce.vue'], resolve)          
                },              
                {
                  path: 'help_company',
                  name: 'help_company',
                  component: resolve => require(['./views/About/About_helps/Help_zhuce.vue'], resolve)          
                },              
                {
                  path: 'help_hetong',
                  name: 'help_hetong',
                  component: resolve => require(['./views/About/About_helps/Help_zhuce.vue'], resolve)          
                },              
                {
                  path: 'help_check',
                  name: 'help_check',
                  component: resolve => require(['./views/About/About_helps/Help_zhuce.vue'], resolve)          
                },              
                {
                  path: 'help_follow',
                  name: 'help_follow',
                  component: resolve => require(['./views/About/About_helps/Help_zhuce.vue'], resolve)          
                },              
                {
                  path: 'help_book',
                  name: 'help_book',
                  component: resolve => require(['./views/About/About_helps/Help_zhuce.vue'], resolve)          
                },              
                {
                  path: 'help_ques',
                  name: 'help_ques',
                  component: resolve => require(['./views/About/About_helps/Help_question.vue'], resolve)          
                }                
              ]                     
            },
            {
              path: 'ab_law',
              name: 'ab_law',
              component: resolve => require(['./views/About/About_law.vue'], resolve)          
            },
            {
              path: 'ab_secret',
              name: 'ab_secret',
              component: resolve => require(['./views/About/About_secret.vue'], resolve)          
            },
            {
              path: 'ab_serve',
              name: 'ab_serve',
              component: resolve => require(['./views/About/About_serve.vue'], resolve)          
            },
            {
              path: 'ab_partner',
              name: 'ab_partner',
              component: resolve => require(['./views/About/About_partner.vue'], resolve)          
            }
          ]          
        },
        {
          path: 'supply',
          name: 'supply',
          component: resolve => require(['./views/Supply/Supply.vue'], resolve)
        },
        {
          path: 'spl_inside',
          name: 'spl_inside',
          component: resolve => require(['./views/Supply/Spl_inside.vue'], resolve)
        },
        {
          path: 'activity',
          name: 'activity',
          component: resolve => require(['./views/Activity/Activity.vue'], resolve)
        },
        {
          path: 'act_inside',
          name: 'act_inside',
          component: resolve => require(['./views/Activity/Act_inside.vue'], resolve)
        },
        {
          path: 'news',
          name: 'news',
          component: resolve => require(['./views/News/News.vue'], resolve)
        },
        {
          path: 'news_inside',
          name: 'news_inside',
          component: resolve => require(['./views/News/News_inside.vue'], resolve)
        }
      ]
    },
    {
      path: '/Manage',
      name: 'manage', 
      component:Manage,
      redirect: '/rq_check',      
      children:[
        {
          path: 'rq_check',
          name: 'rq_check',
          component: resolve => require(['./views/Manage/Require/Rq_check.vue'], resolve)
        }
      ]     
    }
  ]
})

// 全局导航守卫
// router.beforeEach((to, from, next) => {
//   let mytoken = localStorage.getItem('mytoken')
//   // if(to.matched[0].name==="home"){
//   //   console.log(to.matched)
//   // }
//   if (mytoken) {
//     next()
//   } else {
//     if (to.name !== 'login') {
//       next('/login')
//     } else {
//       next()
//     }
//   }
// })


  

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
}).$mount('#app')
