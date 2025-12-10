<template>
  <div>
    <h1>用户详情</h1>

    <p>用户编号： {{$route.params.id}}</p>

    <router-link
        :to="`/users/${$route.params.id}/edit?name=criss&age=12`"
        class="btn btn-primary"
        type="button">编辑用户</router-link>
  </div>
</template>

