const  express=require("express")
const  path=require("path")
const  app=express()
const carsInfo=require("./mock/carts.json")
console.log(carsInfo);
//设置静态目录
app.use(express.static(path.resolve(__dirname)))
//mock carts
app.get("/api/carts",(req,res)=>{
    res.json(carsInfo)
})
//设置首页
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"shopcar.html"))

})
//监听8000
app.listen(8000,()=>{
    console.log("server is ready on port 8000")
})