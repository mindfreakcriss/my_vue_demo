<script>
 export default {
   data() {
      return {

      }
   },
   methods: {
     clickEventHandle() {
       //父级需要实现的函数名字
       this.$emit('someEvent', "child");
     }
   }
 }
</script>

<template>
  <h3>child</h3>
  <button @click="clickEventHandle">传递数据</button>
</template>

<style scoped>

</style>
