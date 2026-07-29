import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// User Pages
import Home from "./pages/Home";
import Medicines from "./pages/Medicines";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";


// Admin Pages
import AdminDashboard from "./admin/AdminDashboard";
import AddMedicine from "./admin/AddMedicine";
import ManageMedicine from "./admin/ManageMedicine";



function App() {


  const [cart, setCart] = useState([]);



  // Add Medicine To Cart
  function addToCart(medicine) {


    const existingItem = cart.find(
      (item) => item.id === medicine.id
    );


    if (existingItem) {


      setCart(

        cart.map((item) =>

          item.id === medicine.id

            ?

            {
              ...item,
              quantity: item.quantity + 1
            }

            :

            item

        )

      );


    }

    else {


      setCart([

        ...cart,

        {
          ...medicine,
          quantity: 1
        }

      ]);


    }


  }





  // Remove Cart Item

  function removeItem(id) {


    setCart(

      cart.filter(

        (item) => item.id !== id

      )

    );


  }





  // Increase / Decrease Quantity

  function updateQuantity(id, type) {


    setCart(


      cart.map((item) => {


        if (item.id === id) {


          if (type === "plus") {


            return {

              ...item,

              quantity: item.quantity + 1

            };


          }



          if (type === "minus" && item.quantity > 1) {


            return {

              ...item,

              quantity: item.quantity - 1

            };


          }


        }


        return item;


      })

    );


  }






  return (


    <BrowserRouter>


      <Navbar cart={cart} />



      <Routes>


        {/* User Routes */}


        <Route
          path="/"
          element={<Home />}
        />



        <Route

          path="/medicines"

          element={
            <Medicines
              addToCart={addToCart}
            />
          }

        />



        <Route

          path="/cart"

          element={

            <Cart

              cart={cart}

              removeItem={removeItem}

              updateQuantity={updateQuantity}

            />

          }

        />



        <Route

          path="/login"

          element={<Login />}

        />



        <Route

          path="/register"

          element={<Register />}

        />



        <Route

          path="/contact"

          element={<Contact />}

        />





        {/* Admin Routes */}



        <Route

          path="/admin"

          element={<AdminDashboard />}

        />



        <Route

          path="/admin/add-medicine"

          element={<AddMedicine />}

        />



        <Route

          path="/admin/manage-medicine"

          element={<ManageMedicine />}

        />



      </Routes>




      <Footer />



    </BrowserRouter>


  );

}


export default App;