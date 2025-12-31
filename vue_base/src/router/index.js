import {createRouter,createWebHistory} from 'vue-router'

//存储路由，路由规则
const routes = [
    {
        path: '/', //路径
        component: () => import('@/views/index.vue'), //组件
    },
    {
        path: '/content',
        component: () => import("@/views/content.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
