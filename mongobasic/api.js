const express = require("express")
const dbConnect = require("./dbConnect")
const mongodb = require("mongodb")
const app = express()
app.use(express.json())

app.get("/",async (req,res)=>{
    let data = await dbConnect()
    let result = await data.find().toArray()
    console.log(req.params)
    res.send(result)
})

app.post("/",async (req,res)=>{
    let data = await dbConnect()
    let result = await data.insertOne(req.body)
    // console.log(result)
    // res.send(result)
    if(result.acknowledged){res.send("inserted successfully")}
})

app.put("/:name",async (req,res)=>{
    let data = await dbConnect()
    let result = await data.updateOne(
        // {name:req.body.name},
        {name:req.params.name},
        {$set:req.body}
    )
    res.send(result)
    // if(result.modifiedCount>0){res.send("updated successfully")}
})

app.delete("/:id",async (req,res)=>{
    let data = await dbConnect()
    let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result)
})

app.listen(3000,()=>console.log("server started at port 3000"))