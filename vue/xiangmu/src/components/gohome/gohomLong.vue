<template>
  <div class="nav">
    <div class="nav1">
      <div><img src="../../../static/imgs/c4b9920aefb604ad.png" alt="">超市便利</div>
      <div><img src="../../../static/imgs/aafa7c27496b30d7.png" alt="">新鲜果蔬</div>
      <div><img src="../../../static/imgs/eec1a3e5e04f3bef.png" alt="">烘培蛋糕</div>
      <div><img src="../../../static/imgs/4058f9e7e44a6475.png" alt="">鲜花绿植</div>
      <div><img src="../../../static/imgs/a983b9446d3e5674.png" alt="">医药健康</div>
    </div>
    <div class="nav1">
      <div> <img src="../../../static/imgs/03b02c5e0a992af3.png" alt="">新人专享</div>
      <div><img src="../../../static/imgs/cbad90170dbb2618.png" alt="">VIP会员</div>
      <div> <img src="../../../static/imgs/08955fe3c5b27089.png" alt="">领券中心</div>
      <div><img src="../../../static/imgs/a22829ac9cfa09a0.png" alt="">邀请有奖</div>
      <div><img src="../../../static/imgs/72ba0c438909961a.png" alt="">签到</div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "gohomLong"
    }
</script>

<style scoped>
  .nav{
    width: 100%;
    height: 2.2rem;
    background-image: url("../../../static/imgs/25e6b8ff0e90ab5a.png");
    background-size: 100% 2.2rem;
  }
  .nav1{
    width: 100%;
    height: 1.1rem;
    font-size: 0.15rem;
    display: flex;
    justify-content: space-around;
    text-align: center;

  }
  .nav1 img{
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    vertical-align: middle;
    margin-top: 0.12rem;
  }
</style>
