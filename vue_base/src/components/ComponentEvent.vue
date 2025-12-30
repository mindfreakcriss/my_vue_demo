<script>
    import componentEventChild from "@/components/ComponentEventChild.vue";
    export default {
      components: {
        componentEventChild,
      },
      methods: {
        getHandle(data) {
          console.log("from clickEventHandle", data);
        }
      }
    }


    /*
    父传子：props
    子传父：自定义事件 this.$emit(func, data) //这段代码在子级存在
    其中：func 表示在子级的一个事件名，data 为事件名传递的数据
    @func=function 这段代码在父级存在
    function 为实际实现的函数名，data可以在function里面使用
     */
    
</script>

<template>
<h3>组件事件</h3>
  <component-event-child @someEvent="getHandle"></component-event-child>
</template>

<style scoped>

</style>


