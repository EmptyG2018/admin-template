import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const RouterMap: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterMap;
