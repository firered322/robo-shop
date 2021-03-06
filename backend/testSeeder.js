const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bcrypt = require("bcryptjs");
const { products } = require("./data/data");
const UserModel = require("./models/userModel");
const productModel = require("./models/productModel");
const User = require("./models/userModel");
const data = require('./data/data')

dotenv.config();

connectDB();

const userArray = [
	{
		name: "atul Admin",
		email: "atulsingh13978@gmail.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true
	},
	{
		name: "atul123",
		email: "atulsingh139278@gmail.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		name: "atul456",
		email: "atulsingh113978@gmail.com",
		password: bcrypt.hashSync("123456", 10),
	}
];

console.log(data)
const importDatsa = async() =>{ 
	// await UserModel.insertMany(userArray)
	const userDpProducts = data.products.map((d) => {
		return { ...d, user: "6043af3fa7815410ad9211cc" };
	});
	await productModel.insertMany(userDpProducts);
}

importDatsa()

