import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

function Header() {
  const { cartItems } = useCart();

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>
    </header>
  );
}

export default Header;
