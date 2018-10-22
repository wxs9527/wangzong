<template>
    <div>
      <div class="lastBox">
        <img class="lastBox_img" src="../../../static/img/jd-fashion-48.png" alt="">
      </div>
      <div class="productList">
        <div class="productList_div">
          <img src="../../../static/img/jd-fashion-49.png" alt="">
          <img class="productList_div_img" src="../../../static/img/jd-fashion-44.jpg" alt="">
          <div class="productList_div_two">
            <span>￥9500</span>
            <img src="../../../static/img/jd-fashion-50.png" alt="">
          </div>
        </div>
        <div class="productList_div">
          <img src="../../../static/img/jd-fashion-49.png" alt="">
          <img class="productList_div_img" src="../../../static/img/jd-fashion-45.jpg" alt="">
          <div class="productList_div_two">
            <span>￥9500</span>
            <img src="../../../static/img/jd-fashion-50.png" alt="">
          </div>
        </div>
        <div class="productList_div">
          <img src="../../../static/img/jd-fashion-49.png" alt="">
          <img class="productList_div_img" src="../../../static/img/jd-fashion-46.jpg" alt="">
          <div class="productList_div_two">
            <span>￥9500</span>
            <img src="../../../static/img/jd-fashion-50.png" alt="">
          </div>
        </div>
        <div class="productList_div">
          <img src="../../../static/img/jd-fashion-49.png" alt="">
          <img class="productList_div_img" src="../../../static/img/jd-fashion-47.jpg" alt="">
          <div class="productList_div_two">
            <span>￥9500</span>
            <img src="../../../static/img/jd-fashion-50.png" alt="">
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "jdFashionThree"
    }
</script>

<style scoped>

  .lastBox{
    width: 100%;
    box-sizing: border-box;
    padding-top: 0.4rem;
    background-color: #f6f6f6;
  }
  .lastBox_img{
    width: 100%;
  }

  .productList{
    background-color: #000;
    padding: 0.04rem 0.06rem;
    box-sizing: border-box;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
  }
  .productList_div{
    background-color: #fff;
    width: 1.8rem;
    /*float: left;*/
    margin-right: 0.01rem;
    margin-bottom: 0.01rem;
    padding: 0.08rem 0.07rem;
    box-sizing: border-box;
  }
  .productList_div span{
    display: block;
    font-size: 0.13rem;

  }
  .productList_div_two{
    margin-top: 0.1rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .productList_div_img{
    margin: 0 auto;
    width: 1.5rem;
    height: 1rem;
  }
</style>
