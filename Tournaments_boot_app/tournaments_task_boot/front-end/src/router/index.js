import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Roles from '@/views/Roles'
import Users from "@/views/Users";
import Players from "@/views/Players";
import Teams from "@/views/Teams";
import Teamplayers from "@/views/Teamplayers";
import Tournaments from "@/views/Tournaments";
import Schedules from "@/views/Schedules";
import Login from "@/views/Login";

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
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/teamplayers',
    name: 'Teamplayers',
    component: Teamplayers
  },
  {
    path: '/tournaments',
    name: 'Tournaments',
    component: Tournaments
  },
  {
    path: '/schedules',
    name: 'Schedules',
    component: Schedules
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
