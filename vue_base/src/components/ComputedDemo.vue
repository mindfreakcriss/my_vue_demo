<script>
  export default {
    data() {
      return {
        website : {
          name:"CS",
          content:['java','python','C++'],
        }
      }
    },
    //计算属性
    computed:{
      //计算属性编写是方法，但是使用不加括号
      websiteContent() {
        return this.website.content.length > 0 ? 'yes' : 'no';
      }
    }
  }
</script>

<template>
  <h3> {{ website.name }}</h3>
  <p> {{ websiteContent }}  </p>
</template>

<style scoped>

</style>
