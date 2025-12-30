<script>
import ComponentB from "@/components/ComponentB.vue";
  export default {
    data() {
      return {
        'title':"ComponentA",
      }
    },
    components: {
      ComponentB
    }
  }
</script>

<template>
 <h3>ComponentA</h3>
  <ComponentB :title="title"></ComponentB>
</template>

<style scoped>

</style>
