<template>
  <div class="home_goods">
    <a href="#" class="home_goods_a" v-for="(goodss,index) in parent.goods"><img :src="goodss.pics" alt=""><span>{{goodss.title}}</span></a>
    <!--<a href="#" class="home_goods_a"><img src="../../../static/img/home_gs.png" alt=""><span>新鲜果蔬</span></a>-->
    <!--<a href="#" class="home_goods_a"><img src="../../../static/img/home_dg.png" alt=""><span>烘培蛋糕</span></a>-->
    <!--<a href="#" class="home_goods_a"><img src="../../../static/img/home_xh.png" alt=""><span>鲜花绿植</span></a>-->
    <!--<a href="#" class="home_goods_a"><img src="../../../static/img/home_yy.png" alt=""><span>医药健康</span></a>-->
    <!--<a href="#" class="home_goods_a"><img src="../../../static/img/home_xr.png" alt=""><span>新人专属</span></a>-->
    <!--<a href="#" class="home_goods_a"><img src="../../../static/img/home_vip.png" alt=""><span>VIP会员</span></a>-->
    <!--<a href="#" class="home_goods_a"><img src="../../../static/img/home_help.png" alt=""><span>帮助中心</span></a>-->
    <!--<a href="#" class="home_goods_a"><img src="../../../static/img/home_yq.png" alt=""><span>邀请有奖</span></a>-->
    <!--<a href="#" class="home_goods_a"><img src="../../../static/img/home_qd.png" alt=""><span>签   到</span></a>-->
  </div>
</template>

<script>
    export default {
        name: "HomeGoods",
        props:["parent"]
    }
</script>

<style scoped>

</style>
