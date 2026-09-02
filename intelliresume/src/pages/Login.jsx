import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext"; 
import api from "../services/api";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", otp: "" });
  const [step, setStep] = useState(1); // Step 1: Email/Password, Step 2: OTP Verification
  const [loading, setLoading] = useState(false);
  
  // Resend OTP Cooldown Timer State
  const [timer, setTimer] = useState(0);

  const navigate = useNavigate();
  const { login } = useAuth();

  // Timer logic for Resend OTP
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step 1: Password Login -> Send OTP & Switch to Step 2
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("auth/login/", {
        email: formData.email,
        password: formData.password,
      });

      console.log("Login Response:", response.data);

      alert("Credentials Verified! OTP sent to your email.");
      setStep(2); // Step 2 (OTP Step) par Switch karein
      setTimer(30); // 30 seconds cooldown timer start

    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
        error.response?.data?.detail ||
        "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify Login OTP (Backend URL: auth/login/verify-otp/)
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("auth/login/verify-otp/", {
        email: formData.email,
        otp: formData.otp,
      });

      console.log("OTP Response:", response.data);
      saveTokenAndNavigate(response.data);

    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
        error.response?.data?.detail ||
        "Invalid or Expired OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP (Hits auth/login/ again to generate new OTP)
  const handleResendOtp = async () => {
    if (timer > 0) return;
    setLoading(true);

    try {
      await api.post("auth/login/", {
        email: formData.email,
        password: formData.password,
      });
      alert("A new OTP has been sent to your email!");
      setTimer(30); // Reset timer
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
        error.response?.data?.detail ||
        "Failed to resend OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Helper function: LocalStorage & Context setup
  const saveTokenAndNavigate = (data) => {
    const accessToken = data.access || data.tokens?.access || data.token;
    const refreshToken = data.refresh || data.tokens?.refresh;

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    }
    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    }

    // AuthContext update
    const userObj = {
      email: formData.email,
      name: data.user?.first_name || data.user?.name || data.name || formData.email.split('@')[0],
      role: data.user?.role || "customer",
    };
    localStorage.setItem("userData", JSON.stringify(userObj));

    
    login(userObj);

    alert("Login Successful 🎉");
    navigate("/dashboard");
  };

  return (
    <div style={pageContainer}>
      <div style={cardStyle}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ color: "#111", marginBottom: "8px", fontSize: "32px" }}>
            {step === 1 ? "Welcome Back 👋" : "Enter OTP 🔑"}
          </h1>
          <p style={{ color: "#666" }}>
            {step === 1 ? "Login to your IntelliResume account" : `We sent an OTP to ${formData.email}`}
          </p>
        </div>

        {step === 1 ? (
          /* STEP 1: Email & Password Form */
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Email</label>
              <input 
                name="email" 
                type="email" 
                value={formData.email}
                placeholder="Enter your email" 
                style={inputStyle} 
                onChange={handleInputChange}
                required 
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  placeholder="Enter password"
                  style={inputStyle}
                  onChange={handleInputChange}
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={eyeBtn}>
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <div style={optionsStyle}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forgot-password" style={linkStyle}>Forgot Password?</Link>
            </div>

            <button type="submit" disabled={loading} style={buttonStyle}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
              Don't have an account?{" "}
              <Link to="/signup" style={{ color: "#2563eb", fontWeight: "bold", textDecoration: "none" }}>
                Sign Up
              </Link>
            </p>
          </form>
        ) : (
          /* STEP 2: OTP Form */
          <form onSubmit={handleVerifyOtp}>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>One Time Password (OTP)</label>
              <input 
                name="otp" 
                type="text" 
                value={formData.otp}
                placeholder="Enter 6-digit OTP" 
                style={inputStyle} 
                onChange={handleInputChange}
                maxLength={6}
                required 
              />
            </div>

            <button type="submit" disabled={loading} style={buttonStyle}>
              {loading ? "Verifying..." : "Verify & Login"}
            </button>

            {/* Resend OTP Button */}
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={timer > 0 || loading}
                style={{
                  background: "none",
                  border: "none",
                  color: timer > 0 ? "#9ca3af" : "#2563eb",
                  fontWeight: "bold",
                  cursor: timer > 0 ? "not-allowed" : "pointer",
                  fontSize: "14px"
                }}
              >
                {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
              </button>
            </div>

            <button 
              type="button" 
              onClick={() => setStep(1)} 
              style={{ ...buttonStyle, background: "#f3f4f6", color: "#374151", marginTop: "15px" }}
            >
              Back to Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// Styling (Strictly same as original)
const pageContainer = { minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(180deg, #f0f7ff 0%, #d1e3ff 100%)", padding: "20px" };
const cardStyle = { width: "100%", maxWidth: "400px", background: "#fff", borderRadius: "24px", padding: "40px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" };
const inputStyle = { width: "100%", padding: "12px 16px", marginTop: "8px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "15px", boxSizing: "border-box" };
const labelStyle = { fontSize: "14px", fontWeight: "500", color: "#374151" };
const buttonStyle = { width: "100%", padding: "14px", border: "none", background: "#1d4ed8", color: "#fff", borderRadius: "8px", cursor: "pointer", fontSize: "16px", fontWeight: "600" };
const optionsStyle = { display: "flex", justifyContent: "space-between", marginBottom: "20px", fontSize: "14px", color: "#666" };
const linkStyle = { color: "#dc2626", textDecoration: "none" };
const eyeBtn = { position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", border: "none", background: "transparent", cursor: "pointer" };