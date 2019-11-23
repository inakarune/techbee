import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Overview from '../views/Overview.vue'
import About from '../views/About.vue'
import History from '../views/History.vue'
import Organization from '../views/Organization.vue'
import Product from '../views/Product.vue'
import Drill from '../views/Drill.vue'
import Cutter from '../views/Cutter.vue'
import Tooling from '../views/Tooling.vue'
import Accessary from '../views/Accessary.vue'
import Finishing from '../views/Finishing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    children: [
      {
        path: 'overview',
        component: Overview
        
      },
      {
        path: 'history',
        component: History
        
      },
      {
        path: 'organization',
        component: Organization
      }
    ]
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
    children: [
      {
        path: 'drill',
        component: Drill
      },
      {
        path: 'cutter',
        component: Cutter
      },
      {
        path: 'finishing',
        component: Finishing
      },
      {
        path: 'tooling',
        component: Tooling
      },
      {
        path: 'accessary',
        component: Accessary
      }
    ]
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import('../views/Customer.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import('../views/Notice.vue')
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../views/Download.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
