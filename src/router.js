import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home'
import List from './pages/list/List'
import City from './pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path:'/city',
      name: 'city',
      component: City
    }
  ]
})
