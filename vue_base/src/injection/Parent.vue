<script>
  import Child from "@/injection/Child.vue"
  export default {
    name: "Parent",
    components: {
      Child,
    },
  }
</script>

<template>
    <h3>Parent</h3>
    <Child />
</template>

<style scoped>

</style>
