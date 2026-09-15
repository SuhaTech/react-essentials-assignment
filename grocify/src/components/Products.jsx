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
        <div className="mb-10 flex w-full flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-500"><br/><br/><br/><bt/><br/><br/>
            Products
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Our Products
          </h2>

          <div className="my-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" /><br/>

          <p className="mx-auto max-w-xl text-base font-normal leading-7 text-slate-600 sm:text-lg">
            Fresh picks across fruits, vegetables, dairy and seafood. Tap a category to preview all items from that section.
          </p><br/>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex max-w-full flex-wrap justify-center gap-2 rounded-2xl border border-orange-100 bg-white/80 p-2 shadow-[0_14px_30px_rgba(37,72,53,0.08)] backdrop-blur-sm">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`min-w-[5.5rem] rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${isActive ? "bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-[0_8px_18px_rgba(249,115,22,0.28)]" : "text-slate-600 hover:-translate-y-0.5 hover:bg-orange-50 hover:text-orange-600"}`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div><br/>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
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