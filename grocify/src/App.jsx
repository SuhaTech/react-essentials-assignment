import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";

import Fruits from "./pages/Fruits";
import Dairy from "./pages/Dairy";
import Meat from "./pages/Meat";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";

function Home() {
  return (
    <main className="space-y-10 pb-16 lg:space-y-14">
      <Hero />
      <Categories />
      <Products />
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/fruits" element={<Fruits />} />

        <Route path="/dairy" element={<Dairy />} />

        <Route path="/meat" element={<Meat />} />

        <Route path="/all-products" element={<AllProducts />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;