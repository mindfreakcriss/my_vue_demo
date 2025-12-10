import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import {createRouter, createWebHashHistory} from "vue-router";

import Home from './views/Home.vue'
import Users from './views/user/Users.vue'
import UserDetails from './views/user/UserDetail.vue'
import UserStore from './views/user/UserStart.vue'
import UserEdit  from "./views/user/UserEdit.vue";
import UserStart from "./views/user/UserStart.vue";

//说明路由去那个页面
const routes = [
    { path: '/', component: Home },
    { path: '/users',
        component: Users,
        children: [
            {
                path: '',component:UserStart,
            },
            {
                path: ':id',component:UserDetails,
            },
            {
                path: ':id/edit',component:UserEdit,
            }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
