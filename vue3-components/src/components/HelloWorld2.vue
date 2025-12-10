<template>
   <div>
     <p>count:{{count}}</p> <!--再渲染--->
     <button @click="increase">increase</button>
   </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
const increase = () => {
  count.value++;
}
defineExpose({
  count,
  increase,
})
</script>
