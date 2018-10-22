<template>
  <div class="char">
    <div class="char1">
      <img src="../../../static/imgs/983b811c4b573db4.png" alt="">
      <img src="../../../static/imgs/40743824e3331b96.png" alt="">
    </div>
    <div class="char_a">
      <div class="char_a1">
        <p>人人乐</p>
        <p>满59减20</p>
        <img src="../../../static/imgs/5b27a7ceNaf851f5e.png" alt="">
      </div>
      <div class="char_a1">
        <p>满49见30</p>
        <p>鲜果大放价</p>
        <img src="../../../static/imgs/f077c0320863335b.png" alt="">
      </div>
      <div class="char_a1">
        <p>抢30减20</p>
        <p>鸡蛋1元秒</p>
        <img src="../../../static/imgs/667d88c5730c5dcc.png" alt="">
      </div>
      <div class="char_a1">
        <p>蔬菜特价</p>
        <p>满49减20</p>
        <img src="../../../static/imgs/578c96a1N6edded85.jpg" alt="">
      </div>
    </div>
    <div class="number">
      <div class="number1">
        <img src="../../../static/imgs/seckill-title.png" alt="">
        <a href="#">更多></a>
      </div>
      <div class="number2">
        <div class="number_a">
          <img src="../../../static/imgs/5bbd5c00N4ce4ec88.png" alt="">
          <p>￥<b>1</b></p>
          <p>￥4.99</p>
        </div>
        <div class="number_a">
          <img src="../../../static/imgs/5bbd5c00N4ce4ec88.png" alt="">
          <p>￥<b>1</b></p>
          <p>￥4.99</p>
        </div>
        <div class="number_a">
          <img src="../../../static/imgs/5bbd5c00N4ce4ec88.png" alt="">
          <p>￥<b>1</b></p>
          <p>￥4.99</p>
        </div>
        <div class="number_a">
          <img src="../../../static/imgs/5bbd5c00N4ce4ec88.png" alt="">
          <p>￥<b>1</b></p>
          <p>￥4.99</p>
        </div>
        <div class="number_a">
          <img src="../../../static/imgs/5bbd5c00N4ce4ec88.png" alt="">
          <p>￥<b>1</b></p>
          <p>￥4.99</p>
        </div>
        <div class="number_a">
          <img src="../../../static/imgs/5bbd5c00N4ce4ec88.png" alt="">
          <p>￥<b>1</b></p>
          <p>￥4.99</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "gohomeChar"
    }
</script>

<style scoped>
  .char1{
    width: 95%;
    height: 1.6rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .char1 img{
    width: 49%;
    height: 1.6rem;
  }
  .char_a{
    width: 95%;
    height:1.75rem ;
    margin: 0.1rem auto;
    display: flex;
    text-align: center;
    line-height: 0.25rem;
    justify-content: space-between;
  }
  .char_a1{
    width: 23%;
    height:1.7rem ;
    font-size: 0.15rem;
    background: #fafafa;
  }
  .char_a1 img{
    width: 0.8rem;
    height:0.8rem ;
    margin-top: 0.2rem;
  }
  .char_a1 p:nth-child(1){
    padding-top: 0.15rem;
  }
  .char_a1 p:nth-child(2){
    color: #e8474f;
    line-height: 0.2rem;
  }

  .number{
    width: 100%;
    height: 2.25rem;
  }
  .number1{
    width: 95%;
    height: 0.55rem;
    margin:  0 auto;
    font-size: 0.15rem;
    line-height: 0.55rem;
    display: flex;
    justify-content: space-between;
  }
  .number1 a{
    color: #f36386;
  }
  .number1 img{
    height: 0.2rem;
    margin-top: 0.18rem;
  }
  .number2{
    width: 95%;
    height: 1.7rem;
    margin: 0 auto;
    display: flex;
    overflow-x: auto;
  }
  .number_a{
    width: 1.05rem;
    height: 1.7rem;
    font-size:0.15rem ;
    float: left;


  }
  .number_a img{
    width: 1.05rem;
    height: 1.05rem;
    margin-top: 0.06rem;
  }
  .number_a p{
    display: block;
    text-align: center;
    line-height: 0.25rem;
  }
  .number_a :nth-child(2){
    color: #e96b54;
  }
  .number_a :nth-child(3){
    text-decoration:line-through;
    color: gray;
  }
</style>
