import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/db";
import userRoutes from "./routes/router";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
// Initialize the database
AppDataSource.initialize()
  .then(() => {
    console.log("\n\t Database connected!");
  })
  .catch((err) => {
    console.error("\n\t Database connection error: ", err);
  });

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Server is running successfully!" });
});

// Register routes
app.use("/api/users", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`\n\t 🚀 Server is running at http://localhost:${port} \n`);
});
