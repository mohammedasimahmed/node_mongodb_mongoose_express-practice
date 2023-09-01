const express = require("express")
const fs = require("node:fs")
const app = express()
app.use(logger)
/* everything after this will use the logger function */

app.set("view engine","ejs")

app.get("/",logger,(req,res)=>{

    // console.log("hello")
    // let data = fs.createReadStream("./file.txt",{
    //     highWaterMark:2
    // })
    // let a = ""
    // data.on("data",(chunk)=>{
    //     a+=chunk;
    //     console.log(a)
    // })
    // data.on("end",(chunk)=>{
    //     res.send(a)
    // })
    
    const user = {
        name:"abcd",
        age:18,
        num:[1,2,3,4,5,6]
    }
    res.render("index",{text:"World",user})
    // above is ejs
    
})

/*
when u import a module u actually invoke it , (node actually wraps up the module in a function and when
u import it that function runs)?->not sure
*/
require("./mind-grenade.js")

const userRouter = require("./routes/userRoutes")

require("./nodeMailer/sendemail.js")

// app.use(logger)
/* only /users  will use the logger function for above case */

app.use("/users",userRouter)

function logger(req,res,next){
    console.log(req.originalUrl)
    /*res.send('vdhvmbnfkjegbreugbw')
    next()
    above gives error
    */
    // if(!req.query.age){
    //     res.send("Please provide age")
    // }
    // else{
    //     next()
    // }
    next()

}


app.listen(3000,()=>{
    console.log("server started at port 3000",)
})

