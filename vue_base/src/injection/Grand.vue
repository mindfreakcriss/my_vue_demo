<script>
    import Parent from "@/injection/Parent.vue";
    export default {
      name: "Grand",
      components: {
        Parent,
      },
      data() {
        return {
          title: "Grand money",
        }
      }
    }
</script>

<template>
    <h3>Grand</h3>
    <parent :title="title"/>
</template>

<style scoped>

</style>
