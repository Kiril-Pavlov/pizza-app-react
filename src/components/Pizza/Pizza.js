import React, { useContext } from "react";
import { Navigate, useParams } from "react-router";
import { CartContext } from "../../context/cartContext";



function Pizza() {
  const { pizzaName } = useParams();
  const { pizzaProducts } = useContext(CartContext);

  let pizzas = pizzaProducts.map((pizza) => pizza.name.toLowerCase());

  console.log("here",pizzaProducts)

  if (!pizzas.includes(pizzaName.toLowerCase())) {
    return <Navigate to={"pizza"} replace />;
  }

  return <div>
     {pizzaName}
     <img src={pizzaProducts.image} alt="" />
     
     
     </div>;
}

export default Pizza;
