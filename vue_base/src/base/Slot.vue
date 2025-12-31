<script setup>
  const childMessage = "child slot data"

  /*
  * 1: slot 可以用名字，组件使用 name='xx' 父组件 使用方法 #name
  * 2: slot 没有传可以为默认内容
  * 3: slot 传值给父元素，组件里面声明 :attribute='params'
  *   3.1 : params 为组件的属性
  *   3.2 ： attribute 为属性key
  *   3.3 : 父组件 #name='slotProps' slotProps.attribute
   */

</script>

<template>
  <slot name="data"></slot>
  <h3>Slot 基础</h3>
  <slot>默认内容</slot>
  <slot :msg="childMessage"></slot>
  <slot name="data" :msg="childMessage"></slot>
</template>

<style scoped>

</style>
