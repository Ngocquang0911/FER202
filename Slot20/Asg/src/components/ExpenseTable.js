import React from 'react';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
};


const ExpenseTable = ({ expenses, onEdit, onDelete, tableClass }) => {
  return (
    <div>
      <h6 className="card-title mb-2">Expense Management</h6>
      <div className="table-responsive">
          <table className={`table table-bordered align-middle mb-0 ${tableClass || ''}`}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
                <th style={{width:70}}>Edit</th>
                <th style={{width:70}}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {expenses.length === 0 ? (
                <tr><td colSpan={6} className="text-center">No expenses</td></tr>
              ) : expenses.map(exp => (
                <tr key={exp.id}>
                  <td>{exp.name}</td>
                  <td>{Number(exp.amount).toLocaleString('vi-VN')} đ</td>
                  <td>{exp.category}</td>
                  <td>{formatDate(exp.date)}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      style={{
                        background: '#ffe082',
                        color: '#333',
                        fontWeight: 600,
                        borderRadius: 6,
                        border: 'none',
                        minWidth: 60
                      }}
                      onClick={() => onEdit(exp)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      style={{
                        background: '#ef5350',
                        color: '#fff',
                        fontWeight: 600,
                        borderRadius: 6,
                        border: 'none',
                        minWidth: 60
                      }}
                      onClick={() => onDelete(exp)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default ExpenseTable;
