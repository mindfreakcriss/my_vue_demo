<script setup>
//数据接收
import {ref} from "vue";

//子传父数据
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
  }
})

console.log(props)

</script>

<template>
  <h3>组合式API-Child</h3>
  {{ title }}
  {{ age }}
  <button @click="sendMsg">发送数据</button>
</template>

<style scoped>

</style>
