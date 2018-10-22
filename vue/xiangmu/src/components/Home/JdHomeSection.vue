<template>
  <!--header  section 轮播图-->
  <section>
    <div class="sliderbox">
      <jd-home-box-section-slider></jd-home-box-section-slider>
      <div class="act_top">
        <img src="../../../static/img/act1.jpg" alt="">
        <img src="../../../static/img/act2.jpg" alt="">
        <img src="../../../static/img/act3.jpg" alt="">
      </div>
    </div>
    <ul class="act_center">
      <li class="act_li">
        <img src="../../../static/img/nav0.jpg" alt="">
        <p>京东超市</p>
      </li>
      <li class="act_li">
        <img src="../../../static/img/nav1.jpg" alt="">
        <p>京东旅行</p>
      </li>
      <li class="act_li">
        <img src="../../../static/img/nav2.jpg" alt="">
        <router-link to="/clothesAll"><p>京东服饰</p></router-link>
      </li>
      <li class="act_li">
        <img src="../../../static/img/nav3.jpg" alt="">
        <p>京东生鲜</p>
      </li>
      <li class="act_li">
        <img src="../../../static/img/nav4.jpg" alt="">
        <p>京东到家</p>
      </li>
      <li class="act_li">
        <img src="../../../static/img/nav5.jpg" alt="">
        <p>充值缴费</p>
      </li>
      <li class="act_li">
        <img src="../../../static/img/nav6.jpg" alt="">
        <p>领京豆</p>
      </li>
      <li class="act_li">
        <img src="../../../static/img/nav7.jpg" alt="">
        <p>领券</p>
      </li>
      <li class="act_li">
        <img src="../../../static/img/nav8.jpg" alt="">
        <p>借钱</p>
      </li>
      <li class="act_li">
        <img src="../../../static/img/nav9.jpg" alt="">
        <p>PULS会员</p>
      </li>
    </ul>
  </section>
</template>

<script>
    import JdHomeBoxSectionSlider from "./JdHomeBoxSectionSlider";
    export default {
        name: "JdHomeSection",
      components: {JdHomeBoxSectionSlider}
    }
</script>

<style scoped>
  /*section*/
  section {
    width: 100%;
    overflow-x: hidden;
  }
  .sliderbox{
    width:100%;
    height: 2.5rem;
    position: relative;

  }


  .act_top{
    width:100%;
    height:1.05rem;
    border-top-left-radius:0.1rem;
    border-top-right-radius:0.1rem;
    display: -webkit-flex;
    justify-content: space-around;
    position: absolute;
    box-sizing: border-box;
    position: absolute;
    top:1.46rem;
    left:0;
  }
  .act_top img{
    width:33.333%;
    height:1.05rem;

  }
  .act_top img:nth-child(1){
    border-top-left-radius:0.1rem;
  }
  .act_top img:nth-child(3){
    border-top-right-radius:0.1rem;
  }
  .act_center{
    width:100%;
    height:1.575rem;
    background: url("../../../static/img/act_bg.jpg") no-repeat left top;
    background-size:100% 1.575rem;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    overflow: hidden;
  }
  .act_li{
    width:20%;
    text-align: center;
    margin-top:0.075rem;
  }
  .act_li img{
    width:0.42rem;
    height:0.42rem;
    margin: 0 auto;
  }
  .act_li p{
    font-size: 0.12rem;
    line-height:0.21rem;
    color:#494847;

  }

</style>
