import express from "express";
import cors from "cors"; // Import CORS

import User from "./Models/User.js";
const app = express();

// Enable CORS for all origins
app.use(cors()); 

// Middleware for parsing JSON (standard practice for backends)
app.use(express.json());

// // Your existing route modified for Express 5 compatibility
// app.get(/.*/, (req, res) => {
//   res.json({ 
//     message: "My name is Angela, nice to meet you!",
//     timestamp: new Date().toISOString()
//   });
// });


app.get("/", async (req, res) => {
  try {
    // Fetch the first user from our SQLite DB
    const userData = await User.findOne();
    
    res.json({ 
      message: userData.message,
      name: userData.name,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({ error: "Database not ready" });
  }
});

export default app;
