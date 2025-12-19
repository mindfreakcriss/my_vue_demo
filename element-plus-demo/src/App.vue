<script setup>
import {Delete, Location} from "@element-plus/icons-vue";
</script>

<template>
  <el-container>
    <el-aside width="200px" style="height: 100%"><el-menu
        active-text-color="#ffd404b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="##fff"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">Item One</el-menu-item>
          <el-menu-item index="1-2">Item Two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu></el-aside>
    <el-container>
        <el-header>
        Header
        </el-header>
        <el-main>
         <div class="el-row">
           <el-button>default</el-button>
           <el-button type="primary" @click="clickA">Primary</el-button>
           <el-button type="danger" plain>Danger-plain</el-button>
           <el-button type="success" round>Success-round</el-button>
           <el-button type="info" circle>IC</el-button>
           <el-button type="warning" :icon="Delete">Icon</el-button>
         </div>
          <div class="el-col">
             {{say_sth}}
          </div>
       </el-main>
    </el-container>
  </el-container>
</template>

<style scoped></style>

<script>

import axios from "axios";

export default {
  data() {
    return {
      message: "hello element plus",
      say_sth: "Hello World",
    }
  },
  methods: {
    clickA() {
      axios.get("http://localhost:9501/index/list").then((response) => {
        this.say_sth = response.data.data;
      }).catch(function(error) {
            console.log(error);
          })
    }
  }
}
</script>
