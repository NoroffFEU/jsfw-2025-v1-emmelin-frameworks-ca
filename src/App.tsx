import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import ContactPage from "./pages/ContactPage";
import CheckoutSuccess from "./pages/CheckoutSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
