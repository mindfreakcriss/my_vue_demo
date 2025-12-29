<script>
import Item from "@/pages/Item.vue";
export default {
    components: {
      Item
    }
  }
</script>

<template>
  <div class="aside">
    <h3>Aside</h3>
    <item></item>
    <item></item>
    <item></item>
  </div>
</template>

<style scoped>
.aside {
  float: right;
  width: 30%;
  height: 600px;
  border: 5px solid #999;
  box-sizing: border-box;
}
</style>
