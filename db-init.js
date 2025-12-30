//This function will run when the server starts. It handles the "First Time Setup" and logs exactly what is happening.
import sequelize from './db.js';
import User from './Models/User.js';

const dbInit = async () => {
  console.log("Starting SQLite connection...");
  
  try {
    // Sync models to database
    // force: true will recreate the table every time you restart the server
    await sequelize.sync({ force: true });
    console.log("Database synchronized.");

    // Initialize with some starting info
    await User.create({
      name: "Angela",
      message: "SQLite is initialized and ready!"
    });
    
    console.log("Initial data seeded successfully.");
  } catch (error) {
    // Throw the error so server.js knows not to start
    throw new Error("Database initialization failed: " + error.message);
  }
};

export default dbInit;