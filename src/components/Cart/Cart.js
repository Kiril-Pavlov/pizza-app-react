import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  console.log(cartItems)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        padding: 20,
        zIndex: 2,
        backgroundColor: "white",
        border: "1px solid black",
      }}
    >
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {" "}
        Cart{" "}
      </div>

      <div
        style={{
          display: !isOpen ? "none" : "block",
        }}
      >
        {cartItems.map((pizza) => (
          <div key={pizza.id + pizza.selectedPizzaSize}>
            <h2>
              {pizza.name} <button onClick={() => removeFromCart(pizza.id, pizza.selectedPizzaSize)}>❌</button>
            </h2>
            <h2>
              {pizza.selectedPizzaSize}
            </h2>
            <div>
              {pizza.selectedPizzaSize === "мала" &&
                "Price:" +
                  pizza.priceSmall * pizza.quantity +
                  "den  -  " +
                  pizza.quantity}
            </div>
            <div>
              {pizza.selectedPizzaSize === "голема" &&
                "Price" +
                  pizza.priceBig * pizza.quantity +
                  "den  -  " +
                  pizza.quantity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;