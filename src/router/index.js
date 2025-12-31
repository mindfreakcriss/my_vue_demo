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
    },
    {
        'path': '/vip', //需要一个空白的页面进行渲染，router-view
        component: () => import('@/views/vip.vue'),
        children: [
            {
                path: '', //默认页面
                component: () => import("@/views/vip/default.vue") //子页面路由
            },
            {
                path: 'order',
                component: () => import("@/views/vip/order.vue") //子页面路由
            },
            {
                path: 'info',
                component: () => import("@/views/vip/info.vue")
            },
        ]
    },
    //重定向
    {
        path: '/svip',
        redirect: '/vip',
        //redirect: {name:'member',params:{id:123,name:'title'}}, //也支持函数式传惨
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
