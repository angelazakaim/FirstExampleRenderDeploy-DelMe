import express from "express";
import cors from "cors"; // Import CORS

const app = express();

// Enable CORS for all origins
app.use(cors()); 

// Middleware for parsing JSON (standard practice for backends)
app.use(express.json());

// Your existing route modified for Express 5 compatibility
app.get(/.*/, (req, res) => {
  res.json({ 
    message: "My name is Angela, nice to meet you!",
    timestamp: new Date().toISOString()
  });
});

export default app;