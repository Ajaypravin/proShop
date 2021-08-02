const express = require("express");
const products = require("../backend/data/products");
const app = express();

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

app.listen(5000, console.log("server is listening...."));
