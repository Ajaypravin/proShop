import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import productRoute from "./routes/productRoutes.js";
import userRoute from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddlewares.js";

const app = express();
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

//error handler

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log("server is listening...."));
