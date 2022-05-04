import React, { useState, createContext } from "react";
import { Navigate } from "react-router";
import { pizzaProducts } from "../fakeData/pizzas";

const CartContext = createContext();


const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (id) => {
    const pizzaToAdd = pizzaProducts.find((pizza) => pizza.id === id);
    const pizzaCartItems = [pizzaToAdd, ...cartItems];
    setCartItems(pizzaCartItems);
  };

  const value = { pizzaProducts, cartItems, addToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
