/**
 * 作者: xx
 * 创建时间 : 2018-10-11
 * 说明:xxxx
 *
 */
const CARTSAJAXURL = "http://localhost:3000/api/carts"

new Vue({
    el:"#app",
    data:{
        // totalNum:0, //总件数
        totalQal:0, //
        totalMoney:0, //总价格
        productLists:[] //商品列表
    },
    created(){
       this._initData()
    },
    methods:{

        /**
         * 初始化页面数据
         * @private
         */
       _initData(){
           fetch(CARTSAJAXURL).then(res=>{
               res.json().then(data=>{
                   this.productLists = data
                   this._counteCarts(data)
               })
           })
       },
        /**
         * 根据商品列表计算总件数,和总价格
         * @param products
         * @private
         */
       _counteCarts(products){
          this.totalQal = 0
          this.totalMoney = 0
          products.forEach((item,index)=>{
              this.totalQal += item.qal
              this.totalMoney +=item.qal*item.price
          })
       },
        /**
         * 根据商品的编号来修改对应商品件数
         * @param i
         */
       addQal(i){
          this.productLists[i].qal++
       } ,
        /**
         * 根据商品的编号来修改对应商品件数
          * @param i
         */
       subQal(i){
          if(this.productLists[i].qal <=1){
              this.productLists[i].qal =1
          }else{
              this.productLists[i].qal--
          }
       }
    },
    watch:{
        productLists:{
            handler:function (n,o) {
                this._counteCarts(n)
            } ,
            deep:true
        }
    }
})