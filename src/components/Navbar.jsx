import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">WanderWise</div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/destinations">Destinations</a>
      </div>
    </nav>
  );
}

export default Navbar;