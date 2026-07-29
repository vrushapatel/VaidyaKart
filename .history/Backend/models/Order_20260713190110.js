const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    orderId:{
        type:String,
        required:true
    },

    customer:{

        fullName:String,

        email:String,

        phone:String,

        address:String,

        payment:String

    },

    items:[
        {

            id:Number,

            name:String,

            image:String,

            price:Number,

            quantity:Number

        }
    ],

    subtotal:Number,

    discount:Number,

    delivery:Number,

    total:Number,

    status:{
        type:String,
        default:"placed"
    },

    rating:{
        type:Number,
        default:0
    },

    orderDate:String,

    deliveryDate:String

},
{
timestamps:true
});

module.exports = mongoose.model("Order",orderSchema);