<script>
export default {
  data() {
    return {
      names: ['C++',"java",'python']
    }
  },
  methods:{
    addListHandler() {
      //应用的情况
      //this.names.push("javescript"); //UI更新
      this.names.concat(['javascript']) //UI没有更新
      //this.names = this.names.concat(['javascript']) //UI有更新
    }
  }
}
</script>

<template>
    <h3>数组变化侦听</h3>
  <button @click="addListHandler">添加数据</button>
  <ul>
    <li v-for="(item,index) in names" :key="index">{{item}}</li>
  </ul>
</template>

<style scoped>

</style>
