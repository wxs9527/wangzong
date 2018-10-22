<template>
<div>
  <section class="todayBox youhuijuan">
    <img src="../../../static/img/jd-clothes-3.jpg" alt="">
  </section>
  <section class="youhuijuanPic">
    <img src="../../../static/img/jd-clothes-4.jpg" alt="">
    <img src="../../../static/img/jd-clothes-5.jpg" alt="">
    <img src="../../../static/img/jd-clothes-6.png" alt="">
    <img src="../../../static/img/jd-clothes-4.jpg" alt="">
    <img src="../../../static/img/jd-clothes-5.jpg" alt="">
    <img src="../../../static/img/jd-clothes-6.png" alt="">
  </section>
  <section class="allYouhui">
    <img src="../../../static/img/jd-clothes-7.png" alt="">
  </section>
  <div class="todayBox">
    <img src="../../../static/img/jd-clothes-8.jpg" alt="">
  </div>

  <div class="todayPic">
    <img src="../../../static/img/jd-clothes-9.jpg" alt="">
    <img src="../../../static/img/jd-clothes-10.jpg" alt="">
    <img src="../../../static/img/jd-clothes-11.jpg" alt="">
  </div>
  <div class="bgcBox"></div>
  <div class="todayBox">
    <img src="../../../static/img/jd-clothes-12.jpg" alt="">
  </div>
  <div class="bannerTwoBox"></div>
  <img v-if="sssA" @click="goUp" class="backTop" src="../../../static/img/backtop.png" alt="">
</div>
</template>

<script>
  import $ from  "jquery"
    export default {
        name: "jdClothesOne",
        props:["sssA"],
      methods:{
          goUp(){
            let clothesBei = document.querySelector(".clothesBei");
            let top = clothesBei.scrollTop ;
            let timer = setInterval(function(){
                top -= 100;
                if(top <= 0){
                  top=0;
                  clearInterval(timer);
                }
              clothesBei.scrollTop = top;
            },1)

          }
      }

    }
</script>

<style scoped>
  .youhuijuan{
    margin-top: 0.5rem;
  }
  .youhuijuan img{
    width: 95%;
    height: 100%;
    margin:0 auto;
  }
  .youhuijuanPic{
    display: -webkit-flex;
    overflow-x: scroll;
  }
  .youhuijuanPic img{
    width: 1.43rem;
    height: 0.84rem;
    margin-left: 0.1rem;
  }
  .allYouhui{
    width: 100%;
    height: 0.43rem;
    padding: 0.1rem 0;
    box-sizing: border-box;
  }
  .allYouhui img{
    width: 100%;
    height: 0.3rem;
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

  /*today*/

  .todayPic{
    box-sizing: border-box;
    width: 100%;
    height: 2.68rem;
    border: 0.1rem solid #000000;
  }
  .todayPic img:first-child{
    width: 100%;
    height: 55%;
  }
  .todayPic img:nth-child(2){
    width: 50%;
    height: 45%;
    float: left;
  }
  .todayPic img:nth-child(3){
    width: 50%;
    height: 45%;
    float: left;
  }
  .bgcBox{
    width: 100%;
    height: 0.1rem;
    background-color: #f1f1f1;
  }
.backTop{
  width: 0.4rem;
  height: 0.4rem;
  position: fixed;
  bottom:0.7rem;
  right:0.2rem;
  z-index: 5;
}
</style>
