import React, { useState } from 'react';

// Danh sách accounts mẫu
const accounts = [
  { id: 1, username: 'Nguyễn Minh Tuấn', password: 'password123', avatar: '/image/Nguyen Van A.jpg' },
  { id: 2, username: 'Trần Thị Mai', password: 'mypassword', avatar: '/image/Tran Thi B.jpg' },
  { id: 3, username: 'Lê Văn Hùng', password: 'secretpass', avatar: '/image/Le Van C.jpg' },
  { id: 4, username: 'Phạm Thị Lan', password: 'alice123', avatar: '/image/Pham Thi D.jpg' },
  { id: 5, username: 'Hoàng Văn Đức', password: 'charlie456', avatar: '/image/Hoang Van E.jpg' },
];

function SimpleAccountSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  // Hàm tìm kiếm account theo username
  const handleSearch = (e) => {
    e.preventDefault();
    const foundAccount = accounts.find(account => 
      account.username.toLowerCase() === searchTerm.toLowerCase()
    );
    setSearchResult(foundAccount || null);
  };

  // Hàm reset tìm kiếm
  const handleReset = () => {
    setSearchTerm('');
    setSearchResult(null);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Tìm kiếm Account</h3>
            </div>
            <div className="card-body">
              {/* Form tìm kiếm */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="row">
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập username để tìm kiếm..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex gap-2">
                      <button type="submit" className="btn btn-primary flex-fill">
                        Tìm kiếm
                      </button>
                      <button type="button" className="btn btn-secondary flex-fill" onClick={handleReset}>
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              {/* Hiển thị kết quả tìm kiếm */}
              {searchResult ? (
                <div className="card border-success">
                  <div className="card-header bg-success text-white">
                    <h5 className="mb-0">Kết quả tìm kiếm</h5>
                  </div>
                  <div className="card-body">
                    <div className="text-center">
                      <img 
                        src={searchResult.avatar} 
                        alt={`Avatar of ${searchResult.username}`}
                        style={{ 
                          width: '100px', 
                          height: '100px', 
                          borderRadius: '50%', 
                          objectFit: 'cover',
                          marginBottom: '1rem' 
                        }}
                      />
                      <h4>{searchResult.username}</h4>
                      <p className="text-muted">ID: {searchResult.id}</p>
                      <p className="text-muted">Password: {searchResult.password}</p>
                    </div>
                  </div>
                </div>
              ) : searchTerm && (
                <div className="card border-warning">
                  <div className="card-body text-center">
                    <h5 className="text-warning">Không tìm thấy kết quả</h5>
                    <p className="text-muted">Không có account nào với username: "{searchTerm}"</p>
                  </div>
                </div>
              )}

              {/* Hiển thị tất cả accounts */}
              <div className="mt-4">
                <h5>Danh sách tất cả Accounts:</h5>
                <div className="row">
                  {accounts.map(account => (
                    <div key={account.id} className="col-md-6 col-lg-4 mb-3">
                      <div className="card h-100">
                        <div className="card-body text-center">
                          <img 
                            src={account.avatar} 
                            alt={`Avatar of ${account.username}`}
                            style={{ 
                              width: '60px', 
                              height: '60px', 
                              borderRadius: '50%', 
                              objectFit: 'cover',
                              marginBottom: '0.5rem' 
                            }}
                          />
                          <h6>{account.username}</h6>
                          <small className="text-muted">ID: {account.id}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleAccountSearch;
