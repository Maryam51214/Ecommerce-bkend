import express from 'express';
const app = express();
import dotenv from "dotenv"
import Connection from "./db/conn.js";
import buyerRouter from "./routes/buyers/buyerRoutes.js";
import cors from "cors"
import sellerRouter from "./routes/sellers/sellerRoutes.js";
import productRouter from "./routes/sellers/ProductRoutes.js";


const port = 8000;
dotenv.config()
app.use(express.json())
app.use(cors())

Connection()

app.use("/api/buyers/", buyerRouter);
app.use("/api/sellers", sellerRouter);
app.use("/api/products", productRouter);
app.listen(port, () => {
    console.log("Listening on 8000");
})

// mongodb+srv://affaq020:Affaqkhan@cluster0.x9eg3.mongodb.net/lab