<script setup>

</script>

<template>
    <p>栅栏系统， el-row 分成 24列 ， el-col 为6个span </p>
    <el-row :gutter="24">
      <el-col :span="6"><div class="grid-content ep-bg-purple">3</div></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple">3</div></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple">4</div></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple">4</div></el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="6" :offset="2"><div class="grid-content ep-bg-purple">span6:offset2</div></el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple">span8</div></el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple">span8</div></el-col>
    </el-row>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color:#999
}
</style>
