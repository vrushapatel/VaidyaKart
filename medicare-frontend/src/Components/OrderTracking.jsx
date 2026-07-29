import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./OrderTracking.css";


const OrderTracking = ({ orderBill }) => {


const navigate = useNavigate();


const [status,setStatus] = useState("placed");

const [showRating,setShowRating] = useState(false);

const [rating,setRating] = useState(0);





if(!orderBill){

const saved = localStorage.getItem("orderBill");

if(saved){

orderBill = JSON.parse(saved);

}

}





// ===============================
// LIVE STATUS TRACKING
// ===============================

useEffect(()=>{


if(!orderBill?.orderId)
return;



const fetchStatus = async()=>{


try{


const res = await axios.get(

`http://localhost:5000/api/orders/status/${orderBill.orderId}`

);



const latestStatus = res.data.status;



console.log(
"Latest Status:",
latestStatus
);



setStatus(latestStatus);



localStorage.setItem(

"orderBill",

JSON.stringify({

...orderBill,

status:latestStatus

})

);



}

catch(err){

console.log(
"Status Error:",
err.message
);


}



};



fetchStatus();



const interval=setInterval(()=>{

fetchStatus();

},3000);



return ()=>clearInterval(interval);



},[orderBill]);







useEffect(()=>{


if(status==="delivered"){

setShowRating(true);

}


},[status]);









const steps=[

"placed",

"shipping",

"outfordelivery",

"delivered"

];







const getCircleClass=(step)=>{


return steps.indexOf(status)>=steps.indexOf(step)

?

"circle active"

:

"circle";


};






const getLineClass=(step)=>{


return steps.indexOf(status)>steps.indexOf(step)

?

"line active"

:

"line";


};







const cancelOrder=()=>{


localStorage.removeItem(
"orderBill"
);


navigate("/checkout");


};







// ===============================
// SUBMIT RATING
// ===============================


const submitRating = async()=>{


if(rating===0){

alert(
"Please select rating"
);

return;

}



try{


const res = await axios.post(


`http://localhost:5000/api/orders/rating/${orderBill._id}`,


{

rating:rating

}


);



console.log(
"Rating Response:",
res.data
);




const updatedOrder={

...orderBill,

rating:rating

};



localStorage.setItem(

"orderBill",

JSON.stringify(updatedOrder)

);



alert(
"Thank you for your feedback ⭐"
);



navigate("/");


}


catch(err){


console.log(
"Rating Error:",
err
);


alert(
"Rating update failed"
);



}


};







if(!orderBill){


return(

<div className="no-order">

<h2>
No Order Found
</h2>

</div>

);


}









return (

<div className="tracking-page">


<h1>
Order Details
</h1>





<div className="bill-card">


<h2>
Order Bill
</h2>




<div className="customer">


<p>
<strong>Name :</strong>
{orderBill.customer.fullName}
</p>


<p>
<strong>Email :</strong>
{orderBill.customer.email}
</p>


<p>
<strong>Phone :</strong>
{orderBill.customer.phone}
</p>


<p>
<strong>Address :</strong>
{orderBill.customer.address}
</p>


<p>
<strong>Payment :</strong>
{orderBill.customer.payment}
</p>


</div>




<hr/>




<h3>
Products
</h3>



{

orderBill.items.map(item=>(


<div
className="product-row"
key={item.id}
>


<img

src={item.image}

alt={item.name}

/>


<div>


<h4>
{item.name}
</h4>


<p>
Quantity : {item.quantity}
</p>


<p>
₹{item.price * item.quantity}
</p>


</div>


</div>


))

}





<hr/>




<h2>
Total Amount : ₹{orderBill.total}
</h2>


<p>
Order Date : {orderBill.orderDate}
</p>


<p>
Expected Delivery : {orderBill.deliveryDate}
</p>



</div>








<div className="status-card">


<h2>
Order Tracking
</h2>




<div className="tracking-container">



<div className="track-item">

<div className={getCircleClass("placed")}>

✓

</div>


<p>
Order Placed
</p>


</div>





<div className={getLineClass("placed")}></div>





<div className="track-item">


<div className={getCircleClass("shipping")}>

{

steps.indexOf(status)>=1
?
"✓"
:
""

}

</div>



<p>
Shipping
</p>



</div>





<div className={getLineClass("shipping")}></div>





<div className="track-item">


<div className={getCircleClass("outfordelivery")}>

{

steps.indexOf(status)>=2
?
"✓"
:
""

}

</div>



<p>
Out For Delivery
</p>



</div>





<div className={getLineClass("outfordelivery")}></div>





<div className="track-item">


<div className={getCircleClass("delivered")}>

{

status==="delivered"
?
"✓"
:
""

}

</div>



<p>
Delivered
</p>



</div>




</div>









{

status==="placed" &&

<div className="cancel-box">

<button

className="cancel-btn"

onClick={cancelOrder}

>

Cancel Order

</button>


</div>


}









{

showRating &&


<div className="rating-box">


<h2>
⭐ Rate Your Experience
</h2>



<p>
Your order has been delivered successfully.
</p>




<div className="stars">


{

[1,2,3,4,5].map(star=>(


<span

key={star}

className={

star<=rating

?

"star active-star"

:

"star"

}


onClick={()=>setRating(star)}

>

★

</span>


))


}


</div>






<button

className="submit-btn"

onClick={submitRating}

>

Submit

</button>




</div>



}



</div>


</div>


);


};


export default OrderTracking;