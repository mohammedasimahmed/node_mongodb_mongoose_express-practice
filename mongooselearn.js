const mongoose = require("mongoose")
const url = 'mongodb://127.0.0.1:27017/newDb';
async function main(){
    try{
    await mongoose.connect(url)

    const sch = new mongoose.Schema({
        name:String,
        age:Number
    });
    const mdl = mongoose.model("users",sch)
    const saveInDB = async ()=>{
        let data = new mdl({name:"fdh",age:20,height:178})
        let result = await data.save()
        console.log(result)
    }
    // saveInDB()
    const updateDB = async ()=>{
        let data = await mdl.updateOne(
            {name:"fdh"},
            {$set:{age:23}}
        )
        console.log(data)
    }
    // updateDB()
    const deleteInDB = async () => {
        let data = await mdl.deleteOne({name:"fdh"})
        console.log(data)
    }
    // deleteInDB()
    const findInDB = async () => {
        let data = await mdl.find()
        console.log(data)
    }
    // findInDB()
    }
    catch(err){
        console.log(err)
    }
}
main()