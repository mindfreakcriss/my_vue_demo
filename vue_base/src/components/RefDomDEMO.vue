<script>

/**
 * 内容改变：{{ xxx }}
 * 属性改变： v-bind : 指令
 * 事件： v-on :click
 */

/**
 * 1: 在表单里面使用 ref = "name"
 * 2: this.$refs.name ---> 原生JS的内容
 * 3: 如果没有特殊情况，不要操作DOM
 */
 export default {
   data() {
     return {
       content:"内容"
     }
   },
  methods: {
     getElementHandle() {
       //innerHTML 原生JS的内容
       console.log(this.$refs.container.innerHTML = "哈哈哈哈");
     }
  }
 }
</script>

<template>
   <div ref="container" class="container">{{ content }}</div>
  <button @click="getElementHandle">获取元素</button>
</template>

<style scoped>

</style>
