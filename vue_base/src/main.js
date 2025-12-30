//全局注册
import { createApp } from 'vue'

//根组件
import AppComposive from './App-composive.vue'
import Header from '@/pages/Header.vue'

const app = createApp(AppComposive);

//在这里注册组件,推荐局部组册
app.component('Header', Header);

//全局注入
app.provide("globalData",'i am global data');

//挂载应用
app.mount('#app')
