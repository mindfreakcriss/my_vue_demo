<script>
import ComponentD from "@/components/CompenentD.vue";
 export default {
   components: {ComponentD},
   data() {
     return {
       title:"title form C",
       message:"message form D",
     }
   },
   methods: {
     dataFn(data) {
      console.log(data)
       this.message = data;
     }
   }
 }
</script>

<template>
<h3>ComponentC</h3>
  <p>{{ message }}</p>
  <component-d :title="title" :onEvent="dataFn"></component-d>
</template>

<style scoped>

</style>
