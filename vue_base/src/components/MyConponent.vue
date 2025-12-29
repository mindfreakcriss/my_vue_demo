<script>
    export default {
      data() {
        return {
          message: "myconponent",
        }
      }
    }
</script>

<template>
  <!--组件-->
  <div class="container">{{ message }}</div>
</template>

<!-- scoped 让当前样式只在当前组件生效 -->
<style scoped>

</style>
