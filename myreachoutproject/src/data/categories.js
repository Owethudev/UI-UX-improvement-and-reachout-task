// ------------------------------------------------------------
// categories.js
// ------------------------------------------------------------
// I store every shopping category here.
// The homepage will read this data to build the category grid.
// ------------------------------------------------------------

import phones from "../assets/images/categories/phones.webp";
import televisions from "../assets/images/categories/televisions.webp";
import gaming from "../assets/images/categories/gaming.webp";
import laptops from "../assets/images/categories/laptops.webp";
import kitchen from "../assets/images/categories/kitchen.webp";
import appliances from "../assets/images/categories/appliances.webp";

export const categories = [
  {
    id: 1,
    title: "Phones",
    description: "Flagship devices with premium design and everyday performance.",
    image: phones,
  },
  {
    id: 2,
    title: "Televisions",
    description: "Immersive displays for streaming, gaming, and cinematic viewing.",
    image: televisions,
  },
  {
    id: 3,
    title: "Gaming",
    description: "Fast consoles and accessories built for serious play.",
    image: gaming,
  },
  {
    id: 4,
    title: "Laptops",
    description: "Portable power for work, study, and creative flow.",
    image: laptops,
  },
  {
    id: 5,
    title: "Kitchen",
    description: "Elegant tools that make cooking calmer and smarter.",
    image: kitchen,
  },
  {
    id: 6,
    title: "Home Appliances",
    description: "Thoughtful essentials that elevate modern living spaces.",
    image: appliances,
  },
];