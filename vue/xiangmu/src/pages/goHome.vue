<template>
  <div>
    <gohome-header></gohome-header>
    <gohome-section></gohome-section>
    <gohome-fotter></gohome-fotter>
  </div>

</template>

<script>
    import GohomeHeader from "../components/gohome/gohomeHeader";
    import GohomeNav from "../components/gohome/gohomeNav";
    import GohomeSection from "../components/gohome/gohomeSection";
    import GohomeFotter from "../components/gohome/gohomeFotter";

    export default {
        name: "goHome",
      components: {GohomeFotter, GohomeSection, GohomeHeader}
    }
</script>

<style scoped>

</style>
