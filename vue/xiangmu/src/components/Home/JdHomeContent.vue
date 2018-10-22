<template>
  <!-- 内容-->
  <div class="content">
    <jd-home-box-content-word-box></jd-home-box-content-word-box>
    <!--timebuy 秒杀-->
    <div class="timebuy">
      <div class="timebuy_goods radiustopleft">
        <div >
          <img :src="timeBuy1.times.imgSrc" >
          <p class="timestart">18:00场</p>
          <p class="timeend">01：54：51</p>
        </div>
        <ul class="uls">
          <li class="goodsli" v-for="i in timeBuy1.arr" >
            <img :src="i.imgSrc" alt="">
            <h3>￥<span>6149</span></h3>
            <p>6799</p>
          </li>
          <li class="goodsli">
            <img src="../../../static/img/miaosha1.jpg" alt="">
            <h3>￥<span>8999</span></h3>
            <p>11999</p>
          </li>
          <li class="goodsli">
            <img src="../../../static/img/miaosha2.jpg" alt="">
            <h3>￥<span>318</span></h3>
            <p>365</p>
          </li>
        </ul>
      </div>
      <div class="findgoods radiustopright">
        <img class="findgoodsimg" :src="timeBuy2.txtImg" alt="">
        <p>{{timeBuy2.txt}}</p>
        <div>
          <img :src="timeBuy2.imgSrc1" alt="">
          <img :src="timeBuy2.imgSrc2" alt="">
        </div>
      </div>
      <ul class="trademark">
        <li :class="a.class" v-for="a in timeBuy3">
          <img :src="a.imgSrc1"alt="">
          <p>{{a.text}}</p>
          <img class="trademarkliimg" :src="a.imgSrc2" alt="">
        </li>

      </ul>
      <div class="findgoods radiusli">
        <img class="findgoodsimg" :src="timeBuy4.txtImg" alt="">
        <p>{{timeBuy4.txt}}</p>
        <div>
          <img :src="timeBuy4.imgSrc1" alt="">
          <img :src="timeBuy4.imgSrc2" alt="">
        </div>
      </div>

    </div>
    <!--daily_stroll 每日逛-->
    <div class="daily_stroll">
      <img class="daily_stroll_img" src="../../../static/img/daily_stroll.jpg" alt="">
      <div class="daily_stroll_goods">
        <div :class="b.class" v-for="b in dailystroll1">
          <img class="findgoodsimg" :src="b.txtImg" alt="">
          <p>{{b.txt}}</p>
          <div>
            <img :src="b.imgSrc1" alt="">
            <img :src="b.imgSrc2" alt="">
          </div>
        </div>

        <div class="findgoods radiusfind">
          <h3>{{dailystroll2.title}}</h3>
          <p>{{dailystroll2.txt}}</p>
          <div>
            <img :src="dailystroll2.imgSrc1" alt="">
            <img :src="dailystroll2.imgSrc2" alt="">
          </div>
        </div>
        <ul class="trademark">
          <li :class="c.class" v-for="c in dailystroll3">
            <h3>{{c.title}}</h3>
            <p>{{c.text}}</p>
            <img class="trademarkliimg" :src="c.imgSrc" alt="">
          </li>

        </ul>
      </div>
    </div>
    <!--  潮玩先锋-->
    <div class="play_first">
      <img class="daily_stroll_img" src="../../../static/img/chaowanxianfeng.jpg" alt="">
      <div class="radiusimg">
        <img :class="d.class" :src="d.imgSrc"  v-for="d in play1" alt="">
      </div>
      <div class="play_first_goods">
        <div class="findgoods" v-for="f in play2">
          <img class="findgoodsimg" :src="f.txtImg" alt="">
          <p>{{f.txt}}</p>
          <div>
            <img :src="f.imgSrc1" alt="">
            <img :src="f.imgSrc2" alt="">
          </div>
        </div>

        <div class="findgoods radiusfind">
          <h3>{{play3.title}}</h3>
          <p>{{play3.txt}}</p>
          <div>
            <img :src="play3.imgSrc1" alt="">
            <img :src="play3.imgSrc2" alt="">
          </div>
        </div>
        <ul class="trademark">
          <li :class="g.class" v-for="g in play4">
            <h3>{{g.title}}</h3>
            <p>{{g.text}}</p>
            <img class="trademarkliimg" :src="g.imgSrc" alt="">
          </li>

        </ul>
      </div>
    </div>
    <!--fashion 摩登时尚-->
    <div class="fashion">
      <img class="daily_stroll_img" src="../../../static/img/fashion.jpg" alt="">
      <div class="radiusimg">
        <img :class="h.class" :src="h.imgSrc" v-for="h in fashion1">
      </div>
      <div class="fashion_goods">
        <div class="findgoods" v-for="j in fashion2">
          <img class="findgoodsimg" :src="j.txtImg" alt="">
          <p>{{j.txt}}</p>
          <div>
            <img :src="j.imgSrc1" alt="">
            <img :src="j.imgSrc2" alt="">
          </div>
        </div>

        <ul class="trademark ">
          <li :class="k.class" v-for="k in fashion3">
            <h3>{{k.title}}</h3>
            <p>{{k.text}}</p>
            <img class="trademarkliimg" :src="k.imgSrc" alt="">
          </li>
        </ul>
        <ul class="trademark">
          <li :class="n.class" v-for="n in fashion4">
            <h3>{{n.title}}</h3>
            <p>{{n.text}}</p>
            <img class="trademarkliimg" :src="n.imgSrc" alt="">
          </li>
        </ul>
      </div>
    </div>
    <!--life 品质生活-->
    <div class="life">
      <img class="daily_stroll_img" src="../../../static/img/life.jpg" alt="">
      <div class="radiusimg">
        <img :class="p.class" :src="p.imgSrc" v-for="p in life1" alt="">

      </div>
      <div class="life_goods">
        <div class="findgoods" v-for="q in life2">
          <img class="findgoodsimg" :src="q.txtImg" alt="">
          <p>{{q.txt}}</p>
          <div>
            <img :src="q.imgSrc1" alt="">
            <img :src="q.imgSrc2" alt="">
          </div>
        </div>

        <ul class="trademark">
          <li :class="r.class" v-for="r in life3">
            <h3>{{r.title}}</h3>
            <p>{{r.text}}</p>
            <img class="trademarkliimg" :src="r.imgSrc" alt="">
          </li>
        </ul>
        <ul class="trademark ">
          <li :class="s.class" v-for="s in life4">
            <h3>{{s.title}}</h3>
            <p>{{s.text}}</p>
            <img class="trademarkliimg" :src="s.imgSrc" alt="">
          </li>
        </ul>
      </div>
    </div>
    <!--eat 吃喝玩乐-->
    <div class="eat">
      <img class="daily_stroll_img" src="../../../static/img/eat.jpg" alt="">
      <div class="radiusimg">
        <img class="radiusimg_left" src="../../../static/img/ea1.jpg" alt="">
        <img class="radiusimg_right" src="../../../static/img/ea2.jpg" alt="">
      </div>
      <div class="fashion_goods">
        <div class="findgoods">
          <img class="findgoodsimg" src="../../../static/img/ea3.jpg" alt="">
          <p>小零食   让生活有滋有味</p>
          <div>
            <img src="../../../static/img/eatgoods1.jpg" alt="">
            <img src="../../../static/img/eatgoods2.jpg" alt="">
          </div>
        </div>
        <div class="findgoods">
          <img class="findgoodsimg" src="../../../static/img/fa4.jpg" alt="">
          <p>深夜食堂   舌尖上的美味</p>
          <div>
            <img src="../../../static/img/eatgoods3.jpg" alt="">
            <img src="../../../static/img/eatgoods4.jpg" alt="">
          </div>
        </div>
        <div class="findgoods radiusfind">
          <h3>趣旅行</h3>
          <p>《我的间谍前男友》</p>
          <div>
            <img src="../../../static/img/eatgoods5.jpg" alt="">
            <img src="../../../static/img/eatgoods6.jpg" alt="">
          </div>
        </div>
        <ul class="trademark">
          <li class="trademarkli">
            <h3>去旅行</h3>
            <p>线路买1送1</p>
            <img class="trademarkliimg" src="../../../static/img/eatgoods7.jpg" alt="">
          </li>
          <li class="trademarkli radiusli">
            <h3>兴趣部落</h3>
            <p>这么好玩？</p>
            <img class="trademarkliimg" src="../../../static/img/eatgoods8.jpg" alt="">
          </li>
        </ul>
      </div>
    </div>
    <!--affordable_good  实惠好货-->
    <div class="affordable_good">
      <div class="flexbox">
        <img class="daily_stroll_img" src="../../../static/img/af.jpg" alt="">
        <img class="more_img" src="../../../static/img/more.jpg" alt="">
      </div>
      <div class="radiusimg">
        <img class="radiusimg_left" src="../../../static/img/afda1.jpg" alt="">
        <img class="radiusimg_right" src="../../../static/img/afda2.jpg" alt="">
      </div>
      <div class="affordable_goods">

        <ul class="trademark ">
          <li class="trademarkli ">
            <h3>唯品会</h3>
            <p>秋季上新</p>
            <img class="trademarkliimg" src="../../../static/img/afdagoods1.jpg" alt="">
          </li>
          <li class="trademarkli ">
            <h3>拍拍二手</h3>
            <p>低价品质优</p>
            <img class="trademarkliimg" src="../../../static/img/afdagoods2.jpg" alt="">
          </li>
        </ul>
        <ul class="trademark">
          <li class="trademarkli">
            <h3>京东拍卖</h3>
            <p>高端表抢拍</p>
            <img class="trademarkliimg" src="../../../static/img/afdagoods3.jpg" alt="">
          </li>
          <li class="trademarkli ">
            <h3>京东拼购</h3>
            <p>好玩你就来</p>
            <img class="trademarkliimg" src="../../../static/img/afdagoods4.jpg" alt="">
          </li>
        </ul>
        <ul class="trademark ">
          <li class="trademarkli ">
            <h3>电脑办公</h3>
            <p>新品好价购</p>
            <img class="trademarkliimg" src="../../../static/img/afdagoods5.jpg" alt="">
          </li>
          <li class="trademarkli ">
            <h3>手机馆</h3>
            <p>享白条免息</p>
            <img class="trademarkliimg" src="../../../static/img/afdagoods6.jpg" alt="">
          </li>
        </ul>
        <ul class="trademark">
          <li class="trademarkli">
            <h3>数码馆</h3>
            <p>数码大本营</p>
            <img class="trademarkliimg" src="../../../static/img/afdagoods7.jpg" alt="">
          </li>
          <li class="trademarkli ">
            <h3>个护馆</h3>
            <p>9.9元拼购</p>
            <img class="trademarkliimg" src="../../../static/img/afdagoods8.jpg" alt="">
          </li>
        </ul>
        <div class="imgbox">
          <div class="wordslider">
              <div class="swiper-container" id="swiperc">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide">
                          <div class="sliderimgbox">
                              <img src="../../../static/img/wordslider0.jpg" alt="">
                              <img src="../../../static/img/wordslider1.jpg" alt="">
                              <img src="../../../static/img/wordslider2.jpg" alt="">
                              <img src="../../../static/img/wordslider3.jpg" alt="">
                          </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="sliderimgbox">
                        <img src="../../../static/img/wordslider4.jpg" alt="">
                        <img src="../../../static/img/wordslider5.jpg" alt="">
                        <img src="../../../static/img/wordslider6.jpg" alt="">
                        <img src="../../../static/img/wordslider0.jpg" alt="">
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="sliderimgbox">
                        <img src="../../../static/img/wordslider4.jpg" alt="">
                        <img src="../../../static/img/wordslider5.jpg" alt="">
                        <img src="../../../static/img/wordslider6.jpg" alt="">
                        <img src="../../../static/img/wordslider0.jpg" alt="">
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="sliderimgbox">
                        <img src="../../../static/img/wordslider0.jpg" alt="">
                        <img src="../../../static/img/wordslider1.jpg" alt="">
                        <img src="../../../static/img/wordslider2.jpg" alt="">
                        <img src="../../../static/img/wordslider3.jpg" alt="">
                      </div>
                    </div>
                </div>

          </div>

        </div>

          <img class="smalljt" src="../../../static/img/xjj.jpg" alt="">
      </div>
    </div>
    </div>
    <!--recommend   特色推荐-->
    <div class="recommend ">
      <div class="flexbox">
        <img class="daily_stroll_img" src="../../../static/img/recommend.jpg" alt="">
        <img class="more_img" src="../../../static/img/remore.jpg" alt="">
      </div>

      <div class="affordable_goods">

        <ul class="trademark ">
          <li class="trademarkli radiustopleft">
            <h3>京东医院</h3>
            <p>难言之隐</p>
            <img class="trademarkliimg" src="../../../static/img/regoods1.jpg" alt="">
          </li>
          <li class="trademarkli ">
            <h3>陪伴宝宝</h3>
            <p>满399减100</p>
            <img class="trademarkliimg" src="../../../static/img/regoods2.jpg" alt="">
          </li>
        </ul>
        <ul class="trademark">
          <li class="trademarkli">
            <h3>京东众筹</h3>
            <p>免费试用</p>
            <img class="trademarkliimg" src="../../../static/img/regoods3.jpg" alt="">
          </li>
          <li class="trademarkli radiusimg_right">
            <h3>京东房产</h3>
            <p>特惠房源</p>
            <img class="trademarkliimg" src="../../../static/img/regoods4.jpg" alt="">
          </li>
        </ul>
        <ul class="trademark ">
          <li class="trademarkli  radiusfind">
            <h3>老字号</h3>
            <p>经典传承</p>
            <img class="trademarkliimg" src="../../../static/img/regoods5.jpg" alt="">
          </li>
          <li class="trademarkli ">
            <h3>款式说</h3>
            <p>pick时髦款</p>
            <img class="trademarkliimg" src="../../../static/img/regoods6.jpg" alt="">
          </li>
        </ul>
        <ul class="trademark">
          <li class="trademarkli">
            <h3>设计师</h3>
            <p>天生不一样</p>
            <img class="trademarkliimg" src="../../../static/img/regoods7.jpg" alt="">
          </li>
          <li class="trademarkli radiusli">
            <h3>特产扶贫</h3>
            <p>原产好物</p>
            <img class="trademarkliimg" src="../../../static/img/regoods8.jpg" alt="">
          </li>
        </ul>

      </div>
    </div>
    <!--farmer 东家小院-->
    <div class="farmer">
      <div class="flexbox">
        <img class="daily_stroll_img" src="../../../static/img/farmer.jpg" alt="">
        <img class="more_img" src="../../../static/img/farmermore.jpg" alt="">
      </div>
      <div class="life_goods">
        <div class="findgoods radiustopleft">
          <img class="findgoodsimg" src="../../../static/img/far1.jpg" alt="">
          <p>为他精心装扮自己</p>
          <div>
            <img src="../../../static/img/farmergoods1.jpg" alt="">
            <img src="../../../static/img/farmergoods2.jpg" alt="">
          </div>
        </div>
        <div class="findgoods radiustopright">
          <img class="findgoodsimg" src="../../../static/img/far2.jpg" alt="">
          <p>全新生活从这里开启</p>
          <div>
            <img src="../../../static/img/farmergoods3.jpg" alt="">
            <img src="../../../static/img/farmergoods4.jpg" alt="">
          </div>
        </div>
        <ul class="trademark ">
          <li class="trademarkli radiusfind">
            <h3>初秋滋润</h3>
            <p>秋季润美肤</p>
            <img class="trademarkliimg" src="../../../static/img/farmergoods5.jpg" alt="">
          </li>
          <li class="trademarkli ">
            <h3>健身达人</h3>
            <p>燃脂增肌</p>
            <img class="trademarkliimg" src="../../../static/img/farmergoods6.jpg" alt="">
          </li>
        </ul>
        <ul class="trademark">
          <li class="trademarkli">
            <h3>女神心经</h3>
            <p>女神进化论</p>
            <img class="trademarkliimg" src="../../../static/img/farmergoods7.jpg" alt="">
          </li>
          <li class="trademarkli radiusli">
            <h3>约会洗护</h3>
            <p>清爽美丽</p>
            <img class="trademarkliimg" src="../../../static/img/farmergoods8.jpg" alt="">
          </li>
        </ul>
      </div>
    </div>
    <!--tea  茶-->
    <div class="tea">
      <img src="../../../static/img/tea1.jpg" alt="">
    </div>
    <!--findshop 发现好店-->
    <div class="findshop">
      <div class="flexbox">
        <img class="daily_stroll_img" src="../../../static/img/findshops.jpg" alt="">
        <img class="more_img" src="../../../static/img/shopmore.jpg" alt="">
      </div>
      <div class="shopgoods">
        <div class="shop_content radiustopleft radiusfind">
          <h3>身体护理</h3>
          <p>20家好店精心推荐</p>
          <div class="shopimg">
            <img class="shopimg_left" src="../../../static/img/shopgoods1.jpg" alt="">
            <div class="shopimg_right">
              <img src="../../../static/img/smallshopgoods1.jpg" alt="">
              <img src="../../../static/img/smallshopgoods2.jpg" alt="">
            </div>
          </div>
          <div class="shopword">
            <img src="../../../static/img/shopicon1.jpg" alt="">
            <p>威露士京东自营旗舰店</p>
          </div>
        </div>
        <div class="shop_content radiustopright radiusli">
          <h3>电脑整机</h3>
          <p>20家好店精心推荐</p>
          <div class="shopimg">
            <img class="shopimg_left" src="../../../static/img/shopgoods2.jpg" alt="">
            <div class="shopimg_right">
              <img src="../../../static/img/smallshopgoods3.jpg" alt="">
              <img src="../../../static/img/smallshopgoods4.jpg" alt="">
            </div>
          </div>
          <div class="shopword">
            <img src="../../../static/img/shopicon2.jpg" alt="">
            <p>威露士京东自营旗舰店</p>
          </div>
        </div>
      </div>

    </div>
    <!--mv 京东视频-->
    <div class="mv">
      <div class="flexbox">
        <img class="daily_stroll_img" src="../../../static/img/mv.jpg" alt="">
        <img class="more_img" src="../../../static/img/mvmore.jpg" alt="">
      </div>
      <div class="mv_top">
        <div class="mvtop_left radiustopleft" >
          <img class="radiustopleft" src="../../../static/img/mv1.jpg" alt="">
        </div>
        <img class="mvtop_right radiustopright" src="../../../static/img/mv2.jpg" alt="">
      </div>
      <ul class="mv_content">
        <li class="mvcontent_li radiusfind">
          <img src="../../../static/img/smallmvimg1.jpg" alt="">
          <p>升降摄像头</p>
        </li>
        <li class="mvcontent_li ">
          <img src="../../../static/img/smallmvimg2.jpg" alt="">
          <p>米家剃须刀</p>
        </li>
        <li class="mvcontent_li radiusli">
          <img src="../../../static/img/smallmvimg3.jpg" alt="">
          <p>美白淡斑霜</p>
        </li>
      </ul>
    </div>
    <!--sinatv 京东直播-->
    <div class="sinatv">
      <div class="flexbox">
        <img class="daily_stroll_img" src="../../../static/img/sinatv.jpg" alt="">
        <img class="more_img" src="../../../static/img/sinatvmore.jpg" alt="">
      </div>
      <div class="sinatv_top">
        <img class="sintop_left radiustopleft radiusfind" src="../../../static/img/stinaimg1.jpg">
        <div class="sintop_right">
          <img class="radiustopright" src="../../../static/img/smallsinatv1.jpg" alt="">
          <img class="radiusli" src="../../../static/img/smallsinatv2.jpg" alt="">
        </div>
      </div>
      <div class="sinatv_bottom radiustopleft radiustopright radiusfind radiusli">
        <img src="../../../static/img/sb1.jpg" alt="">
        <div class="textslider">
          <h3>女26岁很少用香水，我想送香水给她可不知</h3>
          <div class="textslider_div">
            <img src="../../../static/img/sb2.jpg" alt="">
            <p>热美妆菌</p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <p>美妆达人</p>
          </div>
          <p class="textslider_p">首先赞叹一句主题好有心，一瓶合适的香水的确是,<br/>很能彰显一位女孩子的品味 、提升整体质感的大杀</p>
        </div>
      </div>
    </div>
    <!--youlike 为你推荐-->
    <div class="youlike">
      <img class="daily_stroll_img" src="../../../static/img/youlike.jpg" alt="">
      <ul class="youlike_goods">
        <li :class="x.class" v-for="x in youlike">
          <img class="goodsimg" :src="x.goods" alt="">
          <img class="deleteimg" src="../../../static/img/dele.png" alt="">
          <div class="goodstext">
            <p ><img :src="x.icon" alt="">{{x.text}}</p>
          </div>
          <div class="goodsprice">
            <h3 >￥<span>{{x.price}}</span></h3>
            <p >看相似</p>
          </div>
          <p :class="x.pclass">{{x.ptext}}</p>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
    import JdHomeBoxContentWordBox from "./JdHomeBoxContentWordBox";
    import Swiper   from "swiper";
    import "../../../node_modules/swiper/dist/css/swiper.css";
    export default {
        name: "JdHomeContent",
      components: {JdHomeBoxContentWordBox},
      props:["timeBuy1","timeBuy2","timeBuy3","timeBuy4","dailystroll1","dailystroll2","dailystroll3","play1","play2","play3","play4","fashion1","fashion2","fashion3","fashion4","life1","life2","life3","life4","youlike"],

      mounted(){
        new Swiper(' #swiperc', {
          autoplay:true,
        })

      }
    }
