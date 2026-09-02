import { Link } from "react-router-dom";
import categories from "../data/categoriesData";

const Categories = () => {
  return (
    <section id="categories" className="section-shell scroll-mt-24 bg-gray-50/50 py-16">
      <div className="section-frame max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <p className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-2">
            Categories
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Shop By Category
          </h2>
          <p className="max-w-xl mx-auto text-base text-slate-500">
            Browse the core grocery sections without any dead ends or clutter.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.route}
              className="group flex flex-col h-full overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-grow p-6 sm:p-7">
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-500 transition-colors duration-200">
                  {category.title}
                </h3>
                
                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-slate-500 flex-grow">
                  {category.description}
                </p>
                
                {/* Footer Section (Items Counter & CTA Button) */}
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                  {/* Items Count */}
                  <span className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                    {category.items}
                  </span>
                  
                  {/* See All / CTA Button */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white shadow-md shadow-orange-500/10 transition duration-200 group-hover:bg-orange-600 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    {category.ctaLabel || "See All"}
                    <svg 
                      className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover:translate-x-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
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