import { useState } from "react";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  // Rating fallback set kiya hai agar data mein dynamic rating missing ho
  const starCount = product?.rating || 5;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10">
      
      {/* Top Wishlist Overlay Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${
          isLiked
            ? "border-red-200 bg-red-50 text-red-500 shadow-sm"
            : "border-white/80 bg-white/80 text-slate-400 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
        }`}
        aria-label={`Save ${product?.name}`}
      >
        <FaHeart className="text-xs transition-transform active:scale-125" />
      </button>

      {/* Image Banner Container */}
      <div className="relative flex h-52 w-full items-center justify-center overflow-hidden bg-gradient-to-b from-orange-50/40 via-amber-50/20 to-white p-6">
        <img
          src={product?.image}
          alt={product?.name}
          className="max-h-40 w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-sm"
        />
      </div>

      {/* Product Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          {/* Category Tag */}
          <span className="text-[11px] font-bold uppercase tracking-widest text-orange-500">
            {product?.category || "Organic"}
          </span>

          {/* Title */}
          <h3 className="mt-1 text-base font-bold text-slate-800 transition-colors group-hover:text-orange-500 line-clamp-1">
            {product?.name}
          </h3>

          {/* Star Rating */}
          <div className="mt-2 flex items-center gap-1 text-xs text-amber-400">
            {[...Array(starCount)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>

        {/* Footer: Price & Cart Action */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold uppercase text-slate-400">Price</span>
            <span className="text-lg font-black text-slate-900">
              ₹{product?.price}
            </span>
          </div>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md shadow-orange-200 transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-300 active:scale-95"
            aria-label={`Add ${product?.name} to cart`}
          >
            <FaShoppingCart className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;