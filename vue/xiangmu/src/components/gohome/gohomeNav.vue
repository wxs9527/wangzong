<template>
  <div class="section">
    <div class="section1">
      <div class="section2">
        <img src="../../../static/imgs/icon_swich.png" alt="">
        <input type="text" placeholder="1020宅购节">
      </div>
    </div>
    <div class="section3">
      <img src="../../../static/imgs/5bc827aaNbbd5bc34.jpg" alt="">
    </div>
  </div>


</template>

<script>
    export default {
        name: "gohomeNav"
    }
</script>

<style scoped>
  .section{
    width: 100%;
    height: 2.9rem;
  }
  .section1{
    width: 100%;
    height:1.2rem;
    background: url("../../../static/imgs/db31393a00802875.jpg") no-repeat;
    background-size:100% 1.2rem ;
    overflow: hidden;
  }
  .section2{
    width: 3.5rem;
    height: 0.45rem;
    margin-left: 0.12rem;
    margin-top: 0.55rem;
    border-radius:0.25rem ;
    background: white;
    display: flex;
  }
  .section2 img{
    width: 0.25rem;
    height: 0.25rem;
    margin-left: 1.3rem;
    margin-top: 0.12rem;
  }
  .section2 input{
    width: 1rem;
    height: 0.2rem;
    border: 0;
    margin-top: 0.14rem;
    font-size: 0.15rem;
    outline: 0;
  }
  .section3{
    width: 100%;
    height: 1.7rem;
  }
  .section3 img{
    width: 100%;
    height: 1.7rem;
  }


</style>
