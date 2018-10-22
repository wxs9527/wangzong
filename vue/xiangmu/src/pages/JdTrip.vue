<template>
    <div>
      <jd-trip-header></jd-trip-header>
      <jd-trip-section></jd-trip-section>
    </div>
</template>

<script>
    import JdTripHeader from "../components/Trip/JdTripHeader";
    import JdTripSection from "../components/Trip/JdTripSection";
    export default {
        name: "trip",
      components: {JdTripSection, JdTripHeader}
    }
</script>

<style scoped>

</style>
