<script setup>
import BreadcrumbDemo from "@/element-ui/BreadcrumbDemo.vue";
import NavigatorDemo from "@/element-ui/NavigatorDemo.vue";
import PageHeaderDemo from "@/element-ui/PageHeaderDemo.vue";
import MainDemo from "@/element-ui/MainDemo.vue";
import DialogDemo from "@/element-ui/DialogDemo.vue";
</script>

<template>
<el-container>
  <el-aside>
    <NavigatorDemo/>
  </el-aside>
  <el-container>
    <el-header>
      <PageHeaderDemo/>
    </el-header>
    <el-container>
      <el-header><BreadcrumbDemo/></el-header>
      <el-main>
        <MainDemo/>
        <hr>
        <DialogDemo/>
      </el-main>
    </el-container>
  </el-container>
</el-container>
</template>

<style scoped>

</style>
