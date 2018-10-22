<template>
    <div>
        <MineHeader></MineHeader>
        <MineBanner></MineBanner>
        <MineSection :parent=shoop></MineSection>
        <MineTop></MineTop>
        <MineFooter></MineFooter>
    </div>
    
</template>

<script>
    import MineHeader from "../components/jdmatch/MineHeader"
    import MineBanner from "../components/jdmatch/MineBanner"
    import MineSection from "../components/jdmatch/MineSection"
    import MineTop from "../components/jdmatch/MineTop"
    import MineFooter from "../components/jdmatch/MineFooter"
    export default {
        name: "Mine",
        components:{
            MineHeader,
            MineBanner,
            MineSection,
            MineTop,
            MineFooter
        },
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
       const URL= "http://localhost:8080/static/json/json.json"
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

</style>
