<script>
export default {
  data() {
    return {
      search: "",
    }
  },
  watch: {
    search(newValue, oldValue) {
      this.$emit('searchEvent', newValue)
    }
  }
}
</script>

<template>
  搜索：<input type="text" v-model="search">
</template>

<style scoped>

</style>
