import React, { useContext, useState } from "react";
import { Navigate, useParams } from "react-router";
import { CartContext } from "../../context/cartContext";

import "./Pizza.css"

function Pizza() {
  const { pizzaName } = useParams();
  const { pizzaProducts, addToCart } = useContext(CartContext);

  const currentPizza = pizzaProducts.find(
    (e) => e.name.toLowerCase() === pizzaName.toLowerCase()
  );

  const [currentPrice, setCurrentPrice] = useState(
    (currentPizza && currentPizza.priceSmall) || ""
  );
  const [counter, setCounter] = useState(1);
  const [pizzaSize, setPizzaSize] = useState("мала");
  const pizzas = pizzaProducts.map((pizza) => pizza.name.toLowerCase());

  if (!pizzas.includes(pizzaName.toLowerCase())) {
    return <Navigate to={"pizza"} replace />;
  }

  return (
    <div key={currentPizza.id} className="pizza-page-container">
      <div className="pizza-page-image">
        <img src={currentPizza.image} alt={currentPizza.name} />
      </div>
      <div className="pizza-page-content">
        <h2 className="pizza-page-title">{currentPizza.name}</h2>
        <p className="pizza-page-ingredients">{currentPizza.ingredients}</p>
        <h4 className="pizza-page-prices">
          {currentPizza.priceSmall} ден - {currentPizza.priceBig} ден
        </h4>
        <hr />
        <p className="pizza-page-size">Size: </p>
        <div className="pizza-page-size-buttons">
          <button
            onClick={() => {
              setCurrentPrice(currentPizza.priceSmall);
              setPizzaSize("мала");
            }}
          >
            МАЛА
          </button>
          <button
            onClick={() => {
              setCurrentPrice(currentPizza.priceBig);
              setPizzaSize("голема");
            }}
          >
            ГОЛЕМА
          </button>
        </div>
        <h1 className="pizza-page-price-selected">{currentPrice} ден</h1>
        <div className="pizza-page-quantity-container">
          <span className="pizza-page-quantity-text">Quantity: </span>
          <span
            onClick={() => {
              if (counter > 1) {
                setCounter(counter - 1);
              }
            }}
            style={{ cursor: "pointer" }}
            className="pizza-page-quantity-buttons"
          >
            -
          </span>
          <span className="pizza-page-counter-value">{counter}</span>
          <span
            onClick={() => setCounter(counter + 1)}
            style={{ cursor: "pointer" }}
          >
            +
          </span>
        </div>
        <button
          id="order"
          className="pizza-page-buy-button"
          onClick={() => addToCart(currentPizza.id, counter, pizzaSize)}
        >
          Buy Pizza
        </button>
      </div>
    </div>
  );
}

export default Pizza;
