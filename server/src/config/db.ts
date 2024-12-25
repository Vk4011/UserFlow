import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../models/user";
import dotenv from "dotenv"

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username:process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "neondb",
  synchronize: true, // Enable for development; disable in production
  logging: true,
  entities: [User], // Ensure User entity is included
  ssl: { rejectUnauthorized: false }, // Required for Neon DB
});

AppDataSource.initialize()
  .then(() => {
    console.log("🚀 Database connected successfully!");
  })
  .catch((err: Error) => {
    console.error("❌ Database connection failed:", err.message);
  });
