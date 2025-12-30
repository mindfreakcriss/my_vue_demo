<script>
export default{
  data() {
    return {

    }
  }
}
</script>

<template>
  <slot name="header"></slot>
<h3>Slot Two</h3>
  <!--插槽语法-->
  <slot>默认内容</slot>
  <slot name="main"></slot>
  <slot name="body"></slot>
</template>

<style scoped>

</style>
