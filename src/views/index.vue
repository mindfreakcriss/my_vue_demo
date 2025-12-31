<script setup>
    import {useRouter} from 'vue-router'
    const router = useRouter()

    const goto = () => {
      router.push('/user/12')
    }

</script>

<template>
  <h3>首页</h3>
  <router-link to="/content">查询字符串传参数</router-link>
  <br>
  <router-link to="/user/12">路径传参数</router-link>
  <br>
  <router-link :to="{path:'/content',query:{id:123,name:'title'}}">查询字符串传参数-动态属性</router-link>
  <br>
  <router-link :to="{name:'member',params:{id:123,name:'title'}}">路径传参数-动态属性</router-link>
  <br>
  <button @click="goto">编程式导航</button>
</template>

<style scoped>

</style>
