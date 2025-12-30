<script>
    export default {
      data() {
        return {
          childMessage : "child slot data"
        }
      }
    }
</script>

<template>
  <h3>slot three</h3>
  <slot :msg="childMessage"></slot>
  <slot name="data" :msg="childMessage"></slot>
</template>

<style scoped>

</style>
