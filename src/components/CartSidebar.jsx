import "../styles/CartSidebar.css";
function CartSidebar({ isOpen, cart, removeFromCart, updateQuantity, toggleCart }) {
  return (
    <div style={{
      position: "fixed",
      right: isOpen ? "0" : "-300px",
      top: 0,
      width: "300px",
      height: "100%",
      background: "white",
      borderLeft: "1px solid #ccc",
      padding: "10px",
      transition: "0.3s"
    }}>
      <button onClick={toggleCart}>Close</button>

      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>${item.price}</p>

            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            {item.quantity}
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>

            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default CartSidebar;