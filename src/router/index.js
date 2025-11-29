import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TentangView from '../views/TentangView.vue'
import ContactView from '../views/ContactView.vue'
import LayananView from '../views/LayananView.vue'
import EdukasiView from '@/views/EdukasiView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tentang',
      name: 'tentang',
      component: TentangView,
    },
    {
      path: '/layanan',
      name: 'layanan',
      component: LayananView,
    },
    {
      path: '/edukasi',
      name: 'edukasi',
      component: EdukasiView,
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: ContactView,
    },
  ],
})

export default router
