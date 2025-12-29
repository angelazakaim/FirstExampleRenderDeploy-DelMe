import express from "express";

const app = express();


//note: this will fail on Express 5 and up
// app.get("*", (req, res) => {
//   res.send("Your Name Here:Angela");
// });



app.get(/.*/, (req, res) => {
  res.send("My name is :Angela");
});



// Why is this happening?
// Express 5.x Upgrade: Your package.json specifies "express": "^5.2.1". Express 5 switched to a newer version of the path-to-regexp library.

// Strict Routing: In previous versions (like Express 4), * was a simple "match everything" shortcut. In Express 5, all wildcards must be explicit. Using (.*) tells Express to capture the entire path as a parameter.

// Alternative Options
// If you don't actually need to capture "everything" and just want a home page, you should use the root path:

// For just the home page: Use app.get("/", ...)

// To catch all undefined routes: Use app.all("*", ...) but wrap the asterisk in a capture group as shown above: app.all("/(.*)", ...)


export default app;
