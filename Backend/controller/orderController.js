const Order = require("../models/Order.js");
const sendMail = require("../utils/sendMail.js");


// ================================
// Get Order Status (Tracking)
// ================================

exports.getOrderStatus = async (req, res) => {

  try {

    const order = await Order.findOne({

      orderId: req.params.orderId

    });


    if (!order) {

      return res.status(404).json({

        message: "Order Not Found"

      });

    }


    res.json({

      status: order.status

    });


  }

  catch (err) {

    res.status(500).json({

      message: err.message

    });

  }

};




// ================================
// Place Order
// ================================

exports.placeOrder = async (req, res) => {

  try {


    const order = new Order(req.body);


    await order.save();



    // Send approval mail
    setTimeout(() => {

      sendMail(order);

    }, 3000);



    res.status(201).json({

      success: true,

      message: "Order Placed Successfully",

      order

    });


  }


  catch (err) {


    console.error(
      "========= ORDER ERROR ========="
    );

    console.error(err);

    console.error(
      "==============================="
    );



    res.status(500).json({

      success:false,

      message:err.message,

      stack:err.stack

    });


  }

};




// ================================
// Get Single Order
// ================================

exports.getOrder = async (req,res)=>{

  try{


    const order = await Order.findById(
      req.params.id
    );



    if(!order){


      return res.status(404).json({

        message:"Order Not Found"

      });


    }



    res.json(order);



  }

  catch(err){


    res.status(500).json({

      message:err.message

    });


  }


};




// ================================
// Approve / Update Order Status
// ================================

exports.approveOrder = async(req,res)=>{


  try{


    const {

      id,

      status

    } = req.params;



    const order = await Order.findById(id);



    if(!order){


      return res.status(404).send(
        "Order Not Found"
      );


    }



    order.status = status;



    await order.save();




    // Send next mail
    if(status !== "delivered"){


      setTimeout(()=>{


        sendMail(order);


      },3000);


    }





    res.send(

      `<h2>Status Updated Successfully : ${status}</h2>`

    );



  }


  catch(err){


    res.status(500).send(

      err.message

    );


  }


};




// ================================
// Submit Rating
// ================================

// ================================
// Submit Rating
// ================================

exports.submitRating = async(req,res)=>{

  try{

    const {
      rating
    } = req.body;


    const order = await Order.findById(
      req.params.id
    );


    if(!order){

      return res.status(404).json({

        message:"Order Not Found"

      });

    }


    order.rating = rating;


    await order.save();



    // Send Feedback Mail
    const feedbackMail = require("../utils/sendFeedbackMail");


    setTimeout(()=>{

      feedbackMail(order);

    },2000);



    res.json({

      success:true,

      message:"Rating Submitted"

    });



  }

  catch(err){

    res.status(500).json({

      message:err.message

    });

  }

};