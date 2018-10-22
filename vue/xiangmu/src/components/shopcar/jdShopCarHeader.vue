<template>

  <div class="app">
    <span></span>
    <span>购物车<i class="iconfont icon-dingwei"></i></span>
    <span class="span">编辑&nbsp;<i class="iconfont icon-xiaoxi"></i></span>
  </div>

</template>

<script>
    export default {
        name: "jdShopCarHeader",
    }

</script>

<style scoped>
  .app{
    width: 100%;
    height: 0.6rem;
    font-size: 0.18rem;
    line-height: 0.6rem;
  }
  .app span {
    display: inline-block;
  }
  .app .iconfont{
    color: #4a4a4c;
    font-size: 0.18rem;
  }
  .app span:nth-child(2) {
    display: inline-block;
    margin-left: 1.3rem;
    font-size: 0.23rem;
  }
  .app span:nth-child(3) {
    display: inline-block;
    float: right;
    color: #8a8a8a;
  }
</style>
