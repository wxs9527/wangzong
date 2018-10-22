<template>
  <div class="fotter">
    <div class="fotter1">
      <p><i class="iconfont icon-lianxikefu"></i>联系客服</p>
      <p><i class="iconfont icon-dianpu"></i>店铺</p>
      <p><i class="iconfont icon-gouwuche"></i>购物车</p>
    </div>
    <div class="fotter2">加入购物车</div>
  </div>
</template>

<script>
    export default {
        name: "particularsFotter"
    }
</script>

<style scoped>
  .fotter{
    width:100%;
    height: 0.65rem;

  }
  .fotter .iconfont{
    font-size: 0.3rem;
    display: block;
  }
  .fotter1 {
    float: left;
    width: 60%;
    font-size: 0.16rem;
    text-align: center;
    display: flex;
    justify-content: space-around;

  }
  .fotter2{
    font-size: 0.2rem;
    width: 40%;
    height: 0.65rem;
    line-height: 0.65rem;
    color: white;
    float: right;
    text-align: center;
    background: #df3222;
  }
</style>
