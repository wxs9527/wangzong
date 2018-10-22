<template>
  <div>
    <gohome-nav></gohome-nav>
    <gohom-long></gohom-long>
    <gohome></gohome>
    <gohome-char></gohome-char>

  </div>
</template>

<script>

    import GohomeNav from "./gohomeNav";
    import GohomLong from "./gohomLong";
    import Gohome from "./gohome";
    import GohomeChar from "./gohomeChar";


    export default {
        name: "gohomeSection",
      components: { GohomeChar, Gohome, GohomLong, GohomeNav},
    }
</script>

<style scoped>


</style>
