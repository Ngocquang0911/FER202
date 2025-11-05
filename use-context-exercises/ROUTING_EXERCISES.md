# React Router - Bài Tập 1: Routing Cơ Bản

Đây là bài tập về Routing cơ bản trong React sử dụng React Router v6.

## Mục tiêu
Hiểu cách định nghĩa Route và sử dụng NavLink để điều hướng giữa các trang.

## Yêu cầu đã hoàn thành

### 1. Cài đặt thư viện
```bash
npm install react-router-dom@6
```

### 2. Tạo 3 components đơn giản
- `src/pages/Home.jsx` - Trang chủ
- `src/pages/Products.jsx` - Danh sách sản phẩm  
- `src/pages/Contact.jsx` - Trang liên hệ

### 3. Cấu hình Routes trong AppRoute.js
- URL `/` hiển thị Home
- URL `/san-pham` hiển thị Products
- URL `/lien-he` hiển thị Contact

### 4. Tạo thanh điều hướng với NavLink
- Component `Navbar` sử dụng `NavLink`
- Trang hiện tại được highlight với class `active fw-bold`

## Cấu trúc dự án

```
src/
├── components/
│   └── Navbar.jsx          # Thanh điều hướng với NavLink
├── pages/
│   ├── Home.jsx            # Trang chủ
│   ├── Products.jsx        # Danh sách sản phẩm
│   └── Contact.jsx         # Trang liên hệ
├── contexts/               # Context providers
├── App.js                  # Component chính với providers
├── AppRoute.js             # Cấu hình routes
└── index.js                # Setup BrowserRouter
```

## Các tính năng đã triển khai

### 1. BrowserRouter Setup
```jsx
// index.js
import { BrowserRouter } from 'react-router-dom';

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### 2. Routes trong AppRoute.js
```jsx
// AppRoute.js
import { Routes, Route } from 'react-router-dom';

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/san-pham" element={<Products />} />
      <Route path="/lien-he" element={<Contact />} />
    </Routes>
  );
}
```

### 3. App.js với Providers
```jsx
// App.js
function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div>
          <Navbar />
          <AppRoute />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}
```

### 4. NavLink với Active State
```jsx
// Navbar.jsx
<NavLink 
  to="/san-pham"
  className={({ isActive }) => 
    isActive ? 'nav-link active fw-bold' : 'nav-link'
  }
>
  Sản Phẩm
</NavLink>
```

### 5. 404 Route Handling
```jsx
<Route path="*" element={<NotFoundComponent />} />
```

## Lợi ích của việc tách Routes

1. **Tổ chức Code**: Routes được tách riêng khỏi App.js
2. **Dễ bảo trì**: Dễ dàng thêm/sửa routes mà không ảnh hưởng đến App.js
3. **Tái sử dụng**: AppRoute có thể được sử dụng ở nhiều nơi
4. **Clean Code**: App.js chỉ tập trung vào providers và layout

## Cách chạy ứng dụng

```bash
npm start
```

Truy cập http://localhost:3000 để xem ứng dụng.

## Các URL có thể truy cập

- `/` - Trang chủ
- `/san-pham` - Danh sách sản phẩm
- `/lien-he` - Trang liên hệ
- `/*` - Trang 404 cho các URL không tồn tại

## Kiểm tra tính năng

1. **Điều hướng cơ bản**: Sử dụng thanh điều hướng để chuyển giữa các trang
2. **Active state**: Quan sát trang hiện tại được highlight với class `active fw-bold`
3. **URL routing**: Kiểm tra URL thay đổi khi điều hướng
4. **404 handling**: Truy cập URL không tồn tại để xem trang 404

## Kết quả

✅ Đã hoàn thành đầy đủ yêu cầu của Bài tập 1 về Routing cơ bản và điều hướng trong React Router.
✅ Đã tách routes vào file AppRoute.js riêng biệt để tổ chức code tốt hơn.
