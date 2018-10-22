<template>
<div>
  <div class="todayBox">
    <img src="../../../static/img/jd-clothes-32.jpg" alt="">
  </div>
  <div class="attentionBox">
    <img src="../../../static/img/jd-clothes-33.jpg" alt="">
    <img src="../../../static/img/jd-clothes-34.jpg" alt="">
    <img src="../../../static/img/jd-clothes-35.jpg" alt="">
    <img src="../../../static/img/jd-clothes-36.jpg" alt="">
  </div>
  <div class="todayBox">
    <img src="../../../static/img/jd-clothes-37.jpg" alt="">
  </div>
  <div class="fashionBox">
    <div class="fashionBox_one">
      <img src="../../../static/img/jd-clothes-39.jpg" alt="">
      <img src="../../../static/img/jd-clothes-40.jpg" alt="">
    </div>
    <div class="fashionBox_two">
      <img src="../../../static/img/jd-clothes-41.jpg" alt="">
      <img src="../../../static/img/jd-clothes-42.jpg" alt="">
      <img src="../../../static/img/jd-clothes-43.jpg" alt="">
    </div>
    <div class="fashionBox_three">
      <img src="../../../static/img/jd-clothes-44.jpg" alt="">
      <img src="../../../static/img/jd-clothes-45.jpg" alt="">
      <img src="../../../static/img/jd-clothes-44.jpg" alt="">
    </div>
  </div>
  <div class="todayBox">
    <img src="../../../static/img/jd-clothes-52.jpg" alt="">
  </div>
  <div class="dressBox">
    <div>
      <img :src="item.picImg"  v-for="item in list" :item="item.id">
      <!--<img src="../../../static/img/jd-clothes-48.jpg" alt="">-->
      <!--<img src="../../../static/img/jd-clothes-49.jpg" alt="">-->
      <!--<img src="../../../static/img/jd-clothes-50.jpg" alt="">-->
      <!--<img src="../../../static/img/jd-clothes-51.jpg" alt="">-->
    </div>
    <img class="dressBox_img" src="../../../static/img/jd-clothes-46.png" alt="">
  </div>

  <div class="todayBox">
    <img src="../../../static/img/jd-clothes-12.jpg" alt="">
  </div>
  </div>
</template>

<script>
    export default {
        name: "jdClothesThree",
        data(){
          return{
            list:[]
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
              this.list=data.shang2;
              // console.log(data.shang2);
            })
          })
        }
      }
    }
</script>

<style scoped>

  .attentionBox{
    width: 100%;
    box-sizing: border-box;
    height: 3.11rem;
    padding: 0 0 0 0.09rem;
    display: -webkit-flex;
    flex-wrap: wrap;
  }
  .attentionBox img{
    width: 1.72rem;
    height: 1.5rem;
    margin-right: 0.1rem;
    margin-bottom: 0.1rem;
  }
  .fashionBox{
    width: 100%;
    height: 4.05rem;
    background: url("../../../static/img/jd-clothes-38.jpg") no-repeat;
    background-size: 100% 100%;
    padding: 0.2rem 0.13rem 0.2rem 0.08rem;
    box-sizing: border-box;
  }
  .fashionBox .fashionBox_one{
    width: 3.49rem;
    height: 1.41rem;
    display: -webkit-flex;
    margin-bottom: 0.1rem;
  }
  .fashionBox .fashionBox_one img,
  .fashionBox .fashionBox_two img,
  .fashionBox .fashionBox_three img{
    height:100%;
  }
  .fashionBox .fashionBox_two{
    width: 3.49rem;
    height: 1.15rem;
    display: -webkit-flex;
    -webkit-justify-content:space-between;
  }
  .fashionBox .fashionBox_three{
    width: 3.49rem;
    height: 0.94rem;
    display: -webkit-flex;
    -webkit-justify-content:space-between;
  }

  .dressBox{
    width: 100%;
    height: 3.12rem;
    background-color: #fef8f8;
    padding-top: 0.23rem;
    box-sizing: border-box;

  }
  .dressBox div{
    display: -webkit-flex;
    overflow-x: scroll;
  }
  .dressBox div img{
    height: 2.26rem;
    margin-bottom:0.23rem;
    margin-left: 0.21rem;
  }
  .dressBox_img{
    width: 95%;
    margin: 0 auto;
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
