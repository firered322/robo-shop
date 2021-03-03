const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { products } = require("./data/data");

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Api is running");
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((item) => {
        return item.id == req.params.id;
    });
    res.json(product);
});

app.listen(PORT, () => console.log(`Server running in \x1b[35m${process.env.NODE_ENVIRONMENT} \x1b[37mEnvironment on port:\x1b[33m${PORT}`));
