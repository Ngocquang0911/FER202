import React, { useEffect, useMemo, useState } from 'react';
import { Container, Spinner, Alert, Image } from 'react-bootstrap';
import * as api from '../services/api';
import UserFilter from '../components/UserFilter';
import UserTable from '../components/UserTable';
import ConfirmModal from '../components/ConfirmModal';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({ search: '', role: 'all', status: 'all', sort: 'username_asc' });

  // Modal state
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await api.getUsers();
        setUsers(data || []);
      } catch (err) {
        setError(err.message || 'Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  // Derived filtered list
  const filtered = useMemo(() => {
    const s = (filters.search || '').toLowerCase().trim();
    let list = users.slice();

    if (s) {
      list = list.filter((u) => {
        return (
          (u.username && u.username.toLowerCase().includes(s)) ||
          (u.fullName && u.fullName.toLowerCase().includes(s)) ||
          (u.email && u.email.toLowerCase().includes(s))
        );
      });
    }

    if (filters.role && filters.role !== 'all') {
      list = list.filter((u) => u.role === filters.role);
    }

    if (filters.status && filters.status !== 'all') {
      list = list.filter((u) => u.status === filters.status);
    }

    if (filters.sort === 'id_asc') {
      list.sort((a, b) => (Number(a.id) || 0) - (Number(b.id) || 0));
    } else if (filters.sort === 'id_desc') {
      list.sort((a, b) => (Number(b.id) || 0) - (Number(a.id) || 0));
    } else if (filters.sort === 'username_asc') {
      list.sort((a, b) => (a.username || '').localeCompare(b.username || ''));
    } else if (filters.sort === 'username_desc') {
      list.sort((a, b) => (b.username || '').localeCompare(a.username || ''));
    }

    return list;
  }, [users, filters]);

  const handleFilterChange = (next) => {
    setFilters((prev) => ({ ...prev, ...next }));
  };

  const handleView = (user) => {
    setSelectedUser(user);
    setConfirmAction('view');
    setShowConfirm(true);
  };

  const handleBanClick = (user) => {
    setSelectedUser(user);
    setConfirmAction('ban');
    setShowConfirm(true);
  };

  const handleUnlockClick = (user) => {
    setSelectedUser(user);
    setConfirmAction('unlock');
    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    if (!selectedUser) {
      setShowConfirm(false);
      return;
    }

    if (confirmAction === 'ban') {
      try {
        // Set status to locked
        const updated = await api.updateUser(selectedUser.id, { status: 'locked' });
        setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
      } catch (err) {
        setError(err.message || 'Failed to ban user');
      }
    } else if (confirmAction === 'unlock') {
      try {
        // Set status to active
        const updated = await api.updateUser(selectedUser.id, { status: 'active' });
        setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
      } catch (err) {
        setError(err.message || 'Failed to unlock user');
      }
    }

    // For view, just close modal
    setShowConfirm(false);
    setSelectedUser(null);
    setConfirmAction(null);
  };

  const handleHideModal = () => {
    setShowConfirm(false);
    setSelectedUser(null);
    setConfirmAction(null);
  };

  return (
    <Container className="mt-3">
      <h3>User Management</h3>

      {error && <Alert variant="danger">{error}</Alert>}

      <UserFilter filters={filters} onChange={handleFilterChange} />

      {loading ? (
        <div className="text-center mt-4">
          <Spinner animation="border" />
        </div>
      ) : (
        <UserTable users={filtered} onView={handleView} onBan={handleBanClick} onUnlock={handleUnlockClick} />
      )}

      <ConfirmModal
        show={showConfirm}
        title={
          confirmAction === 'ban'
            ? 'Ban Account'
            : confirmAction === 'unlock'
            ? 'Unlock Account'
            : 'User Details'
        }
        message={
          confirmAction === 'ban'
            ? `Bạn có chắc muốn khóa tài khoản của "${selectedUser?.username}" không?`
            : confirmAction === 'unlock'
            ? `Bạn có chắc muốn mở khóa tài khoản của "${selectedUser?.username}" không?`
            : selectedUser
            ? (
                <div>
                  <div className="text-center mb-3">
                    {selectedUser.avatar ? (
                      <Image src={selectedUser.avatar} roundedCircle width={80} height={80} alt="avatar" />
                    ) : (
                      <div style={{ width: 80, height: 80, background: '#ddd', borderRadius: '50%', margin: '0 auto' }} />
                    )}
                  </div>
                  <p>
                    <strong>Username:</strong> {selectedUser.username}
                  </p>
                  <p>
                    <strong>Full name:</strong> {selectedUser.fullName}
                  </p>
                  <p>
                    <strong>Role:</strong> {selectedUser.role}
                  </p>
                  <p>
                    <strong>Status:</strong> {selectedUser.status}
                  </p>
                </div>
              )
            : ''
        }
        onConfirm={handleConfirm}
        onHide={handleHideModal}
      />
    </Container>
  );
};

export default UserList;
