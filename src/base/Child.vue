<script setup>
//数据接收
import {ref , inject} from "vue";

//注解数据。获取父级的注解数据
const fullMessage = inject("message") + " this is child";
//获取全局注解数据
const globalMessage = inject("globalMessage");

//子传父数据
/*
  父传子：props
  子传父：自定义事件 this.$emit(func, data) //这段代码在子级存在
  其中：func 表示在子级的一个事件名，data 为事件名传递的数据
  @func=function 这段代码在父级存在
  function 为实际实现的函数名，data可以在function里面使用
 */
const emit = defineEmits(['onSomeEvent'])
const msg = ref("child数据")
function sendMsg() {
    emit("onSomeEvent", msg.value)
}

const props = defineProps({
  title : {
    type: String,
    default:""
  },
  age : {
    type: Number,
    default: 0
  },
  names : {
    type: Array,
    default: () => []
  }
})

console.log(props)

</script>

<template>
  <h3>组合式API-Child</h3>
  {{ title }}
  {{ age }}
  {{ fullMessage }}
  {{ globalMessage}}
  <button @click="sendMsg">发送数据</button>
</template>

<style scoped>

</style>
