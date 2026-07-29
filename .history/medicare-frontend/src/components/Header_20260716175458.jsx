import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaShoppingCart,
  FaTrash,
  FaHeart
} from "react-icons/fa";

import "./Header.css";


const Header = ({
  cart = [],
  setCart,

  wishlist = [],
  setWishlist,

  searchTerm = "",
  setSearchTerm

}) => {


const navigate = useNavigate();


const [showWishlist,setShowWishlist] = useState(false);


const [userName,setUserName] = useState("User");

const [isLogin,setIsLogin] = useState(false);




// USER LOGIN CHECK

useEffect(()=>{


const loginStatus =
localStorage.getItem("userLogin");


const savedName =
localStorage.getItem("userName");



if(loginStatus==="true"){

setIsLogin(true);

setUserName(savedName || "User");

}


},[]);





// CART COUNT

const totalItems = cart.reduce(

(total,item)=>

total + (item.quantity || 1),

0

);





// WISHLIST COUNT

const totalWishlist = wishlist.length;






// CART TOTAL

const grandTotal = cart.reduce(

(total,item)=>

total + item.price * item.quantity,

0

);






// INCREASE CART ITEM

const addItem=(id)=>{


const updated = cart.map(item=>


item.id===id

?

{

...item,

quantity:item.quantity+1

}

:

item


);


setCart(updated);


};







// DECREASE CART ITEM

const removeItem=(id)=>{


const updated = cart.map(item=>


item.id===id

?

{

...item,

quantity:item.quantity-1

}

:

item


)

.filter(item=>item.quantity>0);



setCart(updated);


};







// REMOVE WISHLIST ITEM

const removeWishlist=(id)=>{


const updated = wishlist.filter(

item=>item.id!==id

);


setWishlist(updated);


localStorage.setItem(

"wishlist",

JSON.stringify(updated)

);


};







// MOVE WISHLIST PRODUCT TO CART

const moveToCart=(item)=>{


const exist = cart.find(

p=>p.id===item.id

);




if(exist){


setCart(

cart.map(p=>


p.id===item.id

?

{

...p,

quantity:p.quantity+1

}

:

p


)

);


}

else{


setCart([

...cart,

{

...item,

quantity:1

}

]);


}





removeWishlist(item.id);


};







// LOGOUT

const handleLogout=()=>{


localStorage.removeItem("userLogin");

localStorage.removeItem("userName");


setIsLogin(false);

setUserName("User");


navigate("/");


};







return(


<header className="header">






{/* LOGO */}

<div className="logo">

<Link to="/">

VaidyaKart

</Link>

</div>







{/* NAVBAR */}

<nav>

<ul className="nav-links">


<li>

<Link to="/">

Home

</Link>

</li>


<li>

<Link to="/products">

Products

</Link>

</li>


<li>

<Link to="/offers">

Offers

</Link>

</li>


<li>

<Link to="/services">

Services

</Link>

</li>


<li>

<Link to="/contact">

Contact

</Link>

</li>


</ul>

</nav>







<div className="right-section">







{/* SEARCH */}

<div className="search-box">


<FaSearch className="search-icon"/>


<input

type="text"

placeholder="Search products..."

value={searchTerm}

onChange={(e)=>

setSearchTerm(e.target.value)

}

/>


</div>








{/* WISHLIST */}


<div className="wishlist-container">


<div

className="wishlist-icon"

onClick={()=>setShowWishlist(!showWishlist)}

>


<FaHeart/>


<span>

{totalWishlist}

</span>


</div>








{

showWishlist &&


<div className="wishlist-dropdown">



<h3>

❤️ My Wishlist

</h3>





{

wishlist.length===0

?


<p className="empty-wishlist">

Wishlist Empty

</p>


:


wishlist.map(item=>(



<div

className="wishlist-card"

key={item.id}

>



<img

src={item.image}

alt={item.name}

/>





<div className="wishlist-details">


<h4>

{item.name}

</h4>



<p>

{item.category}

</p>



<h5>

₹ {item.price}

</h5>





<button

className="move-btn"

onClick={()=>moveToCart(item)}

>

Move To Cart

</button>



</div>







<button

className="delete-wishlist"

onClick={()=>removeWishlist(item.id)}

>

<FaTrash/>

</button>





</div>



))

}



</div>



}




</div>








{/* CART ICON */}


<div

className="cart-container"


onClick={()=>navigate("/cart")}

>


<div className="cart-icon">


<FaShoppingCart/>


<span>

{totalItems}

</span>


</div>


</div>









{/* USER */}


<button className="user-btn">

Hello {userName}

</button>







{

isLogin

?

<button

className="btn btn-warning"

onClick={handleLogout}

>

Logout

</button>


:


<Link to="/login">

<button className="btn btn-warning">

Login

</button>

</Link>


}






</div>



</header>



);


};


export default Header;