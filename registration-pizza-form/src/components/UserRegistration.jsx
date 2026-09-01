import React, { useState, useEffect } from 'react';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  gender: '',
  termsAccepted: false,
};

const UserRegistration = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let errs = {};

    if (!formData.name.trim()) errs.name = 'Full name is required.';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) errs.email = 'Enter a valid email address.';

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) errs.phone = 'Enter a valid 10-digit phone number.';

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      errs.password = 'Password must be 8+ chars with uppercase, lowercase, number & special char.';
    }

    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match.';
    }

    if (!formData.gender) errs.gender = 'Please select a gender.';
    if (!formData.termsAccepted) errs.termsAccepted = 'You must accept the terms & conditions.';

    setErrors(errs);
    setIsFormValid(Object.keys(errs).length === 0);
  };

  useEffect(() => {
    validate();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      localStorage.setItem('user_details', JSON.stringify(formData));
      setSubmitted(true);
      
      // Form values reset/blank karna
      setFormData(initialFormState);
    }
  };

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      
      {submitted && (
        <div className="success-msg">
          🎉 Registration Successful! Account details have been saved.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Full Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="John Doe"
            value={formData.name} 
            onChange={handleChange} 
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input 
            type="email" 
            name="email" 
            placeholder="john@example.com"
            value={formData.email} 
            onChange={handleChange} 
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input 
            type="text" 
            name="phone" 
            placeholder="10-digit phone number"
            value={formData.phone} 
            onChange={handleChange} 
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder="••••••••"
            value={formData.password} 
            onChange={handleChange} 
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword" 
            placeholder="••••••••"
            value={formData.confirmPassword} 
            onChange={handleChange} 
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>

        <div className="input-group">
          <label>Gender</label>
          <div className="radio-group">
            <label className="inline-label">
              <input 
                type="radio" 
                name="gender" 
                value="Male" 
                checked={formData.gender === 'Male'}
                onChange={handleChange} 
              /> 
              Male
            </label>
            <label className="inline-label">
              <input 
                type="radio" 
                name="gender" 
                value="Female" 
                checked={formData.gender === 'Female'}
                onChange={handleChange} 
              /> 
              Female
            </label>
            <label className="inline-label">
              <input 
                type="radio" 
                name="gender" 
                value="Other" 
                checked={formData.gender === 'Other'}
                onChange={handleChange} 
              /> 
              Other
            </label>
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div className="input-group">
          <label className="inline-label" style={{ border: 'none', padding: 0 }}>
            <input 
              type="checkbox" 
              name="termsAccepted" 
              checked={formData.termsAccepted} 
              onChange={handleChange} 
            />
            I accept the Terms & Conditions
          </label>
          {errors.termsAccepted && <span className="error">{errors.termsAccepted}</span>}
        </div>

        <div className="btn-group">
          <button type="submit" disabled={!isFormValid}>
            Register Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;