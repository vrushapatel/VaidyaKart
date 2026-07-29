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
    category: "Fashion",
    name: "Classic T-Shirt",
    price: 299,
    image: "https://images.unsplash.com/photo-1627225925683-1da7021732ea?q=80&w=687&auto=format&fit=crop?1"
  },

  {
    id: 2,
    category: "Electronics",
    name: "Smart Watch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=627&auto=format&fit=crop?2"
  },

  {
    id: 3,
    category: "Shoes",
    name: "Sports Shoes",
    price: 1999,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop?3"
  },

  {
    id: 4,
    category: "Skincare",
    name: "Face Serum",
    price: 499,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=687&auto=format&fit=crop?4"
  },

  {
    id: 5,
    category: "Fashion",
    name: "Denim Jacket",
    price: 1499,
    image: "https://images.unsplash.com/photo-1537465978529-d23b17165b3b?q=80&w=1170&auto=format&fit=crop?5"
  },

  {
    id: 6,
    category: "Electronics",
    name: "Wireless Earbuds",
    price: 1799,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?q=80&w=1074&auto=format&fit=crop?6"
  },

  {
    id: 7,
    category: "Shoes",
    name: "Formal Shoes",
    price: 1299,
    image: "https://images.unsplash.com/photo-1668069226492-508742b03147?q=80&w=1170&auto=format&fit=crop?7"
  },

  {
    id: 8,
    category: "Fashion",
    name: "Ladies Handbag",
    price: 1299,
    image: "https://images.unsplash.com/photo-1681747685985-a401c271156c?q=80&w=1170&auto=format&fit=crop?8"
  },

  {
    id: 9,
    category: "Skincare",
    name: "Moisturizer Cream",
    price: 199,
    image: "https://images.unsplash.com/photo-1638859471856-c6793be39109?q=80&w=1074&auto=format&fit=crop?9"
  },

  {
    id: 10,
    category: "Electronics",
    name: "Gaming Mouse",
    price: 799,
    image: "https://images.unsplash.com/photo-1613141412501-9012977f1969?q=80&w=1170&auto=format&fit=crop?10"
  },

  {
    id: 11,
    category: "Fashion",
    name: "Laptop Bag",
    price: 999,
    image: "https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce?q=80&w=1074&auto=format&fit=crop?11"
  },

  {
    id: 12,
    category: "Shoes",
    name: "School Shoes",
    price: 1099,
    image: "https://plus.unsplash.com/premium_photo-1723773743655-71e6b5961089?q=80&w=1170&auto=format&fit=crop?12"
  },

  {
    id: 13,
    category: "Skincare",
    name: "Sunscreen Lotion",
    price: 799,
    image: "https://images.unsplash.com/photo-1698912198250-fb0c5ecccc6e?q=80&w=687&auto=format&fit=crop?13"
  },

  {
    id: 14,
    category: "Fashion",
    name: "Cotton Hoodie",
    price: 1399,
    image: "https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?q=80&w=687&auto=format&fit=crop?14"
  },

  {
    id: 15,
    category: "Electronics",
    name: "Bluetooth Speaker",
    price: 1599,
    image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=1074&auto=format&fit=crop?15"
  },

  {
    id: 16,
    category: "Shoes",
    name: "Ladies Shoes",
    price: 1399,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=687&auto=format&fit=crop?16"
  },
  {
    id: 17,
    category: "Skincare",
    name: "Glow Face Wash",
    price: 299,
    image: "https://images.unsplash.com/photo-1760488029475-41ff1eaa904b?q=80&w=860&auto=format&fit=crop?17"
  },
  {
    id: 18,
    category: "Skincare",
    name: "Hair Serum",
    price: 499,
    image: "https://images.unsplash.com/photo-1779556507342-7951f64a3b86?q=80&w=764&auto=format&fit=crop?18"
  },
  {
  id: 19,
  category: "Stationary",
  name: "Premium Notebook",
  price: 120,
  image: "https://bbag.in/cdn/shop/files/71GrQru0ObL._SX466.jpg?v=1701519940"
},
{
  id: 20,
  category: "Kids",
  name: "Kids Toy Car",
  price: 220,
  image: "https://m.media-amazon.com/images/I/817gqdT-a6L._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 21,
  category: "Home & Kitchen",
  name: "Ceramic Coffee Mug",
  price: 299,
  image: "https://down-sg.img.susercontent.com/file/fd8ea7eb5f2c4de379b0fa70558d09f7"
},
{
  id: 22,
  category: "Kids",
  name: "Kids Backpack",
  price: 699,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOPMMPG-78uLNzdt5tsS2gmqp-lxcIHindH7s3xl0QA&s=10"
},
{
  id: 23,
  category: "Stationary",
  name: "Color Pencil Set",
  price: 55,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiN9fenlgo8as-EOAwaqpxGXC8cpHfOERRDzSUxKYSig&s=10"
},
{
  id: 24,
  category: "Home & Kitchen",
  name: "Kitchen Storage Box",
  price: 2299,
  image: "https://nestasia.in/cdn/shop/files/KitchenRackWithGlassJars_1.jpg?v=1724932274&width=2000"
},
{
  id: 25,
  category: "Kids",
  name: "Kids Puzzle Game",
  price: 299,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQ1V0kkRCQlxbI6kJ9ZlLfqoseQvQY6HXIVgUj79w-g&s=10"
},
{
  id: 26,
  category: "Stationary",
  name: "Gel Pen Pack",
  price: 110,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebYZn2GJKbgWivqH7ubBTzfX1aHwKkX4auK5txhXiRrD1oETKv0cS4ZxY&s=10"
},
{
  id: 27,
  category: "Home & Kitchen",
  name: "Non Stick Pan",
  price: 410,
  image: "https://www.milton.in/cdn/shop/files/71h9Q8NNI8L._SL1500.jpg?v=1736933839"
},
{
  id: 28,
  category: "Kids",
  name: "Soft Teddy Bear",
  price: 899,
  image: "https://samstoy.in/cdn/shop/files/3-ft-huggable-teddy-bear-white-1.webp?v=1752154484"
},
{
  id: 29,
  category: "Stationary",
  name: "Office Diary",
  price: 189,
  image: "https://4.imimg.com/data4/RD/MO/MY-28603791/1-500x500.jpg"
},
{
  id: 30,
  category: "Home & Kitchen",
  name: "Glass Water Bottle",
  price: 399,
  image: "https://myborosil.com/cdn/shop/files/my-borosil-borosilicate-glass-bottles-550-ml-crysto-slim-glass-bottle-ss-lid-32349057581194_928a7f95-fd9a-4a94-b3e2-6260a57f194e.jpg?v=1720073115&width=990"
},
{
  id: 31,
  category: "Kids",
  name: "Kids Drawing Kit",
  price: 499,
  image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/art-set/v/k/b/colours-set-for-kids-drawing-kit-46-pc-color-tools-art-original-imahkqadhzunteg6.jpeg?q=70"
},
{
  id: 32,
  category: "Stationary",
  name: "Sticky Notes Pack",
  price: 49,
  image: "https://static1.industrybuying.com/products/office-supplies/stationary-items/sticky-notes/OFF.STI.625306703_1708409928518.webp"
},
{
  id: 33,
  category: "Home & Kitchen",
  name: "Wooden Serving Tray",
  price: 599,
  image: "https://media.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000014774570-1000014774569_01-2100.jpg"
},
{
  id: 34,
  category: "Kids",
  name: "Kids Building Blocks",
  price: 299,
  image: "https://annachy-prod-assets.annachy.com/pims/products-v1/023558MUL_1.png"
},
{
  id: 35,
  category: "Stationary",
  name: "Sketch Book",
  price: 199,
  image: "https://www.store67.in/cdn/shop/files/A4front.png?v=1694071907"
},
{
  id: 36,
  category: "Home & Kitchen",
  name: "Electric Kettle",
  price: 1299,
  image: "https://m.media-amazon.com/images/I/713MGnrit2S._AC_UF350,350_QL80_.jpg"
},
{
  id: 37,
  category: "Kids",
  name: "Kids Learning Tablet",
  price: 1499,
  image: "https://image.made-in-china.com/155f0j00ObPocIvnQdqH/10-1-Inch-2-16GB-Children-Education-Kids-Learning-Tablet.webp"
},
{
  id: 38,
  category: "Stationary",
  name: "Marker Set",
  price: 149,
  image: "https://sitaramstationers.com/wp-content/uploads/2022/08/faber-castell-set-of-5-600x600.jpg"
},
{
  id: 39,
  category: "Home & Kitchen",
  name: "Dinner Plate Set",
  price: 1299,
  image: "https://www.earthstore.in/cdn/shop/files/1_b0e743fc-2656-4952-964a-edcd88325315.jpg?crop=center&height=800&v=1775553874&width=800"
},
{
  id: 40,
  category: "Kids",
  name: "Kids Sports Ball",
  price: 179,
  image: "https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?q=80&w=749&auto=format&fit=crop"
},
{
  id: 41,
  category: "Stationary",
  name: "Calculator",
  price: 199,
  image: "https://images.unsplash.com/photo-1668930185267-1f3c19851b5b?q=80&w=687&auto=format&fit=crop"
},
{
  id: 42,
  category: "Home & Kitchen",
  name: "Home Lamp",
  price: 499,
  image: "https://plus.unsplash.com/premium_photo-1706072613979-e2bddb367f41?q=80&w=764&auto=format&fit=crop"
},
{
  id: 43,
  category: "Kids",
  name: "Kids Story Book",
  price: 199,
  image: "https://images.unsplash.com/photo-1631977807492-75bf1dd900b2?q=80&w=1170&auto=format&fit=crop"
},
{
  id: 44,
  category: "Stationary",
  name: "File Folder",
  price: 100,
  image: "https://gloryshop.in/wp-content/uploads/2025/07/Button-file.png"
},
{
  id: 45,
  category: "Home & Kitchen",
  name: "Kitchen Knife Set",
  price: 699,
  image: "https://images.unsplash.com/photo-1593618229012-8aaad1cfefc3?q=80&w=880&auto=format&fit=crop"
},
{
  id: 46,
  category: "Kids",
  name: "Kids Watch",
  price: 599,
  image: "https://images.unsplash.com/photo-1669906858295-66661469bfb4?q=80&w=1170&auto=format&fit=crop"
},
{
  id: 47,
  category: "Stationary",
  name: "Stapler Set",
  price: 199,
  image: "https://images.unsplash.com/photo-1596213812335-ac67c2d653d4?q=80&w=1170&auto=format&fit=crop"
},
{
  id: 48,
  category: "Home & Kitchen",
  name: "Mixer Grinder",
  price: 1599,
  image: "https://plus.unsplash.com/premium_photo-1718043036192-b874bb43c64f?q=80&w=1170&auto=format&fit=crop"
},
{
  id: 49,
  category: "Kids",
  name: "Kids School Shoes",
  price: 899,
  image: "https://images.unsplash.com/photo-1653868249857-c95d5a3f6109?q=80&w=764&auto=format&fit=crop"
},
{
  id: 50,
  category: "Home & Kitchen",
  name: "Bedsheet Set",
  price: 999,
  image: "https://images.unsplash.com/photo-1653049834152-6610f3397cf9?q=80&w=1165&auto=format&fit=crop"
},
{
  id: 51,
  category: "Coffee",
  brand: "Nescafe",
  name: "Nescafe Classic Coffee(50g)",
  price: 246,
  image: "https://gharstuff.com/wp-content/uploads/2019/05/Nescafe-Classic-Coffee-Jar-50g-1.jpg"
},
{
  id: 52,
  category: "Coffee",
  brand: "Bru",
  name: "Bru Instant Coffee(100g)",
  price:440,
  image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbn4iPczWa3E_NqpknhYz5GQjhbQPBtvaC_tJs-1UyG8CmS6vBVzDbEpwaI5peky3FR2Ko8XlenZoJnPZcRa_BLneUHnlz7ErReV0WzrbpoiTVMthlqd2iJQ"
},
{
  id: 53,
  category: "Coffee",
  brand: "Tata Coffee",
  name: "Tata Coffee Grand(50g)",
  price: 146,
  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSX_kOo3o0O0vPJcyB5yqM7CMCRSFt2zQaUzm6eCUraCcBnsSOCZ_VtAuTQW-cNq0luRcqRgdhCynWSkyAGXxwDk5cwB4YtJSRxGy5p4HG_RgFGWVSNmuAy"
},
{
  id: 54,
  category: "Coffee",
  brand: "Tim Hortons",
  name: "Tim Hortons Original Coffee(340g)",
  price: 2850,
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLBQR3mRuInfUNJHLGpO5-41TfFnBpjlcTGtmmNEkNTVPpUKTPUp1_EB_m5tlQJu962fyNf0_tihqo_fjeDjnHpGs_QOuGTnAtXm21SboL5fmMysvoUGmYnA"
},
{
  id: 55,
  category: "Coffee",
  brand: "Nescafe",
  name: "Nescafe Gold Premium Coffee(55g)",
  price: 399,
  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSBiZMLgo0w0-BSHVp4D8AhOnAf_ZylLHw40_EDttU-jjHR6u4MiqF_roQ8EKQR_w0wymeaE2R8p-tKG2MPrD9CuFASsf035fF6EOcmam4"
},
{
  id: 56,
  category: "Coffee",
  brand: "Bru",
  name: "Bru Gold Coffee(55g)",
  price: 270,
  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwpiNfCnR26QJQHNiTUZDRF0Ka08WUvpmPuHcrD4LggeyucYg_IMbNheY5ycEG_nD6rBnze1vOC_WdeTx-QWGS2oxLnvVfnFY2y-lVH27u_BZk4DGAJPv2TQ"
},
{
  id: 57,
  category: "Coffee",
  brand: "Tata Coffee",
  name: "TATA Coffee Grand Premium Instant Coffee(45g)",
  price: 170,
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_8wpa--9K-tm4Ue8gHK3r8oeGRqHy1ayoHy-vEkU_QM6JbqAEEWJmz-27qHzhRRz01JLTLkJt0CtWN37AP0ZCFwLBWH_fxZCs056OkRCQqLN1IUTky_Dg"
},
{
  id: 58,
  category: "Coffee",
  brand: "Tim Hortons",
  name: "Tim Hortons Dark Roast Coffee(340g)",
  price: 2100,
  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSCByMh-2-wSAJ_Id3lA1rZzowmdgus-ntKXMg09DQakcbyPuxiAxCM6KJ_EhBjdh0p-H9S6ugXAe_q7h_LLaR7_O5bgUxYtTqs1KJp4K0gtCtib4OArxwa"
},
{
  id: 59,
  category: "Coffee",
  brand: "Nescafe",
  name: "Nescafe Cold Coffee Mix(140g)",
  price: 120,
  image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnibtmhT35GeAcWmEabrltsQc5rCC0jnK4fqcqjw5S7Rdg9my7Njk4HGNciU0F6QnQEphHzYJ38AYV4zAmm1HRRoWF6x7ziQ"
},
{
  id: 60,
  category: "Coffee",
  brand: "Bru",
  name: "Bru Instant Coffee Pack(10g)",
  price: 10,
  image: "https://cdn.dotpe.in/longtail/store-items/1087846/6q06O0uf.webp"
},
{
  id: 61,
  category: "Tea",
  brand: "Tata Tea",
  name: "Tata Tea Agni(1Kg)",
  price: 200,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVUUJBIeje7QaUakMBqYjuPUFk4mAsnUGF9_Z-K90dMw&s=10"
},
{
  id: 62,
  category: "Tea",
  brand: "Wagh Bakri",
  name: "Wagh Bakri Premium Leaf Tea(500g)",
  price: 295,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_L8rBFBXmgDDXud-R-G1Oc64P8VVslvlSivWOGj68Fg&s=10",
},
{
  id: 63,
  category: "Tea",
  brand: "Taj Mahal",
  name: "Taj Mahal Tea(500g)",
  price: 304,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtx2ToQx--osH9_ZqbXJSKuRXb4n8Ytzzoj9luMo3jiA&s=10"
}

];
const allProducts = products;
 // CATEGORY BUTTONS

const categories = [
  "All",
  "Fever",
  "Pain Relief",
  "Fever & Pain",
  "Fever & Pain Relief",
  "Cold & Cough",
  "Vitamins",
  "Vitamins & Supplements",
  "Health Supplements",
  "Antibiotics",
  "Allergy Relief",
  "Digestive Care",
  "Healthcare",
  "Healthcare Devices",
  "Medical Devices",
  "Personal Care",
  "Skin Care"
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