<template>
  <div class="tabBox_div">
    <img  alt="" v-for="(item,index) in imgCol[0]?imgCol[0].list:[]" :src="item.picImg">
  </div>
</template>

<script>
    export default {
        name: "jdClassifyTabSon",
        props:["imgCol"],
      created(){
          // console.log(this.imgCol[0].list);
      }
    }
</script>

<style scoped>
.tabBox_div{
    padding: 0.13rem 0.05rem 0.05rem 0.13rem;
    box-sizing: border-box;
    display: -webkit-flex;
    flex-wrap: wrap;
  }
.tabBox_div img{
    width: 1.1rem;
    height: 0.64rem;
    margin-right: 0.08rem;
    margin-bottom: 0.08rem;
  }
</style>
