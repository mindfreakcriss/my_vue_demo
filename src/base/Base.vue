<script setup>

import {computed, onMounted, reactive, ref, watch} from "vue";

//基础用法
const flag = ref(false)
const type = ref("B")
const msg = ref("active")
const index_id = ref("tt");
const title = ref( "title" );
const articleList = reactive([
  {
    'id':1234,
    'title':"this is title 1234",
    'description':"this is description 1234",
  },
  {
    'id':1235,
    'title':"this is title 1235",
    'description':"this is description 1235",
  },
  {
    'id':1236,
    'title':"this is title 1236",
    'description':"this is description 1236",
  }
]);
const fromData = reactive({
  message:"",
  checked:false
})

//事件内容
const count = ref(0)
function addCount() {
  count.value++
}

/**
 * 1: 在表单里面使用 ref = "name"
 * 2: ref_msg.value ---> 原生JS的内容
 * 3: 如果没有特殊情况，不要操作DOM
 */
//模版引用，需要和ref的name一致
const ref_msg = ref(null)
onMounted(() => {
  console.log("模版引用打印")
  console.log(ref_msg.value)
  ref_msg.value.innerHTML = "修改的数据"
})

//计算属性
const reverse = computed(() => {
  return msg.value.split("").reverse().join("")
})

//事件监听
//第一个参数，和watch的属性名一致
//newValue改变之后的数据
//oldValue改变之前的数据
watch(count, (newValue, oldValue) => {
  console.log(newValue,oldValue)
})


</script>

<template>
  <h3>基础用法</h3>
  <div :class="msg" :id="index_id" :title="title">{{ msg }}</div>
  <h3>条件渲染</h3>
  <div v-if="flag">你能看见我吗？</div>
  <div v-else>那你还是看看我吧</div>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>D</div>
  <div v-show="flag">你能看见我</div>
  <h3>列表渲染</h3>
  <!--推荐使用ID，不要用index , index 会变化-->
  <p v-for="(item, index) in articleList" :key="item.id">
   {{ index }} - {{item.title}} - {{item.description}}
  </p>
  <h3>表单输入绑定</h3>
  <form action="">
    <input type="text" v-model.lazy="fromData.message">
    {{ fromData.message }}
    <input type="checkbox" id="checkbox" v-model="fromData.checked">
    <label for="checkbox">{{fromData.checked}}</label>
  </form>
  <h3>事件处理-内联事件</h3>
  <button @click="count++">Add{{count}}</button>
  <h3>事件处理-函数</h3>
  <button @click="addCount">Add{{count}}</button>
  <h3>模版引用</h3>
  <p ref="ref_msg">模版引用</p>
  <h3>计算属性</h3>
  <p>原内容：{{ msg }}</p>
  <p>计算后：{{ reverse }}</p>
</template>

<style scoped>

</style>
