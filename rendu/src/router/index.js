import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClavierView from '../views/ClavierView.vue'
import journalView from '../views/journalView.vue'
import contactsView from'../views/contactsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
 
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/clavier',
    name: 'Clavier',
    component: ClavierView
  },
  {
    path: '/journal',
    name: 'journal',
    component: journalView
  },
  {
    path: '/contacts',
    name: '/contacts',
    component: contactsView
  },
  
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
