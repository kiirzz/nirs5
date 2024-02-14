import express from "express";
import authRoutes from "./routes/auth.js"
import gameRoutes from "./routes/games.js"
import orderRoutes from "./routes/orders.js"
import userRoutes from "./routes/users.js"
import publisherRoutes from "./routes/publishers.js"
import categoryRoutes from "./routes/category.js"
import cookieParser from "cookie-parser";

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/game", gameRoutes)
app.use("/api/order", orderRoutes)
app.use("/api/user", userRoutes)
app.use("/api/publisher", publisherRoutes)
app.use("/api/category", categoryRoutes)

app.get("/test",(req,res)=>{
    res.json("Hello world!")
})

app.listen(8800,()=>{
    console.log("Connected!")
})