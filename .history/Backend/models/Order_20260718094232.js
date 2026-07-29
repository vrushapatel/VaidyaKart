const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
{
    orderId: {
        type: String,
        required: true,
        unique: true
    },

    customer: {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        payment: {
            type: String,
            required: true
        }
    },

    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },

            id: Number,

            name: String,

            image: String,

            category: String,

            price: Number,

            quantity: Number,

            usedFor: String,

            route: String,

            storage: String,

            prescription: String,

            manufacturer: String,

            pack: String,

            expiry: String,

            note: String
        }
    ],

    subtotal: Number,

    discount: Number,

    delivery: Number,

    total: Number,

    status: {
        type: String,
        default: "placed"
    },

    rating: {
        type: Number,
        default: 0
    },

    orderDate: String,

    deliveryDate: String
},
{
    timestamps: true
});

module.exports = mongoose.model("Order", orderSchema);