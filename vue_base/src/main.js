//全局注册
import { createApp } from 'vue'
//引入element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//根组件
//import App from './App.vue'
import App from './App-Element.vue'

const app = createApp(App);

app.use(ElementPlus)

//全局注入
app.provide("globalData",'i am global data');

//挂载应用
app.mount('#app')
