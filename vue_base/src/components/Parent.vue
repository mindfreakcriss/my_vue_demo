<script>
import Child from "@/components/Child.vue";

  export default {
    data(){
      return {
        message : "Parent Message!", //字符串
        age:20, //数字
        names: ['java','C++','javascript','python'], //数组
        userInfo : { //对象
          name:'hello',
          age:20
        }
      }
    },
    components: {
      Child
    }
  }
</script>

<template>
 <h3>parent</h3>
  <!---动态+静态数据传递-->
  <child :title="message" demo="demo" :age="age" :names="names" :userinfo="userInfo"></child>
</template>

<style scoped>

</style>
