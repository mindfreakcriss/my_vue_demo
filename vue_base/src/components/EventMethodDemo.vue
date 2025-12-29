<script>
    export default {
      data() {
        return {
          count: 0,
        }
      },
      //所有方法和函数都写在这
      methods: {
        addCount() {
          //读取数据的方案，this.count this 可以读取data里面的数据
          this.count++;
        }
      }
    }
</script>

<template>
  <h3>函数时间处理</h3>
  <button @click="addCount">Add</button>
  <p>{{count}}</p>
</template>

<style scoped>

</style>
