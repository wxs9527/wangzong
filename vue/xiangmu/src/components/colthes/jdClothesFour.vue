<template>
  <div class="recommendBox">
    <ul>
      <li class="active">精选</li>
      <li>新品</li>
    </ul>
    <div class="recommendBox_div">
        <div class="recommendBox_div_one" v-for="item in list">
            <img :src="item.picImg" alt="">
            <p>{{item.title}}</p>
            <span>{{item.price}}</span>
        </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "jdClothesFour",
        data(){
          return{
            list:[]
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
              this.list=data.tab;
              // console.log(data.tab);
            })
          })
        }
      }
    }
</script>

<style scoped>

  .recommendBox{
    width: 100%;
    box-sizing: border-box;
  }
  .recommendBox ul{
    width: 100%;
    height: 0.45rem;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
    font-size: 0.13rem;
    padding: 0 0.14rem;
    box-sizing: border-box;
  }
  .recommendBox ul li{
    padding: 0.14rem 0.6rem;

  }
  .recommendBox_div{
    width: 100%;
    display: -webkit-flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .recommendBox_div .recommendBox_div_one img{
    width: 1.72rem;
    height: 1.72rem;
  }
  .recommendBox_div .recommendBox_div_one{
    font-size: 0.12rem;
    padding: 0 0 0 0.14rem;
    box-sizing: border-box;

  }
  .recommendBox_div .recommendBox_div_one p{
    width: 1.4rem;
    height: 0.3rem;
    text-indent: 0.1rem;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 0.2rem;
  }
  .recommendBox_div .recommendBox_div_one span{
    color:#ff370f;
  }
  .recommendBox ul .active{
    border-bottom: 2px solid orangered;
    font-weight: 600;
    color:orangered;
  }


  .todayBox{
    width: 100%;
    height: 0.61rem;
    /*background-color: red;*/

  }
  .todayBox img{
    width: 95%;
    height: 100%;
    margin:0 auto;
  }

</style>
