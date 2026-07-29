const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
    id: {
        type: Number,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    usedFor: {
        type: String,
        required: true
    },

    route: {
        type: String,
        required: true
    },

    storage: {
        type: String,
        required: true
    },

    prescription: {
        type: String,
        enum: ["Yes", "No"],
        default: "No"
    },

    manufacturer: {
        type: String,
        required: true
    },

    pack: {
        type: String,
        required: true
    },

    expiry: {
        type: String,
        required: true
    },

    note: {
        type: String
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Product", productSchema);