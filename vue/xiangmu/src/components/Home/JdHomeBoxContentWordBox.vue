<template>
  <div class="wordbox">
    <img src="../../../static/img/jdkb.jpg" alt="">
    <!-- Swiper -->
    <div class="swiper-container" id="swiperb">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><div class="sliderword">HOT <span>媳妇坚持在客厅开了个天窗，完</span></div></div>
          <div class="swiper-slide"><div class="sliderword">热点 <span>媳妇坚持在客厅开了个天窗，完</span></div></div>
          <div class="swiper-slide"><div class="sliderword">最新 <span>华为Mate最新定价低至</span></div></div>
          <div class="swiper-slide"><div class="sliderword">推荐 <span>iPhone8 下周调至国货价，机友很</span></div></div>
          <div class="swiper-slide"><div class="sliderword">HOT <span>房子住久了</span></div></div>
        </div>

    </div>

    <p>更多</p>
  </div>
</template>

<script>
    import Swiper   from "swiper"
    import "../../../node_modules/swiper/dist/css/swiper.css"
    export default {
        name: "JdHomeBoxContentWordBox",
        mounted(){
          new Swiper('#swiperb ', {
            autoplay:true,


          });
        }
    }
</script>

<style scoped>
  .wordbox{
    width:100%;
    height:0.31rem;
    background: #fff;
    border-radius:0.1rem;
    padding:0 0.075rem;
    box-sizing: border-box;
    display: -webkit-flex;
    align-items: center;
    margin-bottom: 0.05rem;
    overflow: hidden;

  }
  .wordbox img{
    width:15%;
    height:0.19rem;
    margin-left: 0.1rem;
  }
  .wordbox .sliderword{
    width:70%;
    height:0.31rem;
    font-size: 0.12rem;
    /*line-height:0.31rem;*/
    color:#f15353;

  }
  .sliderword span{
    font-size: 0.12rem;
    line-height:0.31rem;
    color:#545454;
    margin-left: 0.05rem;

  }
  .wordbox p{
    width:40%;
    font-size: 0.12rem;
    line-height:0.31rem;
    font-weight:900;
    color:#434343;

  }
</style>

