<template>
  <div class="next">
    <h3>附近的店铺</h3>
  </div>
  <div class="next1">
    <div class="next_a">
      <img src="../../../static/imgs/5bc05bd8Nffbccf1f.png" alt="">
    </div>
    <div class="next_b">
      <h4>华润万家-太白南路店</h4>
      <p class="next_c">
                <span >
                    <img src="../../../static/imgs/newStar.png" alt="">
                2.5&nbsp;&nbsp;<b style="color: #000;font-size: 0.15rem">月销8千+</b>
                </span>
        <span class="next_bright">55分钟 &nbsp;1.3km</span>
      </p>
      <p class="sections">
        <span>起送￥0&nbsp;&nbsp;基础费￥4</span>
        <a href="#">达达专送</a>
      </p>
      <p class="sections_a"><span class="h">领券</span>立减5.5元减1.88元 满499减49</p>
      <p class="sections_a"><span class="w">联合</span>利华洗护满49减20</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "gohomFjin"
    }
</script>

<style scoped>
  .next{
    width: 95%;
    height: 0.63rem;
    margin: 0 auto;
    line-height: 0.63rem;
    font-size: 0.23rem;
  }
  .next1{
    width: 95%;
    height: 1.95rem;
    margin: 0 auto;
    font-size: 0.23rem;
  }
  .next_a{
    width: 20%;
    height: 1.9rem;
    font-size: 0.23rem;
    float: left;
  }
  .next_a img{
    width: 100%;
    height: 0.7rem;
  }
  .next_b{
    width: 80%;
    height:1.9rem;
    float: right;
  }
  .next_b h4{
    font-size: 0.17rem;
    margin-left: 0.1rem;
    color: #000;
  }
  .next_b p{
    margin-left: 0.1rem;
    line-height: 0.3rem;
  }
  .next_c{
    display: flex;
    justify-content: space-between;
    font-size: 0.1rem;
    color: #ffa929;
  }
  .next_b:nth-child(2) img{
    width:0.65rem;
    height:0.1rem;

  }
  .next_bright{
    font-size: 0.15rem;
    color: gray;
  }
  .sections{
    display: flex;
    justify-content: space-between;
    font-size: 0.15rem;

  }
  .sections a{
    display: inline-block;
    border:  2px solid #54acff;
    border-radius: 0.1rem;
    color: #54acff;
  }
  .sections_a{
    font-size: 0.15rem;
  }
  .h{
    background: #f5725e;
    color: white;
  }
  .w{
    background: #68bb61;
    color: white;
  }
</style>
