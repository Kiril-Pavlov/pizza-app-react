import React, { useState, createContext } from "react";

const CartContext = createContext();

const pizzaProducts = [
  {
    id: "1",
    name: "capricciosa",
    image:
      "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 250,
  },
  {
    id: "2",
    name: "Americana",
    image:
      "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 150,
  },
  {
    id: "3",
    name: "Napolitana",
    image:
      "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 350,
  },
  {
    id: "4",
    name: "Makedonska",
    image:
      "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 450,
  },
];



const CartProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState([])
  
  const addToCart = (id) => {
    const pizzaToAdd = pizzaProducts.find((pizza) => pizza.id === id)
    const pizzaCartItems = [pizzaToAdd, ...cartItems];
    setcartItems(pizzaCartItems)
  }

  const value = { pizzaProducts, addToCart, cartItems };//props
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };