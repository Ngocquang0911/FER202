import React, { useState } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';

// Danh sách accounts mẫu
const accounts = [
  { id: 1, username: 'john_doe', password: 'password123', avatar: '👨‍💼' },
  { id: 2, username: 'jane_smith', password: 'mypassword', avatar: '👩‍💻' },
  { id: 3, username: 'bob_wilson', password: 'secretpass', avatar: '👨‍🎨' },
  { id: 4, username: 'alice_brown', password: 'alice123', avatar: '👩‍🔬' },
  { id: 5, username: 'charlie_davis', password: 'charlie456', avatar: '👨‍🚀' },
];

function AccountSearch() {
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
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header>
              <h3 className="text-center">Tìm kiếm Account</h3>
            </Card.Header>
            <Card.Body>
              {/* Form tìm kiếm */}
              <Form onSubmit={handleSearch} className="mb-4">
                <Row>
                  <Col md={8}>
                    <Form.Control
                      type="text"
                      placeholder="Nhập username để tìm kiếm..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </Col>
                  <Col md={4}>
                    <div className="d-flex gap-2">
                      <Button variant="primary" type="submit" className="flex-fill">
                        Tìm kiếm
                      </Button>
                      <Button variant="secondary" onClick={handleReset} className="flex-fill">
                        Reset
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>

              {/* Hiển thị kết quả tìm kiếm */}
              {searchResult ? (
                <Card className="border-success">
                  <Card.Header className="bg-success text-white">
                    <h5 className="mb-0">Kết quả tìm kiếm</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-center">
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        {searchResult.avatar}
                      </div>
                      <h4>{searchResult.username}</h4>
                      <p className="text-muted">ID: {searchResult.id}</p>
                      <p className="text-muted">Password: {searchResult.password}</p>
                    </div>
                  </Card.Body>
                </Card>
              ) : searchTerm && (
                <Card className="border-warning">
                  <Card.Body className="text-center">
                    <h5 className="text-warning">Không tìm thấy kết quả</h5>
                    <p className="text-muted">Không có account nào với username: "{searchTerm}"</p>
                  </Card.Body>
                </Card>
              )}

              {/* Hiển thị tất cả accounts */}
              <div className="mt-4">
                <h5>Danh sách tất cả Accounts:</h5>
                <Row>
                  {accounts.map(account => (
                    <Col md={6} lg={4} key={account.id} className="mb-3">
                      <Card className="h-100">
                        <Card.Body className="text-center">
                          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                            {account.avatar}
                          </div>
                          <h6>{account.username}</h6>
                          <small className="text-muted">ID: {account.id}</small>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AccountSearch;
