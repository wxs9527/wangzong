<template>
  <nav>
    <div class="nav">
      <div class="swiperBigBox">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../../static/img/5bc3e711N75fa297b.jpg_q70.jpg"></div>
            <div class="swiper-slide"><img src="../../../static/img/70.jpg"></div>
            <div class="swiper-slide"><img src="../../../static/img/5bc47b85N85e0c9b5.jpg_q70.jpg"></div>
            <div class="swiper-slide"><img src="../../../static/img/hanhaha.jpg"></div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="nav1">
                <span>i7级水冷八核/GTX1060/16G 游戏直播台式组装吃
                    鸡电脑主机/DDR3/DIY组装机 套餐四:八核/16G/GTX1060</span>
        <p class="nav_a">
          <span class="hr"><i class="iconfont icon-guanzhu"></i>关注</span>
        </p>
      </div>
      <div class="nav_b">
        <p><span>白条</span>&nbsp;【白条支付】即享受6期免息/12期息费五折</p>
        <p><span>促销</span>&nbsp; <a id="h">限购</a>购买1-20件时享受单件价￥3358</p>
        <p><span>已选</span>&nbsp; <b>套餐三：八核/16G/GTX1060,1件，可选服务</b></p>
        <p><span>领券</span>&nbsp; <a href="#">满3000减30</a>&nbsp;<a href="#">满1000减20</a>&nbsp; <a href="#">满1000减20</a></p>
        <p><span>送至</span>&nbsp; <b class="b"><i class="iconfont icon-dingwei"></i>陕西省 西安市南澳头西区北门</b></p>
        <p><span>运费</span>&nbsp; <b>免运费</b></p>
        <p class="yunfei"><img src="../../../static/img/1231212.jpg" alt="">&nbsp;<b style="color: #6b36aa;">运费险.闪电退款</b></p></div>
    </div>
    <div class="long">
      <img src="../../../static/img/5646555.jpg" alt="">
      店铺发货&售后
      &nbsp;
      <img src="../../../static/img/5646555.jpg" alt="">
      货到付款
      &nbsp;
      <img src="../../../static/img/5646555.jpg" alt="">
      7天无理由退货
    </div>
    <div class="char">
      <div class="char1">
        <p><b>装机大师</b></p>
        <p>一站式装机解决方案</p>
      </div>
      <div class="char2">
        <p><b>保障服务</b></p>
        <p>微商品报价护航</p>
      </div>
    </div>
    <div class="longs">
      <img src="../../../static/img/2123154321352.jpg" alt="">
      &nbsp;入选&nbsp;&nbsp;好用不贵的6款游戏主机精选
    </div>
    <div class="longes">
      <p class="longes1"><span>评价（2914）</span><span>好平度97%></span></p>
      <p class="longes2">
        <span>十分流畅<b>49</b></span>
        <span>运行超快<b>43</b></span>
        <span>反应灵敏<b>15</b></span>
      </p>
      <p class="longes2">
        <span>外形悬炫酷<b>10</b></span>
        <span>画质清晰<b>9</b></span>
        <span>简单方便<b>6</b></span>
      </p>
    </div>
    <div class="pingjia">
      <ul>
        <li><img src="../../../static/img/123123123.jpg" alt=""><span>战**哈</span></li>
        <li>电脑速度很快，吃鸡完美流畅cf fpc 稳定显示屏曲面  给力</li>
        <li></li>
      </ul>
    </div>
  </nav>
</template>
<script>
   import Swiper from '../../../swiper/dist/js/swiper';
   import '../../../swiper/dist/css/swiper.css'
     export default {
        name: "particularsSection",
        mounted(){
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
        }
   }
</script>

<style scoped>
  .nav{
    width: 97%;
    height: 100%;
    margin: 0 auto;
  }
  .nav img{
    width: 100%;
    height: 3rem;
  }
  .nav1{
    width: 100%;
    background: white;
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    justify-content:space-between;
  }
  .nav1 span:nth-child(1){
    display: inline-block;
    font-size: 0.16rem;
    width:80%;
  }

  .nav_a{
    width: 20%;
    display: flex;
    text-align: center;
    font-size: 1rem;
  }
  .hr{
    font-size: 0.15rem!important;
    line-height: 0.36rem;
  }
  .nav_a .iconfont{
    font-size: 0.3rem;
    display: block;
    text-align: center;
    color: #000;
  }
  .nav_b{
    font-size: 0.15rem;
  }
  .nav_b span{
    font-size: 0.15rem;
    color: gray;
  }
  .nav_b p{
    display: block;
    height: 0.4rem;
    border-bottom: 1px solid #e5e5e5;
    line-height: 0.4rem;
    background: white;
  }
  #h{
    border: 1px solid #ab09ad;
    background: 0;
    color: #ab09ad;
  }
  .b .iconfont {
    font-size: 0.25rem;
    color: red;
  }
  .nav_b p a{
    background: #e73823;
    color: white;
    border-radius: 5px;
  }
  .nav_b p img{
    height: 0.4rem;
    width: 1rem;
  }
  .yunfei{
    margin-top: 0.3rem;
    display: flex!important;
  }
  .long{
    width: 97%;
    height: 0.4rem;
    display: flex;
    margin: 0.3rem auto;
    font-size: 0.13rem;
    line-height: 0.4rem;
    background: white;
  }
  .long img{
    height: 0.2rem;
    margin-top: 0.1rem;
  }
  .char{
    width:100%;
    height: 0.8rem;
    background: white;
    overflow: hidden;
    display: flex;
    font-size: 0.16rem;
    justify-content: space-between;
  }
  .char p{
    text-align: center;
    line-height: 0.3rem;
  }
  .char1{
    width: 50%;
    height: 85%;
    margin-top: 0.1rem;
    border-right: 1px solid #8c8c8c;

  }
  .char2{
    width: 50%;
    height: 85%;
    margin-top: 0.1rem;
  }
  .longs{
    width: 97%;
    height: 0.65rem;
    display: flex;
    margin: 0.1rem auto;
    font-size: 0.16rem;
    line-height: 0.65rem;
    background: white;
  }
  .longs img{
    width: 0.4rem;
    height: 0.3rem;
    margin-top: 0.175rem;
  }
  .longes{
    width: 97%;
    height: 1.8rem;
    margin: 0 auto;
    font-size: 0.18rem;

    background: white;
  }
  .longes p{
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
  }
  .longes1 span:nth-child(2){
    float: right;
  }
  .longes2 span{
    width: 0.8rem;
    height: 0.3rem;
    display: inline-block;
    border-radius: 0.25rem;
    background: #fdf1f3;
    margin-left: 0.1rem;
    line-height: 0.35rem;
    text-align: center;
    font-size: 0.11rem;
  }
  .pingjia{
    width: 97%;
    margin: 0 auto;
    font-size: 0.18rem;
    background: white;
  }
  .pingjia ul{
    list-style: none;

  }
  .pingjia ul li{
    line-height: 0.2rem;
  }
  .swiperBigBox{
    width: 100%;
    height: 3rem;
  }
  .swiperBigBox  .swiper-wrapper .swiper-slide img{
    width: 100%;
    height: 3rem;
  }
  .swiperBigBox{
    position: relative;
  }
  .swiper-pagination{
    font-size: 0.2rem;
    background:gray;
    width: 0.5rem;
    border-radius:0.25rem ;
    position: absolute;
    margin-left: 2.9rem;
    color:white;
    opacity: 0.8;

  }
</style>
