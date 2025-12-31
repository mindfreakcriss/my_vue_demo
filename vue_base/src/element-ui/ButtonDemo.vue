<script setup>
//注意图标需要先导入
import {
    Check,
    Delete,
    Edit,
    Search,
    Message,
    Star,
} from '@element-plus/icons-vue'
</script>

<template>
  <h3>按钮组件</h3>
  <div class="button-example">
    <p>基础内容</p>
    <div class="button-row">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>
    <p>Plain按钮</p>
    <div class="button-row">
      <el-button plain>plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </div>
    <p>Round按钮</p>
    <div class="button-row">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </div>
    <p>图标按钮，需要先引入</p>
    <div class="button-row">
      <el-button :icon="Search" circle/>
      <el-button type="primary" :icon="Edit" circle/>
      <el-button type="success" :icon="Check" circle/>
      <el-button type="info" :icon="Message" circle/>
      <el-button type="warning" :icon="Star" circle/>
      <el-button type="danger" :icon="Delete" circle/>
    </div>
    <p>禁止状态</p>
    <div class="button-row">
      <el-button disabled>Default</el-button>
      <el-button type="primary" disabled>Primary</el-button>
      <el-button type="success" disabled>Success</el-button>
      <el-button type="info" disabled>Info</el-button>
      <el-button type="warning" disabled>Warning</el-button>
      <el-button type="danger" disabled>Danger</el-button>
    </div>
    <p>按钮尺寸</p>
    <div class="button-row">
      <el-button type="success" size="large">Success</el-button>
      <el-button type="success" size="default">Success</el-button>
      <el-button type="success" size="small">Success</el-button>
    </div>
    <p>自定义颜色</p>
    <div class="button-row">
      <el-button color="#626aef" type="success" size="default">Success</el-button>
      <el-button color="#626aef" type="success" size="default" plain>Success</el-button>
      <el-button color="#626aef" type="success" size="default" disabled>Success</el-button>
    </div>
  </div>
</template>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.button-row > * {
  margin: 0;
}
</style>
