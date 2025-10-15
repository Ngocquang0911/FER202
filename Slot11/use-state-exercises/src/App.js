import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import all components
import CounterComponent from './components/CounterComponent';
import LightSwitch from './components/LightSwitch';
import SimpleLoginForm from './components/SimpleLoginForm';
import LoginForm2 from './components/LoginForm2';
import SimpleSearchItem from './components/SimpleSearchItem';
import SimpleAccountSearch from './components/SimpleAccountSearch';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="text-center py-4 bg-primary text-white mb-4">
          <h1>React useState Exercises</h1>
          <p className="lead">Các bài tập sử dụng useState Hook</p>
        </header>

        <div className="row">
          {/* Exercise 1: Counter Component */}
          <div className="col-12 col-lg-6 mb-4">
            <div className="card">
              <div className="card-header bg-info text-white">
                <h4>Exercise 1: Bộ đếm đa năng</h4>
              </div>
              <div className="card-body">
                <CounterComponent />
              </div>
            </div>
          </div>

          {/* Exercise 2: Light Switch */}
          <div className="col-12 col-lg-6 mb-4">
            <div className="card">
              <div className="card-header bg-warning text-dark">
                <h4>Exercise 2: Công tắc đèn</h4>
              </div>
              <div className="card-body">
                <LightSwitch />
              </div>
            </div>
          </div>

          {/* Exercise 3: Login Form */}
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-header bg-success text-white">
                <h4>Exercise 3: Form đăng nhập (Individual State)</h4>
              </div>
              <div className="card-body">
                <SimpleLoginForm />
              </div>
            </div>
          </div>

          {/* Exercise 4: Login Form 2 */}
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-header bg-secondary text-white">
                <h4>Exercise 4: Form đăng nhập (Object State)</h4>
              </div>
              <div className="card-body">
                <LoginForm2 />
              </div>
            </div>
          </div>

          {/* Exercise 5: Search Item */}
          <div className="col-12 col-lg-6 mb-4">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h4>Exercise 5: Tìm kiếm sản phẩm</h4>
              </div>
              <div className="card-body">
                <SimpleSearchItem />
              </div>
            </div>
          </div>

          {/* Exercise 6: Account Search */}
          <div className="col-12 col-lg-6 mb-4">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <h4>Exercise 6: Tìm kiếm Account</h4>
              </div>
              <div className="card-body">
                <SimpleAccountSearch />
              </div>
            </div>
          </div>

          {/* Exercise 7: Registration Form */}
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4>Exercise 7: Form đăng ký tài khoản</h4>
              </div>
              <div className="card-body">
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center py-4 bg-light mt-5">
          <p className="text-muted">React useState Hook Exercises - FER202</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
