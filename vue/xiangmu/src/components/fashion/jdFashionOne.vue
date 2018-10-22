<template>
    <div>
      <section class="videoBox">
        <img src="../../../static/img/jd-fashion-2.jpg" alt="">
        <img src="../../../static/img/jd-fashion-3.gif" alt="">
      </section>
      <div class="picBox">
        <img src="../../../static/img/jd-fashion-4.jpg" alt="">
        <img src="../../../static/img/jd-fashion-5.jpg" alt="">
      </div>

    </div>
</template>

<script>
    export default {
        name: "jdFashionOne"
    }
</script>

<style scoped>
  .videoBox{
    width: 100%;
    height: 3.48rem;
    background:url("../../../static/img/jd-fashion-1.png") no-repeat center;
    background-size: cover;
    position: relative;
  }
  .videoBox img{
    width: 100%;
    height: 100%;
  }
  .videoBox img:first-child{
    opacity: 0.4;
  }
  .videoBox img:last-child{
    position: absolute;
    left:0;
    top:0;
  }
  .picBox{
    width: 100%;
  }
  .picBox img{
    width: 100%;
  }
</style>
