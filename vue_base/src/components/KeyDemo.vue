<script>
  export default {
      data() {
        return {
          names:['John','Doe',"Joe"],
        }
      }
  }
</script>

<template>
<h3>Key属性添加到v-for</h3>
  <p v-for="(item,index) in names" :key="index">{{item}}</p><!--推荐使用ID，不要用index , index 会变化-->
</template>

<style scoped>

</style>
