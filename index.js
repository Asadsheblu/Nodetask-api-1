const express=require("express")
const cors=require("cors")
const app=express()
const userRouter="/Routers/v1/userRouter.js"
app.use(cors())
app.use(express.json());
const port = process.env.PORT || 5000
app.use("/user",userRouter)

app.use("/", (req, res) => {
    res.send("node js is working")
})
app.listen(port, () => {
    console.log("server is running");

});