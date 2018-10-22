<template>
    <div class="">
      <div class="header">
        <div class="header1">
          <span><img src="../../../static/imgs/123.jpg" alt=""></span>
          <span><img style="width: 1rem;height: 0.5rem;" src="../../../static/imgs/2.jpg" alt=""></span>
          <span><img src="../../../static/imgs/4.jpg" alt=""></span>
        </div>
        <div class="header2">
          <div class="header3">
            <span><img src="../../../static/imgs/marker.png" alt="">南窑头(西区) <div></div></span>
            <span><img style="width: 0.25rem;height: 0.25rem;"  src="../../../static/imgs/index_icon_sea.png" alt=""></span>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "gohomeHeader"
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height:0.55rem;background: white;
    position: relative;
  }
  .header1{
    width: 90%;
    height: 0.55rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .header1 img{
    width: 0.2rem;
    height: 0.5rem;
  }
  .header1 span{
    display: flex;
  }
  .header2{
    width: 100%;
    height: 0.57rem;
    position: absolute;
    top: 0.55rem;

  }
  .header3{
    width: 90%;
    height: 0.57rem;
    margin: 0 auto;
    color: white;
    font-size: 0.18rem;
    display: flex;
    overflow: hidden;
    line-height: 0.57rem;
    justify-content: space-between;
  }
  .header3 img{
    width: 0.1rem;
    height: 0.2rem;
    display: inline-block;
    vertical-align: middle;
  }
</style>
