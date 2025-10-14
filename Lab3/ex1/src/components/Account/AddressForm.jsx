import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function AddressForm({ formData, onChange, errors, onPrevious, onFinish }) {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <i className="bi bi-geo-alt me-2" style={{ fontSize: '1.5rem' }}></i>
        <h4 className="mb-0">Address Information</h4>
      </div>
      
      <Form.Group className="mb-3">
        <Form.Label>Street *</Form.Label>
        <Form.Control
          type="text"
          name="street"
          value={formData.street || ''}
          onChange={onChange}
          isInvalid={errors.street}
          placeholder="Enter street address"
        />
        <Form.Control.Feedback type="invalid">
          {errors.street}
        </Form.Control.Feedback>
      </Form.Group>
      
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>City *</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formData.city || ''}
              onChange={onChange}
              isInvalid={errors.city}
              placeholder="Enter city"
            />
            <Form.Control.Feedback type="invalid">
              {errors.city}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Country *</Form.Label>
            <Form.Select
              name="country"
              value={formData.country || ''}
              onChange={onChange}
              isInvalid={errors.country}
            >
              <option value="">Select country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Other">Other</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.country}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      
      <Form.Group className="mb-4">
        <Form.Label>Zip Code *</Form.Label>
        <Form.Control
          type="text"
          name="zipCode"
          value={formData.zipCode || ''}
          onChange={onChange}
          isInvalid={errors.zipCode}
          placeholder="Enter zip code"
        />
        <Form.Control.Feedback type="invalid">
          {errors.zipCode}
        </Form.Control.Feedback>
      </Form.Group>
      
      <div className="d-flex justify-content-between">
        <Button variant="secondary" onClick={onPrevious}>
          Previous
        </Button>
        <Button variant="success" onClick={onFinish}>
          Finish
        </Button>
      </div>
    </div>
  );
}