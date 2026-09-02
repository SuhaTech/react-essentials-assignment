import CatalogPage from "../components/CatalogPage";
import chickenBreast from "../assets/chicken-breast.png";
import beef from "../assets/beef.png";
import salmon from "../assets/salmon.png";
import shrimp from "../assets/shrimp.png";
import tilapia from "../assets/tilapia.png";
import meatBanner from "../assets/meat-and-seafood.png";

const Meat = () => {
  const meatItems = [
    { id: 1, name: "Chicken Breast", image: chickenBreast, price: "$7.50", route: "/meat" },
    { id: 2, name: "Tender Beef", image: beef, price: "$10.00", route: "/meat" },
    { id: 3, name: "Atlantic Salmon", image: salmon, price: "$12.50", route: "/meat" },
    { id: 4, name: "Fresh Shrimp", image: shrimp, price: "$11.25", route: "/meat" },
    { id: 5, name: "Tilapia", image: tilapia, price: "$8.40", route: "/meat" },
    { id: 6, name: "Marinated Cuts", image: chickenBreast, price: "$9.10", route: "/meat" },
  ];

  return (
    <CatalogPage
      title="Meat & SeaFood"
      subtitle="High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more."
      banner={meatBanner}
      bannerAlt="Seafood and meat display"
      items={meatItems}
    />
  );
};

export default Meat;