import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { getPaymentById } from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import NavigationHeader from '../components/NavigationHeader';

const formatVND = (n) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(n) || 0);

const PaymentDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [payment, setPayment] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const data = await getPaymentById(id);
        setPayment(data);
      } catch (e) {
        setError(e.message || 'Failed to load payment');
      }
    })();
  }, [id]);

  return (
    <>
      <NavigationHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="shadow-sm">
              <Card.Header as="h5">Payment Details</Card.Header>
              <Card.Body>
                {error && <div className="text-danger mb-2">{error}</div>}
                {payment ? (
                  <div>
                    <p><strong>ID:</strong> {payment.id}</p>
                    <p><strong>Semester:</strong> {payment.semester}</p>
                    <p><strong>Course:</strong> {payment.courseName}</p>
                    <p><strong>Amount:</strong> {formatVND(payment.amount)}</p>
                    <p><strong>Date:</strong> {payment.date}</p>
                    <div className="d-flex gap-2">
                      <Button variant="secondary" onClick={() => navigate(-1)}>Back</Button>
                      <Button variant="warning" onClick={() => navigate(`/payments/${payment.id}/edit`)}>Edit</Button>
                    </div>
                  </div>
                ) : (
                  !error && <div>Loading...</div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaymentDetailsPage;
