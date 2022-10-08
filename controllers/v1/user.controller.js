let user=require("../../user.json")

module.exports.getRandomuser=(req,res)=>{
    let randomuser=Math.floor((Math.random()*user.length)+1)
    let getRandomUser = users.find(user => user.id == randomUser)
    res.send(getRandomUser)
}