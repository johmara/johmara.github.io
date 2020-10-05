import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LockAR from './views/LockAR.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
          path: '/LockAR',
          name: 'LockAR',
          component: LockAR
      }
    ],
})
