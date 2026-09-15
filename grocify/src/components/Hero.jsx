import React from 'react';
import { motion } from 'framer-motion';
import basketImg from '../assets/basket.png';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-orange-50/60 to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Export Best Quality...
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Tasty organic <br className="hidden sm:inline" />
            <span className="text-orange-500">Fruits & Veggies</span> <br className="hidden sm:inline" />
            In Your City
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-lg mx-auto md:mx-0">
            Bred for a high content of beneficial substances. Our products are all fresh and healthy.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-orange-200 transition transform hover:-translate-y-0.5">
              Shop Now
            </button>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-6 py-3.5 rounded-full transition">
              Explore Products
            </button>
          </div>
        </motion.div>

        {/* Right Floating Basket */}
        <div className="flex justify-center">
          <motion.img 
            src={basketImg} 
            alt="Fruits Basket"
            className="w-full max-w-md lg:max-w-lg object-contain"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;