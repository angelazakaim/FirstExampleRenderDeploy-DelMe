// //start the server
// import app from "./app.js";
// import dbInit from "./db-init.js";

// // const PORT = 8080;
// // const server = app.listen(PORT, () => {
// //   console.log(`Server running on http://localhost:${PORT}`);
// // });


// // This block of code is designed to make your server work perfectly both
// //  on your personal computer and on cloud platforms like **Render**.
// // Here is the breakdown of what each part does:
// // ### 1. The Port Selection
// // const PORT = process.env.PORT || 8080;
// // * **`process.env.PORT`**: When you upload your code to Render, Render doesn't let you choose the port. It assigns a random number (like 10000 or 5432) and stores it in a variable called `PORT`. This part of the code tells your app: "Use whatever number Render gives me."
// // * **`|| 8080`**: This is the **fallback**. If you are running the code on your own laptop, `process.env.PORT` doesn't exist. The `||` (OR) tells the code: "If Render didn't give me a number, just use 8080."
// // ### 2. The Listener Address
// // app.listen(PORT, '0.0.0.0', () => { ... });
// // * **`'0.0.0.0'`**: This is the most important part for your Render error.
// // * Normally, a server might only listen to `localhost` (your own computer).
// // * By setting it to `'0.0.0.0'`, you are telling the server to **listen to everyone**. It tells the server: "Accept requests from any network interface," which allows the public internet (and your Vite frontend) to reach your backend.
// // * **`() => { ... }`**: This is a callback function. It runs exactly one time as soon as the server successfully starts up.
// // * **``Server running on port ${PORT}``**: This prints a message to your terminal so you can verify which port the server actually chose.
// // ### Summary Analogy
// // Imagine you are opening a lemonade stand:
// // * **`PORT`**: This is the street number of your stand. On your own street, you use number `8080`. But if the city (Render) moves you to a different street, you have to use the number they give you.
// // * **`'0.0.0.0'`**: This is like taking down the "Private Property" fence. It ensures that people from other neighborhoods (the internet) are allowed to come and buy your lemonade, rather than just your own family.
// const PORT = process.env.PORT || 8080;
// // const server = app.listen(PORT, '0.0.0.0', () => {
// //   console.log(`Server running on port ${PORT}`);
// // });

// let server ;

// // Initialize DB, then start the server
// dbInit().then(() => {
//   server = app.listen(PORT, '0.0.0.0', () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });


// server.on("error", (err) => {
//   console.error("Server error:", err);
//   process.exit(1);
// });


// // What this demonstrates
// // Express hides http.createServer
// // Cleaner routing
// // Built-in response helpers
// // Less boilerplate