const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
dotenv.config();

connectDB();

const app = express();

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
	res.send("Api is running");
});

app.listen(PORT, () => console.log(`\x1b[37mServer running in \x1b[35m${process.env.NODE_ENVIRONMENT} \x1b[37mEnvironment on port:\x1b[33m${PORT}`));
