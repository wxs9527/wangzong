<template>
  <div>
    <header >
      <img class="header_imgs1" src="../../../static/img/leftjt.png" alt="">
      <img class="header_imgs2" src="../../../static/img/gilt.jpg" alt="">
      <img class="header_imgs3" src="../../../static/img/header3.jpg" alt="" >
    </header>
    <!--share-->
    <div class="share" >
      <img class="shareimg" src="../../../static/img/share.jpg" alt="">
      <ul class="shareul">
        <li class="shareli">
          <img src="../../../static/img/share1.jpg" alt="">
          <p>微信好友</p>
        </li>
        <li class="shareli">
          <img src="../../../static/img/share2.jpg" alt="">
          <p>微信好友</p>
        </li>
        <li class="shareli">
          <img src="../../../static/img/share3.jpg" alt="">
          <p>微信好友</p>
        </li>
        <li class="shareli">
          <img src="../../../static/img/share4.jpg" alt="">
          <p>微信好友</p>
        </li>
        <li class="shareli">
          <img src="../../../static/img/share5.jpg" alt="">
          <p>微信好友</p>
        </li>
        <li class="shareli">
          <img src="../../../static/img/share6.jpg" alt="">
          <p>微信好友</p>
        </li>
      </ul>
      <p class="cancel" >取消</p>
    </div>
  </div>
</template>

<script>
    import $ from "jquery"
    export default {
        name: "JdGiltHeader",
      data(){
        return{
          a:false
        }
      },
      methods:{
        sharechange(){
         $(".header_imgs3").click(function(){
             $(".share").slideDown(1000)

         })
        },
        cancelchange(){
          $(".cancel").click(function(){
            $(".share").slideUp(1000)
          })
        }
    },
      mounted:function () {
          this.sharechange();
          this.cancelchange()
      }

    }
</script>

<style scoped>
  /*header*/
  header{
    width:100%;
    height:0.4rem;
    display:-webkit-flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding:0 0.15rem;
    box-sizing: border-box;

  }
  .header_imgs1{
    width:0.12rem;
    height:0.15rem;
  }
  .header_imgs2{
    width:0.93rem;
    height:0.375rem;
  }
  .header_imgs3{
    width:0.31rem;
    height:0.31rem;
  }
  /*share*/
  .share{
    position:fixed;
    bottom:0;
    lef:0;
    width:100%;
    background: rgba(250,250,250,.9);
    height:3rem;
    z-index: 10;
    padding:0 0.33rem;
    box-sizing: border-box;
    display: none;
  }
  .shareimg{
    width:100%;
    height:0.47rem;
  }
  .shareul{
    display: -webkit-flex;
    align-items: center;
    -webkit-flex-wrap: wrap;
    border-bottom: 2px solid #cdcdcd;

  }
  .shareli{
    width:25%;
    text-align: center;
    margin-bottom: 0.18rem;
  }
  .shareli img{
    width:0.585rem;
    height:0.525rem;
    margin: 0 auto;
  }
  .shareli p{
    font-size: 0.14rem;
    line-height: 0.3rem;
    font-weight: 900;
    color:#0c0c0c;
  }
  .cancel{
    font-size: 0.14rem;
    line-height: 0.5rem;
    font-weight: 900;
    color:#0c0c0c;
    text-align: center;
  }

</style>
