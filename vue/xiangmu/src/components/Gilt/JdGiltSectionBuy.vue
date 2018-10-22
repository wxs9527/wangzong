<template>
  <div @click="_t" class="gilt" >
    <img class="shangoubg" alt="" :src='sectionbuy[0].imgs'>
    <img v-for="sssA in sectionbuy[0].arr" :src="sssA.img1" :class="sssA.class" alt="">
  </div>
</template>

<script>
    export default {
        name: "JdGiltSectionBuy",
        props:["sectionbuy"]

    }
</script>

<style scoped>
  /*gilt*/
  .gilt{
    width:100%;
    padding:0.1rem 0.1rem;
    box-sizing: border-box;
    border-radius: 0.1rem;
    background: #fff;
    position: relative;

  }
  .shangoubg{
    width:100%;
    height:1.65rem;
  }
  .shangou{
    width:0.94rem;
    height:0.68rem;
    position: absolute;
    z-index: 5;
  }
  .shangou1{
    left:1.51rem;
    top:0.21rem;
  }
  .shangou2{
    left:2.51rem;
    top:0.21rem;
  }
  .shangou3{
    left:1.51rem;
    top:0.95rem;
  }
  .shangou4{
    left:2.51rem;
    top:0.95rem;
  }
</style>
