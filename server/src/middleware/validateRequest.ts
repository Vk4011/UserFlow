import { Request, Response, NextFunction } from "express";

// A sample middleware for validating request body schema
export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({
      message: "Invalid request: username and email are required",
    });
  }

  next(); // Proceed to the next middleware or controller
};
