<template>
  <div class="header">
    <MineHeader :parent="shoop"></MineHeader>
    <div class="nav">
      <MineGive></MineGive>
      <MineCommon></MineCommon>
      <MineMoney></MineMoney>
      <MineCommon></MineCommon>
      <MineOwn></MineOwn>
      <MineCommon></MineCommon>
      <MinePlus></MinePlus>
      <MineCommon></MineCommon>
      <MineRespond></MineRespond>
      <MineCommon></MineCommon>
      <MineServce></MineServce>
      <MineCommon></MineCommon>
      <MineRecoment></MineRecoment>
      <MineNav></MineNav>
      <MineProducts :parent="shoop"></MineProducts>
      <MineContent></MineContent>
    </div>

    <jd-public-fotter></jd-public-fotter>
  </div>

</template>

<script>

    import MineHeader from "../components/jdshop/MineHeader";
    import MineCommon from "../components/jdshop/MineCommon";
    import MineGive from "../components/jdshop/MineGive";
    import MineMoney from "../components/jdshop/MineMoney";
    import MineOwn from "../components/jdshop/MineOwn";
    import MinePlus from "../components/jdshop/MinePlus";
    import MineRespond from "../components/jdshop/MineRespond";
    import MineServce from "../components/jdshop/MineServce";
    import MineRecoment from "../components/jdshop/MineRecoment";
    import MineNav from "../components/jdshop/MineNav";
    import MineProducts from "../components/jdshop/MineProducts";
   // import JdPublicFotter from "../components/jdshop/jdPublicFotter";
    import MineContent from "../components/jdshop/MineContent";
    import JdPublicFotter from "../components/public/jdPublicFotter";
    export default {
        name: "Mine",
      components: {
        JdPublicFotter,
        MineContent,
      //  JdPublicFotter,
        MineProducts,
        MineNav,
        MineRecoment, MineServce, MineRespond, MinePlus, MineOwn, MineMoney, MineGive, MineCommon, MineHeader},
        data(){
        return{
          shoop:[]
        }
      },
      created(){
        this._initdata();
      },
      methods:{
        _initdata(){
          const URL= "http://localhost:8080/static/json/Home.json"
          fetch(URL).then(res=>{
            res.json().then(data=>{
              console.log(data)
              this.shoop = data;
            })
          })
        }
      }
    }
</script>

<style scoped>
.header{
  height: 100%;
  display: flex;
  flex-direction: column;
}
  .nav{
    flex: 1;
    overflow-y: auto;
  }
</style>
