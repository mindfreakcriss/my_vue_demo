<script>
  export default {
    data() {
      return {
        message: "",
        checked:false
      }
    }
  }
</script>

<template>
  <h3>表单输入绑定</h3>
  <form action="">
    <input type="text" v-model.lazy="message"> <!--失去焦点（每次change事件）才显示--->
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{checked}}</label>
  </form>
  <p>{{message}}</p>
</template>

<style scoped>

</style>
