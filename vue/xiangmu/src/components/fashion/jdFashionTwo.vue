<template>
    <div>

      <div class="liuxing">
        <img class="liuxing_img" src="../../../static/img/jd-fashion-10.png" alt="">
        <ul class="ulBoxOne">
          <li><img src="../../../static/img/jd-fashion-11.jpg" alt=""></li>
          <li><img src="../../../static/img/jd-fashion-12.jpg" alt=""></li>
          <li><img src="../../../static/img/jd-fashion-13.jpg" alt=""></li>
          <li><img src="../../../static/img/jd-fashion-14.jpg" alt=""></li>
          <li><img src="../../../static/img/jd-fashion-15.jpg" alt=""></li>
        </ul>
        <ul class="ulBoxTwo">
          <li><img src="../../../static/img/jd-fashion-11.jpg" alt=""></li>
          <li><img src="../../../static/img/jd-fashion-12.jpg" alt=""></li>
          <li><img src="../../../static/img/jd-fashion-13.jpg" alt=""></li>
          <li><img src="../../../static/img/jd-fashion-14.jpg" alt=""></li>
          <li><img src="../../../static/img/jd-fashion-15.jpg" alt=""></li>
        </ul>
      </div>

      <div class="brandsBox">
        <img class="brandsBox_img" src="../../../static/img/jd-fashion-18.png" alt="">
        <div class="picBoard">
          <div class="picBoard_img_box">
            <img class="picBoard_img_box_one" src="../../../static/img/jd-fashion-19.png" alt="">
            <img class="picBoard_img_box_two" src="../../../static/img/jd-fashion-23.jpg" alt="">
            <img class="picBoard_img_box_three" src="../../../static/img/jd-fashion-24.jpg" alt="">
          </div>
          <div class="picBoard_img_box">
            <img class="picBoard_img_box_one" src="../../../static/img/jd-fashion-20.png" alt="">
            <img class="picBoard_img_box_two" src="../../../static/img/jd-fashion-27.jpg" alt="">
            <img class="picBoard_img_box_three" src="../../../static/img/jd-fashion-28.jpg" alt="">
          </div>
          <div class="picBoard_img_box">
            <img class="picBoard_img_box_one" src="../../../static/img/jd-fashion-21.jpg" alt="">
            <img class="picBoard_img_box_two" src="../../../static/img/jd-fashion-29.jpg" alt="">
            <img class="picBoard_img_box_three" src="../../../static/img/jd-fashion-30.jpg" alt="">
          </div>
          <div class="picBoard_img_box">
            <img class="picBoard_img_box_one" src="../../../static/img/jd-fashion-22.png" alt="">
            <img class="picBoard_img_box_two" src="../../../static/img/jd-fashion-25.jpg" alt="">
            <img class="picBoard_img_box_three" src="../../../static/img/jd-fashion-26.jpg" alt="">
          </div>

          <div class="picBoardTwo">
            <div class="picBoardTwo_div">
              <img src="../../../static/img/jd-fashion-31.jpg" alt="">
            </div>
            <div class="picBoardTwo_div">
              <img src="../../../static/img/jd-fashion-34.jpg" alt="">
            </div>
            <div class="picBoardTwo_div">
              <img src="../../../static/img/jd-fashion-35.jpg" alt="">
            </div>
            <div class="picBoardTwo_div">
              <img src="../../../static/img/jd-fashion-32.jpg" alt="">
            </div>
            <div class="picBoardTwo_div">
              <img src="../../../static/img/jd-fashion-33.jpg" alt="">
            </div>
            <div class="picBoardTwo_div">
              <img src="../../../static/img/jd-fashion-34.jpg" alt="">
            </div>
            <div class="picBoardTwo_div">
              <img src="../../../static/img/jd-fashion-31.jpg" alt="">
            </div>
            <div class="picBoardTwo_div">
              <img src="../../../static/img/jd-fashion-35.jpg" alt="">
            </div>
          </div>
        </div>

      </div>

      <div class="starBox">
        <img class="starBox_img" src="../../../static/img/jd-fashion-36.png" alt="">
        <ul>
          <li><img src="../../../static/img/jd-fashion-37.gif" alt=""></li>
          <li><img src="../../../static/img/jd-fashion-38.gif" alt=""></li>
          <li><img src="../../../static/img/jd-fashion-39.gif" alt=""></li>
          <li><img src="../../../static/img/jd-fashion-40.gif" alt=""></li>
        </ul>
      </div>

      <div class="styleBox">
        <img class="starBox_img" src="../../../static/img/jd-fashion-41.png" alt="">
        <img class="starBox_img" src="../../../static/img/jd-fashion-42.jpg" alt="">
        <img class="starBox_img" src="../../../static/img/jd-fashion-43.png" alt="">
      </div>


    </div>
</template>

<script>
    export default {
        name: "jdFashionTwo"
    }
</script>

<style scoped>

  .liuxing{
    width: 100%;
    background-color: #f6f6f6;
    padding-top:0.18rem;
    box-sizing: border-box;
  }
  .liuxing .liuxing_img{
    width: 100%;
  }
  .liuxing .ulBoxOne{
    display: -webkit-flex;
    overflow: hidden;
  }
  .liuxing .ulBoxOne img,
  .liuxing .ulBoxTwo img{
    width: 0.85rem;
    height: 0.85rem;
  }
  .liuxing .ulBoxTwo{
    background-color: #fff;
    display: -webkit-flex;
    overflow: hidden;
    padding: 0.05rem 0;
    box-sizing: border-box;
  }

  /*brandsBox*/

  .brandsBox{
    width: 100%;
    background-color: #f6f6f6;
    padding-top:0.18rem;
    box-sizing: border-box;
  }
  .brandsBox .brandsBox_img{
    width: 100%;
  }
  .brandsBox .picBoard{
    width: 100%;
    height: 3.18rem;
    background:url("../../../static/img/jd-fashion-17.png") no-repeat;
    background-size: 100% 100%;
  }
  .picBoard_img_box{
    width:1.72rem;
    height: 1.6rem;
    float: left;
    margin-right: 0.1rem;
    padding: 0.08rem 0.1rem;
    box-sizing: border-box;
  }
  .picBoard_img_box_one{
    width: 1.73rem;
    height: 0.83rem;
  }
  .picBoard_img_box_two{
    width: 0.5rem;
    height: 0.5rem;
    float: left;
    margin-top: 0.05rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
  .picBoard_img_box_three{
    width: 0.5rem;
    height: 0.5rem;
    float: left;
    margin-top: 0.05rem;
  }
  .picBoardTwo{
    width: 100%;
    height: 1.2rem;
    background: url("../../../static/img/jd-fashion-16.png") no-repeat;
    background-size: 100% 100%;
    clear: both;
  }
  .picBoardTwo_div{
    width: 0.86rem;
    height: 0.59rem;
    padding: 0.08rem 0.2rem;
    box-sizing: border-box;
    float: left;
  }
  .picBoardTwo_div img{
    width: 0.8rem;
    height: 0.45rem;
  }
  .starBox{
    width: 100%;
    background-color: #f6f6f6;
    padding-top:0.28rem;
    box-sizing: border-box;
    clear: both;

  }
  .starBox_img{
    width: 100%;
  }
  .starBox ul{
    width: 100%;
    display: -webkit-flex;
    margin-top: 0.2rem;
  }
  .starBox ul li{
    width: 20%;
    flex: 1;
    margin-right: 0.02rem;
  }
  .starBox ul li img{
    width: 100%;
  }
  .styleBox{
    background-color: #f6f6f6;
    padding-top: 0.3rem;
    box-sizing: border-box;
  }
</style>
