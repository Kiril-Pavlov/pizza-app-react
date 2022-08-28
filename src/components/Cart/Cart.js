import React, { useContext, useState, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { CartContext } from "../../context/cartContext";

import "./Cart.css"

const Cart = () => {
  const { cartItems, removeFromCart, emptyCart } = useContext(CartContext);
  console.log(cartItems);
  const [isOpen, setIsOpen] = useState(false);

  const cartRef = useRef();
  useClickOutside(cartRef, () => setIsOpen(false));

  function handleOrder() {
    // axios
    //   .post("backendURL", {
    //     cartItems: cartItems,
    //   })
    //   .then(function () {
    //     emptyCart();
    //    setIsOpen(false);
    //    alert('Fala sto kupuvate kaj nas')
    //   })
    //   .catch((error) => console.log(error));

    setTimeout(() => {
      emptyCart();
      setIsOpen(false);
      alert("Fala sto kupuvate kaj nas");
    }, 1000);
  }
  console.log(cartItems);
  return (
    <div>
      {isOpen && (
        <div className="cart-open-background"></div>
      )}
      <div
        ref={cartRef}
        className="cart-closed">
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="content-closed"
        >
          Cart <span>{cartItems.length && cartItems.length}</span>
        </div>

        <div
          style={{
            display: !isOpen ? "none" : "block",
          }}
        >
          {cartItems.map((pizza) => (
            <div key={pizza.id + pizza.selectedPizzaSize} className="cart-opened">
              <h2 className="cart-pizza-name">
                {pizza.name}{" "}
                <button
                  onClick={() =>
                    removeFromCart(pizza.id, pizza.selectedPizzaSize)
                  }
                >
                  ❌
                </button>
              </h2>
              <p className="cart-pizza-selected-size">Size: {pizza.selectedPizzaSize}</p>
              <div>
                {pizza.selectedPizzaSize === "мала" &&
                  "Price: " +
                  pizza.priceSmall +
                  "den.  * " +
                  pizza.quantity}
              </div>
              <div>
                {pizza.selectedPizzaSize === "голема" &&
                  "Price: " +
                  pizza.priceBig +
                  "den.  * " +
                  pizza.quantity}
              </div>
            </div>
          ))}

          {/* <div className="cart-total-price">
            {cartItems.reduce((total,item)=total+(item.priceBig*item.quantity),0}
          </div> */}
          <button onClick={handleOrder} className="cart-order-button">Order all</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
