<template>
    <div class="bigbox">
        <MineHeader></MineHeader>
        <MineBanner></MineBanner>
        <div class="box">
            <MineSection></MineSection>
        </div>
        <jd-public-fotter></jd-public-fotter>
        <MineTop></MineTop>
    </div>

</template>

<script>
    import MineHeader from "../components/jd/MineHeader"
    import MineBanner from "../components/jd/MineBanner"
    import MineSection from "../components/jd/MineSection"

    import MineTop from "../components/jd/MineTop"
    import JdPublicFotter from "../components/public/jdPublicFotter";
    export default {
        name: "Mines",
        components:{
          JdPublicFotter,
            MineHeader,
            MineBanner,
            MineSection,

            MineTop
        }
    }
</script>

<style scoped>
    /*.bigbox{*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*display: flex;*/
        /*flex-direction: column;*/
    /*}*/
</style>
