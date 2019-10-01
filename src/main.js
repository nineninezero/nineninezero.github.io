import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import jquery from './assets/js/jquery.min.js'
import Router from './assets/vue-router'

import Home from './views/Home.vue'
import Qs from 'qs'
window.jquery = jquery
window.$ = jquery
window.qs = Qs

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(Vuex)

// vuex数据
const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
})

// 路由
const router = new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/shouye',
        children: [{
            path: 'shouye',
            name: 'shouye',
            component: resolve => require(['./views/Shouye.vue'], resolve)
        }]
    }]
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