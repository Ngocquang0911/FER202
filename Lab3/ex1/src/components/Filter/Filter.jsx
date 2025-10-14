import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import './Filter.css';

export default function Filter({ 
  searchTerm, 
  onSearchChange, 
  yearFilter, 
  onYearFilterChange, 
  sortBy, 
  onSortChange 
}) {
  return (
    <Card className="mb-4 filter-card">
      <Card.Body>
        <Row>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search by title or description..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Filter by Year</Form.Label>
              <Form.Select
                value={yearFilter}
                onChange={(e) => onYearFilterChange(e.target.value)}
              >
                <option value="all">All Years</option>
                <option value="<=2000">≤ 2000</option>
                <option value="2001-2015">2001 - 2015</option>
                <option value=">2015"> 2015</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Sort by</Form.Label>
              <Form.Select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
              >
                <option value="">Default</option>
                <option value="year-asc">Year ↑</option>
                <option value="year-desc">Year ↓</option>
                <option value="title-asc">Title A→Z</option>
                <option value="title-desc">Title Z→A</option>
                <option value="duration-asc">Duration ↑</option>
                <option value="duration-desc">Duration ↓</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}