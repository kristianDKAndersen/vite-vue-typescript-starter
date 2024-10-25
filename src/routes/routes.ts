import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: '/',
          name: 'OverView',
          component: () => import('../views/frontPage.vue')
        }
    ]
})

export default router