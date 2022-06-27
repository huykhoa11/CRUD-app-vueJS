import { createRouter, createWebHistory } from 'vue-router'
import parentProductsList from '../products/ParentList.vue'

const routes = [
  {
    path: '/',
    name: 'parentProductsList',
    component: parentProductsList
  },
  {
    path: '/products/add',
    name: "productsAdd",
    component: () => import(/* webpackChunkName: "about" */ '../products/Form.vue')
  },
  {
    path: '/products/edit/:id',
    name: 'productsEdit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../products/EditForm.vue')
  },
  {
    path: '/users',
    name: 'users',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../users/List.vue')
  },
  {
    path: '/api/products',
    name: 'apiProducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../users/List.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
