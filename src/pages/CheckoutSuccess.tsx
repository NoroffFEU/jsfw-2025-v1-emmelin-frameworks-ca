import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

function CheckoutSuccess() {
  const { clearCart } = useCart();

  function handleClearCart() {
    clearCart();
  }

  return (
    <main className={styles.cartPage}>
      <h1>Order successfull!</h1>
      <p>Thank you for your purchase.</p>

      <Link to="/" onClick={handleClearCart}>
        Back to store
      </Link>
    </main>
  );
}

export default CheckoutSuccess;
