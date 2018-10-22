<template>
  <div class="header">
    <jd-public-header></jd-public-header>
    <div class="nav">
      <HomeHeader :parent="shoop"></HomeHeader>
      <HomeGoods :parent="shoop"></HomeGoods>
      <HomeLbt :parent="shoop"></HomeLbt>
      <HomeMrket :parent="shoop"></HomeMrket>
      <HomeLbt :parent="shoop"></HomeLbt>
    </div>
    <jd-public-fotter></jd-public-fotter>
  </div>

</template>

<script>
    import HomeHeader from "../components/jdgohome/HomeHeader";
    import HomeGoods from "../components/jdgohome/HomeGoods";
    import HomeLbt from "../components/jdgohome/HomeLbt";
    import HomeMrket from "../components/jdgohome/HomeMrket";
    import JdPublicFotter from "../components/public/jdPublicFotter";
    import JdPublicHeader from "../components/public/jdPublicHeader";
    export default {
        name: "Home",
      components: {JdPublicHeader, JdPublicFotter, HomeMrket, HomeLbt, HomeGoods, HomeHeader},
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
