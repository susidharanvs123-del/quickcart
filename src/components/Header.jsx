import "../Header.css";

function Header({ cartCount, toggleCart }) {
  return (
    <header className="header">
      <h1>QuickCart</h1>

      <button onClick={toggleCart}>
        Cart ({cartCount})
      </button>
    </header>
  );
}

export default Header;