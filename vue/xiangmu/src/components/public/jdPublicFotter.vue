<template>
  <div class="fotter">
    <router-link to="/"><i class="iconfont icon-shouye"></i>首页</router-link>
    <router-link to="/jsClassifyAll"><i class="iconfont icon-fenlei"></i>分类</router-link>
    <router-link to="/Mines" href="#"><i class="iconfont icon-faxian"></i>发现</router-link>
    <router-link to="/car" href="#"><i class="iconfont icon-gouwuche"></i>购物车</router-link>
    <router-link to="/Mine" href="#"><i class="iconfont icon-wode"></i>我的</router-link>
  </div>
</template>

<script>
    export default {
        name: "jdPublicFotter"
    }
</script>

<style scoped>
  .fotter{
    width: 100%;
    height: 0.65rem;
    display: flex;
    line-height: 0.32rem;
    justify-content: space-around;
    font-size: 0.13rem;
    background: white;
    text-align: center;
  }
  .fotter .iconfont {
    font-size:0.25rem;
    display: block;
  }
  .fotter a{
    color: black;
  }
</style>
