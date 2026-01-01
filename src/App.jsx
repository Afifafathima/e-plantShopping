import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AboutUs from "./pages/AboutUs";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === plant.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item completely
  const removeItem = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // Total cart count (for header)
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Router>
      <Header cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={<ProductPage addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              increase={increaseQuantity}
              decrease={decreaseQuantity}
              remove={removeItem}
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
