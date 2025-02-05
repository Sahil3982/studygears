import express from 'express'
import getLogin from '../controllers/loginControllers'

const router = express.Router()

router.post('/', getLogin)

export default router