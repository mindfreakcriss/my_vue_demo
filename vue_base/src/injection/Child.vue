<script>
//provide 和 inject 只能从上往下传
    export default {
      name: 'Child',
      inject:["message",'globalData'],
      data() {
        return {
          fullMessage: this.message + " and child ",
        }
      }
    }
</script>

<template>
  <h3>Child</h3>
  {{ fullMessage }}
  <p> {{globalData}} </p>

</template>

<style scoped>

</style>
