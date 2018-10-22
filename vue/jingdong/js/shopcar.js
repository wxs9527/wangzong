//const ISDFKLSDDFK="http://localhost:8000/api/carts"

/*

/*
* zhongjian
* */
new Vue({
    el:'#ppi',
    data:{
        shoppingcart:'购物车',
        compile:'编辑',
        store:'雪周飞服饰专营店',
        num:'1',
        price:'158.00',
        totalquantity:'0',
        productLists:[],
        homepage:'首页',
        classification:'分类',
        discover:'发现',
        shoppingcarts:'购物车',
        my:'我的',
    },
    //  created(){
    //   this._initData()
    // },
    methods: {
        jian() {
            if (this.num > 1) {
                this.num--
            }
        },
        jia() {
            this.num++
        },
         // _initData(){
         //            fetch(ISDFKLSDDFK).then(res=>{
         //                res.json().then(data=>{
         //                    this.productLists = data
         //                    //this._counteCarts(data)
         //                })
         //            })
         //          },
        },
})


