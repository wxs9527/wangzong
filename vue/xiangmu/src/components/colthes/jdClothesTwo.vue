<template>
<div>
  <div class="lookAllBox">
    <img src="../../../static/img/jd-clothes-14.png" alt="">
  </div>
  <div class="todayBox">
    <img src="../../../static/img/jd-clothes-15.jpg" alt="">
  </div>
  <div class="deadlineBox">
    <img src="../../../static/img/jd-clothes-16.jpg" alt="">
  </div>
  <div class="deadlinePic">

    <div class="deadlinePic_box" v-for="item in list" :key="item.id">
      <img :src="item.picImg" alt="">
      <div class="deadlinePic_box_one">
        <span>惊喜价</span>
        ￥<span>{{item.newPrice}}</span>
      </div>
      <div class="deadlinePic_box_two">
        <span>日常价</span>
        <span>￥{{item.oldPrice}}</span>
      </div>
    </div>
  </div>
  <div class="todayBox">
    <img src="../../../static/img/jd-clothes-21.jpg" alt="">
  </div>

  <div class="bannerBox_three">
    <div class="ccc">
      <jd-classify-banner></jd-classify-banner>
    </div>
  </div>

  <div class="glintShopBox">
    <div class="glintShopBox_one">
      <img src="../../../static/img/jd-clothes-23.jpg" alt="">
      <img src="../../../static/img/jd-clothes-24.jpg" alt="">
    </div>
    <div class="glintShopBox_two">
      <img src="../../../static/img/jd-clothes-25.jpg" alt="">
      <img src="../../../static/img/jd-clothes-26.jpg" alt="">
    </div>
  </div>
  <div class="todayBox">
    <img src="../../../static/img/jd-clothes-27.jpg" alt="">
  </div>
</div>
</template>

<script>
    import JdClassifyBanner from "../classify/jdClassifyBanner";
    export default {
        name: "jdClothesTwo",
      components: {JdClassifyBanner},
      data(){
          return{
            list : []
          }
      },
      created(){
          this._initdata();
      },
      methods:{
          _initdata(){
            // const URL = "http://localhost:8080/static/ldfmock/classify.json";
            fetch("http://localhost:8080/static/ldfmock/classify.json").then(res=>{
              res.json().then(data=>{
                this.list=data.shang1;
                // console.log(data.shang1);
              })
            })
          }
      }
    }
</script>

<style scoped>

  .ccc{
    width: 100%;
    height: 2.4rem;
  }
  .lookAllBox{
    width: 100%;
  }
  .lookAllBox img{
    width: 100%;
  }
  .deadlineBox{
    width: 100%;
    height: 0.6rem;
  }
  .deadlineBox img{
    width: 100%;
    height: 0.6rem;
  }
  .deadlinePic{
    width: 100%;
    height: 1.91rem;
    background-color: #f1f1f1;
    display: -webkit-flex;
    overflow-x: scroll;
  }
  .deadlinePic_box{
    width:1.35rem;
    height:1.81rem;
    padding:0.09rem 0 0 0.16rem;
    box-sizing: border-box;
    font-size: 0.11rem;
  }
  .deadlinePic_box img{
    width: 1.2rem;
    height: 1.21rem;
    margin-bottom: 0.1rem;
  }
  .deadlinePic .deadlinePic_box_one,
  .deadlinePic .deadlinePic_box_two{
    display: -webkit-flex;
  }

  .deadlinePic .deadlinePic_box_one span:nth-child(1){
    display: block;
    font-size: 0.11rem;
    line-height:0.22rem;
    margin-right: 0.1rem;
  }
  .deadlinePic .deadlinePic_box_one span:nth-child(2){
    display: block;
    line-height:0.22rem;
    font-weight: 600;
    font-size:0.18rem;
  }
  .deadlinePic .deadlinePic_box_two span{
    color: #b6b6b6;
  }
  .deadlinePic .deadlinePic_box_two span:nth-child(2){
    text-decoration: line-through;
    margin-left: 0.1rem;
  }


  /*banner three*/
  .bannerBox_three{
    width: 100%;
    height: 2.4rem;
    background-color: #ccc;
    font-size: 0.6rem;
  }
  .glintShopBox{
    width: 100%;
    height: 3.98rem;
    background:url("../../../static/img/jd-clothes-22.jpg") no-repeat;
    background-size: 100% 100%;
    padding:0.05rem 0.1rem;
    box-sizing: border-box;
    display: -webkit-flex;
  }
  .glintShopBox div{
    width: 50%;
    height: 100%;
    margin-top: 0.05rem;
    margin-right: 0.05rem;
  }
  .glintShopBox div img{
    width: 100%;
  }
  .glintShopBox .glintShopBox_one img:first-child{
    height:30%;
    margin-bottom: 0.05rem;
  }
  .glintShopBox .glintShopBox_one img:lst-child{
    height:70%;
  }
  .glintShopBox .glintShopBox_two img:first-child{
    height:55%;
    margin-bottom: 0.05rem;
  }
  .glintShopBox .glintShopBox_two img:lst-child{
    height:45%;
  }


  .todayBox{
    width: 100%;
    height: 0.61rem;
    /*background-color: red;*/

  }
  .todayBox img{
    width: 95%;
    height: 100%;
    margin:0 auto;
  }

</style>
