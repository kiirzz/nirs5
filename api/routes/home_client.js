import express from "express";

const router = express.Router()

router.get("/test", (req,res) => {
    res.json("Client Home")
})

export default router