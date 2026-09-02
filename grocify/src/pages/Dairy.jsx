import CatalogPage from "../components/CatalogPage";
import milk from "../assets/milk.png";
import butter from "../assets/butter.png";
import yogurt from "../assets/yogurt.png";
import eggs from "../assets/eggs.png";
import cheese from "../assets/cheese.png";
import ricottaCheese from "../assets/ricotta-cheese.png";
import sliceCheese from "../assets/slice-cheese.png";
import condensedMilk from "../assets/condensed-milk.png";
import dairyBanner from "../assets/dairy-and-eggs.png";

const Dairy = () => {
  const dairyItems = [
    { id: 1, name: "Milk", image: milk, price: "$2.50", route: "/dairy" },
    { id: 2, name: "Butter", image: butter, price: "$1.80", route: "/dairy" },
    { id: 3, name: "Yogurt", image: yogurt, price: "$2.10", route: "/dairy" },
    { id: 4, name: "Eggs", image: eggs, price: "$3.00", route: "/dairy" },
    { id: 5, name: "Cheese", image: cheese, price: "$3.50", route: "/dairy" },
    { id: 6, name: "Ricotta", image: ricottaCheese, price: "$4.20", route: "/dairy" },
    { id: 7, name: "Slice Cheese", image: sliceCheese, price: "$2.90", route: "/dairy" },
    { id: 8, name: "Condensed Milk", image: condensedMilk, price: "$2.60", route: "/dairy" },
  ];

  return (
    <CatalogPage
      title="Dairy & Eggs"
      subtitle="Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses."
      banner={dairyBanner}
      bannerAlt="Dairy products display"
      items={dairyItems}
    />
  );
};

export default Dairy;