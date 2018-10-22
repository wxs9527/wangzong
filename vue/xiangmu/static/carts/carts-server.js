const express = require("express")
const path = require("path")
const app = express()
const cartsInfo = require("./mock/carts.json")
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//设置静态目录
app.use(express.static(path.resolve(__dirname)))

//mock carts
app.get("/api/carts",(req,res)=>{
    res.json(cartsInfo)
})

app.post("/add",(req,res)=>{
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")

    console.log(req.body)
    res.json({ok:true})
})

//设置首页
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"index.html"))
})

//监听3000
app.listen(3000,()=>{
    console.log("server is ready on port 3000")
})