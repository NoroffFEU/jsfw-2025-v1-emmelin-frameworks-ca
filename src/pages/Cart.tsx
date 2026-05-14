import { useCart } from "../context/useCart";

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
    <main>
      <h1>Your Cart</h1>

      {cartItems.map((item) => (
        <article key={item.id}>
          <img
            src={item.image.url}
            alt={item.image.alt || item.title}
            width="100"
          />

          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.discountedPrice} kr</p>

          <div>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </article>
      ))}

      <h2>Total: ${cartTotal.toFixed(2)} kr</h2>

      <button onClick={clearCart}>Clear Cart</button>

      <button>Checkout</button>
    </main>
  );
}

export default Cart;
