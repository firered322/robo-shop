const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        });
        console.log(`DB connected`, connection.connection.host);
    } catch (error) {
        console.log("Error connection to DB", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
