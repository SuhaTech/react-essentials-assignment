import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App.jsx";
import "./index.css";
// src/main.jsx
import { AuthProvider } from './context/AuthContext'; // पाथ चेक करें

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* यह App के ऊपर होना चाहिए */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
  