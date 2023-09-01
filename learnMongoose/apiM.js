const mongodb = require("mongodb")
require("./config")
const mdl = require("./model")
const express = require("express")
const app = express()
app.use(express.json())

app.post("/products",async (req,res) => {
    let data = new mdl(req.body)
    const result = await data.save()
    res.send(result)
    console.log(result)
})

app.get("/products",async (req,res) => {
    // let data = new mdl(req.body)
    // const result = await data.save()
    let data = await mdl.find()
    res.send(data)
    console.log(data)
})

app.put("/products/:id",async (req,res) => {
    let data = await mdl.updateOne(
        {_id:new mongodb.ObjectId(req.params.id)},
        {
            $set:req.body
        }
        )
    res.send(data)
    console.log(data)
})

app.delete("/products/:id",async (req,res) => {
    let data = await mdl.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(data)
    console.log(data)
})

app.listen(3100,()=>{
    console.log("server started at port 3100")
})