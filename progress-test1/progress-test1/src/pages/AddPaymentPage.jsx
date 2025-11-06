import React, { useState } from 'react';
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { usePayment } from '../contexts/PaymentContext.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import NavigationHeader from '../components/NavigationHeader';

const AddPaymentPage = () => {
  const navigate = useNavigate();
  const { addPayment } = usePayment();
  const { user } = useAuth();

  const [form, setForm] = useState({
    semester: '',
    courseName: '',
    amount: '',
    date: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      amount: Number(form.amount),
      userId: user?.id,
    };
    const res = await addPayment(payload);
    if (res.success) {
      navigate('/home');
    }
  };

  return (
    <>
      <NavigationHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="shadow-sm">
              <Card.Header as="h5">Add Payment</Card.Header>
              <Card.Body>
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Semester</Form.Label>
                    <Form.Control name="semester" value={form.semester} onChange={onChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Course</Form.Label>
                    <Form.Control name="courseName" value={form.courseName} onChange={onChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" name="amount" value={form.amount} onChange={onChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date" value={form.date} onChange={onChange} required />
                  </Form.Group>
                  <div className="d-flex gap-2">
                    <Button type="submit" variant="primary" style={{ flex: 1 }}>Save</Button>
                    <Button type="button" variant="secondary" style={{ flex: 1 }} onClick={() => navigate(-1)}>Cancel</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddPaymentPage;
