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
// export default {
//   components: {
//     MyConponent:MyConponent,
//   }
// }


//layout
// import Header from "@/pages/Header.vue";
// import Main from "@/pages/Main.vue";
// import Aside from "@/pages/Aside.vue";
import Parent from "@/components/Parent.vue";
import ComponentA from "@/components/ComponentA.vue";
import ComponentEvent from "@/components/ComponentEvent.vue";
import componentEvent from "@/components/ComponentEvent.vue";
import ShowSearch from "@/components/ShowSearch.vue";

export default {
  components: {
    // Main,
    //Parent
    // Aside,
    //ComponentA
    componentEvent,
    ShowSearch
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
<!--  <MyConponent></MyConponent>-->
<!--<Header></Header>-->
<!--  <Main></Main>-->
<!--  <Aside></Aside>-->
<!--  <parent></parent>-->
<!--  <ComponentA></ComponentA>-->
<!--  <component-event></component-event>-->
  <ShowSearch></ShowSearch>
</template>
