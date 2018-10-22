<template>
  <div class="bannerTwoBox">
    <jd-classify-banner></jd-classify-banner>
  </div>
</template>

<script>
    import JdClassifyBanner from "../classify/jdClassifyBanner";
    export default {
        name: "jdClothesBanner",
      components: {JdClassifyBanner}
    }
</script>

<style scoped>
  .bannerTwoBox{
    width: 100%;
    height:3.1rem;
    background: url("../../../static/img/jd-clothes-13.jpg") no-repeat;
    background-size: 100% 100%;
  }
</style>
