import { Outlet, useLocation } from "react-router-dom"; // 1. useLocation import करें
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();
 
  const isAuthPage = ["/login", "/signup", "/forgot-password"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthPage && <Navbar />} 
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isAuthPage && <Footer />} 
    </div>
  );
};

export default MainLayout;