import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    notification: null, // { status: 'success' | 'error', message: '' }
    isLoading: false,
    activeTab: 'signup', // 'signup' | 'menu' | 'cart'
  },
  reducers: {
    setNotification(state, action) {
      state.notification = action.payload;
    },
    clearNotification(state) {
      state.notification = null;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
  },
});

export const { setNotification, clearNotification, setLoading, setActiveTab } = uiSlice.actions;
export default uiSlice.reducer;