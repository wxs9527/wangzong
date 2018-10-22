<template>
  <div>
    <jd-public-header></jd-public-header>
    <jd-classify-section></jd-classify-section>
    <jd-public-fotter></jd-public-fotter>
  </div>

</template>

<script>
    import JdClassifySection from "../components/classify/jdClassifySection";
    import JdPublicHeader from "../components/public/jdPublicHeader";
    import JdPublicFotter from "../components/public/jdPublicFotter";
    export default {
        name: "jdClassifyAll",
      components: {JdPublicFotter, JdPublicHeader, JdClassifySection}
    }
</script>

<style scoped>

</style>
