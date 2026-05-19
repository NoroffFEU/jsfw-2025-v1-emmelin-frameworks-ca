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
    return <div>Your cart is empty.</div>;
  }

  return (
    <main className={styles.cartPage}>
      <section className={styles.cartContainer}>
        <div>
          <h1 className={styles.title}>Your Cart</h1>

          <div className={styles.cartItems}>
            {cartItems.map((item) => {
              const hasDiscount = item.discountedPrice < item.price;
              const itemTotal = item.discountedPrice * item.quantity;

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
                    <p>{item.description}</p>

                    <div className={styles.priceBox}>
                      {hasDiscount && (
                        <span className={styles.originalPrice}>
                          {item.price.toFixed(2)} kr
                        </span>
                      )}
                      <span className={styles.discountedPrice}>
                        {item.discountedPrice.toFixed(2)} kr
                      </span>
                    </div>

                    <p className={styles.itemTotal}>
                      Total: {itemTotal.toFixed(2)} kr
                    </p>

                    <div className={styles.quantityControls}>
                      <button onClick={() => decreaseQuantity(item.id)}>
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
                </article>
              );
            })}
          </div>
        </div>

        <div className={styles.summary}>
          <h2>Total: {cartTotal.toFixed(2)} kr</h2>

          <div className={styles.actions}>
            <button onClick={clearCart}>Clear Cart</button>

            <Link to="/checkout-success">Checkout</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cart;
