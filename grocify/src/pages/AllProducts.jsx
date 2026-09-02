import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  return (
    <main className="section-shell">
      <div className="section-frame">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="btn-secondary px-4 py-2 text-sm"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
          <div className="h-1 w-20 rounded-full bg-orange-200" />
        </div>

        <div className="mb-10 text-center">
          <p className="section-eyebrow">
            All Products
          </p>
          <h1 className="section-title">
            Complete Product Catalog
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-200" />
          <p className="section-copy">
            Every item in the store is shown here in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllProducts;