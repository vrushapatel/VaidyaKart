const express = require("express");

const router = express.Router();


const {

placeOrder,
approveOrder,
submitRating,
getOrder,
getOrderStatus

} = require("../controller/orderController");

router.get("/test", (req, res) => {
  res.send("Order Route Working");
});

router.post(
"/place",
placeOrder
);



router.get(
"/status/:orderId",
getOrderStatus
);



router.get(
"/approve/:id/:status",
approveOrder
);



router.post(
"/rating/:id",
submitRating
);



router.get(
"/:id",
getOrder
);



module.exports = router;