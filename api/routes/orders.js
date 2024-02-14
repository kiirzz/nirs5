import express from "express";
import { getOrderFromDB } from "../controllers/orders.js";

const router = express.Router()

router.get("/", getOrderFromDB)

export default router