<script>
import SearchComponent from "@/components/SearchComponent.vue";
export default{
  data() {
      return {
        search: "",
      }
  },
  components:{
    SearchComponent
  },
  methods:{
    getSearch(data){
      this.search = data;
    }
  }
}
</script>

<template>
<h3>ShowSearch</h3>
  <p>{{ search }}</p>
  <SearchComponent @searchEvent="getSearch"></SearchComponent>
</template>

<style scoped>

</style>
