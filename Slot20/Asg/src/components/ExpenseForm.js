
import React, { useState, useEffect } from 'react';

const initialState = { name: '', amount: '', category: '', date: '' };

const ExpenseForm = ({ onSubmit, categories, editing, onReset, initial }) => {
  const [form, setForm] = useState(initial || initialState);
  const [error, setError] = useState('');

  useEffect(() => {
    if (editing && initial) setForm(initial);
    else if (!editing) setForm(initialState);
  }, [editing, initial]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.category.trim() || !form.amount || isNaN(form.amount) || Number(form.amount) <= 0) {
      setError('Please enter valid Name, Category and Amount > 0');
      return;
    }
    setError('');
    onSubmit(form);
    if (!editing) setForm(initialState);
  };

  const handleReset = e => {
    e.preventDefault();
    setForm(initialState);
    setError('');
    if (onReset) onReset();
  };

  return (
    <div>
      <h6 className="card-title mb-3" style={{fontWeight:600}}>{editing ? 'Edit Expense' : 'Add Expense'}</h6>
      <form onSubmit={handleSubmit}>
        <div className="row mb-2">
          <div className="col-12 mb-2">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} />
          </div>
          <div className="col-6 mb-2">
            <label className="form-label">Amount</label>
            <input type="number" className="form-control" name="amount" value={form.amount} onChange={handleChange} />
          </div>
          <div className="col-6 mb-2">
            <label className="form-label">Category</label>
            <select className="form-select" name="category" value={form.category} onChange={handleChange}>
              <option value="">Select category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="col-12 mb-2">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" name="date" value={form.date} onChange={handleChange} />
          </div>
        </div>
        {error && <div className="alert alert-danger py-1">{error}</div>}
        <div className="d-flex gap-2 mt-2 justify-content-end">
          <button className="btn btn-outline-secondary px-4" onClick={handleReset} type="button">Reset</button>
          <button className={editing ? "btn btn-primary px-4" : "btn btn-primary px-4"} type="submit">{editing ? 'Save' : 'Add expense'}</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
