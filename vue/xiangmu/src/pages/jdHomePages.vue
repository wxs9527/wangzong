<template>
  <div class="header">
    <jd-public-header></jd-public-header>
    <div class="nav">
      <JdHome></JdHome>
    </div>
    <jd-public-fotter></jd-public-fotter>
  </div>

</template>

<script>
    import JdPublicHeader from "../components/public/jdPublicHeader";
    import JdPublicFotter from "../components/public/jdPublicFotter";
    import JdHome from "./JdHome";
    export default {
        name: "jdheader",
      components: {JdHome, JdPublicHeader ,JdPublicFotter},
    }
</script>

<style scoped>
.header{
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
  .nav{
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
