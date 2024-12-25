import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { User } from "../models/user";

// Clean (delete all records from) the database
export const cleanDatabase = async (_req: Request, res: Response): Promise<void> => {
  try {
    await AppDataSource.getRepository(User).clear();
    res.status(200).json({ message: "Database cleaned successfully!" });
  } catch (err) {
    // Safely extract the error message
    const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
    res.status(500).json({ message: "Error cleaning database", error: errorMessage });
  }
};
