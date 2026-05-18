import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";

function CheckoutSuccess() {
  const { clearCart } = useCart();

  function handleClearCart() {
    clearCart();
  }

  return (
    <main>
      <h1>Order successfull!</h1>
      <p>Thank you for your purchase.</p>

      <Link to="/" onClick={handleClearCart}>
        Back to store
      </Link>
    </main>
  );
}

export default CheckoutSuccess;
