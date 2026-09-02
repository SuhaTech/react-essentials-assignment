import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // Correct endpoint: auth/forgot-password/
      const response = await api.post("auth/forgot-password/", { email });

      // Navigate to verify OTP page and pass email in route state
      navigate("/verify-otp", {
        state: {
          email: email,
          message: response.data?.message || "OTP has been sent to your email.",
        },
      });
    } catch (error) {
      console.error("Forgot Password Error:", error.response?.data);

      const errData = error.response?.data;
      let serverError = "";

      if (typeof errData === "string") {
        serverError = errData;
      } else if (errData) {
        serverError =
          errData.message ||
          errData.detail ||
          errData.error ||
          (errData.email ? errData.email[0] : null);
      }

      setErrorMsg(serverError || "Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={pageContainer}>
      <div style={cardStyle}>
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <h1
            style={{
              color: "#111",
              marginBottom: "8px",
              fontSize: "28px",
            }}
          >
            Reset Password 🔐
          </h1>

          <p style={{ color: "#666", fontSize: "14px" }}>
            Enter your email to receive an OTP.
          </p>
        </div>

        {/* UI Error Message Display */}
        {errorMsg && <div style={errorMessageStyle}>{errorMsg}</div>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Email Address</label>

            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              ...buttonStyle,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "14px",
            }}
          >
            Remembered your password?{" "}
            <Link
              to="/login"
              style={{
                color: "#1d4ed8",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Back to Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

// Styles
const pageContainer = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(180deg, #f0f7ff 0%, #d1e3ff 100%)",
  padding: "20px",
};

const cardStyle = {
  width: "100%",
  maxWidth: "400px",
  background: "#fff",
  borderRadius: "24px",
  padding: "40px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
};

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  marginTop: "8px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "15px",
  boxSizing: "border-box",
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#374151",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  border: "none",
  background: "#1d4ed8",
  color: "#fff",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "600",
  transition: "all 0.2s ease",
};

const errorMessageStyle = {
  backgroundColor: "#fef2f2",
  color: "#dc2626",
  padding: "10px 14px",
  borderRadius: "8px",
  fontSize: "14px",
  marginBottom: "16px",
  border: "1px solid #fecaca",
};