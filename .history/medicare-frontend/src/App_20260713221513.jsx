import React,{useState} from "react";

import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import Header from "./components/Header";


import Home from "./pages/Home";


function App(){


const [cart,setCart]=useState([]);


const [wishlist,setWishlist]=useState([]);


const [searchTerm,setSearchTerm]=useState("");



return(


<BrowserRouter>


<Header

cart={cart}

wishlist={wishlist}

searchTerm={searchTerm}

setSearchTerm={setSearchTerm}

/>



<Routes>


<Route

path="/"

element={<Home/>}

/>


</Routes>


</BrowserRouter>


)

}


export default App;