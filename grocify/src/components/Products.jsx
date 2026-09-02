import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeCategory, setActiveCategory] = useState("All");

  const displayedProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products.slice(0, 8);
    }

    if (activeCategory === "SeaFood") {
      return products.filter((product) => product.category === "Seafood");
    }

    const categoryKey = activeCategory.slice(0, -1);
    return products.filter((product) => product.category === categoryKey);
  }, [activeCategory]);

  return (
    <section className="section-shell">
      <div className="section-frame">
        <div className="mb-8 text-center">
          <p className="section-eyebrow">
            Our Products
          </p>

          <h2 className="section-title">
            Our Products
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-200" />

          <p className="section-copy">
            Fresh picks across fruits, vegetables, dairy and seafood. Tap a category to preview all items from that section.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition duration-300 ${activeCategory === category ? "bg-orange-500 text-white shadow-[0_10px_18px_rgba(249,115,22,0.18)]" : "bg-white text-slate-700 shadow-[0_10px_20px_rgba(15,23,42,0.05)] ring-1 ring-slate-200 hover:-translate-y-0.5 hover:ring-orange-200 hover:text-orange-600"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/all-products" className="btn-primary px-8 py-3">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;