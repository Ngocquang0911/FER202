import React from 'react';

function Products() {
  // Danh sách sản phẩm đơn giản
  const products = [
    { id: 1, name: 'Sản phẩm A', price: '100.000 VNĐ' },
    { id: 2, name: 'Sản phẩm B', price: '200.000 VNĐ' },
    { id: 3, name: 'Sản phẩm C', price: '300.000 VNĐ' }
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">Danh Sách Sản Phẩm</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Các sản phẩm có sẵn</h5>
              <p className="card-text">
                Danh sách các sản phẩm trong cửa hàng:
              </p>
              
              {/* Danh sách sản phẩm đơn giản */}
              <div className="list-group">
                {products.map(product => (
                  <div key={product.id} className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">{product.name}</h6>
                      <small>{product.price}</small>
                    </div>
                    <p className="mb-1">ID: {product.id}</p>
                  </div>
                ))}
              </div>
              
              <div className="alert alert-success mt-3">
                <strong>Ghi chú:</strong> Đây là trang sản phẩm cơ bản trong Bài tập 1.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;