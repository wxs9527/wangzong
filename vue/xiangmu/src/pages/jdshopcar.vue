<template>
  <div class="key">
    <jd-shop-car-header></jd-shop-car-header>
    <div class="keys">
      <jd-shop-car-section :shoop="shoop"></jd-shop-car-section>
    </div>
    <jd-public-fotter></jd-public-fotter>
  </div>

</template>

<script>
    import  "../../node_modules/jquery/dist/jquery"
    import JdShopCarSection from "../components/shopcar/jdShopCarSection";
    import JdShopCarFooter from "../components/shopcar/jdShopCarFooter";
    import JdShopCarHeader from "../components/shopcar/jdShopCarHeader";
    import JdPublicFotter from "../components/public/jdPublicFotter";
    export default {
        name: "jdshopcar",
      components: {JdPublicFotter, JdShopCarHeader, JdShopCarFooter, JdShopCarSection, },
      data(){
          return {
            shoop:[]
          }
      },
      methods:{
        windows(){
           $(".keys").onscroll = function (){
            let top = $(".keys").scrollTop;
            if(top>0){
                $(".key").addClass("change");
          } else{
            $(".key").removeClass("change");
          }
        }

      }

            },
      mounted(){
        fetch("http://localhost:8080/static/carts.json").then((res)=>{
            res.json().then((data)=>{
              console.log(data);
              this.shoop=data;
            })
          })
        }

    }
</script>

<style scoped>
.key{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.keys{
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
  }

</style>
