<template>
  <div class="box">
   <jd-home-section></jd-home-section>
    <jd-home-content :timeBuy1="contentbuyone" :timeBuy2="contentbuytwo" :timeBuy3="contentbuythree" :timeBuy4="contentbuyfour" :dailystroll1="contentdailyone" :dailystroll2="contentdailytwo" :dailystroll3="contentdailythree" :play1="contentplayone" :play2="contentplaytwo" :play3="contentplaythree" :play4="contentplayfour" :fashion1="contentfashionone" :fashion2="contentfashiontwo" :fashion3="contentfashionthree" :fashion4="contentfashionfour" :lif1="contentlifeone" :life2="contentlifetwo" :life3="contentlifethree" :life4="contentlifefour" :youlike="youlike"></jd-home-content>
  </div>
</template>

<script>
    import JdHomeSection from "./JdHomeSection";
    import JdHomeContent from "./JdHomeContent";
    export default {
        name: "JdHomeBox",
      components: {JdHomeContent, JdHomeSection},
      props:["contentbuyone","contentbuytwo","contentbuythree","contentbuyfour","contentdailyone","contentdailytwo","contentdailythree","contentplayone","contentplaytwo","contentplaythree","contentplayfour","contentfashionone","contentfashiontwo","contentfashionthree","contentfashionfour","contentlifeone","contentlifetwo","contentlifethree","contentlifefour","youlike"]
    }
</script>

<style scoped>
  .box{
    -webkit-flex: 1;
    width:100%;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
