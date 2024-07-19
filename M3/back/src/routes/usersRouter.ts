import { Router } from "express";
import { createUser, deleteUser, getUsers, getUsersById } from "../controllers/UserController";
//import auth from "../middlewares/auth";

const usersRouter: Router = Router()

usersRouter.get("/", getUsers)

usersRouter.get("/:id", getUsersById)

usersRouter.post("/register", createUser)

usersRouter.post("/login", deleteUser)

export default usersRouter;

