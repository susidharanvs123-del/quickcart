import { useState } from "react";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import CartSidebar from "./components/CartSidebar.jsx";
import { products } from "./data/products.js";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // add to cart
  const addToCart = (product) => {
    const item = cart.find(i => i.id === product.id);

    if (item) {
      setCart(cart.map(i =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // remove item
  const removeFromCart = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  // update quantity
  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(cart.map(i =>
      i.id === id ? { ...i, quantity: qty } : i
    ));
  };

  // toggle cart
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // total items
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <Header cartCount={totalItems} toggleCart={toggleCart} />

      <ProductList products={products} addToCart={addToCart} />

      <CartSidebar
        isOpen={isCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        toggleCart={toggleCart}
      />
    </div>
  );
}

export default App;