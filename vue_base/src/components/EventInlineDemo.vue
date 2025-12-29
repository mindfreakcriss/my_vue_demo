<script>
  export default {
    data() {
      return {
        count:0
      }
    }
  }
</script>

<template>
<h3>内联事件处理</h3>
<!--  <button v-on:click="count++">Add</button>-->
  <button @click="count++">Add</button>
  <p>{{count}}</p>
</template>

<style scoped>

</style>
