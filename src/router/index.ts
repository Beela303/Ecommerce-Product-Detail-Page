import { createRouter, createWebHistory } from 'vue-router'
import ProductDetailPage from '../views/ProductDetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductDetailPage,
    },
  ],
})

export default router
