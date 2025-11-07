import React from 'react';
import { Table, Button, Image } from 'react-bootstrap';

const UserTable = ({ users = [], onView, onBan, onUnlock }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Avatar</th>
          <th>Username</th>
          <th>Full Name</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan={7} className="text-center">
              No users found
            </td>
          </tr>
        ) : (
          users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td style={{ width: 80 }}>
                {u.avatar ? (
                  <Image src={u.avatar} roundedCircle width={40} height={40} alt="avatar" />
                ) : (
                  <div style={{ width: 40, height: 40, background: '#ddd', borderRadius: '50%' }} />
                )}
              </td>
              <td>{u.username}</td>
              <td>{u.fullName}</td>
              <td>{u.role}</td>
              <td>{u.status}</td>
              <td>
                <div style={{ display: 'flex', gap: 8 }}>
                  <Button size="sm" variant="info" onClick={() => onView(u)}>
                    View Details
                  </Button>
                  {u.status === 'active' ? (
                    <Button size="sm" variant="danger" onClick={() => onBan(u)}>
                      Ban Account
                    </Button>
                  ) : (
                    <Button size="sm" variant="success" onClick={() => onUnlock(u)}>
                      Unlock
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default UserTable;
