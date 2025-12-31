<script setup>

</script>

<template>
  <p>设置layout，表示需要显示的内容，用逗号分隔，布局元素会依次显示。 分页元素包括：prev（跳转到上一页的按钮）、next（跳转到下一页的按钮）、pager（页码列表）、jumper（跳转输入框）、total（总条目数）、sizes（用于设置每页条数的选择器）以及 ->（该符号之后的所有元素将被靠右对齐）。</p>
  <div class="example-pagination-block">
    <div class="example-demonstration">When you have few pages</div>
    <el-pagination layout="prev, pager, next" :total="50" />
  </div>
  <div class="example-pagination-block">
    <div class="example-demonstration">When you have more than 7 pages</div>
    <el-pagination layout="prev, pager, next" :total="1000" />
  </div>
  <div class="example-pagination-block">
    <div class="example-demonstration">有背景色</div>
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>
  <div class="example-pagination-block">
    <div class="example-demonstration">小型分页</div>
    <el-pagination
        size="small"
        background
        layout="prev, pager, next"
        :total="50"
        class="mt-4"
    />
  </div>

</template>

<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
