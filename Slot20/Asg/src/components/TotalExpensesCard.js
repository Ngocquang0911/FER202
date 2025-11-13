import React from 'react';
import './TotalExpensesCard.css';

const TotalExpensesCard = ({ total }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h6 className="card-title mb-2">Total of Expenses</h6>
        <div className="fs-4 fw-bold text-primary">{total.toLocaleString('vi-VN')} đ</div>
      </div>
    </div>
  );
};

export default TotalExpensesCard;
