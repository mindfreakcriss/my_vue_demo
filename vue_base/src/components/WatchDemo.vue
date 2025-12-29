<script>
 export default {
   data() {
     return {
        msg : "hello world" //只能侦听这数据
     }
   },
   methods: {
     updateHandler() {
       this.msg = "World!"
     }
   },
   watch: {
     //和data的侦听属性名一致
     //newValue改变之后的数据
     //oldValue改变之前的数据
     msg(newValue, oldValue) {
       //数据发生变化之后的函数
      console.log(newValue)
       console.log(oldValue)
     }
   }
 }
</script>

<template>
  <h3>侦听数据</h3>
  <p> {{ msg }}</p>
  <button @click="updateHandler">修改数据</button>
</template>

<style scoped>

</style>
