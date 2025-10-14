import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default function AboutForm({ formData, onChange, errors }) {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <i className="bi bi-person-circle me-2" style={{ fontSize: '1.5rem' }}></i>
        <h4 className="mb-0">About Information</h4>
      </div>
      
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName || ''}
              onChange={onChange}
              isInvalid={errors.firstName}
              placeholder="Enter first name"
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName || ''}
              onChange={onChange}
              isInvalid={errors.lastName}
              placeholder="Enter last name"
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={onChange}
              isInvalid={errors.email}
              placeholder="Enter email address"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Phone *</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone || ''}
              onChange={onChange}
              isInvalid={errors.phone}
              placeholder="Enter phone number"
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Age *</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={formData.age || ''}
              onChange={onChange}
              isInvalid={errors.age}
              placeholder="Enter age"
              min="1"
              max="120"
            />
            <Form.Control.Feedback type="invalid">
              {errors.age}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              type="file"
              name="avatar"
              onChange={onChange}
              accept="image/*"
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
}