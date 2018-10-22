<template  >
  <div class="dior" @click="t" >
    <img class="diorimg" :src="sectiondior.imgbac" alt="">
    <ul class="diorul">
      <li class="diorli"   v-for="n in sectiondior.arr">
        <img :src="n.imgSrc" alt="">
        <div class="diorli_div">
          <p>￥<span >{{n.currMoney}}</span></p>
          <p >￥{{n.pastMoney}}</p>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
    export default {
        name: "JdGiltSectionDior",
        props:["sectiondior"],
        methods:{
          t(){
            console.log(this.sectiondior)
          }
        }
    }
</script>

<style scoped>
  /*dior*/
  .dior{
    width:100%;
    box-sizing: border-box;
    border-radius: 0.1rem;
    background: #fff;
    margin-top: 0.1rem;
  }
  .diorimg{
    width:100%;
    height:1.72rem;
  }
  .diorul{
    width:100%;
    box-sizing: border-box;
    padding: 0.1rem;
    background: #fff;
    display:-webkit-flex;
    justify-content: space-between;
   overflow: hidden;

  }
  .diorli{
    width:33.3%;
    position: relative;
    margin-right: 0.1rem;
  }
  .diorli:nth-child(3){
    margin-right: 0rem;
  }
  .diorli img{
    width:100%;
    height:1.12rem;
  }
  .diorli_div{
    width:100%;
    height:0.17rem;
    background: rgba(247,247,247,.5);
    position: absolute;
    bottom:0;
    left:0;
    display:-webkit-flex;
    justify-content: space-between;
    align-items: center;
  }
  .diorli_div p{
    font-size: 0.11rem;
    line-height: 0.19rem;
    font-weight: 900;
    color:#ff5996;
  }
  .diorli_div p span{
    font-size: 0.14rem;
    line-height: 0.19rem;
    font-weight: 900;
    color:#ff5996;
  }
  .diorli_div p:nth-child(2){
    color:#939393;
    text-decoration: line-through;
  }
</style>
