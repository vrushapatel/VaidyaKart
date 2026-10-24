import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Hero from "./components/Hero";


import Products from "./Pages/Products";
import LoginSignup from "./Pages/LoginSignup";
import Offers from "./Pages/Offers";


import Services from "./Components/Services";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import Footer from "./components/Footer";


import Cart from "./pages/Cart";
import OrderTracking from "./Components/OrderTracking";
import Checkout from "./Pages/Checkout";


import "./App.css";



const Home = () => {

return (

<>
<Hero />

<Reviews />

<Services />

<Contact />

<Footer />

</>

);

};





function App(){



// CART

const [cart,setCart] = useState([]);




// WISHLIST

const [wishlist,setWishlist] = useState(

JSON.parse(
localStorage.getItem("wishlist")
) || []

);





// SAVE WISHLIST

useEffect(()=>{

localStorage.setItem(

"wishlist",

JSON.stringify(wishlist)

);

},[wishlist]);






// SEARCH

const [searchTerm,setSearchTerm] = useState("");






// ORDER BILL


const [orderBill,setOrderBill] = useState(()=>{


const saved = localStorage.getItem(
"orderBill"
);


return saved

?

JSON.parse(saved)

:

null;


});





return(

<>


<Header

cart={cart}

setCart={setCart}


wishlist={wishlist}

setWishlist={setWishlist}


searchTerm={searchTerm}

setSearchTerm={setSearchTerm}

/>





<Routes>





{/* HOME */}

<Route

path="/"

element={<Home />}

/>







{/* PRODUCTS */}

<Route

path="/products"

element={

<Products

cart={cart}

setCart={setCart}


searchTerm={searchTerm}


wishlist={wishlist}

setWishlist={setWishlist}

/>

}

/>







{/* CART */}

<Route

path="/cart"

element={

<Cart

cart={cart}

setCart={setCart}

/>

}

/>







{/* CHECKOUT */}

<Route

path="/checkout"

element={

<Checkout

cart={cart}

setCart={setCart}

setOrderBill={setOrderBill}

/>

}

/>







{/* ORDER TRACKING */}

<Route

path="/tracking"

element={

<OrderTracking

orderBill={orderBill}

/>

}

/>







{/* OFFERS */}

<Route

path="/offers"

element={

<Offers

cart={cart}

setCart={setCart}


wishlist={wishlist}

setWishlist={setWishlist}

/>

}

/>







{/* SERVICES */}

<Route

path="/services"

element={

<Services />

}

/>







{/* CONTACT */}

<Route

path="/contact"

element={

<Contact />

}

/>







{/* LOGIN */}

<Route

path="/login"

element={

<LoginSignup />

}

/>







{/* SIGNUP */}

<Route

path="/signup"

element={

<LoginSignup />

}

/>





</Routes>



</>

);


}



export default App;