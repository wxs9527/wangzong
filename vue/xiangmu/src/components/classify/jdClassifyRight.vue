<template>
  <!--<div class="sectionDiv">-->
  <!--<div class="sectionDiv_banner">-->
    <!--<div class="classifyBannerOne">-->
      <!--<jd-classify-banner></jd-classify-banner>-->
    <!--</div>-->
    <!--&lt;!&ndash;<img src="../../../static/img/jd-classify-1.jpg" alt="">&ndash;&gt;-->
  <!--</div>-->
  <!--<div class="chosenBox" >-->
    <!--<h4>热门精选 <span></span></h4>-->
    <!--<ul>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-2.jpg" alt="">-->
        <!--<span>手机</span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-3.png" alt="">-->
        <!--<span>充电宝</span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-4.png" alt="">-->
        <!--<span>华为</span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-5.png" alt="">-->
        <!--<span>U盘</span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-6.png" alt="">-->
        <!--<span>小米</span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-7.jpg" alt="">-->
        <!--<span>牛奶</span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-8.png" alt="">-->
        <!--<span>微波炉</span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-9.png" alt="">-->
        <!--<span>洗衣液</span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-10.jpg" alt="">-->
        <!--<span>男士内裤</span>-->
      <!--</li>-->
    <!--</ul>-->
  <!--</div>-->

  <!--<div class="chosenBox">-->
    <!--<h4>热门精选</h4>-->
    <!--<ul>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-11.png" alt="">-->
        <!--<span>冰箱</span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-12.png" alt="">-->
        <!--<span>洗衣机</span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-13.png" alt="">-->
        <!--<span>电视机</span>-->
      <!--</li>-->
    <!--</ul>-->
  <!--</div>-->

  <!--<div class="chosenBox">-->
    <!--<h4>热门手机</h4>-->
    <!--<ul>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-14.png" alt="">-->
        <!--<span>小米手机</span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-15.png" alt="">-->
        <!--<span>华为手机</span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<img src="../../../static/img/jd-classify-16.png" alt="">-->
        <!--<span>苹果手机</span>-->
      <!--</li>-->
    <!--</ul>-->
  <!--</div>-->
<!--</div>-->
</template>

<script>
    import JdClassifyBanner from "./jdClassifyBanner";
    export default {
        name: "jdClassifyRight",
      components: {JdClassifyBanner},

    }
</script>

<style scoped>

  .classifyBannerOne{
    width: 2.66rem;
    height: 0.91rem;
  }

  .sectionDiv{
    width: 70%;
    height: 100%;
    padding: 0 0.08rem;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .sectionDiv::-webkit-scrollbar{
    display: none;
  }
  .sectionDiv .sectionDiv_banner{
    width: 2.66rem;
    height: 0.91rem;
    margin: 0.16rem 0;
  }
  .sectionDiv .sectionDiv_banner img{
    width: 100%;
    height: 100%;
  }
  .chosenBox h4{
    font-size: 0.13rem;
  }
  .chosenBox ul{
    width:2.55rem;
    margin-top: 0.05rem;
    background-color: #fff;
    padding: 0.14rem 0.09rem;
    box-sizing: border-box;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-justify-content: space-between;
    margin-bottom: 0.1rem;
  }
  .chosenBox ul li{
    /*display: -webkit-flex;*/
    -webkit-flex-direction: column;
    text-align: center;
    width: 30%;
    margin-bottom: 0.1rem;
  }
  .chosenBox ul li span{
    font-size: 0.12rem;
    display: block;
  }
  .chosenBox ul li img{
    width: 0.65rem;
    height: 0.6rem;
    margin-bottom: 0.05rem;
  }
</style>
