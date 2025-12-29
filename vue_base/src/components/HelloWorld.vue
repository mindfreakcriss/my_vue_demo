<template>
  <div v-bind:class="msg" v-bind:id="index_id" v-bind:title="title"> {{ msg }}</div>
  <button :disabled="disabled">Button</button>
  <div :id="title">缩写</div>
  <div v-bind="objectOfAttrs">测试</div>
</template>

<script>
 export default {
   data() {
     return {
       msg: "active",
       index_id:"tt",
       title:'title',
       no_msg:null,
       disabled:false,
       objectOfAttrs: { //一组属性
         msg: "active",
         index_id:"tt",
       }
     };
   }
 }
</script>
