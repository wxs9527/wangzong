<template>
  <div class="slidershow">
    <div class="swiper-container" id="swipera">
          <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../../static/img/slider0.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../../static/img/slider1.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../../static/img/slider2.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../../static/img/slider3.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../../static/img/slider4.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../../static/img/slider5.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../../static/img/slider6.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../../static/img/slider7.jpg" alt=""></div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
    import Swiper   from "swiper"
    import "../../../node_modules/swiper/dist/css/swiper.css"
    export default {
        name: "JdHomeBoxSectionSlider",
        mounted(){
          new Swiper('#swipera', {
            autoplay:true,
            pagination: {
              el: '.swiper-pagination'

            }
          });
        }
    }
</script>

<style scoped>
  .slidershow{
    width:100%;
    height:1.55rem;
  }
  .slidershow img{
    width:100%;
    height:1.55rem;
  }

  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom:-0.2rem;

  }
</style>
<style>
  .swiper-pagination-bullet{
    background: white;
    opacity: 1;
    width:0.08rem;
    height:0.08rem;
    border-radius:50% ;
  }
  .swiper-pagination-bullet-active {
    width:0.25rem;
    border-radius:0.1rem ;
    background:#fff;
    top:2rem;
  }
</style>
