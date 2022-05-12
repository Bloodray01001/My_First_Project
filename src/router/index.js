import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/HomeView.vue'
import project from '../views/project.vue'

Vue.use(VueRouter)
export default new VueRouter ({
  routes: [
    {
      path: '',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'project',
      component: project
    }
  ]
})
