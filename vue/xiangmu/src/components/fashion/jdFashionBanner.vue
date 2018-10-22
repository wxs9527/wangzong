<template>
  <div class="bannerBox">

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../../static/img/jd-fashion-9.png" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/img/jd-fashion-7.png" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/img/jd-fashion-8.png" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/img/jd-fashion-7.png" alt=""></div>
      </div>

    </div>
  </div>

</template>

<script>
  import swiper from "swiper"
    export default {
        name: "jdFashionBanner",
      mounted(){
        new swiper(".swiper-container",{
          autoplay:true,
          loop:true,
        })
      }
    }
</script>

<style scoped>
  .bannerBox{
    width: 100%;
    height: 3.01rem;
    background:url("../../../static/img/jd-fashion-6.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .swiper-container{
    width: 100%;
    height: 3.01rem;
  }
  .swiper-container img{
    width: 100%;
    height: 100%;
  }

</style>
