import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { useCart } from "../context/useCart";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const hasDiscount = product.discountedPrice < product.price;

  const discountPercentage = Math.round(
    ((product.price - product.discountedPrice) / product.price) * 100,
  );

  return (
    <article>
      <Link to={`/product/${product.id}`} className={styles.card}>
        {hasDiscount && (
          <span className={styles.discountBadge}>{discountPercentage}%</span>
        )}

        <img
          src={product.image.url}
          alt={product.image.alt || product.title}
          className={styles.image}
        />

        <div className={styles.content}>
          <h2>{product.title}</h2>
          <p className={styles.rating}>⭐ {product.rating}</p>
          <div className={styles.priceBox}>
            {hasDiscount ? (
              <>
                <span className={styles.discountedPrice}>
                  {product.discountedPrice} kr
                </span>
                <span className={styles.originalPrice}>{product.price} kr</span>
              </>
            ) : (
              <span className={styles.discountedPrice}>{product.price} kr</span>
            )}
          </div>
        </div>
      </Link>
      <button
        className={styles.addButton}
        onClick={(e) => {
          e.preventDefault();
          addToCart(product);
        }}
      >
        Add to Cart
      </button>
    </article>
  );
}
