<template>
  <div class="box">
  <ul class="ulBoxOne">
  <li class="active" @click="str=0"><a href="javascript:;">推荐分类</a></li>
  <li><a href="javascript:;" @click="str=1">手机数码</a></li>
  <li><a href="javascript:;">家用电器</a></li>
  <li><a href="javascript:;">电脑办公</a></li>
  <li><a href="javascript:;">计生情趣</a></li>
  <li><a href="javascript:;">美妆护肤</a></li>
  <li><a href="javascript:;">个护清洁</a></li>
  <li><a href="javascript:;">汽车用品</a></li>
  <li><a href="javascript:;">京东超市</a></li>
  <li><a href="javascript:;">男装</a></li>
  <li><a href="javascript:;">男鞋</a></li>
  <li><a href="javascript:;">女装</a></li>
  <li><a href="javascript:;">女鞋</a></li>
  <li><a href="javascript:;">母婴童装</a></li>
  <li><a href="javascript:;">图书音像</a></li>
  <li><a href="javascript:;">运动户外</a></li>
  <li><a href="javascript:;">内衣配饰</a></li>
  <li><a href="javascript:;">食品生鲜</a></li>
  <li><a href="javascript:;">酒水饮料</a></li>
  <li><a href="javascript:;">家居家装</a></li>
  <li><a href="javascript:;">家居厨具</a></li>
  <li><a href="javascript:;">箱包手袋</a></li>
  <li><a href="javascript:;">钟表珠宝</a></li>
</ul>


  <div class="sectionDiv" v-show="str===0">

      <img src="../../../static/img/jd-classify-1.jpg" alt="">
    </div>
    <div class="chosenBox" >
      <h4>热门精选 <span></span></h4>
      <ul>
        <li>
          <img src="../../../static/img/jd-classify-2.jpg" alt="">
          <span>手机</span>
        </li>
        <li>
          <img src="../../../static/img/jd-classify-3.png" alt="">
          <span>充电宝</span>
        </li>
        <li>
          <img src="../../../static/img/jd-classify-4.png" alt="">
          <span>华为</span>
        </li>
        <li>
          <img src="../../../static/img/jd-classify-5.png" alt="">
          <span>U盘</span>
        </li>
        <li>
          <img src="../../../static/img/jd-classify-6.png" alt="">
          <span>小米</span>
        </li>
        <li>
          <img src="../../../static/img/jd-classify-7.jpg" alt="">
          <span>牛奶</span>
        </li>
        <li>
          <img src="../../../static/img/jd-classify-8.png" alt="">
          <span>微波炉</span>
        </li>
        <li>
          <img src="../../../static/img/jd-classify-9.png" alt="">
          <span>洗衣液</span>
        </li>
        <li>
          <img src="../../../static/img/jd-classify-10.jpg" alt="">
          <span>男士内裤</span>
        </li>
      </ul>
    </div>

    <div class="chosenBox">
      <h4>热门精选</h4>
      <ul>
        <li>
          <img src="../../../static/img/jd-classify-11.png" alt="">
          <span>冰箱</span>
        </li>
        <li>
          <img src="../../../static/img/jd-classify-12.png" alt="">
          <span>洗衣机</span>
        </li>
        <li>
          <img src="../../../static/img/jd-classify-13.png" alt="">
          <span>电视机</span>
        </li>
      </ul>
    </div>

    <div class="chosenBox">
      <h4>热门手机</h4>
      <ul>
        <li>
          <img src="../../../static/img/jd-classify-14.png" alt="">
          <span>小米手机</span>
        </li>
        <li>
          <img src="../../../static/img/jd-classify-15.png" alt="">
          <span>华为手机</span>
        </li>
        <li>
          <img src="../../../static/img/jd-classify-16.png" alt="">
          <span>苹果手机</span>
        </li>
      </ul>
    </div>
  </div>
    <div class="sectionDiv" v-show="str===1">


        <!--<img src="../../../static/img/jd-classify-1.jpg" alt="">-->

      <div class="chosenBox" >
        <h4>热门精选 <span></span></h4>
        <ul>
          <li>
            <img src="../../../static/img/jd-classify-3.png" alt="">
            <span>手机</span>
          </li>
          <li>
            <img src="../../../static/img/jd-classify-3.png" alt="">
            <span>充电宝</span>
          </li>
          <li>
            <img src="../../../static/img/jd-classify-4.png" alt="">
            <span>华为</span>
          </li>
          <li>
            <img src="../../../static/img/jd-classify-5.png" alt="">
            <span>U盘</span>
          </li>
          <li>
            <img src="../../../static/img/jd-classify-6.png" alt="">
            <span>小米</span>
          </li>
          <li>
            <img src="../../../static/img/jd-classify-7.jpg" alt="">
            <span>牛奶</span>
          </li>
          <li>
            <img src="../../../static/img/jd-classify-8.png" alt="">
            <span>微波炉</span>
          </li>
          <li>
            <img src="../../../static/img/jd-classify-9.png" alt="">
            <span>洗衣液</span>
          </li>
          <li>
            <img src="../../../static/img/jd-classify-10.jpg" alt="">
            <span>男士内裤</span>
          </li>
        </ul>
      </div>

      <div class="chosenBox">
        <h4>热门精选</h4>
        <ul>
          <li>
            <img src="../../../static/img/jd-classify-11.png" alt="">
            <span>冰箱</span>
          </li>
          <li>
            <img src="../../../static/img/jd-classify-12.png" alt="">
            <span>洗衣机</span>
          </li>
          <li>
            <img src="../../../static/img/jd-classify-13.png" alt="">
            <span>电视机</span>
          </li>
        </ul>
      </div>

      <div class="chosenBox">
        <h4>热门手机</h4>
        <ul>
          <li>
            <img src="../../../static/img/jd-classify-14.png" alt="">
            <span>小米手机</span>
          </li>
          <li>
            <img src="../../../static/img/jd-classify-15.png" alt="">
            <span>华为手机</span>
          </li>
          <li>
            <img src="../../../static/img/jd-classify-16.png" alt="">
            <span>苹果手机</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: "jdClassifyLeft",
      data(){
          return{
            str:0
          }
      }

    }
</script>

<style scoped>

  .swiper-container .swiper-wrapper .swiper-slide img{
    width: 100%;
    height: 100%;
  }
.ulBoxOne{
    width: 26%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  float: left;
  }
.ulBoxOne li{
    border: 1px solid #e4e4e4;
    width: 100%;
    height: 0.5rem;
    background-color: #fff;
  }
.ulBoxOne li a{
    font-size: 0.12rem;
    color: #252525;
    display: block;
    text-align: center;
    line-height: 0.5rem;
  }
.ulBoxOne .active{
    background-color: transparent;
  }





.box{
  width: 100%;
}
.classifyBannerOne{
  width: 2.66rem;
  height: 0.91rem;
}

.sectionDiv{
  width: 74%;
  height: 100%;
  padding: 0 0.08rem;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
  float: left;
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
