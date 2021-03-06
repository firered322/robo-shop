const express = require("express");
const ProductModel = require("../models/productModel");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const products = await ProductModel.find({});
		res.json(products);
	} catch (error) {
		res.json({
			message: "Error fetching Products",
			error: error.message
		});
	}
});

router.get("/:id", async (req, res) => {
	try {
		const product = await ProductModel.find({ _id: req.params.id });
		res.json(product);
	} catch (error) {
		res.json({
			message: "Error fetching product",
			error: error.message
		});
	}
});

module.exports = router;
