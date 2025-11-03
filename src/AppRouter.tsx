import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang chính hiển thị Hero */}
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
