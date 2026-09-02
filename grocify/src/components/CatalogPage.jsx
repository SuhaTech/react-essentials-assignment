import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CatalogCard from "./CatalogCard";

const CatalogPage = ({
  title,
  subtitle,
  banner,
  bannerAlt,
  items,
}) => {
  return (
    <main className="section-shell">
      <section className="section-frame">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link to="/" className="btn-secondary px-4 py-2 text-sm">
            <FaArrowLeft />
            Back to Home
          </Link>
          <div className="h-1 w-20 rounded-full bg-orange-200" />
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h1 className="section-title">
              {title}
            </h1>
            <p className="section-copy max-w-xl">
              {subtitle}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="surface-card max-w-[560px] p-5">
              <img src={banner} alt={bannerAlt} className="max-h-[240px] w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame pb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <CatalogCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;