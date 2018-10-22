<template>
  <header>
      <jd-public-header></jd-public-header>
  </header>
</template>

<script>
    import JdPublicHeader from "../public/jdPublicHeader";
    export default {
        name: "JdHomeHeader",
      components: {JdPublicHeader}
    }
</script>

<style scoped>
header{
  width:100%;
  height:0.4rem;
  background: #fff;
}
</style>
