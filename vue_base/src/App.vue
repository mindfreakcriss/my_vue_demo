<script>
 export default {
   data() {
      return {
        msg: 'Hello, Vue.js!',
        hello:"是一个使用 Vue.js 框架编写的简单应用程序示例。",
        number : 10, //求值
        ok : true, //逻辑判断
        message:"hello us", //数据运算
        rawHtml:"<a href='https://www.baidu.com'>百度</a>" //原始html
      };
   }
 };
</script>

<template>

<h3>墨宝语法</h3>
<p>{{ msg }}</p>
<p>{{hello}}</p>
<p>这是一个数字：{{ number + 1}}</p>
<p> {{ok ? 'yes' : 'no'}} </p>
<p>{{message.split("").reverse().join("")}}</p>
  <p>{{rawHtml}}</p>
  <p v-html="rawHtml"></p>

</template>
