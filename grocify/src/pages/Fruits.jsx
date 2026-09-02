import CatalogPage from "../components/CatalogPage";
import banana from "../assets/banana.png";
import capsicum from "../assets/capsicum.png";
import broccoli from "../assets/broccoli.png";
import lettuce from "../assets/lettuce.png";
import kiwi from "../assets/kiwi.png";
import grapes from "../assets/grapes.png";
import pineapple from "../assets/pineapple.png";
import strawberry from "../assets/strawberry.png";
import eggplant from "../assets/eggplant.png";
import cabbage from "../assets/cabbage.png";
import freshFruitsBanner from "../assets/fresh-fruits.png";

const Fruits = () => {
  const fruitItems = [
    { id: 1, name: "Green Capsicum", image: capsicum, price: "$4.00", route: "/fruits" },
    { id: 2, name: "Broccoli", image: broccoli, price: "$2.00", route: "/fruits" },
    { id: 3, name: "Kale Leaves", image: lettuce, price: "$3.00", route: "/fruits" },
    { id: 4, name: "Banana", image: banana, price: "$2.00", route: "/fruits" },
    { id: 5, name: "Pineapple", image: pineapple, price: "$3.50", route: "/fruits" },
    { id: 6, name: "Strawberry", image: strawberry, price: "$4.25", route: "/fruits" },
    { id: 7, name: "Grapes", image: grapes, price: "$3.75", route: "/fruits" },
    { id: 8, name: "Kiwi", image: kiwi, price: "$5.00", route: "/fruits" },
    { id: 9, name: "Cabbage", image: cabbage, price: "$2.25", route: "/fruits" },
    { id: 10, name: "Eggplant", image: eggplant, price: "$2.50", route: "/fruits" },
  ];

  return (
    <CatalogPage
      title="Fruits & Veggies"
      subtitle="Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables."
      banner={freshFruitsBanner}
      bannerAlt="Fresh fruits and vegetables"
      items={fruitItems}
    />
  );
};

export default Fruits;