<script>
export default {
  data() {
    return {

    }
  },
  props: {
    title: {
      type: String,
      required: true//必选项
      //type: [String, object, Number, Array]
    },
    age:{
      type: Number,
      default: 0
    },
    //数字和字符串可以直接default,数组和对象需要工厂函数返回默认值
    names: {
      type: Array,
      default: () => [
          "空"
      ]
    }
  }
}
</script>

<template>
  <h3>ComponentB</h3>
  <p> {{ title }}</p>
  <p>{{ age }}</p>
  <ul>
    <li v-for="item in names">{{item}}</li>
  </ul>
</template>

<style scoped>

</style>

