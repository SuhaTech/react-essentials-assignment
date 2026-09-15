import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import categories from "../data/categoriesData";

const Categories = () => {
  return (
    <section id="categories" className="section-shell scroll-mt-24 py-16">
      <div className="section-frame">
        {/* Header Section */}
        <div className="mb-12 flex w-full flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-500">
            Categories
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Shop By Category
          </h2>
          <div className="my-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          <p className="w-full max-w-xl text-base leading-7 text-slate-500">
            Browse the core grocery sections without any dead ends or clutter.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.route}
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/90 shadow-[0_16px_35px_rgba(37,72,53,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-[0_24px_45px_rgba(37,72,53,0.14)]"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f3f7ef]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-70" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/50 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-600 shadow-sm backdrop-blur-sm">
                  {category.items}
                </span>
              </div>

              {/* Content Section */}
              <div className="flex flex-grow flex-col p-5 sm:p-6">
                {/* Title */}
                <h3 className="text-xl font-black text-slate-900 transition-colors duration-200 group-hover:text-orange-500">
                  {category.title}
                </h3>
                
                {/* Description */}
                <p className="mt-2 line-clamp-2 flex-grow text-sm leading-6 text-slate-500">
                  {category.description}
                </p>
                
                {/* Footer Section (Items Counter & CTA Button) */}
                <div className="mt-5 flex items-center justify-end border-t border-slate-100 pt-4">
                  {/* See All / CTA Button */}
                  <span className="inline-flex min-w-[6.5rem] shrink-0 items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white shadow-md shadow-orange-500/10 transition duration-200 group-hover:bg-orange-600 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    {category.ctaLabel || "See All"}
                    <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;  