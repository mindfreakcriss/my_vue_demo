<script>
  import Child from "@/injection/Child.vue"
  export default {
    name: "Parent",
    components: {
      Child,
    },
    props:["title"]
  }
</script>

<template>
    <h3>Parent</h3>
    <Child :title="title"/>
</template>

<style scoped>

</style>
