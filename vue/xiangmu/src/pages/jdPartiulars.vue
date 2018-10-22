<template>
  <div class="key">
    <particulars-header></particulars-header>
    <div class="section">
      <particulars-section></particulars-section>
    </div>
    <particulars-fotter></particulars-fotter>
  </div>

</template>

<script>
    import ParticularsHeader from "../components/particulars/particularsHeader";
    import ParticularsSection from "../components/particulars/particularsSection";
    import ParticularsFotter from "../components/particulars/particularsFotter";
    export default {
        name: "jdPartiulars",
      components: {ParticularsFotter, ParticularsSection, ParticularsHeader}
      // data(){
      //     return{
      //       jdPartiulars:[]
      //     }
      // },
      // mounted(){
      //   fetch("http://localhost:8080/static/package-lock.json").then((res)=>{
      //     res.json().then((d)=>{
      //       console.log(d);
      //       this.jdPartiulars=d;
      //     })
      //   })
      // }
    }
</script>

<style scoped>
  .key{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .section{
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
  }
</style>
