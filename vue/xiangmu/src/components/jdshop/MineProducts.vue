<template>
  <div class="shop_boxs">
    <div class="shop_lists">
      <div class="lists_box">
        <img src="../../../static/img/ck.jpg" alt="" class="list_pic">
      </div>
      <div class="lists_box" v-for="(products,index) in parent.my_prodct">
        <img :src="products.pics" alt="" class="list_pics">
        <div class="list_span">
          <a href="#" class="shop_aa">
            <span class="shop_logo">{{products.title}}</span>
          </a>
          <a href="#" class="shop_rmb">￥<span class="shop_prc">{{products.money}}</span><span class="shop_mj">满减</span>
            <span class="look">{{products.look}}</span>
          </a>
        </div>
      </div>
      <!--<div class="lists_box">-->
        <!--<img src="../../../static/img/xiezi.jpg" alt="" class="list_pics">-->
        <!--<div class="list_span">-->
          <!--<a href="#" class="shop_aa">-->
            <!--<span class="shop_logo">【送袜】安踏篮球鞋舒适透气高帮运动鞋NBA减震</span>-->
          <!--</a>-->
          <!--<a href="#" class="shop_rmb">￥<span class="shop_prc">369.00</span><span class="shop_mj">满减</span>-->
            <!--<span class="look">看相似</span>-->
          <!--</a>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="lists_box">-->
        <!--<img src="../../../static/img/xiezi.jpg" alt="" class="list_pics">-->
        <!--<div class="list_span">-->
          <!--<a href="#" class="shop_aa">-->
            <!--<span class="shop_logo">【送袜】安踏篮球鞋舒适透气高帮运动鞋NBA减震</span>-->
          <!--</a>-->
          <!--<a href="#" class="shop_rmb">￥<span class="shop_prc">369.00</span><span class="shop_mj">满减</span>-->
            <!--<span class="look">看相似</span>-->
          <!--</a>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="lists_box">-->
        <!--<img src="../../../static/img/xiezi.jpg" alt="" class="list_pics">-->
        <!--<div class="list_span">-->
          <!--<a href="#" class="shop_aa">-->
            <!--<span class="shop_logo">【送袜】安踏篮球鞋舒适透气高帮运动鞋NBA减震</span>-->
          <!--</a>-->
          <!--<a href="#" class="shop_rmb">￥<span class="shop_prc">369.00</span><span class="shop_mj">满减</span>-->
            <!--<span class="look">看相似</span>-->
          <!--</a>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "MineProducts",
      props:["parent"]
    }
</script>

<style scoped>

</style>
