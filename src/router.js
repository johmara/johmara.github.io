import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LockAR from './views/LockAR.vue'
import Hans from './views/Hans.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'

Vue.use(Router)

export default new Router({
    //mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path:'/about',
        name: 'About',
        component: About
      },
      {
        path:'/projects',
        name: 'Projects',
        component: Projects
      },
      {
        path: '/lockar',
        name: 'LockAR',
        component: LockAR
      },
      {
        path: '/hans',
        name: 'HANS',
        component: Hans
      }



    ],
})
