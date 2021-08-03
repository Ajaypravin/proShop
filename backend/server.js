import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "../backend/data/products.js";

const app = express();
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend api ");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, console.log("server is listening...."));
