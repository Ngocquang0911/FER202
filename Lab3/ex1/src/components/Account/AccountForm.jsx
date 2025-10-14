import React from 'react';
import { Form, Row, Col, InputGroup } from 'react-bootstrap';

export default function AccountForm({ formData, onChange, errors }) {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <i className="bi bi-lock me-2" style={{ fontSize: '1.5rem' }}></i>
        <h4 className="mb-0">Account Information</h4>
      </div>
      
      <Form.Group className="mb-3">
        <Form.Label>Username *</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <i className="bi bi-person"></i>
          </InputGroup.Text>
          <Form.Control
            type="text"
            name="username"
            value={formData.username || ''}
            onChange={onChange}
            isInvalid={errors.username}
            placeholder="Enter username"
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Password *</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-lock"></i>
              </InputGroup.Text>
              <Form.Control
                type="password"
                name="password"
                value={formData.password || ''}
                onChange={onChange}
                isInvalid={errors.password}
                placeholder="Enter password"
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password *</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-lock"></i>
              </InputGroup.Text>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword || ''}
                onChange={onChange}
                isInvalid={errors.confirmPassword}
                placeholder="Confirm password"
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Secret Question *</Form.Label>
            <Form.Control
              type="text"
              name="secretQuestion"
              value={formData.secretQuestion || ''}
              onChange={onChange}
              isInvalid={errors.secretQuestion}
              placeholder="Enter secret question"
            />
            <Form.Control.Feedback type="invalid">
              {errors.secretQuestion}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Answer *</Form.Label>
            <Form.Control
              type="text"
              name="secretAnswer"
              value={formData.secretAnswer || ''}
              onChange={onChange}
              isInvalid={errors.secretAnswer}
              placeholder="Enter answer"
            />
            <Form.Control.Feedback type="invalid">
              {errors.secretAnswer}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
}