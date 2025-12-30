<script>
export default {
  data() {
    return {

    }
  },
  props:{
    'title':String,
    'onEvent':Function //是一个函数名，即：通过函数方式进行子组件和父组件传值
  }
}
</script>

<template>
  <h3>ComponentD</h3>
  {{ title }}
  <p> {{ onEvent('传递数据') }} </p>
</template>

<style scoped>

</style>
