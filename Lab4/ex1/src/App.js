import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import EnhancedQuestionBank from './components/EnhancedQuestionBank';
import { ToastProvider } from './components/ToastComponent';
import { ModalProvider } from './components/ModalComponent';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <ToastProvider>
      <ModalProvider>
        <div className="App">
          <Container fluid className="py-4">
            <div className="text-center mb-5">
              <h1 className="display-4 text-primary">Lab 4 - Homework</h1>
              <p className="lead">useReducer Hook Exercises - 3 Bài tập chính</p>
              <hr />
            </div>

            {/* Exercise 3: Login Form */}
            <Row className="mb-5">
              <Col>
                <div className="p-4 border rounded shadow-sm">
                  <h2 className="mb-4 text-primary">Exercise 3: Login Form</h2>
                  <LoginForm />
                </div>
              </Col>
            </Row>

            {/* Exercise 4: Sign Up Form */}
            <Row className="mb-5">
              <Col>
                <div className="p-4 border rounded shadow-sm">
                  <h2 className="mb-4 text-primary">Exercise 4: Sign Up Form</h2>
                  <SignUpForm />
                </div>
              </Col>
            </Row>

            {/* Exercise 6: Enhanced Question Bank */}
            <Row className="mb-5">
              <Col>
                <div className="p-4 border rounded shadow-sm">
                  <h2 className="mb-4 text-primary">Exercise 6: Enhanced Question Bank</h2>
                  <EnhancedQuestionBank />
                </div>
              </Col>
            </Row>

            <footer className="mt-5 py-4 text-center text-muted">
              <p>Lab 4 - Homework | Created by traltb@fe.edu.vn</p>
            </footer>
          </Container>
        </div>
      </ModalProvider>
    </ToastProvider>
  );
}

export default App;