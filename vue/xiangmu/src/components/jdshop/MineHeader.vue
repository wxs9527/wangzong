<template>
  <header class="header_box">
    <div class="he_topbox">
      <div class="set_box">
        <a href="#" class="setting"><i class="iconfont icon-shezhi"></i></a>
        <a href="#" class="setting"><i class="iconfont icon-xiaoxi"></i></a>
      </div>
    </div>
    <div class="he_middle">
      <div class="he_tx"><img src="../../../static/img/hd_tx.jpg" alt="" class="he_pic"></div>
      <div class="he_tet">
        <div class="hd_tetbox">
          <a href="#" class="hd_text" v-for="(myhd,index) in parent.mine_hd ">{{myhd.name}}</a>
          <a href="#" class="hd_text_gold"><span class="hd_span" v-for="(myhd,index) in parent.mine_hd ">{{myhd.gold}}</span></a>
        </div>
        <div class="he_value">
          <div class="hd_v_box"><a href="#" class="hd_v_a">京享值<span class="hd_val_span">11863</span><img src="../../../static/img/hd_jt.jpg" alt=""></a></div>
          <div class="hd_v_box"><a href="#" class="hd_v_a">小白信用<span class="hd_val_span">91.6</span><img src="../../../static/img/hd_jt.jpg" alt=""></a></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "MineHeader",
      props:["parent"]
    }
</script>

<style scoped>

</style>
