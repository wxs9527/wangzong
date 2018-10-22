<template>
  <div class="bigbox">
    <PhoneHeader></PhoneHeader>
    <div class="contents">
        <PhoneIntroduce></PhoneIntroduce>
        <PhoneLists></PhoneLists>
        <PhoneProduct></PhoneProduct>
        <PhonePics></PhonePics>
        <PhoneSize></PhoneSize>
        <PhonePics></PhonePics>
    </div>
    <jd-public-fotter></jd-public-fotter>

  </div>
</template>

<script>
    import PhoneHeader from "../components/jdapple/PhoneHeader";
    import PhoneIntroduce from "../components/jdapple/PhoneIntroduce";
    import PhoneLists from "../components/jdapple/PhoneLists";
    import PhoneProduct from "../components/jdapple/PhoneProduct";
    import PhonePics from "../components/jdapple/PhonePics";
    import PhoneSize from "../components/jdapple/PhoneSize";
    import JdPublicFotter from "../components/public/jdPublicFotter";
    export default {
        name: "Phone",
      components: {
        JdPublicFotter,
        PhoneSize, PhonePics, PhoneProduct, PhoneLists, PhoneIntroduce, PhoneHeader}
    }
</script>

<style scoped>
.bigbox{
  height: 100%;
  display: flex;
  flex-direction: column;
}
  .contents{
     /*width: 100%;*/
     -webkit-flex:1;
     overflow-y: auto;
     overflow-x: hidden;
   }
</style>
