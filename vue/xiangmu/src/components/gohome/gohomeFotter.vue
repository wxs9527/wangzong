<template>
  <!--fotter-->
  <div class="fotter">
    <div><i class="iconfont icon-shouye"></i>首页</div>
    <div><i class="iconfont icon-fenlei"></i>分类</div>
    <div><i class="iconfont icon-gouwuche"></i>购物车</div>
    <div><i class="iconfont icon-dingdanguanli-"></i>订单</div>
    <div> <i class="iconfont icon-wode"></i>我的</div>
  </div>
</template>

<script>
    export default {
        name: "gohomeFotter"
    }
</script>

<style scoped>
  /* fotter  */
  .fotter{
    width: 100%;
    height: 0.65rem;
    display: flex;
    justify-content: space-around;
    font-size: 0.15rem;
    text-align: center;
    line-height: 0.3rem;
  }
  .fotter .iconfont{
    font-size: 0.25rem;
    display: block;
  }
  .fotter .icon-shouye {
    color: #5ab153;
  }
</style>
