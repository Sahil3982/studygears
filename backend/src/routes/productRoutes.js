// src/routes/productRoutes.js
import express from 'express';
import getAllProducts from '../controllers/productControllers.js'; // ✅ Import default directly

const router = express.Router();

router.get('/', getAllProducts); // ✅ Use the function directly

export default router;
