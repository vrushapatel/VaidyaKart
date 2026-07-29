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
    image: "https://texinkart.com/cdn/shop/products/Dolo-650-Tablets---15-Tablets-Micro-Labs-1667089226.jpg?v=1747710967",
    price: 35,
    info: {
      usedFor: "Fever, headache and mild to moderate body pain relief.",
      dosageForm: "Oral Tablet",
      storage: "Store below 25°C in a cool and dry place.",
      precautions: "Read the label carefully before use.",
      sideEffects: "May cause nausea or stomach discomfort.",
      warning: "Do not exceed the recommended dose.",
      doctorAdvice: "Take only as prescribed by your doctor.",
      keepAway: "Keep out of reach of children."
    }
  },
  {
    id: 2,
    name: "Paracetamol 650",
    category: "Fever & Pain",
    image: "https://www.stelonbiotech.com/wp-content/uploads/2022/04/PYREMUST-650-TAB.jpg",
    price: 28,
    info: {
      usedFor: "Relief from fever, headache and muscle pain.",
      dosageForm: "Oral Tablet",
      storage: "Store below 25°C away from moisture.",
      precautions: "Avoid overdose and follow label instructions.",
      sideEffects: "Nausea, skin rash (rare).",
      warning: "Do not combine with other paracetamol medicines.",
      doctorAdvice: "Use only under medical guidance.",
      keepAway: "Keep out of reach of children."
    }
  },
  {
    id: 3,
    name: "Crocin Advance",
    category: "Fever & Pain",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTOjFxaozbj2JII5VkxcJXR6Ut7Rgxmj4XiSTcKvsEDET4LkmFwFEBV_I&s=10",
    price: 800,
    info: {
      usedFor: "Temporary relief from fever and body pain.",
      dosageForm: "Oral Tablet",
      storage: "Store in a cool, dry place below 25°C.",
      precautions: "Use only as directed.",
      sideEffects: "Mild nausea or dizziness.",
      warning: "Avoid taking more than the prescribed amount.",
      doctorAdvice: "Consult a doctor if symptoms persist.",
      keepAway: "Keep out of reach of children."
    }
  },
  {
    id: 4,
    name: "Combiflam",
    category: "Fever & Pain",
    image: "https://cdn01.pharmeasy.in/dam/products_otc/I14502/combiflam-ms-tube-of-30gm-cream-6.01-1750842489.jpg?dim=768x585&q=100",
    price: 131,
    info: {
      usedFor: "Pain, inflammation and fever relief.",
      dosageForm: "Tablet / Topical Cream",
      storage: "Keep below 25°C.",
      precautions: "Avoid use on broken skin (cream).",
      sideEffects: "Skin irritation or stomach discomfort.",
      warning: "Do not use for prolonged periods without medical advice.",
      doctorAdvice: "Use as directed by your doctor.",
      keepAway: "Keep away from children."
    }
  },
  {
    id: 5,
    name: "Ibuprofen",
    category: "Fever & Pain",
    image: "https://i0.wp.com/janaushadhistore.online/wp-content/uploads/2023/06/1000215293-scaled.jpg?fit=2486%2C2560&ssl=1",
    price: 10,
    info: {
      usedFor: "Relief from pain, swelling and fever.",
      dosageForm: "Oral Tablet",
      storage: "Store in a dry place below 25°C.",
      precautions: "Read the instructions before use.",
      sideEffects: "Acidity, nausea or stomach irritation.",
      warning: "Avoid prolonged self-medication.",
      doctorAdvice: "Consult your physician before use.",
      keepAway: "Keep out of reach of children."
    }
  },
  {
    id: 6,
    name: "Benadryl Syrup (150 ml)",
    category: "Cold & Cough",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWC-e2pjFx2a27PS-YqbpkdPJrwlOUCW5GWCt6xMXrZg&s=10",
    price: 141,
    info: {
      usedFor: "Relief from cough, throat irritation and cold symptoms.",
      dosageForm: "Oral Syrup",
      storage: "Store below 25°C and keep bottle tightly closed.",
      precautions: "Shake well before use.",
      sideEffects: "Sleepiness or dizziness.",
      warning: "Avoid driving after taking if drowsy.",
      doctorAdvice: "Use according to doctor's advice.",
      keepAway: "Keep away from children."
    }
  },
  {
    id: 7,
    name: "Ascoril LS (100 ml)",
    category: "Cold & Cough",
    image: "https://m.media-amazon.com/images/I/81Py0h1vejL._SX522_.jpg",
    price: 123,
    info: {
      usedFor: "Wet cough with mucus and chest congestion.",
      dosageForm: "Oral Syrup",
      storage: "Store in a cool and dry place.",
      precautions: "Shake well before each use.",
      sideEffects: "Dizziness or mild stomach upset.",
      warning: "Use only as directed.",
      doctorAdvice: "Consult a healthcare professional before use.",
      keepAway: "Keep out of reach of children."
    }
  },
  {
    id: 8,
    name: "Sinarest Tablet (15 Tablets)",
    category: "Cold & Cough",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7N7ycWgcyD2Dc404sy5vVwYHHyRqoo3md_sxU2aqLQ&s=10",
    price: 80,
    info: {
      usedFor: "Cold, blocked nose, sneezing and fever.",
      dosageForm: "Oral Tablet",
      storage: "Keep below 25°C.",
      precautions: "Read all instructions before use.",
      sideEffects: "Drowsiness or dry mouth.",
      warning: "Avoid alcohol while taking this medicine.",
      doctorAdvice: "Take under medical supervision.",
      keepAway: "Keep away from children."
    }
  },
  {
    id: 9,
    name: "Cetirizine (10 Tablets)",
    category: "Cold & Cough",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMRMHRYS0CsR5W_WgzPsNN-1iCpeUG9M_0upmFkhFCg&s=10",
    price: 30,
    info: {
      usedFor: "Relief from allergies, sneezing and itching.",
      dosageForm: "Oral Tablet",
      storage: "Store below 25°C.",
      precautions: "Follow label instructions carefully.",
      sideEffects: "Drowsiness or dry mouth.",
      warning: "Avoid driving if you feel sleepy.",
      doctorAdvice: "Consult a doctor if symptoms continue.",
      keepAway: "Keep out of reach of children."
    }
  },
  {
    id: 10,
    name: "Vicks VapoRub",
    category: "Cold & Cough",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcREKKM7httHwCo4uzvqB1ORbHJNqWM9nRTQ5gYD2Ut8oAvk4eEOURYgAuxg3LA9P1tZv4uY4b5AvftRxRv-oL6ObTZVVIRn",
    price: 130,
    info: {
      usedFor: "Temporary relief from cough, nasal congestion and muscle pain.",
      dosageForm: "Topical Ointment",
      storage: "Store at room temperature away from heat.",
      precautions: "For external use only.",
      sideEffects: "Mild skin irritation in sensitive users.",
      warning: "Avoid contact with eyes and mouth.",
      doctorAdvice: "Use as directed on the label.",
      keepAway: "Keep out of reach of children."
    }
  },
  {
  id: 11,
  name: "Vitamin C Tablets",
  category: "Vitamins & Supplements",
  image: "https://m.media-amazon.com/images/I/61Q-+KR3WcL._AC_UF1000,1000_QL80_.jpg",
  price: 249,
  info: {
    usedFor: "Supports immunity, skin health and antioxidant protection.",
    dosageForm: "Oral Tablet",
    storage: "Store below 25°C in a cool and dry place.",
    precautions: "Read the label before use.",
    sideEffects: "May cause mild stomach discomfort.",
    warning: "Do not exceed the recommended daily intake.",
    doctorAdvice: "Use as advised by your healthcare professional.",
    keepAway: "Keep out of reach of children."
  }
},
{
  id: 12,
  name: "Vitamin D3 (30 Tablets)",
  category: "Vitamins & Supplements",
  image: "https://vitabiotics.in/cdn/shop/files/Ultra-D3-1000-Front-View_c99c2d8c-af36-477e-8531-4bc170dc92bc.png?crop=center&height=1680&v=1776930183&width=1680",
  price: 123,
  info: {
    usedFor: "Supports bone strength, calcium absorption and immunity.",
    dosageForm: "Oral Tablet",
    storage: "Store in a cool, dry place below 25°C.",
    precautions: "Follow the dosage mentioned on the label.",
    sideEffects: "Rarely may cause stomach upset.",
    warning: "Avoid excessive intake unless advised by a doctor.",
    doctorAdvice: "Consult a healthcare professional before long-term use.",
    keepAway: "Keep out of reach of children."
  }
},
{
  id: 13,
  name: "Multivitamin Capsules (120 Capsules)",
  category: "Vitamins & Supplements",
  image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQaSlCpAix32zEzlzC2sRaB12oYlcwkyDu19z6e8HStyxb3QMLejWk-CWOdLTEAp_e-3BBl_FoifbirxbCmRNIHbkN7y_zy-nGflIBKLjN9kHJcK7B3iJbMVcAQ10b7getZk8Ltc3E&usqp=CAc",
  price: 1306,
  info: {
    usedFor: "Provides essential vitamins and minerals for overall wellness.",
    dosageForm: "Capsule",
    storage: "Store below 25°C away from moisture.",
    precautions: "Use according to label instructions.",
    sideEffects: "Occasional stomach discomfort.",
    warning: "Do not use as a substitute for a balanced diet.",
    doctorAdvice: "Consult your doctor before use if you have any medical condition.",
    keepAway: "Keep out of reach of children."
  }
},
{
  id: 14,
  name: "Calcium Tablets (30 Capsules)",
  category: "Vitamins & Supplements",
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnSdX3cdoRXkT4gSICJ_NXEtOvsnpPdYPo2zbLh1OjkRAkl7pkA99wwpi-3bmVeB6bAKSY8sBmPAcG1cTr-iTjF9gvCQESxctLvfeNr4x0Sxs-aGlpY8KOZiOthsvl_GO35wpCdA&usqp=CAc",
  price: 840,
  info: {
    usedFor: "Supports healthy bones, teeth and muscle function.",
    dosageForm: "Capsule",
    storage: "Keep in a cool and dry place.",
    precautions: "Read all instructions before use.",
    sideEffects: "May cause constipation in some users.",
    warning: "Avoid excessive calcium intake.",
    doctorAdvice: "Use under medical guidance if taking other supplements.",
    keepAway: "Keep out of reach of children."
  }
},
{
  id: 15,
  name: "Omega-3 Fish Oil (60 Capsules)",
  category: "Health Supplements",
  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSiD8HUQS9JB1mwvTTQny7AI090PMlAEyZXFdYg_9VjM2A02w_YmpyX677a3ocuQ-qjYTeNwWxf1ECqoV7Jy2JSi2M8SBY3efZ4YS0YwDOT260M1Zyv-J2nsPpbrJUyasNiG8Hh3k1TkwU&usqp=CAc",
  price: 755,
  info: {
    usedFor: "Supports heart, brain and joint health.",
    dosageForm: "Soft Gel Capsule",
    storage: "Store below 25°C away from direct sunlight.",
    precautions: "Read the label carefully before use.",
    sideEffects: "May cause mild fishy aftertaste.",
    warning: "Consult your doctor if taking blood thinners.",
    doctorAdvice: "Use only as recommended.",
    keepAway: "Keep out of reach of children."
  }
},
{
  id: 16,
  name: "Biotin Tablets(60 Tablets)",
  category: "Health Supplements",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0haD6_UVYCziZ06uk3_rjaTMd-VeZfHhvXraEe_pjQ&s=10",
  price: 420,
  info: {
    usedFor: "Supports healthy hair, skin and nails.",
    dosageForm: "Oral Tablet",
    storage: "Store in a cool, dry place.",
    precautions: "Use as directed on the label.",
    sideEffects: "Rarely may cause mild stomach upset.",
    warning: "Do not exceed the recommended dosage.",
    doctorAdvice: "Consult a doctor before prolonged use.",
    keepAway: "Keep out of reach of children."
  }
},
{
  id: 17,
  name: "Protein Powder(454 g)",
  category: "Health Supplements",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYtggBQYh7TlUfH12-dw5sQR_GEAPsZT9GegNZCKvFA&s=10",
  price: 2349,
  info: {
    usedFor: "Supports muscle growth and post-workout recovery.",
    dosageForm: "Powder",
    storage: "Store in a cool, dry place with lid tightly closed.",
    precautions: "Mix only as instructed.",
    sideEffects: "May cause bloating in sensitive individuals.",
    warning: "Not intended to replace regular meals.",
    doctorAdvice: "Consult a healthcare professional if you have kidney issues.",
    keepAway: "Keep out of reach of children."
  }
},
{
  id: 18,
  name: "Revital H Capsules(60 Capsules)",
  category: "Health Supplements",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLftZRUzravbpXUM4wZbALTH0m3NT7pn_0E-JOwi5uCQ&s=10",
  price: 464,
  info: {
    usedFor: "Helps improve energy, stamina and overall vitality.",
    dosageForm: "Capsule",
    storage: "Keep below 25°C in a dry place.",
    precautions: "Read the instructions before use.",
    sideEffects: "Occasional stomach discomfort.",
    warning: "Do not exceed the recommended intake.",
    doctorAdvice: "Use as advised by your healthcare provider.",
    keepAway: "Keep out of reach of children."
  }
},
{
  id: 19,
  name: "Zincovit Tablets(10 Tablets)",
  category: "Health Supplements",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WGZEHQ-z7XhB5x_zaErUrTPyW4kyYemriIgJ3aURjw&s=10",
  price: 140,
  info: {
    usedFor: "Supports immunity and nutritional health.",
    dosageForm: "Oral Tablet",
    storage: "Store in a cool, dry place below 25°C.",
    precautions: "Follow label directions carefully.",
    sideEffects: "May cause mild nausea.",
    warning: "Do not take more than the recommended amount.",
    doctorAdvice: "Consult a doctor before regular use.",
    keepAway: "Keep out of reach of children."
  }
},
{
  id: 20,
  name: "Shelcal 500",
  category: "Health Supplements",
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTLXDeynRo8rDoB_8_gazR1KnzYo-aFGEE6b9gUCQhqim8Fg9Bu8P2sS4ckMmg90B-WZJQiN81NM2s4ScBZujBqrcpM0b6u44Ez1BujIw4&usqp=CAc",
  price: 135,
  info: {
    usedFor: "Supports bone health and calcium supplementation.",
    dosageForm: "Oral Tablet",
    storage: "Store below 25°C in a dry place.",
    precautions: "Read the product label before use.",
    sideEffects: "May cause constipation in some users.",
    warning: "Avoid taking more than the recommended dose.",
    doctorAdvice: "Use as advised by your physician.",
    keepAway: "Keep out of reach of children."
  }
},
{
  id: 21,
  name: "Digene Gel(200 ml)",
  category: "Digestive Care",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiI_72rIcpcHhAQKLCZKYsYNcPkYBRtoMvpUQjgXr_RQ&s=10",
  price: 161,
  usage: "1-2 teaspoons after meals or at bedtime as needed.",
  details: [
    "✔ Used for: Acidity, Heartburn & Indigestion",
    "✔ Route: Oral Gel",
    "✔ Dosage: 1-2 times daily after meals",
    "✔ Storage: Store below 25°C",
    "✔ Note: Shake well before use."
  ]
},
{
  id: 22,
  name: "Eno Fruit Salt",
  category: "Digestive Care",
  image: "http://pharmswift.in/wp-content/uploads/2025/07/img_011.png",
  price: 10,
  usage: "1 sachet after meals when acidity occurs.",
  details: [
    "✔ Used for: Acidity & Indigestion",
    "✔ Route: Oral Powder",
    "✔ Dosage: Once after meals if required",
    "✔ Storage: Keep in a cool & dry place",
    "✔ Note: Dissolve in water before drinking."
  ]
},
{
  id: 23,
  name: "ORS Powder",
  category: "Digestive Care",
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQg8wwxIQL87_KIKywuDBsxYt4H70H3gbzogVKfLUfH7xL1BFamwP2DbGIN0HlO1OUAjAA1zzFZ9s2YaqWB4huvt2AnA09Yn8dBVZHjgCh0xk4Z0psoDovRqg&usqp=CAc",
  price: 15,
  usage: "Sip frequently throughout the day after loose motions.",
  details: [
    "✔ Used for: Dehydration & Diarrhea",
    "✔ Route: Oral Solution",
    "✔ Dosage: As directed after each loose stool",
    "✔ Storage: Use prepared solution within 24 hours",
    "✔ Note: Mix with clean drinking water only."
  ]
},
{
  id: 24,
  name: "Pantoprazole",
  category: "Digestive Care",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhouHldUSkJ2jnH-EhbDGdIGD0zzMYKsqwQzdsIEIUZQ&s=10",
  price: 1820,
  usage: "Take once daily 30 minutes before breakfast.",
  details: [
    "✔ Used for: Acidity, GERD & Stomach Ulcers",
    "✔ Route: Oral Tablet",
    "✔ Dosage: Once daily before breakfast",
    "✔ Storage: Store below 25°C",
    "✔ Note: Swallow whole without crushing."
  ]
},
{
  id: 25,
  name: "Dettol Antiseptic(60 ml)",
  category: "Personal Care",
  image: "https://dukaan.b-cdn.net/700x700/webp/master/products/dettol-antiseptic-liquid-1l.jpg",
  price: 30,
  usedFor: "Wound cleaning and personal hygiene",
  route: "External Liquid",
  storage: "Store below 30°C",
  prescription: "No",
  manufacturer: "Reckitt",
  pack: "60 ml",
  expiry: "24 Months",
  note: "For external use only. Do not swallow."
},
{
  id: 26,
  name: "Savlon Antiseptic(100 ml)",
  category: "Personal Care",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKVqc4ylqJd3kY9Hcwrsi_QWUl3XWUQ31Qsre2cxKNQ&s=10",
  price: 52,
  usedFor: "Cuts, wounds and skin disinfection",
  route: "External Liquid",
  storage: "Store below 30°C",
  prescription: "No",
  manufacturer: "ITC",
  pack: "100 ml",
  expiry: "24 Months",
  note: "Avoid contact with eyes."
},
{
  id: 27,
  name: "Hand Sanitizer(50 ml)",
  category: "Personal Care",
  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJgJuqZByAALDt7d9KZVdyCa7sfnTywpT79hmhx3X7O6JCnYhgmMG4PAQx-RdiI0Dy1nC4dkBjNZzaMUbS1O1FM4_hS0WqXXJsHSu0Bj0Xvmc5DmqtfXBbNdRqB2ziIvL3s7bLTgM&usqp=CAc",
  price: 35,
  usedFor: "Hand hygiene and germ protection",
  route: "External Gel",
  storage: "Store below 30°C",
  prescription: "No",
  manufacturer: "Lifebuoy",
  pack: "50 ml",
  expiry: "24 Months",
  note: "Keep away from flames."
},
{
  id: 28,
  name: "Band Aid Strips",
  category: "Personal Care",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqannaMwThJWyHDcxnwveSgaK5mZGiHJv4A0z6jx7hqQ&s=10",
  price: 178,
  usedFor: "Minor cuts and wounds",
  route: "External Dressing",
  storage: "Store in a dry place",
  prescription: "No",
  manufacturer: "Johnson & Johnson",
  pack: "100 Strips",
  expiry: "5 Years",
  note: "Apply only on clean and dry skin."
},
{
  id: 29,
  name: "Cotton Roll",
  category: "Personal Care",
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRL3fCv-N57diAcJaU83t91ULYFZ8YxcTSMWJnA2-xMmlYIByaJZe4xJXow9x20ufYurJvcfI9nUJwD1kHezCDZW6p1qoIOJmac8oU9hjBzpkJ5aMtFx4Wq",
  price: 50,
  usedFor: "Wound cleaning and dressing",
  route: "External Use",
  storage: "Store in a clean, dry place",
  prescription: "No",
  manufacturer: "Romsons",
  pack: "100 g",
  expiry: "5 Years",
  note: "Use sterile cotton whenever possible."
},
{
  id: 30,
  name: "Himalaya Neem Face Wash(200 ml)",
  category: "Skin Care",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqnrGaVAyEocIVZL52ldQO-fXY3M0qPZvlS1uzzI8fQ&s=10",
  price: 299,
  usedFor: "Acne control and daily face cleansing",
  route: "Face Wash",
  storage: "Store below 30°C",
  prescription: "No",
  manufacturer: "Himalaya",
  pack: "200 ml",
  expiry: "36 Months",
  note: "Avoid direct contact with eyes."
},
{
  id: 31,
  name: "Mamaearth Vitamin C Serum(10 ml)",
  category: "Skin Care",
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQa0l0Abx1AGs5kk1-YaEK4gUFSMbStXRlPgmf9MQmxeHSMExCuXb-Jl2LWaJhsoHjx3YtQPS_rWe9TboAjo9221dGhmzN4baOpL9x4f-ZmX9HNo1bfyUTwmE",
  price: 196,
  usedFor: "Skin brightening and glow",
  route: "External Serum",
  storage: "Store below 25°C",
  prescription: "No",
  manufacturer: "Mamaearth",
  pack: "10 ml",
  expiry: "24 Months",
  note: "Use sunscreen during daytime."
},
{
  id: 32,
  name: "Cetaphil Gentle Cleanser(125 ml)",
  category: "Skin Care",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstRWGO2sXKwm8N37StRTT6NCAODMIqrivV9BBQNfsBA&s=10",
  price: 390,
  usedFor: "Gentle cleansing for sensitive skin",
  route: "Face Cleanser",
  storage: "Store below 30°C",
  prescription: "No",
  manufacturer: "Galderma",
  pack: "125 ml",
  expiry: "36 Months",
  note: "Suitable for all skin types."
},
{
  id: 33,
  name: "Boroline Cream",
  category: "Skin Care",
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTDpMzoOZTC_WW9rAaaXziRlaU9tQxIqGIOuAbr8BBQ9fqyS8CjNhikkxmI6INeLeY6G4EJBJRidDSMbD1g7kqoJjpWh51iL1in0lS8Z2WV5Af7ICIKsdovgQo2rJA0T6Xgy__ZkDIdw6U&usqp=CAc",
  price: 189,
  usedFor: "Dry skin, cracks and minor cuts",
  route: "Topical Cream",
  storage: "Store below 30°C",
  prescription: "No",
  manufacturer: "GD Pharmaceuticals",
  pack: "20 g",
  expiry: "36 Months",
  note: "For external use only."
},
{
  id: 34,
  name: "Digital Thermometer",
  category: "Medical Devices",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHT9RxXkzX9oJ6_JPCfnXDh0lSLe-RIQasa0TiJlhRA&s=10",
  price: 145,
  usedFor: "Body temperature monitoring",
  route: "Digital Device",
  storage: "Store in protective case",
  prescription: "No",
  manufacturer: "Dr. Morepen",
  pack: "1 Unit",
  expiry: "5 Years",
  note: "Clean before and after every use."
},
{
  id: 35,
  name: "Blood Pressure Monitor",
  category: "Medical Devices",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2OFLNELr4pP9JWabyWkxPMZDp3dhl4wvaSpQamdcCg&s=10",
  price: 999,
  usedFor: "Blood pressure monitoring",
  route: "Digital Device",
  storage: "Keep in a dry place",
  prescription: "No",
  manufacturer: "Omron",
  pack: "1 Unit",
  expiry: "5 Years",
  note: "Sit relaxed before measuring."
},
{
  id: 36,
  name: "Pulse Oximeter",
  category: "Medical Devices",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkoUVw6pnhQw9ghV1Osjy0n2F4V7THzQc_RS3vmtBB4A&s=10",
  price: 477,
  usedFor: "Oxygen saturation monitoring",
  route: "Digital Device",
  storage: "Store in a dry place",
  prescription: "No",
  manufacturer: "Dr. Trust",
  pack: "1 Unit",
  expiry: "5 Years",
  note: "Keep finger still during reading."
},
{
  id: 37,
  name: "Glucometer",
  category: "Medical Devices",
  image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTuw9hMzS6t9PN8hDgn0OR5wlkvXkeAvSSEpvsrqU2cghfD6NwhUTN7hJGY9iqidXppQCu6dTvbsy1N-K1vxSjsA0wXgWl4JsIKHS7bqYYtX59ELJlu701Scw",
  price: 755,
  usedFor: "Blood glucose monitoring",
  route: "Digital Device",
  storage: "Keep strips sealed",
  prescription: "No",
  manufacturer: "Accu-Chek",
  pack: "1 Kit",
  expiry: "5 Years",
  note: "Use a fresh lancet every time."
},
{
  id: 38,
  name: "Hot Water Bag",
  category: "Healthcare Devices",
  image: "https://rukminim2.flixcart.com/image/1500/1500/xif0q/hot-water-bag/e/a/m/hot-water-bag-8906151140706-for-pain-relief-and-cramps-tata-1mg-original-imahbj22vxe2b2hy.jpeg",
  price: 328,
  usedFor: "Pain relief and muscle cramps",
  route: "External Use",
  storage: "Empty after use",
  prescription: "No",
  manufacturer: "Tata 1mg",
  pack: "1 Unit",
  expiry: "3 Years",
  note: "Do not fill with boiling water."
},
{
  id: 39,
  name: "Steam Vaporizer",
  category: "Healthcare Devices",
  image: "https://rukminim2.flixcart.com/image/1500/1500/kikluvk0-0/vaporizer/i/t/f/vp-06-vp-03-dr-morepen-original-imafyc2rhhwp2m4y.jpeg",
  price: 280,
  usedFor: "Cold and nasal congestion",
  route: "Steam Inhalation Device",
  storage: "Empty water after use",
  prescription: "No",
  manufacturer: "Dr. Morepen",
  pack: "1 Unit",
  expiry: "3 Years",
  note: "Avoid direct contact with hot steam."
},
{
  id: 40,
  name: "Heating Pad",
  category: "Healthcare Devices",
  image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSpss41NumXkkwpPG1hg3ACu7HMUxI9qpuMh0r2gkj8LpnGo7vlnBYEqkNtpRCzrWh5oFWsahNeMP5P7yUqLX-bb5K7nDKEPkuQjxldBhADRCqpOi8Vwjk5",
  price: 390,
  usedFor: "Back pain and muscle relaxation",
  route: "Electric Heating Pad",
  storage: "Keep dry after use",
  prescription: "No",
  manufacturer: "Dr. Trust",
  pack: "1 Unit",
  expiry: "3 Years",
  note: "Do not sleep while using."
},
{
  id: 41,
  name: "Adult Face Mask (Pack of 10)",
  category: "Healthcare Devices",
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRC7qsI1p2YhW6eR_GR6Qe-ALwT8AtzVBqE6qbOuOBbPEeVDDc5bo0T79gK8M3qVWshNqHkpr05BfVldN9Mdc2e5aaLCUbf",
  price: 63,
  usedFor: "Protection from dust and germs",
  route: "Face Mask",
  storage: "Store in a clean, dry place",
  prescription: "No",
  manufacturer: "3M",
  pack: "Pack of 10",
  expiry: "5 Years",
  note: "Replace if damaged, dirty or wet."
},
{
  id: 42,
  name: "Azithromycin 500mg",
  category: "Fever & Pain",
  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsC_rxuOvKyygWZygjxkzlWD-lVTYTmC0jFCg15KquAFhySRSsdIoH3_HUftwh-9E4PANjdEpmtqw0CpiUrXlOQq4Ll0a-",
  price: 115,
  usedFor: "Bacterial infections",
  route: "Oral Tablet",
  storage: "Store below 25°C in a cool, dry place",
  prescription: "Yes",
  manufacturer: "Sun Pharma",
  pack: "3 Tablets",
  expiry: "24 Months",
  note: "Complete the full prescribed course."
},
{
  id: 43,
  name: "Aceclofenac Tablets",
  category: "Fever & Pain",
  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUjsLCqFzwkR7YBZc-TrjnOrnKBlaka42erGCDuZQEcNF-ykzmjqu8tc0tRAX_YJAE9DM0LoeLjK0crxOLujgxDOyMkl-mbQ",
  price: 94,
  usedFor: "Pain and inflammation",
  route: "Oral Tablet",
  storage: "Store below 25°C",
  prescription: "Yes",
  manufacturer: "Cipla",
  pack: "10 Tablets",
  expiry: "24 Months",
  note: "Take after meals to reduce stomach irritation."
},
{
  id: 44,
  name: "Diclofenac Gel(30 g)",
  category: "Fever & Pain",
  image: "https://storage.googleapis.com/dawaadost.appspot.com/main_images/656e9e1a-bcc3-4b3b-8dab-1619d008fab7.jpg",
  price: 59,
  usedFor: "Muscle and joint pain",
  route: "Topical Gel",
  storage: "Store below 30°C",
  prescription: "No",
  manufacturer: "Dr. Reddy's",
  pack: "30 g Tube",
  expiry: "24 Months",
  note: "For external use only. Avoid contact with eyes."
},
{
  id: 45,
  name: "Honitus Cough Syrup",
  category: "Cold & Cough",
  image: "https://m.media-amazon.com/images/I/61WTGO5ZCJL.jpg",
  price: 92,
  usedFor: "Dry and productive cough",
  route: "Oral Syrup",
  storage: "Store below 25°C",
  prescription: "No",
  manufacturer: "Dabur",
  pack: "100 ml",
  expiry: "24 Months",
  note: "Shake well before use."
},
{
  id: 46,
  name: "Alex Cough Syrup",
  category: "Cold & Cough",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRp-zX_5YjaTrt00ocOw6EVEjJWscz59rEctyD6Z3kXQ&s=10",
  price: 123,
  usedFor: "Cough and throat irritation",
  route: "Oral Syrup",
  storage: "Store below 25°C",
  prescription: "Yes",
  manufacturer: "Glenmark",
  pack: "100 ml",
  expiry: "24 Months",
  note: "May cause drowsiness."
},
{
  id: 47,
  name: "Levocetirizine",
  category: "Cold & Cough",
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgQ62w2MaH7wevRo3vGDPibbHERudBAyvwB7ug0bgU0Zp8b9JYQrJPFgQ2FL2eurgHCs_6p3FAcD43wKlAg27gZ7vYYZDCiJ7_NKwq91MgzwiJArpaeE10",
  price: 58,
  usedFor: "Allergy and sneezing",
  route: "Oral Tablet",
  storage: "Store below 25°C",
  prescription: "No",
  manufacturer: "Mankind",
  pack: "10 Tablets",
  expiry: "24 Months",
  note: "May cause mild drowsiness."
},
{
  id: 48,
  name: "Montelukast Tablets",
  category: "Cold & Cough",
  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSBdlAjy4iqmUCG-rGevLfYTwYDh5upY8fG1N1PYNXU0NZN7OyRrJN5znc0uvWyrSSVjSReXerHos-EUyzm6dNwZKuWkcDmjSep1D4QBASMQTxLdxJTRccw",
  price: 174,
  usedFor: "Asthma and allergic rhinitis",
  route: "Oral Tablet",
  storage: "Store below 25°C",
  prescription: "Yes",
  manufacturer: "Sun Pharma",
  pack: "10 Tablets",
  expiry: "24 Months",
  note: "Take at the same time each day."
},
{
  id: 49,
  name: "Zinc Tablets",
  category: "Vitamins & Supplements",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwD-XzdBJdgtz_fS74Li4b11yKnD-IBNQxGgk-x797dg&s=1",
  price: 68,
  usedFor: "Immune system support",
  route: "Oral Tablet",
  storage: "Store below 25°C",
  prescription: "No",
  manufacturer: "Himalaya",
  pack: "30 Tablets",
  expiry: "24 Months",
  note: "Take after meals."
},
{
  id: 50,
  name: "Iron Tablets(60 Tablets)",
  category: "Vitamins & Supplements",
  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQl4HyIgrag-c1b3OfCHDC7k4TYsc9tY6TXy8781yG9KPKFcjyR6fGn4V6LVkMzEgRlpjIxqDVMgKgGzNAPef0RUdMtwY3upkVtCQuwR8Mzxo2adYreRV8wtQ",
  price: 219,
  usedFor: "Iron deficiency and anemia",
  route: "Oral Tablet",
  storage: "Store below 25°C",
  prescription: "No",
  manufacturer: "Abbott",
  pack: "60 Tablets",
  expiry: "24 Months",
  note: "Vitamin C helps improve absorption."
},
{
  id: 51,
  name: "Calamine Lotion",
  category: "Skin Care",
  image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxRBuQUhiZQAi69hecpJtU69oqWZBwBRzBMhcLbosUJZFiKDQd0cPkdMkEr_jjlr3mtpTQChbVQCrD1iTw4YLe4B6Ow5Qdhx_YCEFevy5mbIt41eJhb5iaiA",
  price: 149,
  usedFor: "Skin itching and irritation",
  route: "Topical Lotion",
  storage: "Store below 30°C",
  prescription: "No",
  manufacturer: "GSK",
  pack: "100 ml",
  expiry: "24 Months",
  note: "Shake well before use."
},
{
  id: 52,
  name: "Medical Gloves",
  category: "Healthcare Devices",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSflUKNllSw5WjtFvq-PCD56BB8bfmESGMEEub-IYcw&s=10",
  price: 505,
  usedFor: "Hygiene and infection protection",
  route: "External Use",
  storage: "Store in a cool, dry place",
  prescription: "No",
  manufacturer: "Romsons",
  pack: "100 Gloves",
  expiry: "5 Years",
  note: "Single-use disposable gloves."
},
{
  id: 53,
  name: "Digital Weighing Scale",
  category: "Medical Devices",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpwY__iMvfZpSjXmGiSxF3gEzX2lzoPa-IRSJ4UBvMw&s=10",
  price: 699,
  usedFor: "Body weight monitoring",
  route: "Digital Device",
  storage: "Keep in a dry place",
  prescription: "No",
  manufacturer: "Dr. Trust",
  pack: "1 Unit",
  expiry: "3 Years",
  note: "Place on a flat surface for accurate readings."
},
{
  id: 54,
  name: "First Aid Kit",
  category: "Healthcare Devices",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRU-PxlLwPcSaGGyZCpSDjebNagnL4S0hKL8VA8A4Mhw&s=10",
  price: 450,
  usedFor: "Emergency first aid",
  route: "External Use",
  storage: "Keep in a cool, dry place",
  prescription: "No",
  manufacturer: "Lifeline",
  pack: "1 Complete Kit",
  expiry: "Check expiry of individual contents",
  note: "Replace used or expired items regularly."
}
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
const [selectedProduct, setSelectedProduct] = useState(null);

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

    {categories.map((cat) => (

      <button
        key={cat}
        onClick={() => {
          setSelectedCategory(cat);
          setSelectedProduct(null);
        }}
        className={selectedCategory === cat ? "active" : ""}
      >
        {cat}
      </button>

    ))}

  </div>

  <div className="product-grid">

    {filteredProducts.length > 0 ? (

      filteredProducts.map((item) => (

        <div className="product-card" key={item.id}>

          {selectedProduct?.id === item.id ? (

            <div className="product-details">

              <button
                className="close-details"
                onClick={() => setSelectedProduct(null)}
              >
                ✖
              </button>

              <h3>{item.name}</h3>

              <p><strong>Category:</strong> {item.category}</p>

              <p>✔ Used For: {item.usedFor}</p>

              <p>✔ Route: {item.route}</p>

              <p>✔ Storage: {item.storage}</p>

              <p>✔ Prescription: {item.prescription}</p>

              <p>✔ Manufacturer: {item.manufacturer}</p>

              <p>✔ Pack Size: {item.pack}</p>

              <p>✔ Expiry: {item.expiry}</p>

              <p>✔ Note: {item.note}</p>

            </div>

          ) : (

            <>

              <button
                className="wishlist-btn"
                onClick={() => toggleWishlist(item)}
              >
                {wishlist.find((p) => p.id === item.id)
                  ? <FaHeart />
                  : <FaRegHeart />}
              </button>

              <button
                className="details-btn"
                onClick={() => setSelectedProduct(item)}
              >
                ←
              </button>

              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <p>{item.category}</p>

              <h4>₹ {item.price}</h4>

              <button onClick={() => addToCart(item)}>
                Add To Cart
              </button>

            </>

          )}

        </div>

      ))

    ) : (

      <h2 className="no-product">
        No Products Found
      </h2>

    )}

  </div>

</section>

);

};

export default Products;