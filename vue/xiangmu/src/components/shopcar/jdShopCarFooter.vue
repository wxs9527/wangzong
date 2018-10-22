<template>
  <div class="bottom">
        <div class="fotter1">
            <p>
               <input type="checkbox">全选
               <span style="font-size: 0.19rem">合计：￥0</span>
             </p>
            <p>结算(0)</p>
           </div>
  <div id="fotter">
    <router-link to="/"><i class="iconfont icon-shouye"></i>首页</router-link>
    <router-link to="/jsClassifyAll"><i class="iconfont icon-fenlei"></i>分类</router-link>
    <a href="#"><i class="iconfont icon-faxian"></i>发现</a>
    <a href="#"><i class="iconfont icon-gouwuche"></i>购物车</a>
    <router-link to="/Mine"><i class="iconfont icon-wode"></i>我的</router-link>
  </div>
  </div>
</template>

<script>
    export default {
        name: "jdShopCarFooter"
    }
</script>

<style scoped>
  input[type="checkbox"]{
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 50%;
  }
  .bottom{
    width: 100%;
    height: 1.3rem;
  }
  #fotter{
    width: 100%;
    height: 0.65rem;
    display: flex;
    line-height: 0.32rem;
    justify-content: space-around;
    font-size: 0.13rem;
    background: white;
    text-align: center;
    position: relative;
  }
  #fotter .iconfont {
    font-size:0.25rem;
    display: block;
  }
  .fotter1{
    width: 100%;
    height: 0.65rem;
    display: flex;
    background: white;
    display: flex;
    justify-content: space-between;
  }
  .fotter1 p{
    display: inline-block;
  }
  .fotter1 p:nth-child(1){
    font-size: 0.14rem;
    line-height: 0.65rem;
    margin-left: 0.1rem;
  }
  .fotter1 p:nth-child(1) input{
    width: 0.18rem;
    height: 0.18rem;
    text-align: center;
  }
  .fotter1 p:nth-child(2){
    width:1rem;
    height: 0.65rem;
    font-size: 0.2rem;
    line-height: 0.65rem;
    background: #e73823;
    color: white;
    text-align: center;
  }
  #fotter a{
    color: black;
  }
</style>
