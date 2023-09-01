const mongoose = require("mongoose")
let sch = mongoose.Schema({
    name:String,
    price:Number
})
let mdl = mongoose.model("products",sch)
module.exports = mdl    