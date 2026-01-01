import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="80" />

      <div className="cart-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Total: ${item.price * item.quantity}</p>
      </div>

      <div className="cart-controls">
        <button
          onClick={() =>
            dispatch(updateQuantity({ id: item.id, amount: -1 }))
          }
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() =>
            dispatch(updateQuantity({ id: item.id, amount: 1 }))
          }
        >
          +
        </button>
      </div>

      <button
        onClick={() => dispatch(removeItem(item.id))}
        className="delete-btn"
      >
        Delete
      </button>
    </div>
  );
}

export default CartItem;
