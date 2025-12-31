<script setup>
    import Parent from "@/base/Parent.vue";
    import {provide} from "vue";

    const message = "grand money fir injection for data"

    //给自己后台的数据注解
    provide("message", message)
</script>

<template>
    <h3>Grand</h3>
    <Parent />
</template>

<style scoped>

</style>
