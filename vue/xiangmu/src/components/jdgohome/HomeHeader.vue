<template>
    <div>
      <div class="home_hd">
        <a href="#" class="home_hd_a">
          <img src="../../../static/img/dw.jpg" alt="" class="home_dw">
          <span class="home_xian">{{parent.adds}}</span>
          <img src="../../../static/img/home_xjt.jpg" alt="" class="home_xjt">
        </a>
        <a href="#" class="home_hd_a1"><i class="iconfont icon-xiaoxi"></i></a>
      </div>

      <div class="search_box">
        <a href="#" class="sea_href">
          <!--<input type="text" class="sea_inpt" value="便利宅生活">-->
          <i class="iconfont icon-sousuo sea_sousuo"></i>
          <span>{{parent.sousuo}}</span>
        </a>
      </div>
      <div class="home_lists">
        <div class="home_lists_a">
          <a href="#" v-for="(hdss,index) in parent.hds">{{hdss.titles}}</a>
          <!--<a href="#">牛奶</a>-->
          <!--<a href="#">面包</a><a href="#">玫瑰</a>-->
          <!--<a href="#">卫生纸</a><a href="#">洗衣液</a>-->
          <!--<a href="#">卫生巾</a><a href="#">鸡蛋</a>-->
        </div>
      </div>

      <div class="goshops">
        <img :src="parent.banners" alt="" class="goshops_pic">
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
         props:["parent"]
    }
</script>

<style scoped>

</style>
