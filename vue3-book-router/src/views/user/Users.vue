<template>
  <div>
    <!--面包屑-->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-decoration-none">首页</router-link>
        </li>
        <li class="breadcrumb-item active">
          <router-link to="/users" class="text-decoration-none">用户</router-link>
        </li>
      </ol>
      <!--CURD-->
      <div class="row">
        <!--用户列表-->
        <div class="col-3">
          <h1>用户列表</h1>
          <div class="list-group">
            <router-link
              v-for="id in ids"
              :key="id"
              :to="`/users/${id}`"
              class="list-group-item list-group-item-action"
            >用户{{id}}</router-link>
          </div>
        </div>
        <!--选择用户 CURD-->
        <div class="col-9">
          <router-view></router-view>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>

import { ref } from 'vue';
const ids = ref([1,2,3,4,5]);

</script>
