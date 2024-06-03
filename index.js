const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Define the port to use from environment or default to 3001
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initialize routes
app.use(routes);

// Start the server once the database connection is open
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
});
