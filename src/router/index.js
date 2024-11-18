import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonajesView from "@/views/PersonajesView"
import ContactoView from "@/views/ContactoView.vue"
import PersonajeDetallesView from "@/views/PersonajeDetallesView.vue"
import NotFoundView from "@/views/NotFoundView.vue"
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/personajes',
    name: 'personajes',
    component: PersonajesView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  },
  {
    path: '/personaje/:id',
    name: 'personaje',
    component: PersonajeDetallesView
  },
  {
    path: '/*',
    name: 'notfound',
    component: NotFoundView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
