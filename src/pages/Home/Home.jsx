import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext'

import "./Home.css"

const HomePage = () => {
  const { pizzaProducts, addToCart, cartItems } = useContext(CartContext)
  console.log(cartItems);
  return (
    <div className='pizzas-container'>
      {pizzaProducts.map(pizza => (
        <div key={pizza.id} className="pizza-item">
          <div className='price-tag'>
            {pizza.priceSmall} ден. - {pizza.priceBig} ден.
          </div>
          <Link to={pizza.name}>
            <img src={pizza.image} alt={pizza.name} />
          </Link>
          <h2 className='pizza-item-name'>{pizza.name}</h2>
          <p className='pizza-item-ingredients'>{pizza.ingredients}</p>
          <Link to={pizza.name} className="pizza-item-button-link">
            <button className='pizza-item-button'>Buy Pizza</button>
          </Link>
        </div>
      ))}



    </div>
  )
}

export default HomePage