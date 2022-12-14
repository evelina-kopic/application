import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Authentication.vue'),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')

  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
