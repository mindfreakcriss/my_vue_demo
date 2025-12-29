<script>
    export default {
      data(){
        return {
          names:["Go","C++","Java","Python"],
          result: [
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
          ],
          userInfo:{
            name:"iwen",
            age:12,
            sex:'male'
          }
        }
      }
    }
</script>

<template>
  <h3>列表渲染</h3>
  <p v-for="(item, index) in names">{{item}}-{{index}}</p>
  <p v-for="name in names">{{name}}</p>
  <div v-for="item in result">
    <p>{{item.title}}</p>
    <img :src="item.description" :alt="item.id">
  </div>
  <div v-for="(value, key, index) in userInfo">
      {{value}}-{{key}}--{{index}}
  </div>
</template>

<style scoped>

</style>
