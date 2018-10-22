<template>
  <div id="app1">
    <div class="nav">
      <ul v-for="(p,index) in shoop" :p="p">
        <li class="li"><span class="float_a" @click="checked"><b class="change_a" >√</b></span>
          <img style="width: 0.25rem;height: 0.25rem;" src="../../../static/img/123.jpg" alt="">
          <span class="text">{{p.Store}}</span>>
        </li>
        <li class="lis">
          <div class="left">
            <span class="right_a"><b>√</b></span>
          </div>
          <div class="right">
            <img class="img" :src="p.pic" alt="">
            <p style="font-size: 0.18rem">{{p.title.name}}</p>
            <p>{{p.marque}}<a class="yifu" href="#">选服务</a></p>
            <p>￥{{p.price}}

              <span class="right1" >
                <input type="button" value="-" @click="sub(index)">
                  <span class="qal">{{p.qal}}</span>
                  <input type="button" value="+" @click="add(index)">
                </span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import $ from "jquery"
    export default {
      name: "jdShopCarSection",
      props:["shoop"],
      methods:{
        sub(index) {
            if( this.shoop[index].qal<=1){
                this.shoop[index].qal=1;
             }else{
              this.shoop[index].qal --;
            }
        },
           add(index){
               this.shoop[index].qal++;
        },
          checked(){
            // $(".float_a").click(function () {
            //   alert("jsdhfjdsh")
            // })

              $(".float_a").css({background:"#fb7407"});
              $(".change_a").toggle();


          }





      },
       // mounted:function(){
       //  this.checked();
       // }
    }
</script>

<style scoped>

  #app1{

    width: 100%;
    font-size:0.13rem;
    background: white;
    flex: 1;
    overflow-y: scroll;
  }
  .nav{
    width: 95%;
    margin: 0 auto;
  }
  .nav ul li{
    margin-top:0.2rem;
  }
  .nav input{
    display:inline-block;
    width: 0.18rem;
    height: 0.18rem;
  }
  .left{
    float: left;
    width: 10%;
  }
  .right img{
    width: 30%;
    height: 1.1rem;
    display: inline-block;
    float: left;
  }
  .left input{
    width: 100%;
    margin-top: 0.5rem;
  }
  .float_a{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    border: 2px solid gray;
    border-radius: 50%;
    text-align: center;
    line-height: 0.2rem;
  }
  .float_a .change_a {
    display: none;
  }
  .right_a{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    border: 2px solid gray;
    border-radius: 50%;
    margin-top: 0.3rem;
    text-align: center;
    line-height: 0.2rem;
  }
  .right{
    float: left;
    width: 90%;
  }
.right p{
  margin-left: 1.1rem;
}
  .right p:nth-child(3){
    margin-top: 0.05rem;
  }
  .right p:nth-child(4){
    margin-top: 0.2rem;
    color:#fe3324;
    font-size: 0.2rem
  }
  .right1{
    float: right;
    color: black;
  }
  .right1 input{
    width: 0.2rem;
    height: 0.2rem;
    text-align: center;
    font-size: 0.2rem;
    line-height: 0.4rem;
  }

  button{
    width: 0.18rem;
    height: 0.18rem;
    border: 0;
  }
  #app1 button{
    width:0.18rem;
    height:0.18rem;
    font-size: 0.25rem;
    text-align: center;
    line-height: 0.17rem;
  }
 .li{
   font-size: 0.18rem;
 }
 .li img{
   display: inline-block;
 }
 .li span{
   display: inline-block;

 }
  .lis{
    font-size: 0.15rem;
  }
  .yifu{
    float: right;
    color: #000;
  }
.qal{
  display: inline-block;
   width: 0.4rem;
   height: 0.2rem;
  background: #f7f7f7;
  text-align: center;
  line-height: 0.2rem;
 }

</style>
