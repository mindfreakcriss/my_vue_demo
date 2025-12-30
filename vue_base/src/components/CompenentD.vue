<script>
export default {
  data() {
    return {

    }
  },
  props:[
      'title','onEvent'
  ]
}
</script>

<template>
  <h3>ComponentD</h3>
  {{ title }}
  <p> {{ onEvent('传递数据') }} </p>
</template>

<style scoped>

</style>
