import { Router } from "express";
import { createUser, deleteUser, getUsers } from "../controllers/UserController";
import auth from "../middlewares/auth";

const usersRouter: Router = Router()

usersRouter.get("/", auth,  getUsers)

usersRouter.get("/:id")

usersRouter.post("/register", createUser)

usersRouter.post("/login", deleteUser)

export default usersRouter;

/*const { Router } = require("express");
const countriesRouter = Router();
const  { 
    getIdCountries,
    getNameCountries,
    postCountry,
} = require('../handlers/countriesHandlers');


countriesRouter.get("/", getNameCountries);
countriesRouter.get("/:idPais", getIdCountries);
countriesRouter.post("/" , postCountry )

module.exports = countriesRouter;*/