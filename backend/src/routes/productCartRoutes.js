import express from 'express'
import productCartControllers from '../controllers/productCartControllers.js'

const router = express.Router()

router.get('/',productCartControllers)

export default router