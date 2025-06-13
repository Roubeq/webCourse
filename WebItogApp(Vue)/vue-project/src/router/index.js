import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import CourseView from '@/views/CourseView.vue'
import InfoView from '@/views/InfoView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainView
        },
        {
            path: '/courses',
            name: 'courses',
            component: CourseView
        },
        {
            path: '/info',
            name: 'info',
            component: InfoView
        }
    ]
})

export default router