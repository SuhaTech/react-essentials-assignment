import { useState } from "react";
import { FaHeart, FaPlus, FaStar, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CatalogCard = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10">
      
      {/* Top Action Buttons (Wishlist & Quick Add) */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
            isLiked
              ? "border-red-200 bg-red-50 text-red-500 shadow-sm"
              : "border-slate-100 bg-slate-50 text-slate-400 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
          }`}
          aria-label={`Save ${item.name}`}
        >
          <FaHeart className="text-sm transition-transform active:scale-125" />
        </button>

        <button
          type="button"
          onClick={() => addToCart(item)}
          className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md shadow-orange-200 transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-300 active:scale-95"
          aria-label={`Add ${item.name}`}
        >
          <FaPlus className="text-xs" />
        </button>
      </div>

      {/* Product Image Container */}
      <div className="my-4 flex h-40 items-center justify-center px-2">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-36 w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-sm"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-col items-center text-center">
        
        {/* Star Rating */}
        <div className="mb-1.5 flex items-center justify-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-xs" />
          ))}
        </div>

        {/* Product Title */}
        <h3 className="text-base font-bold text-slate-800 transition-colors group-hover:text-orange-500">
          {item.name}
        </h3>

        {/* Price Tag */}
        <p className="mt-1 text-lg font-black text-slate-900">
          {item.price}
        </p>

        {/* Primary Shop Action Button */}
        <button
          type="button"
          onClick={() => addToCart(item)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-orange-200 transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-300 active:scale-95"
        >
          <FaShoppingCart className="text-sm" />
          <span>Shop Now</span>
        </button>
      </div>
    </article>
  );
};

export default CatalogCard;