<template>
  <div class="qpp">
    <!--头部 -->
    <a href="#"><i class="iconfont icon-saoyisao "></i>扫啊扫</a>
    <a href="#" class="pic">
      <i class="iconfont icon-sousuo"></i>
      <input style="font-size: 0.15rem;color :#8c8c8c;" type="text"placeholder="MO&CO京东超级品牌日">
      <img src="../../../static/img/1.jpg" alt="">
    </a>
    <a href="#" style="line-height: 0.05rem"><i class="iconfont icon-xiaoxi"></i>消息</a>
  </div>
</template>

<script>
    export default {
        name: "jdPublicHeader"
    }
</script>

<style scoped>
  .qpp{
    width: 100%;
    height:0.7rem;
    display: flex;
    justify-content: space-around;
    font-size: 0.15rem;
    background: white;
    color: black;
    text-align: center;
  }
  .qpp a{
    color: black;
  }
  .qpp .iconfont{
    font-size: 0.25rem;
    color: black;
    display: block;
    line-height: 0.37rem;
  }

  .pic{
    width:2.5rem;
    height:0.35rem ;
    background: white;
    margin-top: 0.1rem;
    border: 0;
    display: flex;
    justify-content: space-around;
    -webkit-border-radius: 0.25rem;
    border-radius: 0.25rem;
  }
  .pic input{
    display: inline-block;
    outline: 0;
    border: 0;
    width:1.5rem;
    height:0.25rem ;
    margin-top: 0.05rem;
  }
  .pic img{
    display: inline-block;
    margin-top: 0.05rem;
    height:0.25rem ;
  }
  .pic .iconfont{
    margin-top: 0.01rem;
  }
</style>
