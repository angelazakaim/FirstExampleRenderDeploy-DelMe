//start the server
import app from "./app.js";

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.on("error", (err) => {
  console.error("Server error:", err);
  process.exit(1);
});


// What this demonstrates

// Express hides http.createServer

// Cleaner routing

// Built-in response helpers

// Less boilerplate