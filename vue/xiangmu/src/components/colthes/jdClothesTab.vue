<template>
  <div class="tabBox">
    <ul>
      <li class="active" @click="change(index)">精选</li>
      <li>国货</li>
      <li>奢品</li>
      <li>潮牌</li>
    </ul>


    <jd-classify-tab-son :imgCol="list"></jd-classify-tab-son>


  </div>

</template>

<script>
  import JdClassifyTabSon from "./jdClassifyTabSon";
  export default {
    name: "jdClothesTab",
    components: {JdClassifyTabSon},
    data(){
      return{
        list:[],
        list1:[]
      }
    },
    created(){
      this._initdata();
    },
    methods:{
      _initdata(){
        // const URL = "http://localhost:8080/static/ldfmock/classify.json";
        fetch("http://localhost:8080/static/ldfmock/classify.json").then(res=>{
          res.json().then(data=>{
            this.list=data.tabCard;
            // console.log(data.tabCard[1]);
          })
        })
      }
    }
  }
</script>

<style scoped>

  .tabBox{
    width: 100%;
    height: 3.58rem;
    background-color: #f1f1f1;
  }
  .tabBox ul{
    width: 100%;
    height: 0.5rem;
    background-color: #fff;
    font-size: 0.15rem;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
  }
  .tabBox ul li{
    padding: 0.15rem 0.29rem;
  }

  .tabBox .tabBox_div{
    padding: 0.13rem 0.05rem 0.05rem 0.13rem;
    box-sizing: border-box;
    display: -webkit-flex;
    flex-wrap: wrap;
  }
  .tabBox .tabBox_div img{
    width: 1.1rem;
    height: 0.64rem;
    margin-right: 0.08rem;
    margin-bottom: 0.08rem;
  }
  .tabBox ul .active{
    font-weight: 600;
    border-bottom: 2px solid #000000;
  }
</style>
