<script>
 import Article from "@/pages/Article.vue";

 export default {
   components: {
     Article,
   }
 }
</script>

<template>
  <div class="main">
    <h3>Main</h3>
    <Article></Article>
    <Article></Article>
  </div>
</template>

<style scoped>
.main {
  float: left;
  width: 70%;
  height: 600px;
  border: 5px solid #999;
  box-sizing: border-box;
}
</style>
