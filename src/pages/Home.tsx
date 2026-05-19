import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import type { Product } from "../types/product";
import { ProductCard } from "../components/ProductCard";
import styles from "./Home.module.css";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Shop the latest products</h1>
        <p>Discover our newest arrivals and best deals</p>
      </section>
      <h2 className={styles.title}>Products</h2>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Home;
