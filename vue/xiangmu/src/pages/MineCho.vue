<template>
    <div>
        <MineHeader></MineHeader>
        <MineBanner></MineBanner>
        <MineSectionone></MineSectionone>
        <MineTop></MineTop>
        <MineFooter></MineFooter>
    </div>
    
</template>

<script>
    import MineHeader from "../components/jdcho/MineHeader"
    import MineBanner from "../components/jdcho/MineBanner"
    import MineSectionone from "../components/jdcho/MineSectionone"
    import MineTop from "../components/jdcho/MineTop"
    import MineFooter from "../components/jdcho/MineFooter"
    export default {
        name: "Mine",
        components:{
            MineHeader,
            MineBanner,
            MineSectionone,
            MineTop,
            MineFooter
        }
    }
</script>

<style scoped>

</style>
