
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import TotalExpensesCard from '../components/TotalExpensesCard';
import FilterCard from '../components/FilterCard';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import Footer from '../components/Footer';
import '../pages/Dashboard.css';
import {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
  getCategories
} from '../services/expenseService';

const HomePage = ({ user }) => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('');
  const [editing, setEditing] = useState(false);
  const [editExpense, setEditExpense] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    setLoading(true);
    const res = await getExpenses(user.id);
    setExpenses(res.data);
    setLoading(false);
  };

  const fetchCategories = async () => {
    const cats = await getCategories(user.id);
    setCategories(cats);
  };

  useEffect(() => {
    fetchExpenses();
  // eslint-disable-next-line
  }, [user.id]);

  useEffect(() => {
    fetchCategories();
  }, [expenses]);

  const handleAdd = async (data) => {
    await addExpense({ ...data, userId: user.id });
    fetchExpenses();
  };

  const handleEdit = (exp) => {
    setEditing(true);
    setEditExpense(exp);
  };

  const handleUpdate = async (data) => {
    await updateExpense(editExpense.id, { ...data, userId: user.id });
    setEditing(false);
    setEditExpense(null);
    fetchExpenses();
  };

  const handleDelete = async (exp) => {
    if (!exp || !exp.id) {
      alert('Expense ID is invalid!');
      return;
    }
    if (window.confirm('Do you really want to delete this expense?')) {
      try {
        await deleteExpense(exp.id);
        fetchExpenses();
      } catch (err) {
        alert('Delete failed: ' + (err?.response?.status || err.message));
        console.error('Delete error:', err);
      }
    }
  };

  const handleReset = () => {
    setEditing(false);
    setEditExpense(null);
  };

  const filteredExpenses = filter
    ? expenses.filter(e => e.category === filter)
    : expenses;

  const total = filteredExpenses.reduce((sum, e) => sum + Number(e.amount), 0);

  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Header user={user} onLogout={handleLogout} />
      <main className="container py-4 flex-grow-1 dashboard-main">
        <div className="row g-3">
          <div className="col-md-3">
            <div className="dashboard-card">
              <TotalExpensesCard total={total} />
            </div>
            <div className="dashboard-card">
              <ExpenseForm
                onSubmit={editing ? handleUpdate : handleAdd}
                categories={categories}
                editing={editing}
                onReset={handleReset}
                initial={editExpense}
              />
            </div>
          </div>
          <div className="col-md-9">
            <div className="row g-3">
              <div className="col-md-4">
                <div className="dashboard-card">
                  <FilterCard
                    category={filter}
                    setCategory={setFilter}
                    categories={categories}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="dashboard-card">
                  <ExpenseTable
                    expenses={filteredExpenses}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    tableClass="dashboard-table"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="dashboard-footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
