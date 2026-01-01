import plants from "../data/plants";

function ProductPage({ addToCart }) {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="product-grid">
            {plants
              .filter(p => p.category === category)
              .map(plant => (
                <div className="card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button onClick={() => addToCart(plant)}>
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

export default ProductPage;
