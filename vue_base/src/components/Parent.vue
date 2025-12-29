<script>
import Child from "@/components/Child.vue";

  export default {
    data(){
      return {
        message : "Parent Message!"
      }
    },
    components: {
      Child
    }
  }
</script>

<template>
 <h3>parent</h3>
  <!---动态+静态数据传递-->
  <child :title="message" demo="demo"></child>
</template>

<style scoped>

</style>
