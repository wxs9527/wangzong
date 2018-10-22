<template>
  <nav>
    <i class="iconfont icon-xiangzuo2 goback"></i>
    <span>京东服饰</span>
    <div>
      <i class="iconfont icon-02"></i>
      <i class="iconfont icon-more"></i>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "jdClothesNav",
      mounted:function(){
        this.xx()
      },
      methods:{
          xx(){
            let clothesBei = document.querySelector(".clothesBei");
            clothesBei.onscroll=()=> {
              let top = clothesBei.scrollTop;
              if (top > 5) {
                document.querySelector("nav").classNmae = "white";
              }else{
                document.querySelector("nav").classNmae = "";
              }
            }
          }
      },
      mounted(){
          let hui = document.querySelector(".goback");
          hui.onclick=function(){
            history.back();
          }

      }

    }
</script>

<style scoped>
  .white{
    background-color: #fff;
    color:#370816;
  }
  nav{
    width: 100%;
    height:0.42rem;
    display: flex;
    -webkit-justify-content:space-between;
    -webkit-align-items: center;
    padding: 0px 0.19rem;
    box-sizing: border-box;
    color:white;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 5;
  }
  nav span{
    font-size:0.16rem;
    font-weight: 600;
  }

  nav i{
    font-size: 0.20rem;
    font-weight: 600;
  }
  nav div{
    display: flex;
  }
  nav div i:first-child{
    margin-right: 0.19rem;
  }
</style>
