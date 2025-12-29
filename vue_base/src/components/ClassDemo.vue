<script>
  export default {
    data() {
      return {
        isActive: false,
        hasError: true,
        classObject: {
          'active': false,
          'text-danger': true,
        },
        arrActive:"active",
        arrHasError:"text-danger",
      }
    }
  }
</script>

<template>
  <p :class="{ 'active':isActive , 'text-danger' : hasError }">Class样式绑定</p> <!--可以是数组OR对象--->
  <p :class="classObject">Class样式绑定2</p>
  <p :class="[arrActive, arrHasError]">Class样式绑定3</p>
  <p :class="[isActive ? 'active text-danger' : '']">Class样式绑定4</p> <!--三元运算符-->
  <p :class="[isActive ? 'active' : '', { 'text-danger' : hasError }]">Class样式绑定4</p> <!--只能数组嵌套对象-->
</template>

<style scoped>
    .active{
      color: green;
      font-size: 30px;
    }

    .text-danger{
      color: red;
    }
</style>
