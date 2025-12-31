import {createRouter,createWebHistory} from 'vue-router'

//存储路由，路由规则
const routes = [
    {
        path: '/', //路径
        //alias:'/home', //路由别名
        alias:['/index','/home'],//批量别名
        component: () => import('@/views/index.vue'), //组件
    },
    {
        path: '/content',
        component: () => import("@/views/content.vue")
    },
    {
        path: '/user/:id',  //user/123 ,需要注意路径需要一致
        name: 'member',//路由名字,用于动态参数传递
        component: () => import('@/views/user.vue'),
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
