import { createRouter, createWebHistory } from 'vue-router'
// import parentProductsList from '../products/ParentList.vue'

const routes = [
  {
    path: '/',
    name: 'parentProductsList',
    component: () => import('../products/ParentList.vue')
  },
  {
    path: '/products/add',
    name: "productsAdd",
    component: () => import('../products/Form.vue')
  },
  {
    path: '/products/edit/:id',
    name: 'productsEdit',
    component: () => import('../products/ParentEdit.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../users/List.vue')
  },
  {
    path: '/api/products',
    name: 'apiProducts',
    component: () => import('../users/List.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import('../views/404')
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
