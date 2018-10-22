<template>
  <section>
      <jd-gilt-section-buy :sectionbuy ="sectionbuymsg"></jd-gilt-section-buy>
      <jd-gilt-section-dior :sectiondior="sectiondiormsg"></jd-gilt-section-dior>
      <jd-gilt-section-dior :sectiondior="sectiondiormsg1"></jd-gilt-section-dior>
      <jd-gilt-section-model :sectionmodel="sectionmodelmsg"></jd-gilt-section-model>
      <jd-gilt-section-dior :sectiondior="sectiondiormsg2"></jd-gilt-section-dior>
      <jd-gilt-section-dior :sectiondior="sectiondiormsg3"></jd-gilt-section-dior>
    <jd-gilt-section-model :sectionmodel="sectionmodelmsg2"></jd-gilt-section-model>
    <jd-gilt-section-dior :sectiondior="sectiondiormsg4"></jd-gilt-section-dior>
  </section>
</template>

<script>
    import JdGiltSectionBuy from "./JdGiltSectionBuy";
    import JdGiltSectionDior from "./JdGiltSectionDior";
    import JdGiltSectionModel from "./JdGiltSectionModel";
    export default {
      name: "JdGiltSection",
      components: {JdGiltSectionModel, JdGiltSectionDior, JdGiltSectionBuy},
      props:["sectionbuymsg","sectiondiormsg","sectionmodelmsg","sectiondiormsg1","sectiondiormsg2","sectiondiormsg3","sectionmodelmsg2","sectiondiormsg4"],

    }
</script>

<style scoped>
  /*section*/
  section{
    width:100%;
    padding:0 0.07rem;
    box-sizing: border-box;
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    background: #f5f5f5;
  }
</style>
