import express from "express";
import addproduct from "../controllers/dashboard/addproduct.js";

const router = express.Router()

router.post('/',addproduct)

export default router