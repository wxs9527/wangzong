<template>
    <div class="ffbb">
      <jd-home-box :contentbuyone="timeBuyOne" :contentbuytwo="timeBuyTwo" :contentbuythree="timeBuyThree" :contentbuyfour="timeBuyFour" :contentdailyone="dailyStrollOne" :contentdailytwo="dailyStrollTwo" :contentdailythree="dailyStrollThree" :contentplayone="playFirstOne" :contentplaytwo="playFirstTwo" :contentplaythree="playFirstThree" :contentplayfour="playFirstFour" :contentfashionone="fashionOne" :contentfashiontwo="fashionTwo" :contentfashionthree="fashionThree" :contentfashionfour="fashionFour" :contentlifeone="lifeOne" :contentlifetwo="lifeTwo" :contentlifethree="lifeThree" :contentlifefour="lifeFour" :youlike="youlike"></jd-home-box>
    </div>
</template>

<script>

    import JdHomeBox from "../components/Home/JdHomeBox";

    export default {
        name: "JdHome",
      components: { JdHomeBox, },
      data(){
         return {
           timeBuyOne:{
               "times":{},
               "arr":[]
             },
           timeBuyTwo:{},
           timeBuyThree:[],
           timeBuyFour:{},
           dailyStrollOne:[],
           dailyStrollTwo:{},
           dailyStrollThree:[],
           playFirstOne:[],
           playFirstTwo:[],
           playFirstThree:{},
           playFirstFour:[],
           fashionOne:[],
           fashionTwo:[],
           fashionThree:[],
           fashionFour:[],
           lifeOne:[],
           lifeTwo:[],
           lifeThree:[],
           lifeFour:[],
           youlike:[]
         }
         },

      created(){
        this.init()
      },
      methods:{
          init(){
            fetch("http://localhost:8080/static/mock/JdHome.json").then((res)=>{
              res.json().then((data)=>{
                //console.log(data)
                this.timeBuyOne = data.timeBuy.one;
                this.timeBuyTwo = data.timeBuy.two;
                this.timeBuyThree = data.timeBuy.three;
                this.timeBuyFour = data.timeBuy.four;
                this.dailyStrollOne = data.daily_stroll.one;
                this.dailyStrollTwo = data.daily_stroll.two;
                this.dailyStrollThree = data.daily_stroll.three;
                this.playFirstOne = data.play_first.one;
                this.playFirstTwo = data.play_first.two;
                this.playFirstThree = data.play_first.three;
                this.playFirstFour = data.play_first.four;
                this.fashionOne = data.fashion.one;
                this.fashionTwo = data.fashion.two;
                this.fashionThree = data.fashion.three;
                this.fashionFour = data.fashion.four;
                this.lifeOne = data.life.one;
                this.lifeTwo = data.life.two;
                this.lifeThree = data.life.three;
                this.lifeFour = data.life.four;
                this.youlike = data.youlike;
              })
            })

          }
      }
    }
</script>

<style scoped>
.ffbb{
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
