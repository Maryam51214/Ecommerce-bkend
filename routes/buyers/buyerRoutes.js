import express from "express";
import { loginBuyer, registerBuyer } from "../../controllers/buyers/buyersControllers.js";
const buyerRouter = express.Router();

buyerRouter.post("/register", registerBuyer)
buyerRouter.post("/login", loginBuyer)

export default buyerRouter;