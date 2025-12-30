<script setup>
  import Child from '@/composive/Child.vue'
  import { ref } from 'vue'
  const age = ref(20)
</script>

<template>
<h3>组合式API-Parent</h3>
   <!--数据传递-->
  <child title="数据传递" :age="age"/>
</template>

<style scoped>

</style>
