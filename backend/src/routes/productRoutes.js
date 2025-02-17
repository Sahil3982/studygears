// src/routes/productRoutes.js
import express from 'express';
import getAllProducts from '../controllers/productControllers.js'; 

const router = express.Router();

router.get('/', getAllProducts); 

export default router;
