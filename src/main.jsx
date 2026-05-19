import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import AnalyticsTracker from "./tracker";

// Restore URL from GitHub Pages 404 redirect (/?/path → /path)
const redirectPath = window.location.search.slice(1);
if (redirectPath.startsWith("/")) {
  window.history.replaceState(null, "", redirectPath);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/resume" element={<App resumePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
