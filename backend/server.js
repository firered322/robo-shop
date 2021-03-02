const express = require("express");
const { products } = require("./data/data");

const app = express();

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

app.listen(5000, () => console.log("server running on port 5000"));
