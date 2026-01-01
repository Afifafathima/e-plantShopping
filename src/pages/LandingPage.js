import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>
        Welcome to Paradise Nursery — your one-stop shop for beautiful,
        healthy houseplants that bring life and freshness into your home.
      </p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
