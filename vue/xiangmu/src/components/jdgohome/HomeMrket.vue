<template>
  <div>
    <div class="supermaket" >
      <img :src="parent.pic" alt="" class="yhsuper" >
      <img :src="parent.pic1" alt="" class="yhsuper">
    </div>

    <div class="home_prdct">
      <div class="prdct_list">
        <a class="list_one" v-for="(ones,index) in parent.one" >
          <h3>{{ones.title}}</h3>
          <span class="list_one_span">{{ones.name}}</span>
          <img :src="ones.pics" alt="" class="list_one_img">
        </a>
        <!--<a class="list_one">-->
          <!--<h3>青菜1分</h3>-->
          <!--<span class="list_one_span">健康计划</span>-->
          <!--<img src="../../../static/img/p_sc.jpg" alt="" class="list_one_img">-->
        <!--</a>-->
        <!--<a class="list_one">-->
          <!--<h3>青菜1分</h3>-->
          <!--<span class="list_one_span">健康计划</span>-->
          <!--<img src="../../../static/img/p_sc.jpg" alt="" class="list_one_img">-->
        <!--</a>-->
        <!--<a class="list_one">-->
          <!--<h3>青菜1分</h3>-->
          <!--<span class="list_one_span">健康计划</span>-->
          <!--<img src="../../../static/img/p_sc.jpg" alt="" class="list_one_img">-->
        <!--</a>-->
      </div>
    </div>

    <div class="time_box">
      <div class="time_ms">
        <img :src="parent.pic2" alt="" class="time_pic1">
        <a href="#" class="time_a">更多<img src="../../../static/img/time_r.png" alt="" class="time_pic2"></a>
      </div>
      <div class="ms_box">
        <a href="#" class="ms_list" v-for="(mss,index) in parent.ms">
          <img :src="mss.pics" alt="" class="ms_pic">
          <span class="ms_span">{{mss.title}}</span>
          <span class="ms_money">{{mss.name}}</span>
        </a>
        <!--<a href="#" class="ms_list">-->
          <!--<img src="../../../static/img/mspic.png" alt="" class="ms_pic">-->
          <!--<span class="ms_span">￥7.9</span>-->
          <!--<span class="ms_money">￥9.9</span>-->
        <!--</a>-->
        <!--<a href="#" class="ms_list">-->
          <!--<img src="../../../static/img/mspic.png" alt="" class="ms_pic">-->
          <!--<span class="ms_span">￥7.9</span>-->
          <!--<span class="ms_money">￥9.9</span>-->
        <!--</a>-->
        <!--<a href="#" class="ms_list">-->
          <!--<img src="../../../static/img/mspic.png" alt="" class="ms_pic">-->
          <!--<span class="ms_span">￥7.9</span>-->
          <!--<span class="ms_money">￥9.9</span>-->
        <!--</a>-->
        <!--<a href="#" class="ms_list">-->
          <!--<img src="../../../static/img/mspic.png" alt="" class="ms_pic">-->
          <!--<span class="ms_span">￥7.9</span>-->
          <!--<span class="ms_money">￥9.9</span>-->
        <!--</a>-->
        <!--<a href="#" class="ms_list">-->
          <!--<img src="../../../static/img/mspic.png" alt="" class="ms_pic">-->
          <!--<span class="ms_span">￥7.9</span>-->
          <!--<span class="ms_money">￥9.9</span>-->
        <!--</a>-->
        <!--<a href="#" class="ms_list">-->
          <!--<img src="../../../static/img/mspic.png" alt="" class="ms_pic">-->
          <!--<span class="ms_span">￥7.9</span>-->
          <!--<span class="ms_money">￥9.9</span>-->
        <!--</a>-->
        <!--<a href="#" class="ms_list">-->
          <!--<img src="../../../static/img/mspic.png" alt="" class="ms_pic">-->
          <!--<span class="ms_span">￥7.9</span>-->
          <!--<span class="ms_money">￥9.9</span>-->
        <!--</a>-->
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "HomeMrket",
       props:["parent"]
    }
</script>

<style scoped>

</style>
