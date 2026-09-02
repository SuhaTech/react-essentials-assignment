import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden surface-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)]">
      <div className="overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-contain p-7 transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
            {product.category}
        </p>

        <h3 className="mt-2 text-[1.05rem] font-bold text-slate-900">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1">
          {[...Array(product.rating)].map((_, index) => (
            <FaStar
              key={index}
              className="text-amber-400"
            />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-black text-orange-500">
            ₹{product.price}
          </span>

          <Link
            to="/cart"
            className="grid h-10 w-10 place-items-center rounded-full bg-orange-500 text-white shadow-[0_10px_18px_rgba(249,115,22,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
            aria-label={`Add ${product.name} to cart`}
          >
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;