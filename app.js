// start the server by npx nodemon index.js

// const http = require("http")

// http.createServer((req,res)=>{
//     console.log("at port 3000")
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write("hello world")
//     res.end()
// }).listen("3000")

// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q);
// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'
// console.log(q.query); 

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'

// const path = require("path")
// console.log(path.parse(__filename))
// console.log(path.format(path.parse(__filename)))
// console.log(path.extname(__filename))
// console.log(path.basename(__filename))

// const fs = require("node:fs")
// const fileContent = fs.readFileSync("./file.txt","utf-8")
// // const fileContent = fs.readFileSync("./index.html","utf-8")
// console.log(fileContent)
// const buffer = new Buffer.from("bye")
// console.log(buffer)
// console.log(buffer.toJSON())
// console.log(buffer.toString())

// const fs = require("node:fs")
// const readableStream = fs.createReadStream("./file.txt",{
//     encoding:"utf-8",
//     highWaterMark:2
// });

// const writeableStream = fs.createWriteStream("./file2.txt")

// readableStream.pipe(writeableStream)

// readableStream.on("data",(chunk)=>{
//     console.log(chunk)
//     writeableStream.write(chunk)
// })

const http = require("node:http")
const fs = require("node:fs")
http.createServer((req,res)=>{
    // const person = {
    //     name:"asim",
    //     age:"18"
    // }

    res.writeHead(200)
    // res.write(JSON.stringify(person))
    // const readStream = fs.createReadStream("./file.txt",{
    //     encoding:"utf-8"
    // })
    // readStream.on("data",(chunk)=>{
    //     console.log(chunk)
    //     res.write(chunk)
    // })
    // const readStream = fs.createReadStream(__dirname + "/index.html")
    // readStream.pipe(res)
    res.end("hello")
}).listen(3000,()=>{
    console.log("server started at port 3000")
})

