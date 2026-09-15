import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CatalogCard from "./CatalogCard";

const CatalogPage = ({
  title,
  subtitle,
  banner,
  bannerAlt = "Category Banner",
  items = [],
}) => {
  return (
    <main className="min-h-screen bg-slate-50/50 pb-20 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Header Actions */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-2.5 rounded-full border border-orange-200/80 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-md hover:shadow-orange-200"
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className="hidden h-1.5 w-24 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 sm:block" />
        </div>

        {/* Hero Section Banner */}
        <section className="relative mb-14 overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/80 via-white to-amber-50/50 p-6 text-center shadow-sm sm:p-10">
          <div className="flex flex-col items-center gap-8">
            
            {/* Title & Description */}
            <div className="flex max-w-3xl flex-col items-center space-y-4">
              <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-orange-600">
                Premium Collection
              </span>
              <h1 className="text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {subtitle}
              </p>
            </div>

            {/* Banner Image Container */}
            <div className="flex w-full justify-center">
              <div className="relative w-full max-w-[500px] overflow-hidden rounded-2xl border border-white/80 bg-white p-4 shadow-xl shadow-slate-200/60 transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={banner}
                  alt={bannerAlt}
                  className="max-h-[240px] w-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Products Grid Section */}
        <section>
          {items && items.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item) => (
                <CatalogCard key={item.id || item.name} item={item} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
              <p className="text-base font-medium text-slate-500">
                No products available in this category yet.
              </p>
            </div>
          )}
        </section>

      </div>
    </main>
  );
};

export default CatalogPage;