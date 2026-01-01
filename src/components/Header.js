import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header className="header">
      <h2>🌿 Paradise Nursery</h2>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;
