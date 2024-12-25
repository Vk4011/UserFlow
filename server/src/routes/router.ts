import { Router } from "express";
import { createUser, getUsers } from "../controllers/user";
import { cleanDatabase } from "../controllers/cleanDatabase";

const router: Router = Router();

// Route to create a new user
router.post("/", createUser);

// Route to get all users
router.get("/getUsers", getUsers);

// Route to clean the database
router.delete("/clean", cleanDatabase);

export default router;
