<script>
    export default {
      data() {
        return {

        }
      },
      methods: {
        clickHandler(e) {
          //阻止默认事件
          // e.preventDefault()
          console.log("clickHandler");
        },
        clickP(e) {
          e.stopPropagation();
          console.log("clickP");
        },
        clickDiv() {
          console.log("clickDev");
        }
      }
    }
</script>

<template>
  <h3>事件修饰符</h3>
  <a @click.prevent="clickHandler" href="https://www.baidu.com">百度</a>
  <div @click="clickDiv">
    <p @click.stop="clickP">测试冒泡</p> <!--阻止事件冒泡-->
  </div>
</template>

<style scoped>

</style>
