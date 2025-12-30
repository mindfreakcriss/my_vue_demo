//全局注册
import { createApp } from 'vue'
import AppLife from './App.vue'
import Header from '@/pages/Header.vue'

const app = createApp(AppLife);

//在这里注册组件,推荐局部组册
app.component('Header', Header);


app.mount('#app')
