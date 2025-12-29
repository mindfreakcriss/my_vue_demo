<script>
import HelloWorld from './components/HelloWorld.vue'
import IfDemo from "@/components/IfDemo.vue";
import ListDemo from "@/components/ListDemo.vue";
import KeyDemo from "@/components/KeyDemo.vue";
import EventInlineDemo from "@/components/EventInlineDemo.vue";
import EventMethodDemo from "@/components/EventMethodDemo.vue";
import EventParamDemo from "@/components/EventParamDemo.vue";
import EventDefaultDemo from "@/components/EventDefaultDemo.vue";
import ArrayChangeDemo from "@/components/ArrayChangeDemo.vue";
import ComputedDemo from "@/components/ComputedDemo.vue";
import ClassDemo from "@/components/ClassDemo.vue";
import WatchDemo from "@/components/WatchDemo.vue";
import ModelDemo from "@/components/ModelDemo.vue";
import RefDomDEMO from "@/components/RefDomDEMO.vue";
// 1 - 引入组件
import MyConponent from "@/components/MyConponent.vue";

//2 - 注册组件
export default {
  components: {
    MyConponent:MyConponent,
  }
}


</script>

<template>
<!--  <HelloWorld />-->
<!--  <IfDemo />-->
<!--  <ListDemo></ListDemo>-->
<!--  <KeyDemo></KeyDemo>-->
<!--  <EventInlineDemo></EventInlineDemo>-->
<!--  <EventMethodDemo></EventMethodDemo>-->
<!--  <EventParamDemo></EventParamDemo>-->
<!--  <EventDefaultDemo></EventDefaultDemo>-->
<!--  <ArrayChangeDemo></ArrayChangeDemo>-->
<!--  <computed-demo></computed-demo>-->
<!--  <classDemo></classDemo>-->
<!--  <watch-demo></watch-demo>-->
<!--  <model-demo></model-demo>-->
<!--  <ref-dom-d-e-m-o></ref-dom-d-e-m-o>-->
  <!---3 - 使用-->
  <MyConponent></MyConponent>

</template>
