require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());

app.use(express.json());


// MongoDB Connection

mongoose.connect(process.env.MONGODB_URL)

.then(() => {

    console.log("MongoDB Connected");

})

.catch((err) => {

    console.log(err);

});


// Routes

app.use("/api/orders", orderRoutes);


// Test Route

app.get("/", (req, res) => {

    res.send("Backend Running");

});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server Running On Port ${PORT}`);

});