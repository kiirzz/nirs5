import express from "express";
import authRoutes from "./routes/auth.js"
import clientRoutes from "./routes/home_client.js"

const app = express()

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/home", clientRoutes)

app.get("/test",(req,res)=>{
    res.json("Hello world!")
})

app.listen(8800,()=>{
    console.log("Connected!")
})