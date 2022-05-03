import React,{useContext} from 'react'

import {CartContext} from '../../context/cartContext'

const Home = () => {
  const {pizzaProducts, addToCart, cartItems} = useContext(CartContext)
  console.log(cartItems)

  return (
    <div>
      {pizzaProducts.map(pizza =>(
        <div key={pizza.id}>
          <img src={pizza.image} alt={pizza.name}/>
          <h2>
            {pizza.name}
          </h2>
          <p>
            {pizza.price}
          </p>
          <button onClick={() =>addToCart(pizza.id)}>
            Buy pizza
          </button>
        
        
        </div>
      ))}
    </div>
  )
}

export default Home