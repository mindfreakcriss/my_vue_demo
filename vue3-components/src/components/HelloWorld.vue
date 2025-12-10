<template>
   <div>
     <p>{{msg}}</p>
     <p>count:{{update}}</p> <!--再渲染--->
     <button @click="count++">count++</button>
     <button @click="increase">increase</button>
   </div>
</template>

<script setup>
  import {ref} from 'vue' //声明一个引用
  //const props = defineProps(['msg', 'count']); //数组无法判断属性
  const props = defineProps({
    msg:String, //简单属性
    //复杂属性
    count: {
      type: Number,
      default: 7,
      required: false,
      validator : (value) =>
        value > 0 && value < 3
    },
  })
  const update = ref(props.count); //数据中转
  const increase = () => {
    update.value++
  }
</script>
