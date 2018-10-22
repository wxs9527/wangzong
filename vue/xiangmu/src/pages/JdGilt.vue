<template>

     <div class="jdBox" >
       <jd-gilt-fixed></jd-gilt-fixed>
       <jd-gilt-section :sectionbuymsg="JdGiltSectionBuy" :sectiondiormsg="JdGiltSectionDior" :sectionmodelmsg="JdGiltSectionModel" :sectiondiormsg1="JdGiltSectionDior1" :sectiondiormsg2="JdGiltSectionDior2" :sectiondiormsg3="JdGiltSectionDior3" :sectionmodelmsg2 = "JdGiltSectionModel2" :sectiondiormsg4="JdGiltSectionDior4"></jd-gilt-section>
       <jd-gilt-footer></jd-gilt-footer>
     </div>
</template>

<script>

    import JdGiltSection from "../components/Gilt/JdGiltSection";
    import JdGiltFixed from "../components/Gilt/JdGiltFixed";
    import JdGiltFooter from "../components/Gilt/JdGiltFooter";
    export default {
      name: "JdGilt",
      components: {
        JdGiltFooter,
        JdGiltFixed,
        JdGiltSection
      },
      data() {
        return {
          JdGiltSectionBuy:[
            {
              "imgs":"",
              "arr":[]
            }
          ],
          JdGiltSectionDior:{
            "imgbac":"",
            "arr":[]
          },
          JdGiltSectionDior1:{},
          JdGiltSectionModel:{},
          JdGiltSectionDior2:{},
          JdGiltSectionDior3:{},
          JdGiltSectionModel2:{},
          JdGiltSectionDior4:{}
        }
      },
        created(){
          this.init()

        },
        methods:{
          init(){
          fetch("http://localhost:8080/static/mock/JdGilt.json").then((res) => {
            res.json().then((data) => {

              this.JdGiltSectionBuy = data.JdGiltSectionBuy;
              this.JdGiltSectionDior = data.JdGiltSectionDior;
              this.JdGiltSectionDior1 = data.JdGiltSectionDior1;
              this.JdGiltSectionModel = data.JdGiltSectionModel;
              this.JdGiltSectionDior2 = data.JdGiltSectionDior2;
              this.JdGiltSectionDior3 = data.JdGiltSectionDior3;
              this.JdGiltSectionModel2 = data.JdGiltSectionModel2;
              this.JdGiltSectionDior4 = data.JdGiltSectionDior4;

            })
          })
        }

      },

    }
</script>

<style scoped>
    .jdBox{
      display: flex;
      flex-direction: column;
      height: 100%;
    }
</style>
