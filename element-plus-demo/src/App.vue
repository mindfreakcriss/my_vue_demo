<script setup></script>

<template>
  <div class="el-row">
    <el-button>default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
  </div>
</template>

<style scoped></style>

<script>
export default {
  data() {
    return {
      message: "hello element plus"
    }
  },
  methods: {
    clickA:function () {
      alert("hello wolrd")
    }
  }
}
</script>
