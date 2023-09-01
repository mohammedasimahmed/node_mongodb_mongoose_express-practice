const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Users List")
    
    console.log(req.query)
})

router.get("/new", (req, res) => {
    res.send("New User")
})

// router.get("/:id",(req,res)=>{
//     res.send(`User with id ${req.params.id}`)
// })

const users = [{name:"abc",age:18},{name:"def",age:20}]

router
    .route("/:id([0-9])")
    .get((req, res) => {
        console.log(req.user)
        res.send(`User with id ${req.params.id}`)
    })
    .put((req, res) => {
        res.send("Updated User")
    })
    .delete((req, res) => {
        res.send("Deleted User")
    })



router.param("id",(req,res,next,id)=>{
    req.user = users[id]
    console.log(id)
    next()
})

module.exports = router