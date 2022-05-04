import React, { useContext } from 'react'

import { CartContext } from '../../context/cartContext'

const HomePage = () => {
  const { pizzaProducts, addToCart, cartItems } = useContext(CartContext)
  console.log(cartItems);
  return (
    <div className='pizzas-container'>
      {pizzaProducts.map(pizza => (
        <div className='pizza-item' key={pizza.id}>
          <img src={pizza.image} alt={pizza.name} />
          <h2>{pizza.name}</h2>
          <p>Price: {pizza.price}</p>
          <button onClick={() => addToCart(pizza.id)}>Buy Pizza</button>
        </div>
      ))}


    </div>
  )
}

export default HomePage