import express from "express"
import getRegisterData from "../controllers/registerControllers.js"

const router = express.Router()

router.post('/', getRegisterData)

export default router