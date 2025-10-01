import logo from '../assets/logofpt.png';

export default function Header() {
  return (
    <header className="bg-warning text-center py-3">
      {/* Logo từ assets */}
      <img
        src={logo}
        alt="FPT Logo"
        className="img-fluid mb-3"
        style={{ maxHeight: '150px' }}
      />

      {/* Navbar dòng giữa */}
      <nav className="nav justify-content-center">
        <a className="nav-link text-dark" href="#home">Home</a>
        <a className="nav-link text-dark" href="#about">About</a>
        <a className="nav-link text-dark" href="#contact">Contact</a>
      </nav>
    </header>
  );
}
