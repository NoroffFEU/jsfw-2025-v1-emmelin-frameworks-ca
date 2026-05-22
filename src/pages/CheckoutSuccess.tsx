import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

function CheckoutSuccess() {

  return (
    <main className={styles.cartPage}>
      <h1>Order successful!</h1>
      <p>Thank you for your purchase.</p>

      <Link to="/">Back to store</Link>
    </main>
  );
}

export default CheckoutSuccess;
