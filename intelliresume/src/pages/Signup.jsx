import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const inputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";

    if (!formData.email.includes("@"))
      newErrors.email = "Enter a valid email";

    if (formData.phone.length < 10)
      newErrors.phone = "Enter a valid phone number";

    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await api.post("auth/register/", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        confirm_password: formData.confirmPassword,
      });

      console.log(response.data);

      alert("Registration Successful!");

      navigate("/login");
    } catch (error) {
  console.log("Full Error:", error);
  console.log("Response:", error.response);
  console.log("Data:", error.response?.data);

  alert(JSON.stringify(error.response?.data));
}
  };

  return (
    <div style={pageContainer}>
      <div style={cardStyle}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "28px",
            marginBottom: "20px",
          }}
        >
          Create Account 🚀
        </h1>

        <form onSubmit={handleSubmit}>
          {renderInput(
            "name",
            "Full Name",
            "text",
            "John Doe",
            inputChange,
            errors.name
          )}

          {renderInput(
            "email",
            "Email",
            "email",
            "name@example.com",
            inputChange,
            errors.email
          )}

          {renderInput(
            "phone",
            "Phone",
            "tel",
            "9876543210",
            inputChange,
            errors.phone
          )}

          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Password</label>

            <div style={{ position: "relative" }}>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                onChange={inputChange}
                style={inputStyle}
              />

              <button
                type="button"
                style={eyeBtn}
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            {errors.password && (
              <p style={errorStyle}>{errors.password}</p>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>
              Confirm Password
            </label>

            <div style={{ position: "relative" }}>
              <input
                name="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm Password"
                onChange={inputChange}
                style={inputStyle}
              />

              <button
                type="button"
                style={eyeBtn}
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? "🙈" : "👁"}
              </button>
            </div>

            {errors.confirmPassword && (
              <p style={errorStyle}>
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "14px",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#2563eb",
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

function renderInput(
  name,
  label,
  type,
  placeholder,
  onChange,
  error
) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={labelStyle}>{label}</label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        style={inputStyle}
      />

      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
}

const pageContainer = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "linear-gradient(180deg, #f0f7ff 0%, #d1e3ff 100%)",
  padding: "20px",
};

const cardStyle = {
  width: "100%",
  maxWidth: "450px",
  background: "#fff",
  borderRadius: "24px",
  padding: "35px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "6px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  boxSizing: "border-box",
};

const labelStyle = {
  fontSize: "13px",
  fontWeight: "600",
};

const errorStyle = {
  color: "#dc2626",
  fontSize: "12px",
  marginTop: "4px",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  border: "none",
  background: "#1d4ed8",
  color: "#fff",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
};

const eyeBtn = {
  position: "absolute",
  right: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: "18px",
};