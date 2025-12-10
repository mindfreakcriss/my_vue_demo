<template>
  <div>
    <h1>编辑用户</h1>
    <p>用户编号 ： {{$route.params.id}}</p>
      <!--query-->
    <p>用户名称:{{$route.query.name}}</p>
    <p>用户年龄：{{$route.query.age}}</p>
  </div>
</template>
