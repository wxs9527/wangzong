<template>
  <div class="box">
    <jd-gilt-header @click=""></jd-gilt-header>
    <jd-gilt-nav></jd-gilt-nav>
  </div>
</template>

<script>
    import JdGiltHeader from "./JdGiltHeader";
    import JdGiltNav from "./JdGiltNav";
    export default {
        name: "JdGiltFixed",
      components: {JdGiltNav, JdGiltHeader},
      methods:{
          sharearise(){

          }
      }
    }
</script>

<style scoped>
  .box{
    height: 0.8rem;
  }
</style>
