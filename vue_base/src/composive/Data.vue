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
import { ref, reactive } from 'vue'

const message = ref("组合式API绑定数据简约")
const userInfo = reactive({
  name:"iwen"
})

</script>

<template>
    <h3>组合式API</h3>
    <p>{{ message }}</p>
    <p>{{ userInfo.name}}</p>
</template>

<style scoped>

</style>
