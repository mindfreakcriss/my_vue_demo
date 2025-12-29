<script>
export default{
 data() {
   return {

   }
 },
  //父组件的数据名字

  //props 数据传递，只能父级传递到子级，不能反其道

  props: ['title','demo']
}
</script>

<template>
  <h3>child</h3>
  <p>{{ title }}</p>
  <p>{{ demo }}</p>
</template>

<style scoped>

</style>
