import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Home = () => {
  return (
    <main className="space-y-10 pb-16 lg:space-y-14">
      <Hero />
      <Categories />
      <Products />
    </main>
  );
};

export default Home;