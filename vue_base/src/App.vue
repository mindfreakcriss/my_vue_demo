<script setup>

import {ref, onUnmounted, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, reactive, provide,} from "vue";
import Base from "@/base/Base.vue";
import Class from "@/base/Class.vue";
import Slot from "@/base/Slot.vue";
import Grand from "@/base/Grand.vue";
//layout
import Header from "@/pages/Header.vue";
import Main from "@/pages/Main.vue";
import Aside from "@/pages/Aside.vue";

//组件注解,全局
provide("globalMessage", "这是一个全局注解数据")

const message = ref("生命周期函数内容")
function updateData() {
  message.value = "更新生命周期函数内容"
}
const banner = reactive([])
onBeforeMount(() => {
  console.log("组件挂载前打印")
})

onMounted(() => {
  console.log("组件挂载后打印")
})

//可以多个生命周期函数内容
onMounted(() => {
  console.log("组件渲染之后2")
  banner.value = [
    {
      'title':"这是title",
      'content':"这是content"
    }
  ]
  console.log(banner)
});

onUnmounted(() => {
  console.log("组件被卸载之后打印")
})

onBeforeUpdate(() => {
  console.log('数据更新前打印')
})

onUpdated(() => {
  console.log("数据更新后打印")
})

</script>

<template>
  <h3>生命周期函数及应用</h3>
  <p>{{ message }}</p>
  <button @click="updateData">更新数据</button>
  <p>接口数据模拟</p>
  <ul>
    <li v-for="(item, index) in banner" :key="index">
      <h3>{{item.title}}</h3>
      <p>{{item.content}}</p>
    </li>
  </ul>
  <h3>插槽内容</h3>
  <Slot>
    <template #data="slotProps">
      <h3> {{ slotProps.msg}} </h3>
    </template>
  </Slot>

  <Base/>
  <Class/>
  <h3>组件传值内容</h3>
  <Grand/>

  <Header/>
  <Aside/>
  <Main/>
</template>
