import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h3>WanderWise</h3>

        <p>
          Explore destinations, discover attractions,
          and plan smarter trips with AI.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/destinations">Destinations</a>
        </div>

        <div className="footer-bottom">
          © 2026 WanderWise. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;