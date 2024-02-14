import express from "express";
import { getUserFromDB } from "../controllers/users.js";
import { updateUser } from "../controllers/users.js";
import { deleteUser } from "../controllers/users.js";

const router = express.Router()

router.get("/", getUserFromDB)

router.post("/update_user", updateUser)
router.post("/delete_user", deleteUser)

export default router