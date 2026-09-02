import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormField, setFormErrors, signupSuccess } from '../features/user/userSlice';
import { setNotification, setActiveTab } from '../features/ui/uiSlice';

export default function SignupForm() {
  const dispatch = useDispatch();
  const { formData, errors } = useSelector((state) => state.user);

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (formData.phone.length < 10) newErrors.phone = 'Valid 10-digit phone number is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch(updateFormField({ field: name, value: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      dispatch(setFormErrors(validationErrors));
    } else {
      dispatch(signupSuccess());
      dispatch(setNotification({ status: 'success', message: 'Account created successfully! Redirecting to Menu...' }));
      setTimeout(() => {
        dispatch(setActiveTab('menu'));
      }, 1500);
    }
  };

  return (
    <div style={{ maxWidth: '450px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
          {errors.fullName && <span style={{ color: 'red' }}>{errors.fullName}</span>}
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Phone Number:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
          {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
          {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Gender: </label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} /> Accept Terms & Conditions
          </label>
          {errors.termsAccepted && <div style={{ color: 'red' }}>{errors.termsAccepted}</div>}
        </div>

        <button type="submit" style={{ marginTop: '15px', width: '100%', padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Register
        </button>
      </form>
    </div>
  );
}