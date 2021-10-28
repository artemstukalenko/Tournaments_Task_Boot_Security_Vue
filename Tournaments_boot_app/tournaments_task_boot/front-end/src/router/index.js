import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Roles from '@/views/Roles'
import AddRoleForm from '@/components/role/AddRoleForm'
import Users from "@/views/Users";

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
  // {
  //   path: '/addRole',
  //   name: 'AddRole',
  //   component: AddRoleForm
  // },
  {
    path: '/users',
    name: 'Users',
    component: Users
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
