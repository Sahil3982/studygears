import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./connection.js"
import productRoutes from './src/routes/productRoutes.js'
import registerRoutes from './src/routes/registerRoutes.js'
import loginRoutes from './src/routes/loginRoutes.js'
import productCartRoutes from './src/routes/productCartRoutes.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); 
app.use(cors()); 
connectDB()
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Node.js API!" });
});

app.use('/api/product', productRoutes)
app.use('/api/register',registerRoutes)
app.use('/api/login',loginRoutes)
app.use('/api/product', productCartRoutes)


// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
 