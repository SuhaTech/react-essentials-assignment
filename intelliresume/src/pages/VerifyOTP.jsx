import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function VerifyOTP() {
  const location = useLocation();
  const navigate = useNavigate();

  // ForgotPassword page se paas kiya gaya email receive karein
  const email = location.state?.email || "";
  const initialMsg = location.state?.message || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(initialMsg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      // Backend Endpoint: api/auth/verify-otp/
      const response = await api.post("auth/verify-otp/", {
        email: email,
        otp: otp,
      });

      // OTP verify hone ke baad Reset Password page par le jao
      navigate("/reset-password", {
        state: {
          email: email,
          otp: otp, // ya reset token agar backend se milta ho
          message: response.data?.message || "OTP verified successfully. Set your new password.",
        },
      });
    } catch (error) {
      console.error("Verify OTP Error:", error.response?.data);
      const errData = error.response?.data;
      let serverError = "";

      if (typeof errData === "string") {
        serverError = errData;
      } else if (errData) {
        serverError =
          errData.message ||
          errData.detail ||
          errData.error ||
          (errData.otp ? errData.otp[0] : null);
      }

      setErrorMsg(serverError || "Invalid or expired OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={pageContainer}>
      <div style={cardStyle}>
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <h1 style={{ color: "#111", marginBottom: "8px", fontSize: "28px" }}>
            Verify OTP 🔢
          </h1>
          <p style={{ color: "#666", fontSize: "14px" }}>
            Enter the 6-digit OTP sent to <br />
            <strong>{email || "your email"}</strong>
          </p>
        </div>

        {successMsg && <div style={successMessageStyle}>{successMsg}</div>}
        {errorMsg && <div style={errorMessageStyle}>{errorMsg}</div>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>OTP Code</label>
            <input
              type="text"
              placeholder="123456"
              value={otp}
              maxLength={6}
              onChange={(e) => setOtp(e.target.value)}
              style={{ ...inputStyle, letterSpacing: "4px", textAlign: "center", fontWeight: "bold" }}
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
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
            Didn't receive code?{" "}
            <Link to="/forgot-password" style={{ color: "#1d4ed8", fontWeight: "bold", textDecoration: "none" }}>
              Resend OTP
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
  fontSize: "18px",
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
};

const successMessageStyle = {
  backgroundColor: "#f0fdf4",
  color: "#16a34a",
  padding: "10px 14px",
  borderRadius: "8px",
  fontSize: "14px",
  marginBottom: "16px",
  border: "1px solid #bbf7d0",
};