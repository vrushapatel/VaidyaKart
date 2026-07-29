import React, { useState } from "react";
import "./Products.css";
import {
  FaHeart,
  FaRegHeart
} from "react-icons/fa";

const Products = ({
 cart,
 setCart,
 searchTerm,
 wishlist,
 setWishlist
})=>{

const products = [
  {
    id: 1,
    name: "Dolo 650",
    category: "Fever & Pain",
    image: "https://d1s24u4ln0wd0i.cloudfront.net/med/3606/DOLO%20650MG%20TAB%201X15_1.webp",
    price: 35,
  },
  {
    id: 2,
    name: "Paracetamol 650",
    category: "Fever & Pain",
    image: "https://cpimg.tistatic.com/06609728/b/8/Paracetamol-TABLET.jpeg",
    price: 28,
  },
  {
    id: 3,
    name: "Crocin Advance",
    category: "Fever & Pain",
    image: "https://images.apollo247.in/pub/media/catalog/product/c/r/cro0008.jpg",
    price: 32,
  },
  {
    id: 4,
    name: "Combiflam",
    category: "Fever & Pain",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/5/309537979/XJ/VC/KL/32709564/combiflam-tablet.jpg",
    price: 42,
  },
  {
    id: 5,
    name: "Ibuprofen",
    category: "Fever & Pain",
    image: "https://m.media-amazon.com/images/I/61nYx3KQ3AL.jpg",
    price: 48,
  },
  {
    id: 6,
    name: "Benadryl Syrup",
    category: "Cold & Cough",
    image: "https://m.media-amazon.com/images/I/51G6T2qQ3KL.jpg",
    price: 145,
  },
  {
    id: 7,
    name: "Ascoril LS",
    category: "Cold & Cough",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/8/UT/ND/HA/129284356/ascoril-ls-syrup.jpg",
    price: 138,
  },
  {
    id: 8,
    name: "Sinarest Tablet",
    category: "Cold & Cough",
    image: "https://onemg.gumlet.io/images/w_150,c_fit,q_auto,f_auto/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/v1661936893/cropped/jffmhlz7p6rhzl8gmzjv.png",
    price: 96,
  },
  {
    id: 9,
    name: "Cetirizine",
    category: "Cold & Cough",
    image: "https://m.media-amazon.com/images/I/61XWJkA5uBL.jpg",
    price: 42,
  },
  {
    id: 10,
    name: "Vicks VapoRub",
    category: "Cold & Cough",
    image: "https://m.media-amazon.com/images/I/71QQ5N6kKVL.jpg",
    price: 175,
  },
  {
    id: 11,
    name: "Vitamin C Tablets",
    category: "Vitamins & Supplements",
    image: "https://m.media-amazon.com/images/I/61Q-+KR3WcL._AC_UF1000,1000_QL80_.jpg",
    price: 249,
  },
  {
    id: 12,
    name: "Vitamin D3",
    category: "Vitamins & Supplements",
    image: "https://m.media-amazon.com/images/I/71zvJfE3fdL.jpg",
    price: 325,
  },
  {
    id: 13,
    name: "Multivitamin Capsules",
    category: "Vitamins & Supplements",
    image: "https://m.media-amazon.com/images/I/71P+E1QdJxL.jpg",
    price: 399,
  },
  {
    id: 14,
    name: "Calcium Tablets",
    category: "Vitamins & Supplements",
    image: "https://m.media-amazon.com/images/I/61uQ8T2v5SL.jpg",
    price: 275,
  },
  {
    id: 15,
    name: "Omega-3 Fish Oil",
    category: "Health Supplements",
    image: "https://m.media-amazon.com/images/I/71Q6P9Q6JPL.jpg",
    price: 599,
  },
];


const allProducts = products;
 // CATEGORY BUTTONS

const categories = [
  "All",
  "Fever & Pain",
  "Cold & Cough",
  "Vitamins & Supplements",
  "Skin Care",
  "Digestive Care",
  "Personal Care",
  "Healthcare Devices",
  "Medical Devices",
  "Health Supplements"
];


const [selectedCategory, setSelectedCategory] = useState("All");

  // FILTER

  const filteredProducts = products.filter((item) => {

    const categoryMatch =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const searchMatch =
      item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;

  });

  // ADD TO CART

  const addToCart = (product) => {

    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }

  };

  // WISHLIST

  const toggleWishlist = (product) => {

    const exists = wishlist.find(
      (item) => item.id === product.id
    );

    if (exists) {

      setWishlist(
        wishlist.filter(
          (item) => item.id !== product.id
        )
      );

    } else {

      setWishlist([
        ...wishlist,
        product
      ]);

    }

  };

  return (

    <section className="products-section">

      <h2>Our Products</h2>

      <div className="category-buttons">

        {
          categories.map((cat) => (

            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={
                selectedCategory === cat
                  ? "active"
                  : ""
              }
            >
              {cat}
            </button>

          ))
        }

      </div>

      <div className="product-grid">

        {
          filteredProducts.length > 0 ?

            filteredProducts.map((item) => (

              <div
                className="product-card"
                key={item.id}
              >

                <button
                  className="wishlist-btn"
                  onClick={() => toggleWishlist(item)}
                >

                  {
                    wishlist.find(
                      (p) => p.id === item.id
                    )
                      ? <FaHeart />
                      : <FaRegHeart />
                  }

                </button>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <h3>{item.name}</h3>

                <p>{item.category}</p>

                <h4>
                  ₹ {item.price}
                </h4>

                <button
                  onClick={() => addToCart(item)}
                >
                  Add To Cart
                </button>

              </div>

            ))

            :

            <h2 className="no-product">
              No Products Found
            </h2>

        }

      </div>

    </section>

  );

};

export default Products;