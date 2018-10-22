<template>
  <div>
    <div class="wrist_watch ">
      <img class="shangoubg" :src="sectionmodel.img"alt="">
    </div>


  </div>
</template>

<script>
    import JdGiltSectionDior from "./JdGiltSectionDior";
    export default {
        name: "JdGiltSectionModel",
      components: {JdGiltSectionDior},
      props:["sectionmodel"]
    }
</script>

<style scoped>
  .wrist_watch{
    width:100%;
    padding:0.1rem;
    box-sizing: border-box;
    border-radius: 0.1rem;
    background:#fff;
    margin-top: 0.1rem;

  }
  .shangoubg{
    width:100%;
    height:1.65rem;
  }
</style>
