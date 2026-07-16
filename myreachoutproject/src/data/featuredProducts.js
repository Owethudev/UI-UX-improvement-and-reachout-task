// ------------------------------------------------------------
// featuredProducts.js
// ------------------------------------------------------------
// I keep all featured product data in one place.
// If another developer wants to add or remove products,
// they only need to edit this file.
// ------------------------------------------------------------

// I import all product images.
import samsungTV from "../assets/images/products/samsung-tv.webp";
import iphone16 from "../assets/images/products/iphone16.webp";
import ps5 from "../assets/images/products/ps5.webp";
import macbookAir from "../assets/images/products/macbook-air.webp";
import airFryer from "../assets/images/products/airfryer.webp";
import dyson from "../assets/images/products/dyson.webp";

// I export an array of featured products.
export const featuredProducts = [
  {
    id: 1,
    title: 'Samsung 65" OLED Smart TV',
    price: 24999,
    rating: 4.9,
    badge: "Best Seller",
    image: samsungTV,
  },
  {
    id: 2,
    title: "Apple iPhone 16 Pro",
    price: 27999,
    rating: 4.8,
    badge: "New",
    image: iphone16,
  },
  {
    id: 3,
    title: "Sony PlayStation 5",
    price: 13999,
    rating: 4.9,
    badge: "Hot Deal",
    image: ps5,
  },
  {
    id: 4,
    title: "MacBook Air M4",
    price: 31999,
    rating: 4.9,
    badge: "Popular",
    image: macbookAir,
  },
  {
    id: 5,
    title: "Ninja Air Fryer",
    price: 3999,
    rating: 4.7,
    badge: "Sale",
    image: airFryer,
  },
  {
    id: 6,
    title: "Dyson V15 Vacuum",
    price: 12999,
    rating: 4.8,
    badge: "Premium",
    image: dyson,
  },
];