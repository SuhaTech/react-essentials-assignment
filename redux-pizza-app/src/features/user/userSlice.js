import { createSlice } from '@reduxjs/toolkit';

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  gender: 'male',
  termsAccepted: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    formData: initialFormData,
    errors: {},
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    updateFormField(state, action) {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    setFormErrors(state, action) {
      state.errors = action.payload;
    },
    signupSuccess(state) {
      state.isAuthenticated = true;
      state.user = { fullName: state.formData.fullName, email: state.formData.email };
      state.formData = initialFormData;
      state.errors = {};
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { updateFormField, setFormErrors, signupSuccess, logout } = userSlice.actions;
export default userSlice.reducer;