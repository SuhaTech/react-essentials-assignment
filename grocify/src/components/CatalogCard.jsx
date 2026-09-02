import { Link } from "react-router-dom";
import { FaHeart, FaPlus } from "react-icons/fa";

const CatalogCard = ({ item }) => {
  return (
    <article className="group overflow-hidden surface-card p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)]">
      <div className="flex items-start justify-between">
        <Link
          to={item.route}
          className="icon-button h-8 w-8 bg-white text-slate-300 shadow-sm ring-1 ring-slate-100 hover:text-orange-500 hover:shadow-md"
          aria-label={`Save ${item.name}`}
        >
          <FaHeart />
        </Link>

        <Link
          to={item.route}
          className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500 text-white shadow-[0_8px_16px_rgba(249,115,22,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-[0_10px_20px_rgba(249,115,22,0.24)]"
          aria-label={`Add ${item.name}`}
        >
          <FaPlus />
        </Link>
      </div>

      <div className="mt-2 flex h-44 items-center justify-center px-2">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-40 w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-1 text-center">
        <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
        <p className="mt-2 text-base font-bold text-slate-900">{item.price}</p>
        <Link
          to={item.route}
          className="btn-primary mt-4 w-full"
        >
          Shop Now
        </Link>
      </div>
    </article>
  );
};

export default CatalogCard;