<script>
  export default {
    data() {
      return {
        names: ['iwen','Joe','frank'],
        count: 0,
      }
    },
    methods: {
      //event 对象,是JS的原生对象
      addCount(e) {
        e.target.innerHTML = 'Add' + this.count;
        this.count++;
      },
      //传值+事件
      getNameHandler(name, e) {
        console.log(name);
        console.log(e)
      }
    }
  }
</script>

<template>
  <h3>事件参数传值</h3>
  <button @click="addCount">Add</button>
  <p>{{count}}</p>
  <!---需要注意要写 $event -->
  <p @click="getNameHandler(item, $event)" v-for="(item , index) in names" :key="index">{{item}}</p>
</template>

<style scoped>

</style>
