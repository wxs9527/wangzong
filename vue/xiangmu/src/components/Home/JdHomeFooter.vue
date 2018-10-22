<template>
  <footer>
    <jd-public-fotter></jd-public-fotter>
  </footer>
</template>

<script>
    import JdPublicFotter from "../public/jdPublicFotter";
    export default {
        name: "JdHomeFooter",
      components: {JdPublicFotter}
    }
</script>

<style scoped>
footer{
  width:100%;
  height:0.4rem;
  background: #fff;
}
</style>
