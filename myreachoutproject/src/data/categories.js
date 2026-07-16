// ------------------------------------------------------------
// categories.js
// ------------------------------------------------------------
// I store every shopping category here.
// The homepage will read this data to build the category grid.
// ------------------------------------------------------------

import phones from "../assets/images/categories/phones.webp";
import televisions from "../assets/images/categories/televisions.webp";
import gaming from "../assets/images/categories/gaming.webp";
import computers from "../assets/images/categories/computers.webp";
import kitchen from "../assets/images/categories/kitchen.webp";
import appliances from "../assets/images/categories/appliances.webp";

export const categories = [
  {
    id: 1,
    title: "Phones",
    image: phones,
  },
  {
    id: 2,
    title: "Televisions",
    image: televisions,
  },
  {
    id: 3,
    title: "Gaming",
    image: gaming,
  },
  {
    id: 4,
    title: "Computers",
    image: computers,
  },
  {
    id: 5,
    title: "Kitchen",
    image: kitchen,
  },
  {
    id: 6,
    title: "Home Appliances",
    image: appliances,
  },
];