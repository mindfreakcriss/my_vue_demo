<script setup>
    import Item from "@/pages/Item.vue";
</script>

<template>
  <div class="aside">
      <h3>Aside</h3>
    <Item/>
    <Item/>
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
