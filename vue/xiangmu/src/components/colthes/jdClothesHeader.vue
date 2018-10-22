<template>
  <header class="clear">
    <div class="header_banner_box">
        <div class="bbb">
          <jd-classify-banner ></jd-classify-banner>
        </div>


      <!--<img class="imgOne" src="../../../static/img/jd-clothes-1.jpg" alt="">-->
    </div>

    <div class="productList">
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
    </div>

  </header>
</template>

<script>
  import swiper from "swiper"
    import JdClassifyBanner from "../classify/jdClassifyBanner";
    export default {
        name: "jdClothesHeader",
      components: {JdClassifyBanner}

    }
</script>

<style scoped>
  .productList{
    z-index: 5;
  }
  .bbb{
    height:4.68rem;
    width:100%;
  }
  header{
    height:4.68rem;
    width:100%;
    position: relative;
  }
  .header_banner_box{
    height:4.68rem;
    width:100%;
  }
  header .imgOne{
    width: 100%;
    height: 100%;
  }
  header ul{
    position: absolute;
    bottom:1.5rem;
    right: 0.05rem;
  }
  header ul li{
    width: 0.08rem;
    height: 0.08rem;
    background-color: #2f2f2f;
    border-radius: 50%;
    float: left;
    margin-right: 0.08rem;
  }
  header ul .active{
    width: 0.25rem;
    border-radius: 0.5rem;
    background-color: #fff;
  }
  header .productList{
    display: -webkit-flex;
    flex-wrap: wrap;
    width: 100%;
    height:1.93rem;
    background: url("../../../static/img/jd-clothes-2.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: -0.6rem;
    left: 0;
  }
  header .productList a{
    display: block;
    width: 20%;
    background-color: transparent;
  }
</style>
