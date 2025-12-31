<script setup>

</script>

<template>
  <div class="common-layout">
    <!--上下-->
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
  <hr>
  <!--左右左-->
  <div class="common-layout">
    <el-container>
      <el-aside>Aside</el-aside>
      <el-main>Main</el-main>
      <el-aside>Aside</el-aside>
    </el-container>
  </div>
  <hr>
  <!-- 上 下（左右）--->
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

</style>
