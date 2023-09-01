const mongodb = require("mongodb")
require("../learnMongoose/config")
const mdl = require("../learnMongoose/model")
const express = require("express")
const app = express()
app.use(express.json())

app.get("/search/:key",async (req,res) => {
    let data = await mdl.find({
        "$or":[
            {
                name:req.params.key
            }
        ]
    })
    res.send(data)
})

app.listen(3000,()=>{
    console.log("server started at port 3000")
})