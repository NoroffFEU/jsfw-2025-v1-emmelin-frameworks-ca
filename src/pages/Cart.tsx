import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import styles from "./Cart.module.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className={styles.cartPage}>
        <div className={styles.emptyCart}>
          Your cart is empty.
          <Link to="/" className={styles.emptyCartLink}>
            Back to store
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className={styles.cartPage}>
      <section className={styles.cartContainer}>
        <div>
          <h1 className={styles.title}>Your Cart</h1>

          <div className={styles.cartItems}>
            {cartItems.map((item) => {
              const hasDiscount = item.discountedPrice < item.price;

              return (
                <article key={item.id} className={styles.cartItem}>
                  <img
                    className={styles.itemImage}
                    src={item.image.url}
                    alt={item.image.alt || item.title}
                    width="100"
                  />

                  <div className={styles.itemInfo}>
                    <h2>{item.title}</h2>

                    <div className={styles.priceBox}>
                      {hasDiscount && (
                        <span className={styles.originalPrice}>
                          {(item.price * item.quantity).toFixed(2)} kr
                        </span>
                      )}
                      <span
                        className={
                          hasDiscount
                            ? styles.discountedPrice
                            : styles.normalPrice
                        }
                      >
                        {(item.discountedPrice * item.quantity).toFixed(2)} kr
                      </span>
                    </div>

                    <div className={styles.itemActions}>
                      <div className={styles.quantityControls}>
                        <button onClick={() => decreaseQuantity(item.id)}>
                          {" "}
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className={styles.removeButton}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className={styles.summary}>
          <h2>Total: {cartTotal.toFixed(2)} kr</h2>

          <div>
            <Link to="/checkout-success" className={styles.checkoutButton}>
              Checkout
            </Link>
            <button className={styles.clearButton} onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cart;
