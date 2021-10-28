import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Roles from '@/views/Roles'
import Users from "@/views/Users";
import Players from "@/views/Players";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/roles',
    name: 'Roles',
    component: Roles
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/players',
    name: 'Players',
    component: Players
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
