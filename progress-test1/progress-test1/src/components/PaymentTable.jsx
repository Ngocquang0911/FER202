import React from 'react';
import { Table, Button, Stack, Alert } from 'react-bootstrap';
import { usePayment } from '../contexts/PaymentContext.jsx';
import { useNavigate } from 'react-router-dom';

const formatVND = (n) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(n) || 0);

const PaymentTable = () => {
  const { displayedPayments, loading, error, deletePayment, totalAmount } = usePayment();
  const navigate = useNavigate();

  const onDelete = async (id) => {
    const ok = window.confirm('Delete this payment?');
    if (!ok) return;
    await deletePayment(id);
  };

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Semester</th>
            <th>Course</th>
            <th>Amount</th>
            <th style={{ width: 220 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4}>Loading...</td>
            </tr>
          ) : displayedPayments.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center">No payments</td>
            </tr>
          ) : (
            displayedPayments.map((p) => (
              <tr key={p.id}>
                <td>{p.semester}</td>
                <td>{p.courseName}</td>
                <td>{formatVND(p.amount)}</td>
                <td>
                  <Stack direction="horizontal" gap={2}>
                    <Button size="sm" variant="secondary" onClick={() => navigate(`/payments/${p.id}`)}>
                      View Details
                    </Button>
                    <Button size="sm" variant="warning" onClick={() => navigate(`/payments/${p.id}/edit`)}>
                      Edit
                    </Button>
                    <Button size="sm" variant="danger" onClick={() => onDelete(p.id)}>
                      Delete
                    </Button>
                  </Stack>
                </td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2} className="text-end"><strong>Total</strong></td>
            <td><strong>{formatVND(totalAmount)}</strong></td>
            <td />
          </tr>
        </tfoot>
      </Table>
      <div className="d-flex justify-content-end">
        <Button onClick={() => navigate('/payments/add')}>Add Payment</Button>
      </div>
    </>
  );
};

export default PaymentTable;
