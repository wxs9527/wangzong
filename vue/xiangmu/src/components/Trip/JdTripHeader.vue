<template>
  <header>
    <img class="header_imgs1" src="../../../static/img/tripheader1.png" alt="">
    <h3>京东旅行</h3>
    <img class="header_imgs2" src="../../../static/img/tripheader2.png" alt="">
    <img class="header_imgs3" src="../../../static/img/tripheader3.png" alt="">
  </header>
</template>

<script>
    export default {
        name: "JdTripHeader"
    }
</script>

<style scoped>
  /*header*/
  header{
    width: 100%;
    background: rgba(255,255,255,.0);
    height:0.4rem;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    padding:0 0.075rem;
    position: fixed;
    top:0;
    left:0;
    z-index: 10;
  }
  header h3{
    font-size:0.16rem;
    line-height: 0.4rem;
    color:#fff;
  }
  .header_imgs1{
    width:0.22rem;
    height:0.28rem;
    z-index: 10;
  }
  .header_imgs2{
    width:0.2rem;
    height:0.2rem;
    margin-right: -0.9rem;
    z-index: 10;
  }
  .header_imgs3{
    width:0.22rem;
    height:0.28rem;
    margin-right: 0.2rem;
    z-index: 10;
  }
</style>
