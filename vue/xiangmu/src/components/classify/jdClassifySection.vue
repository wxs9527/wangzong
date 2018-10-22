<template>
  <section>
    <ul class="ulBoxOne">
      <li class="active"  @click="str=0"><a  href="javascript:;">推荐分类</a></li>
      <li><a href="javascript:;"  @click="str=1">手机数码</a></li>
      <li><a href="javascript:;"  @click="str=2">家用电器</a></li>
      <li><a href="javascript:;"  @click="str=3"> 电脑办公</a></li>
      <li><a href="javascript:;"  @click="str=4">钟表珠宝</a></li>
      <li><a href="javascript:;"  @click="str=5">美妆护肤</a></li>
      <li><a href="javascript:;"  @click="str=6">个护清洁</a></li>
      <li><a href="javascript:;"  @click="str=7">汽车用品</a></li>
      <li><a href="javascript:;"  @click="str=8">京东超市</a></li>
      <li><a href="javascript:;"  @click="str=9">男装</a></li>
      <li><a href="javascript:;"  @click="str=10">男鞋</a></li>
      <li><a href="javascript:;"  @click="str=11">女装</a></li>
      <li><a href="javascript:;"  @click="str=12">女鞋</a></li>
      <li><a href="javascript:;"  @click="str=13">母婴童装</a></li>
      <li><a href="javascript:;"  @click="str=13">图书音像</a></li>
      <li><a href="javascript:;"  @click="str=14">运动户外</a></li>
      <li><a href="javascript:;"  @click="str=15">内衣配饰</a></li>
      <li><a href="javascript:;"  @click="str=16">食品生鲜</a></li>
      <li><a href="javascript:;"  @click="str=17">酒水饮料</a></li>
      <li><a href="javascript:;"  @click="str=18">家居家装</a></li>
      <li><a href="javascript:;"  @click="str=19">家居厨具</a></li>
      <li><a href="javascript:;"  @click="str=20">箱包手袋</a></li>
      <li><a href="javascript:;"  @click="str=21">钟表珠宝</a></li>
    </ul>

    <div v-show="str===0" class="sectionDiv">
      <div class="sectionDiv_banner">
        <img src="../../../static/img/jd-classify-1.jpg" alt="">
      </div>
      <div class="chosenBox">
        <h4><span>热门精选</span> </h4>
        <ul>
          <li  v-for="item in list">
            <img :src="item.imgSrc" alt="">
            <span>{{item.txtIfo}}</span>
          </li>

        </ul>
      </div>

      <div class="chosenBox">

        <div class="chosenBox">
          <h4><span>热门电器</span> </h4>
          <ul>
            <li  v-for="item in list1">
              <img :src="item.imgSrc" alt="">
              <span>{{item.txtIfo}}</span>
            </li>

          </ul>
        </div>
      <h4><span>热门手机</span> </h4>
      <ul>
        <li  v-for="item in list2">
          <img :src="item.imgSrc" alt="">
          <span>{{item.txtIfo}}</span>
        </li>
      </ul>
    </div>
    </div>


    <div v-show="str===1" class="sectionDiv">
      <div class="sectionDiv_banner">
        <img src="../../../static/img/phone1.jpg" alt="">
      </div>
      <div class="chosenBox">
        <h4><span>热门品牌</span> </h4>
        <ul>
          <li  v-for="sec in second">
            <img :src="sec.imgSrc" alt="">
            <span>{{sec.txtIfo}}</span>
          </li>

        </ul>
      </div>

      <div class="chosenBox">

        <div class="chosenBox">
          <h4><span>手机通讯</span> </h4>
          <ul>
            <li  v-for="sec in second1">
              <img :src="sec.imgSrc" alt="">
              <span>{{sec.txtIfo}}</span>
            </li>

          </ul>
        </div>
        <h4><span>热门手机</span> </h4>
        <ul>
          <li  v-for="item in list2">
            <img :src="item.imgSrc" alt="">
            <span>{{item.txtIfo}}</span>
          </li>
        </ul>
      </div>
    </div>


    <div v-show="str===2" class="sectionDiv">
      <div class="sectionDiv_banner">
        <img src="//img11.360buyimg.com/mcoss/jfs/t1/4118/20/10083/84675/5bc9cdeaEbda49abe/2ae0a1162cd3f2a7.jpg" alt="">
      </div>
      <div class="chosenBox">
        <h4><span>厨房小电</span> </h4>
        <ul>
          <li  v-for="thr in three">
            <img :src="thr.imgSrc" alt="">
            <span>{{thr.txtIfo}}</span>
          </li>

        </ul>
      </div>

      <div class="chosenBox">
        <h4><span>个户健康</span> </h4>
        <ul>
          <li  v-for="thr in three1">
            <img :src="thr.imgSrc" alt="">
            <span>{{thr.txtIfo}}</span>
          </li>

        </ul>
      </div>


      <div class="chosenBox">
        <h4><span>冰箱</span> </h4>
        <ul>
          <li  v-for="thr in three2">
            <img :src="thr.imgSrc" alt="">
            <span>{{thr.txtIfo}}</span>
          </li>

        </ul>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "jdClassifySection",
      data(){
          return{
            str:0,
            list:[],
            list1:[],
            list2:[],

            second:[],
            second1:[],
            second2:[],


            three:[],
            three1:[],
            three2:[]

          }
      },
      created(){
        this._initdata();
      },
      methods:{
          _initdata(){
            fetch("http://localhost:8080/static/ldfmock/sort.json").then(res=>{
              res.json().then(data=>{
                this.list = data[0].title.small;
                this.list1= data[0].title1.small;
                this.list2= data[0].title2.small;
                // console.log(data[0].title.small)
                this.second = data[1].title.small;
                this.second1= data[1].title1.small;
                this.second2= data[1].title2.small;
                // console.log(data[1].title.small)

                this.three = data[2].title.small;
                this.three1= data[2].title1.small;
                this.three2= data[2].title2.small;
                // console.log(data[2].title.small)
              })
            })
          }
      },
      mounted(){
          let ul = document.getElementsByClassName("ulBoxOne")[0];
          let li = ul.getElementsByTagName("li");
        for(let i=0;i<li.length;i++){

          li[i].onclick=function(){
            for(let i=0;i<li.length;i++){
              li[i].className="";
            }
            this.className="active"
          }

        }
      }
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 5.35rem;
    background-color: #f4f5f7;
    display: -webkit-flex;
  }
  section .ulBoxOne{
    width: 26%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  section .ulBoxOne li{
    border: 1px solid #e4e4e4;
    width: 100%;
    height: 0.5rem;
    background-color: #fff;
  }
  section .ulBoxOne li a{
    font-size: 0.12rem;
    color: #252525;
    display: block;
    text-align: center;
    line-height: 0.5rem;
  }
  section .ulBoxOne .active{
    background-color: transparent;
    color:#533f03;
  }


  /*sectionDiv*/

  .sectionDiv{
    width: 70%;
    height: 100%;
    padding: 0 0.08rem;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .sectionDiv::-webkit-scrollbar{
    display: none;
  }
  .sectionDiv .sectionDiv_banner{
    width: 2.66rem;
    height: 0.91rem;
    margin: 0.16rem 0;
  }
  .sectionDiv .sectionDiv_banner img{
    width: 100%;
    height: 100%;
  }
  .chosenBox h4{
    font-size: 0.13rem;
  }
  .chosenBox ul{
    width:2.55rem;
    margin-top: 0.05rem;
    background-color: #fff;
    padding: 0.14rem 0.09rem;
    box-sizing: border-box;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-justify-content: space-between;
    margin-bottom: 0.1rem;
  }
  .chosenBox ul li{
    /*display: -webkit-flex;*/
    -webkit-flex-direction: column;
    text-align: center;
    width: 30%;
    margin-bottom: 0.1rem;
  }
  .chosenBox ul li span{
    font-size: 0.12rem;
    display: block;
  }
  .chosenBox ul li img{
    width: 0.65rem;
    height: 0.6rem;
    margin-bottom: 0.05rem;
  }

</style>
