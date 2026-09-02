import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import basket from "../assets/basket.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-orange-50/70 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-6">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/85 px-5 py-2 text-sm font-semibold text-orange-500 shadow-[0_10px_24px_rgba(249,115,22,0.12)] backdrop-blur">
            <FaLeaf />
            Export Best Quality...
          </span>

          <h1 className="mt-6 max-w-xl text-5xl font-black leading-[1.02] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Tasty organic
            <br />
            <span className="text-orange-500">Fruits &amp; Veggies</span>
            <br />
            In Your City
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Bred for a high content of beneficial substances. Our products are all fresh and healthy.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#categories" className="btn-primary px-8 py-3">
              Shop Now
            </a>

            <Link to="/all-products" className="btn-secondary px-8 py-3">
              Explore Products
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[640px]">
            <div className="absolute inset-8 -z-10 rounded-full bg-orange-200/30 blur-3xl" />
            <img
              src={basket}
              alt="Fresh grocery basket"
              className="w-full animate-float drop-shadow-[0_30px_60px_rgba(15,23,42,0.14)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;