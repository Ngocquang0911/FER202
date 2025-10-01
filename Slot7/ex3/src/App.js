import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Navbar */}
      <Navbar />

      {/* Grid layout */}
      <div className="container text-center my-4">
        <div className="row mb-3">
          <div className="col border p-3">First col</div>
          <div className="col border p-3">Second col</div>
        </div>
        <div className="row mb-3">
          <div className="col border p-3">col</div>
          <div className="col border p-3">col</div>
          <div className="col border p-3">col</div>
        </div>
        <div className="row mb-3">
          <div className="col border p-3">col</div>
          <div className="col border p-3">col</div>
          <div className="col border p-3">col</div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