</script>

<style scoped>
  /*content*/
  .content{
    width:100%;
    box-sizing: border-box;
    padding:0.1rem 0.075rem;
    overflow: hidden;
  }


  /*timebuy*/
  .timebuy{
    width:100%;
    background: #f5f5f5;
    box-sizing: border-box;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    overflow: hidden;
  }
  .timebuy_goods{
    width:50%;
    background: #fff;
    padding:0.075rem;
    box-sizing: border-box;
    margin-top: 0.05rem;
    border-left:2px solid #f5f5f5;
    border-right:2px solid #f5f5f5;
  }
  .radiustopleft{
    border-top-left-radius: 0.1rem;
  }
  .radiustopright{
    border-top-right-radius: 0.1rem;
  }
  .timebuy_goods div{
    display: -webkit-flex;
    align-items: center;

  }
  .timebuy_goods div img{
    width:0.675rem;
    height:0.2rem;
  }
  .timebuy_goods div p{
    font-size: 0.08rem;
    line-height:0.13rem;
    font-weight:900;
    text-align: center;

  }
  .timestart{
    width:0.39rem;
    height:0.14rem;
    color:#fff;
    background: #f9454e;
    border-top-left-radius:0.1rem;
    border-bottom-left-radius:0.1rem;
  }
  .timeend{
    width:0.65rem;
    height:0.14rem;
    color:#f9454e;
    background: #fff;
    box-sizing: border-box;
    border:1px solid  #f9454e;
    border-top-right-radius:0.1rem;
    border-bottom-right-radius:0.1rem;
  }
  .uls{
    width:100%;
    display: -webkit-flex;
  }
  .goodsli{
    text-align: center;
    margin: 0.02rem;
  }
  .goodsli img{
    width:0.5rem;
    height:0.62rem;
    margin: 0 auto;
  }
  .goodsli h3{
    font-size: 0.065rem;
    line-height:0.145rem;
    font-weight:900;
    color:#000000;
    text-align: center;
  }
  .goodsli h3 span{
    font-size: 0.09rem;
    line-height:0.145rem;
  }
  .goodsli p{
    font-size: 0.07rem;
    line-height:0.07rem;
    font-weight:900;
    color:#bebebe;
    text-align: center;
    text-decoration: line-through;
  }
  .findgoods{
    width:50%;
    padding:0.075rem;
    margin-top: 0.05rem;
    background: #fff;
    box-sizing: border-box;
    border-left:2px solid #f5f5f5;
    border-right:2px solid #f5f5f5;
  }
  .findgoods .findgoodsimg{
    width:0.675rem;
    height:0.2rem;
  }
  .findgoods p{
    font-size: 0.12rem;
    line-height:0.15rem;
    font-weight:900;
    color:#7b7b7b;
  }
  .findgoods div{
    display: -webkit-flex;
  }
  .findgoods div img{
    width:0.76rem;
    height:0.73rem;
  }
  .trademark{
    width:50%;
    box-sizing: border-box;
    display: -webkit-flex;
    margin-top: 0.05rem;
    border-left:2px solid #f5f5f5;
    border-right:2px solid #f5f5f5;
  }
  .trademarkli{
    flex:1;
    padding: 0.075rem 0.06rem;
    background: #fff;
    box-sizing: border-box;
    border-right:2px solid #f5f5f5;

  }

  .trademarkli img{
    width:0.675rem;
    height:0.2rem;
  }
  .trademarkli p{
    font-size: 0.12rem;
    line-height:0.15rem;
    font-weight:900;
    color:#7b7b7b;
  }
  .trademarkli .trademarkliimg{
    width:0.76rem;
    height:0.73rem;
  }
  /*daily_stroll*/
  .daily_stroll{
    width:100%;
    overflow: hidden;
  }
  .daily_stroll_img{
    width:100%;
    height:0.4rem;
  }
  .daily_stroll_goods{
    width:100%;
    background: #f5f5f5;
    box-sizing: border-box;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
  }
  .findgoods h3{
    font-size: 0.14rem;
    line-height:0.2rem;
    color:#1e1e1e;
  }
  .trademarkli h3{
    font-size: 0.14rem;
    line-height:0.2rem;
    color:#1e1e1e;
  }
  /*play_first*/
  .play_first_goods{
    width:100%;
    background: #f5f5f5;
    box-sizing: border-box;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    overflow: hidden;
  }
  .radiusimg{
    width:100%;
    display: -webkit-flex;
    justify-content: space-around;
    margin-bottom: 0.02rem;
    box-sizing: border-box;
    padding:0 0.075rem;

  }
  .radiusimg img{
    width:49%;
    height:1.2rem;
    border-left:2px solid #f5f5f5;
    border-right:2px solid #f5f5f5;
  }
  .radiusimg_left{
    border-top-left-radius:0.1rem;
  }
  .radiusimg_right{
    border-top-right-radius:0.1rem;
  }
  .radiusfind{
    border-bottom-left-radius:0.1rem;
  }
  .radiusli{
    border-bottom-right-radius:0.1rem;
  }
  /*fashion*/
  .fashion_goods{
    width:100%;
    background: #f5f5f5;
    box-sizing: border-box;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;

  }
  .life_goods{
    width:100%;
    background: #f5f5f5;
    box-sizing: border-box;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
  }
  /*affordable_good  实惠好货*/
  .affordable_goods{
    width:100%;
    background: #f5f5f5;
    box-sizing: border-box;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    overflow: hidden;
  }
  .flexbox{

    align-items: center;
    position: relative;
  }
  .more_img{
    width:0.67rem;
    height:0.14rem;
    position: absolute;
    right:0.1rem;
    top:0.15rem;
  }
  .imgbox{
    width:100%;
    height:0.4rem;
    margin-top: 0.05rem;
    background: #fff;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    padding:0 0.1rem;
    box-sizing: border-box;
  }
  .wordslider{
    width:85%;
    height:0.4rem;
    display: -webkit-flex;
    align-items: center;
  }
  .sliderimgbox{
    width: 100%;
    display: -webkit-flex;
    align-items: center;
  }
  .wordslider img{
    flex:1;
    height:0.4rem;
  }
  .imgbox .smalljt{
    width:15%;
    height:0.4rem;

  }

  /*tea*/
  .tea{
    width:100%;
    height:0.99rem;
    margin: 0.1rem 0;
    box-sizing: border-box;
    overflow: hidden;
  }
  .tea img{
    width:100%;
    height:0.99rem;
  }
  /*findshop*/
  .findshop{
    width:100%;
    overflow: hidden;

  }
  .shopgoods{
    width:100%;
    display: -webkit-flex;
  }
  .shop_content{
    width:50%;
    padding:0.05rem;
    box-sizing :border-box;
    background: #fff;
  }
  .shop_content:nth-child(1){
    margin-right: 0.05rem;
  }
  .shop_content h3{
    font-size: 0.14rem;
    line-height:0.2rem;
    color:#262626;
    margin-top: 0.05rem;
  }
  .shop_content p{
    font-size: 0.12rem;
    line-height:0.16rem;
    color:#4d99da;
    margin-bottom: 0.05rem;
  }
  .shopimg{
    display:-webkit-flex;
  }
  .shopimg_left{
    width: 1.1rem;
    height:1.1rem;
    margin-right: 0.05rem;
  }
  .shopimg_right img{
    width: 0.54rem;
    height:0.54rem;
  }
  .shopimg_right img:nth-child(1){
    margin-bottom: 0.05rem;
  }
  .shopword{
    display: -webkit-flex;
  }
  .shopword img   {
    width: 0.49rem;
    height:0.19rem;
  }
  .shopword p   {
    font-size: 0.11rem;
    line-height:0.15rem;
    color:#4d99da;
    margin-top: 0.04rem;
    margin-left: 0.025rem;
  }

  /*mv*/
  .mv_top{
    width: 100%;
    display: -webkit-flex;
    box-sizing: border-box;
    overflow: hidden;
  }
  .mvtop_left{
    width: 65%;
    height:1.33rem;
    margin-right: 0.05rem;
  }
  .mvtop_left img{
    width: 100%;
    height:1.33rem;
  }
  .mvtop_right{
    width: 35%;
    height:1.33rem;
  }
  .mv_content{
    display: -webkit-flex;

  }
  .mvcontent_li{
    flex:1;
    text-align: center;
    background: #fff;
    padding:0.05rem 0;
    box-sizing: border-box;
    overflow: hidden;
    margin-right: 0.05rem;
  }
  .mvcontent_li:nth-child(3){
    margin-right: 0rem;
  }
  .mvcontent_li img{
    width:100%;
    height:0.67rem;
    margin: 0 auto;
  }
  .mvcontent_li p{
    font-size: 0.11rem;
    line-height:0.25rem;
    color:#222222;
    margin-top: 0.04rem;
    margin-left: 0.025rem;
  }
  /*sinatv*/
  .sinatv_top{
    width:100%;
    display: -webkit-flex;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 0.05rem;
  }
  .sintop_left{
    width:65%;
    height:1.675rem;
    margin-right: 0.05rem;
  }
  .sintop_right{
    width:35%;
  }
  .sintop_right img{
    width:100%;
    height:0.81rem;
  }
  .sintop_right img:nth-child(1){
    margin-bottom: 0.05rem;
  }

  .sinatv_bottom{
    width:100%;
    padding:0.14rem 0.16rem;
    box-sizing: border-box;
    background: #fff;
    display: -webkit-flex;
  }
  .sinatv_bottom img{
    width:0.32rem;
    height:0.97rem;
  }
  .textslider h3{
    font-size: 0.14rem;
    line-height:0.2rem;
    color:#191919;

  }
  .textslider_div{
    display: -webkit-flex;
  }
  .textslider_div img{
    width:0.28rem;
    height:0.27rem;
  }

  .textslider_div p{
    font-size: 0.14rem;
    line-height:0.265rem;
    color:#a0a0a0;
  }
  .textslider_div span{
    font-size: 0.14rem;
    line-height:0.265rem;
    color:#a0a0a0;
  }
  .textslider .textslider_p{
    font-size: 0.12rem;
    line-height:0.175rem;
    color:#717171;
  }
  /*youlike*/
  .youlike{
    width:100%;
    overflow: hidden;
  }
  .youlike_goods{
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    box-sizing: border-box;
  }
  .youlike_goodsli{
    width:50%;
    border-left: 2px solid #f5f5f5;
    border-right: 2px solid #f5f5f5;
    border-radius: 0.1rem;
    margin-bottom: 0.05rem;
    background: #fff;
    position: relative;
    padding: 0.1rem 0;
    box-sizing: border-box;
  }
  .goodsimg{
    width:100%;
    height:1.75rem;
  }
  .deleteimg{
    width:0.15rem;
    height:0.15rem;
    position: absolute;
    right:0.05rem;
    top:0.05rem;
  }
  .goodstext{
    padding:0 0.1rem;

  }
  .goodstext img{
    display: inline-block;
    width:0.35rem;
    height:0.15rem;
  }
  .goodstext p {
    font-size: 0.12rem;
    line-height:0.18rem;
    color:#151515;
  }
  .goodsprice{
    display: -webkit-flex;
    justify-content: space-between;
    padding:0 0.1rem;
    margin-top: 0.085rem;
  }
  .goodsprice h3{
    font-size: 0.08rem;
    line-height:0.22rem;
    color:#e43552;
  }
  .goodsprice h3 span{
    font-size: 0.14rem;
    line-height:0.22rem;
    color:#e43552;
  }
  .goodsprice p{
    width:0.5rem;
    height:0.22rem;
    font-size: 0.1rem;
    line-height:0.22rem;
    color:#898989;
    border: 1px solid #f5f5f5;
    border-radius: 0.15rem;
    overflow: hidden;
    text-align: center;
  }
  .goodsactive{
    width:1.2rem;
    height:0.15rem;
    background: #f5eae4;
    font-size: 0.1rem;
    line-height:0.15rem;
    color:#ab515a;
    border: 1px solid #f5f5f5;
    border-radius: 0.15rem;
    overflow: hidden;
    text-align: center;
    margin-left: 0.075rem;
  }


</style>
<style scoped>

</style>
