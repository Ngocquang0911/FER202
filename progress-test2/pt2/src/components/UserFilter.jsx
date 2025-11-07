import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const UserFilter = ({ filters, onChange }) => {
  const handleInput = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <Row className="mb-3">
      <Col md={4} className="mb-2">
        <Form.Control
          placeholder="Search by username, fullname or email"
          name="search"
          value={filters.search}
          onChange={handleInput}
        />
      </Col>
      <Col md={2} className="mb-2">
        <Form.Select name="role" value={filters.role} onChange={handleInput}>
          <option value="all">All roles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </Form.Select>
      </Col>
      <Col md={2} className="mb-2">
        <Form.Select name="status" value={filters.status} onChange={handleInput}>
          <option value="all">All status</option>
          <option value="active">Active</option>
          <option value="locked">Locked</option>
        </Form.Select>
      </Col>
      <Col md={2} className="mb-2">
        <Form.Select name="sort" value={filters.sort} onChange={handleInput}>
          <option value="id_asc">ID ▲</option>
          <option value="id_desc">ID ▼</option>
          <option value="username_asc">Username ▲</option>
          <option value="username_desc">Username ▼</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default UserFilter;
