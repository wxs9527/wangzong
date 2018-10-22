<template>
  <div class="bannerTwoBox">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../../static/img/second.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/img/second2.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/img/second3.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/img/second4.jpg" alt=""></div>

      </div>
    </div>
  </div>
</template>

<script>
    import JdClassifyBanner from "../classify/jdClassifyBanner";
    export default {
        name: "jdClothesBanner",
      components: {JdClassifyBanner}
    }
</script>

<style scoped>
  .bannerTwoBox{
    width: 100%;
    height:3.1rem;
    background: url("../../../static/img/jd-clothes-13.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .swiper-container{
    width: 100%;
    height:3.1rem;
  }
.bannerTwoBox .swiper-container .swiper-wrapper .swiper-slide img{
  width: 100%;
  height: 100%;
}
</style>
