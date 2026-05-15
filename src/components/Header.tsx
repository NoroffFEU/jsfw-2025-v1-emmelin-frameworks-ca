import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import styles from "./Header.module.css";

function Header() {
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/" className={styles.link}>
          Products
        </Link>
        <Link to="/cart" className={styles.cart}>
          Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
