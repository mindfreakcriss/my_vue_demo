<script>

/**
 * 生命周期的应用
 *
 * 1: 获取DOM节点，this.$ref.attribute 对于html 增加 ref 名字
 * 2: 模拟网络请求，在UI渲染好之后的处理
 */
    export default {
      name: 'UserComponents',
      data() {
          return {
            banner : []
          }
      },
  beforeMount() {
        console.log("beforeMount + UserComponents");
        console.log(this.$refs.name)
      },
      mounted() {
        console.log("beforeMount + UserComponents");
        console.log(this.$refs.name);
        //模拟网络请求
        this.banner = [
          {
            'title':"这是title",
            'content':"这是content"
          }
        ]
      }
    }
</script>

<template>
    <h3>生命周期函数的应用</h3>
   <p ref="name">UserComponent</p>
  <ul>
    <li v-for="(item , index) in banner" :key="index">

      <h3>{{ item.title}}</h3>
      <p>{{ item.content }}</p>

    </li>
  </ul>
</template>

<style scoped>

</style>
