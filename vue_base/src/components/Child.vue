<script>
export default{
 data() {
   return {

   }
 },
  //父组件的数据名字

  //props 数据传递，只能父级传递到子级，不能反其道

  props: ['title','demo','age','names','userinfo'],
}
</script>

<template>
  <h3>child</h3>
  <p>{{ title }}</p>
  <p>{{ demo }}</p>
  <p>{{ age }}</p>
  <ul>
    <li v-for="item in names">{{ item }}</li>
  </ul>
  <p>{{ JSON.stringify(userinfo) }}</p>
</template>

<style scoped>

</style>
