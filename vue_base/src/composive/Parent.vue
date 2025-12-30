<script setup>
  import Child from '@/composive/Child.vue'
  import { ref } from 'vue'
  const age = ref(20)

  //获取子组件数据
  const msg = ref("")
  function getMsg(data) {
    msg.value = data
  }
</script>

<template>
<h3>组合式API-Parent</h3>
   <!--数据传递-->
  <child title="数据传递" :age="age" @on-some-event="getMsg"/>
  {{ msg }}
</template>

<style scoped>

</style>
