//全局注册
import { createApp } from 'vue'
//引入element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导入路由器
import router from '@/router'

//根组件
//import App from './App.vue'
//element-demo
//import App from './App-Element.vue'
//vue-router-demo
import App from './App-router.vue'

const app = createApp(App);

app.use(ElementPlus)
//使用路由
app.use(router)

//全局前置守卫
router.beforeEach((to, from, next) => {
    console.log("to",to)
    console.log("from", from)

    //拦截，不能去 member
    if (to.name === "member") {
        next(false)
    } else {
        next()
    }
})

//全局注入
app.provide("globalData",'i am global data');

//挂载应用
app.mount('#app')
