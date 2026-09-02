import fruits from "../assets/fruits-and-veggies.png";
import dairy from "../assets/dairy-and-eggs.png";
import seafood from "../assets/meat-and-seafood.png";

const categories = [
  {
    id: 1,
    title: "Fresh Fruits & Vegetables",
    image: fruits,
    items: "120+ Items",
    description: "Fresh produce, sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    ctaLabel: "See All",
    route: "/fruits",
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    image: dairy,
    items: "80+ Items",
    description: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    ctaLabel: "See All",
    route: "/dairy",
  },
  {
    id: 3,
    title: "Meat & Seafood",
    image: seafood,
    items: "90+ Items",
    description: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options and more.",
    ctaLabel: "See All",
    route: "/meat",
  },
];

export default categories;