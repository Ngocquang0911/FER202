import React from 'react';

function Home() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">Trang Chủ</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Chào mừng đến với ứng dụng React Router!</h5>
              <p className="card-text">
                Đây là trang chủ của ứng dụng. Bạn có thể điều hướng đến các trang khác 
                bằng cách sử dụng thanh điều hướng ở phía trên.
              </p>
              <div className="alert alert-info">
                <strong>Thông tin:</strong> Đây là bài tập về React Router - Bài tập 1.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
