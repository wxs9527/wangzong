<template>
<div>
  <nav>
    <ul class="navul">
      <li>精选</li>
      <li>时尚</li>
      <li>唯品会</li>
      <li>爱美</li>
      <li>生活</li>
      <li>疯抢</li>
      <li>预告</li>
      <li>随便逛逛</li>
    </ul>
    <img class="changestate" src="../../../static/img/fenlei.jpg" alt="">
  </nav>
  <div class="fenlei">
    <img src="../../../static/img/allfenlei.jpg" alt="">
    <ul class="fenleiul">
      <li><p>精选</p></li>
      <li><p>时尚</p></li>
      <li><p>唯品会</p></li>
      <li><p>爱美</p></li>
      <li><p>生活</p></li>
      <li><p>疯抢</p></li>
      <li><p>预告</p></li>
      <li><p>随便逛逛</p></li>
    </ul>
  </div>
</div>

</template>

<script>
  import $ from "jquery"
    export default {
        name: "JdGiltNav",
        methods:{
          change(){
            $(".changestate").click(function(){
               $(".fenlei").slideToggle(500)

            })
          }
      },
      mounted:function(){
          this.change()
      }
    }
</script>

<style scoped>
  /*nav*/
  nav{
    width:100%;
    height:0.4rem;
    display:-webkit-flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding:0 0.15rem;
    box-sizing: border-box;
    margin-bottom: 0.1rem;
    border-bottom: 1px solid #cccccc;
    border-top: 1px solid #cccccc;
  }
  .navul{
    width:85%;
    height:0.4rem;
    font-size: 0.15rem;
    line-height: 0.4rem;
    font-weight: 900;
    color:#0c0c0c;
    display:-webkit-flex;
    justify-content: space-between;
    align-items: center;
    flex:1;
    overflow: auto;
  }
  .navul li{
    white-space: nowrap;
    margin-left: 0.3rem;
  }
  nav img{
    width:15%;
    height:0.39rem;
  }
  /*fenlei*/
  .fenlei{
    position: fixed;
    left:0;
    top:0.85rem;
    background: #f5f5f5;
    z-index: 10;
    width:100%;
    padding:0.25rem;
    box-sizing: border-box;
    display: none;
  }
  .fenlei img{
    width:100%;
    height:0.15rem;
  }
  .fenleiul{
    width:100%;
    display: -webkit-flex;
    align-items: center;
    -webkit-flex-wrap: wrap;
    box-sizing: border-box;
  }
  .fenleiul li{
    width:25%;
  }
  .fenleiul li p{

    width:0.75rem;
    height:0.3rem;
    background: #fff;
    margin: 0.05rem 0;
    font-size: 0.12rem;
    line-height: 0.3rem;
    color:#0c0c0c;
    text-align: center;
    box-sizing: border-box;
  }
</style>
