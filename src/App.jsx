import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import CafeAddPage from "./pages/CafeAddPage";
import CafeDetailsPage from "./pages/CafeDetailsPage";
import CafeEditPage from "./pages/CafeEditPage";
import CafeListPage from "./pages/CafeListPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cafes/add" element={<CafeAddPage />} />
        <Route path="/cafes/:id" element={<CafeDetailsPage />} />
        <Route path="/cafes/edit/:id" element={<CafeEditPage />} />
        <Route path="/cafes" element={<CafeListPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
