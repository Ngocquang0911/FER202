import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function AppRoute() {
  return (
    <Routes>
      {/* Bài tập 1: Routing cơ bản */}
      <Route path="/" element={<Home />} />
      <Route path="/san-pham" element={<Products />} />
      <Route path="/lien-he" element={<Contact />} />
      
      {/* Route 404 */}
      <Route path="*" element={
        <div className="container mt-4">
          <div className="alert alert-danger text-center">
            <h4>404 - Trang không tìm thấy</h4>
            <p>Đường dẫn bạn tìm kiếm không tồn tại.</p>
          </div>
        </div>
      } />
    </Routes>
  );
}

export default AppRoute;
