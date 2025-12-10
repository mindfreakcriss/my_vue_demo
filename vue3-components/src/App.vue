<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorld2 from "@/components/HelloWorld2.vue";
import { ref } from 'vue'
const refCount = ref(null)

console.log(refCount)
console.log(refCount.value)
//
// const increment = () => {
//   count.value++
// }
//使用组件的方法
const increaseChildCount = () => {
  refCount.value.count++
}

const invokeChildIncrease = () => {
  refCount.value.increase()
}

</script>

<template>
  <div>
    <h2>APP组件</h2>
    <p>count:{{count}}</p>
    <button @click="increment">add</button>
    <HelloWorld msg="hello world" count="0"/> <!--给子组件以属性传值-->

    <HelloWorld2 ref="refCount"/>

    <button @click="increaseChildCount">increaseChildCount</button>
    <button @click="invokeChildIncrease">invokeChildIncrease</button>
  </div>
</template>

<style scoped>
p {
  background: #ccc;
}
div {
  border: 1px solid #ccc;
  margin: 20px;
}
</style>
