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
//import ComponentActiveB from "@/components/ComponentActiveB.vue";

//异步加载组件
import {defineAsyncComponent} from "vue";

const ComponentActiveB = defineAsyncComponent(
    () => import("@/components/ComponentActiveB.vue"),
)

import ComponentActiveA from "@/components/ComponentActiveA.vue";
import Grand from "@/injection/Grand.vue";
import Parent from "@/components/Parent.vue";
import ComponentA from "@/components/ComponentA.vue";
import ComponentEvent from "@/components/ComponentEvent.vue";
import componentEvent from "@/components/ComponentEvent.vue";
import ShowSearch from "@/components/ShowSearch.vue";
import ComponentC from "@/components/ComponentC.vue";
import SlotBase from "@/components/SlotBase.vue";
import SlotsTwo from "@/components/SlotsTwo.vue";
import SlotThree from "@/components/SlotThree.vue";
export default {
  components: {
    // Main,
    //Parent
    // Aside,
    //ComponentA
    // componentEvent,
    // ShowSearch,
    // ComponentC
   // SlotBase
 //   SlotsTwo
   // SlotThree
  //  ComponentActiveB,
  //  ComponentActiveA
    Grand
  },
  data(){
    return {
      //插槽内容可以访问到父组件作用域，因为插槽内容本身就是父组件模版中定义的
      // message:"slot parent sth",
      // currentTest : "test sth"
      tabComponent:"ComponentActiveA",
    }
  },
  methods: {
    changeHandle() {
      this.tabComponent = this.tabComponent == "ComponentActiveA" ? "ComponentActiveB" : "ComponentActiveA";
    }
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
<!--  <ShowSearch></ShowSearch>-->
<!--  <ComponentC></ComponentC>-->
<!--  <SlotBase>-->
<!--    <div>-->
<!--      <h3>slot title</h3>-->
<!--      <p>slot content</p>-->
<!--    </div>-->
<!--  </SlotBase>-->
<!--  <SlotsTwo>-->
<!--&lt;!&ndash;    <h3>{{message}}</h3>&ndash;&gt; &lt;!&ndash;默认内容是指，slot中间没有东西&ndash;&gt;-->
<!--    <template v-slot:header>-->
<!--        <h3>标题</h3>-->
<!--    </template>-->
<!--    <template v-slot:main>-->
<!--        <p>内容</p>-->
<!--    </template>-->
<!--    <template #body>-->
<!--      <p>插槽简写</p>-->
<!--    </template>-->
<!--  </SlotsTwo>-->
<!--  <slot-three v-slot="slotProps">-->
<!--    <h3> {{ currentTest  }}  - {{ slotProps.msg}} </h3>-->
<!--  </slot-three>-->
  <!--具名插槽传值-->
<!--  <slot-three>-->
<!--    <template #data="slotProps">-->
<!--      <h3> {{ currentTest  }}  - {{ slotProps.msg}} </h3>-->
<!--    </template>-->
<!--  </slot-three>-->

<!--  <component :is="tabComponent"></component>-->

<!--  <button @click="changeHandle">切换组件</button>-->


  <Grand/>

</template>
