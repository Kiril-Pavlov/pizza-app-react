import React, {useContext} from 'react'
import {CartContext} from '../../context/cartContext'

const CartPage = () => {

  const{cartItems} = useContext(CartContext)

  return (
    <div>
      {cartItems.map(pizza =>(
        <div key={pizza.id}>
          <img src={pizza.image} alt={pizza.name}/>
          <h2>
            {pizza.name}
          </h2>
          <p>
            {pizza.price}
          </p>
          
        
        
        </div>
      ))}
    </div>
  )
}

export default CartPage