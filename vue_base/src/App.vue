<template>
    <h3>生命周期函数</h3>
    <p> {{message}}</p>
  <button @click="updateData">更新数据</button>

</template>

<script>

/**
 * 生命周期函数,自动执行，属于钩子函数。可以在特定的时期做自己想做的事情
 * 创建期： beforeCreate created
 *
 * 挂载期：beforeMount mounted
 *
 * 更新期：beforeUpdated updated
 *
 * 销毁期：beforeUnmounted unmounted
 *
 */
export default {
  name: "App",
  data() {
    return {
      message: "hello world",
    }
  },
  methods: {
    updateData() {
      this.message = "hello world update";
    }
  },
   beforeCreate() {
    console.log("beforeCreate");//组件创建之前
   },
  created() {
    console.log("created");//组件创建之后
  },
  beforeMount() {
    console.log("beforeMount");//组件渲染之前
  },
  mounted() {
    console.log("mounted");//组件渲染之后
  },
  beforeUpdate() {
    console.log("beforeUpdate"); //组件更新之前
  },
  updated() {
    console.log("updated");//组件更新之后
  },
  beforeDestroy() {
    console.log("beforeDestroy"); //组件销毁之前
  },
  destroyed() {
    console.log("destroyed"); //组件更新之后
  }
}
</script>
