function CartPage({ cart, increase, decrease, remove }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>

      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => decrease(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => remove(item.id)}>Delete</button>
        </div>
      ))}

      <button>Checkout</button>
    </div>
  );
}

export default CartPage;
