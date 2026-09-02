import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "../../Context/AuthContext";
import Home from "../Home/Home";
import Navigationbar from "../Navigationbar/Navigationbar";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Meetings from "../Meetings/Meetings";
import ActionItems from "../ActionItems/ActionItems";
import Reports from "../Reports/Reports";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";
import PricingPlan from "../PricingPlan/PricingPlan";
import RoleManagement from "../RoleManagement/RoleManagement";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex bg-gray-50">
      {isAuthenticated && <Sidebar />}

      <div className={`flex-1 flex flex-col min-w-0 ${isAuthenticated ? "ml-60" : ""}`}>
        <Navigationbar />

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>}/>
            <Route path="/meetings" element={<ProtectedRoute><Meetings /></ProtectedRoute>}/>
            <Route path="/action-items"  element={<ProtectedRoute><ActionItems /></ProtectedRoute>}/>
            <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>}/>
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
            <Route path="/pricing-plan" element={<ProtectedRoute><PricingPlan /></ProtectedRoute>}/>
            <Route path="/role-management" element={<ProtectedRoute><RoleManagement /></ProtectedRoute>}/>

          </Routes>
        </main>

        {!isAuthenticated && <Footer />}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;