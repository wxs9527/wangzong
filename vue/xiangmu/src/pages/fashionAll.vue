<template>
  <div class="bigBox">
   <jd-clothes-nav></jd-clothes-nav>
    <div class="shengbei">
      <jd-fashion-one></jd-fashion-one>
      <jd-fashion-banner></jd-fashion-banner>
      <jd-fashion-two></jd-fashion-two>
      <jd-fashion-three></jd-fashion-three>
    </div>

    <jd-clothes-footer></jd-clothes-footer>
  </div>
</template>

<script>
    import JdFashionOne from "../components/fashion/jdFashionOne";
    import JdFashionBanner from "../components/fashion/jdFashionBanner";
    import JdFashionTwo from "../components/fashion/jdFashionTwo";
    import JdFashionThree from "../components/fashion/jdFashionThree";

    import JdClothesFooter from "../components/colthes/jdClothesFooter";
    import JdClothesNav from "../components/colthes/jdClothesNav";
    export default {
        name: "fashionAll",
      components: {JdClothesNav, JdClothesFooter, JdFashionThree, JdFashionTwo, JdFashionBanner, JdFashionOne}
    }
</script>

<style scoped>
  .bigBox{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
.shengbei{
  flex:1;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
