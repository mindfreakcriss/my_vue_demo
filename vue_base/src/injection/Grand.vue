<script>
    import Parent from "@/injection/Parent.vue";
    export default {
      name: "Grand",
      components: {
        Parent,
      },
      data() {
        return {
            message: "grand money for injection for data",
        }
      },
      // provide:{
      //   message:"grand money for injection"
      // }
      //数据来源于data的写法
      provide() {
        return {
          message:this.message
        }
      }
    }
</script>

<template>
    <h3>Grand</h3>
    <parent />
</template>

<style scoped>

</style>
