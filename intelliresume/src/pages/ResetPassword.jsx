import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  // VerifyOTP page se pass kiye gaye details
  const email = location.state?.email || "";
  const otp = location.state?.otp || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Basic Validation
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      // Payload with flexible key names for common Django serializers
      const payload = {
        email: email,
        otp: otp,
        password: password,
        new_password: password,
        confirm_password: confirmPassword,
      };

      // Backend Endpoint: api/auth/reset-password/
      const response = await api.post("auth/reset-password/", payload);

      alert(
        response.data?.message ||
          "Password reset successfully! Redirecting to login."
      );
      navigate("/login");
    } catch (error) {
      console.error("Reset Password Error:", error.response?.data);
      const errData = error.response?.data;

      let extractedError = "";

      if (typeof errData === "string") {
        extractedError = errData;
      } else if (errData && typeof errData === "object") {
        // Checking common Django DRF error response patterns
        extractedError =
          errData.detail ||
          errData.message ||
          errData.error ||
          (errData.non_field_errors ? errData.non_field_errors[0] : null) ||
          (errData.password ? `Password: ${errData.password[0]}` : null) ||
          (errData.new_password ? `Password: ${errData.new_password[0]}` : null) ||
          (errData.otp ? `OTP: ${errData.otp[0]}` : null) ||
          (errData.email ? `Email: ${errData.email[0]}` : null);
      }

      setErrorMsg(
        extractedError || "Failed to reset password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={pageContainer}>
      <div style={cardStyle}>
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <h1 style={{ color: "#111", marginBottom: "8px", fontSize: "28px" }}>
            Set New Password 🔑
          </h1>
          <p style={{ color: "#666", fontSize: "14px" }}>
            Create a strong new password for <br />
            <strong>{email || "your account"}</strong>
          </p>
        </div>

        {errorMsg && <div style={errorMessageStyle}>{errorMsg}</div>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label style={labelStyle}>Confirm New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            {loading ? "Resetting..." : "Reset Password"}
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "14px",
            }}
          >
            Back to{" "}
            <Link
              to="/login"
              style={{
                color: "#1d4ed8",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Login
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
};

const errorMessageStyle = {
  backgroundColor: "#fef2f2",
  color: "#dc2626",
  padding: "10px 14px",
  borderRadius: "8px",
  fontSize: "14px",
  marginBottom: "16px",
  border: "1px solid #fecaca",
  wordBreak: "break-word",
};