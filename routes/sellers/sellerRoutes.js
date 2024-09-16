import express from "express";
import { loginSeller, registerSeller } from "../../controllers/sellers/sellerControllers.js";
const sellerRouter = express.Router();

sellerRouter.post("/register", registerSeller)
sellerRouter.post("/login", loginSeller)

export default sellerRouter;