<template>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../../static/img/jd-classify-1.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../../static/img/jd-classify-1.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../../static/img/jd-classify-1.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../../static/img/jd-classify-1.jpg" alt=""></div>

        </div>
      </div>

</template>

<script>
  import swiper from "swiper"
  import "../../../node_modules/swiper/dist/css/swiper.css"
    export default {
        name: "jdClassifyBanner",
        mounted(){
          new swiper(".swiper-container",{
              autoplay:true,
              loop:true,
          })
        }
    }
</script>

<style scoped>
.swiper-container{
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-wrapper .swiper-slide img{
  width: 100%;
  height: 100%;
}
</style>
