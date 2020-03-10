import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "../../../vuecli2test/src/App";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
