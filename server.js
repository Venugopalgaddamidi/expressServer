const express = require("express");
const studentRoute = require("./routes/studentRoutes");
const authRoute = require("./routes/authRoutes");
const mongoose = require("mongoose");
const dns = require("dns");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());

dns.setServers(["1.1.1.1", "8.8.8.8"]);
app.use(express.json());
app.use(studentRoute);
app.use(authRoute);

async function connectDB() {

    await mongoose.connect(process.env.MONGO_URL);

    console.log("Database connected successfully...");

}

connectDB();

app.listen(3000, () => {
    console.log("Listening to server...");
});