<script setup>
//数据接收
import {ref} from "vue";

const props = defineProps({
  title : {
    type: String,
    default:""
  },
  age : {
    type: Number,
    default: 0
  }
})

console.log(props)

</script>

<template>
  <h3>组合式API-Child</h3>
  {{ title }}
  {{ age }}
</template>

<style scoped>

</style>
