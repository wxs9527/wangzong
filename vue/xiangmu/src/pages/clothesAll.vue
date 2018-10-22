<template>
  <div class="clothesBeiBox">
    <div class="clothesBei">
      <jd-clothes-header></jd-clothes-header>
      <jd-clothes-nav class="bgc"></jd-clothes-nav>
      <jd-clothes-one :sssA="sss"></jd-clothes-one>
      <jd-clothes-banner></jd-clothes-banner>
      <jd-clothes-two></jd-clothes-two>
      <jd-clothes-tab></jd-clothes-tab>
      <jd-clothes-three></jd-clothes-three>
      <jd-clothes-four></jd-clothes-four>
    </div>
    <jd-clothes-footer></jd-clothes-footer>
  </div>

</template>

<script>
    import JdClothesHeader from "../components/colthes/jdClothesHeader";
    import JdClothesNav from "../components/colthes/jdClothesNav";
    import JdClothesOne from "../components/colthes/jdClothesOne";
    import JdClothesBanner from "../components/colthes/jdClothesBanner";
    import JdClothesTwo from "../components/colthes/jdClothesTwo";
    import JdClothesTab from "../components/colthes/jdClothesTab";
    import JdClothesThree from "../components/colthes/jdClothesThree";
    import JdClothesFour from "../components/colthes/jdClothesFour";
    import JdClothesFooter from "../components/colthes/jdClothesFooter";
    export default {
        name: "clothesAll",
        components: {
        JdClothesFooter,
        JdClothesFour,
        JdClothesThree,
        JdClothesTab,JdClothesBanner, JdClothesNav, JdClothesHeader,JdClothesOne,JdClothesTwo},
      data(){
          return{
            sss:false,
          }
      },
     mounted(){
          let clothesBei = document.querySelector(".clothesBei");
          let bgc = document.querySelector(".bgc");
         window.onload=()=>{
           clothesBei.onscroll=()=>{
              let top = clothesBei.scrollTop ;
              if(top>10){
                bgc.className="white";
              }else{
                bgc.className="";
              }

              if(top>=530){
                this.sss=true;
              }else{
                this.sss=false;
              }
            }
         }
     }
    }
</script>

<style scoped>
  .white{
    background-color: white;
  }
  .clothesBeiBox{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
.clothesBei{
  flex:1;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
