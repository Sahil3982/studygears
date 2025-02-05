import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./connection.js"
import productRoutes from './src/routes/productRoutes.js'
import registerRoutes from './src/routes/registerRoutes.js'
import loginRoutes from './src/routes/loginRoutes.js'
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Default to port 5000

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for all origins
connectDB()
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Node.js API!" });
});

app.use('/api/product', productRoutes)
app.use('/api/register',registerRoutes)
app.use('/api/login',loginRoutes)

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
