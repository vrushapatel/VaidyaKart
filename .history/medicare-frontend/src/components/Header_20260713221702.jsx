import React from "react";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUserCircle
} from "react-icons/fa";

import "./Header.css";


const Header = ({
  cart = [],
  wishlist = [],
  searchTerm = "",
  setSearchTerm
}) => {


return (

<header className="header">


{/* Logo */}

<div className="logo">

💊 VaidyaCart

</div>



{/* Navigation */}

<nav>


<Link to="/">
Home
</Link>


<Link to="/medicines">
Medicines
</Link>


<Link to="/offers">
Offers
</Link>


<Link to="/health">
Health Blog
</Link>


</nav>




{/* Search */}

<div className="searchBox">


<input

type="text"

placeholder="Search medicines..."

value={searchTerm}

onChange={(e)=>setSearchTerm(e.target.value)}

/>


<FaSearch/>

</div>





{/* Icons */}

<div className="icons">



<Link to="/wishlist">


<div className="icon">


<FaHeart/>


<span>

{wishlist.length}

</span>


</div>


</Link>





<Link to="/cart">


<div className="icon">


<FaShoppingCart/>


<span>

{cart.length}

</span>


</div>


</Link>





<FaUserCircle className="user"/>



</div>



</header>

)

}



export default Header;