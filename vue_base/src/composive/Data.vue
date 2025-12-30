<!--复杂写法-->
<!--<script>-->
<!--    // ref 用于基本响应式数据 String Number Boolean-->
<!--    // reactive 用于创建引用类型的响应式数据 Object Array-->
<!--    import { ref, reactive } from 'vue'-->
<!--    export default {-->
<!--       setup() {-->
<!--         const message = ref("组合式API绑定数据")-->
<!--         const userInfo = reactive({-->
<!--           name:"iwen"-->
<!--         })-->

<!--         //需要return 才能用-->
<!--         return {-->
<!--           message,-->
<!--           userInfo-->
<!--         }-->

<!--       }-->
<!--    }-->
<!--</script>-->

<!--简约写法-->
<script setup>
// ref 用于基本响应式数据 String Number Boolean
// reactive 用于创建引用类型的响应式数据 Object Array
// computed 用于计算属性
//watch 侦听
// onMounted 生命周期函数
import { ref, reactive,computed,watch, onMounted, } from 'vue'

//基础属性
const message = ref("组合式API绑定数据简约")
const userInfo = reactive({
  name:"iwen"
})

//计算属性
const reverse = computed( () => {
  //注意：message 在逻辑里面读取(script)，需要加 .value 才行
  return message.value.split("").reverse().join("")
})

const demo = computed(() => {
  return message.value + "hahah";
})

//事件实现
const count = ref(0)
function addCount() {
  count.value += 1
}

//监听，参数1 监听的数据
watch(count, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})

//生命周期函数，每个生命周期的方法可以独立处理对应的业务
onMounted(() => {
  console.log("组件渲染之后")
})

onMounted(() => {
   console.log("组件渲染之后2")
});

</script>

<template>
    <h3>组合式API</h3>
    <p>{{ message }}</p>
    <p>{{ userInfo.name}}</p>
    <p>{{ reverse }}</p>
    <p>{{ demo }}</p>
    <p>{{ count }}</p>
    <button @click="addCount">增加</button>
</template>

<style scoped>

</style>
