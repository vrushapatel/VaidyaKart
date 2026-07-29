const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("./models/Product");
const products = require("./data/products");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected"));

const importData = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("✅ 54 Products Imported Successfully");

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

importData();