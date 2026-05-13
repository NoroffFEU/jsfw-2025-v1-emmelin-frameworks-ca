import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import type { Product } from "../types/product";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <main>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image.url} alt={product.image.alt} width="200" />

            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
