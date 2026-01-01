import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import plants from "../data/plants";

function ProductList() {
  const dispatch = useDispatch();

  // Get unique categories
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "15px",
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                  />

                  <h3>{plant.name}</h3>
                  <p>Price: ${plant.price}</p>

                  <button
                    onClick={() => dispatch(addItem(plant))}
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "#2e7d32",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
