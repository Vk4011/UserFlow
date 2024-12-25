import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { User } from "../models/user";
import { validate } from "class-validator";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { username, email, phone, dob, collegeName, state } = req.body;
  
      // Create a new user instance
      const user = new User();
      user.username = username;
      user.email = email;
      user.phone = phone;
      user.dob = dob;
      user.collegeName = collegeName;
      user.state = state;
  
      // Validate user input
      const errors = await validate(user);
      if (errors.length > 0) {
        res.status(400).json({
          statusCode: 400,
          message: "Validation errors occurred",
          errors: errors.map((err) => ({
            property: err.property,
            constraints: err.constraints,
          })),
        });
        return;
      }
  
      // Save user to the database
      const savedUser = await AppDataSource.getRepository(User).save(user);
      res.status(201).json({
        statusCode: 201,
        message: "User created successfully",
        data: savedUser,
      });
    } catch (err) {
      // Assert the error type
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      res.status(500).json({
        statusCode: 500,
        message: "Error saving user",
        error: errorMessage,
      });
    }
  };
  export const getUsers = async (_req: Request, res: Response): Promise<void> => {
    try {
      const users = await AppDataSource.getRepository(User).find();
  
      res.status(200).json({
        statusCode: 200,
        message: "Users fetched successfully",
        data: users,
      });
    } catch (err) {
      // Assert the error type
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      res.status(500).json({
        statusCode: 500,
        message: "Error fetching users",
        error: errorMessage,
      });
    }
  };
  