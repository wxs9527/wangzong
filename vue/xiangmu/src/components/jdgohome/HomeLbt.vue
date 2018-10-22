<template>
  <div class="lbt_box">
    <div class="lbt">
      <div class="swiper-container one">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(lbts,index) in parent.lbtss">
            <img :src="lbts.piclb" alt="" class="lbt_1">
          </div>
          <!--<div class="swiper-slide"><img src="../../../static/img/lbt2.png" alt="" class="lbt_1"></div>-->
          <!--<div class="swiper-slide"><img src="../../../static/img/lbt3.png" alt="" class="lbt_1"></div>-->
          <!--<div class="swiper-slide"><img src="../../../static/img/lbt4.png" alt="" class="lbt_1"></div>-->
          <!--<div class="swiper-slide"><img src="../../../static/img/lbt5.png" alt="" class="lbt_1"></div>-->
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css'
    export default {
      name: "HomeLbt",
      props:["parent"],
      updated:function(){
        new Swiper('.one', {
          pagination: {
            el: '.swiper-pagination',
          },
          paginationClickable: true,
          autoplay:true,
          loop:true,

        });
      },

      mounted() {
        new Swiper('.one', {
          pagination: {
            el: '.swiper-pagination',
          },
          paginationClickable: true,
          autoplay:true,
          loop:true,

        });
      }
    }
</script>

<style scoped>
.lbt_1{
  width:3.55rem;
  height: .95rem;
}
.lbt_box{
  position: relative;
}
  .swiper-pagination{
    position: absolute;
    bottom: -.17rem;
  }
  .swiper-wrapper{
    width:3.55rem;
    height: .95rem;
  }

</style>
